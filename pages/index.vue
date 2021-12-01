<template>
  <div>
    <HeroConnect id="hero"/>
    <div
      id="info"
      class="bg-biactro-white"
    >
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 lg:items-center lg:justify-between"
      >
        <div
          class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
        >
          <h2 
            class="text-4xl font-serif text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl xl:pr-2"
          >
            ¿Qué es un NFT único de la colección <span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">Biactro Founders</span>?
          </h2>
          <p class="text-gray-700 text-xl sm:text-2xl biactro-gradient">Un NFT de la colección Biactro Founders es un certificado exclusivo que acredita a la persona que lo posea como <span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">miembro fundador de Biactro.</span></p>
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
              v-scroll-to="`#more-info`"
              class="w-full flex items-center text-biactro-dark justify-center px-8 py-3 border-2 border-biactro-light text-base leading-6 rounded-md font-semibold hover:border-biactro focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Conozca más
            </button>
          </div>
        </div>
      </div>
    </div>
    <FeatureList id="more-info" :items="items"/>
    <TextSection title="¿Cuál será el precio base de cada Biactro Founders NFT?" description="El precio base de cada Biactro Founders empezará en 0.015 $ETH, solo las personas que se registren en la whitelist podrán adquirir un Biactro Founders a ese precio en todo momento."/>
    <InfoSection />
    <!-- <CtaBanner id="info" scroll-to-element="#more-info" title="" :subtitle="``"/> -->
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
            class="text-4xl font-serif text-gray-900 tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl xl:pr-2"
          >
            ¿A que irá destinado el dinero recolectado de la colección <span class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600">Biactro Founders</span>?
          </h2>
          <p class="text-gray-700 text-xl sm:text-2xl biactro-gradient">Los fondos irán destinados a poner en marcha un módulo de gestión de residuos orgánicos, en el lugar del mundo que los miembros de Biactro Founders decidan, única y exclusivamente ellos.</p>
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
              v-scroll-to="`#more-info`"
              class="w-full flex items-center text-biactro-dark justify-center px-8 py-3 border-2 border-biactro-light text-base leading-6 rounded-md font-semibold hover:border-biactro focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Conozca más
            </button>
          </div>
        </div>
      </div>
    </div>
    <TextSection :title="`Plazas restantes: ${maxMembers - membersCount}/${maxMembers}`" description="Date prisa y registrate en la Whitelist, el numero se actualiza en tiempo real asi que, estos numeros no duraran mucho tiempo." img="/megaCity.jpg"/>
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
import abiv001 from '../static/BiactroWhiteList.json'

export default {
    data() {
        return {
            members: [],
            membersCount: 0,
            maxMembers: 0,
            items: [
              {
                img: "/member.svg",
                title: "Miembro de Biactro Founders",
                description: "Cuando obtienes un Biactro Founders NFT, estas adquiriendo algo más que un certificado. Obtendrás acceso como miembro de un club cuyos beneficios y ofertas aumentarán con el tiempo: newsletter exclusivas, merchandising, acceso a eventos privados, charlas y mucho más. Si posees un certificado tendrás acceso a todos estos beneficios actuales y aquellos que añadamos en el futuro.",
                alt: "member icon",
              },
              {
                img: "/amba.svg",
                title: "Ambassador de Biactro",
                description: "Tendrás el derecho de poder intermediar con aquellos organismos públicos o privados que deseen usar la tecnología en tu lugar de origen. Obteniendo parte de los beneficios de explotación; una vez hayas asistido a nuestras reuniones formativas gratuitas y obtengas el beneplácito de la mayoría de los founders.",
                alt: "Say Hi",
              },
              {
                img: "/tree.svg",
                title: "Tu árbol",
                description: "Parte de los beneficios de cada token servirá para plantar un árbol, no se plantará cualquier tipo de árbol si no aquellos autorizados para la zona y que no afecten al ecosistema local.",
                alt: "Say Hi",
              },
              {
                img: "/offer.svg",
                title: "Descuentos y ofertas",
                description: "Podrás acceder a un descuento y ofertas exclusivas si deseas implementar la tecnología para el beneficio de tu comunidad, o en el merchandising.",
                alt: "Say Hi",
              },
              {
                img: "/chat.svg",
                title: "Chat privado",
                description: "Obtendrás acceso al chat privado de Biactro donde podrás contactar con otros fundadores. Solo aquellos que posean un NFT de la colección podrán acceder a este chat exclusivo.",
                alt: "Say Hi",
              }
            ]
        };
    },
    mounted() {
      this.getWhiteListData();
    },
    methods: {
        async getWhiteListData() {
            const contractAddress = "0xB925a1E2438dc3Acf19496EbA241E6dDed17D516";
            const contractABI = abiv001.abi;
            const network = ethers.providers.getNetwork("rinkeby");
            const { ethereum } = window;
            let provider;
              if (ethereum) {
                provider = new ethers.providers.Web3Provider(ethereum);
              } else {
                provider = ethers.getDefaultProvider(network, { alchemy: 'https://eth-rinkeby.alchemyapi.io/v2/BT7pi_7fVKZ09UIm_uIpvU-iLAOcdfVJ' });
              }
            try {
              const biactroWhiteListContract = new ethers.Contract(contractAddress, contractABI, provider);
              const members = await biactroWhiteListContract.getMembers();
              this.membersCount = await biactroWhiteListContract.getMemberCount();
              this.maxMembers = await biactroWhiteListContract.getMaxMembers();
              for (const greeting of members) {
                this.members.push(greeting);
              }
              biactroWhiteListContract.on("newPreFounder", (_wallet, _timestamp) => {
                this.members.push([_wallet, _timestamp])
                this.membersCount++;
                this.$toast.success('¡Nuevo miembro añadido!', { position: 'top-center', duration: 5000, keepOnHover: true, fullWidth: true, fitToScreen: true })
              });
            }
            catch (error) {
                console.log(error);
            }
        }
    },
}
</script>