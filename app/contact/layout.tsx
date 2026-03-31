import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Hiretecky',
  description:
    'Contact Hiretecky about AI agent services, pricing, demos, implementation questions, or custom automation projects.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
