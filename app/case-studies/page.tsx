import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/lib/case-studies'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — AI Agent Deployments in Healthcare, Finance & Enterprise | Hiretecky',
  description: 'Real deployment results from companies that replaced legacy workflows with Hiretecky AI agents. Metrics, methodology, and ROI — no vanity numbers.',
  alternates: { canonical: '/case-studies' },
}

const industryColor: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  violet: 'bg-violet-50 text-violet-700 border-violet-200',
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3">Case Studies</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
            Results from real deployments
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            No stock photography, no invented personas. Every case study uses real metrics from production deployments — reviewed and approved for publication by the client.
          </p>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {caseStudies.map((cs) => {
            const badge = industryColor[cs.industryColor] ?? 'bg-slate-100 text-slate-700 border-slate-200'
            return (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block bg-white rounded-3xl border border-slate-200 p-8 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${badge}`}>
                    {cs.industry}
                  </span>
                  <span className="text-slate-400 text-xs">{cs.published}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                  {cs.title}
                </h2>
                <p className="text-slate-600 mb-6">{cs.tagline}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {cs.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 group-hover:gap-2.5 transition-all">
                  Read case study <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="py-14 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want results like these?</h2>
          <p className="text-indigo-200 mb-7">Book a 30-minute call. We&apos;ll scope a deployment specific to your workflows.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/demo" className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl text-sm hover:bg-slate-100 transition-colors">
              Book a Demo
            </Link>
            <Link href="/audit" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/30 text-sm hover:bg-white/20 transition-colors">
              Start with a $15k Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
