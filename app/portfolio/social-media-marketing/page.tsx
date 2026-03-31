import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Megaphone, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Social Media Marketing | Hiretecky Portfolio',
  description:
    'Legacy Hiretecky portfolio page for social media marketing, kept online so old indexed links continue to work.',
}

export default function SocialMediaMarketingPortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex rounded-2xl bg-white/10 p-4">
            <Megaphone className="w-8 h-8 text-white" />
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Social Media Marketing
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            This is a preserved legacy portfolio URL from an older Hiretecky website. It remains
            online so visitors coming from Google and old backlinks do not hit a 404 after the
            site migration.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              'Campaign planning across social platforms',
              'Creative messaging and audience targeting',
              'Performance tracking and content refinement',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-slate-900">About this preserved page</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Hiretecky&apos;s focus has evolved since this portfolio entry was first published.
              The modern website emphasizes AI-driven services and business automation, but we are
              keeping legacy URLs online to preserve search traffic and a smoother visitor
              experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 transition-colors"
              >
                Back to Portfolio
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
              >
                View Current Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
