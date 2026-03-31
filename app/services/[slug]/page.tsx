import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { getAgentBySlug } from '@/lib/agents'
import { getServiceBySlug, services } from '@/lib/services'

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

const ringMap: Record<string, string> = {
  slate: 'ring-slate-200',
  indigo: 'ring-indigo-200',
  blue: 'ring-blue-200',
  violet: 'ring-violet-200',
  pink: 'ring-pink-200',
  cyan: 'ring-cyan-200',
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata(
  props: PageProps<'/services/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default async function ServiceDetailPage(
  props: PageProps<'/services/[slug]'>
) {
  const { slug } = await props.params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const agent = getAgentBySlug(service.agentSlug)
  const accent = accentMap[service.color] ?? 'bg-indigo-600 text-white'
  const softAccent =
    softAccentMap[service.color] ?? 'bg-indigo-50 text-indigo-700 border-indigo-200'
  const ring = ringMap[service.color] ?? 'ring-indigo-200'

  const heroHighlights = [
    'Deploy in 48 hours',
    `Starting at $${service.startingPrice}/month`,
    'Month-to-month plans',
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.28),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_24%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_380px] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${accent}`}>
                  {service.icon}
                </span>
                <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${softAccent}`}>
                  {service.shortTitle}
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl sm:text-5xl font-bold tracking-tight text-white">
                {service.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                {service.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/request?service=${service.slug}`}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
                >
                  Request This Service
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                >
                  Book a Demo
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className={`rounded-3xl border border-white/10 bg-white p-6 shadow-2xl ring-1 ${ring}`}>
              <p className="text-sm font-semibold text-slate-500">What you get</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-bold text-slate-900">
                  ${service.startingPrice}
                </span>
                <span className="pb-1 text-sm text-slate-500">starting monthly</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Managed implementation, workflow setup, and ongoing optimization inside your
                existing stack.
              </p>

              <div className="mt-6 space-y-3">
                {service.deliverables.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accent}`}>
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Best fit
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Teams that want faster execution without adding full-time headcount or
                  rebuilding internal processes from scratch.
                </p>
              </div>

              <Link
                href={`/request?service=${service.slug}`}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold ${accent}`}
              >
                Talk to Hiretecky
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Code2,
                title: 'Production-grade delivery',
                body: 'We configure the agent around your actual tools, approvals, and workflows so outputs are usable from day one.',
              },
              {
                icon: Workflow,
                title: 'Built around your process',
                body: 'The service wraps the technology with onboarding, guardrails, and operational handoff instead of leaving your team to figure it out.',
              },
              {
                icon: ShieldCheck,
                title: 'Human oversight by design',
                body: 'Review gates, escalation rules, and security boundaries are defined up front before the agent is trusted with live work.',
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <span className={`inline-flex rounded-xl p-3 ${softAccent}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <h2 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              What Hiretecky Does
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              A service package, not just a tool login
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We turn the agent into an operational capability your team can actually use.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {service.whatWeDo.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${softAccent}`}>
                  {service.shortTitle}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Deliverables
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Clear outputs your team can hold us to
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Each engagement ships with documented outcomes, integrations, and reporting so
                you know exactly what is being deployed.
              </p>

              <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white">
                <p className="text-sm font-semibold text-slate-300">Works with</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${accent}`}>
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Delivery Process
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                How the engagement rolls out
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              We start with a narrow pilot, measure output quality, and only expand once the
              workflow is stable.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {service.process.map((item) => (
              <div key={item.step} className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${softAccent}`}>
                    Step {item.step}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Questions teams usually ask before rollout
              </h2>

              <div className="mt-8 space-y-4">
                {service.faqs.map((item) => (
                  <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <h3 className="text-base font-bold text-slate-900">{item.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-5">
              {agent && (
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${accent}`}>
                      {agent.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Matching Agent
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-slate-900">{agent.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{agent.tagline}</p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                    {agent.description}
                  </div>

                  <Link
                    href={`/agents/${agent.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    View agent details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-white/10 p-3">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <p className="text-lg font-bold">Ready to scope this out?</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  We&apos;ll map the best rollout plan for your team, your stack, and the specific
                  work you want automated first.
                </p>
                <div className="mt-6 space-y-3">
                  <Link
                    href="/demo"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
                  >
                    Book a Demo
                  </Link>
                  <Link
                    href={`/request?service=${service.slug}`}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Request Custom Setup
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
