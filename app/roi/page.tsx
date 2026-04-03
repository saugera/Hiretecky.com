'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Lock } from 'lucide-react'

const industries = [
  {
    label: 'Healthcare',
    staffingMultiplier: 1.35,
    automationRate: 0.62,
    complianceCost: 85000,
    workflows: ['Prior Authorization', 'Patient Communications', 'Credentialing', 'Revenue Cycle'],
  },
  {
    label: 'Financial Services',
    staffingMultiplier: 1.42,
    automationRate: 0.58,
    complianceCost: 120000,
    workflows: ['KYC/AML Screening', 'Loan Processing', 'Compliance Reporting', 'Customer Onboarding'],
  },
  {
    label: 'SaaS / Technology',
    staffingMultiplier: 1.28,
    automationRate: 0.71,
    complianceCost: 35000,
    workflows: ['Customer Support', 'Sales Outreach', 'Code Review', 'Data Analytics'],
  },
  {
    label: 'Legal & Professional Services',
    staffingMultiplier: 1.38,
    automationRate: 0.52,
    complianceCost: 65000,
    workflows: ['Document Review', 'Client Communications', 'Billing & Timekeeping', 'Research'],
  },
  {
    label: 'Manufacturing & Logistics',
    staffingMultiplier: 1.22,
    automationRate: 0.55,
    complianceCost: 42000,
    workflows: ['Quality Inspection', 'Supply Chain Monitoring', 'Compliance Tracking', 'Customer Service'],
  },
  {
    label: 'Retail & E-Commerce',
    staffingMultiplier: 1.18,
    automationRate: 0.68,
    complianceCost: 18000,
    workflows: ['Customer Support', 'Marketing Content', 'Inventory Analytics', 'Returns Processing'],
  },
]

const deptRoles = [
  { label: 'Sales / SDR', avgSalary: 72000, agentCostPct: 0.22 },
  { label: 'Customer Support', avgSalary: 52000, agentCostPct: 0.24 },
  { label: 'HR / Recruiting', avgSalary: 68000, agentCostPct: 0.20 },
  { label: 'Marketing / Content', avgSalary: 65000, agentCostPct: 0.22 },
  { label: 'Finance / Accounting', avgSalary: 75000, agentCostPct: 0.18 },
  { label: 'Software Dev / QA', avgSalary: 115000, agentCostPct: 0.15 },
  { label: 'Data / Analytics', avgSalary: 95000, agentCostPct: 0.16 },
  { label: 'Legal / Compliance', avgSalary: 88000, agentCostPct: 0.19 },
]

