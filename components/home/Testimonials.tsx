import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'We replaced our entire outbound SDR workflow with LeadForge AI. Pipeline generation is up 3x and our cost per booked meeting dropped by 70%. Our human reps now focus purely on closing.',
    name: 'Marcus Chen',
    title: 'VP of Sales',
    company: 'SaaSify',
    industry: 'B2B SaaS',
    metric: '3x pipeline growth',
    rating: 5,
    color: 'bg-indigo-600',
  },
  {
    quote:
      'SupportIQ resolves 82% of our tickets without human intervention. Our team now focuses on complex, high-value issues and our CSAT scores are the highest they\'ve ever been.',
    name: 'Priya Nair',
    title: 'Head of Customer Experience',
    company: 'ShopLux',
    industry: 'E-commerce',
    metric: '82% auto-resolution rate',
    rating: 5,
    color: 'bg-blue-600',
  },
  {
    quote:
      "We went from job posting to a ranked shortlist of 10 qualified candidates in 48 hours. TalentMatch AI changed what recruiting speed means for us — and our hiring managers love it.",
    name: 'Jason Kowalski',
    title: 'Head of People',
    company: 'Launchpad Labs',
    industry: 'Venture-backed Startup',
    metric: 'Shortlist in 48 hours',
    rating: 5,
    color: 'bg-violet-600',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Teams That Made the Switch
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Real results from companies that deployed AI agents through Hiretecky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col">
              {/* Metric badge */}
              <div className={`self-start px-3 py-1.5 ${t.color} text-white text-xs font-bold rounded-full mb-4`}>
                {t.metric}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <Quote className="w-6 h-6 text-slate-200 absolute -top-1 -left-1" />
                <p className="text-slate-700 text-sm leading-relaxed pl-4">{t.quote}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title}, <span className="font-medium text-slate-600">{t.company}</span></p>
                  <p className="text-xs text-slate-400">{t.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-xs text-slate-400 mt-8">
          Results vary by use case and configuration.{' '}
          <a href="/demo" className="text-indigo-500 hover:underline">
            Book a demo to see what's realistic for your business.
          </a>
        </p>
      </div>
    </section>
  )
}
