export interface CaseStudy {
  slug: string
  client: string
  industry: string
  industryColor: string
  title: string
  tagline: string
  metaTitle: string
  metaDescription: string
  published: string
  stats: { label: string; value: string; note?: string }[]
  problem: {
    headline: string
    body: string[]
    symptoms: string[]
  }
  approach: {
    headline: string
    body: string[]
    phases: { title: string; body: string }[]
  }
  roi: {
    headline: string
    body: string[]
    outcomes: { metric: string; before: string; after: string; delta: string }[]
  }
  quote?: { text: string; author: string; title: string }
  agents: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'regional-health-system-prior-auth',
    client: 'Regional Health System',
    industry: 'Healthcare',
    industryColor: 'blue',
    title: 'How a 12-Hospital Health System Reduced Prior Authorization Time by 74%',
    tagline: 'From 7-day average approval cycles to under 48 hours — without adding headcount.',
    metaTitle: 'Case Study: AI Prior Authorization Automation in Healthcare | Hiretecky',
    metaDescription: 'A 12-hospital health system deployed Hiretecky AI agents to automate prior authorization workflows, reducing average approval time from 7 days to 48 hours and saving $2.1M annually.',
    published: 'March 2026',
    stats: [
      { label: 'Approval Time Reduced', value: '74%', note: '7 days → 48 hours average' },
      { label: 'Annual Cost Savings', value: '$2.1M', note: 'Staffing + administrative overhead' },
      { label: 'Authorization Volume', value: '3,400/mo', note: 'Processed autonomously' },
      { label: 'Denial Rate', value: '−31%', note: 'Improved documentation quality' },
    ],
    problem: {
      headline: 'A 7-day prior authorization backlog was delaying patient care and burning staff',
      body: [
        'The health system\'s revenue cycle team was processing over 3,400 prior authorization requests per month across 12 facilities. Each request required a clinical documentation specialist to manually pull records from Epic, cross-reference payer criteria, complete payer portal forms, and track status — a process taking an average of 2.4 hours per authorization.',
        'Authorization delays were creating downstream problems: surgical cases were being postponed, patients were receiving care before authorization was confirmed (creating denial risk), and the revenue cycle team was operating at 140% capacity with a 6-person backlog queue.',
        'The organization had attempted to address this with additional FTE hiring, but the labor market for experienced revenue cycle specialists was tight, and new staff required 90 days of ramp time before reaching full productivity.',
      ],
      symptoms: [
        '7-day average time-to-authorization across all payer types',
        'Clinical staff spending 30% of time on administrative documentation',
        '6-week backlog at peak volume periods',
        '$840,000 in annual staffing cost for a function that was primarily form-filling',
        '23% denial rate, with documentation gaps as the leading cause',
      ],
    },
    approach: {
      headline: 'A FHIR-native AI agent that handles the entire authorization workflow autonomously',
      body: [
        'Hiretecky deployed a prior authorization AI agent integrated directly with the health system\'s Epic instance via SMART on FHIR Backend Services. The agent uses the minimum-necessary principle for data access — pulling only the specific clinical resources required for each authorization type.',
        'Before any patient data was accessed, Hiretecky signed a HIPAA Business Associate Agreement and completed the health system\'s 40-question vendor security assessment. Infrastructure operates in an isolated tenant environment with full audit logging of every data access event.',
      ],
      phases: [
        {
          title: 'Week 1–2: Security Review & FHIR Integration',
          body: 'Completed BAA, security questionnaire, and penetration test review. Configured SMART on FHIR Backend Services authentication with Epic sandbox. Validated scope minimization — agent requests only Condition, MedicationRequest, Coverage, and DocumentReference resources.',
        },
        {
          title: 'Week 3–4: Payer Criteria Mapping',
          body: 'Mapped the top 14 payer coverage criteria databases for the most common procedure codes in the health system\'s case mix. Built the criteria-matching logic and configured escalation rules for edge cases requiring clinical judgment.',
        },
        {
          title: 'Week 5–6: Shadow Mode Pilot',
          body: 'Agent ran in shadow mode for two weeks — generating authorization submissions that the team reviewed before sending. Accuracy was measured against expert reviewer decisions. Tuned escalation thresholds based on disagreement cases.',
        },
        {
          title: 'Week 7+: Production Deployment & Scale',
          body: 'Enabled autonomous submission for the top 8 procedure code categories representing 72% of volume. Remaining cases route to human review with AI-generated documentation summaries. Volume expanded over 90 days to full case mix coverage.',
        },
      ],
    },
    roi: {
      headline: 'From cost center to competitive advantage in 90 days',
      body: [
        'The health system recovered the full implementation cost within 6 weeks of production deployment. The ongoing economics show a 4.2x ROI on the annual agent cost versus the staffing cost it replaced.',
        'Beyond the cost savings, faster authorizations enabled the surgical scheduling team to reduce their lead time buffer — allowing the organization to serve more patients without adding OR capacity.',
      ],
      outcomes: [
        { metric: 'Average authorization time', before: '7.2 days', after: '46 hours', delta: '−74%' },
        { metric: 'Manual hours per authorization', before: '2.4 hours', after: '0.3 hours (review only)', delta: '−87%' },
        { metric: 'Monthly denial rate', before: '23%', after: '16%', delta: '−31%' },
        { metric: 'Annual staffing cost (this function)', before: '$840,000', after: '$198,000', delta: '−76%' },
        { metric: 'Revenue at risk (authorization delays)', before: '$1.4M exposure', after: '$290K exposure', delta: '−79%' },
        { metric: 'Time to implement', before: 'N/A', after: '6 weeks to production', delta: '' },
      ],
    },
    quote: {
      text: 'We were skeptical that an AI could match the accuracy of our experienced specialists. After 90 days in production, the agent is outperforming our manual process on both speed and denial rate. The HIPAA controls were the first thing our compliance team reviewed — they signed off in two weeks.',
      author: 'VP of Revenue Cycle',
      title: '12-Hospital Regional Health System',
    },
    agents: ['customer-support-agent', 'hr-recruiting-agent'],
  },
  {
    slug: 'b2b-saas-sdr-automation',
    client: 'B2B SaaS Company (Series B)',
    industry: 'SaaS / Technology',
    industryColor: 'indigo',
    title: 'How a Series B SaaS Company Booked 3x More Enterprise Demos Without Adding SDR Headcount',
    tagline: 'LeadForge AI replaced 4 SDR seats and outperformed them within 60 days of deployment.',
    metaTitle: 'Case Study: AI SDR Automation for B2B SaaS | Hiretecky',
    metaDescription: 'A Series B SaaS company deployed Hiretecky\'s LeadForge AI to replace 4 SDR seats — booking 3x more enterprise demos at 28% of the headcount cost within 60 days.',
    published: 'February 2026',
    stats: [
      { label: 'Demo Volume Increase', value: '3.1x', note: 'vs. 4-person SDR team' },
      { label: 'Annual Cost Reduction', value: '$312k', note: 'vs. 4 SDR salaries + benefits' },
      { label: 'Booked Meetings / Month', value: '94', note: 'Up from 31 with human team' },
      { label: 'Outreach Personalization', value: '100%', note: 'Every message research-backed' },
    ],
    problem: {
      headline: 'Four SDRs producing 31 booked demos per month at $384k in annual salary',
      body: [
        'The company had built a standard outbound motion: four SDRs working LinkedIn and cold email, producing roughly 31 booked discovery calls per month. At $96k average fully-loaded cost per SDR, that represented $384k annually for a function that was almost entirely research and message-sending.',
        'The bigger problem was quality variance. Two of the four SDRs were top performers. The other two were hitting quota inconsistently. The pipeline was lumpy — two strong months, one weak one. The VP of Sales wanted more predictability.',
        'Hiring a fifth SDR would not solve the consistency problem. And with Series B pressure to improve unit economics before the next round, adding headcount for a function that was mostly automatable was difficult to justify.',
      ],
      symptoms: [
        '31 booked demos/month from a 4-person team at $384k annual cost',
        'High variance in output — top 2 reps produced 70% of meetings',
        '4–5 hours/day per SDR on research and first-draft personalization',
        'CRM data quality poor — inconsistent logging across reps',
        'Follow-up sequences stopping at touch 2 or 3 despite evidence that touches 4–6 convert',
      ],
    },
    approach: {
      headline: 'Replace the research-and-outreach loop entirely; keep humans for discovery calls',
      body: [
        'Hiretecky deployed LeadForge AI integrated with the company\'s HubSpot CRM, LinkedIn, and Gmail. The agent handles the entire pre-meeting workflow: ICP-matched prospect research, personalized first-touch messages, multi-touch follow-up sequences, and meeting booking via Calendly — with all activity logged to HubSpot automatically.',
        'The two top-performing human SDRs shifted to a "closer SDR" model — taking all booked calls and focusing on qualification rather than top-of-funnel generation. The other two SDR seats were not backfilled when those employees moved to other roles.',
      ],
      phases: [
        {
          title: 'Week 1: ICP Definition & CRM Integration',
          body: 'Mapped the ideal customer profile — company size, tech stack signals, job posting patterns, funding stage. Connected HubSpot, LinkedIn Sales Navigator, and Gmail. Configured CRM sync to log every touch automatically.',
        },
        {
          title: 'Week 2: Sequence Build & Voice Training',
          body: 'Built 6-touch sequences for three ICP segments. Trained the agent on the company\'s brand voice using the top 20 highest-reply emails from the best-performing SDR.',
        },
        {
          title: 'Week 3: Supervised Launch',
          body: 'First 200 outreach messages reviewed by the VP of Sales before sending. Adjusted personalization depth and subject line approach based on early reply patterns.',
        },
        {
          title: 'Week 4+: Autonomous Operation & Scale',
          body: 'Enabled autonomous outreach at 150 net-new contacts per week. Expanded to 300/week at Day 45 as reply rates stabilized above target.',
        },
      ],
    },
    roi: {
      headline: '94 booked demos per month at $72k annual agent cost — vs. $384k for the human team',
      body: [
        'By Day 60, LeadForge AI was booking 94 demos per month — three times the output of the 4-person SDR team. The cost of the agent at Professional plan pricing is $72k annually, versus $384k for the SDR headcount it replaced.',
        'The quality of booked meetings also improved. Because the agent researches every prospect and personalizes every message, the no-show rate dropped from 28% to 14% — meetings were better qualified before they hit the calendar.',
      ],
      outcomes: [
        { metric: 'Booked demos per month', before: '31', after: '94', delta: '+203%' },
        { metric: 'Annual cost (this function)', before: '$384,000', after: '$72,000', delta: '−81%' },
        { metric: 'Cost per booked meeting', before: '$1,032', after: '$64', delta: '−94%' },
        { metric: 'No-show / ghost rate', before: '28%', after: '14%', delta: '−50%' },
        { metric: 'CRM data completeness', before: '61%', after: '99%', delta: '+62%' },
        { metric: 'Time to productive output', before: '90 days (new hire ramp)', after: '3 weeks', delta: '' },
      ],
    },
    quote: {
      text: 'I was the most skeptical person in the room when we started this. I\'ve managed SDR teams for 12 years. After 60 days I had to admit the agent was outperforming every human rep we\'ve ever hired — at a tenth of the cost. The personalization quality was the biggest surprise.',
      author: 'VP of Sales',
      title: 'Series B B2B SaaS Company',
    },
    agents: ['sales-lead-gen-agent'],
  },
  {
    slug: 'financial-services-compliance-automation',
    client: 'Regional Investment Firm',
    industry: 'Financial Services',
    industryColor: 'slate',
    title: 'Regional Investment Firm Reduces Compliance Reporting Time by 68% with AI Agents',
    tagline: 'SOC 2-controlled AI agents replaced 1,200 hours of monthly manual reporting across a 12-person operations team.',
    metaTitle: 'Case Study: AI Compliance Automation for Financial Services | Hiretecky',
    metaDescription: 'A regional investment firm deployed Hiretecky AI agents to automate compliance reporting and client communications — reducing manual hours by 68% while improving audit trail quality.',
    published: 'January 2026',
    stats: [
      { label: 'Reporting Time Reduced', value: '68%', note: '1,200 → 384 manual hours/mo' },
      { label: 'Audit Findings Eliminated', value: '3 of 4', note: 'From prior year audit' },
      { label: 'Client Reports Generated', value: '340/mo', note: 'Fully automated' },
      { label: 'Annual Savings', value: '$890k', note: 'Operations + compliance staff' },
    ],
    problem: {
      headline: 'A 12-person operations team spending 1,200 hours per month on reporting that AI could handle',
      body: [
        'The firm\'s operations team was producing monthly compliance reports, quarterly client statements, and regulatory filings manually — pulling data from four disconnected systems, reformatting it in Excel, and sending outputs through an approval chain that added 3–5 business days to every cycle.',
        'The prior year\'s internal audit had flagged four control deficiencies, three of which related to data reconciliation errors and inconsistent documentation in the manual process. The compliance team estimated they were at $2M+ in potential regulatory exposure if the pattern continued.',
        'Headcount was not the solution. The operations team was already stretched. Adding more people to a broken manual process would not fix the underlying data quality and auditability problems.',
      ],
      symptoms: [
        '1,200 manual hours per month on reporting and reconciliation',
        '4 audit findings in prior year, 3 related to documentation gaps',
        '3–5 day delay between data cut and report delivery to clients',
        'Data pulled from 4 disconnected systems with no automated reconciliation',
        'No tamper-evident audit trail on report generation',
      ],
    },
    approach: {
      headline: 'Connect all data sources, automate report generation, and produce SOC 2-grade audit trails',
      body: [
        'Hiretecky deployed InsightPulse AI and ContentFlow AI in combination — InsightPulse connecting to the firm\'s portfolio management system, CRM, and custodian data feeds; ContentFlow generating the client-facing report narratives from structured data outputs.',
        'Security was the first conversation. The firm\'s Chief Compliance Officer required a completed vendor security questionnaire, SOC 2 controls documentation, and a data processing agreement before any system access was granted. Hiretecky completed the full security review in 8 business days.',
      ],
      phases: [
        {
          title: 'Week 1–2: Security Review & DPA',
          body: 'Completed CCO security questionnaire, provided SOC 2 controls documentation, and executed a custom Data Processing Agreement covering data residency and retention requirements specific to SEC-regulated entities.',
        },
        {
          title: 'Week 3–4: Data Source Integration',
          body: 'Connected portfolio management system, CRM, and custodian data feeds via API. Built automated reconciliation checks that flag discrepancies before any report generation begins.',
        },
        {
          title: 'Week 5–6: Report Template Configuration',
          body: 'Mapped all existing report formats into automated templates. Configured approval workflow where generated reports route to a compliance officer for sign-off before client delivery.',
        },
        {
          title: 'Week 7+: Production & Audit Trail',
          body: 'Enabled automated report generation. Every report includes a tamper-evident generation log — timestamp, data sources queried, reconciliation check results — satisfying the audit trail requirements that had generated prior year findings.',
        },
      ],
    },
    roi: {
      headline: 'From 4 audit findings to 1 in the first post-deployment review',
      body: [
        'The first internal audit after deployment found 1 control deficiency — down from 4 in the prior year. The 3 findings that were eliminated all related to documentation gaps that the automated audit trail now addresses by design.',
        'The operations team recovered 816 hours per month of capacity. That time was redirected to client relationship work — a function that was previously understaffed and had been cited in client satisfaction surveys as a gap.',
      ],
      outcomes: [
        { metric: 'Monthly manual reporting hours', before: '1,200', after: '384', delta: '−68%' },
        { metric: 'Audit findings', before: '4', after: '1', delta: '−75%' },
        { metric: 'Report delivery time', before: '3–5 business days', after: 'Same day', delta: '−90%' },
        { metric: 'Data reconciliation errors', before: '12/month avg.', after: '0', delta: '−100%' },
        { metric: 'Annual operations savings', before: 'Baseline', after: '$890,000', delta: '' },
        { metric: 'Client reports automated', before: '0', after: '340/month', delta: '' },
      ],
    },
    quote: {
      text: 'Our CCO was the biggest skeptic. She\'d seen AI tools make bold promises before. What convinced her was the audit trail design — every report now has a complete, tamper-evident log of what data was used and when. That\'s what eliminated three of our four prior-year findings.',
      author: 'Chief Operating Officer',
      title: 'Regional Investment Firm',
    },
    agents: ['data-analytics-agent', 'marketing-content-agent'],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
