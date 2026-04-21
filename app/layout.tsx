import type React from "react"
import type { Metadata, Viewport } from "next"
import Navbar from "@/components/navbar"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "External Solutions LLC",
  description:
    "Expertise in working with manufacturing, high-tech, and pharma companies expanding into African markets.",
 
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
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
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  )
}
