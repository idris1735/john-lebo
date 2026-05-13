import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import { Preloader } from "@/components/preloader"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "John Gaul Lebo - House of Representatives, Abi/Yakurr 2027",
  description:
    "A bold, practical vision for inclusive development, youth empowerment, innovation, education, healthcare and sustainable prosperity across Abi/Yakurr, grounded in proven legislative leadership.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${dmSans.variable} ${fraunces.variable} overflow-x-hidden font-sans antialiased`}>
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
