'use client'

import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
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
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-neutral-900 mb-4">StreetBiz Foundation</h3>
            <Muted>
              Empowering marginalized South African youth through social entrepreneurship, alternative education, experience, and exposure.
            </Muted>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 transition-all hover:border-primary-500 hover:text-primary-500 hover:bg-white hover:shadow-sm"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/nelsons" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Meet the Nelsons
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/donate" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <Muted>South Africa</Muted>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:hello@streetbiz.co.za" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  hello@streetbiz.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Muted>© 2025 StreetBiz Foundation. Just Make It Work.</Muted>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
