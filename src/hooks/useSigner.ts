// Convert wagmi/viem `Client` to ethers `Signer`
import { useMemo } from "react";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import { type Config, useConnectorClient } from "wagmi";
import type { Account, Chain, Client, Transport } from "viem";

function walletClientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

export function useSigner({ chainId }: { chainId?: number } = {}):
  | JsonRpcSigner
  | undefined {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(
    () => (client ? walletClientToSigner(client) : undefined),
    [client]
  );
}
