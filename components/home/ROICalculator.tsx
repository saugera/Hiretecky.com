'use client'

import { useState } from 'react'
import Link from 'next/link'

const roles = [
  { label: 'Sales Development Rep (SDR)', humanCost: 6500, agentCost: 1499 },
  { label: 'Customer Support Rep', humanCost: 4500, agentCost: 999 },
  { label: 'Recruiter / HR Coordinator', humanCost: 6000, agentCost: 1199 },
  { label: 'Content Writer / Marketing Coordinator', humanCost: 5000, agentCost: 999 },
  { label: 'Bookkeeper / Accounting Coordinator', humanCost: 5500, agentCost: 799 },
  { label: 'Junior Developer / QA Tester', humanCost: 8000, agentCost: 1499 },
  { label: 'Data Analyst', humanCost: 7500, agentCost: 1199 },
  { label: 'Paralegal / Compliance Coordinator', humanCost: 6500, agentCost: 1399 },
]

function formatCurrency(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export default function ROICalculator() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [headcount, setHeadcount] = useState(2)

  const role = roles[roleIndex]
  const humanMonthly = role.humanCost * headcount
  const agentMonthly = role.agentCost * headcount
  const monthlySavings = humanMonthly - agentMonthly
  const annualSavings = monthlySavings * 12
  const savingsPct = Math.round((monthlySavings / humanMonthly) * 100)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Calculate Your Savings
          </h2>
          <p className="text-lg text-slate-600">
            See how much your company could save by deploying an AI agent.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Role selector */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Which role would you automate?
              </label>
              <select
                value={roleIndex}
                onChange={(e) => setRoleIndex(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              >
                {roles.map((r, i) => (
                  <option key={r.label} value={i}>{r.label}</option>
                ))}
              </select>
            </div>

            {/* Headcount slider */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                How many people in this role?{' '}
                <span className="text-indigo-600 font-bold">{headcount}</span>
              </label>
              <input
                type="range"
                min={1}
                max={20}
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>1</span>
                <span>20</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Current Cost / Month</p>
              <p className="text-2xl font-bold text-slate-800">{formatCurrency(humanMonthly)}</p>
              <p className="text-xs text-slate-400 mt-1">
                {headcount} human{headcount > 1 ? 's' : ''} @ ~{formatCurrency(role.humanCost)}/mo each
              </p>
            </div>
            <div className="bg-white rounded-xl border border-indigo-300 ring-2 ring-indigo-100 p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">With AI Agents / Month</p>
              <p className="text-2xl font-bold text-indigo-600">{formatCurrency(agentMonthly)}</p>
              <p className="text-xs text-slate-400 mt-1">
                {headcount} agent{headcount > 1 ? 's' : ''} @ ~{formatCurrency(role.agentCost)}/mo each
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 text-center">
              <p className="text-xs text-emerald-700 mb-1">You Save / Month</p>
              <p className="text-2xl font-bold text-emerald-600">{formatCurrency(monthlySavings)}</p>
              <p className="text-xs text-emerald-600 font-semibold mt-1">{savingsPct}% reduction</p>
            </div>
          </div>

          {/* Annual callout */}
          <div className="bg-slate-900 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-slate-400 text-sm">Projected annual savings</p>
              <p className="text-3xl font-bold text-white">{formatCurrency(annualSavings)}</p>
            </div>
            <Link
              href="/demo"
              className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl text-sm hover:bg-indigo-500 transition-colors whitespace-nowrap"
            >
              See It in Action →
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-400 text-center">
            * Estimates based on US market averages including salary, benefits, and overhead.
            Actual savings vary. <a href="/demo" className="text-indigo-500 hover:underline">Book a demo</a> for a tailored analysis.
          </p>
        </div>
      </div>
    </section>
  )
}
