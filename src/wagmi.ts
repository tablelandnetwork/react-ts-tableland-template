import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import * as chain from "wagmi/chains";
import { type HttpTransport, http } from "viem";

// All of the chains configured below are supported by Tableland
const chains = [
  chain.mainnet,
  chain.polygon,
  chain.optimism,
  chain.arbitrum,
  chain.filecoin,
  ...(import.meta.env.VITE_ENABLE_TESTNETS === "true"
    ? [
        chain.arbitrumSepolia,
        chain.sepolia,
        chain.polygonAmoy,
        chain.optimismSepolia,
        chain.filecoinCalibration,
        chain.hardhat,
      ]
    : []),
] as const;

const transports: Record<number, HttpTransport> = Object.fromEntries(
  chains.map((c) => [c.id, http()])
);

export const config = getDefaultConfig({
  appName: "Tableland Starter",
  chains,
  transports,
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID ?? "", // Set up a WalletConnect account: https://walletconnect.com/
});
