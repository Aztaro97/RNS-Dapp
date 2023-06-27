"use client"

import React, { FC } from "react"
import Image from "next/image"
import {
  CoinbaseLogo,
  LedgerLogo,
  MetamaskLogo,
  SafepalLogo,
  WalletconnectLogo,
} from "@/assets"
import { useConnect, useDisconnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

const WalletIcon = {
  MetaMask: {
    img: MetamaskLogo,
    name: "MetaMask",
  },
  WalletConnect: {
    img: WalletconnectLogo,
    name: "WalletConnect",
  },
  "Coinbase Wallet": {
    img: CoinbaseLogo,
    name: "Coinbase Wallet",
  },
  //   Safe: {
  //     img: SafepalLogo,
  //     name: "Safe",
  //   },
  Ledger: {
    img: LedgerLogo,
    name: "Ledger",
  },
}

const ConnectWallet = () => {
  const { connect, connectors, isLoading, pendingConnector, error } =
    useConnect()
  const { disconnect } = useDisconnect()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="min-w-max">Connect Wallet</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect Account</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-5">
          <WalletButton
            title={connectors[0].name}
            img="wdwe"
            onClick={() =>
              connect({
                connector: connectors[0],
              })
            }
          />
          <WalletButton
            title={connectors[1].name}
            img="wdwe"
            onClick={() =>
              connect({
                connector: connectors[1],
              })
            }
          />
          <WalletButton
            title={connectors[2].name}
            img="wdwe"
            onClick={() =>
              connect({
                connector: connectors[2],
              })
            }
          />
          <WalletButton
            title={connectors[3].name}
            img="wdwe"
            onClick={() =>
              connect({
                connector: connectors[3],
              })
            }
          />
        </div>

        {/* <Button onClick={() => connectors()}>Metamast</Button> */}
        {error && <p className="text-red-400">{error.message}</p>}
      </DialogContent>
    </Dialog>
  )
}

interface WalletButtonProps {
  title: string
  img: string
  onClick: () => void
}

const WalletButton: FC<WalletButtonProps> = ({ title, img, onClick }) => {
  return (
    <Card onClick={onClick} className="cursor-pointer">
      <CardContent className="flex flex-col items-center justify-center gap-2 p-3">
        <Image
          src={
            WalletIcon[title as keyof typeof WalletIcon].name === title &&
            WalletIcon[title as keyof typeof WalletIcon].img
          }
          width={60}
          height={60}
          alt={title}
          priority={true}
        />
        <h1 className="mb-0 capitalize">{title}</h1>
      </CardContent>
    </Card>
  )
}

export default ConnectWallet
