import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request an AI Agent',
  description:
    'Request a Hiretecky AI agent or custom AI service for your workflow, team, and business goals.',
  alternates: {
    canonical: '/request',
  },
}

export default function RequestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
