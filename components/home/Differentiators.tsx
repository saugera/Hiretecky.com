import Link from 'next/link'
import { Users, Award, HeartHandshake, FlaskConical } from 'lucide-react'

export default function Differentiators() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Hiretecky
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The Only AI Agent Marketplace<br />Built by Hiring Experts
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Most AI tools are built by engineers who've never hired anyone.
            We spent 10 years placing talent before we built this platform.
            That difference shows in every agent we deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[
            {
              icon: Users,
              title: 'We Know What "Good" Looks Like',
              body: "We've hired for Sales, Support, HR, Finance, and Ops roles at hundreds of companies. Our agents are designed around real job descriptions, real KPIs, and real performance standards — not generic AI outputs.",
            },
            {
              icon: Award,
              title: '14-Day Performance Guarantee',
              body: "If your agent doesn't hit agreed benchmarks within 14 days of going live, we reconfigure it at no cost — or give you a full refund. No other AI marketplace offers this. We do because we know what 'performing' means.",
            },
            {
              icon: HeartHandshake,
              title: 'White-Glove Deployment',
              body: "We don't hand you a login and call it done. Our team maps your workflow, configures your agent, tests edge cases, and monitors the first 30 days. You get results, not just software.",
            },
            {
              icon: FlaskConical,
              title: 'Role-First, Not Tech-First',
              body: "We don't start with AI and work backward. We start with 'what does this role actually need to do?' and build an agent that nails it. Your agents are built for outcomes, not demos.",
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <div className="inline-flex p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-700 mb-4">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>

        {/* Guarantee callout */}
        <div className="bg-indigo-600 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-lg mb-1">
              14-Day Performance Guarantee — on every deployment
            </p>
            <p className="text-indigo-200 text-sm">
              Benchmarks not met? We fix it free or refund your first month. No questions asked.
            </p>
          </div>
          <Link
            href="/demo"
            className="px-5 py-3 bg-white text-indigo-700 font-semibold rounded-xl text-sm hover:bg-indigo-50 transition-colors whitespace-nowrap"
          >
            Book a Demo →
          </Link>
        </div>
      </div>
    </section>
  )
}
