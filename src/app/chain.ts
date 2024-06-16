import { defineChain } from "thirdweb";
// import { baseSepolia } from "thirdweb/chains";

export const chain = defineChain(parseInt(process.env.NEXT_PUBLIC_CHAIN_ID!) || 59144);