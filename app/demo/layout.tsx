import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'Book a Hiretecky demo to see AI agent workflows for software, sales, support, recruiting, marketing, and analytics.',
  alternates: {
    canonical: '/demo',
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
