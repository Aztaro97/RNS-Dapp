import React from "react"
import { Info } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import ContentTablePrice from "../contentTablePrice"

const DomainPriceInfos = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Info size={17} className="inline-block cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-1">Domain Price List</DialogTitle>
          <DialogDescription>
            <ContentTablePrice />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DomainPriceInfos
