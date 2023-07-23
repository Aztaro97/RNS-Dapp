import React, { FC, useCallback, useEffect, useState } from "react"
import { Check as CheckIcon, Copy as CopyIcon, SkipForward } from "lucide-react"
import CopyToClipboard from "react-copy-to-clipboard"

import { Button } from "@/components/ui/button"

const DomainRecordDetails = () => {
  return (
    <div className="py-5">
      <div className="w-full space-y-3 md:col-span-2">
        <WalletAddress
          label="ETH Address"
          address="0x9a88140C742C3e5a9D7623f12A45Ba2366729f43"
        />
        <WalletAddress
          label="SoLana Adress"
          address="0x9a88140C742C3e5a9D7623f12A45Ba2366729f43"
        />
        <WalletAddress
          label="Router Chain Address"
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
        <p>{address}</p>
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

export default DomainRecordDetails
