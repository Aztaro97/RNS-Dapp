"use client"

import React, { FC } from "react"
import Image from "next/image"

import { walletConfigs } from "../Wallet/configs/ProviderConfig"
import { useWalletConnected, useWallets } from "../Wallet/hooks"
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

declare global {
  interface Window {
    walletClient: any
    // ethereum: any
    frontier: any
    cosmostation: any
  }
}

const ConnectWallet = () => {
  const [isWalletConnected] = useWalletConnected()
  const { handleConnect } = useWallets()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="min-w-max">Connect Wallet</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect Account</DialogTitle>
        </DialogHeader>
        {walletConfigs.map((wallet, index) => (
          <WalletButton
            key={index}
            title={wallet.name}
            img={wallet.logoUri}
            onClick={() => {
              handleConnect(wallet)
            }}
          />
        ))}
        {/* {error && <p className="text-red-400">{error.message}</p>} */}
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
          src={img}
          width={60}
          height={60}
          alt={"Wallet "}
          priority={true}
        />
        <h1 className="mb-0 capitalize">{title}</h1>
      </CardContent>
    </Card>
  )
}

export default ConnectWallet
