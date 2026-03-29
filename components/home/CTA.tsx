import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Hire Your First AI Agent?
        </h2>
        <p className="text-lg text-indigo-200 mb-10 max-w-2xl mx-auto">
          Join 500+ companies that have replaced repetitive headcount with AI agents.
          Deploy in 48 hours. Cancel anytime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Browse AI Agents
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/request"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-500 text-white font-semibold rounded-xl border border-indigo-400 hover:bg-indigo-400 transition-colors"
          >
            Request a Custom Agent
          </Link>
        </div>
      </div>
    </section>
  )
}
