import {
  Shield,
  Lock,
  Server,
  Eye,
  FileCheck,
  RefreshCw,
  Network,
  BadgeCheck,
  AlertTriangle,
  Building2,
} from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Security & Trust — Hiretecky',
  description:
    'Hiretecky is built for regulated enterprise environments. SOC 2 Type II in progress, HIPAA BAA available, isolated tenant architecture, end-to-end encryption, and full audit trails on every agent action.',
}

const pillars = [
  {
    icon: Shield,
    title: 'SOC 2 Type II (In Progress)',
    body: 'We are undergoing SOC 2 Type II certification covering security, availability, and confidentiality. Audit report available to enterprise customers under NDA upon request.',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    body: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256). API keys and credentials stored in a hardware-backed secret vault — never in plaintext.',
  },
  {
    icon: Server,
    title: 'Isolated Tenant Environments',
    body: 'Each customer\'s agent runs in a dedicated isolated environment. Your data is never co-mingled with another tenant. Single-tenant VPC deployments available for Enterprise plans.',
  },
  {
    icon: Eye,
    title: 'Zero Training on Your Data',
    body: 'Your business data, customer conversations, and proprietary information are never used to train or fine-tune any AI model. Your data operates only your agents.',
  },
  {
    icon: FileCheck,
    title: 'GDPR, CCPA & HIPAA Ready',
    body: 'We act as a data processor under your instructions. Data Processing Agreements, HIPAA Business Associate Agreements, data residency, and data subject request support available on all plans.',
  },
  {
    icon: RefreshCw,
    title: 'Full Audit Logs & Access Controls',
    body: 'Every agent action is logged with a tamper-evident audit trail. Role-based access controls govern who can configure, view, or override each agent. Export-ready for compliance reviews.',
  },
  {
    icon: Network,
    title: 'Network Security & VPC Isolation',
    body: 'Agent infrastructure runs inside private VPCs with strict egress filtering. No inbound public internet exposure. Optional private link / VPN peering for enterprise deployments that require it.',
  },
  {
    icon: BadgeCheck,
    title: 'Vendor Security Review Support',
    body: 'We provide a completed VSAQ (Vendor Security Assessment Questionnaire), penetration test summary, infrastructure architecture overview, and DPA to enterprise procurement and legal teams on request.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response SLA',
    body: 'Defined incident classification, response, and notification SLAs for all enterprise customers. P0 incidents receive a 1-hour initial response. Security advisories issued within 24 hours of confirmed events.',
  },
]

const models = [
  {
    provider: 'Anthropic (Claude)',
    useCase: 'Complex reasoning, contract review, nuanced communication',
    dpa: 'Enterprise DPA in place',
  },
  {
    provider: 'OpenAI (GPT-4)',
    useCase: 'Structured data processing, code generation, classification',
    dpa: 'Enterprise DPA in place',
  },
  {
    provider: 'Proprietary Fine-tunes',
    useCase: 'Domain-specific tasks trained on anonymized industry data',
    dpa: 'Fully in-house — no third-party model sharing',
  },
]

const enterpriseTiers = [
  {
    label: 'All Plans',
    items: ['TLS 1.3 in transit', 'AES-256 at rest', 'Audit logs', 'RBAC', 'No data training'],
  },
  {
    label: 'Professional & Enterprise',
    items: ['Isolated tenant environment', 'GDPR & CCPA DPA', 'HIPAA BAA available', 'SSO (SAML 2.0)', 'Custom data retention'],
  },
  {
    label: 'Enterprise Only',
    items: ['Single-tenant VPC', 'Private link / VPN peering', 'VSAQ & pentest report', 'Dedicated security review', 'Custom SLA'],
  },
]

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest">Security & Trust</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Enterprise-Grade Security</h1>
            </div>
          </div>
          <p className="text-slate-400 text-lg max-w-3xl mb-8">
            Regulated industries, enterprise procurement teams, and CISOs hold us to a higher standard — and we built Hiretecky to meet it. Here is exactly how we protect your workflows, your customers, and your data.
          </p>
          <div className="flex flex-wrap gap-3">
            {['SOC 2 Type II (In Progress)', 'HIPAA BAA Available', 'GDPR & CCPA Compliant', 'Zero Data Training', 'VPC Isolation Available'].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Security by tier */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Security Controls by Plan</h2>
          <p className="text-slate-500 text-sm mb-8">Every Hiretecky plan ships with a strong security baseline. Enterprise customers unlock additional isolation and compliance tooling.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {enterpriseTiers.map((tier) => (
              <div key={tier.label} className="rounded-2xl border border-slate-200 p-5">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-4">{tier.label}</p>
                <ul className="space-y-2.5">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security pillars */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Nine Security Commitments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="bg-white rounded-2xl border border-slate-200 p-5">
                  <div className="inline-flex p-2.5 rounded-xl bg-indigo-50 mb-3">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Healthcare / regulated industries callout */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-10">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">Regulated Industries</p>
                <h2 className="text-2xl font-bold text-white mb-3">Built for Healthcare, Finance & Legal</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Enterprise AI adoption stalls when security and compliance teams can&apos;t get answers. We built Hiretecky with regulated industries in mind from day one — HIPAA Business Associate Agreements, isolated VPC deployments, tamper-evident audit logs, and full vendor security documentation packages that satisfy even the most rigorous procurement processes.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Healthcare', note: 'HIPAA BAA + EHR-ready FHIR integrations' },
                    { label: 'Financial Services', note: 'SOC 2 controls, data residency, access logs' },
                    { label: 'Legal & Professional', note: 'Conflict checks, matter-level isolation, NDA-first' },
                  ].map((sector) => (
                    <div key={sector.label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                      <p className="text-white font-semibold text-sm mb-1">{sector.label}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{sector.note}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/solutions/ai-healthcare-agents"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Explore Healthcare AI Agents
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Models */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">AI Model Transparency</h2>
          <p className="text-slate-600 mb-8 text-sm">
            We are transparent about the AI infrastructure powering your agents — because your security team will ask.
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-white border-b border-slate-200">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">Provider</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">Used For</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">Data Agreement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {models.map((m) => (
                  <tr key={m.provider}>
                    <td className="px-5 py-4 font-medium text-slate-900">{m.provider}</td>
                    <td className="px-5 py-4 text-slate-600">{m.useCase}</td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                        {m.dpa}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            None of your data is shared with AI providers&apos; general training pipelines.
            All providers operate under enterprise agreements with data isolation guarantees.
          </p>
        </div>
      </section>

      {/* Responsible disclosure + enterprise docs */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">Responsible Disclosure</h2>
              <p className="text-sm text-slate-600 mb-3">
                Discovered a vulnerability? Report it to{' '}
                <a href="mailto:security@hiretecky.com" className="text-indigo-600 hover:underline">
                  security@hiretecky.com
                </a>
                . We respond within 48 hours and ask for 90 days before public disclosure. All reports are taken seriously.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Security Package</h2>
              <p className="text-sm text-slate-600 mb-3">
                Enterprise customers receive a full security documentation package on request: completed VSAQ, penetration test executive summary, infrastructure architecture diagram, DPA, and BAA.
              </p>
              <Link
                href="/contact"
                className="text-sm text-indigo-600 font-semibold hover:underline"
              >
                Request documentation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
