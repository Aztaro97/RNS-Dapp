import React from "react"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <main className="max-w-2xl mx-auto">{children}</main>
}
