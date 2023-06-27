"use client"

import React, { useCallback, useEffect, useState } from "react"
import { Check as CheckIcon, Copy as CopyIcon } from "lucide-react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DomainProfileDetail,
  DomainRecordDetail,
  DomainSubNameDetail,
} from "@/components/domainDetails"

export default function DomainNamePage() {
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
    <section className="flex flex-col items-center w-full">
      <div className="flex items-center gap-4 mb-5">
        <h1 className="text-5xl">Rami.route </h1>
        <CopyToClipboard onCopy={onCopy} text="Rami.route">
          {isCopy ? (
            <CheckIcon className="cursor-pointer" />
          ) : (
            <CopyIcon className="cursor-pointer" />
          )}
        </CopyToClipboard>
      </div>
      <Tabs defaultValue="Profile" className="w-full max-w-2xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="Profile">Profile</TabsTrigger>
          <TabsTrigger value="Records">Records</TabsTrigger>
          <TabsTrigger value="SubName">Sub Names</TabsTrigger>
        </TabsList>
        <TabsContent value="Profile">
          <Card>
            <CardContent>
              <DomainProfileDetail />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Records">
          <Card>
            <CardContent>
              <DomainRecordDetail />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="SubName">
          <Card>
            <CardContent>
              <DomainSubNameDetail />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
