import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Mail, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Send Resume | Hiretecky',
  description:
    'Legacy resume submission page for Hiretecky. Contact our team if you want to share your background or discuss opportunities.',
}

export default function SendResumePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="inline-flex rounded-2xl bg-indigo-50 p-4">
            <FileText className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Send Resume
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            This is a legacy Hiretecky page that previously accepted resume submissions. Our
            website has since changed, but if you found us through an older Google result, you
            can still reach the team here.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-slate-900">Share your background</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Email your resume, portfolio, or LinkedIn profile to Hiretecky and include a
                short note about the kind of work or partnership you are interested in.
              </p>
              <a
                href="mailto:hello@hiretecky.com?subject=Resume%20Submission"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                <Mail className="w-4 h-4" />
                hello@hiretecky.com
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-slate-900">Need the right contact path?</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                If you are reaching out about services, custom builds, or business inquiries, use
                our current forms and we&apos;ll route you to the right team quickly.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600"
                >
                  Contact Hiretecky
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/request"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600"
                >
                  Request a service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
