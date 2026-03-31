'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, Calendar, Clock, Users } from 'lucide-react'
import { agents } from '@/lib/agents'

const companySizes = ['1–10 employees', '11–50 employees', '51–200 employees', '201–500 employees', '500+ employees']
const useCases = ['Replace a specific role', 'Scale an existing team', 'Try AI before committing', 'Evaluate cost savings', 'Proof of concept for leadership']

export default function DemoPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    agentInterest: '',
    useCase: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us at hello@hiretecky.com')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">You're booked!</h2>
          <p className="text-slate-600 mb-2">
            We'll send a calendar invite to <strong>{form.email}</strong> within 2 business hours.
          </p>
          <p className="text-sm text-slate-500">
            Your demo will be 30 minutes with a Hiretecky automation expert tailored to your use case.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              Book a Free Demo
            </h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              See any AI agent live in 30 minutes — using your data or a realistic scenario.
              No sales pitch, just the product working.
            </p>

            <div className="space-y-5">
              {[
                { icon: Clock, title: '30 minutes', desc: 'Focused, no fluff' },
                { icon: Users, title: 'Your use case', desc: "We tailor the demo to your role and workflow" },
                { icon: Calendar, title: 'Your schedule', desc: "We send a Calendly link within 2 hours of your request" },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
              <p className="text-sm text-indigo-800 font-medium mb-1">No commitment required</p>
              <p className="text-xs text-indigo-600">
                A demo is just a demo. There's no obligation to buy, and we won't add you to a sales sequence without your permission.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h2 className="font-semibold text-slate-900 mb-5">Tell us a bit about you</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Acme Inc."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">Company Size *</label>
                    <select
                      name="companySize"
                      value={form.companySize}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
                    >
                      <option value="">Select size...</option>
                      {companySizes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Which agent are you most interested in? *</label>
                  <select
                    name="agentInterest"
                    value={form.agentInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
                  >
                    <option value="">Select an agent...</option>
                    {agents.map(a => <option key={a.id} value={a.slug}>{a.name} ({a.category})</option>)}
                    <option value="not-sure">Not sure yet — show me what's possible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">What's driving your interest? *</label>
                  <select
                    name="useCase"
                    value={form.useCase}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
                  >
                    <option value="">Select one...</option>
                    {useCases.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Anything specific you'd like us to show? (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g. We want to see how the agent handles inbound support tickets from our Shopify store..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {loading ? 'Submitting...' : 'Request My Free Demo'}
                </button>

                <p className="text-center text-xs text-slate-400">
                  We'll send a calendar invite within 2 business hours. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
