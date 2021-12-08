<template>
  <section class="relative overflow-hidden bg-biactro-light">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <div
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="info-title-fade-up font-serif text-4xl text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl lg:pr-10"
            >
              {{ title }}
            </h2>
            <p
              class="info-description-fade-up mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 paragraph-mb"
            >
              {{ description }}
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div
                class="rounded-md shadow"
              >
                <button
                  v-scroll-to="
                    `#hero`
                  "
                  class="w-full flex items-center justify-center px-8 py-3 border-2 border-biactro text-base leading-6 font-medium rounded-md text-white font-semibold bg-biactro hover:bg-biactro-dark hover:border-biactro-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  ¡Minar Biactro Founders!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        loading="lazy"
        class="info-image-fade-up h-56 w-full object-cover sm:h-72 md:h-56 lg:w-full lg:h-full"
        :src="img"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: 'TextSection',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '/Megacity_2050.pricesection.jpg',
    }
  },
}
</script>
