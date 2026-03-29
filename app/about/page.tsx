import Link from 'next/link'
import { Bot, Target, Users, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl mb-6">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            About Hiretecky
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We started as a traditional consulting company helping businesses hire talented humans.
            Then the world changed — and we evolved with it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Our Story</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Hiretecky was founded on a simple idea: <strong>connect the right talent with
              the right companies</strong>. For years, we helped businesses across industries
              find skilled professionals for critical roles — from sales development reps to
              customer support specialists to finance analysts.
            </p>
            <p>
              We were good at it. We understood what companies needed and knew how to find
              people who could deliver.
            </p>
            <p>
              Then AI changed everything.
            </p>
            <p>
              In 2024, we watched as AI agents began outperforming human workers in specific,
              repeatable tasks — answering support tickets faster, qualifying leads more
              consistently, processing documents without error. Our clients started asking:
              <em>"Can we hire an AI instead?"</em>
            </p>
            <p>
              That question became our mission. We rebuilt Hiretecky from the ground up — not
              as a staffing firm, but as <strong>the marketplace where companies hire AI Agents</strong>.
              We brought our deep understanding of business roles and translated it into building,
              curating, and deploying AI agents that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Outcome-Focused',
                body: "We don't sell AI for AI's sake. We deploy agents that solve real business problems and deliver measurable results — or we don't ship them.",
              },
              {
                icon: Users,
                title: 'Human-Designed',
                body: "Every agent in our catalog was designed by people who've worked the roles they're automating. We know what good looks like.",
              },
              {
                icon: TrendingUp,
                title: 'Built to Scale',
                body: "Our agents don't just do the job today — they learn, improve, and scale as your business grows, without adding headcount.",
              },
            ].map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="inline-flex p-2.5 rounded-xl bg-indigo-50 mb-4">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Companies Served' },
              { value: '8', label: 'Agent Categories' },
              { value: '48hrs', label: 'Average Deploy Time' },
              { value: '80%', label: 'Average Cost Reduction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to build your AI workforce?</h2>
          <p className="text-indigo-200 mb-8">
            Join forward-thinking companies replacing repetitive headcount with AI agents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/agents"
              className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors text-sm"
            >
              Browse Agents
            </Link>
            <Link
              href="/request"
              className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl border border-indigo-400 hover:bg-indigo-400 transition-colors text-sm"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
