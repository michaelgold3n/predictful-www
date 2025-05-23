import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Predictful',
  description: 'Use AI to optimize your X posts for maximum engagement',
  icons: {
    icon: '/picon.png',
    apple: '/picon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/picon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 