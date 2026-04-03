import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Quote } from 'lucide-react'
import { getCaseStudyBySlug, caseStudies } from '@/lib/case-studies'
import { absoluteUrl, jsonLd } from '@/lib/site'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  if (!cs) return {}
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    alternates: { canonical: `/case-studies/${cs.slug}` },
  }
}

const industryAccent: Record<string, string> = {
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-600',
  violet: 'bg-violet-600',
  slate: 'bg-slate-800',
}
const industrySoft: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  violet: 'bg-violet-50 text-violet-700 border-violet-200',
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  if (!cs) notFound()

  const accent = industryAccent[cs.industryColor] ?? 'bg-indigo-600'
  const soft = industrySoft[cs.industryColor] ?? 'bg-indigo-50 text-indigo-700 border-indigo-200'

  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cs.title,
    url: absoluteUrl(`/case-studies/${cs.slug}`),
    description: cs.metaDescription,
    publisher: {
      '@type': 'Organization',
      name: 'Hiretecky',
      url: absoluteUrl('/'),
    },
    datePublished: cs.published,
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(caseStudyJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${soft}`}>
              {cs.industry}
            </span>
            <span className="text-slate-500 text-xs">{cs.client} · {cs.published}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-4xl">
            {cs.title}
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl">{cs.tagline}</p>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {cs.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-slate-400 text-sm mt-0.5">{stat.label}</p>
                {stat.note && <p className="text-slate-600 text-xs mt-0.5">{stat.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_320px] gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">01 · The Problem</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{cs.problem.headline}</h2>
              <div className="space-y-4">
                {cs.problem.body.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-red-50 border border-red-100 p-6 h-fit">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-4">Symptoms Before Deployment</p>
              <ul className="space-y-3">
                {cs.problem.symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">02 · The Strategic Approach</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{cs.approach.headline}</h2>
          <div className="space-y-4 mb-10">
            {cs.approach.body.map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {cs.approach.phases.map((phase, i) => (
              <div key={phase.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-7 h-7 rounded-full ${accent} text-white text-xs font-bold flex items-center justify-center shrink-0`}>
                    {i + 1}
                  </div>
                  <p className="font-bold text-slate-900 text-sm">{phase.title}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">03 · The ROI</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{cs.roi.headline}</h2>
          <div className="space-y-4 mb-10">
            {cs.roi.body.map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">Metric</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">Before</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">After</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {cs.roi.outcomes.map((row) => (
                  <tr key={row.metric}>
                    <td className="px-5 py-4 font-medium text-slate-900">{row.metric}</td>
                    <td className="px-5 py-4 text-slate-500">{row.before}</td>
                    <td className="px-5 py-4 text-slate-900 font-semibold">{row.after}</td>
                    <td className="px-5 py-4">
                      {row.delta && (
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                          {row.delta}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quote */}
      {cs.quote && (
        <section className="py-14 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-10 h-10 text-indigo-400 mx-auto mb-6" />
            <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-6">
              &ldquo;{cs.quote.text}&rdquo;
            </blockquote>
            <p className="text-slate-400 text-sm">
              <span className="font-semibold text-slate-200">{cs.quote.author}</span>
              {' · '}
              {cs.quote.title}
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`py-14 ${accent}`}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want results like this for your organization?
          </h2>
          <p className="text-white/80 mb-7 text-sm">
            Every deployment starts with a 30-minute scoping call. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/demo" className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl text-sm hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/audit" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/30 text-sm hover:bg-white/20 transition-colors">
              Start with a $15k Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Proof of compliance */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <span className="font-semibold text-slate-700">Deployment standards applied:</span>
            {['HIPAA BAA signed', 'Isolated tenant architecture', 'Full audit logging', 'Zero PHI training data'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
