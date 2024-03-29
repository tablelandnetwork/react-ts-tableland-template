// Convert wagmi/viem `Client` to ethers `Signer`
import { useMemo } from "react";
import { providers, type Signer } from "ethers";
import { useWalletClient } from "wagmi";
import type { Account, Chain, Client, Transport } from "viem";

function walletClientToSigner(
  walletClient: Client<Transport, Chain, Account>
): Signer {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

export function useSigner({ chainId }: { chainId?: number } = {}):
  | Signer
  | undefined {
  const { data: walletClient } = useWalletClient({ chainId });
  return useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient]
  );
}
