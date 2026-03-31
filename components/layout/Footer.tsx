import Link from 'next/link'
import { Bot, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </span>
              Hire<span className="text-indigo-400">tecky</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              Hiretecky helps companies deploy AI agent services for software development,
              sales, support, recruiting, marketing, and analytics workflows.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://hiretecky.com" className="hover:text-white transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="mailto:hello@hiretecky.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/services/software-development" className="hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="/services/sales-lead-generation" className="hover:text-white transition-colors">Sales & Lead Generation</Link></li>
              <li><Link href="/services/customer-support" className="hover:text-white transition-colors">Customer Support</Link></li>
              <li><Link href="/services/hr-recruiting" className="hover:text-white transition-colors">HR & Recruiting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">Book a Demo</Link></li>
              <li><Link href="/request" className="hover:text-white transition-colors">Request Custom Agent</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/trust" className="hover:text-white transition-colors">Security & Trust</Link></li>
              <li><a href="mailto:privacy@hiretecky.com" className="hover:text-white transition-colors">Data Requests</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} Hiretecky. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/trust" className="hover:text-white transition-colors">Security</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
