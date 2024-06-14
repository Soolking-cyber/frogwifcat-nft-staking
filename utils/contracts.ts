import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x6eA56F469f5337d7A78645a1C1e103BF8975B0c7";
const rewardTokenContractAddress = "0x32ce985bCab4961394A9167D15F5d509D6F23f06";
const stakingContractAddress = "0x02B3e8fe0Fa3a27297e258663D71713eB859F061";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});