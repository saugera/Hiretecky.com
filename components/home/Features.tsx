import { DollarSign, Zap, Clock, TrendingUp, Shield, Sliders } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: '80% Lower Cost',
    description:
      'AI agents work at a fraction of the cost of full-time employees — no benefits, no PTO, no recruitment fees.',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: Clock,
    title: 'Always On, Never Tired',
    description:
      'Your AI agents work 24 hours a day, 7 days a week, across time zones — without ever burning out.',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Deploy in 48 Hours',
    description:
      'From "I want this agent" to fully operational in two business days. No months-long onboarding.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: TrendingUp,
    title: 'Scale Instantly',
    description:
      "Double your workload without doubling headcount. Agents scale up or down as your business needs change.",
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description:
      'SOC 2 compliant. Your data stays yours. Agents operate within strict security and privacy guardrails.',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    icon: Sliders,
    title: 'Fully Configurable',
    description:
      'Pre-built agents you can customize, or tell us what you need and we\'ll build a bespoke agent for your exact workflow.',
    color: 'text-pink-600 bg-pink-50',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Companies Are Switching to AI Agents
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            The traditional model of hiring humans for repetitive, scalable work is changing.
            AI agents are faster, cheaper, and more consistent.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
              >
                <div className={`inline-flex p-2.5 rounded-xl mb-4 ${f.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
