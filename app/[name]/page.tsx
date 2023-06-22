"use client"

import React, { useCallback, useEffect, useState } from "react"
import { Check as CheckIcon, Copy as CopyIcon } from "lucide-react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
              <h1 className="text-3xl">Profile Section</h1>
              Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia
              etiam sagittis volutpat, curae sed cursus inceptos vehicula diam
              odio accumsan eros laoreet, at neque lacus tempus imperdiet tellus
              non mollis vitae tristique. Pellentesque cum id mus pulvinar
              vulputate semper gravida suspendisse facilisis, potenti ac cras
              erat congue quisque erat volutpat sem cras euismod, auctor mauris
              porta sed diam a aliquet suscipit sapien montes morbi. Inceptos
              curabitur nostra varius id e
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Records">
          <Card>
            <CardContent>
              <h1 className="text-3xl">Records Section</h1>
              Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia
              etiam sagittis volutpat, curae sed cursus inceptos vehicula diam
              odio accumsan eros laoreet, at neque lacus tempus imperdiet tellus
              non mollis vitae tristique. Pellentesque cum id mus pulvinar
              vulputate semper gravida suspendisse facilisis, potenti ac cras
              erat congue quisque luctus habitant, eu maecenas a felis nisl nam
              suscipit ridiculus. Integer senectus nascetur pellentesque fusce
              ut tortor ridiculus aenean q
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="SubName">
          <Card>
            <CardContent>
              <h1 className="text-3xl">SubName Section</h1>
              ristique. Pellentesque cum id mus pulvinar vulputate semper
              gravida suspendisse facilisis, potenti ac cras erat congue quisque
              luctus habitant, eu maecenas a felis nisl nam suscipit ridiculus.
              Integer senectus nascetur pellentesque fusce ut tortor ridiculus
              aenean quam dignissim mattis platea, vivamus quis dictum elementum
              velit lacinia placerat volutpat sem cras euismod, auctor mauris
              porta sed diam a aliquet suscipit sapien montes morbi. Inceptos
              curabitur nostra varius id e
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
