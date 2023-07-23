import React, { useMemo } from "react"
import { Files, List, LogOut, User, Wallet } from "lucide-react"
import truncateEthAddress from "truncate-eth-address"
import { useAccount, useDisconnect } from "wagmi"

import { walletConfigs } from "../Wallet/configs/ProviderConfig"
import { useAccountAddress, useWalletId, useWallets } from "../Wallet/hooks"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const UserAvatar = () => {
//   const { disconnect } = useDisconnect()
//   const { address } = useAccount()
  const [walletId] = useWalletId()
  const [accountAddress] = useAccountAddress()
  const { handleDisconnect } = useWallets()

  const wallet = useMemo(
    () => walletConfigs.filter((wallet) => wallet.id === walletId)[0],
    [walletId]
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer h-8 w-8">
          <AvatarImage src="https://i.pravatar.cc" alt="SVG" />
          <AvatarFallback>Taro</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Wallet className="mr-2 h-4 w-4" />
            <span>{truncateEthAddress(accountAddress!)}</span>
            <DropdownMenuShortcut>
              <Files className="h-4 w-4" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <List className="mr-2 h-4 w-4" />
            <span>My Domains</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleDisconnect(wallet)}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAvatar
