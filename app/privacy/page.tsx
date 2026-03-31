import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Hiretecky',
}

export default function PrivacyPage() {
  const lastUpdated = 'March 31, 2026'

  return (
    <div className="min-h-screen bg-white py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Who We Are</h2>
            <p>
              Hiretecky ("we," "our," or "us") operates <strong>hiretecky.com</strong>, an AI agent
              marketplace that connects businesses with AI-powered automation agents. We are committed
              to protecting your personal data and your right to privacy.
            </p>
            <p className="mt-2">
              For questions about this policy, contact us at:{' '}
              <a href="mailto:privacy@hiretecky.com" className="text-indigo-600 hover:underline">
                privacy@hiretecky.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">2. What Data We Collect</h2>
            <p>We collect information you provide directly:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name, company name, and email address when you submit an inquiry or request</li>
              <li>Phone number (optional, if provided)</li>
              <li>Business information you share during onboarding (role descriptions, workflows)</li>
              <li>Communications you send to our team</li>
            </ul>
            <p className="mt-3">We also collect data automatically when you visit our site:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>IP address and approximate location</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring URLs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your inquiries and service requests</li>
              <li>To configure and deploy AI agents you have purchased</li>
              <li>To send transactional communications related to your service</li>
              <li>To improve our website and agent catalog</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell your personal data to third parties. We do not use your
              business data to train public AI models.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Data Sharing</h2>
            <p>We share data only with:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>AI infrastructure providers (Anthropic, OpenAI) under enterprise data protection agreements</li>
              <li>Cloud hosting providers (Vercel, AWS) under standard DPAs</li>
              <li>Email service providers for transactional communications</li>
              <li>Analytics providers under anonymized/aggregated data agreements</li>
            </ul>
            <p className="mt-3">All third-party processors are contractually required to protect your data.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to provide our services and comply
              with legal obligations. Inquiry data is retained for 3 years. Customer data is retained
              for the duration of the contract plus 1 year, unless you request earlier deletion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data ("right to be forgotten")</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{' '}
              <a href="mailto:privacy@hiretecky.com" className="text-indigo-600 hover:underline">
                privacy@hiretecky.com
              </a>
              . We respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">7. Cookies</h2>
            <p>
              We use essential cookies for site functionality and analytics cookies (anonymized) to
              understand site usage. You may disable non-essential cookies in your browser settings.
              We do not use advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">8. Security</h2>
            <p>
              We implement industry-standard security measures including TLS encryption for data in
              transit, AES-256 encryption for data at rest, and access controls. We are working
              toward SOC 2 Type II certification. No system is perfectly secure — if you believe
              your data has been compromised, contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. We will notify active customers of material
              changes by email. Continued use of our services after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">10. Contact</h2>
            <p>
              Hiretecky Inc. · hiretecky.com ·{' '}
              <a href="mailto:privacy@hiretecky.com" className="text-indigo-600 hover:underline">
                privacy@hiretecky.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
