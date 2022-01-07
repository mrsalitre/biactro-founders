<template>
  <div>
    <div
      id="tokens"
    >
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:items-center lg:justify-between"
      >
      <div
          class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
        >
          <h2 
            class="text-4xl font-serif text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl xl:pr-2"
          >Tokens Disponibles</h2>
            <div class="mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <span v-for="(value, index) in availableTokens" :key="index" class="text-white text-center p-4 rounded-md text-sm md:text-base" :class="[value ? 'bg-biactro' : 'bg-gray-200']">{{ ('0000'+ (index + 1)).slice(-5) }}</span>
            </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ethers } from "ethers";
import abi from '../static/BiactroFoundersNFT.json'

export default {
  data() {
    return {
      contractAddress: '0x20dC99D6d38eF06637Bb77a910a65011CBBE9aaE',
      provider: null,
      currentAccount: null,
      availableTokens: []
    }
  },
  mounted() {
    for (let index = 0; index < 10000; index++) {
      this.availableTokens.push(true)
    }
    this.getMintenTokens()
  },
  methods: {
    getMintenTokens() {
      const contractABI = abi.abi
      const matic = {
        name: 'maticmum',
          chainId: 80001,
          _defaultProvider: (providers) => new providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/mTaSXw3JVbD7f3p7AnKUgsLL5c4Ls6QN')
      }
      const provider = ethers.getDefaultProvider(matic);
      provider.resetEventsBlock(0)
      try {
        const biactroWhiteListContract = new ethers.Contract(this.contractAddress, contractABI, provider);
        biactroWhiteListContract.on("Transfer", (_from, _to, _tokenId) => {
          this.$set(this.availableTokens,(_tokenId - 1).toString(),false);
        });
      }
      catch (error) {
        console.log(error);
      }
    }
  }
}
</script>