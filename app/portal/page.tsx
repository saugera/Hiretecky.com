import Link from 'next/link'
import { Metadata } from 'next'
import {
  LayoutDashboard,
  FileText,
  Upload,
  Shield,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Lock,
  ChevronRight,
  Activity,
  Server,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Command Center — Hiretecky',
  description: 'Secure client portal for Hiretecky enterprise customers. Track deployment progress, access reports, and manage your AI agent configuration.',
}

// Static demo data — replace with real auth/data layer when building live portal
const demoProject = {
  client: 'Acme Health System',
  engagement: 'AI Prior Authorization Deployment',
  startDate: 'March 17, 2026',
  phase: 'Production',
  phaseColor: 'emerald',
  csm: 'Sarah Chen',
  architect: 'Marcus Webb',
}

const milestones = [
  { label: 'Security Review & BAA Execution', status: 'complete', date: 'Mar 18' },
  { label: 'FHIR Integration (Epic Sandbox)', status: 'complete', date: 'Mar 22' },
  { label: 'Payer Criteria Mapping (Top 14)', status: 'complete', date: 'Mar 28' },
  { label: 'Shadow Mode Pilot (2 weeks)', status: 'complete', date: 'Apr 4' },
  { label: 'Production Deployment — Tier 1 Codes', status: 'active', date: 'Apr 7' },
  { label: 'Full Case Mix Expansion', status: 'pending', date: 'Apr 21' },
  { label: 'First Quarterly Review', status: 'pending', date: 'May 15' },
]

const metrics = [
  { label: 'Authorizations This Week', value: '847', delta: '+12%', up: true },
  { label: 'Avg. Approval Time', value: '31 hrs', delta: '−58%', up: true },
  { label: 'Autonomous Resolution Rate', value: '76%', delta: '+8 pts', up: true },
  { label: 'Pending Human Review', value: '14', delta: '', up: null },
]

const reports = [
  { name: 'Week 3 Performance Report', date: 'Apr 3, 2026', size: '2.1 MB', type: 'PDF' },
  { name: 'FHIR Integration Architecture Diagram', date: 'Mar 22, 2026', size: '840 KB', type: 'PDF' },
  { name: 'Security Controls Attestation', date: 'Mar 18, 2026', size: '1.4 MB', type: 'PDF' },
  { name: 'Payer Criteria Mapping — Initial 14', date: 'Mar 28, 2026', size: '3.2 MB', type: 'XLSX' },
]

const auditLog = [
  { time: '09:14 AM', action: 'Authorization submitted — Auth #PA-2284 (Blue Cross)', actor: 'Agent' },
  { time: '09:11 AM', action: 'Patient record accessed — MRN 448291 (Condition, MedicationRequest)', actor: 'Agent' },
  { time: '08:55 AM', action: 'Authorization escalated to human review — non-standard criteria', actor: 'Agent' },
  { time: '08:41 AM', action: 'Authorization approved — Auth #PA-2279 (Aetna)', actor: 'Payer' },
  { time: '08:30 AM', action: 'Daily batch initiated — 112 pending authorizations queued', actor: 'System' },
]

