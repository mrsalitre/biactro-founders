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
            <TableRow
              v-for="(greeting, key) in reversedGreetings"
              :key="key"
              class="border block md:table-row"
              :greeting="greeting[0]"
              :wallet="greeting[1]"
            />
          </tbody>
        </table>
    </div>
  </div>
</template>
<script>
import { ethers } from "ethers";
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
      const contractAddress = '0x411fbfcC8147C96cc451E46fD0c3BA85B8817cDb'
      const contractABI = abiv001.abi
      try {
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const wavePortalContractv001 = new ethers.Contract(contractAddress, contractABI, signer);

          wavePortalContractv001.on('greeting', (_greeting, _wallet) => this.greetings.push([_greeting, _wallet, true]));

          const greetingsv001 = await wavePortalContractv001.getGreetings();

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