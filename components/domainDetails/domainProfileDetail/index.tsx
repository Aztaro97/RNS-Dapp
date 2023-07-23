import React, { FC, useCallback, useEffect, useState } from "react"
import { Check as CheckIcon, Copy as CopyIcon, SkipForward } from "lucide-react"
import CopyToClipboard from "react-copy-to-clipboard"

import { Button } from "@/components/ui/button"

const DomainProfileDetail = () => {
  return (
    <div className="grid grid-cols-1 gap-10 py-5 md:grid-cols-3">
      <div className="space-y-4 ">
        <div className="px-2 py-3 bg-gray-200 rounded-md dark:bg-slate-900 ">
          <p className="text-sm opacity-80">Registered</p>
          <h3>September 10, 2021</h3>
          <p className="text-sm opacity-80">18:17:40 GMT+4</p>
        </div>
        <div className="px-2 py-3 bg-gray-200 rounded-md dark:bg-slate-900 ">
          <p className="text-sm opacity-80">Expired</p>
          <h3>September 10, 2024</h3>
          <p className="text-sm opacity-80">11:13:60 GMT+4</p>
        </div>
        <Button variant={"pink"}>
          <SkipForward />
          Extend
        </Button>
      </div>

      <div className="w-full space-y-3 md:col-span-2">
        <WalletAddress
          label="ETH Address"
          address="0x9a88140C742C3e5a9D7623f12A45Ba2366729f43"
        />
        <WalletAddress
          label="Router Chain Address"
          address="0x9a88140C742C3e5a9D7623f12A45Ba2366729f43"
        />
        <WalletAddress
          label="Owner Address"
          address="0x9a88140C742C3e5a9D7623f12A45Ba2366729f43"
        />
      </div>
    </div>
  )
}

interface walletProps {
  label: string
  address: string
}

const WalletAddress: FC<walletProps> = ({ label, address }) => {
  const [isCopy, setIsCopy] = useState<boolean>(false)

  const onCopy = useCallback(() => {
    setIsCopy(true)
  }, [])

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setIsCopy(false)
      }, 2000)
    }
  }, [isCopy])
  return (
    <div className="space-y-2">
      <p className="text-sm opacity-80">{label}</p>
      <div className="flex items-center justify-between gap-2 p-2 bg-gray-200 rounded-md dark:bg-slate-900">
        <p>taro.eth</p>
        <CopyToClipboard onCopy={onCopy} text={address}>
          {isCopy ? (
            <CheckIcon size={15} className="cursor-pointer" />
          ) : (
            <CopyIcon size={15} className="cursor-pointer" />
          )}
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default DomainProfileDetail
