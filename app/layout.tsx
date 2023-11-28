import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello, CartBerry!',
  description: 'Welcome to your perfect shopping cart.',
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
      </body>
    </html>
  )
}
