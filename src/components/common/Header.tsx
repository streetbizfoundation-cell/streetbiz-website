'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from './Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Nelsons', href: '/nelsons' },
  { name: 'Stories', href: '/stories' },
  { name: 'Events', href: '/events' },
  { name: 'Projects', href: '/projects' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white shadow-sm">
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold">
              SBF
            </div>
            <span className="hidden md:inline text-neutral-900">StreetBiz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button size="md">
                Donate
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-neutral-200">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
