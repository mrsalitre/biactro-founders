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
      <div class="mt-4 sm:flex sm:flex-wrap lg:justify-start">
          <div v-if="currentAccount !== null" class="w-full">
            <div class="relative my-4 max-w-sm"> 
              <input v-model="tokenID" type="text" class="border-2 border-gray-300 rounded-md h-14 w-full pr-8 pl-5 rounded z-0 focus:outline-none" placeholder="Escribe tu numero favorito">
              <div class="absolute top-4 right-3 text-gray-500 cursor-pointer" @click="randomNumber()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="fill-current"><path d="M0 0h24v24H0zm21.02 19c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/></svg></div>
            </div>
          </div>
          <!-- <div
            v-if="currentAccount !== null"
            class="relative text-gray-600 my-4 md:mt-0 max-w-sm"
          >
            <input
              v-model.trim.number="tokenID"
              class="border-2 border-gray-300 bg-white h-14 px-8 py-3 pr-16 rounded-lg text-sm focus:outline-none w-full md:max-w-sm"
              type="search"
              name="search"
              placeholder="Introduce tu número favorito"
              @keydown.enter="randomNumber()"
            />
            <button
              class="absolute right-0 top-0 mt-5 lg:mt-6 mr-8 lg:mt-3 lg:mr-4"
              @click="randomNumber()"
            >
              <svg
                id="Capa_1"
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background:new 0 0 56.966 56.966;"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div> -->
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
      tokenID: null,
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
    // A function to save a random number inside tokenID between 0 and 40000
    randomNumber() {
      this.tokenID = Math.floor(Math.random() * 40000);
    },
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
          const addTxn = await biactroWhiteListContract.addMember(this.tokenID, { gasLimit: 300000 });
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