<template>
  <div class="bg-iberinsect-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-32">
      <h2
        class="text-4xl font-serif text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl xl:pr-2"
      >
        <slot></slot>
      </h2>
      <div class="md:mt-10 pb-4">
        <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="mt-10"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-iberinsect-light text-white"
                >
                  <img
                    loading="lazy"
                    class="h-8 w-8 fill-current"
                    :src="item.img"
                    :alt="item.alt || 'icono de ventaja'"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3
                  class="text-lg font-serif leading-6 font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600"
                >{{item.title}}</h3>
                <p
                  class="text-base leading-6 text-gray-700 mt-2 md:pr-4"
                >{{item.description}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FeatureList',
  // eslint-disable-next-line vue/require-prop-types
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
