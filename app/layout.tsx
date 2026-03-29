import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hiretecky — Hire AI Agents, Not Humans',
  description:
    'The marketplace where companies hire AI Agents for Sales, Support, HR, Finance, and more. Deploy in 48 hours at a fraction of the cost.',
  keywords: 'AI agents, hire AI, AI workforce, artificial intelligence staffing, AI automation',
  openGraph: {
    title: 'Hiretecky — Hire AI Agents, Not Humans',
    description: 'The marketplace where companies hire AI Agents instead of humans.',
    siteName: 'Hiretecky',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
