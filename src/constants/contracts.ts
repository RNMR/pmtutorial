import { client } from "@/app/client"
import { getContract } from "thirdweb"
import { baseSepolia } from "thirdweb/chains"

export const predictionMarketContractAddress = "0x8a6b7b75a"    // Estos se sacan de thirdweb platform
export const tokenContractAddress = "0xba76b6a"

export const predictionMarketContract = getContract({
  client: client,
  chain: baseSepolia,
  address: predictionMarketContractAddress,
})

export const tokenContract = getContract({
  client: client,
  chain: baseSepolia,
  address: tokenContractAddress,
})