<template>
  <div class="min-h-screen flex flex-wrap">
    <div
      class="w-full flex flex-col justify-center max-w-screen-xl mx-auto px-4 lg:px-8 pt-12 pb-12 xl:py-0"
    >
      <h1
        class="lg:w-1/2 text-4xl text-gray-900 tracking-tight leading-10 font-bold font-serif sm:text-5xl sm:leading-none md:text-6xl xl:pr-6"
      >Futuros founders de Biactro: <br><span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">El futuro es hoy.</span></h1>
      <p class="lg:w-1/2 mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 biactro-gradient">
        Hemos abierto la whitelist para futuros founders de Biactro. Apúntate a la lista cerrada de 900 miembros para tener acceso asegurado a tu certificado NFT <strong><span>único</span></strong> de la colección ‘Biactro Founders’.  
      </p>
      <div v-if="currentAccount !== null" class="w-full sm:max-w-md">
        <div class="relative mt-4"> 
          <input v-model="tokenID" type="text" class="border-2 border-gray-300 rounded-md h-14 w-full pr-8 pl-5 rounded z-0 focus:outline-none" placeholder="Escribe tu numero favorito">
          <div class="absolute top-4 right-3 text-gray-500 cursor-pointer" @click="randomNumber()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="fill-current"><path d="M0 0h24v24H0zm21.02 19c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/></svg></div>
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
            @click="signToTheList()"
          >
            {{ mining ? 'Registrando...' : 'Registrarse' }}
          </button>
        </div>
        <div
          class="rounded-md shadow mt-4 sm:mt-0"
        >
          <button
            v-scroll-to="`#info`"
            class="w-full flex items-center text-biactro-dark justify-center px-8 py-3 border-2 border-biactro-light text-base leading-6 rounded-md font-semibold hover:border-biactro focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Conocenos
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

export default {
  name: 'HeroConnect',
  props: {
    currentAccount: {
      type: String,
      required: false,
      default: null
    },
    mining: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      tokenID: null,
    }
  },
  methods: {
    // A function to save a random number inside tokenID between 0 and 40000
    randomNumber() {
      this.tokenID = Math.floor(Math.random() * 40000);
    },
    signToTheList() {
      // emit an event called sign
      this.$emit('sign-whitelist', this.tokenID)
    },
    connectWallet() {}
  }
}
</script>