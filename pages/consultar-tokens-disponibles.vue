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
      contractAddress: '0xe0C92112f20cc120649b29b6Ff51ED85D583A33b',
      provider: null,
      currentAccount: null,
      availableTokens: []
    }
  },
  async mounted() {
    if (this.$web3Modal.cachedProvider) {
      this.provider = await this.$web3Modal.connect();
      this.currentAccount = this.provider.selectedAddress;
      this.provider.on("accountsChanged", (accounts) => {
        this.currentAccount = accounts[0]
      });
    }
    for (let index = 0; index < 10000; index++) {
      this.availableTokens.push(true)
    }
    this.getMintenTokens()
  },
  methods: {
    getMintenTokens() {
      const contractABI = abi.abi
      const network = ethers.providers.getNetwork("rinkeby");
      let provider;
      if (this.provider) {
        provider = new ethers.providers.Web3Provider(this.provider);
        provider.resetEventsBlock(0)
      } else {
        provider = ethers.getDefaultProvider(network, { alchemy: 'https://eth-rinkeby.alchemyapi.io/v2/BT7pi_7fVKZ09UIm_uIpvU-iLAOcdfVJ' });
        provider.resetEventsBlock(0)
      }
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