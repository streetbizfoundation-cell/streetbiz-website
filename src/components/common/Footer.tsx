'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Muted } from './Typography'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/icons/SocialIcons'

export function Footer() {
  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/StreetBizFoundation', icon: FacebookIcon },
    { label: 'Instagram', href: 'https://www.instagram.com/streetbizfoundation/', icon: InstagramIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/streetbiz', icon: LinkedinIcon },
    { label: 'YouTube', href: 'https://www.youtube.com/@streetbizfoundation8854', icon: YoutubeIcon },
  ]

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 mt-20">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Organization & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif font-bold text-xl text-neutral-900">StreetBiz Foundation</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              Empowering marginalized South African youth through values-based leadership, global mentorship, and social entrepreneurship across 104+ townships.
            </p>
            <div className="space-y-2 pt-2 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-600 shrink-0" />
                <span>Table View, Cape Town, Western Cape, 7439</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-600 shrink-0" />
                <a href="mailto:hello@streetbiz.co.za" className="hover:text-primary-600 transition-colors">
                  hello@streetbiz.co.za
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-600 shrink-0" />
                <span>+27 82 566 1484</span>
              </div>
            </div>
            <div className="flex gap-3 pt-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 transition-all hover:border-primary-500 hover:text-primary-600 hover:bg-white hover:shadow-sm"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: About & Governance */}
          <div>
            <h4 className="font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">About Us</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Our Story &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Impact &amp; Governance
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Institutional Partners
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Resources &amp; Podcasts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Work & Stories */}
          <div>
            <h4 className="font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">Our Work</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/programme" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Programme &amp; Calendar
                </Link>
              </li>
              <li>
                <Link href="/nelsons" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Meet the Nelsons
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Grassroots Projects
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Events &amp; Summits
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Media Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Involved */}
          <div>
            <h4 className="font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/apply" className="text-primary-700 font-bold hover:underline">
                  Apply (Cohort 2026/27)
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Donate (Section 18A)
                </Link>
              </li>
              <li>
                <Link href="/corporate-partnerships" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Corporate &amp; CSI
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Dolphins Mentorship
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <Muted>© 2026 StreetBiz Entrepreneurial Mindset Foundation NPC (Reg: 2018/356208/08). PBO No: 930087066.</Muted>
          <div className="flex gap-6 flex-wrap">
            <Link href="/privacy" className="hover:text-primary-600 transition-colors">
              Privacy Policy (POPIA &amp; GDPR)
            </Link>
            <Link href="/terms" className="hover:text-primary-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:text-primary-600 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
