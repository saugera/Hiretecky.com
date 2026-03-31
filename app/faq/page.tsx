'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What exactly is an AI agent?',
        a: 'An AI agent is an autonomous software system that performs a specific business function — like qualifying leads, answering support tickets, or reviewing contracts — without needing a human to manage each task. Unlike a chatbot that waits to be asked, an agent proactively works through your workflow 24/7.',
      },
      {
        q: 'How is this different from using ChatGPT or a generic AI tool?',
        a: 'Generic AI tools require you to prompt them manually for every task. Our agents are pre-configured for specific business roles, connected to your existing tools (CRM, helpdesk, etc.), trained on your data and brand voice, and operate autonomously without you supervising each step.',
      },
      {
        q: 'How fast can I actually deploy an agent?',
        a: 'Most catalog agents are live within 48 business hours. Custom agents typically take 5–10 business days depending on the complexity of your workflow and integrations required. We handle configuration, testing, and onboarding.',
      },
      {
        q: 'Do I need technical knowledge to use Hiretecky?',
        a: 'No. You describe your workflow and business goals — we handle the technical setup. You interact with your agent through a simple dashboard, and our team manages integrations, updates, and performance tuning.',
      },
    ],
  },
  {
    category: 'Pricing & Contracts',
    questions: [
      {
        q: 'Are there long-term contracts?',
        a: 'No. All plans are month-to-month. You can upgrade, downgrade, or cancel at any time with 30 days notice. We earn your business every month.',
      },
      {
        q: 'What happens if the agent doesn\'t perform as expected?',
        a: 'We offer a 14-day performance guarantee on all new deployments. If your agent isn\'t meeting agreed-upon benchmarks within 14 days of going live, we\'ll reconfigure it at no cost — or refund your first month.',
      },
      {
        q: 'Are there setup fees?',
        a: 'Starter plans have no setup fees. Professional and Enterprise plans include a one-time onboarding fee that covers custom integration setup, workflow mapping, and dedicated testing. This is included in the pricing shown on each agent page.',
      },
      {
        q: 'Can I try before I buy?',
        a: 'Yes — book a free demo and we\'ll run a live demonstration of any agent using your data or a realistic sample scenario. We don\'t believe in buying blind.',
      },
    ],
  },
  {
    category: 'Data & Security',
    questions: [
      {
        q: 'Is my data safe?',
        a: 'Yes. We are SOC 2 Type II certified. Your data is encrypted at rest and in transit, stored in isolated environments per customer, and never used to train public AI models. See our Trust & Security page for full details.',
      },
      {
        q: 'Which AI models power your agents?',
        a: 'Our agents are built on enterprise-grade LLMs including models from Anthropic and OpenAI, selected based on the specific task requirements. All model providers we use have enterprise data protection agreements in place.',
      },
      {
        q: 'Can agents access our internal systems?',
        a: 'Only the systems you explicitly authorize. Agents operate through approved API connections with read/write permissions you define. You control exactly what each agent can and cannot touch.',
      },
      {
        q: 'Are you GDPR and CCPA compliant?',
        a: 'Yes. We act as a data processor under your instructions, maintain required data processing agreements, support data subject requests, and can be configured to ensure data residency requirements are met for EU or California data.',
      },
    ],
  },
  {
    category: 'Capabilities & Limits',
    questions: [
      {
        q: 'What can\'t an AI agent do?',
        a: 'AI agents excel at high-volume, rule-driven, research-intensive, and language-based tasks. They aren\'t suited for decisions requiring deep relationship context, creative strategic thinking, or tasks requiring physical presence. We\'ll always be transparent about where a human should stay in the loop.',
      },
      {
        q: 'Can I customize an agent\'s behavior and tone?',
        a: 'Absolutely. Every agent can be trained on your brand voice, configured with your specific workflow rules, and tuned to escalate or defer in situations you define. Customization is a core part of onboarding.',
      },
      {
        q: 'What if I need something not in your catalog?',
        a: 'Use the Request Custom Agent form. Describe your role, workflow, and toolset — our team will assess feasibility and propose a custom agent build, typically scoped and priced within 2 business days.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left"
      >
        <span className={cn('text-sm font-medium', open ? 'text-indigo-600' : 'text-slate-800')}>
          {q}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 shrink-0 mt-0.5 text-slate-400 transition-transform',
            open && 'rotate-180 text-indigo-500'
          )}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm text-slate-600 leading-relaxed pr-8">{a}</p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600">
            Everything you need to know before hiring your first AI agent.
          </p>
        </div>

        {/* FAQ sections */}
        <div className="space-y-8">
          {faqs.map((section) => (
            <div key={section.category} className="bg-white rounded-2xl border border-slate-200 px-6 py-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 pt-4 pb-2">
                {section.category}
              </h2>
              {section.questions.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 bg-indigo-600 rounded-2xl p-6 text-center text-white">
          <h3 className="font-bold mb-2">Still have questions?</h3>
          <p className="text-indigo-200 text-sm mb-5">
            Book a free 30-minute demo and ask us anything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/demo"
              className="px-5 py-2.5 bg-white text-indigo-700 font-semibold rounded-xl text-sm hover:bg-indigo-50 transition-colors"
            >
              Book a Demo
            </Link>
            <a
              href="mailto:hello@hiretecky.com"
              className="px-5 py-2.5 bg-indigo-500 text-white font-semibold rounded-xl text-sm border border-indigo-400 hover:bg-indigo-400 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
