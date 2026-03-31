import { Shield, Lock, Server, Eye, FileCheck, RefreshCw } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security & Trust — Hiretecky',
  description: 'How Hiretecky protects your data, which AI models power our agents, and how we keep your business information secure.',
}

const pillars = [
  {
    icon: Shield,
    title: 'SOC 2 Type II (In Progress)',
    body: 'We are currently undergoing SOC 2 Type II certification. Our controls cover security, availability, and confidentiality. Audit report available to enterprise customers under NDA upon request.',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    body: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). API keys and credentials are stored in a hardware-backed secret vault, never in plaintext.',
  },
  {
    icon: Server,
    title: 'Isolated Tenant Environments',
    body: 'Each customer\'s agent runs in a dedicated isolated environment. Your data is never co-mingled with another customer\'s data. We support single-tenant deployments for Enterprise plans.',
  },
  {
    icon: Eye,
    title: 'No Training on Your Data',
    body: 'Your business data, customer conversations, and proprietary information are never used to train or fine-tune public AI models. Your data is used solely to operate your agent.',
  },
  {
    icon: FileCheck,
    title: 'GDPR & CCPA Compliant',
    body: 'We act as a data processor under your instructions. We maintain Data Processing Agreements, support data subject requests, and can configure data residency for EU and California requirements.',
  },
  {
    icon: RefreshCw,
    title: 'Access Controls & Audit Logs',
    body: 'All agent actions are logged with full audit trails. You can review every action your agent took, when, and on what data. Role-based access controls limit who on your team can configure each agent.',
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

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl mb-5">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Security & Trust
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            You're trusting us with your workflows, your customers, and your data.
            Here is exactly how we protect all of it.
          </p>
        </div>
      </section>

      {/* Security pillars */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Our Security Commitments
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

      {/* AI Models */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Which AI Models We Use</h2>
          <p className="text-slate-600 mb-8 text-sm">
            We are transparent about the AI infrastructure powering your agents.
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">Provider</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">Used For</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">Data Agreement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
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
            None of your data is shared with AI providers' general training pipelines.
            All providers operate under enterprise agreements with data isolation guarantees.
          </p>
        </div>
      </section>

      {/* Responsible disclosure */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">Responsible Disclosure</h2>
          <p className="text-sm text-slate-600 mb-2">
            If you discover a security vulnerability in our platform, please report it to{' '}
            <a href="mailto:security@hiretecky.com" className="text-indigo-600 hover:underline">
              security@hiretecky.com
            </a>
            . We ask that you give us 90 days to address the issue before public disclosure.
            We take all reports seriously and respond within 48 hours.
          </p>
          <p className="text-xs text-slate-400">
            Enterprise customers can request our full security documentation, penetration test reports,
            and infrastructure architecture overview by contacting their account manager.
          </p>
        </div>
      </section>
    </div>
  )
}
