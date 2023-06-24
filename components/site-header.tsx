"use client"

import Link from "next/link"
import { useAccount } from "wagmi"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import ConnectWallet from "@/components/connectWallet"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import NavShoppingCart from "@/components/navShoppingCart"
import SearchInput from "@/components/searchInput"
import { ThemeToggle } from "@/components/theme-toggle"
import UserAvatar from "@/components/userAvatar"

export function SiteHeader() {
  const { isConnected } = useAccount()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-2">
            <SearchInput />
            {isConnected ? <UserAvatar /> : <ConnectWallet />}
            {/* <NavShoppingCart /> */}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
