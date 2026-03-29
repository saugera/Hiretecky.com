import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'We replaced our entire SDR team with LeadForge AI. Pipeline generation is up 3x and cost per meeting booked dropped by 70%.',
    name: 'Marcus Chen',
    title: 'VP of Sales, SaaSify',
    rating: 5,
    initials: 'MC',
  },
  {
    quote:
      'SupportIQ resolves 82% of tickets without human intervention. Our team now focuses on complex issues and our CSAT scores have never been higher.',
    name: 'Priya Nair',
    title: 'Head of CX, ShopLux',
    rating: 5,
    initials: 'PN',
  },
  {
    quote:
      "We went from posting a job to a ranked shortlist of candidates in 48 hours. TalentMatch AI changed what 'recruiting speed' means for us.",
    name: 'Jason Kowalski',
    title: 'Head of People, Launchpad Labs',
    rating: 5,
    initials: 'JK',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Forward-Thinking Teams
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Companies of all sizes are replacing headcount with AI agents — and seeing real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-slate-200">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-sm leading-relaxed mb-6">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-semibold text-indigo-700">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
