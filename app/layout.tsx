import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Analytics } from "@/components/analytics"
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cartberry | Spend less on groceries, make fantastic meals',
  description: 'Cartberry finds the best deals at your go-to stores and creates delicious recipes to maximize savings. Stop breaking your food budget. Get an organized grocery list that maximizes savings.',
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
