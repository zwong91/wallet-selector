import type { MeteorWallet as MeteorWalletSdk } from "@meteorwallet/sdk";
import type { keyStores } from "near-api-js";

export interface MeteorWalletParams_Injected {
  iconUrl?: string;
  deprecated?: boolean;
}

export interface MeteorWalletState {
  wallet: MeteorWalletSdk;
  keyStore: keyStores.BrowserLocalStorageKeyStore;
}
