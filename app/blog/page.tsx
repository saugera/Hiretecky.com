import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — AI Agent Insights for Business Leaders | Hiretecky',
  description: 'Practical guides, ROI analyses, and case studies on deploying AI agents for sales, support, HR, and more.',
}

const posts = [
  {
    slug: 'replace-sdr-with-ai-agent',
    title: 'Can You Really Replace Your SDR Team with an AI Agent?',
    excerpt: 'A practical breakdown of what AI sales agents can and cannot do in 2026 — with real numbers from 50+ deployments.',
    category: 'Sales',
    readTime: '7 min read',
    date: 'March 28, 2026',
    featured: true,
  },
  {
    slug: 'ai-customer-support-roi',
    title: 'The Real ROI of AI Customer Support: A 12-Month Study',
    excerpt: 'We tracked 30 companies that deployed AI support agents. Here\'s what they saved, where they struggled, and what they\'d do differently.',
    category: 'Customer Support',
    readTime: '9 min read',
    date: 'March 20, 2026',
    featured: true,
  },
  {
    slug: 'how-to-build-business-case-ai-agents',
    title: 'How to Build the Business Case for AI Agents (Board-Ready Template)',
    excerpt: 'A plug-and-play framework for presenting AI agent ROI to your leadership team — including the numbers they\'ll actually ask about.',
    category: 'Strategy',
    readTime: '5 min read',
    date: 'March 12, 2026',
    featured: false,
  },
  {
    slug: 'ai-agents-vs-rpa',
    title: 'AI Agents vs. RPA: What\'s the Difference and Which Do You Need?',
    excerpt: 'RPA automates clicks. AI agents reason and adapt. Here\'s when to use each — and when to use both.',
    category: 'Education',
    readTime: '6 min read',
    date: 'March 5, 2026',
    featured: false,
  },
  {
    slug: 'ai-recruiting-bias',
    title: 'Does AI Recruiting Introduce Bias? The Honest Answer.',
    excerpt: 'We don\'t sugarcoat it: AI recruiting has bias risks. Here\'s how we identify them, measure them, and mitigate them in every deployment.',
    category: 'HR & Recruiting',
    readTime: '8 min read',
    date: 'February 26, 2026',
    featured: false,
  },
  {
    slug: '2026-ai-agent-playbook',
    title: 'The 2026 AI Agent Playbook for Business Leaders',
    excerpt: 'Which roles can be automated today, which should be augmented, and how to phase your deployment without disrupting your team.',
    category: 'Strategy',
    readTime: '12 min read',
    date: 'February 15, 2026',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  Sales: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Customer Support': 'bg-blue-50 text-blue-700 border-blue-200',
  Strategy: 'bg-violet-50 text-violet-700 border-violet-200',
  Education: 'bg-amber-50 text-amber-700 border-amber-200',
  'HR & Recruiting': 'bg-pink-50 text-pink-700 border-pink-200',
}

export default function BlogPage() {
  const featured = posts.filter(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Insights & Guides</h1>
          <p className="text-lg text-slate-600">
            Practical content on AI agents for the people deploying them.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featured.map((post) => (
            <div key={post.slug} className="group rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 h-32 flex items-end p-5">
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border bg-white text-indigo-700 border-indigo-200`}>
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm text-indigo-600 font-medium">
                  Read article
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All posts */}
        <h2 className="text-lg font-semibold text-slate-800 mb-5">All Articles</h2>
        <div className="divide-y divide-slate-100">
          {rest.map((post) => (
            <div key={post.slug} className="group py-5 flex gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${categoryColors[post.category] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
              <div className="text-right shrink-0 text-xs text-slate-400 space-y-1 pt-1">
                <div className="flex items-center gap-1 justify-end">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
                <div>{post.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-10 bg-indigo-50 rounded-2xl border border-indigo-200 p-6 text-center">
          <p className="text-indigo-800 font-semibold mb-1">More articles coming weekly</p>
          <p className="text-indigo-600 text-sm mb-4">
            Subscribe to get new case studies, guides, and AI agent ROI analyses straight to your inbox.
          </p>
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Subscribe for Updates
          </Link>
        </div>
      </div>
    </div>
  )
}
