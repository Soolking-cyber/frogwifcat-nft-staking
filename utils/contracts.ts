import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = process.env.NEXT_PUBLIC_NFT_CONTRACT as string || "0x1D3bd1CfD56954011F9B41085c54389e3161765e";
const rewardTokenContractAddress = process.env.NEXT_PUBLIC_REWARD_CONTRACT as string || "0x889400fB9BDE04BFdf353cC718fED3d6dDcF735F";
const stakingContractAddress = process.env.NEXT_PUBLIC_STAKE_CONTRACT as string || "0x901E9D052c77dD92e805a64CFD9cB06f214b3F2E";

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