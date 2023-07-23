import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletConnectLegacyConnector } from "wagmi/connectors/walletConnectLegacy";

const walletConnectProjectId = process.env.WALLET_CONNECT_PROJECT_ID as string;

export const walletConnectConnector = new WalletConnectConnector({
	options: {
		projectId: walletConnectProjectId,
		showQrModal: true
	},
});
// export const walletConnectConnector = new WalletConnectLegacyConnector({
//   options: {},
// });
