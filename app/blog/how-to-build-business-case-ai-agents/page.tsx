import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build the Business Case for AI Agents (Board-Ready Template) | Hiretecky',
  description: 'A plug-and-play framework for presenting AI agent ROI to your leadership team — including the numbers they\'ll actually ask about.',
  keywords: 'AI business case, ROI AI agents, justify AI investment, AI automation business case, board presentation AI',
}

export default function Post() {
  return (
    <article className="min-h-screen bg-white py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/blog" className="text-indigo-600 text-sm hover:underline mb-6 inline-block">← Back to Blog</Link>
        <div className="mb-8">
          <span className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-semibold rounded-full border border-violet-200">Strategy</span>
          <p className="text-slate-400 text-xs mt-3">March 12, 2026 · 5 min read</p>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          How to Build the Business Case for AI Agents (Board-Ready Template)
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          The exact framework to justify AI agent investment to your leadership team — including the questions they'll ask and the numbers that close the case.
        </p>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            You know an AI agent makes sense for your team. Your CFO wants a spreadsheet. Your CEO wants a one-liner. Your board wants a risk assessment. Here's how to give them all three.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Step 1: Define the Specific Role You're Automating</h2>
          <p>
            The biggest mistake in AI business cases is staying abstract. Don't say "we want to automate customer support." Say "we want to automate tier-1 ticket resolution for order status, password resets, and billing questions, which currently represents 68% of our ticket volume and is handled by 3 FTEs."
          </p>
          <p>
            Specificity wins the room. It shows you've done the analysis and aren't just chasing a trend.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Step 2: Build the True Cost Baseline</h2>
          <p>Most leaders underestimate what a role actually costs. Use this formula:</p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 my-4 font-mono text-sm">
            <p>True Role Cost = Base Salary</p>
            <p>+ Benefits (30–40% of base)</p>
            <p>+ Employer payroll taxes (~8%)</p>
            <p>+ Recruiting / onboarding (~$5–15k one-time)</p>
            <p>+ Management overhead (15–20% of base)</p>
            <p>+ Tools / software / seat licenses</p>
            <p className="mt-2 font-bold text-slate-900">= True fully-loaded cost</p>
          </div>
          <p>
            For a $60k/year support rep, the true cost is typically <strong>$85–95k/year</strong> when fully loaded. Run this math for your leadership team — it reframes the ROI completely.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Step 3: Model Three Scenarios</h2>
          <p>Never present one number. Present three:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Conservative (60% automation):</strong> The agent handles 60% of work, you reduce headcount by 1 FTE after 6 months</li>
            <li><strong>Base case (75% automation):</strong> Industry average based on comparable deployments</li>
            <li><strong>Optimistic (85%+):</strong> What best-in-class looks like after 90 days of calibration</li>
          </ul>
          <p>Boards respect range-based projections. Single-point estimates get challenged. Ranges show intellectual honesty.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Step 4: Address the Questions They'll Actually Ask</h2>
          <p>In our experience presenting with 50+ customers, four questions come up every time:</p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>"What's the downside if it doesn't work?"</strong> → Answer: month-to-month contract, 14-day performance guarantee, clear exit. You're not locked in.</li>
            <li><strong>"How do customers react to AI?"</strong> → Answer: CSAT goes up in most deployments because resolution is faster. Share the stat that 73% of customers prefer instant AI resolution over waiting hours for a human.</li>
            <li><strong>"What about data security?"</strong> → Answer: SOC 2 compliant, data never used for model training, enterprise DPA in place. Have the trust page ready.</li>
            <li><strong>"How long until we see results?"</strong> → Answer: First measurable results in 30 days, target performance by 90 days. Month-by-month milestones.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Step 5: The One-Page Summary (Template)</h2>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 my-4 text-sm">
            <p className="font-bold text-slate-900 mb-3">AI Agent Business Case — [Role] Automation</p>
            <p><strong>Current state:</strong> [X] FTEs in [role], costing $[Y]/year fully loaded, handling [Z] tasks/month</p>
            <p className="mt-2"><strong>Proposed change:</strong> Deploy [Agent Name] to automate [specific task categories]</p>
            <p className="mt-2"><strong>Investment:</strong> $[monthly cost]/month (month-to-month, cancel anytime)</p>
            <p className="mt-2"><strong>Projected savings:</strong> $[conservative]–$[optimistic]/year</p>
            <p className="mt-2"><strong>Payback period:</strong> [X] months (conservative scenario)</p>
            <p className="mt-2"><strong>Risk mitigation:</strong> 14-day performance guarantee; no long-term contract</p>
            <p className="mt-2"><strong>Success metrics:</strong> [automation rate target], [CSAT target], [cost-per-task target]</p>
            <p className="mt-2"><strong>Timeline:</strong> Live in 48 hours, full performance by day 90</p>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The One Line That Closes It</h2>
          <p>
            If you need a single sentence that lands in any boardroom: <em>"We're proposing a 30-day pilot with no long-term commitment, where we'll know by day 14 whether it's working — with a money-back guarantee if it doesn't."</em>
          </p>
          <p>That framing removes the risk objection entirely. It's hard to say no to a guaranteed trial.</p>
        </div>
        <div className="mt-12 bg-violet-50 rounded-2xl border border-violet-200 p-6">
          <h3 className="font-bold text-slate-900 mb-2">Need a Custom ROI Analysis?</h3>
          <p className="text-sm text-slate-600 mb-4">Book a demo and we'll model your specific numbers — something you can take directly to your leadership team.</p>
          <Link href="/demo" className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-white font-semibold rounded-xl text-sm hover:bg-violet-700 transition-colors">
            Get My Custom ROI Analysis →
          </Link>
        </div>
      </div>
    </article>
  )
}
