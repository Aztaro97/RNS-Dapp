import React, { useCallback, useState } from "react"
import Image from "next/image"
import {
  AvalancheIcon,
  EthereumIcon,
  NearIcon,
  PolygonIcon,
  RouterIcon,
} from "@/assets"
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
import { Icons } from "@/components/icons"

import { switchNetworkInMetamask } from "../Wallet/configs/utils"
import {
  useAccountAddress,
  useNetworkId,
  useWalletConnected,
  useWalletId,
  useWallets,
} from "../Wallet/hooks"
import { WalletId } from "../Wallet/types"
import { useToast } from "../ui/use-toast"

const networkList = [
  {
    id: "80001",
    name: "Polygon",
    value: "Polygon",
    iconUrl: <Icons.polygon className="h-6 w-6" />,
  },
  {
    id: "9601",
    name: "Router Chain",
    value: "Router",
    iconUrl: <Icons.router className="h-6 w-6" />,
  },
  {
    id: "5",
    name: "Ethereum Goerli",
    value: "Goerli",
    iconUrl: <Icons.ethereum className="h-6 w-6" />,
  },
  {
    id: "43114",
    name: "Avalanche Fuji",
    value: "Avalanche",
    iconUrl: <Icons.avalanche className="h-6 w-6" />,
  },
  {
    id: "testnet",
    name: "Near",
    value: "Near",
    iconUrl: <Icons.near className="h-6 w-6" />,
  },
]

type TNetwork = "" | "Polygon" | "Router" | "Near" | "Avalanche" | "Goerli"

const SelectNetWork = () => {
  const [isWalletConnected] = useWalletConnected()
  const [walletId] = useWalletId()
  const [networkId] = useNetworkId()
  const [accountAddress] = useAccountAddress()
  const { handleSendTransaction } = useWallets()
  const [network, setNetwork] = useState<string>(
    networkList.find((item) => item.id === networkId)?.value || ""
  )

  console.log("networkId:   :", networkId)

  const { toast } = useToast()

  const handlePolygonEvm = useCallback(async () => {
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
    // const txRespone = await handleSendTransaction({
    //   from: accountAddress,
    //   to: "0x862f75cb828b21c9a2f406eeb7f5263c1e012700",
    //   value: "0",
    //   data: getDataRaw(accountAddress),
    // })
    // console.log("txRespone evm =>", txRespone)
  }, [isWalletConnected, walletId, networkId, accountAddress])

  const handleAvalancheEvm = useCallback(async () => {
    if (!isWalletConnected) {
      alert("Connect Wallet")
      return
    }
    if (walletId === WalletId.near) {
      alert("Connect to EVM wallet")
      return
    }
    if (networkId !== "43114") {
      await window.walletClient.switchChain({
        id: 43114,
      })
      return
    }
    // const txRespone = await handleSendTransaction({
    //   from: accountAddress,
    //   to: "0x862f75cb828b21c9a2f406eeb7f5263c1e012700",
    //   value: "0",
    //   data: getDataRaw(accountAddress),
    // })
    // console.log("txRespone evm =>", txRespone)
  }, [isWalletConnected, walletId, networkId, accountAddress])

  const handleEthereumEvm = useCallback(async () => {
    if (!isWalletConnected) {
      alert("Connect Wallet")
      return
    }
    if (walletId === WalletId.near) {
      alert("Connect to EVM wallet")
      return
    }
    if (networkId !== "5") {
      await window.walletClient.switchChain({
        id: 5,
      })
      return
    }
    // const txRespone = await handleSendTransaction({
    //   from: accountAddress,
    //   to: "0x862f75cb828b21c9a2f406eeb7f5263c1e012700",
    //   value: "0",
    //   data: getDataRaw(accountAddress),
    // })
    // console.log("txRespone evm =>", txRespone)
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
    // const txResponse = await handleSendTransaction({
    //   routerNetworkEnv: "testnet",
    //   routerContractAddress: PING_PONG_ADDRESS[ROUTER_COSMOS_CHAIN_ID],
    //   routerExecuteMsg: {
    //     i_ping: getRouterExecutionArgs(accountAddress, networkId),
    //   },
    //   routerNodeUrl: ROUTER_LCD,
    // })
    // console.log("txResponse router=>", txResponse)
  }, [isWalletConnected, walletId, networkId, accountAddress])

  const handleNearTx = useCallback(async () => {
    if (!isWalletConnected) {
      alert("Connect Wallet")
      return
    }
    if (walletId !== WalletId.near) {
      toast({
        title: "Connect to Near Wallet",
        variant: "default",
      })
      return
    }
    if (networkId !== "testnet") {
      alert("Connect to Near Testnet")
      return
    }
    // const txResponse = await handleSendTransaction({
    //   methodName: "i_ping",
    //   args: getNearExecutionArgs(accountAddress),
    //   gas: "30000000000000",
    //   deposit: "10000000000000000000000",
    // })
    // console.log("txResponse near=>", txResponse)
  }, [isWalletConnected, walletId, networkId, accountAddress])

  const onChangeSelect = (val: TNetwork) => {
    switch (val) {
      case "Polygon":
        handlePolygonEvm()
        break
      case "Router":
        handleRouterTx()
        break
      case "Near":
        handleNearTx()
        break
      case "Avalanche":
        handleAvalancheEvm()
        break
      case "Goerli":
        handleEthereumEvm()
        break
      default:
        break
    }
    setNetwork(val)
  }

  return (
    <Select value={network} onValueChange={onChangeSelect}>
      <SelectTrigger className="min-w-[180px] max-w-[250px]">
        <SelectValue placeholder="Select Network" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Network</SelectLabel>
          {networkList.map((network, index) => (
            <SelectItem key={index} value={network.value}>
              <div className="flex items-center space-x-2">
                {network.iconUrl}
                <span>{network.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectNetWork
