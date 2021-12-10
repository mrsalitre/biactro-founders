<template>
  <div>
    <HeroConnect id="hero"/>
    <div
      id="info"
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
    <InfoSection id="more-info" title="Biactro™ (MTD) Mejor Tecnología Disponible. Responsabilizados con la reducción de la huella de carbono." description="Tras un bagaje profesional de sólida experiencia en las actividades de I+D+i establecido en planes desde su inicio hasta su puesta en marcha, la empresa, ha ido conformando el desarrollo para la promoción de varios proyectos pioneros, dando respuesta tangible a la problemática del deterioro medioambiental con la creación de nuevos modelos productivos y de desarrollo sostenible dedicado a la industria de cultivos intensivos ecológicos, tratamiento de residuos y valorización energética." />
    <FeatureList :items="items">
      ¿Qué obtengo al adquirir un NFT único de la colección <span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">Biactro Founders</span>?
    </FeatureList>
    <TextSection id="nftInfo" title="Beneficio de Founder." description="Queremos premiar e incentivar la propuesta otorgando un costo de minado de 0.015 ETH a las 900 primeras personas que minen un NFT de la colección Biactro Founders antes del 5 de enero de 2022. A partir del 5 de enero de 2022 minar un Biactro Founders costará 0.06 ETH, independientemente de sus características. No hay niveles de precios; ser miembro de Biactro Founders cuesta lo mismo para todos."/>
    <InfoSection />
    <!-- <CtaBanner id="info" scroll-to-element="#more-info" title="" :subtitle="``"/> -->
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
            ¿A que irá destinado los fondos recolectados de la colección <span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">Biactro Founders</span>?
          </h2>
          <p class="text-gray-700 text-xl sm:text-2xl biactro-gradient">Los fondos irán destinados a poner en marcha un módulo de gestión de residuos orgánicos, en el lugar del mundo que los miembros de Biactro Founders decidan por votación.</p>
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
    <TextSection id="available-info" :title="`Acceso previo restante: ${maxMembers - membersCount}/${maxMembers}`" description="¡Date prisa!, mina tu NFT para conseguirlo a 0.015 ETH en este momento. Solo para las primeras 900 personas hasta el 5 de enero de 2022." img="/megaCity.jpg"/>
    <FeatureList :items="faq">
      FAQ/Preguntas frecuentes:
    </FeatureList>
    <footer class="bg-biactro-dark">
      <div class="max-w-screen-xl mx-auto">
        <div class="relative z-10">
          <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="sm:text-center lg:text-left py-4 text-white">
              <span class="font-semibold">
                ©2021 <a class="underline" href="https://biactro.com" target="_blank">Biactro Technology</a> Todos los derechos reservados
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
        contractAddress: '0xe0C92112f20cc120649b29b6Ff51ED85D583A33b',
        provider: null,
        membersCount: 0,
        maxMembers: 0,
        biactroWhiteListContract: null,
        faq: [
          {
            img: "/blockchain.svg",
            title: "¿Qué blockchain se usará para este proyecto?",
            description: "Este proyecto usará la blockchain de Ethereum para realizar las transacciones. Ethereum es la red de blockchain más accesible, con más respaldo, documentación, comunidad y recursos en la actualidad. Queremos que este proyecto sea lo más inclusivo posible así que de ser necesario, a la hora de ampliar las membresías o crear servicios para miembros, optariamos por redes con un menor costo de transacciones como Solana o usar redes de segunda capa como Polygon, pero conservando la colección original en la mainet de Ethereum.",
            alt: "icono de blockchain",
          },
          {
            img: "/contratos-inteligentes.svg",
            title: "¿Cómo se asegura que los beneficios serán repartidos?",
            description: "En Biactro Technology creemos que la tecnología puede ayudarnos a conseguir un futuro mejor, por este motivo empleamos la tecnología “smart contracts” de Ethereum. Este “contrato inteligente” será programado para repartir de manera automática los beneficios entre todos los propietarios de un Biactro Founders NFT, sin la intervención de ninguna persona u organismo. Todas las personas podrán consultar este contrato inteligente y sus funcionalidades de forma pública, así como publicar sugerencias o señalar errores antes de su publicación.",
            alt: "icono de smart contract",
          },
          {
            img: "/sd_storage_black_24dp.svg",
            title: "¿Dónde se almacenará la imagen y los metadatos de mi NFT?",
            description: "Guardaremos los metadatos de cada NFT usando IPFS, estos estarán referenciados mediante una un identificador de contenido único. La imagen por su parte estará almacenada dentro de los metadatos, en lugar de referenciar la ubicación de la imagen en otra ubicación. Al almacenar la imagen dentro de los metadatos y los metadatos en IPFS conseguimos que los datos del NFT duren hasta el fin de nuestra civilización sin ser alterados.",
            alt: "icono de almacenamiento",
          },
          {
            img: "/date_range_black_24dp.svg",
            title: "¿Cuándo se podrán minar los Biactro Founders?",
            description: "Puedes minar Biactro Founders ahora mismo a un coste reducido, sólo si eres una de las primeras 900 personas antes del 5 de enero de 2022. Si se llega al límite de Founders antes de la fecha citada no se podrán minar más NFT hasta llegar al 5 de enero de 2022.",
            alt: "icono de minado",
          },
          {
            img: "/cartera.svg",
            title: "¿Existe un límite de Biactro Founders NFT por cartera?",
            description: "No, cada cartera podrá minar y poseer los Biactro Founders que desee, sin embargo el contrato estará programado para minar un solo Biactro Founders a la vez. Programamos el contrato de esta forma para evitar que una sola persona o empresa con mucho capital mine la mayoría de los tokens en pocas transacciones.",
            alt: "icono de minado",
          },
          {
            img: "/confirmation_number_black_24dp.svg",
            title: "¿Cuantos Biactro Founders se crearan?",
            description: "Se creará un lote total de 10.000 NFT, de los cuales 900 tendrán el costo de minado reducido. **Reservaremos 30 tokens que serán usados para fines publicitarios o promocionales.**",
            alt: "icono de confirmacion",
          },
          {
            img: "/ethereum.svg",
            title: "¿Cuál será el costo de minado base de cada Biactro Founders NFT?",
            description: "El costo de minado de cada Biactro Founders empezará en 0.015 ETH, este se mantendrá para las primeras 900 personas hasta el 5 de enero de 2022. A partir del 5 de enero de 2022 el costo de minado será de 0.06 ETH.",
            alt: "icono de ether",
          },
          {
            img: "/democracia.svg",
            title: "¿Cómo se decidirá dónde abrir el nuevo módulo?",
            description: "Una vez se hayan minado todos los NFTs de la colección Biactro Founders iniciaremos el desarrollo de los tokens de gobierno, esta será la forma de interactuar con el contrato inteligente encargado de admitir propuestas de los miembros de Biactro Founders, los cuales podrán votar entre estas propuestas para decidir el lugar y representante.",
            alt: "icono de democracia",
          },
          {
            img: "/bosque.svg",
            title: "¿Qué cantidad del token irá destinado al proyecto de forestación?",
            description: "Una vez se hayan minado todos los NFTs y hayamos desarrollado los tokens de gobierno, los Founders podrán decidir la cantidad y el lugar del proyecto de forestación una vez hayamos alcanzado el objetivo inicial de abrir un nuevo módulo.",
            alt: "icono de bosque",
          }
        ],
        items: [
          {
            img: "/member.svg",
            title: "Miembro de Biactro Founders",
            description: "Cuando obtienes un Biactro Founders NFT, estas adquiriendo algo más que un certificado. Obtendrás acceso como miembro de un club cuyos beneficios y ofertas aumentarán con el tiempo: newsletter exclusivas, merchandising, acceso a eventos privados, charlas y mucho más. Si posees un certificado tendrás acceso a todos estos beneficios y aquellos que añadamos en el futuro.",
            alt: "icono de miembro",
          },
          {
            img: "/amba.svg",
            title: "Ambassador de Biactro",
            description: "Tendrás el derecho de poder intermediar con aquellos organismos públicos o privados que deseen usar la tecnología en tu lugar de origen. Obteniendo parte de los beneficios de explotación; una vez hayas asistido a nuestras reuniones formativas gratuitas y obtengas el beneplácito de la mayoría de los founders.",
            alt: "icono de embajador",
          },
          {
            img: "/offer.svg",
            title: "Descuentos y ofertas",
            description: "Podrás acceder a un descuento exclusivo si deseas implementar la tecnología para el beneficio de tu comunidad, o en el merchandising.",
            alt: "icono de oferta",
          },
          {
            img: "/chat.svg",
            title: "Chat privado",
            description: "Obtendrás acceso al chat privado de la comunidad de Biactro donde podrás contactar con otros fundadores. Solo aquellos que posean un NFT de la colección podrán acceder a este chat exclusivo.",
            alt: "icono de chat",
          },
          {
            img: "/tree.svg",
            title: "Forestación",
            description: "Parte de los beneficios de cada token servirá para plantar un árbol. No se plantará cualquier tipo de árbol, sino aquellos autorizados para la zona y que no afecten al ecosistema local.",
            alt: "Icono de arbol",
          },
          {
            img: "/savings_black_24dp.svg",
            title: "Beneficios económicos",
            description: "Los miembros de Biactro Founders recibirán el 1% de los beneficios netos de las ventas mundiales, poseer un NFT de la colección Biactro Founders garantiza a su propietario recibir una compensación económica resultado de la implantación de la tecnología, independientemente del país de implantación. Además también se asegura un porcentaje por kilo vendido de fertilizante de marca Biactro.",
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
      this.getWhiteListData()
    } else {
      this.getWhiteListData()
    }
  },
  methods: {
    async getWhiteListData() {
      const contractABI = abi.abi
      const network = ethers.providers.getNetwork("rinkeby");
      let provider;
        if (this.provider) {
          provider = new ethers.providers.Web3Provider(this.provider);
        } else {
          provider = ethers.getDefaultProvider(network, { alchemy: 'https://eth-rinkeby.alchemyapi.io/v2/BT7pi_7fVKZ09UIm_uIpvU-iLAOcdfVJ' });
        }
      try {
        this.biactroWhiteListContract = new ethers.Contract(this.contractAddress, contractABI, provider);
        this.membersCount = await this.biactroWhiteListContract.totalSupply();
        this.biactroWhiteListContract.on("Transfer", (_from, _to, _tokenId) => {
          this.$toast.success(`¡Nuevo miembro añadido! #${_tokenId}`, { position: 'top-center', duration: 5000, keepOnHover: true, fullWidth: true, fitToScreen: true })
        });
      }
      catch (error) {
        console.log(error);
      }
    }
  },
}
</script>