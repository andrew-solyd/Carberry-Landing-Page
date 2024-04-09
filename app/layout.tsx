import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MetaPixel from "@/components/landing/meta-pixel";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cartberry | AI-powered meal planning',
  description: 'Introducing Cartberry. Personalized, budget-friendly meals directly from your grocer\'s sales.'
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
				<MetaPixel />
      </body>
    </html>
  )
}