function StatusBadge({ status }: { status: string }) {
  if (status === 'complete') return <span className="flex items-center gap-1 text-xs text-emerald-400"><CheckCircle className="w-3.5 h-3.5" /> Complete</span>
  if (status === 'active') return <span className="flex items-center gap-1 text-xs text-indigo-400"><Activity className="w-3.5 h-3.5 animate-pulse" /> In Progress</span>
  return <span className="flex items-center gap-1 text-xs text-slate-500"><Clock className="w-3.5 h-3.5" /> Upcoming</span>
}

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Top bar */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-white">Client Command Center</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-sm text-slate-400">{demoProject.client}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Agent Active
              </div>
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold">
                JD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo notice */}
      <div className="bg-amber-900/30 border-b border-amber-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center gap-2 text-amber-300 text-xs">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span><strong>Preview mode</strong> — This is a UI demonstration. Live portal access requires enterprise onboarding. <Link href="/contact" className="underline hover:text-amber-200">Request access →</Link></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-[260px_1fr] gap-6">

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Production</p>
              </div>
              <p className="font-bold text-white">{demoProject.engagement}</p>
              <p className="text-slate-400 text-xs mt-1">Started {demoProject.startDate}</p>
              <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Client Success</span>
                  <span className="text-slate-300">{demoProject.csm}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Lead Architect</span>
                  <span className="text-slate-300">{demoProject.architect}</span>
                </div>
              </div>
            </div>

            <nav className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1">
              {[
                { icon: LayoutDashboard, label: 'Overview', active: true },
                { icon: Activity, label: 'Performance', active: false },
                { icon: FileText, label: 'Reports', active: false },
                { icon: Upload, label: 'Upload Files', active: false },
                { icon: Shield, label: 'Security & Audit Logs', active: false },
                { icon: Server, label: 'Configuration', active: false },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.label}
                    className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm transition-colors ${
                      item.active
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </button>
                )
              })}
            </nav>

            <div className="rounded-2xl bg-indigo-900/30 border border-indigo-800/50 p-4">
              <p className="text-indigo-300 text-xs font-semibold mb-1">Need support?</p>
              <p className="text-slate-400 text-xs mb-3">Your CSM responds within 2 business hours.</p>
              <Link
                href="/contact"
                className="block text-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Open a Support Ticket →
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-6">

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                  <p className="text-xs text-slate-500 mb-2">{m.label}</p>
                  <p className="text-2xl font-bold text-white">{m.value}</p>
                  {m.delta && (
                    <p className={`text-xs mt-1 font-medium ${m.up ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {m.delta} vs last week
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Milestones + Reports */}
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
                <p className="text-sm font-bold text-white mb-5">Deployment Milestones</p>
                <div className="space-y-3">
                  {milestones.map((m, i) => (
                    <div key={m.label} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        m.status === 'complete' ? 'bg-emerald-500/20' :
                        m.status === 'active' ? 'bg-indigo-500/20' : 'bg-slate-800'
                      }`}>
                        {m.status === 'complete' ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> :
                         m.status === 'active' ? <Activity className="w-3.5 h-3.5 text-indigo-400" /> :
                         <div className="w-2 h-2 rounded-full bg-slate-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm ${m.status === 'pending' ? 'text-slate-500' : 'text-slate-200'}`}>
                          {m.label}
                        </p>
                      </div>
                      <span className="text-xs text-slate-600 shrink-0">{m.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-sm font-bold text-white">Reports & Documents</p>
                  <button className="text-xs text-slate-500 hover:text-slate-300 transition-colors">View all</button>
                </div>
                <div className="space-y-3">
                  {reports.map((r) => (
                    <div key={r.name} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-800/50 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-200 truncate">{r.name}</p>
                        <p className="text-xs text-slate-500">{r.date} · {r.size}</p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download className="w-4 h-4 text-slate-400 hover:text-white" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800">
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-dashed border-slate-700 text-slate-500 text-sm hover:border-slate-600 hover:text-slate-400 transition-colors">
                    <Upload className="w-4 h-4" />
                    Upload Infrastructure Diagrams
                  </button>
                </div>
              </div>
            </div>

            {/* Audit log */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-sm font-bold text-white">Agent Audit Log</p>
                  <p className="text-xs text-slate-500 mt-0.5">Every agent action logged with tamper-evident trail</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <Lock className="w-3.5 h-3.5" />
                  HIPAA-compliant logging
                </div>
              </div>
              <div className="space-y-2">
                {auditLog.map((entry, i) => (
                  <div key={i} className="flex items-start gap-4 py-2.5 border-b border-slate-800 last:border-0">
                    <span className="text-xs text-slate-600 shrink-0 w-16">{entry.time}</span>
                    <span className="text-xs text-slate-300 flex-1">{entry.action}</span>
                    <span className={`text-xs shrink-0 px-2 py-0.5 rounded-full ${
                      entry.actor === 'Agent' ? 'bg-indigo-900/40 text-indigo-400' :
                      entry.actor === 'System' ? 'bg-slate-800 text-slate-400' :
                      'bg-emerald-900/40 text-emerald-400'
                    }`}>{entry.actor}</span>
                  </div>
                ))}
              </div>
              <button className="mt-3 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Export full log (CSV) →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="border-t border-slate-800 bg-slate-900 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white">This is a preview of the Client Command Center.</p>
              <p className="text-slate-400 text-sm">Enterprise clients get a live portal with real-time agent metrics, secure document exchange, and full audit log access.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/demo"
                className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-500 transition-colors whitespace-nowrap"
              >
                Book Enterprise Demo
              </Link>
              <Link
                href="/audit"
                className="px-5 py-2.5 border border-slate-700 text-slate-300 text-sm font-semibold rounded-xl hover:border-slate-600 transition-colors whitespace-nowrap"
              >
                Start with an Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
