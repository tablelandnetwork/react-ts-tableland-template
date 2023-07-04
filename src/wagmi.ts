import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import * as chain from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

// All of the chains configured below are supported by Tableland
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    ...(import.meta.env.VITE_ENABLE_TESTNETS === "true"
      ? [
          chain.arbitrumGoerli,
          chain.sepolia,
          chain.polygonMumbai,
          chain.optimismGoerli,
          chain.filecoinCalibration,
          chain.hardhat,
        ]
      : []),
  ],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY ?? "" }), // Set up an Alchemy account: https://www.alchemy.com/
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Tableland Starter",
  chains,
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID ?? "", // Set up a WalletConnect account: https://walletconnect.com/
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };
