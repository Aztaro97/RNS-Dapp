"use client"

import React from "react"
import { useConnect, useDisconnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

import { Button } from "../ui/button"

const ConnectWallet = () => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return <Button onClick={() => connect()}>Connect Wallet</Button>
}

export default ConnectWallet
