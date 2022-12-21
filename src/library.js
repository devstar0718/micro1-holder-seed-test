/**
 * @author Alex
 * @createdAt 12/21/2022
 * @updatedAt 12/21/2022
 **/

import { ethers } from "ethers";

/**
 * @dev generate mnemonic and wallet
 * @return { wallet, mnemonic }
 **/
export const createWallet = async () => {
  const mnemonic = await ethers.utils.entropyToMnemonic(
    ethers.utils.randomBytes(16)
  );
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  return { wallet, mnemonic };
};

/**
 * @param mnemonic wallet mnemonic
 * @returns wallet
 **/
export const importWallet = (mnemonic) => {
  try {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    return wallet;
  } catch (e) {
    return null;
  }
};
