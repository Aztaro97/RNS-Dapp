import React from "react"
import Link from "next/link"
import { ShoppingCart as ShoppingCartIcon } from "lucide-react"

import { Skeleton } from "../ui/skeleton"

const SearchInputResult = () => {
  return (
    <Link href="/register/reem">
      <div className="flex items-center justify-between gap-2 px-3 py-3 border cursor-pointer bg-card">
        <p className="text-lg">reem.route</p>
        <div className="flex items-center gap-2">
          <p className="px-3 py-2 text-green-600 bg-green-200 rounded-sm">
            Available
          </p>
          <p className="px-3 py-2 rounded-sm bg-secondary">
            <ShoppingCartIcon />
          </p>
        </div>
      </div>
    </Link>
  )
}

SearchInputResult.Skeleton = function SearchInputResultSkeleton() {
  return (
    <div className="flex items-center justify-between gap-2 px-3 py-3 border bg-card">
      <Skeleton className="w-20 h-4" />
      <div className="flex items-center space-x-3">
        <Skeleton className="w-20 h-10" />
        <Skeleton className="w-10 h-10" />
      </div>
    </div>
  )
}

export default SearchInputResult
