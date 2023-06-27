import React from "react"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function DomainLayout({ children }: RootLayoutProps) {
  return <main className="max-w-2xl mx-auto my-3 md:py-10">{children}</main>
}
