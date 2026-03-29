import Link from 'next/link'
import { Bot, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </span>
              Hire<span className="text-indigo-400">tecky</span>
            </Link>
            <p className="text-sm leading-relaxed">
              The marketplace where companies hire AI Agents instead of humans — faster, smarter, always on.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="mailto:hello@hiretecky.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Agents */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">AI Agents</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/agents?category=Sales+%26+Lead+Gen" className="hover:text-white transition-colors">Sales & Lead Gen</Link></li>
              <li><Link href="/agents?category=Customer+Support" className="hover:text-white transition-colors">Customer Support</Link></li>
              <li><Link href="/agents?category=HR+%26+Recruiting" className="hover:text-white transition-colors">HR & Recruiting</Link></li>
              <li><Link href="/agents?category=Marketing+%26+Content" className="hover:text-white transition-colors">Marketing & Content</Link></li>
              <li><Link href="/agents?category=Software+Development" className="hover:text-white transition-colors">Software Dev</Link></li>
              <li><Link href="/agents?category=Finance+%26+Accounting" className="hover:text-white transition-colors">Finance & Accounting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/request" className="hover:text-white transition-colors">Request Custom Agent</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><a href="mailto:hello@hiretecky.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} Hiretecky. All rights reserved.</p>
          <p>Built for the age of AI.</p>
        </div>
      </div>
    </footer>
  )
}
