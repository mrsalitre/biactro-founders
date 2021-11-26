<template>
  <div
    class="bg-biactro-white"
  >
    <div
      class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 lg:items-center lg:justify-between"
    >
      <div
        class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
      >
        <h2 
          class="text-4xl font-serif text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl xl:pr-2 biactro-gradient"
          v-html="title"
        >
        </h2>
        <div
          class="text-gray-700 text-xl sm:text-2xl biactro-gradient"
        >
         <div v-html="subtitle">
         </div>
        </div>
      </div>
      <div class="mt-8 flex lg:flex-shrink-0">
        <div
          class="inline-flex rounded-md shadow"
        >
          <button
            v-scroll-to="`#hero`"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-semibold rounded-md bg-biactro-light hover:bg-biactro-dark hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            ¡Registrarse ahora!
          </button>
        </div>
        <div
          class="ml-3 inline-flex rounded-full shadow"
        >
          <button
            v-scroll-to="`${scrollToElement}`"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Conozca más
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CtaBanner',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    scrollToElement: {
      type: String,
      default: '#hero',
    },
  }
}
</script>
<style lang="sass">
.biactro-gradient
  span
    @apply text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600
</style>