/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  WZETA,
  WZETAInterface,
} from "../../../../contracts/zevm/ZetaConnectorZEVM.sol/WZETA";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class WZETA__factory {
  static readonly abi = _abi;
  static createInterface(): WZETAInterface {
    return new utils.Interface(_abi) as WZETAInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WZETA {
    return new Contract(address, _abi, signerOrProvider) as WZETA;
  }
}
