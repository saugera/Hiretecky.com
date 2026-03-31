export interface Service {
  slug: string
  agentSlug: string
  title: string
  shortTitle: string
  tagline: string
  metaTitle: string
  metaDescription: string
  icon: string
  color: string
  colorClass: string
  borderClass: string
  overview: string
  whatWeDo: { title: string; body: string }[]
  deliverables: string[]
  technologies: string[]
  process: { step: string; title: string; body: string }[]
  faqs: { q: string; a: string }[]
  startingPrice: number
}

export const services: Service[] = [
  {
    slug: 'software-development',
    agentSlug: 'software-dev-agent',
    title: 'AI-Powered Software Development',
    shortTitle: 'Software Development',
    tagline: 'Ship faster with AI agents that code, review, and test alongside your team.',
    metaTitle: 'AI Software Development Services | Hiretecky',
    metaDescription: 'Deploy AI development agents that review code, write tests, fix bugs, and implement features — integrated directly into your GitHub or GitLab workflow.',
    icon: '⚙️',
    color: 'slate',
    colorClass: 'bg-slate-800',
    borderClass: 'border-slate-300',
    overview: 'Our AI software development agents act as senior engineers on your team — reviewing pull requests, catching bugs before they reach production, generating unit tests, and implementing features from your backlog. They integrate directly into GitHub, GitLab, and Jira so they work inside the tools your team already uses.',
    whatWeDo: [
      {
        title: 'Automated Code Review',
        body: 'Every pull request is reviewed for logic errors, security vulnerabilities, code style violations, and performance issues — with inline comments, just like a human reviewer.',
      },
      {
        title: 'Test Generation',
        body: 'AI agents generate unit, integration, and edge-case tests for new and existing code. Coverage gaps are identified and filled automatically.',
      },
      {
        title: 'Bug Detection & Fixes',
        body: 'Static analysis combined with AI reasoning catches bugs that linters miss. For common bug patterns, the agent proposes — or directly applies — fixes.',
      },
      {
        title: 'Feature Implementation',
        body: 'Assign a Jira or Linear ticket to the agent. It reads the spec, writes the code, and opens a PR for your team to review. Works best for well-defined, scoped features.',
      },
      {
        title: 'Documentation Generation',
        body: 'From inline docstrings to full API documentation and README updates — agents keep your docs in sync with your codebase automatically.',
      },
      {
        title: 'Security Scanning',
        body: 'Continuous vulnerability scanning across your codebase, with prioritized remediation suggestions mapped to CVE severity levels.',
      },
    ],
    deliverables: [
      'Automated PR review on every commit',
      'Test suite with target coverage threshold',
      'Security vulnerability report & remediation plan',
      'Documentation for all new and modified modules',
      'Weekly development velocity report',
      'Integration with GitHub / GitLab / Jira / Linear',
    ],
    technologies: ['GitHub', 'GitLab', 'Jira', 'Linear', 'Slack', 'VS Code', 'TypeScript', 'Python', 'Go', 'React', 'Node.js'],
    process: [
      { step: '01', title: 'Repo Access & Audit', body: 'We connect to your repositories and run an initial audit — codebase size, test coverage gaps, common bug patterns, and security posture.' },
      { step: '02', title: 'Workflow Configuration', body: 'We configure the agent to match your branching strategy, code style guide, review preferences, and escalation rules.' },
      { step: '03', title: 'Pilot on One Repo', body: 'We run a 2-week pilot on a single repository. You review every agent output before it merges. We tune based on your feedback.' },
      { step: '04', title: 'Full Deployment', body: 'Expand to your full codebase. Agent runs on every PR, every commit, continuously — with weekly performance reports.' },
    ],
    faqs: [
      { q: 'Can the agent work with any programming language?', a: 'DevPilot AI supports all major languages including TypeScript, JavaScript, Python, Go, Java, Ruby, and Rust. Language-specific review depth varies — TypeScript and Python have the strongest coverage.' },
      { q: 'Will it break our existing CI/CD pipeline?', a: 'No. The agent integrates as an additional check in your pipeline, not a replacement. It adds review comments and optional automated fixes — your existing tests, linters, and deployment gates are untouched.' },
      { q: 'Who has access to our codebase?', a: 'Only the agent itself, operating under read/write permissions you define. Your code is never used to train external models. We sign a custom NDA and DPA before any repo access is granted.' },
      { q: 'What if the agent writes bad code?', a: 'All agent-generated code comes as a pull request — nothing merges automatically without human approval. You review it exactly as you would any other PR.' },
    ],
    startingPrice: 499,
  },
  {
    slug: 'sales-lead-generation',
    agentSlug: 'sales-lead-gen-agent',
    title: 'AI Sales & Lead Generation',
    shortTitle: 'Sales & Lead Gen',
    tagline: 'Prospect, qualify, and book meetings automatically — around the clock.',
    metaTitle: 'AI Sales & Lead Generation Services | Hiretecky',
    metaDescription: 'Deploy an AI SDR agent that researches prospects, sends personalized outreach, follows up intelligently, and books meetings directly onto your calendar.',
    icon: '🎯',
    color: 'indigo',
    colorClass: 'bg-indigo-600',
    borderClass: 'border-indigo-300',
    overview: 'Our AI sales agents handle the entire top-of-funnel pipeline — from building targeted prospect lists to sending personalized outreach sequences to booking discovery calls. Your human reps focus on closing; the agent handles everything before the first meeting.',
    whatWeDo: [
      { title: 'Prospect Research & List Building', body: 'Identify and qualify ideal-fit prospects using firmographic signals, intent data, and your ICP criteria — at a scale no human team can match.' },
      { title: 'Personalized Multi-Channel Outreach', body: 'Every message is researched and written to the specific prospect — referencing their company news, job postings, or recent activity. Not mail merge.' },
      { title: 'Intelligent Follow-Up Sequences', body: 'The agent follows up consistently across email and LinkedIn with context-aware messaging — the 4th and 5th touchpoints that humans skip.' },
      { title: 'Meeting Booking & Calendar Sync', body: 'Qualified prospects are routed to Calendly or your calendar automatically. No back-and-forth scheduling.' },
      { title: 'CRM Data Hygiene', body: 'Every contact, note, and interaction is logged to your CRM in real time — zero data entry for your team.' },
      { title: 'Performance Analytics', body: 'Track reply rates, meeting conversion, cost-per-meeting, and pipeline contribution — all in a live dashboard.' },
    ],
    deliverables: [
      'Targeted prospect list (ICP-matched)',
      'Personalized outreach sequences (email + LinkedIn)',
      'Booked meetings on your calendar',
      'CRM sync for all contacts and activities',
      'Weekly pipeline & conversion report',
      'A/B test results on subject lines and messaging',
    ],
    technologies: ['HubSpot', 'Salesforce', 'Pipedrive', 'Apollo', 'LinkedIn', 'Gmail', 'Calendly', 'Outreach'],
    process: [
      { step: '01', title: 'ICP Definition', body: 'We map your ideal customer profile — industry, company size, role, pain points, and buying signals. This is the foundation everything else is built on.' },
      { step: '02', title: 'Sequence & Voice Setup', body: 'We build your outreach sequences and train the agent on your brand voice, product messaging, and objection handling.' },
      { step: '03', title: 'CRM & Tool Integration', body: 'Connect to your CRM, email provider, LinkedIn, and calendar. All data flows automatically with zero manual entry.' },
      { step: '04', title: 'Launch & Optimize', body: 'Go live with controlled volume. Review the first 50 contacts manually with us, then scale as reply rates hit target benchmarks.' },
    ],
    faqs: [
      { q: 'Will prospects know the outreach is automated?', a: 'You control disclosure settings. We recommend transparency — our agents can disclose their AI nature when asked, and research shows this has minimal negative impact on reply rates.' },
      { q: 'How many meetings can the agent book per month?', a: 'Varies by industry and ICP quality, but our customers typically see 20–60 booked meetings per month per agent on Professional plans.' },
      { q: 'Can it work with our existing SDR team?', a: 'Yes — the most common model is AI handling research, first-touch, and follow-up, while your human SDRs take all booked calls. This typically doubles each human rep\'s output.' },
    ],
    startingPrice: 499,
  },
  {
    slug: 'customer-support',
    agentSlug: 'customer-support-agent',
    title: 'AI Customer Support',
    shortTitle: 'Customer Support',
    tagline: 'Resolve 80% of tickets instantly, across every channel, 24/7.',
    metaTitle: 'AI Customer Support Services | Hiretecky',
    metaDescription: 'Deploy an AI support agent that resolves tier-1 and tier-2 tickets via chat, email, and phone — trained on your knowledge base, always on brand.',
    icon: '💬',
    color: 'blue',
    colorClass: 'bg-blue-600',
    borderClass: 'border-blue-300',
    overview: 'Our AI customer support agents are trained on your knowledge base, product documentation, and historical tickets to handle the majority of customer inquiries instantly — while escalating complex or high-stakes issues to your human team with full context.',
    whatWeDo: [
      { title: 'Omnichannel Ticket Resolution', body: 'Handle support requests via live chat, email, and phone with consistent quality and tone across every channel.' },
      { title: 'Knowledge Base Learning', body: 'The agent continuously learns from your documentation, past tickets, and product updates — improving accuracy over time.' },
      { title: 'Smart Human Escalation', body: 'Complex issues, frustrated customers, and edge cases are escalated to humans with a full summary — so reps never ask customers to repeat themselves.' },
      { title: 'Proactive Customer Health', body: 'Monitor usage patterns and trigger proactive outreach when customers show churn signals — before they submit a cancellation request.' },
      { title: 'CSAT & Sentiment Tracking', body: 'Every interaction is scored for sentiment and satisfaction. Dashboard alerts flag declining trends in real time.' },
      { title: 'Multi-Language Support', body: 'Serve customers in 50+ languages automatically, with no additional configuration.' },
    ],
    deliverables: [
      'Configured support agent across all channels',
      'Knowledge base import and training',
      'Escalation workflow setup',
      'CSAT and resolution rate dashboard',
      'Monthly performance and accuracy report',
      'Zendesk / Intercom / Freshdesk integration',
    ],
    technologies: ['Zendesk', 'Intercom', 'Freshdesk', 'Shopify', 'Stripe', 'Slack', 'Twilio'],
    process: [
      { step: '01', title: 'Knowledge Base Import', body: 'We ingest your documentation, FAQs, past tickets, and product guides. Quality of your knowledge base directly impacts agent accuracy.' },
      { step: '02', title: 'Channel Setup', body: 'Connect live chat, email, and phone. Configure escalation rules, brand voice, and response tone.' },
      { step: '03', title: 'Shadow Mode', body: 'The agent runs in shadow mode for 1 week — generating responses that your team reviews before sending. We tune based on corrections.' },
      { step: '04', title: 'Go Live & Scale', body: 'Enable autonomous responses. Monitor resolution rate and CSAT daily for the first 30 days, then move to weekly reviews.' },
    ],
    faqs: [
      { q: 'What resolution rate can we realistically expect?', a: 'For most B2C and SaaS businesses, 70–85% of tier-1 tickets are automatable. We\'ll give you a realistic estimate based on your ticket categories during onboarding.' },
      { q: 'How does the agent handle angry customers?', a: 'SupportIQ is trained on empathy-first patterns and escalates immediately when it detects high distress signals. It never argues with or dismisses customers.' },
      { q: 'Can it handle billing and account changes?', a: 'Yes — with appropriate integrations and permission scopes, the agent can issue refunds, update subscriptions, and make account changes up to limits you define.' },
    ],
    startingPrice: 299,
  },
  {
    slug: 'hr-recruiting',
    agentSlug: 'hr-recruiting-agent',
    title: 'AI HR & Recruiting',
    shortTitle: 'HR & Recruiting',
    tagline: 'From job post to ranked shortlist in 48 hours — automatically.',
    metaTitle: 'AI HR & Recruiting Services | Hiretecky',
    metaDescription: 'Automate resume screening, candidate outreach, and first-round assessments with an AI recruiting agent. Go from job post to shortlist in 48 hours.',
    icon: '👥',
    color: 'violet',
    colorClass: 'bg-violet-600',
    borderClass: 'border-violet-300',
    overview: 'Our AI recruiting agents automate the top-of-funnel hiring workflow — from job posting and resume screening to candidate outreach and first-round assessments — delivering a ranked shortlist to your hiring managers before they\'ve had time to read the first application.',
    whatWeDo: [
      { title: 'Multi-Platform Job Posting', body: 'Publish and manage job listings across LinkedIn, Indeed, and your ATS simultaneously from a single configuration.' },
      { title: 'Resume Screening & Scoring', body: 'Every application is evaluated against your job criteria consistently — no human fatigue, no unconscious bias from the 100th resume.' },
      { title: 'Candidate Outreach & Nurturing', body: 'Matched candidates receive personalized outreach. The agent handles follow-ups, questions, and scheduling coordination.' },
      { title: 'First-Round Assessments', body: 'Async video or text-based screening interviews are conducted automatically — saving hiring manager time for candidates who actually qualify.' },
      { title: 'Ranked Shortlists', body: 'Hiring managers receive a curated, ranked shortlist with AI-generated notes on each candidate — ready for second-round scheduling.' },
      { title: 'Diversity Monitoring', body: 'Every pipeline is monitored for demographic composition. Bias alerts and diversity reporting are included on all plans.' },
    ],
    deliverables: [
      'Job postings published to 10+ platforms',
      'Screened and ranked candidate shortlist',
      'First-round assessment summaries',
      'ATS integration and data sync',
      'Diversity & pipeline analytics report',
      'Offer letter templates and coordination',
    ],
    technologies: ['LinkedIn', 'Indeed', 'Greenhouse', 'Lever', 'Workday', 'Google Calendar', 'Zoom'],
    process: [
      { step: '01', title: 'Role Definition', body: 'We map the role requirements, must-haves vs. nice-to-haves, and define the scoring criteria the agent will use.' },
      { step: '02', title: 'ATS & Job Board Setup', body: 'Connect your ATS, configure job board integrations, and set up the candidate communication workflow.' },
      { step: '03', title: 'Pilot Role', body: 'Run a single open role through the full AI pipeline. Review the shortlist with us. We tune scoring and messaging before scaling.' },
      { step: '04', title: 'Scale Across All Roles', body: 'Expand to all open positions. Hiring managers receive shortlists — the pipeline runs automatically in the background.' },
    ],
    faqs: [
      { q: 'Does the AI introduce bias into hiring?', a: 'AI bias is real and we take it seriously. We use blind resume processing, criteria-only scoring, and diversity monitoring on every pipeline. See our bias transparency article for full details.' },
      { q: 'What ATS systems do you integrate with?', a: 'Greenhouse, Lever, Workday, and Jobvite natively. Custom ATS integrations are available on Enterprise plans.' },
      { q: 'Who makes the final hiring decision?', a: 'Always a human. The agent screens and ranks — your team interviews and decides. We never recommend fully automated hiring decisions.' },
    ],
    startingPrice: 399,
  },
  {
    slug: 'marketing-content',
    agentSlug: 'marketing-content-agent',
    title: 'AI Marketing & Content',
    shortTitle: 'Marketing & Content',
    tagline: 'Brief to published — content at the speed of your ideas.',
    metaTitle: 'AI Marketing & Content Services | Hiretecky',
    metaDescription: 'Deploy an AI marketing agent to automate your content calendar, SEO blog posts, email newsletters, and social media — always on brand.',
    icon: '✍️',
    color: 'pink',
    colorClass: 'bg-pink-600',
    borderClass: 'border-pink-300',
    overview: 'Our AI marketing agents turn your strategy into a full content engine — researching, writing, optimizing, and distributing content across every channel, consistently on brand, without the bottleneck of a growing content team.',
    whatWeDo: [
      { title: 'SEO Blog & Article Writing', body: 'Keyword-targeted, well-researched articles written to rank — with proper structure, internal linking, and meta optimization.' },
      { title: 'Email Newsletter Production', body: 'Weekly or monthly newsletters drafted, formatted, and scheduled — from your content brief to send-ready in hours.' },
      { title: 'Social Media Calendar', body: 'LinkedIn, Twitter/X, and Instagram content planned, written, and scheduled for the month — one brief, every channel covered.' },
      { title: 'Ad Copy & A/B Testing', body: 'Headlines, ad copy variants, and landing page content generated and tested at a volume no human copywriter can match.' },
      { title: 'Brand Voice Training', body: 'The agent learns your tone of voice, style guide, and audience from your existing content — every output sounds like you.' },
      { title: 'Performance Reporting', body: 'Track content performance (traffic, engagement, conversions) and automatically iterate on what\'s working.' },
    ],
    deliverables: [
      'Monthly content calendar',
      'SEO-optimized blog posts (quantity per plan)',
      'Email newsletter drafts',
      'Social media posts across all channels',
      'Monthly performance report',
      'Brand voice guide (developed during onboarding)',
    ],
    technologies: ['WordPress', 'HubSpot', 'Mailchimp', 'Buffer', 'Ahrefs', 'Canva', 'Webflow'],
    process: [
      { step: '01', title: 'Brand Voice Audit', body: 'We analyze your best-performing content to extract your tone, style, vocabulary, and audience preferences.' },
      { step: '02', title: 'Content Strategy Setup', body: 'Define content pillars, keyword targets, channel mix, and publishing cadence.' },
      { step: '03', title: 'First Month Trial', body: 'We produce the first month of content manually-reviewed before publishing. Your team rates every piece. We train the agent on your feedback.' },
      { step: '04', title: 'Autonomous Operation', body: 'The agent runs your content calendar independently — with a monthly editorial review to keep strategy aligned.' },
    ],
    faqs: [
      { q: 'Does the content need human editing?', a: 'Standard content (blog posts, social, newsletters) typically needs light editing. High-stakes or technical content we recommend a human review step before publishing.' },
      { q: 'Can it match our specific brand voice?', a: 'Yes. Most customers rate output brand consistency at 8/10 after the first month of training.' },
      { q: 'What about factual accuracy?', a: 'The agent is trained to cite sources and flag low-confidence claims for human review. We recommend a fact-check step for anything making specific data claims.' },
    ],
    startingPrice: 349,
  },
  {
    slug: 'data-analytics',
    agentSlug: 'data-analytics-agent',
    title: 'AI Data & Analytics',
    shortTitle: 'Data & Analytics',
    tagline: 'Ask your data anything. Get answers in seconds.',
    metaTitle: 'AI Data & Analytics Services | Hiretecky',
    metaDescription: 'Deploy an AI analytics agent that connects to your data sources, answers questions in plain English, and automates your reporting — no SQL required.',
    icon: '📈',
    color: 'cyan',
    colorClass: 'bg-cyan-600',
    borderClass: 'border-cyan-300',
    overview: 'Our AI analytics agents connect to all your data sources and deliver insights on demand. Ask questions in plain English, get automated dashboards, catch anomalies early, and replace your weekly reporting cycle with a live intelligence layer.',
    whatWeDo: [
      { title: 'Natural Language Data Queries', body: 'Ask "What was our churn rate last quarter by cohort?" and get an answer — no SQL, no data team required.' },
      { title: 'Automated Dashboard Generation', body: 'Define the KPIs you care about. The agent builds and maintains live dashboards that update automatically.' },
      { title: 'Anomaly Detection & Alerting', body: 'Get proactively alerted when metrics move outside expected ranges — before it becomes a problem.' },
      { title: 'Scheduled Report Delivery', body: 'Weekly exec summaries, monthly board packs, and daily ops reports delivered automatically to your inbox or Slack.' },
      { title: 'Cross-Source Correlation', body: 'Connect marketing spend, product usage, sales data, and support tickets in one place — find insights that live in the intersections.' },
      { title: 'Predictive Trend Analysis', body: 'Forecast revenue, churn, and growth based on historical patterns and leading indicators.' },
    ],
    deliverables: [
      'Connected data sources (up to plan limit)',
      'Executive KPI dashboard',
      'Automated weekly and monthly reports',
      'Anomaly detection alerts configured',
      'Natural language query interface',
      'Data source documentation',
    ],
    technologies: ['Snowflake', 'BigQuery', 'Looker', 'Tableau', 'Amplitude', 'Google Analytics', 'Stripe', 'HubSpot'],
    process: [
      { step: '01', title: 'Data Source Audit', body: 'We map all your data sources, assess quality, and identify the highest-value reporting gaps.' },
      { step: '02', title: 'KPI Definition', body: 'Work with your team to define the metrics that matter most — and the reports leadership actually reads.' },
      { step: '03', title: 'Connection & Testing', body: 'Connect all sources, build initial dashboards, test accuracy against your existing reports.' },
      { step: '04', title: 'Handoff & Training', body: 'We train your team on the natural language interface and set up automated delivery schedules.' },
    ],
    faqs: [
      { q: 'Do we need a data team to use this?', a: 'No. InsightPulse AI is designed specifically so non-technical stakeholders can query and understand their data. Your data team can still access raw outputs if needed.' },
      { q: 'How accurate is the natural language query?', a: 'For well-structured data sources with clear column naming, accuracy is typically 90%+. We do a calibration pass during onboarding to optimize for your specific data schema.' },
      { q: 'What if our data is messy?', a: 'We include a data quality assessment in onboarding and can help remediate common issues. Severely messy data may require a cleanup project before the agent can operate reliably.' },
    ],
    startingPrice: 399,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
