import Link from 'next/link'
import { Star } from 'lucide-react'
import { Agent } from '@/lib/types'

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={`/agents/${agent.slug}`}
      className="group flex flex-col p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md bg-white transition-all"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{agent.icon}</span>
        <div className="flex items-center gap-2">
          {agent.badge && (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              {agent.badge}
            </span>
          )}
        </div>
      </div>

      {/* Name & tagline */}
      <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">
        {agent.name}
      </h3>
      <p className="text-sm text-slate-500 mb-3 line-clamp-2">{agent.tagline}</p>

      {/* Category */}
      <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 mb-4 self-start">
        {agent.category}
      </span>

      {/* Top capabilities */}
      <ul className="space-y-1 mb-4 flex-1">
        {agent.capabilities.slice(0, 3).map((cap) => (
          <li key={cap} className="flex items-start gap-1.5 text-xs text-slate-600">
            <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
            {cap}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="font-medium text-slate-700">{agent.rating}</span>
            <span>({agent.reviewCount})</span>
          </div>
          <span>{agent.companiesUsing} hiring</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-900">
            From ${agent.pricing[0].price}<span className="text-slate-400 font-normal text-xs">/mo</span>
          </span>
          <span className="text-xs text-indigo-600 font-medium group-hover:underline">
            View details →
          </span>
        </div>
      </div>
    </Link>
  )
}
