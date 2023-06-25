import React from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ContentTablePrice = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name Length</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">5+ characters</TableCell>
          <TableCell className="text-right">0.0025 ETH/year</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">4 characters</TableCell>
          <TableCell className="text-right">0.08 ETH/year</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">3 characters</TableCell>
          <TableCell className="text-right">0.32 ETH/year</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default ContentTablePrice
