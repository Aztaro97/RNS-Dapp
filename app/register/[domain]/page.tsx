"use client"

import React, { FC, useState } from "react"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RegisterPage() {
  const [years, setYears] = useState<number>(1)
  return (
    <section>
      <h1 className="mb-5 text-3xl">Registration</h1>
      <Card>
        <CardContent>
          <div className="flex flex-col items-center justify-between gap-5 my-5 md:flex-row">
            <p className="text-2xl">Rami.route - {years} Years</p>
            <SelectYears years={years} setYears={setYears} />
          </div>

          <div className="px-3 py-4 mb-5 rounded-md bg-slate-900">
            <div className="flex items-center justify-between gap-5">
              <p>1 year registration</p>
              <p>0.1 ETH</p>
            </div>
            <div className="flex items-center justify-between gap-5">
              <p>Est. network fee</p>
              <p>0.0108 ETH</p>
            </div>
            <div className="flex items-center justify-between gap-5">
              <p>Estimated total</p>
              <p>0.087 ETH</p>
            </div>
          </div>

          <div className="flex justify-end w-full">
            <Button>Checkout</Button>
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
      <Button variant={"secondary"} onClick={() => setYears(years - 1)} disabled={years === 1}>
        <Minus />
      </Button>
      <Input
        defaultValue={years}
        value={years}
        onChange={(e) => setYears(e.target.valueAsNumber)}
        type="number"
        min={1}
        maxLength={10}
        className="max-w-[70px] text-center text-xl"
      />
      <Button variant={"secondary"} onClick={() => setYears(years + 1)}>
        <Plus />
      </Button>
    </div>
  )
}
