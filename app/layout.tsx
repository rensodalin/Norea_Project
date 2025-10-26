import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "ANT Archviz - Architectural Visualization Portfolio",
  description: "Premium 3D architectural visualization and rendering services",
  generator: "v0.app",
  icons: {
    icon: "/projects/Tipsbox logo png.png",
    apple: "/projects/Tipsbox logo png.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ScrollProgress />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
