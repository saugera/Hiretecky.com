'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import AgentCard from '@/components/agents/AgentCard'
import { agents, categories } from '@/lib/agents'
import { cn } from '@/lib/utils'

export default function AgentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = agents.filter((a) => {
    const matchCategory = selectedCategory === 'All' || a.category === selectedCategory
    const matchSearch =
      search === '' ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.tagline.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Browse AI Agents
          </h1>
          <p className="text-lg text-slate-600">
            {agents.length} AI agents ready to hire — filtered for your business needs.
          </p>

          {/* Search */}
          <div className="mt-6 max-w-xl relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, role, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors border',
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:border-indigo-300 hover:text-indigo-600'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-500 mb-6">
          Showing {filtered.length} agent{filtered.length !== 1 ? 's' : ''}
          {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
          {search && ` matching "${search}"`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl mb-2">🤖</p>
            <p className="text-slate-600 font-medium">No agents found</p>
            <p className="text-sm text-slate-400 mt-1">Try a different search or category</p>
          </div>
        )}

        {/* Custom agent CTA */}
        <div className="mt-14 rounded-2xl bg-indigo-600 p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">
            Don't see the agent you need?
          </h3>
          <p className="text-indigo-200 mb-5 text-sm">
            Tell us your use case and we'll build a custom AI agent tailored to your exact workflow.
          </p>
          <a
            href="/request"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-700 font-semibold rounded-xl text-sm hover:bg-indigo-50 transition-colors"
          >
            Request a Custom Agent →
          </a>
        </div>
      </div>
    </div>
  )
}
