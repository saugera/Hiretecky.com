'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

const reasons = [
  'Enterprise AI & Cloud Security Audit ($15k)',
  'Schedule a Technical Architecture Review',
  'Request a demo',
  'Custom agent build',
  'Healthcare AI deployment (HIPAA)',
  'Pricing & plans',
  'Technical support',
  'Partnership opportunity',
  'Press & media',
  'General inquiry',
  'Other',
]

const enterpriseReasons = [
  'Enterprise AI & Cloud Security Audit ($15k)',
  'Schedule a Technical Architecture Review',
  'Healthcare AI deployment (HIPAA)',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    reason: '',
    message: '',
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us directly at hello@hiretecky.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Questions about a deployment, pricing, or a custom agent build?
            We respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — contact info */}
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: 'Email Us',
                lines: ['hello@hiretecky.com', 'We respond within 24 hours'],
                href: 'mailto:hello@hiretecky.com',
              },
              {
                icon: MessageSquare,
                title: 'Book a Demo',
                lines: ['30-minute live walkthrough', 'Tailored to your use case'],
                href: '/demo',
              },
              {
                icon: Clock,
                title: 'Business Hours',
                lines: ['Monday – Friday', '9 AM – 6 PM EST'],
                href: null,
              },
              {
                icon: MapPin,
                title: 'Headquarters',
                lines: ['United States', 'Serving clients globally'],
                href: null,
              },
            ].map((item) => {
              const Icon = item.icon
              const inner = (
                <div className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">{item.title}</p>
                    {item.lines.map((l) => (
                      <p key={l} className="text-sm text-slate-500">{l}</p>
                    ))}
                  </div>
                </div>
              )
              return item.href ? (
                <a key={item.title} href={item.href}>{inner}</a>
              ) : (
                <div key={item.title}>{inner}</div>
              )
            })}

            {/* Quick links */}
            <div className="bg-indigo-600 rounded-2xl p-5 text-white">
              <p className="font-semibold mb-3">Looking for something specific?</p>
              <ul className="space-y-2 text-sm text-indigo-200">
                {[
                  { label: 'Browse AI Agents', href: '/agents' },
                  { label: 'Request Custom Agent', href: '/request' },
                  { label: 'Read the FAQ', href: '/faq' },
                  { label: 'Security & Trust', href: '/trust' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      → {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-14 h-14 text-emerald-500 mb-4" />
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Message Received!</h2>
                  <p className="text-slate-600 max-w-sm">
                    Thanks, <strong>{form.name}</strong>. We'll get back to you at{' '}
                    <strong>{form.email}</strong> within one business day.
                  </p>
                  <a
                    href="/"
                    className="mt-8 px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl text-sm hover:bg-indigo-700 transition-colors"
                  >
                    Back to Home
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      />
                    </div>
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Reason for Contact <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                      >
                        <option value="">Select a reason...</option>
                        {reasons.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      {enterpriseReasons.includes(form.reason) && (
                        <p className="mt-2 text-xs text-indigo-600 font-medium">
                          ✓ Enterprise inquiry — our solutions architect will respond within 4 hours.
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
                    />
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
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    We respond within one business day. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
