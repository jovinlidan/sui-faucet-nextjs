"use server";

import { getFaucetHost, requestSuiFromFaucetV0 } from "@mysten/sui.js/faucet";
import { MIST_PER_SUI, isValidSuiAddress } from "@mysten/sui.js/utils";

export async function requestFaucet(prevState: any, formData: FormData) {
  "use server";
  try {
    const rawFormData = {
      address: formData.get("address"),
      network: formData.get("network"),
    };
    if (!isValidSuiAddress(rawFormData.address as string)) {
      throw Error("Invalid SUI address");
    }

    const res = await requestSuiFromFaucetV0({
      host: getFaucetHost(rawFormData.network as any),
      recipient: rawFormData.address as string,
    });
    if (res.error) {
      throw new Error(res.error);
    }

    const totalSuiMinted =
      res.transferredGasObjects[0].amount / Number(MIST_PER_SUI);
    return {
      error: String(),
      success: `${totalSuiMinted} SUI minted to ${rawFormData.address}`,
    };
  } catch (error: any) {
    return {
      error: error.message as string,
      success: String(),
    };
    //   throw error;
  }
}
