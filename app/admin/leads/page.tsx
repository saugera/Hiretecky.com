import { promises as fs } from 'fs'
import path from 'path'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead Inbox — Hiretecky Admin',
  robots: { index: false, follow: false },
}

interface Contact {
  id: string
  name: string
  email: string
  company?: string
  reason?: string
  message?: string
  submittedAt: string
  priority?: 'enterprise' | 'standard'
}

interface RoiLead {
  email: string
  industry: string
  totalHeadcount: number
  infraMonthly: number
  createdAt: string
}

async function readJson<T>(filename: string): Promise<T[]> {
  try {
    const file = path.join(process.cwd(), 'data', filename)
    const raw = await fs.readFile(file, 'utf8')
    return JSON.parse(raw) as T[]
  } catch {
    return []
  }
}

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })
  } catch { return iso }
}

export default async function AdminLeadsPage() {
  const [contacts, roiLeads, demoRequests, subscribers] = await Promise.all([
    readJson<Contact>('contacts.json'),
    readJson<RoiLead>('roi-leads.json'),
    readJson<Record<string, string>>('demos.json'),
    readJson<Record<string, string>>('subscribers.json'),
  ])

  const enterpriseContacts = contacts.filter((c) => c.priority === 'enterprise')
  const standardContacts = contacts.filter((c) => c.priority !== 'enterprise')

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 sm:p-10">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Hiretecky Admin</p>
          <h1 className="text-2xl font-bold text-white">Lead Inbox</h1>
          <p className="text-slate-400 text-sm mt-1">
            {contacts.length} contacts · {roiLeads.length} ROI leads · {demoRequests.length} demo requests · {subscribers.length} subscribers
          </p>
        </div>

        {/* Enterprise priority */}
        {enterpriseContacts.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-widest">
                Enterprise Inquiries ({enterpriseContacts.length})
              </h2>
            </div>
            <div className="space-y-3">
              {[...enterpriseContacts].reverse().map((c) => (
                <div key={c.id} className="rounded-2xl bg-emerald-900/20 border border-emerald-800/50 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-bold text-white">{c.name}</p>
                      <p className="text-emerald-300 text-sm">{c.email}</p>
                      {c.company && <p className="text-slate-400 text-xs mt-0.5">{c.company}</p>}
                    </div>
                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-700/50">
                        {c.reason}
                      </span>
                      <p className="text-slate-500 text-xs mt-1">{fmtDate(c.submittedAt)}</p>
                    </div>
                  </div>
                  {c.message && (
                    <p className="text-slate-300 text-sm leading-relaxed bg-black/20 rounded-xl px-4 py-3">
                      {c.message}
                    </p>
                  )}
                  <div className="mt-3 flex gap-3">
                    <a
                      href={`mailto:${c.email}?subject=Re: ${encodeURIComponent(c.reason ?? 'Your Hiretecky inquiry')}&body=Hi ${encodeURIComponent(c.name?.split(' ')[0] ?? '')},`}
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      Reply via email →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ROI Leads */}
        {roiLeads.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
              ROI Calculator Leads ({roiLeads.length})
            </h2>
            <div className="rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 border-b border-slate-800">
                  <tr>
                    {['Email', 'Industry', 'Headcount', 'Infra/mo', 'Date'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-slate-400 font-medium text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {[...roiLeads].reverse().map((lead, i) => (
                    <tr key={i} className="bg-slate-900/50 hover:bg-slate-900 transition-colors">
                      <td className="px-4 py-3">
                        <a href={`mailto:${lead.email}`} className="text-indigo-400 hover:underline">{lead.email}</a>
                      </td>
                      <td className="px-4 py-3 text-slate-300">{lead.industry}</td>
                      <td className="px-4 py-3 text-slate-300">{lead.totalHeadcount}</td>
                      <td className="px-4 py-3 text-slate-300">${lead.infraMonthly?.toLocaleString()}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs">{fmtDate(lead.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Demo requests */}
        {demoRequests.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Demo Requests ({demoRequests.length})
            </h2>
            <div className="rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 border-b border-slate-800">
                  <tr>
                    {['Name', 'Email', 'Company', 'Date'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-slate-400 font-medium text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {[...demoRequests].reverse().slice(0, 20).map((d, i) => (
                    <tr key={i} className="bg-slate-900/50 hover:bg-slate-900 transition-colors">
                      <td className="px-4 py-3 text-slate-200">{d.name ?? '—'}</td>
                      <td className="px-4 py-3">
                        <a href={`mailto:${d.email}`} className="text-indigo-400 hover:underline">{d.email}</a>
                      </td>
                      <td className="px-4 py-3 text-slate-400">{d.company ?? '—'}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs">{fmtDate(d.submittedAt ?? d.createdAt ?? '')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Standard contacts */}
        {standardContacts.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
              General Contacts ({standardContacts.length})
            </h2>
            <div className="space-y-3">
              {[...standardContacts].reverse().slice(0, 10).map((c) => (
                <div key={c.id} className="rounded-xl bg-slate-900 border border-slate-800 p-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-white text-sm">{c.name}</p>
                    <a href={`mailto:${c.email}`} className="text-indigo-400 text-xs hover:underline">{c.email}</a>
                    {c.company && <span className="text-slate-500 text-xs ml-2">· {c.company}</span>}
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-xs">{c.reason}</p>
                    <p className="text-slate-600 text-xs">{fmtDate(c.submittedAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {contacts.length === 0 && roiLeads.length === 0 && demoRequests.length === 0 && (
          <div className="rounded-2xl border border-slate-800 p-12 text-center">
            <p className="text-slate-500">No leads yet. Share the site and they will start flowing in.</p>
          </div>
        )}

        <p className="text-slate-700 text-xs text-center pb-4">
          This page is not indexed and has no authentication in the current build. Add middleware auth before going to production.
        </p>
      </div>
    </div>
  )
}
