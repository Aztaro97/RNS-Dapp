import React, { KeyboardEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { useDebounce } from "usehooks-ts"

import { Input } from "../ui/input"

const SearchInput = () => {
  const [name, setName] = useState<string>("")
  const router = useRouter()

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log("submitted")
    if (e.key === "Enter") {
      router.push(`/register/${name}`)
    }
  }

  return (
    <Input
      type="text"
      placeholder="Search Domain Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  )
}

export default SearchInput
