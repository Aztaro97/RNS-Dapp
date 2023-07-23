import { nearNetworkConfig } from "@/components/Wallet/configs/nearConfig";
import {
	getChainInfoForNetwork,
	getEndpointsForNetwork,
	getEthereumChainIdForNetwork,
	getNetworkType,
} from "@routerprotocol/router-chain-sdk-ts";

export const DEFAULT_GAS_PRICE = 500000000000;
export const DEFAULT_GAS_LIMIT = 200000;
export const ROUTER_GRPC = getEndpointsForNetwork(
	getNetworkType("testnet")
).grpcEndpoint;
export const ROUTER_LCD = getEndpointsForNetwork(
	getNetworkType("testnet")
).lcdEndpoint;

export const ROUTER_ETH_CHAIN_ID = getEthereumChainIdForNetwork(
	getNetworkType("testnet")
);
export const ROUTER_COSMOS_CHAIN_ID = getChainInfoForNetwork(
	getNetworkType("testnet")
).chainId;

export const PING_PONG_ADDRESS = {
	[nearNetworkConfig.networkId]: "",
	"80001": "0x862f75cB828B21c9A2F406EEb7F5263C1E012700",
	"5": "0x91cfcc4a139573b08646960be31b278152ef3480710ab15d9b39262be37038a1",
	"43113": "0xbeaa89a1abe3c361e015597858f91679d1af03bb442d2ee7cf0b07807c898339",
	[ROUTER_COSMOS_CHAIN_ID]:
		"router1703xucyw0nv2yfs6d082x4crapjly9utn0w2cy42rpcdez3t9dusp287ky",
};
