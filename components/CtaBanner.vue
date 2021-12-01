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
        >
          <slot></slot>
        </h2>
        <div
          class="text-gray-700 text-xl sm:text-2xl biactro-gradient"
        >
         <p>{{ subtitle }}</p>
        </div>
      </div>
      <div class="mt-8 sm:mt-8 sm:flex lg:justify-start">
        <div
          class="rounded-md shadow"
        >
          <button
            v-scroll-to="`#hero`"
            class="w-full flex items-center text-white justify-center px-8 py-3 border-2 border-biactro text-base leading-6 rounded-md font-semibold bg-biactro hover:bg-biactro-dark hover:border-biactro-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            ¡Registrarse ahora!
          </button>
        </div>
        <div
          class="rounded-md shadow mt-4 md:mt-0 md:ml-4"
        >
          <button
            v-scroll-to="`${scrollToElement}`"
            class="w-full flex items-center text-biactro-dark justify-center px-8 py-3 border-2 border-biactro-light text-base leading-6 rounded-md font-semibold hover:border-biactro focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
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