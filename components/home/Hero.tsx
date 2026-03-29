import Link from 'next/link'
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium mb-6">
          <Zap className="w-3.5 h-3.5" />
          The Future of Work Has Arrived
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
          Stop Hiring Humans.<br />
          <span className="text-indigo-600">Hire AI Agents.</span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          Hiretecky is the marketplace where growing companies hire AI Agents for Sales,
          Support, HR, Finance, and more — at a fraction of the cost, available 24/7,
          and deployed in days, not months.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Browse AI Agents
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/request"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-300 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
          >
            Request Custom Agent
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-500" />
            SOC 2 Compliant
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-500" />
            Deploy in 48 hours
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" />
            No long-term contracts
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '500+', label: 'Companies Hiring' },
            { value: '8', label: 'Agent Categories' },
            { value: '80%', label: 'Cost Reduction' },
            { value: '24/7', label: 'Always On' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
