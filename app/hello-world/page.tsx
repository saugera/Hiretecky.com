import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hello World | Hiretecky',
  description:
    'Legacy Hello World post kept online so older indexed links continue to resolve after the site migration.',
}

export default function HelloWorldPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Legacy Post
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Hello World</h1>
        <p className="mt-6 text-base leading-8 text-slate-700">
          This URL likely originated from an older blog system before the current Hiretecky site
          launched. Rather than returning a 404, we&apos;re keeping the page live so visitors from
          old Google results still arrive on a valid destination.
        </p>
        <p className="mt-5 text-base leading-8 text-slate-700">
          Hiretecky now focuses on AI-powered services and agent deployments. If you were looking
          for current content, the best next step is to browse the blog or explore the live
          services page.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            Read Current Blog Posts
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </article>
    </div>
  )
}
