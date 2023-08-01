"use client"

import Image from "next/image"
import { BannerSvg } from "@/assets"
import { getRouterExecutionArgs } from "@/lib"

import {
  PING_PONG_ADDRESS,
  ROUTER_COSMOS_CHAIN_ID,
  ROUTER_LCD,
} from "@/lib/constants"
import { Button } from "@/components/ui/button"
import SearchInputDomain from "@/components/SearchInputDomain"
import {
  useAccountAddress,
  useNetworkId,
  useWallets,
} from "@/components/Wallet/hooks"

export default function IndexPage() {
  const [networkId] = useNetworkId()
  const [accountAddress] = useAccountAddress()

  const { handleSendTransaction } = useWallets()

  const sendTransaction = async () => {
    const txResponse = await handleSendTransaction({
      routerNetworkEnv: "testnet",
      routerContractAddress: PING_PONG_ADDRESS[ROUTER_COSMOS_CHAIN_ID],
      routerExecuteMsg: {
        i_ping: getRouterExecutionArgs(accountAddress, networkId),
      },
      routerNodeUrl: ROUTER_LCD,
    })
    console.log("txResponse router=>", txResponse)
  }
  return (
    <section className="py-10 md:py-20">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row ">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold leading-loose lg:text-5xl">
            Claim Your Unique <span className="text-pink-700">.router</span>{" "}
            Domain Name Today
          </h1>
          <p>
            Discover your ideal .router domain name and establish a standout
            online presence. Find and secure your unique web address today!
          </p>
          <SearchInputDomain />

          {/* <Button onClick={sendTransaction}>
            Send a transaction on router chain{" "}
          </Button> */}
        </div>
        <Image
          className="order-first hidden lg:order-last lg:block"
          src={BannerSvg}
          width={800}
          height={800}
          alt="Banner Image"
          priority
        />
      </div>
    </section>
  )
}
