import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import Navbar from "@/components/navbar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "External Solutions LLC",
  description:
    "Expertise in working with manufacturing, high-tech, and pharma companies expanding into African markets.",
 
   icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "./site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
