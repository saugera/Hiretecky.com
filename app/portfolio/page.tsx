import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | Hiretecky',
  description:
    'Legacy Hiretecky portfolio page preserved for older indexed links, with context on the company’s project and delivery work.',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="inline-flex rounded-2xl bg-indigo-50 p-4">
            <Briefcase className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">Portfolio</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            This legacy portfolio page is preserved so older Google results still resolve after
            the site migration. Hiretecky has worked across digital services, marketing, product
            delivery, and business technology projects.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              'Website and interface work',
              'Marketing and growth support',
              'Technology consulting and delivery',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Featured legacy URL</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                One of the older portfolio entries that still gets search traffic is the social
                media marketing page, which is still available below.
              </p>
              <Link
                href="/portfolio/social-media-marketing"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View social media marketing page
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Current Hiretecky focus</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Today the site is centered more heavily on AI agents, modern service delivery, and
                business automation. If you are evaluating Hiretecky now, start with the services
                catalog or contact page.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600"
                >
                  Browse current services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600"
                >
                  Contact Hiretecky
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
