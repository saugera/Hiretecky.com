'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Loader2 } from 'lucide-react'
import { agents } from '@/lib/agents'

const budgetOptions = [
  'Under $500/month',
  '$500 – $1,500/month',
  '$1,500 – $3,000/month',
  '$3,000 – $5,000/month',
  '$5,000+/month',
  'Need a quote',
]

const timelineOptions = [
  'ASAP (within 1 week)',
  '2–4 weeks',
  '1–2 months',
  '3+ months',
  'Just exploring',
]

function RequestForm() {
  const searchParams = useSearchParams()
  const preselectedAgent = searchParams.get('agent') || ''
  const preselectedTier = searchParams.get('tier') || ''

  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    role: preselectedAgent
      ? agents.find((a) => a.slug === preselectedAgent)?.name || ''
      : '',
    description: '',
    budget: preselectedTier === 'Starter' ? 'Under $500/month' : preselectedTier === 'Professional' ? '$500 – $1,500/month' : '',
    timeline: '',
    agentType: preselectedAgent,
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email hello@hiretecky.com')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h2>
        <p className="text-slate-600 max-w-md">
          Thanks, {form.contactName}. Our team will review your request and reach out within{' '}
          <strong>1 business day</strong> to discuss your AI agent deployment.
        </p>
        <a
          href="/agents"
          className="mt-8 px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl text-sm hover:bg-indigo-700 transition-colors"
        >
          Browse More Agents
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Company & Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            required
            placeholder="Acme Corp"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="contactName"
            value={form.contactName}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="jane@company.com"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone (optional)
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Agent interest */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Which AI Agent Are You Interested In? <span className="text-red-500">*</span>
        </label>
        <select
          name="agentType"
          value={form.agentType}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
        >
          <option value="">Select an agent...</option>
          {agents.map((a) => (
            <option key={a.id} value={a.slug}>
              {a.name} ({a.category})
            </option>
          ))}
          <option value="custom">Something Custom — Not Listed</option>
        </select>
      </div>

      {/* Role / job title being replaced */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          What Role or Function Are You Automating? <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          placeholder="e.g. SDR, Customer Support Rep, Bookkeeper, Content Writer..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Describe Your Need <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell us about your current workflow, what tools you use, the volume of work, and what success looks like..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Monthly Budget <span className="text-red-500">*</span>
          </label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
          >
            <option value="">Select budget...</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Timeline <span className="text-red-500">*</span>
          </label>
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
          >
            <option value="">Select timeline...</option>
            {timelineOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {loading ? 'Submitting...' : 'Submit Request — We\'ll Respond in 24 Hours'}
      </button>

      <p className="text-center text-xs text-slate-400">
        No spam. No commitment. We'll contact you to discuss your agent deployment.
      </p>
    </form>
  )
}

export default function RequestPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Request an AI Agent
          </h1>
          <p className="text-lg text-slate-600">
            Browse our catalog or describe a custom need — we'll match or build the right agent for you.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <Suspense fallback={<div className="text-slate-400 text-sm text-center py-8">Loading form...</div>}>
            <RequestForm />
          </Suspense>
        </div>

        {/* Side notes */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs text-slate-500">
          {['Respond in 24 hours', 'No long-term contracts', 'Deploy in 48 hours'].map((t) => (
            <div key={t} className="bg-white rounded-xl border border-slate-200 py-3 px-2 font-medium">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
