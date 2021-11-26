<template>
  <div>
    <HeroWalletConnect id="hero"/>
    <CtaBanner id="info" scroll-to-element="#more-info" title="¿Qué es un NFT de la colección <span>Biactro Founders</span>?" :subtitle="`<p>Un NFT de la colección Biactro Founders es un certificado exclusivo que acredita a la persona que lo posea como <span>miembro fundador de Biactro.</span></p>`"/>
    <FeatureList id="more-info" :items="items"/>
    <TextSection />
    <InfoSection />
    <CtaBanner id="info" scroll-to-element="#more-info" title="¿A que irá destinado el dinero recolectado de la colección <span>Biactro Founders</span>?" :subtitle="`<p>Los fondos irán destinados a poner en marcha un módulo de gestión de residuos orgánicos, en el lugar del mundo que los miembros de Biactro Founders decidan, única y exclusivamente ellos.</p>`"/>
  </div>
</template>
<script>
// import { ethers } from "ethers";
// import abiv001 from '../static/SayHi.v0.0.1.json'

export default {
    data() {
        return {
            greetings: [],
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
    computed: {
        // reversedGreetings() {
        //     return this.greetings.slice(0).reverse();
        // }
    },
    mounted() {
        // this.getGreetings();
    },
    methods: {
        // async getGreetings() {
        //     const contractAddress = "0xE48c9428CFADCe4448D52338f1EbB1eB7F656B46";
        //     const contractABI = abiv001.abi;
        //     try {
        //         const { ethereum } = window;
        //         if (ethereum) {
        //             const provider = new ethers.providers.Web3Provider(ethereum);
        //             const signer = provider.getSigner();
        //             const wavePortalContractv001 = new ethers.Contract(contractAddress, contractABI, signer);
        //             wavePortalContractv001.on("greeting", (_greeting, _wallet) => this.greetings.push([_greeting, _wallet, true]));
        //             const greetingsv001 = await wavePortalContractv001.getGreetings();
        //             for (const greeting of greetingsv001) {
        //                 this.greetings.push(greeting);
        //             }
        //         }
        //         else {
        //             console.log("Ethereum object doesn't exist!");
        //         }
        //     }
        //     catch (error) {
        //         console.log(error);
        //     }
        // }
    },
}
</script>