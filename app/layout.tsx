import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Analytics } from "@/components/analytics"
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello, CartBerry!',
  description: 'Welcome savings-based meal planning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
