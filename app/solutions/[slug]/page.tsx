import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, ArrowRight, ChevronDown } from 'lucide-react'
import { getSolutionBySlug, solutions } from '@/lib/solutions'
import { getAgentBySlug } from '@/lib/agents'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) return {}
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: solution.keywords.join(', '),
  }
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) notFound()
  const agent = getAgentBySlug(solution.agentSlug)

  const colorMap: Record<string, string> = {
    indigo: 'bg-indigo-600',
    blue: 'bg-blue-600',
    violet: 'bg-violet-600',
    pink: 'bg-pink-600',
  }
  const bgColor = colorMap[solution.color] || 'bg-indigo-600'

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className={`${bgColor} py-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {agent && <p className="text-white/70 text-sm font-medium mb-3">Powered by {agent.name}</p>}
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            {solution.headline}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            {solution.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/demo"
              className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors text-sm"
            >
              Book a Free Demo
            </Link>
            {agent && (
              <Link
                href={`/agents/${agent.slug}`}
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors text-sm inline-flex items-center gap-2"
              >
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* SEO keywords breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {solution.keywords.map((kw) => (
              <span key={kw} className="text-xs text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
            Why Companies Choose AI Over Hiring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solution.benefits.map((b, i) => (
              <div key={b.title} className="flex gap-4">
                <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5`}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent capabilities */}
      {agent && (
        <section className="py-14 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              What {agent.name} Can Do For You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {agent.capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Common Questions
          </h2>
          <div className="space-y-4">
            {solution.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-200 p-5">
                <div className="flex gap-3">
                  <ChevronDown className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-2">{faq.q}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq" className="text-indigo-600 text-sm hover:underline">
              See all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-14 ${bgColor}`}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">{solution.title} — Ready in 48 Hours</h2>
          <p className="text-white/80 mb-7 text-sm">No long-term contract. 14-day performance guarantee.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/demo" className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl text-sm hover:bg-slate-100 transition-colors">
              Book a Free Demo
            </Link>
            <Link href="/request" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/30 text-sm hover:bg-white/20 transition-colors">
              Request Custom Setup
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
