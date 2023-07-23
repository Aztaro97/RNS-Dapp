import { CoinbaseLogo, MetamaskLogo, NearLogo, WalletconnectLogo } from "@/assets";
import { WalletId } from "../types";
import { injectedConnector, walletConnectConnector } from "./connectors";

export const walletConfigs = [
	{
		id: WalletId.injected,
		name: "Browser Wallets",
		logoUri: MetamaskLogo,
		connector: injectedConnector,
	},
	{
		id: WalletId.walletconnect,
		name: "WalletConnect",
		logoUri: WalletconnectLogo,
		connector: walletConnectConnector,
	},
	{
		id: WalletId.near,
		name: "My Near Wallet",
		logoUri: NearLogo,
		// Putting injectedConnector here, but has no significance
		connector: injectedConnector,
	},
];
