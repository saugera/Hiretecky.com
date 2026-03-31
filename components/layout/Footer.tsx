import Link from 'next/link'
import { Bot, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </span>
              Hire<span className="text-indigo-400">tecky</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              The marketplace where companies deploy AI Agents for Sales, Support, HR, Finance, and more — 24/7, at a fraction of the cost.
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

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions/ai-sales-agents" className="hover:text-white transition-colors">AI Sales Agents</Link></li>
              <li><Link href="/solutions/ai-customer-support" className="hover:text-white transition-colors">AI Customer Support</Link></li>
              <li><Link href="/solutions/ai-recruiting-software" className="hover:text-white transition-colors">AI Recruiting</Link></li>
              <li><Link href="/solutions/ai-marketing-automation" className="hover:text-white transition-colors">AI Marketing</Link></li>
              <li><Link href="/agents" className="hover:text-white transition-colors">Browse All Agents</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">Book a Demo</Link></li>
              <li><Link href="/request" className="hover:text-white transition-colors">Request Custom Agent</Link></li>
              <li><a href="mailto:hello@hiretecky.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
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
