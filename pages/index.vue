<template>
  <div>
    <HeroConnect id="hero"/>
    <InfoSection id="info"/>
    <div
      class="bg-biactro-white"
    >
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:items-center lg:justify-between"
      >
        <div
          class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
        >
          <h2 
            class="text-4xl font-serif text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl xl:pr-2"
          >
            ¿Qué es un NFT único de la colección <span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">Biactro Founders</span>?
          </h2>
          <p class="text-gray-700 text-xl sm:text-2xl biactro-gradient">Un NFT de la colección Biactro Founders es un ‘certificado digital’ exclusivo que acredita a la cartera que lo posea como <span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">miembro fundador de Biactro.</span></p>
        </div>
        <div class="mt-8 sm:mt-8 sm:flex lg:justify-start">
          <div
            class="rounded-md shadow"
          >
            <button
              v-scroll-to="`#hero`"
              class="w-full flex items-center text-white justify-center px-8 py-3 border-2 border-biactro text-base leading-6 rounded-md font-semibold bg-biactro hover:bg-biactro-dark hover:border-biactro-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              ¡Minar ahora!
            </button>
          </div>
          <div
            class="rounded-md shadow sm:ml-4 mt-4 sm:mt-0"
          >
            <button
              v-scroll-to="`#more-info`"
              class="w-full flex items-center text-biactro-dark justify-center px-8 py-3 border-2 border-biactro-light text-base leading-6 rounded-md font-semibold hover:border-biactro focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Más información
            </button>
          </div>
        </div>
      </div>
    </div>
    <InfoSection id="more-info" title="Biactro™. Comprometidos con la reducción de la huella de carbono." description="Tras un bagaje profesional de sólida experiencia en las actividades de I+D+i establecido en planes desde su inicio hasta su puesta en marcha, la empresa, ha ido conformando el desarrollo para la promoción de varios proyectos pioneros, dando respuesta tangible a la problemática del deterioro medioambiental con la creación de nuevos modelos productivos y de desarrollo sostenible dedicado a la industria de cultivos intensivos ecológicos, tratamiento de residuos y valorización energética." />
    <FeatureList :items="items">
      ¿Cual es el roadmap para los poseedores de un <span class="inline-block text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">Biactro Founders</span>?
    </FeatureList>
    <TextSection id="nftInfo" title="Beneficio de Founder." description="Queremos premiar e incentivar la propuesta otorgando un costo de minado de 30 MATIC a las 900 primeras personas que minen un NFT de la colección Biactro Founders antes del 14 de febrero de 2022. A partir del 14 de febrero de 2022 minar un Biactro Founders costará 90 MATIC, independientemente de sus características. No hay niveles de precios; ser miembro de Biactro Founders cuesta lo mismo para todos."/>
    <div
      class="bg-biactro-white"
    >
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:items-center lg:justify-between"
      >
        <div
          class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
        >
          <h2 
            class="text-4xl font-serif text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl xl:pr-2"
          >
            ¿A que irán destinados los fondos recolectados de la colección <span class="inline-block text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">Biactro Founders</span>?
          </h2>
          <p class="text-gray-700 text-xl sm:text-2xl biactro-gradient">Los fondos irán destinados a la implantación de un módulo de gestión de residuos orgánicos en La Palma.</p>
        </div>
        <div class="mt-8 sm:mt-8 sm:flex lg:justify-start">
          <div
            class="rounded-md shadow"
          >
            <button
              v-scroll-to="`#hero`"
              class="w-full flex items-center text-white justify-center px-8 py-3 border-2 border-biactro text-base leading-6 rounded-md font-semibold bg-biactro hover:bg-biactro-dark hover:border-biactro-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Minar NFT
            </button>
          </div>
          <div
            class="rounded-md shadow sm:ml-4 mt-4 sm:mt-0"
          >
            <button
              v-scroll-to="`#available-info`"
              class="w-full flex items-center text-biactro-dark justify-center px-8 py-3 border-2 border-biactro-light text-base leading-6 rounded-md font-semibold hover:border-biactro focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Ver plazas restantes
            </button>
          </div>
        </div>
      </div>
    </div>
    <TextSection id="available-info" :title="`Quedan ${900 - membersCount} Biactro Founders a precio reducido.`" description="¡Date prisa!, mina tu NFT para conseguirlo a 30 MATIC en este momento. Solo para las primeras 900 personas hasta el 14 de febrero de 2022." img="/megaCity.jpg"/>
    <FeatureList :items="faq">
      FAQ/Preguntas frecuentes:
    </FeatureList>
    <div
    >
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:items-center lg:justify-between"
      >
        <div
          class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
        >
          <h2 
            class="text-4xl font-serif text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl xl:pr-2"
          >
            ¿Tienes dudas?
          </h2>
          <p class="text-gray-700 text-xl sm:text-2xl font-semibold">Si tienes preguntas o dudas sobre el proyecto puedes añadirnos en el <a href="https://twitter.com/BIACTROTECH" class="underline">Twitter de Biactro</a> y preguntarnos todo lo que desees. Usamos twitter como único medio de comunicación para que no te pierdas ninguna noticia, así evitamos que puedas ser víctima de un scam por otros medios de comunicación.</p>
        </div>
      </div>
    </div>
    <footer class="bg-biactro-dark">
      <div class="max-w-screen-xl mx-auto">
        <div class="relative z-10">
          <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="sm:text-center lg:text-left py-4 text-white">
              <span class="font-semibold">
                ©2021 <a class="underline" href="https://biactro.com" target="_blank">Biactro Technology</a> Todos los derechos reservados
              </span>
            </div>
            <div class="sm:text-center lg:text-left py-4 text-white text-xs">
              <span class="font-semibold">
                Contrato: <br><a class="underline" :href="`https://mumbai.polygonscan.com/address/${ contractAddress }`" target="_blank">{{ contractAddress }}</a>
              </span>
              <br>
              <span class="font-semibold">
                CID de IPFS: <br><a class="underline" href="https://ipfs.io/ipfs/QmfLCLmb3TvFgnJccCBVVSVWsg6jaepsXoW5wxpFV14mhc" target="_blank">QmfLCLmb3TvFgnJccCBVVSVWsg6jaepsXoW5wxpFV14mhc</a>
              </span>
            </div>
            <div class="sm:text-center lg:text-left py-4 text-white">
              <span class="font-semibold">
                Illustraciones de: <a class="underline" href="https://rodhunt.com/megacity-2050-bloomberg-businessweek-illustration" target="_blank">@rodhunt</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { ethers } from "ethers";
