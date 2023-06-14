import React from "react"

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
import { Files, LogOut, User, Wallet, List } from "lucide-react"

const UserAvatar = () => {
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
            <span>0x9a88140c7c</span>
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
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
		</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAvatar
