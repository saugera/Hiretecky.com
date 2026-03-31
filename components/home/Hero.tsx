import Link from 'next/link'
import { ArrowRight, Shield, Clock, Zap, Star, Check } from 'lucide-react'

const previewAgents = [
  { icon: '🎯', name: 'LeadForge AI', role: 'Sales & Lead Gen', status: 'Active', metric: '3.2x pipeline' },
  { icon: '💬', name: 'SupportIQ AI', role: 'Customer Support', status: 'Active', metric: '82% auto-resolved' },
  { icon: '👥', name: 'TalentMatch AI', role: 'HR & Recruiting', status: 'Active', metric: 'Shortlist in 48hrs' },
]

export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium mb-6">
              <Star className="w-3.5 h-3.5 fill-indigo-400" />
              Built by staffing veterans who know what good hiring looks like
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-5 leading-tight">
              Automate the Repetitive.<br />
              <span className="text-indigo-600">Scale with AI Agents.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-5 leading-relaxed">
              We spent 10 years helping companies hire great humans. Now we help them deploy AI Agents for the roles that don't need one — Sales, Support, HR, Finance, and more.
            </p>

            {/* Guarantee */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
              14-Day Performance Guarantee — fix it or refund you
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/agents"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
              >
                Browse AI Agents
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-300 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                Book a Free Demo
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-5 text-sm text-slate-500">
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
          </div>

          {/* Right — agent preview card */}
          <div className="hidden lg:block">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Your AI Workforce</p>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  3 agents active
                </span>
              </div>

              {/* Agent list */}
              <div className="space-y-3 mb-5">
                {previewAgents.map((a) => (
                  <div key={a.name} className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-slate-200">
                    <span className="text-2xl">{a.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm truncate">{a.name}</p>
                      <p className="text-xs text-slate-400">{a.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-semibold text-emerald-600">{a.metric}</p>
                      <p className="text-xs text-slate-400">{a.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '500+', label: 'Companies' },
                  { value: '80%', label: 'Cost saved' },
                  { value: '24/7', label: 'Always on' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">{s.value}</p>
                    <p className="text-xs text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA strip */}
              <div className="mt-4 bg-indigo-600 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-300" />
                  <span className="text-white text-xs font-medium">Deploy in 48 hours</span>
                </div>
                <Link href="/agents" className="text-xs font-semibold text-indigo-200 hover:text-white transition-colors">
                  Browse agents →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
