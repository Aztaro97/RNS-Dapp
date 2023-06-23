import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
  return (
    <section>
      <Skeleton className="w-20 h-4 mb-5" />
      <Card>
        <CardContent>
          <div className="flex flex-col items-center justify-between gap-5 my-5 md:flex-row">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="w-32 h-4" />
          </div>

          <div className="px-3 py-4 mb-5 rounded-md bg-slate-900">
            <div className="flex items-center justify-between gap-5">
              <Skeleton className="w-20 h-4 mb-5" />
              <Skeleton className="w-20 h-4 mb-5" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <Skeleton className="w-20 h-4 mb-5" />
              <Skeleton className="w-20 h-4 mb-5" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <Skeleton className="w-20 h-4 mb-5" />
              <Skeleton className="w-20 h-4 mb-5" />
            </div>
          </div>

          <div className="flex justify-end w-full">
            <Skeleton className="w-20 h-10 mb-5" />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
