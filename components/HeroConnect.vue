<template>
  <div class="min-h-screen flex flex-wrap">
    <div
      class="w-full flex flex-col justify-center max-w-screen-xl mx-auto px-4 lg:px-8 pt-12 pb-12 xl:py-0"
    >
      <h1
        class="lg:w-1/2 text-4xl text-gray-900 tracking-tight leading-10 font-bold font-serif sm:text-5xl sm:leading-none md:text-6xl xl:pr-6"
      >Futuros founders de Biactro: <br><span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">El futuro es hoy.</span></h1>
      <p
        class="lg:w-1/2 italic mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 lg:mx-0"
      >
      “No queremos dejar el futuro de nuestro planeta a las grandes empresas y lobbys, queremos dejarlo en tus manos.”
      </p>
      <p class="lg:w-1/2 mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 biactro-gradient">
        Hemos abierto la whitelist para futuros founders de Biactro. Apúntate a la lista cerrada de 900 miembros para tener acceso asegurado a tu certificado NFT <strong><span>único</span></strong> de la colección ‘Biactro Founders’.  
      </p>
      <div class="mt-8 sm:mt-8 sm:flex lg:justify-start">
        <div
          class="rounded-md shadow"
        >
          <button
            v-if="currentAccount === null"
            class="w-full flex items-center text-white justify-center px-8 py-3 border-2 border-biactro text-base leading-6 rounded-md font-semibold bg-biactro hover:bg-biactro-dark hover:border-biactro-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            @click="connectWallet()"
          >
            Conectar Cartera
          </button>
          <button
            v-else-if="currentAccount !== null"
            class="w-full flex items-center text-white justify-center px-8 py-3 border-2 border-biactro text-base leading-6 rounded-md font-semibold bg-biactro hover:bg-biactro-dark hover:border-biactro-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            @click="signToTheList()"
          >
            {{ mining ? 'Registrando...' : 'Registrarse' }}
          </button>
        </div>
        <div
          class="rounded-md shadow mt-4 md:mt-0 md:ml-4"
        >
          <button
            v-scroll-to="`#info`"
            class="w-full flex items-center text-biactro-dark justify-center px-8 py-3 border-2 border-biactro-light text-base leading-6 rounded-md font-semibold hover:border-biactro focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Conozca más
          </button>
        </div>
      </div>
    </div>
    <img
      loading="lazy"
      class="object-cover w-full lg:w-1/2 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full"
      src="/Megacity_2050.jpg"
    />
  </div>
</template>
<script>
import { ethers } from "ethers";
import abi from '../static/BiactroWhiteList.json'

export default {
  name: 'HeroConnect',
  data() {
    return {
      currentAccount: null,
      mining: false,
      provider: null,
    }
  },
  async mounted() {
    this.provider = await this.$web3Modal.connect();
    this.currentAccount = this.provider.selectedAddress;
    this.provider.on("accountsChanged", (accounts) => {
      this.currentAccount = accounts[0]
    });
  },
  methods: {
    async connectWallet() {
      if (this.$web3Modal.cachedProvider) {
        this.provider = await this.$web3Modal.connect();
        this.currentAccount = this.provider.selectedAddress;
      } else {
        this.provider = await this.$web3Modal.connect();
        this.currentAccount = this.provider.selectedAddress;
      }
    },
    async signToTheList() {
      const contractAddress = '0x5ef892f2200bd55afd3b47a62fe2e72777f029a9'
      const contractABI = abi.abi
      try {
          const provider = new ethers.providers.Web3Provider(this.provider);
          const signer = provider.getSigner();
          const biactroWhiteListContract = new ethers.Contract(contractAddress, contractABI, signer);
          const addTxn = await biactroWhiteListContract.addMember({ gasLimit: 300000 });
          this.mining = true;
  
          await addTxn.wait();
          this.mining = false;
          this.message = '';
          this.$toast.success('¡Cartera registrada!', { position: 'top-center', duration: 5000, keepOnHover: true, fullWidth: true, fitToScreen: true })
      } catch (error) {
        this.$toast.error('No se ha podido registrar esta cartera', { position: 'top-center', duration: 5000, keepOnHover: true, fullWidth: true, fitToScreen: true })
        this.mining = false;
        console.log(error)
      }
    }
  }
}
</script>