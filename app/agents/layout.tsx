import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Browse AI Agents',
  description:
    'Explore Hiretecky AI agents for sales, support, recruiting, marketing, software development, analytics, and other business workflows.',
  alternates: {
    canonical: '/agents',
  },
}

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
