import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProvider } from "@/components/scroll-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AFGHM - Anchor for Generations Holistic Ministry",
  description: "Anchoring faith, hope, and love across generations through holistic ministry.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollProvider>{children}</ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
