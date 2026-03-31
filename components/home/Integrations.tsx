const integrations = [
  'Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Intercom',
  'LinkedIn', 'Gmail', 'Calendly', 'QuickBooks', 'Stripe',
  'Jira', 'GitHub', 'Workday', 'DocuSign', 'Snowflake',
]

export default function Integrations() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest mb-8">
          Plugs into the tools your team already uses
        </p>
        {/* Scrolling marquee effect */}
        <div className="relative overflow-hidden">
          <div className="flex gap-3 animate-none flex-wrap justify-center">
            {integrations.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium whitespace-nowrap hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                {name}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full border border-dashed border-slate-300 text-slate-400 text-sm whitespace-nowrap">
              + 100 more
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
