import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Star, Check, ArrowLeft, Zap } from 'lucide-react'
import { getAgentBySlug, agents } from '@/lib/agents'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const agent = getAgentBySlug(slug)
  if (!agent) return {}
  return {
    title: `${agent.name} — Hiretecky`,
    description: agent.description,
  }
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const agent = getAgentBySlug(slug)
  if (!agent) notFound()

  const tierColors: Record<string, string> = {
    Starter: 'border-slate-200',
    Professional: 'border-indigo-400 ring-2 ring-indigo-200',
    Enterprise: 'border-slate-200',
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/agents"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Agents
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column — main info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{agent.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h1 className="text-2xl font-bold text-slate-900">{agent.name}</h1>
                    {agent.badge && (
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {agent.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-lg mb-3">{agent.tagline}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-slate-700">{agent.rating}</span>
                      <span className="text-slate-400">({agent.reviewCount} reviews)</span>
                    </div>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{agent.companiesUsing} companies hiring</span>
                    <span className="text-slate-400">·</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-slate-100 text-slate-600">
                      {agent.category}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">{agent.description}</p>
            </div>

            {/* Capabilities */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="font-bold text-slate-900 text-lg mb-4">What This Agent Does</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {agent.capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </span>
                    <span className="text-sm text-slate-700">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="font-bold text-slate-900 text-lg mb-4">Common Use Cases</h2>
              <div className="flex flex-wrap gap-2">
                {agent.useCases.map((uc) => (
                  <span
                    key={uc}
                    className="px-3 py-1.5 text-sm bg-slate-50 text-slate-700 rounded-lg border border-slate-200"
                  >
                    {uc}
                  </span>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="font-bold text-slate-900 text-lg mb-4">Integrations</h2>
              <div className="flex flex-wrap gap-2">
                {agent.integrations.map((int) => (
                  <span
                    key={int}
                    className="px-3 py-1.5 text-sm font-medium bg-indigo-50 text-indigo-700 rounded-lg border border-indigo-200"
                  >
                    {int}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — pricing & CTA */}
          <div className="space-y-5">
            {/* Quick deploy badge */}
            <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
              <Zap className="w-4 h-4 shrink-0" />
              Deploy-ready in 48 hours
            </div>

            {/* Pricing cards */}
            {agent.pricing.map((plan) => (
              <div
                key={plan.tier}
                className={`bg-white rounded-2xl border p-5 ${tierColors[plan.tier]} relative`}
              >
                {plan.tier === 'Professional' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-3">
                  <p className="text-sm font-semibold text-slate-500 mb-1">{plan.tier}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-400 text-sm mb-1">{plan.unit}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/request?agent=${agent.slug}&tier=${plan.tier}`}
                  className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    plan.tier === 'Professional'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Get Started — {plan.tier}
                </Link>
              </div>
            ))}

            {/* Custom CTA */}
            <div className="bg-slate-900 rounded-2xl p-5 text-center">
              <p className="text-white font-semibold mb-1 text-sm">Need something custom?</p>
              <p className="text-slate-400 text-xs mb-4">
                We'll configure this agent specifically for your workflow.
              </p>
              <Link
                href={`/request?agent=${agent.slug}`}
                className="block w-full py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-500 transition-colors"
              >
                Request Custom Setup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
