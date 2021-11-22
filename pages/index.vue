<template>
  <div>
    <WalletConnect />
    <div v-show="greetings.length" class="max-w-xl mx-auto px-3 sm:px-6 lg:px-8 py-12">
      <h2 class="lg:w-1/2 text-4xl text-gray-900 tracking-tight leading-10 font-bold font-serif sm:text-5xl sm:leading-none md:text-6xl xl:pr-2">Latest <span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600">greetings</span></h2>
      <table class="min-w-full border-collapse block md:table mt-8">
          <thead class="block md:table-header-group">
            <tr
              class="border border-grey-500 md:border-none block md:table-row hidden -top-full md:top-auto -left-full md:left-auto  md:relative "
            >
              <th
                class="p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell"
              >
                Address
              </th>
              <th
                class="p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell"
              >
                Greeting
              </th>
            </tr>
          </thead>
          <tbody class="block md:table-row-group">
            <tr
              v-for="(greeting, key) in reversedGreetings"
              :key="key"
              class="border block md:table-row"
            >
              <td
                class="p-2 text-sm md:text-base md:border md:border-grey-500 text-left block md:table-cell"
              >
                <span class="inline-block w-1/3 md:hidden font-bold">
                  address</span
                >{{ greeting[1] }}
              </td>
              <td
                class="p-2 text-sm md:text-base md:border md:border-grey-500 text-left block md:table-cell"
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >greeting</span
                >{{ greeting[0] }}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>
<script>
import { ethers } from "ethers";
import abiv000 from '../static/SayHi.v0.0.0.json'
import abiv001 from '../static/SayHi.v0.0.1.json'

export default {
  data() {
    return {
      greetings: [],
    };
  },
  computed: {
    reversedGreetings() {
      return this.greetings.slice(0).reverse()
    }
  },
  mounted() {
    this.getGreetings();
  },
  methods: {
    async getGreetings() {
      const contractAddress = '0xC2C0511dfCFd09a9d6D47ab85831B5703bAfbe21'
      const contractABI = abiv001.abi
      const lastContractAddress = '0x96282530B83B2721980933f7e5892afAE938C2Ec'
      const lastContractABI = abiv000.abi
      try {
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const wavePortalContractv000 = new ethers.Contract(lastContractAddress, lastContractABI, signer);
          const wavePortalContractv001 = new ethers.Contract(contractAddress, contractABI, signer);

          wavePortalContractv001.on('greeting', (_greeting, _wallet) => this.greetings.push([_greeting, _wallet]));

          const greetingsv000 = await wavePortalContractv000.getGreetings();
          const greetingsv001 = await wavePortalContractv001.getGreetings();

          for (const greeting of greetingsv000) {
            this.greetings.push(greeting);
          }
          for (const greeting of greetingsv001) {
            this.greetings.push(greeting);
          }
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>