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
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
