import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { services } from '@/lib/services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agent Services | Hiretecky',
  description: 'Deploy AI agents for software development, sales, customer support, HR, marketing, and data analytics — starting at $299/month.',
}

const colorAccentMap: Record<string, string> = {
  slate: 'bg-slate-800',
  indigo: 'bg-indigo-600',
  blue: 'bg-blue-600',
  violet: 'bg-violet-600',
  pink: 'bg-pink-600',
  cyan: 'bg-cyan-600',
}

const colorBorderMap: Record<string, string> = {
  slate: 'border-slate-300 hover:border-slate-400',
  indigo: 'border-indigo-200 hover:border-indigo-400',
  blue: 'border-blue-200 hover:border-blue-400',
  violet: 'border-violet-200 hover:border-violet-400',
  pink: 'border-pink-200 hover:border-pink-400',
  cyan: 'border-cyan-200 hover:border-cyan-400',
}

const colorTextMap: Record<string, string> = {
  slate: 'text-slate-700',
  indigo: 'text-indigo-600',
  blue: 'text-blue-600',
  violet: 'text-violet-600',
  pink: 'text-pink-600',
  cyan: 'text-cyan-600',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">AI Agent Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Replace Headcount<br className="hidden sm:block" /> With AI Agents
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            From software development to sales, support to recruiting — we deploy AI agents
            that work inside your existing tools, at a fraction of the cost of hiring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/demo"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/request"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-sm"
            >
              Request Custom Agent
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-500">
            {['14-day performance guarantee', 'No long-term contracts', 'Live in 48 hours', 'SOC 2 compliant', 'Built by staffing veterans'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Six Ways to Deploy AI Agents
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Each service is a managed deployment — we configure, train, and maintain the agent so your team can focus on outcomes, not operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const accent = colorAccentMap[service.color] || 'bg-indigo-600'
              const border = colorBorderMap[service.color] || 'border-indigo-200 hover:border-indigo-400'
              const text = colorTextMap[service.color] || 'text-indigo-600'

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group flex flex-col bg-white rounded-2xl border ${border} p-6 transition-all hover:shadow-md`}
                >
                  <div className={`w-12 h-12 rounded-xl ${accent} flex items-center justify-center text-2xl mb-4 shrink-0`}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{service.shortTitle}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{service.tagline}</p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400">
                      From <span className="font-semibold text-slate-700">${service.startingPrice.toLocaleString()}/mo</span>
                    </span>
                    <span className={`text-sm font-medium ${text} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Hiretecky */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Why Companies Choose Hiretecky
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              We&apos;re not a software vendor. We&apos;re a staffing firm that replaced humans with AI — and we bring that operational experience to every deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Built by Hiring Experts',
                body: 'We spent 10 years placing human workers. Now we deploy AI agents the same way — matching the right capability to the right role.',
              },
              {
                title: 'Managed, Not Just Licensed',
                body: 'You get a deployed, configured, and maintained agent — not a SaaS login and a support ticket queue.',
              },
              {
                title: 'Works in Your Stack',
                body: 'Agents integrate with the tools your team already uses — Slack, Salesforce, GitHub, Zendesk, and 40+ others.',
              },
              {
                title: '14-Day Guarantee',
                body: 'If the agent doesn\'t hit agreed performance benchmarks in the first 14 days, we refund your setup fee in full.',
              },
              {
                title: 'No Long-Term Lock-In',
                body: 'Month-to-month plans on all tiers. Cancel anytime. We keep customers through results, not contracts.',
              },
              {
                title: 'SOC 2 Compliant',
                body: 'Enterprise-grade security with end-to-end encryption, SSO support, and data residency options for regulated industries.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900 mb-1.5 text-sm">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Not sure where to start?
          </h2>
          <p className="text-indigo-200 mb-7">
            Book a 30-minute call. We&apos;ll map your highest-ROI use case and give you a deployment plan — no sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/demo"
              className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl text-sm hover:bg-slate-100 transition-colors"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/30 text-sm hover:bg-white/20 transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
