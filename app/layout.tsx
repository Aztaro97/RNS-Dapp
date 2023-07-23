import "@/styles/globals.css"
import { Metadata } from "next"
import { WagmiConfig } from "wagmi"

import { configWagmi } from "@/config/configChain"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import WalletContextProvider from "@/components/Wallet/context/wallet/ContextProvider"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {/* <WagmiConfig config={configWagmi}> */}
          <WalletContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="flex flex-col max-h-screen min-h-screen">
                <SiteHeader />
                <div className="container flex-1 pt-10">{children}</div>
              </div>
            </ThemeProvider>
          </WalletContextProvider>
          {/* </WagmiConfig> */}
          <Toaster />
        </body>
      </html>
    </>
  )
}
