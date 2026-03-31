import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Smartphone, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile App Development | Hiretecky',
  description:
    'Legacy Hiretecky mobile app development page covering product strategy, app design, development, integrations, and support.',
}

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-2xl bg-white/10 p-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Mobile App Development
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This legacy Hiretecky service page is still here so visitors from older search
              results land on a real page. We help businesses plan, design, build, and improve
              mobile apps that connect cleanly with the rest of their stack.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
              >
                Talk About Your App
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Current Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            'iOS and Android product planning',
            'UI and UX design for mobile flows',
            'Backend and API integrations',
            'Ongoing support and iteration',
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
            <h2 className="text-2xl font-bold text-slate-900">What this page represents</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Hiretecky historically offered broader software services, including mobile app
              work. Our site now focuses more heavily on AI-powered services, but this URL is
              preserved so old indexed results continue to resolve.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">Need a modern engagement?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We can still discuss mobile app projects, especially when they overlap with
              automation, AI workflows, internal tools, or customer-facing product delivery.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Contact Hiretecky
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
