import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { agents } from '@/lib/agents'

export default function AgentShowcase() {
  const featured = agents.filter((a) => a.badge).slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
              Featured AI Agents
            </h2>
            <p className="text-lg text-slate-600">
              Most-hired agents this month — ready to deploy today.
            </p>
          </div>
          <Link
            href="/agents"
            className="inline-flex items-center gap-1.5 text-indigo-600 font-medium hover:text-indigo-700 whitespace-nowrap"
          >
            View all agents
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((agent) => (
            <Link
              key={agent.id}
              href={`/agents/${agent.slug}`}
              className="group p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all bg-white"
            >
              {/* Icon & badge */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{agent.icon}</span>
                {agent.badge && (
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {agent.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">
                {agent.name}
              </h3>
              <p className="text-sm text-slate-500 mb-3">{agent.tagline}</p>

              {/* Category */}
              <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 mb-4">
                {agent.category}
              </span>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-medium text-slate-700">{agent.rating}</span>
                  <span>({agent.reviewCount})</span>
                </div>
                <span>{agent.companiesUsing} companies hiring</span>
              </div>

              {/* Starting price */}
              <div className="mt-3 text-sm">
                <span className="text-slate-500">Starting at </span>
                <span className="font-semibold text-slate-900">${agent.pricing[0].price}/mo</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
