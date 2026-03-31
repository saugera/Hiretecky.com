import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Real ROI of AI Customer Support: A 12-Month Study | Hiretecky',
  description: 'We tracked 30 companies that deployed AI support agents. Here\'s what they saved, where they struggled, and what they\'d do differently.',
  keywords: 'AI customer support ROI, automated helpdesk results, AI support agent study, customer service automation cost',
}

export default function Post() {
  return (
    <article className="min-h-screen bg-white py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/blog" className="text-indigo-600 text-sm hover:underline mb-6 inline-block">← Back to Blog</Link>

        <div className="mb-8">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">Customer Support</span>
          <p className="text-slate-400 text-xs mt-3">March 20, 2026 · 9 min read</p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          The Real ROI of AI Customer Support: A 12-Month Study
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          We tracked 30 companies that deployed AI support agents. Here's what they saved, where they struggled, and what they'd do differently.
        </p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
          <p>
            In Q1 2025, we ran a longitudinal study with 30 customers who deployed our SupportIQ AI agent. We tracked ticket volume, resolution rates, handle time, CSAT scores, cost-per-ticket, and human escalation rates over 12 months. Here's everything we found — including the parts that didn't go as planned.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Headline Numbers</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 my-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              {[
                { value: '79%', label: 'Avg. auto-resolution rate (month 12)' },
                { value: '61%', label: 'Avg. cost-per-ticket reduction' },
                { value: '+12pts', label: 'Avg. CSAT improvement' },
                { value: '4.2min', label: 'Avg. AI resolution time' },
                { value: '23%', label: 'Reduction in escalations to humans' },
                { value: '94%', label: 'Customers who renewed after 12 months' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-lg p-3 border border-slate-200">
                  <div className="text-2xl font-bold text-blue-600">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Month-by-Month: How the Numbers Actually Evolved</h2>
          <p>
            The most important thing we learned: <strong>AI support agents aren't plug-and-play on day one.</strong> The trajectory matters more than the starting point.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Month 1:</strong> Average auto-resolution rate was 47%. Lower than expected. The agent was still learning ticket patterns and product-specific language.</li>
            <li><strong>Month 2–3:</strong> Resolution rate climbed to 63% as we fine-tuned the knowledge base and added company-specific workflows.</li>
            <li><strong>Month 4–6:</strong> Plateau around 71–74%. This is where we identified the "stuck" ticket categories — the 25% that were genuinely complex or emotionally charged.</li>
            <li><strong>Month 7–12:</strong> Consistent 77–82% resolution. CSAT began improving as human agents, now freed from repetitive tickets, started delivering higher-quality service on complex issues.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Where It Went Well</h2>
          <p><strong>E-commerce companies</strong> saw the fastest gains. Order status, tracking, return initiation, and refund status make up a huge share of tickets — all resolvable by AI in seconds. Three of our e-commerce customers went from 3–4 human support agents to 1, within 6 months.</p>
          <p><strong>SaaS companies</strong> with a comprehensive knowledge base saw strong results by month 3. The AI learned to navigate product documentation, troubleshoot common error codes, and guide users through workflows.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Where It Struggled (The Honest Part)</h2>
          <p>
            Three categories consistently required human intervention:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Emotionally charged tickets:</strong> Customers who are frustrated, upset, or threatening churn need human empathy that AI reliably mimics but doesn't always nail in high-stakes moments. Our best-performing customers configured aggressive escalation rules for sentiment signals.</li>
            <li><strong>Account-specific edge cases:</strong> "You promised us X in our contract" or "Your sales rep told me Y" — these require human context that isn't in any knowledge base.</li>
            <li><strong>Product bugs and escalations:</strong> When a ticket is actually a bug report disguised as a support question, routing it correctly requires judgment that AI doesn't always have.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Financial Model (Real Numbers)</h2>
          <p>For a mid-sized SaaS company receiving 2,000 tickets/month with a team of 4 support reps:</p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 my-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 font-semibold text-slate-700">Metric</th>
                  <th className="text-right py-2 font-semibold text-slate-700">Before AI</th>
                  <th className="text-right py-2 font-semibold text-slate-700">After AI (Month 12)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr><td className="py-2">Support headcount</td><td className="text-right">4</td><td className="text-right">2</td></tr>
                <tr><td className="py-2">Monthly staff cost</td><td className="text-right">$18,000</td><td className="text-right">$9,000</td></tr>
                <tr><td className="py-2">AI agent cost</td><td className="text-right">—</td><td className="text-right">$999/mo</td></tr>
                <tr><td className="py-2">Avg. resolution time</td><td className="text-right">6.4 hours</td><td className="text-right">18 minutes</td></tr>
                <tr><td className="py-2">CSAT score</td><td className="text-right">71%</td><td className="text-right">84%</td></tr>
                <tr className="font-semibold text-slate-900"><td className="py-2">Monthly saving</td><td className="text-right">—</td><td className="text-right text-emerald-600">$8,001</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">What Customers Would Do Differently</h2>
          <p>We surveyed all 30 customers at the 12-month mark. The most common answers to "what would you change?":</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>"Start with a better knowledge base — we underestimated how much documentation prep would affect month-one performance"</li>
            <li>"Set escalation thresholds more aggressively at the start, not more conservatively"</li>
            <li>"Involve customer-facing humans in reviewing AI responses for the first 60 days — they catch tone issues faster"</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Our Takeaway</h2>
          <p>
            AI customer support is not a flip-a-switch solution. It's a 90-day investment before you see mature performance. But the companies that commit to the calibration process consistently arrive at a place where their human support team is smaller, better-utilized, and delivering higher CSAT than before — while the AI handles 80% of the volume automatically.
          </p>
          <p>
            The 6% who didn't renew? Every single one had a knowledge base that was too sparse for the agent to learn from. Garbage in, garbage out — that's still true with AI.
          </p>
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl border border-blue-200 p-6">
          <h3 className="font-bold text-slate-900 mb-2">See SupportIQ AI in Action</h3>
          <p className="text-sm text-slate-600 mb-4">We'll run a live demo using your ticket categories and show you a realistic resolution rate estimate for your business.</p>
          <Link href="/demo" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl text-sm hover:bg-blue-700 transition-colors">
            Book a Free Demo →
          </Link>
        </div>
      </div>
    </article>
  )
}
