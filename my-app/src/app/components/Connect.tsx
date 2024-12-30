import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

import { createWallet } from "thirdweb/wallets";

import { client } from "@/app/client";


const wallets = [
  createWallet("com.coinbase.wallet"),
  createWallet("io.rabby"),
  createWallet("com.okex.wallet"),
  createWallet("io.metamask"),
];

export default function Connect() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectModal={{ size: "compact" }}
      appMetadata={{
        name: "Example App",
        url: "https://example.com",
      }}
    />
  );
}