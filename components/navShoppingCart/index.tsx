import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import React from "react"

const NavShoppingCart= () => {
	return (
		<Link href="/cart" className="relative">
			<ShoppingCart size={30} />
			<span className="bg-[#CF088C] p-1 absolute text-[10px] -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full text-white">2</span>
		</Link>
	)
}

export default NavShoppingCart;