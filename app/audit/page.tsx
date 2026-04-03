import Link from 'next/link'
import { Metadata } from 'next'
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  FileText,
  Network,
  ArrowRight,
  Building2,
  Microscope,
  MapPin,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise AI & Cloud Security Audit — $15,000 | Hiretecky',
  description:
    'A 2-week, fixed-fee audit of your AI readiness, cloud security posture, and automation opportunity gaps. Delivered by our Fractional Chief Architect team. Starting at $15,000.',
  alternates: { canonical: '/audit' },
}

const painPoints = [
  {
    icon: AlertTriangle,
    problem: 'You have no idea if your current cloud setup can actually handle AI workloads.',
    agitation:
      'Most infrastructure was built for static applications. AI agents have different latency, compute, and data-access patterns. Deploying on top of unprepared infrastructure creates cascading failures that only appear in production.',
  },
  {
    icon: Shield,
    problem: 'Your security team is being asked to approve AI tools without a framework to evaluate them.',
    agitation:
      "HIPAA, SOC 2, and GDPR were written before LLMs existed. Your CISO is being handed vendor BAAs that contain carve-outs for model training. Without an AI-specific compliance layer, every deployment is a legal exposure you haven't scoped.",
  },
  {
    icon: Network,
    problem: 'Your data is siloed across 12 systems that don\'t talk to each other.',
    agitation:
      'AI agents are only as useful as the data they can access. Fragmented EHRs, CRMs, ERPs, and legacy databases mean your agents operate with incomplete context — and incomplete context produces confident-sounding wrong answers.',
  },
  {
    icon: Building2,
    problem: 'Leadership wants an AI roadmap. You have no idea where to start.',
    agitation:
      'Every vendor is telling you their tool is the answer. Without an independent architecture review, you are making $500k decisions based on sales decks. The audit gives you a vendor-neutral roadmap written by architects, not salespeople.',
  },
]

const auditDeliverables = [
  { title: 'AI Readiness Score', body: 'A quantified score across 5 dimensions: data quality, infrastructure, security posture, workflow automation opportunity, and compliance readiness.' },
  { title: 'Cloud Security Assessment', body: 'Review of your current cloud architecture against CIS Benchmarks and NIST CSF. Every critical finding prioritized by risk severity and remediation complexity.' },
  { title: 'Data Silo Map', body: 'A visual map of your data sources, integration gaps, and the specific connections required to make AI agents operationally effective.' },
  { title: 'Compliance Gap Analysis', body: 'HIPAA, SOC 2, GDPR, or industry-specific framework gaps identified and mapped to specific remediation actions and responsible owners.' },
  { title: '90-Day AI Deployment Roadmap', body: 'A sequenced, prioritized plan for your first AI agent deployments — ordered by ROI potential and implementation complexity.' },
  { title: 'Vendor Evaluation Framework', body: 'A scored vendor comparison matrix for the top 3 AI tools relevant to your use cases, with security and compliance ratings you can hand to procurement.' },
]

