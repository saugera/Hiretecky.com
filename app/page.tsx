import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Integrations from '@/components/home/Integrations'
import Features from '@/components/home/Features'
import Differentiators from '@/components/home/Differentiators'
import HowItWorks from '@/components/home/HowItWorks'
import AgentShowcase from '@/components/home/AgentShowcase'
import ROICalculator from '@/components/home/ROICalculator'
import Testimonials from '@/components/home/Testimonials'
import LeadMagnet from '@/components/home/LeadMagnet'
import CTA from '@/components/home/CTA'
import { absoluteUrl, jsonLd } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AI Agent Services for Sales, Support, Recruiting, Marketing, and Software',
  description:
    'Hiretecky deploys AI agent services that help companies automate software development, sales, support, recruiting, marketing, and analytics workflows.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Hiretecky',
    url: absoluteUrl('/'),
    description:
      'Managed AI agent services for business teams across software development, sales, support, recruiting, marketing, and analytics.',
    areaServed: 'Worldwide',
    serviceType: [
      'AI software development services',
      'AI sales and lead generation services',
      'AI customer support services',
      'AI recruiting services',
      'AI marketing services',
      'AI analytics services',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homeJsonLd) }}
      />
      <Hero />
      <Integrations />
      <Features />
      <Differentiators />
      <HowItWorks />
      <AgentShowcase />
      <ROICalculator />
      <Testimonials />
      <LeadMagnet />
      <CTA />
    </>
  )
}
