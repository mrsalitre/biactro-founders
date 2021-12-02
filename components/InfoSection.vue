<template>
  <div class="bg-iberinsect-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-32">
      <h2
        class="text-4xl font-serif text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl xl:pr-2"
      >
        {{ title }}
      </h2>
      <div
        class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-4xl md:mt-5 md:text-xl lg:mx-0 biactro-gradient"
        v-html="description"
      >
      </div>
      <div
        class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
      >
        <div
          class=""
        >
          <a
            :href="linkUrl"
            class="text-biactro-dark font-semibold underline"
          >
            {{ linkText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoSection",
  props: {
    title: {
      type: String,
      default: "¿Por qué hacemos esto?",
    },
    description: {
      type: String,
      default: `En <span class="font-bold">Biactro Technology</span> hemos decidido abrirnos a nuevos conceptos de financiación colectiva mediante el fundraising, por este motivo, en lugar de contar con grandes inversores queremos darle la oportunidad a cualquier persona afín a la filosofía del cuidado y la protección del medio ambiente, impulsando una tecnología única a nivel mundial.
        Con esta idea evitamos dejar el futuro de nuestro planeta a las grandes empresas y lobbys.`,
    },
    linkText: {
      type: String,
      default: "Visitar nuestra página de Biactro",
    },
    linkUrl: {
      type: String,
      default: "https://www.biactro.com",
    },
  }
}
</script>