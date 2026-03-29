import { Search, Settings, Rocket, BarChart2 } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Browse or Describe',
    description:
      'Explore our catalog of ready-to-hire AI agents, or describe the role you need filled and we\'ll match or build the right agent.',
  },
  {
    step: '02',
    icon: Settings,
    title: 'Configure & Customize',
    description:
      'Connect your tools, set your brand voice, define workflows, and configure the agent to fit your exact business processes.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Deploy in 48 Hours',
    description:
      'Go live fast. Your agent is trained, tested, and deployed within two business days — ready to handle real work immediately.',
  },
  {
    step: '04',
    icon: BarChart2,
    title: 'Monitor & Scale',
    description:
      'Track performance in real time, review output quality, and scale the agent up or swap it out as your needs evolve.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="max-w-xl mx-auto text-lg text-slate-600">
            Hiring an AI Agent is faster and simpler than hiring a human.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.step} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-calc(50%-40px)] h-px bg-slate-200 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-indigo-100 flex items-center justify-center shadow-sm mb-4">
                      <Icon className="w-7 h-7 text-indigo-600" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-full w-6 h-6 flex items-center justify-center">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
