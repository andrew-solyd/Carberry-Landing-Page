import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import './globals.css'

import { Analytics } from '@/components/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cartberry | Spend less on groceries, make fantastic meals',
  description: 'Cartberry finds the best deals at your go-to stores and creates delicious recipes to maximize savings. Stop breaking your food budget with our new take on meal planning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
			<Head>
        {/* Preconnect or DNS-prefetch resource hints */}
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        {/* Ensure to replace 'https://cdn.sanity.io' with the actual domain you're using */}
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
