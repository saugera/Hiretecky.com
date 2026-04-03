import Link from 'next/link'
import { Play, ArrowRight, Clock, Shield, Lock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agent Demos — See Hiretecky Agents in Action | Hiretecky',
  description:
    'Watch Hiretecky AI agents handle real healthcare prior authorizations, enterprise sales workflows, and code reviews. Technical walkthroughs for IT leaders evaluating AI deployment.',
  alternates: { canonical: '/demos' },
}

const demos = [
  {
    id: 'healthcare-prior-auth',
    title: 'Healthcare Prior Authorization — End-to-End',
    description:
      'Watch an AI agent pull clinical documentation from an Epic FHIR endpoint, match it against payer criteria, submit a prior authorization request, and track approval status — start to finish in under 3 minutes.',
    duration: '3:20',
    category: 'Healthcare',
    categoryColor: 'bg-blue-50 text-blue-700 border-blue-200',
    highlights: [
      'SMART on FHIR authentication with Epic sandbox',
      'Condition and MedicationRequest resource extraction',
      'Payer criteria matching using clinical reasoning',
      'Status tracking and denial escalation workflow',
    ],
    cta: '/solutions/ai-healthcare-agents',
    ctaLabel: 'Deploy Healthcare AI',
    badge: 'HIPAA BAA Available',
    badgeColor: 'bg-blue-600',
    thumbnail: 'healthcare-demo',
  },
  {
    id: 'enterprise-sales-outreach',
    title: 'Enterprise Sales Outreach — From ICP to Booked Meeting',
    description:
      'See an AI SDR agent research a target account, generate a personalized outreach sequence referencing recent company signals, execute across email and LinkedIn, and book a discovery call — without a human touching it.',
    duration: '4:45',
    category: 'Sales',
    categoryColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    highlights: [
      'ICP-matched prospect list generation',
      'Real-time company signal research (hiring, funding, news)',
      'Personalized multi-touch sequence across email + LinkedIn',
      'CRM sync and calendar booking via Calendly integration',
    ],
    cta: '/solutions/ai-sales-agents',
    ctaLabel: 'Deploy Sales AI',
    badge: null,
    badgeColor: '',
    thumbnail: 'sales-demo',
  },
  {
    id: 'code-review-pr-automation',
    title: 'AI Code Review — Pull Request Audit in Real Time',
    description:
      'A DevPilot AI agent reviews an open pull request for security vulnerabilities, logic errors, and test coverage gaps — posting inline comments on the PR within 90 seconds of the commit, with a detailed summary report.',
    duration: '2:55',
    category: 'Software Development',
    categoryColor: 'bg-slate-100 text-slate-700 border-slate-200',
    highlights: [
      'GitHub webhook trigger on PR open/update',
      'OWASP Top 10 security pattern detection',
      'Test coverage gap analysis with suggested test cases',
      'Inline PR comments with severity classification',
    ],
    cta: '/services/software-development',
    ctaLabel: 'Deploy Dev AI',
    badge: null,
    badgeColor: '',
    thumbnail: 'dev-demo',
  },
  {
    id: 'enterprise-security-review',
    title: 'Security Architecture Walkthrough — How Hiretecky Isolates Your Data',
    description:
      'A technical deep-dive into Hiretecky\'s tenant isolation architecture, audit log design, FHIR data handling, and the controls that satisfy enterprise procurement and security team requirements.',
    duration: '8:10',
    category: 'Security',
    categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    highlights: [
      'VPC tenant isolation architecture diagram walkthrough',
      'Audit log schema and tamper-evidence design',
      'PHI extraction-before-inference pattern for healthcare',
      'SOC 2 control mapping for enterprise buyers',
    ],
    cta: '/trust',
    ctaLabel: 'Read Security Docs',
    badge: 'For CISOs & IT Directors',
    badgeColor: 'bg-emerald-600',
    thumbnail: 'security-demo',
  },
  {
    id: 'recruiting-shortlist',
    title: 'AI Recruiting — Job Post to Ranked Shortlist in 48 Hours',
    description:
      'Watch TalentMatch AI post a software engineering role across LinkedIn and Indeed, screen 200+ applications against defined criteria, conduct async video assessments, and deliver a ranked shortlist with AI-generated candidate notes.',
    duration: '5:30',
    category: 'HR & Recruiting',
    categoryColor: 'bg-violet-50 text-violet-700 border-violet-200',
    highlights: [
      'Multi-platform job posting (LinkedIn, Indeed, ATS)',
      'Criteria-based resume screening with diversity monitoring',
      'Async video assessment workflow and scoring',
      'Ranked shortlist with AI-generated candidate summaries',
    ],
    cta: '/solutions/ai-recruiting-software',
    ctaLabel: 'Deploy Recruiting AI',
    badge: null,
    badgeColor: '',
    thumbnail: 'recruiting-demo',
  },
  {
    id: 'customer-support-resolution',
    title: 'AI Customer Support — Tier-1 Ticket Resolution',
    description:
      'SupportIQ AI handles a live customer support conversation — identifying the issue, querying the knowledge base and Stripe billing API, resolving a billing dispute, and escalating a second issue to a human with full context.',
    duration: '3:40',
    category: 'Customer Support',
    categoryColor: 'bg-blue-50 text-blue-700 border-blue-200',
    highlights: [
      'Knowledge base retrieval with semantic search',
      'Stripe API integration for real-time billing queries',
      'Multi-turn conversation handling with context retention',
      'Smart escalation with full conversation summary for human agent',
    ],
    cta: '/solutions/ai-customer-support',
    ctaLabel: 'Deploy Support AI',
    badge: null,
    badgeColor: '',
    thumbnail: 'support-demo',
  },
]

