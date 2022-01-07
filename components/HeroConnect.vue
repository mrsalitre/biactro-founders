<template>
  <div class="min-h-screen flex flex-wrap bg-biactro-white">
    <div
      class="w-full flex flex-col justify-center max-w-screen-xl mx-auto px-4 lg:px-8 pt-8 pb-12 xl:py-0"
    >
      <h1
        class="lg:w-1/2 text-4xl text-gray-900 tracking-tight leading-10 font-bold font-serif sm:text-5xl sm:leading-none md:text-6xl xl:pr-6"
      >
        Founders de Biactro: <br><span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">El futuro es hoy.</span>
      </h1>
      <p class="lg:w-1/2 mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 biactro-gradient">
        Hemos abierto el acceso previo para minar NFTs de la colección Biactro Founders. Solo las primeras 900 personas podrán conseguir su NFT <strong><span>único</span></strong> de la colección ‘Biactro Founders’ a un costo de minado exclusivo, hasta el día 14 de febrero de 2022.  
      </p>
      <div v-if="currentAccount !== null" class="w-full sm:max-w-md">
        <div class="relative mt-4">
          <div class="bg-yellow-200 rounded-md p-2">
            <p class="text-sm font-semibold">Introduce tus numeros favoritos.</p>
            <p class="text-xs">Escribe los numeros que deseas minar separados por un espacio. Se pueden minar hasta 20 NFTs por transacción. Puedes <nuxt-link to="consultar-tokens-disponibles" class="underline">consultar los tokens disponibles</nuxt-link> antes de minarlos.</p>          
          </div>
          <input v-model.trim="tokenID" type="text" class="mt-4 border-2 border-gray-300 rounded-md h-14 w-full pr-8 pl-5 rounded z-0 focus:outline-none" placeholder="Introduce tus numeros favoritos">
        </div>
      </div>
      <div class="mt-4 sm:flex sm:flex-wrap sm:justify-between w-full sm:max-w-md">
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
            @click="mint()"
          >
            {{ mining ? 'Minando...' : 'Minar Biactro NFT' }}
          </button>
        </div>
        <div
          class="rounded-md shadow mt-4 md:mt-0"
        >
          <button
            v-scroll-to="`#info`"
            class="w-full flex items-center text-biactro-dark justify-center px-8 py-3 border-2 border-biactro-light text-base leading-6 rounded-md font-semibold hover:border-biactro focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            ¿Por qué?
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
import abi from '../static/BiactroFoundersNFT.json'

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
  computed: {
    ids() {
      return this.tokenID ? this.tokenID.split(' ').map( Number ) : [];
    },
    price() {
      const preSalePrice = 30000000000000000000n;
      const salePrice = 52000000000000000000n;
      const currentPrice = this.isPreSale ? preSalePrice : salePrice;
      return (currentPrice * (BigInt(this.ids.length.toString()))).toString()
    },
    isPreSale() {
      const preSaleDate = 1641340800;
      return Date.now() / 1000 <= preSaleDate
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
    async mint() {
      if (!this.ids.length) {
        this.$toast.error('Debe introducir un número', { position: 'top-center', duration: 5000, keepOnHover: true, fullWidth: true, fitToScreen: true })
        return
      }
      const intArray = this.ids.filter(value => !isNaN(value));
      const contractAddress = '0x736c0Ec9dD932a267204656e4485C9575D9fa834';
      const contractABI = abi.abi;
      try {
        const provider = new ethers.providers.Web3Provider(this.provider);
        const signer = provider.getSigner();
        const biactroWhiteListContract = new ethers.Contract(contractAddress, contractABI, signer);
        
        // value: ethers.utils.parseUnits(this.price, 'wei')
        const addTxn = await biactroWhiteListContract.mint(intArray);
        this.mining = true;

        await addTxn.wait();
        this.mining = false;
      } catch (error) {
        this.mining = false;
        console.log(error)
        if (error.data.code === -32000) {
          this.$toast.error('No tienes suficiente ether en tu cartera', { position: 'top-center', duration: 5000, keepOnHover: true, fullWidth: true, fitToScreen: true })
        } else {
          this.$toast.error('No se ha podido minar estos tokens', { position: 'top-center', duration: 5000, keepOnHover: true, fullWidth: true, fitToScreen: true })
        }
      }
    }
  }
}
</script>