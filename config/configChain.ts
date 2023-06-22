"use client"

import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygonMumbai, polygon, goerli, polygonZkEvm, polygonZkEvmTestnet, optimismGoerli, arbitrum, arbitrumGoerli, optimism } from "wagmi/chains"
import { InjectedConnector } from "wagmi/connectors/injected"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { SafeConnector } from 'wagmi/connectors/safe'
import { LedgerConnector } from 'wagmi/connectors/ledger'
import { alchemyProvider } from "wagmi/providers/alchemy"

const HTTP_PROVIDER_URL: string = "efefwefwe"

const { publicClient, webSocketPublicClient, chains } = configureChains(
	[mainnet, goerli, polygon, polygonMumbai, polygonZkEvm, polygonZkEvmTestnet, optimismGoerli, arbitrumGoerli, arbitrum, optimism],
	[
		publicProvider(),
		alchemyProvider({
			apiKey: "wfwefwefwe"
		}),
		// jsonRpcProvider({
		// 	rpc: () => ({
		// 		http: HTTP_PROVIDER_URL
		// 	})
		// }),
	],
)

export const configWagmi = createConfig({
	publicClient,
	webSocketPublicClient,
	autoConnect: true,
	connectors: [
		new MetaMaskConnector({ chains }),
		// new InjectedConnector({
		// 	chains,
		// 	options: {},
		// }),
		new CoinbaseWalletConnector({
			chains,
			options: {
				appName: 'frontier',
			},
		}),
		new WalletConnectConnector({
			chains,
			options: {
				// metadata: {
				// 	name: "frontier",
				// 	description:
				// 		"Connect to frontier Wallet (using WalletConnect)",
				// 	url: "https://frontier.xyz",
				// 	icons: ["https://frontier.xyz/favicon.ico"],
				// },
				// projectId: process.env.WALLET_CONNECT_PROJECT_ID as string,
				projectId: "407031e67af3faad21b1bea773eaed51",
				showQrModal: true
			},
		}),
		new LedgerConnector({
			chains: [mainnet],
		}),
		new SafeConnector({
			chains,
			options: {
				allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
				debug: false,
			},
		})

	]
})

