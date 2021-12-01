import Vue from 'vue';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            rpc: {
                4: "https://eth-rinkeby.alchemyapi.io/v2/BT7pi_7fVKZ09UIm_uIpvU-iLAOcdfVJ"
            },
        }
    }
};

const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions // required
});

Object.defineProperty(Vue.prototype, '$web3Modal', { value: web3Modal });