import abi from '../static/BiactroFoundersNFT.json'

export default {
    data() {
      return {
        contractAddress: '0x6CF8C714ec94859701d0398FfB43DaDB6f11d762',
        provider: null,
        membersCount: 0,
        biactroWhiteListContract: null,
        availableTokens: [],
        faq: [
          {
            img: "/blockchain.svg",
            title: "¿Qué es un NFT?",
            description: "Un NFT significa «Token no fungible» por sus siglas en inglés. Básicamente se trata de propiedad privada digital que los usuarios pueden comprar, poseer e intercambiar. La función principal de los NFT es el arte digital y el coleccionismo, pero algunas ofrecen una utilidad adicional como acceso exclusivo a sitios web, participación en un evento, etc. Piense en estos activos como una pieza de colección que también puede actuar como una tarjeta de «miembros».",
            alt: "icono de blockchain",
          },
          {
            img: "/blockchain.svg",
            title: "¿Qué puedo hacer con mi Token de Biactro Founder?",
            description: "Tienes la libertad de hacer todo lo que quieras con su Tokens, puedes imprimirlo y lucirlo en tu pared, imprimirlo en una camisa, usarlo de foto de perfil, venderlo, alquilarlo, subastarlo. ¡Es tuyo, para siempre!",
            alt: "icono de blockchain",
          },
          {
            img: "/blockchain.svg",
            title: "¿Qué blockchain se usará para este proyecto?",
            description: "Este proyecto usará la blockchain de Polygon para minar los NFTs. Polygon es una red de segunda capa compatible con Ethereum, Ethereum es la red de blockchain más accesible, con más respaldo, documentación, comunidad y recursos en la actualidad. Queremos que este proyecto sea lo más inclusivo posible, por ello decidimos usar Polygon por sus bajos costes de transacción, además, al ser compatible con la red de Ethereum podrás transferir tus NFTs a esta red en todo momento.",
            alt: "icono de blockchain",
          },
          {
            img: "/sd_storage_black_24dp.svg",
            title: "¿Dónde se almacenará la imagen y los metadatos de mi NFT?",
            description: "Guardaremos los metadatos de cada NFT usando IPFS, estos estarán referenciados mediante un identificador de contenido único. La imagen por su parte estará almacenada dentro de los metadatos usando una 'data URL', en lugar de referenciar la imagen en otra ubicación. Al almacenar la imagen dentro de los metadatos y los metadatos en IPFS conseguimos que los datos del NFT duren hasta el fin de nuestra civilización sin ser alterados.",
            alt: "icono de almacenamiento",
          },
          {
            img: "/date_range_black_24dp.svg",
            title: "¿Cuándo se podrán minar los Biactro Founders?",
            description: "Puedes minar Biactro Founders ahora mismo a un coste reducido, sólo si eres una de las primeras 900 personas antes del 14 de febrero de 2022. Si se llega al límite de Founders antes de la fecha citada no se podrán minar más NFT hasta llegar al 14 de febrero de 2022.",
            alt: "icono de minado",
          },
          {
            img: "/cartera.svg",
            title: "¿Existe un límite de Biactro Founders NFT por cartera?",
            description: "No, cada cartera podrá minar y poseer los Biactro Founders que desee.",
            alt: "icono de minado",
          },
          {
            img: "/confirmation_number_black_24dp.svg",
            title: "¿Cuantos Biactro Founders se crearan?",
            description: "Se creará un lote total de 10.000 NFT, de los cuales 900 tendrán el costo de minado reducido.",
            alt: "icono de confirmacion",
          },
          {
            img: "/ethereum.svg",
            title: "¿Cuál será el costo de minado base de cada Biactro Founders NFT?",
            description: "El costo de minado de cada Biactro Founders empezará en 30 MATIC, este se mantendrá para las primeras 900 personas hasta el 14 de febrero de 2022. A partir del 14 de febrero de 2022 el costo de minado será de 90 MATIC.",
            alt: "icono de ether",
          },
        ],
        items: [
          {
            img: "/member.svg",
            title: "Enero 6 de 2022",
            description: "Se inicia el minado anticipado de la colección “Biactro Founders” a precio reducido hasta el 14 de febrero del 2022, estos NFT tendrán un costo de 30 MATIC para recompensar a los primeros 900 compradores.",
            alt: "icono de miembro",
          },
          {
            img: "/amba.svg",
            title: "Febrero 14 de 2022",
            description: "Termina el minado anticipado y se inicia la venta oficial de la colección “Biactro Founders” restantes al precio de 90 MATIC cada uno.",
            alt: "icono de embajador",
          },
          {
            img: "/offer.svg",
            title: "Marzo 8 de 2022",
            description: "Se abren los cursos de capacitación online para que los poseedores de un NFT puedan intermediar con agentes locales o inversores para la venta o explotación de la tecnología.",
            alt: "icono de oferta",
          },
          {
            img: "/chat.svg",
            title: "Abril de 2022",
            description: "Se otorgan NFTs de embajador de Biactro a los poseedores de un NFT Biactro Founders que hayan superado con éxito la capacitación online.",
            alt: "icono de chat",
          },
          {
            img: "/tree.svg",
            title: "Agosto de 2022",
            description: "Primer evento físico de Biactro, sólo los poseedores de un NFT Biactro Founders con todas las propiedades Holográficas podrán asistir a este evento. El evento se realizará al norte de Gran Canaria, en la primera planta de experimentación de Biactro, en la Aldea de San Nicolas.",
            alt: "Icono de arbol",
          },
          {
            img: "/savings_black_24dp.svg",
            title: "Diciembre de 2022",
            description: "Primer evento online donde nos reuniremos todos los poseedores de un Biactro Founders para debatir el año y los planes de futuro.",
            alt: "icono de beneficios",
          },
          {
            img: "/savings_black_24dp.svg",
            title: "2023 - 2024",
            description: "Continuamos con los eventos, los cursos de capacitación y las sorpresas para la comunidad, también abrimos las puertas a diferentes posibilidades para el crecimiento de la comunidad, como asociaciones con marcas, merchandising, entre otras cosas. Queremos llevar el proyecto al siguiente nivel pero no podemos prometerlo ahora mismo, cuando consigamos completar las primeras fases nos gustaría poder ofrecer en el futuro un porcentaje de los beneficios de Biactro a los poseedores de un NFT Biactro Founders.",
            alt: "icono de beneficios",
          },
        ]
      };
    },
    head() {
    return {
      title: `Biactro Technology | Biactro Founders`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `“No queremos dejar el futuro de nuestro planeta a las grandes empresas y lobbys, queremos dejarlo en tus manos.”`,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/Megacity_2050.jpg',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Biactro Technology | Biactro Founders`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `“No queremos dejar el futuro de nuestro planeta a las grandes empresas y lobbys, queremos dejarlo en tus manos.”`,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Biactro Technology | Biactro Founders`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/Megacity_2050.jpg',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `“No queremos dejar el futuro de nuestro planeta a las grandes empresas y lobbys, queremos dejarlo en tus manos.”`,
        },
      ],
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
    this.getWhiteListData()
  },
  methods: {
    async getWhiteListData() {
      const contractABI = abi.abi
      let provider;
        if (this.provider) {
          provider = new ethers.providers.Web3Provider(this.provider);
        } else {
          const matic = {
            name: 'maticmum',
              chainId: 80001,
              _defaultProvider: (providers) => new providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/mTaSXw3JVbD7f3p7AnKUgsLL5c4Ls6QN')
          }
          provider = ethers.getDefaultProvider(matic);
        }
      try {
        this.biactroWhiteListContract = new ethers.Contract(this.contractAddress, contractABI, provider);
        this.membersCount = await this.biactroWhiteListContract.totalSupply();
        this.membersCount = this.membersCount._hex
        this.biactroWhiteListContract.on("Transfer", async (_from, _to, _tokenId) => {
          this.membersCount = await this.biactroWhiteListContract.totalSupply();
          this.membersCount = this.membersCount._hex
          this.$toast.success(`¡Biactro Founders #${_tokenId} minado!`, { position: 'top-center', duration: 5000, keepOnHover: true, fullWidth: true, fitToScreen: true })
        });
      }
      catch (error) {
        console.log(error);
      }
    },
  },
}
</script>