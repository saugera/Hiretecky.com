import Link from 'next/link'
import { ArrowRight, Search, Zap, CheckCircle, Shield, Building2 } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare AI Tools → Deploy with Hiretecky',
  description: 'Research and compare AI tools at WeCompareAI.com, then let Hiretecky deploy the right agents for your business — with enterprise security, HIPAA compliance, and a 14-day guarantee.',
}

const comparisons = [
  {
    question: 'Looking for the best AI SDR tool?',
    answer: "We've compared 40+ AI sales tools on WeCompareAI. Once you've picked your stack, Hiretecky deploys and manages it for you.",
    link: '/solutions/ai-sales-agents',
    linkLabel: 'See our AI Sales Agent →',
  },
  {
    question: 'Evaluating AI customer support platforms?',
    answer: "The comparison data is on WeCompareAI. The deployment is here — with white-glove setup and a 14-day guarantee.",
    link: '/solutions/ai-customer-support',
    linkLabel: 'See our AI Support Agent →',
  },
  {
    question: 'Researching AI recruiting software?',
    answer: "Find the right tools on WeCompareAI, then let Hiretecky integrate and configure TalentMatch AI for your exact hiring workflow.",
    link: '/solutions/ai-recruiting-software',
    linkLabel: 'See our AI Recruiting Agent →',
  },
  {
    question: 'Comparing AI content and marketing tools?',
    answer: "Compare platforms on WeCompareAI. Hiretecky then deploys ContentFlow AI — trained on your brand voice, connected to your CMS.",
    link: '/solutions/ai-marketing-automation',
    linkLabel: 'See our AI Marketing Agent →',
  },
  {
    question: 'Need AI agents for healthcare operations?',
    answer: "HIPAA-aware AI agents for prior auths, patient communications, scheduling, and compliance tracking — built for regulated environments.",
    link: '/solutions/ai-healthcare-agents',
    linkLabel: 'See Healthcare AI Agents →',
  },
]

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-900 to-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-5">
            <Search className="w-3.5 h-3.5" />
            Part of the Hiretecky + WeCompareAI ecosystem
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Research. Compare. Deploy.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Use <strong className="text-white">WeCompareAI.com</strong> to find and compare the right AI tools for your business.
            Use <strong className="text-white">Hiretecky</strong> to deploy them — configured, integrated, and guaranteed to perform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wecompareai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors text-sm"
            >
              <Search className="w-4 h-4" />
              Compare AI Tools at WeCompareAI
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-sm"
            >
              <Zap className="w-4 h-4" />
              Deploy an Agent on Hiretecky
            </Link>
          </div>
        </div>
      </section>

      {/* How it works together */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">The Full Pipeline: From Research to Running</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                step: '1',
                title: 'Research on WeCompareAI',
                body: 'Browse independent comparisons of AI tools across sales, support, HR, marketing, and more. Filter by use case, price, integrations, and reviews.',
                color: 'bg-indigo-600',
              },
              {
                step: '2',
                title: 'Choose Your Approach on Hiretecky',
                body: 'Pick a pre-built agent from our catalog, or tell us the tool you found and we\'ll configure and deploy it for your specific workflow.',
                color: 'bg-blue-600',
              },
              {
                step: '3',
                title: 'Live in 48 Hours',
                body: 'We handle integration, training, and testing. You get a working agent with a 14-day performance guarantee — not just a subscription to figure out yourself.',
                color: 'bg-emerald-600',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className={`w-8 h-8 ${s.color} text-white rounded-full flex items-center justify-center font-bold text-sm mb-4`}>
                  {s.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category cross-links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Already Researching a Category?</h2>
          <p className="text-slate-600 mb-8">Jump directly from comparison to deployment.</p>
          <div className="space-y-4">
            {comparisons.map((c) => (
              <div key={c.question} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-colors">
                <div className="flex-1">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{c.question}</p>
                      <p className="text-slate-500 text-xs mt-1">{c.answer}</p>
                    </div>
                  </div>
                </div>
                <Link
                  href={c.link}
                  className="inline-flex items-center gap-1.5 text-indigo-600 font-semibold text-sm hover:text-indigo-700 whitespace-nowrap"
                >
                  {c.linkLabel}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise security moat */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Enterprise Security</p>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                The most secure way to deploy AI agents in the enterprise
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most AI tools that show up in comparison directories are SaaS products — they share infrastructure, log your data, and lack the compliance controls that enterprise security teams require. Hiretecky is different: isolated tenant environments, full audit trails, HIPAA BAA support, and a vendor security package that satisfies even the strictest procurement processes.
              </p>
              <div className="space-y-2">
                {[
                  'SOC 2 Type II (in progress)',
                  'HIPAA Business Associate Agreement available',
                  'VPC-isolated tenant environments',
                  'Zero data training on your workflows',
                  'Complete VSAQ & pentest docs on request',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/trust"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Read our full security documentation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-5">
                <Building2 className="w-5 h-5 text-indigo-400" />
                <p className="text-white font-semibold">Built for regulated industries</p>
              </div>
              {[
                { sector: 'Healthcare', detail: 'HIPAA BAA · FHIR EHR integrations · Prior auth automation' },
                { sector: 'Financial Services', detail: 'SOC 2 controls · Data residency · Full audit trail' },
                { sector: 'Legal & Professional', detail: 'Matter isolation · NDA-first onboarding · Conflict checks' },
                { sector: 'Enterprise SaaS', detail: 'SSO · SCIM provisioning · Custom SLA' },
              ].map((item) => (
                <div key={item.sector} className="py-3 border-b border-white/10 last:border-0">
                  <p className="text-white text-sm font-semibold">{item.sector}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why the combo is powerful */}
      <section className="py-14 bg-indigo-50 border-y border-indigo-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Why Research + Deployment Together Wins
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Most companies spend weeks researching AI tools, then months failing to implement them because implementation is harder than comparison. WeCompareAI handles the research. Hiretecky handles everything after the decision — configuration, integration, security review, testing, and ongoing management.
          </p>
          <p className="text-slate-600 mb-8">
            You&apos;re not buying software. You&apos;re deploying a working business function. That requires more than a login.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm"
          >
            Book a Free Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
