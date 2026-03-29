import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import HowItWorks from '@/components/home/HowItWorks'
import AgentShowcase from '@/components/home/AgentShowcase'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <AgentShowcase />
      <Testimonials />
      <CTA />
    </>
  )
}