const timeline = [
  {
    day: 'Days 1–3',
    phase: 'Discovery & Access',
    activities: [
      'Kick-off with your CTO, CISO, and operations leads',
      'Infrastructure access provisioning (read-only)',
      'Document collection: current architecture, security policies, compliance certifications',
      'Stakeholder interviews across IT, legal, and business operations',
    ],
  },
  {
    day: 'Days 4–7',
    phase: 'Technical Assessment',
    activities: [
      'Cloud architecture review against CIS Benchmarks',
      'Network segmentation and access control audit',
      'Data source inventory and integration gap analysis',
      'AI readiness scoring across all five dimensions',
    ],
  },
  {
    day: 'Days 8–11',
    phase: 'Compliance & Roadmap',
    activities: [
      'HIPAA / SOC 2 / GDPR gap analysis and remediation mapping',
      'AI vendor evaluation against your specific requirements',
      'ROI modeling for top 3 automation opportunities',
      '90-day deployment roadmap drafting',
    ],
  },
  {
    day: 'Days 12–14',
    phase: 'Delivery & Briefing',
    activities: [
      'Executive briefing deck for leadership presentation',
      'Full audit report delivery (typically 40–60 pages)',
      'Q&A session with your CISO, CTO, and legal team',
      'Transition planning if you choose to proceed to implementation',
    ],
  },
]

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                <Microscope className="w-3.5 h-3.5" />
                Fixed-Fee Engagement · 2 Weeks
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Enterprise AI & Cloud Security Audit
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              Before you spend $500k deploying AI across your enterprise, spend $15,000 finding out exactly what your infrastructure can handle, where your compliance gaps are, and which workflows will actually move the needle.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {[
                '2-week fixed timeline',
                'Vendor-neutral assessment',
                'HIPAA & SOC 2 gap analysis',
                'Fractional Chief Architect team',
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-colors"
              >
                Schedule Your Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/trust"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
              >
                <Shield className="w-4 h-4" />
                View Security Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Price anchor */}
      <section className="bg-slate-900 border-b border-slate-800 py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-6 text-slate-400">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-indigo-400" /> 2-week engagement</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-400" /> Remote or on-site</span>
              <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-indigo-400" /> 40–60 page deliverable</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-slate-400 text-sm">Fixed fee</span>
              <span className="text-white font-bold text-2xl">$15,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem — Agitation */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 mb-3">The Problem</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Most enterprises are not ready to deploy AI. They just don&apos;t know it yet.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every CIO is under pressure to ship an AI strategy. Most are deploying on infrastructure that was not built for it, with compliance frameworks that do not cover it, and data that is too fragmented for any agent to use effectively. The audit finds these problems before your deployment finds them for you.
            </p>
          </div>

          <div className="space-y-5">
            {painPoints.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.problem} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-2">{point.problem}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{point.agitation}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solution — Fractional Chief Architect */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400 mb-3">The Methodology</p>
              <h2 className="text-3xl font-bold text-white mb-5">
                Your Fractional Chief Architect Team
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                The audit is delivered by a dedicated team that functions as your fractional C-suite technical leadership for 14 days. You get the output of a Chief Architect, a CISO-level security reviewer, and a compliance specialist — without the $600k annual cost of hiring them full-time.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                We are vendor-neutral. We have no referral agreements with cloud providers or AI tool vendors. Our recommendation is the right answer for your situation — not the answer that pays us a commission.
              </p>
              <div className="space-y-3">
                {[
                  'Independent review with no vendor affiliations',
                  'Direct access to architects throughout the engagement',
                  'Deliverables written for both technical and executive audiences',
                  'NDA signed before any access is granted',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { role: 'Lead Solutions Architect', scope: 'Cloud infrastructure assessment, AI integration architecture, migration sequencing' },
                { role: 'Security Reviewer', scope: 'Network segmentation, access controls, CIS Benchmark review, pen test coordination' },
                { role: 'Compliance Specialist', scope: 'HIPAA, SOC 2, GDPR gap analysis, remediation roadmap, DPA review' },
                { role: 'AI Integration Engineer', scope: 'Data silo mapping, FHIR/API inventory, agent deployment feasibility scoring' },
              ].map((member) => (
                <div key={member.role} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-white font-semibold mb-1">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 mb-3">2-Week Timeline</p>
            <h2 className="text-3xl font-bold text-slate-900">What happens and when</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {timeline.map((phase, i) => (
              <div key={phase.day} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{phase.day}</p>
                    <p className="font-bold text-slate-900">{phase.phase}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {phase.activities.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 mb-3">What You Receive</p>
            <h2 className="text-3xl font-bold text-slate-900">Six deliverables you can act on immediately</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {auditDeliverables.map((d, i) => (
              <div key={d.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold flex items-center justify-center mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{d.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Health Systems & Medical Groups', detail: 'HIPAA compliance + EHR integration readiness' },
              { label: 'Financial Services Firms', detail: 'SOC 2 posture + data governance for AI' },
              { label: 'Mid-Market SaaS Companies', detail: 'Cloud cost optimization + AI feature roadmap' },
              { label: 'Private Equity Portfolio Companies', detail: 'Pre-acquisition technical due diligence' },
            ].map((sector) => (
              <div key={sector.label} className="rounded-2xl border border-slate-200 p-5">
                <p className="font-semibold text-slate-900 text-sm mb-1">{sector.label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{sector.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to know exactly where you stand?
          </h2>
          <p className="text-indigo-200 text-lg mb-3">
            Fixed fee. Two weeks. Deliverables you can hand to your board.
          </p>
          <p className="text-indigo-300 text-sm mb-10">
            Most clients recover the $15,000 engagement fee in the first month of optimizations we identify.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-colors text-lg"
            >
              Schedule Your Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              See Technical Demos First
            </Link>
          </div>
          <p className="mt-6 text-indigo-300 text-sm">
            Questions? Email{' '}
            <a href="mailto:enterprise@hiretecky.com" className="text-white hover:underline">
              enterprise@hiretecky.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
