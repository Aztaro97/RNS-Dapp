"use client"

import React, { FC, useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Minus, Plus } from "lucide-react"
import { useDebounce } from "usehooks-ts"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useWalletConnected } from "@/components/Wallet/hooks"
import DomainPriceInfos from "@/components/domainPriceInfo"

export default function RegisterPage() {
  const [years, setYears] = useState<number>(1)
  const [isWalletConnected] = useWalletConnected()
  const params = useParams()
  const { toast } = useToast()
  const queryDomain = params.domain.toLowerCase()

  const debounceDomain = useDebounce<string>(queryDomain, 500)
  console.log("queryDomain :", queryDomain)

  const handleCheckOut = () => {
    if (!isWalletConnected) {
      toast({
        title: "Please connect your wallet",
        variant: "destructive",
      })
      return
    }

    // Execute the checkout on smart contract
  }

  const onFetchDomainInfo = () => {}

  useEffect(() => {
    // Fetch domain Info
    onFetchDomainInfo()
  }, [debounceDomain])

  return (
    <section>
      <h1 className="mb-5 text-3xl">Registration</h1>
      <Card>
        <CardContent>
          <div className="flex flex-col items-center justify-between gap-5 my-5 md:flex-row">
            <p className="text-2xl">
              Rami.route{" "}
              <span className="relative ml-1 bottom-1">
                <DomainPriceInfos />
              </span>
            </p>
            <SelectYears years={years} setYears={setYears} />
          </div>

          <div className="px-3 py-4 mb-5 bg-gray-200 rounded-md dark:bg-slate-900 ">
            <div className="flex items-center justify-between gap-5 opacity-80">
              <p>{years} year registration</p>
              <p>0.1 ETH</p>
            </div>
            <div className="flex items-center justify-between gap-5 opacity-80">
              <p>Est. network fee</p>
              <p>0.0108 ETH</p>
            </div>
            <div className="flex items-center justify-between gap-5">
              <p>Estimated total</p>
              <p>0.087 ETH</p>
            </div>
          </div>

          <div className="flex justify-end w-full">
            <Button onClick={handleCheckOut}>Checkout</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

interface selectYearsProps {
  years: number
  setYears: React.Dispatch<React.SetStateAction<number>>
}

const SelectYears: FC<selectYearsProps> = ({ setYears, years }) => {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant={"secondary"}
        onClick={() => setYears(years - 1)}
        disabled={years === 1}
      >
        <Minus />
      </Button>
      <div className="px-5 py-1 border border-slate-900">
        <p className="text-lg">
          {years}
          <span className="ml-1 opacity-50">years</span>
        </p>
      </div>
      <Button variant={"secondary"} onClick={() => setYears(years + 1)}>
        <Plus />
      </Button>
    </div>
  )
}
