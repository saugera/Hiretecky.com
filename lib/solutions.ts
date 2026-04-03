export interface Solution {
  slug: string
  agentSlug: string
  title: string
  metaTitle: string
  metaDescription: string
  headline: string
  subheadline: string
  keywords: string[]
  benefits: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
  color: string
}

export const solutions: Solution[] = [
  {
    slug: 'ai-sales-agents',
    agentSlug: 'sales-lead-gen-agent',
    title: 'AI Sales Agents',
    metaTitle: 'AI Sales Agents for B2B — Hire an AI SDR | Hiretecky',
    metaDescription: 'Replace or scale your SDR team with an AI sales agent. Automated prospecting, personalized outreach, and meeting booking — 24/7, at a fraction of the cost.',
    headline: 'Hire an AI SDR That Never Misses a Follow-Up',
    subheadline: 'AI sales agents that prospect, personalize outreach, and book meetings — autonomously, around the clock.',
    keywords: ['AI SDR', 'AI sales agent', 'automated lead generation', 'AI outbound sales', 'sales automation tool'],
    benefits: [
      { title: 'Always-on prospecting', body: 'Your AI SDR works nights, weekends, and holidays — identifying and contacting high-intent leads while your human reps sleep.' },
      { title: 'Personalized at scale', body: 'Every outreach message is researched and personalized using the prospect\'s company data, role, and recent activity — not mail merge.' },
      { title: 'CRM-native', body: 'Syncs directly with HubSpot, Salesforce, or Pipedrive. Every contact, note, and activity logged automatically.' },
      { title: 'Measurable ROI', body: 'Track cost-per-meeting, reply rates, and pipeline contribution — all in your dashboard. Optimize in real time.' },
    ],
    faqs: [
      { q: 'Can an AI agent replace my entire SDR team?', a: 'For top-of-funnel outbound activities — research, prospecting, first-touch outreach, and meeting booking — yes. Many companies use AI agents for the repetitive SDR work and keep humans for relationship-building and closing.' },
      { q: 'Will prospects know they\'re talking to an AI?', a: 'You control the disclosure settings. We recommend transparent AI disclosure for most workflows, and our agents are configurable to disclose their AI nature at any point.' },
      { q: 'How does it integrate with my existing CRM?', a: 'LeadForge AI connects natively to HubSpot, Salesforce, Pipedrive, and Apollo via API. Setup takes less than 30 minutes.' },
    ],
    color: 'indigo',
  },
  {
    slug: 'ai-customer-support',
    agentSlug: 'customer-support-agent',
    title: 'AI Customer Support',
    metaTitle: 'AI Customer Support Agent — Automate Tickets 24/7 | Hiretecky',
    metaDescription: 'Deploy an AI customer support agent that resolves 80%+ of tickets instantly. Works across chat, email, and phone — always on, always consistent.',
    headline: 'Resolve 80% of Support Tickets Instantly with AI',
    subheadline: 'An AI support agent that handles tier-1 and tier-2 tickets with human-level empathy — 24/7, across every channel.',
    keywords: ['AI customer support', 'automated helpdesk', 'AI support agent', 'customer service automation', 'AI ticketing'],
    benefits: [
      { title: 'Instant resolution', body: 'Most common support issues — order status, password resets, billing questions, product how-tos — are resolved in seconds, not hours.' },
      { title: 'Learns your product', body: 'Train the agent on your knowledge base, documentation, and past ticket history. It improves continuously as your product evolves.' },
      { title: 'Smart escalation', body: 'The agent knows when to hand off to a human — and provides the human with full context so they don\'t have to ask the customer to repeat themselves.' },
      { title: 'Every channel covered', body: 'Live chat, email, and phone — the same agent operates consistently across all channels with the same tone and accuracy.' },
    ],
    faqs: [
      { q: 'What percentage of tickets can really be automated?', a: 'For most B2C and SaaS businesses, 70–85% of tier-1 tickets are automatable. We\'ll give you a realistic estimate based on your ticket categories during the demo.' },
      { q: 'How does the agent handle angry or emotional customers?', a: 'SupportIQ is trained on empathy-first communication patterns and escalates to a human immediately when it detects high customer distress signals.' },
      { q: 'Can it handle multiple languages?', a: 'Yes — SupportIQ supports 50+ languages natively. It detects the customer\'s language and responds in kind.' },
    ],
    color: 'blue',
  },
  {
    slug: 'ai-recruiting-software',
    agentSlug: 'hr-recruiting-agent',
    title: 'AI Recruiting Software',
    metaTitle: 'AI Recruiting Agent — Screen & Shortlist Candidates Faster | Hiretecky',
    metaDescription: 'Automate resume screening, candidate outreach, and first-round interviews with an AI recruiting agent. Go from job post to shortlist in 48 hours.',
    headline: 'From Job Post to Shortlist in 48 Hours with AI',
    subheadline: 'An AI recruiting agent that screens resumes, reaches out to candidates, and delivers a ranked shortlist — before your human recruiters even review applications.',
    keywords: ['AI recruiting software', 'AI applicant tracking', 'automated recruiting', 'AI resume screening', 'AI HR agent'],
    benefits: [
      { title: 'Resume screening at scale', body: 'Screen hundreds of applications in minutes using your exact job criteria. Every candidate gets a fair, consistent evaluation.' },
      { title: 'Automated outreach', body: 'The agent contacts matched candidates across LinkedIn, Indeed, and email — personalizing messages based on their profile.' },
      { title: 'First-round assessments', body: 'Conduct async video or text-based screening interviews before any human time is spent on unqualified candidates.' },
      { title: 'Ranked shortlists', body: 'Hiring managers receive a ranked list with AI-generated notes — ready to schedule second rounds immediately.' },
    ],
    faqs: [
      { q: 'Does AI recruiting introduce hiring bias?', a: 'Our agent includes a bias monitoring layer that flags potential discriminatory patterns and ensures evaluation criteria are role-relevant. We provide diversity reporting for all hiring pipelines.' },
      { q: 'Which ATS systems does it integrate with?', a: 'TalentMatch AI integrates with Greenhouse, Lever, Workday, and Jobvite. Custom ATS integrations available on Enterprise plans.' },
      { q: 'Can candidates tell they\'re being screened by AI?', a: 'We recommend and support full transparency. Our recommended disclosure approach has been shown to increase candidate completion rates by 23%.' },
    ],
    color: 'violet',
  },
  {
    slug: 'ai-marketing-automation',
    agentSlug: 'marketing-content-agent',
    title: 'AI Marketing Automation',
    metaTitle: 'AI Marketing & Content Agent — Content at Scale | Hiretecky',
    metaDescription: 'Automate your content calendar, SEO blog posts, email newsletters, and social media with an AI marketing agent. Brief to published, on brand, every time.',
    headline: 'Turn Your Content Calendar on Autopilot with AI',
    subheadline: 'An AI marketing agent that writes, optimizes, schedules, and distributes content — consistently on brand, without the bottleneck.',
    keywords: ['AI content marketing', 'AI marketing agent', 'content automation', 'AI copywriting tool', 'AI social media manager'],
    benefits: [
      { title: 'Brief to published in hours', body: 'Feed the agent a topic or keyword target. It researches, writes, optimizes for SEO, and schedules the post — no human editor required for tier-1 content.' },
      { title: 'Brand voice trained', body: 'The agent learns your tone of voice, style guide, and audience from your existing content. Every output sounds like you.' },
      { title: 'Multi-channel distribution', body: 'Blog posts, LinkedIn articles, email newsletters, Twitter/X threads — one brief, distributed everywhere, formatted for each channel.' },
      { title: 'SEO-first output', body: 'Every piece is written with target keywords, semantic structure, meta descriptions, and internal linking — ready to rank.' },
    ],
    faqs: [
      { q: 'Does the content require human editing?', a: 'Tier-1 content (standard blog posts, social captions, newsletters) typically needs minimal editing. High-stakes or highly technical content we recommend a human review step before publishing.' },
      { q: 'Can it match our specific brand voice?', a: 'Yes. During onboarding, we train the agent on 10–20 examples of your best-performing content. Most customers rate output brand consistency at 8/10 or higher after training.' },
      { q: 'What CMS platforms does it publish to?', a: 'ContentFlow AI publishes directly to WordPress, HubSpot CMS, Webflow, and Ghost. Other platforms via Zapier or webhook.' },
    ],
    color: 'pink',
  },
  {
    slug: 'ai-healthcare-agents',
    agentSlug: 'support-iq',
    title: 'AI Agents for Healthcare',
    metaTitle: 'AI Agents for Healthcare — Admin, Compliance & Patient Ops | Hiretecky',
    metaDescription: 'Deploy HIPAA-aware AI agents that automate healthcare administrative workflows, compliance tracking, prior authorizations, and patient communications — without replacing clinical staff.',
    headline: 'Cut Healthcare Admin Burden by 60% with AI Agents',
    subheadline: 'HIPAA-aware AI agents that handle prior auths, scheduling, compliance tracking, and patient communications — so your clinical staff can focus on care.',
    keywords: ['AI healthcare agents', 'healthcare administrative automation', 'HIPAA AI', 'prior authorization automation', 'healthcare compliance AI', 'patient communication AI'],
    benefits: [
      { title: 'Prior authorization at machine speed', body: 'AI agents pull clinical documentation, populate payer forms, submit requests, and track status — reducing the average prior auth cycle from 7 days to under 24 hours.' },
      { title: 'HIPAA-compliant by architecture', body: 'All agents run in isolated, encrypted environments with BAA support, audit logging, and zero data retention beyond the session — built for regulated healthcare environments.' },
      { title: 'Patient communication automation', body: 'Appointment reminders, no-show follow-ups, post-visit surveys, and care gap outreach — delivered across SMS, email, and patient portal, fully compliant.' },
      { title: 'Compliance & credentialing support', body: 'Track provider credential renewals, payer enrollment deadlines, and regulatory filing requirements — with proactive alerts before anything lapses.' },
    ],
    faqs: [
      { q: 'Are your AI agents HIPAA compliant?', a: 'Yes. We sign a Business Associate Agreement (BAA) with every healthcare customer. Our infrastructure uses isolated tenant environments, AES-256 encryption at rest, TLS 1.3 in transit, and full audit logging. No PHI is used for model training.' },
      { q: 'Do the agents replace clinical staff?', a: 'No. Our agents exclusively handle administrative workflows — scheduling, authorizations, billing queries, compliance tracking, and patient communications. Clinical decision-making remains entirely with your licensed staff.' },
      { q: 'Which EHR systems can you integrate with?', a: 'We support HL7 FHIR-compliant integrations with Epic, Cerner, Athenahealth, and eClinicalWorks. Custom EHR integrations are scoped during the enterprise onboarding process.' },
      { q: 'How long does implementation take for a health system?', a: 'Typical enterprise health system deployments take 4–6 weeks including HIPAA controls review, EHR integration, workflow configuration, and staff training. Smaller practices can go live in 1–2 weeks.' },
    ],
    color: 'blue',
  },
]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}
