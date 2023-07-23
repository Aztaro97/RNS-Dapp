import React, { useCallback, useState } from "react"
import { getDataRaw, getNearExecutionArgs, getRouterExecutionArgs } from "@/lib"

import {
  PING_PONG_ADDRESS,
  ROUTER_COSMOS_CHAIN_ID,
  ROUTER_ETH_CHAIN_ID,
  ROUTER_LCD,
} from "@/lib/constants"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { switchNetworkInMetamask } from "../Wallet/configs/utils"
import {
  useAccountAddress,
  useNetworkId,
  useWalletConnected,
  useWalletId,
  useWallets,
} from "../Wallet/hooks"
import { WalletId } from "../Wallet/types"

type TNetwork = "" | "Polygon" | "Router" | "Near"

const SwitchNetWork = () => {
  const [isWalletConnected] = useWalletConnected()
  const [walletId] = useWalletId()
  const [networkId] = useNetworkId()
  const [accountAddress] = useAccountAddress()
  const { handleSendTransaction } = useWallets()
  const [network, setNetwork] = useState<TNetwork>("")

  const handleEvmTx = useCallback(async () => {
    if (!isWalletConnected) {
      alert("Connect Wallet")
      return
    }
    if (walletId === WalletId.near) {
      alert("Connect to EVM wallet")
      return
    }
    if (networkId !== "80001") {
      await window.walletClient.switchChain({
        id: 80001,
      })
      return
    }
    const txRespone = await handleSendTransaction({
      from: accountAddress,
      to: "0x862f75cb828b21c9a2f406eeb7f5263c1e012700",
      value: "0",
      data: getDataRaw(accountAddress),
    })
    console.log("txRespone evm =>", txRespone)
  }, [isWalletConnected, walletId, networkId, accountAddress])

  const handleRouterTx = useCallback(async () => {
    if (!isWalletConnected) {
      alert("Connect Wallet")
      return
    }
    if (walletId === WalletId.near) {
      alert("Connect to EVM wallet")
      return
    }
    if (networkId !== ROUTER_ETH_CHAIN_ID.toString()) {
      await switchNetworkInMetamask()
      return
    }
    const txResponse = await handleSendTransaction({
      routerNetworkEnv: "testnet",
      routerContractAddress: PING_PONG_ADDRESS[ROUTER_COSMOS_CHAIN_ID],
      routerExecuteMsg: {
        i_ping: getRouterExecutionArgs(accountAddress),
      },
      routerNodeUrl: ROUTER_LCD,
    })
    console.log("txResponse router=>", txResponse)
  }, [isWalletConnected, walletId, networkId, accountAddress])

  const handleNearTx = useCallback(async () => {
    if (!isWalletConnected) {
      alert("Connect Wallet")
      return
    }
    if (walletId !== WalletId.near) {
      alert("Connect to Near Wallet")
      return
    }
    if (networkId !== "testnet") {
      alert("Connect to Near Testnet")
      return
    }
    const txResponse = await handleSendTransaction({
      methodName: "i_ping",
      args: getNearExecutionArgs(accountAddress),
      gas: "30000000000000",
      deposit: "10000000000000000000000",
    })
    console.log("txResponse near=>", txResponse)
  }, [isWalletConnected, walletId, networkId, accountAddress])

  const onChangeSelect = (val: TNetwork) => {
    if (val === "Polygon") {
      handleEvmTx()
    }
    if (val === "Router") {
      handleRouterTx()
    }
    if (val === "Near") {
      handleNearTx()
    }
    setNetwork(val)
    console.log("val : ", val)
  }

  return (
    <Select onValueChange={onChangeSelect}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select a Network" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Network</SelectLabel>
          <SelectItem value="Polygon">Polygon Mumbai</SelectItem>
          <SelectItem value="Router">Router Chain</SelectItem>
          <SelectItem value="Near">Near Chain</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SwitchNetWork
