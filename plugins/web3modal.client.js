import Vue from 'vue';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            rpc: {
                80001: "https://polygon-mumbai.g.alchemy.com/v2/mTaSXw3JVbD7f3p7AnKUgsLL5c4Ls6QN"
            },
        }
    }
};

const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions // required
});

Object.defineProperty(Vue.prototype, '$web3Modal', { value: web3Modal });