function DemoPlaceholder({ demo }: { demo: typeof demos[0] }) {
  return (
    <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white">
      {/* Thumbnail placeholder */}
      <div className="relative bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />
        {/* Fake terminal/code overlay for visual texture */}
        <div className="absolute inset-4 rounded-xl bg-black/40 border border-white/5 p-4 overflow-hidden">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
          </div>
          <div className="space-y-1.5">
            {[85, 72, 90, 55, 78, 45].map((w, i) => (
              <div key={i} className="h-2 rounded bg-white/10" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
        {/* Play button */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
          <p className="text-white/60 text-xs">Demo video coming soon</p>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 rounded-lg px-2 py-1 text-white text-xs">
          <Clock className="w-3 h-3" />
          {demo.duration}
        </div>
        {/* Category */}
        {demo.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-semibold ${demo.badgeColor}`}>
            {demo.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${demo.categoryColor}`}>
            {demo.category}
          </span>
        </div>
        <h3 className="font-bold text-slate-900 text-lg mb-2 leading-snug">{demo.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">{demo.description}</p>

        <div className="space-y-1.5 mb-5">
          {demo.highlights.map((h) => (
            <div key={h} className="flex items-start gap-2 text-xs text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
              {h}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          <Link
            href={demo.cta}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            {demo.ctaLabel}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/demo"
            className="ml-auto text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            Book a live demo →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Proof of Concept Library
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl">
            See the Agents Working. Not the Marketing.
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Six technical walkthroughs showing Hiretecky AI agents handling real workflows — healthcare prior auths, enterprise sales, code review, and more. No staged demos. No scripted happy paths.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              Book a Live Demo for Your Use Case
            </Link>
            <Link
              href="/trust"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors text-sm"
            >
              <Lock className="w-4 h-4" />
              Security Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-400">
            {[
              'SOC 2 Type II in progress',
              'HIPAA BAA available',
              'Isolated tenant architecture',
              'Full audit logs on all agent actions',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Demo grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Technical Walkthroughs</h2>
            <p className="text-slate-600">
              Videos are being produced in order of customer demand. Book a live call to see any workflow in real time today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <DemoPlaceholder key={demo.id} demo={demo} />
            ))}
          </div>
        </div>
      </section>

      {/* Architect-to-Architect CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3">For IT Leaders & Architects</p>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Prefer to talk architecture first?
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Book a 45-minute technical session directly with our deployment engineers. We&apos;ll walk through your stack, your security requirements, and the exact integration approach — no sales pitch, just architecture.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/demo"
                  className="flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors text-sm w-full"
                >
                  Book Technical Architecture Review
                </Link>
                <Link
                  href="/trust"
                  className="flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors text-sm w-full"
                >
                  Download Security Documentation
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-6 py-3 border border-white/10 text-slate-400 rounded-xl hover:border-white/20 hover:text-slate-300 transition-colors text-sm w-full"
                >
                  Email Our Engineering Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
