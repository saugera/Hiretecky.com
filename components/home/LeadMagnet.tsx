'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, Download } from 'lucide-react'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Try again or email hello@hiretecky.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-indigo-50 border-y border-indigo-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4">
          <Download className="w-3.5 h-3.5" />
          Free Guide — No Credit Card Required
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          "The 2026 AI Agent Playbook for Business Leaders"
        </h2>
        <p className="text-slate-600 mb-2">
          A plain-English guide to which roles AI agents can replace today, which to augment, and how to build the business case for your leadership team.
        </p>
        <p className="text-sm text-slate-500 mb-7">
          15 pages · Used by 2,000+ business leaders · Free download
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-2">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
            <p className="font-semibold text-slate-900">Check your inbox!</p>
            <p className="text-sm text-slate-500">We've sent the playbook to <strong>{email}</strong></p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm disabled:opacity-60 flex items-center gap-2 justify-center whitespace-nowrap"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? 'Sending...' : 'Get Free Playbook'}
            </button>
          </form>
        )}

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        {!submitted && (
          <p className="mt-3 text-xs text-slate-400">
            No spam. Unsubscribe anytime. We send one useful email per month.
          </p>
        )}
      </div>
    </section>
  )
}
