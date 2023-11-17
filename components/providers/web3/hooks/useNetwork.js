import { useEffect } from "react"
import useSWR from "swr"

const NETWORKS = {
  1: "Ethereum Main Network",
  59144: "Linea Main Network",
  1337: "Ganache",
  137: "Polygon Main Network",
}

const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID]

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/network" : null,
    async () => {
      const chainId = await web3.eth.getChainId()

      if (!chainId) {
        throw new Error("Cannot retreive network. Please refresh the browser.")
      }

      return NETWORKS[chainId]
    }
  )

  useEffect(() => {
    provider &&
      provider.on("chainChanged", chainId => {
        mutate(NETWORKS[parseInt(chainId, 16)])
      })
  }, [web3])

  return {
    data,
    mutate,
    target: targetNetwork,
    isSupported: data === targetNetwork,
    ...rest
  }
}