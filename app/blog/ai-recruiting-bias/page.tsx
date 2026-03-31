import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Does AI Recruiting Introduce Bias? The Honest Answer. | Hiretecky',
  description: 'We don\'t sugarcoat it: AI recruiting has real bias risks. Here\'s how we identify them, measure them, and mitigate them in every deployment.',
  keywords: 'AI recruiting bias, AI hiring bias, algorithmic bias recruiting, fair AI hiring, diversity AI recruitment',
}

export default function Post() {
  return (
    <article className="min-h-screen bg-white py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/blog" className="text-indigo-600 text-sm hover:underline mb-6 inline-block">← Back to Blog</Link>
        <div className="mb-8">
          <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-semibold rounded-full border border-pink-200">HR & Recruiting</span>
          <p className="text-slate-400 text-xs mt-3">February 26, 2026 · 8 min read</p>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          Does AI Recruiting Introduce Bias? The Honest Answer.
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          We don't sugarcoat it: AI recruiting has real bias risks. Here's how we identify them, measure them, and mitigate them — and where humans must stay in the loop.
        </p>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            This is the question we get asked more than any other about TalentMatch AI. And it's the right question to ask. We're going to give you the most honest answer we can, including the parts that are uncomfortable.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Yes, AI Recruiting Can Introduce Bias. Here's How.</h2>
          <p>
            AI hiring systems learn from historical data. If that historical data reflects biased hiring decisions — and most companies' hiring history does, because human hiring is biased — the AI can learn and perpetuate those patterns.
          </p>
          <p>The most common bias mechanisms in AI recruiting:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Training data bias:</strong> If your top performers skew toward a particular demographic (e.g., graduates from elite universities, or candidates from specific companies), an AI trained on that data will favor similar profiles — even when those correlations aren't causally linked to job performance.</li>
            <li><strong>Proxy variable bias:</strong> AI can discriminate via proxies — zip codes, school names, or hobby keywords that correlate with protected characteristics, even when those features are never explicitly mentioned.</li>
            <li><strong>Language bias:</strong> Resumes and cover letters written in certain styles, or with certain cultural fluency markers, may score higher — disadvantaging non-native speakers or candidates from different cultural backgrounds.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Amazon Problem (And What It Teaches Us)</h2>
          <p>
            In 2018, Amazon scrapped an AI recruiting tool after discovering it was systematically downgrading resumes that contained the word "women's" (as in "women's chess club") and penalizing graduates of all-women's colleges. The system had learned from 10 years of hiring data, which reflected the tech industry's historical gender imbalance.
          </p>
          <p>
            This is the canonical case study for AI recruiting bias. It happened because no one was monitoring what the model actually learned — and because the training data encoded decades of human bias.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">How We Address It (What We Actually Do)</h2>
          <p>We're not going to tell you we've "solved" AI bias — that's not honest. What we can tell you is the specific controls we have in place:</p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Criteria-only scoring:</strong> TalentMatch AI evaluates candidates on explicitly defined role criteria only — skills, experience, certifications, demonstrated outcomes. It does not score candidates on any demographic proxy variables.
            </li>
            <li>
              <strong>Blind resume processing:</strong> By default, names, addresses, graduation years, and profile photos are stripped before scoring. You can see all candidate data — but the scoring model doesn't use it.
            </li>
            <li>
              <strong>Diversity monitoring dashboard:</strong> Every shortlist includes a demographic composition report. If your shortlist skews heavily in any direction, you're shown that data before any decisions are made.
            </li>
            <li>
              <strong>Human-in-the-loop for final selection:</strong> TalentMatch AI produces ranked shortlists and assessment summaries. The hiring decision always stays with a human. The agent is a screener, not a decision-maker.
            </li>
            <li>
              <strong>Quarterly bias audits:</strong> We run statistical parity checks on outcomes for customers with sufficient sample sizes. If we detect patterns, we flag them.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Where Humans Must Stay in the Loop</h2>
          <p>There are three points in the recruiting process where we strongly advise against full automation:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Final hiring decisions:</strong> An AI can rank candidates. A human should make the call.</li>
            <li><strong>Criteria definition:</strong> If a human defines biased criteria ("must come from a top-10 university"), the AI will faithfully execute a biased search. Garbage criteria in, biased results out.</li>
            <li><strong>Edge-case review:</strong> When a candidate scores significantly different from a human reviewer's intuition, that disagreement is worth examining — not just deferring to the AI.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Honest Comparison: AI vs. Human Bias</h2>
          <p>
            Here's the part that often gets left out of the bias debate: <strong>human recruiting is also deeply biased.</strong> Studies consistently show that identical resumes receive different callback rates based on name alone. Humans favor candidates who are physically similar to themselves, who went to the same schools, who share hobbies.
          </p>
          <p>
            AI bias is measurable, auditable, and correctable. Human bias is largely invisible, inconsistent, and never gets audited. That doesn't excuse AI bias — but it does reframe the comparison. The goal isn't a bias-free system (which doesn't exist). It's a system where bias is visible and controllable.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Our Bottom Line</h2>
          <p>
            Use AI recruiting for what it's good at: processing volume, applying criteria consistently, and giving every candidate a fair first read. Use humans for what they're good at: judgment, relationship, and final decisions. Build in the monitoring. Stay skeptical of any vendor who says their system is "unbiased" — that's a red flag.
          </p>
        </div>
        <div className="mt-12 bg-pink-50 rounded-2xl border border-pink-200 p-6">
          <h3 className="font-bold text-slate-900 mb-2">Want to See Our Bias Controls in Action?</h3>
          <p className="text-sm text-slate-600 mb-4">We'll walk you through the diversity dashboard and blind scoring features during a live demo.</p>
          <Link href="/demo" className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-600 text-white font-semibold rounded-xl text-sm hover:bg-pink-700 transition-colors">
            Book a Demo →
          </Link>
        </div>
      </div>
    </article>
  )
}
