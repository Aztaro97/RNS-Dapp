"use client"

import { WagmiConfig, createConfig, configureChains, mainnet, WagmiConfigProps } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygonMumbai } from "wagmi/chains"
import { InjectedConnector } from "wagmi/connectors/injected"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"

const HTTP_PROVIDER_URL: string = "efefwefwe"

const { publicClient, webSocketPublicClient, chains } = configureChains(
	[mainnet, polygonMumbai],
	[publicProvider(),
	jsonRpcProvider({
		rpc: () => ({
			http: HTTP_PROVIDER_URL
		})
	})
	],
)

export const configWagmi = createConfig({
	publicClient,
	webSocketPublicClient,
	autoConnect: true,
	connectors: [
		new InjectedConnector({
			chains,
			options: {
				name: "frontier",
				shimDisconnect: true
			},
			// options: {
			// 	name: 'My Injected Wallet',
			// 	getProvider: () =>
			// 		typeof window !== 'undefined' ? window.frontier : undefined,
			// },
		})
	]
})

