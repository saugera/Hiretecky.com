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

export default function HomePage() {
  return (
    <>
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
