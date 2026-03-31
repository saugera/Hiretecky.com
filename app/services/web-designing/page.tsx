import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, PenTool, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Designing | Hiretecky',
  description:
    'Legacy Hiretecky web designing page covering site design, user experience, conversion-focused layouts, and branded digital experiences.',
}

export default function WebDesigningPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-2xl bg-white/10 p-4">
              <PenTool className="w-8 h-8 text-white" />
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Web Designing
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This legacy service URL is preserved for older Google listings. Hiretecky has done
              website and interface work focused on branded presentation, usability, and
              conversion performance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
              >
                Request Design Help
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Browse Current Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            'Website redesign and visual refresh',
            'Landing pages built for conversion',
            'User experience and page structure improvements',
            'Brand-aligned digital asset design',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Why this page still exists</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              This page keeps older indexed URLs alive after the website move. It gives visitors
              context and a clear path to contact the current team instead of landing on a dead
              route.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">Looking for broader help?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If your project includes websites, product interfaces, AI-driven workflows, or a
              full digital refresh, we can scope the right engagement from there.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Start the conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
