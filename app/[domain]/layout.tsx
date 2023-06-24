import React from "react"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function DomainLayout({ children }: RootLayoutProps) {
  return <main className="max-w-2xl py-10 mx-auto">{children}</main>
}