function fmt(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

type DeptHeadcount = Record<number, number>

export default function ROIPage() {
  const [industryIdx, setIndustryIdx] = useState(0)
  const [deptHeadcount, setDeptHeadcount] = useState<DeptHeadcount>({ 0: 3, 1: 2 })
  const [infraMonthly, setInfraMonthly] = useState(18000)
  const [gated, setGated] = useState(true)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const industry = industries[industryIdx]

  // Compute totals
  const totalHeadcount = Object.values(deptHeadcount).reduce((a, b) => a + b, 0)

  const currentAnnualStaffing = Object.entries(deptHeadcount).reduce((sum, [idxStr, count]) => {
    const role = deptRoles[Number(idxStr)]
    return sum + role.avgSalary * count * industry.staffingMultiplier
  }, 0)

  const agentAnnualCost = Object.entries(deptHeadcount).reduce((sum, [idxStr, count]) => {
    const role = deptRoles[Number(idxStr)]
    return sum + role.avgSalary * role.agentCostPct * count * 12
  }, 0)

  const automatedStaffSavings = currentAnnualStaffing * industry.automationRate
  const infraOptimizationSavings = infraMonthly * 12 * 0.28
  const complianceSavings = industry.complianceCost * 0.4
  const totalAnnualSavings = automatedStaffSavings + infraOptimizationSavings + complianceSavings - agentAnnualCost
  const roi = agentAnnualCost > 0 ? Math.round((totalAnnualSavings / agentAnnualCost) * 100) : 0
  const paybackMonths = agentAnnualCost > 0 ? Math.ceil((agentAnnualCost / 12) / (totalAnnualSavings / 12)) : 0

  function handleUngate(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address.')
      return
    }
    // Fire-and-forget API call
    fetch('/api/roi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, industry: industry.label, totalHeadcount, infraMonthly }),
    }).catch(() => {})
    setGated(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="pt-16 pb-10 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3">Cloud & AI ROI Calculator</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Calculate Your AI Automation Savings
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Enter your industry, headcount by department, and infrastructure costs. We&apos;ll show you projected annual savings, payback period, and which workflows to automate first.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">

        {/* Step 1: Industry */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Step 1 — Your Industry</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {industries.map((ind, i) => (
              <button
                key={ind.label}
                onClick={() => setIndustryIdx(i)}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                  industryIdx === i
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>
          {industryIdx >= 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {industry.workflows.map((w) => (
                <span key={w} className="px-2.5 py-1 rounded-full bg-indigo-900/40 border border-indigo-800 text-indigo-300 text-xs">
                  {w}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Step 2: Headcount */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Step 2 — Headcount by Department</p>
          <p className="text-slate-500 text-sm mb-5">Set to 0 for departments you don&apos;t want to include.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {deptRoles.map((role, i) => (
              <div key={role.label} className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-300 font-medium truncate">{role.label}</p>
                  <p className="text-xs text-slate-500">{fmt(role.avgSalary)}/yr avg</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setDeptHeadcount(prev => ({ ...prev, [i]: Math.max(0, (prev[i] ?? 0) - 1) }))}
                    className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-lg leading-none flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-white font-bold text-sm">{deptHeadcount[i] ?? 0}</span>
                  <button
                    onClick={() => setDeptHeadcount(prev => ({ ...prev, [i]: (prev[i] ?? 0) + 1 }))}
                    className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-lg leading-none flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Infrastructure */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Step 3 — Current Cloud / Infrastructure Spend</p>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <input
                type="range"
                min={2000}
                max={200000}
                step={1000}
                value={infraMonthly}
                onChange={(e) => setInfraMonthly(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$2k/mo</span>
                <span>$200k/mo</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-white font-bold text-xl">{fmt(infraMonthly)}</p>
              <p className="text-slate-500 text-xs">per month</p>
            </div>
          </div>
        </div>

        {/* Results — gated */}
        <div className="rounded-2xl border border-slate-700 overflow-hidden">
          <div className="bg-slate-900 px-6 py-4 border-b border-slate-800">
            <p className="text-white font-bold">Your ROI Projection</p>
            <p className="text-slate-400 text-sm">Based on {totalHeadcount} roles across {industry.label}</p>
          </div>

          <div className="relative">
            {/* Blurred preview */}
            <div className={`p-6 grid grid-cols-2 sm:grid-cols-3 gap-4 ${gated ? 'blur-sm select-none pointer-events-none' : ''}`}>
              {[
                { label: 'Annual Savings', value: fmt(Math.max(0, totalAnnualSavings)), highlight: true },
                { label: 'ROI on Agent Cost', value: `${Math.max(0, roi)}%` },
                { label: 'Payback Period', value: paybackMonths > 0 ? `${paybackMonths} months` : '< 1 month' },
                { label: 'Staff Cost Automatable', value: fmt(Math.max(0, automatedStaffSavings)) },
                { label: 'Infrastructure Savings', value: fmt(Math.max(0, infraOptimizationSavings)) },
                { label: 'Compliance Cost Reduction', value: fmt(Math.max(0, complianceSavings)) },
              ].map((item) => (
                <div key={item.label} className={`rounded-xl p-4 ${item.highlight ? 'bg-emerald-900/40 border border-emerald-700' : 'bg-slate-800'}`}>
                  <p className="text-xs text-slate-400 mb-1">{item.label}</p>
                  <p className={`text-2xl font-bold ${item.highlight ? 'text-emerald-400' : 'text-white'}`}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Gate overlay */}
            {gated && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-[2px]">
                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-2xl">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Get Your Custom Blueprint</h3>
                  <p className="text-slate-400 text-sm mb-5">
                    Enter your work email to unlock your full ROI analysis and a personalized AI deployment roadmap.
                  </p>
                  <form onSubmit={handleUngate} className="space-y-3">
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {emailError && <p className="text-red-400 text-xs text-left">{emailError}</p>}
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      Unlock My ROI Analysis
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="text-slate-600 text-xs mt-3">No spam. We&apos;ll send you the analysis summary.</p>
                </div>
              </div>
            )}
          </div>

          {/* Post-gate recommendations */}
          {!gated && (
            <div className="border-t border-slate-800 p-6 bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Recommended First Deployments</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {industry.workflows.slice(0, 4).map((w, i) => (
                  <div key={w} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><span className="font-semibold">#{i + 1}:</span> {w}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-colors text-sm"
                >
                  Book a Custom Scoping Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center px-5 py-3 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-slate-600 transition-colors text-sm"
                >
                  Start with a $15k Audit
                </Link>
              </div>
            </div>
          )}
        </div>

        <p className="text-xs text-slate-600 text-center pb-6">
          Estimates use US market salary benchmarks with benefits/overhead multipliers, industry-specific automation rates, and average cloud optimization savings from Hiretecky deployments. Actual results vary. <Link href="/contact" className="text-indigo-400 hover:underline">Contact us</Link> for a precise analysis.
        </p>
      </div>
    </div>
  )
}
