"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import ConnectWallet from "@/components/connectWallet"
import { Icons } from "@/components/icons"
import NavShoppingCart from "@/components/navShoppingCart"
import SearchInput from "@/components/searchInput"
import { ThemeToggle } from "@/components/theme-toggle"
import UserAvatar from "@/components/userAvatar"

import { useWalletConnected } from "./Wallet/hooks"
import SwitchNetWork from "./switchNetwork"

export function SiteHeader() {
  //   const { isConnected } = useAccount()
  const [isWalletConnected] = useWalletConnected()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-2">
            <SearchInput />
            
            {isWalletConnected ? <SwitchNetWork /> : null}
            {isWalletConnected ? <UserAvatar /> : <ConnectWallet />}
            {/* <NavShoppingCart /> */}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
