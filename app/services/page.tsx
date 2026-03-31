import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, CheckCircle2, ChevronRight } from 'lucide-react'
import { services } from '@/lib/services'
import { absoluteUrl, jsonLd } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Hiretecky Services | AI-Powered Delivery Across Every Function',
  description:
    'Explore every Hiretecky service in one place, from software development and sales to support, recruiting, marketing, and analytics.',
  alternates: {
    canonical: '/services',
  },
}

const accentMap: Record<string, string> = {
  slate: 'bg-slate-900 text-white',
  indigo: 'bg-indigo-600 text-white',
  blue: 'bg-blue-600 text-white',
  violet: 'bg-violet-600 text-white',
  pink: 'bg-pink-600 text-white',
  cyan: 'bg-cyan-600 text-white',
}

const softAccentMap: Record<string, string> = {
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  violet: 'bg-violet-50 text-violet-700 border-violet-200',
  pink: 'bg-pink-50 text-pink-700 border-pink-200',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
}

export default function ServicesPage() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hiretecky Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: absoluteUrl(`/services/${service.slug}`),
      description: service.metaDescription,
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(servicesJsonLd) }}
      />
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.28),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_24%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
              Hiretecky Services
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white">
              One page for every service Hiretecky can provide
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Hiretecky packages AI-powered delivery into managed services across software,
              sales, support, recruiting, marketing, and analytics. Everything below lives on
              one page so buyers can compare options without jumping between routes.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            {[
              'Managed implementation',
              'Deploy in 48 hours',
              'Month-to-month options',
              'Human review built in',
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/request"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
            >
              Request Custom Setup
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-wrap gap-3">
            {services.map((service) => {
              const softAccent =
                softAccentMap[service.color] ??
                'bg-indigo-50 text-indigo-700 border-indigo-200'

              return (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 ${softAccent}`}
                >
                  <span>{service.icon}</span>
                  {service.shortTitle}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Built as managed services',
                body: 'Hiretecky handles setup, workflow design, tuning, and reporting instead of dropping software on your team and walking away.',
              },
              {
                title: 'Designed around real business roles',
                body: 'Each service is framed around the work companies actually buy: pipeline generation, ticket resolution, code delivery, recruiting throughput, and more.',
              },
              {
                title: 'Easy to compare on one URL',
                body: 'Leadership can scan what each service covers, what it integrates with, and how rollout works without opening six different tabs.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        {services.map((service, index) => {
          const accent = accentMap[service.color] ?? 'bg-indigo-600 text-white'
          const softAccent =
            softAccentMap[service.color] ?? 'bg-indigo-50 text-indigo-700 border-indigo-200'

          return (
            <section
              key={service.slug}
              id={service.slug}
              className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50 border-y border-slate-200'}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_360px]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${accent}`}
                      >
                        {service.icon}
                      </span>
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${softAccent}`}
                      >
                        {service.shortTitle}
                      </span>
                    </div>

                    <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">{service.tagline}</p>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
                      {service.overview}
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {service.whatWeDo.slice(0, 4).map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-slate-200 bg-white p-5"
                        >
                          <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                          Deliverables
                        </p>
                        <div className="mt-4 space-y-3">
                          {service.deliverables.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <span
                                className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accent}`}
                              >
                                <Check className="w-3.5 h-3.5" />
                              </span>
                              <span className="text-sm leading-6 text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                          Technologies
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`rounded-full border px-3 py-1.5 text-sm font-medium ${softAccent}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Rollout Process
                      </p>
                      <div className="mt-4 grid gap-4 lg:grid-cols-4">
                        {service.process.map((step) => (
                          <div
                            key={`${service.slug}-${step.step}`}
                            className="rounded-2xl border border-slate-200 bg-white p-5"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span
                                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${softAccent}`}
                              >
                                Step {step.step}
                              </span>
                              <ChevronRight className="w-4 h-4 text-slate-300" />
                            </div>
                            <h3 className="mt-4 text-base font-bold text-slate-900">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                              {step.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <aside className="space-y-5">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <p className="text-sm font-semibold text-slate-500">Starting from</p>
                      <div className="mt-3 flex items-end gap-2">
                        <span className="text-4xl font-bold text-slate-900">
                          ${service.startingPrice}
                        </span>
                        <span className="pb-1 text-sm text-slate-500">per month</span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Managed delivery for teams that want outcomes without growing headcount.
                      </p>

                      <div className="mt-6 space-y-3">
                        {service.faqs.slice(0, 2).map((faq) => (
                          <div key={faq.q} className="rounded-2xl bg-slate-50 p-4">
                            <h3 className="text-sm font-semibold text-slate-900">{faq.q}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 space-y-3">
                        <Link
                          href={`/request?service=${service.slug}`}
                          className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold ${accent}`}
                        >
                          Request {service.shortTitle}
                        </Link>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 transition-colors"
                        >
                          Open detail page
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="bg-indigo-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Need help choosing the right service mix?
          </h2>
          <p className="mt-4 text-lg leading-8 text-indigo-100">
            We can scope one service or combine several into a broader AI delivery plan for your
            team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
            >
              Contact Hiretecky
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
