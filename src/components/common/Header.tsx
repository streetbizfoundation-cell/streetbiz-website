'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Menu,
  X,
  ChevronDown,
  Info,
  Award,
  Handshake,
  BookOpen,
  Layers,
  Users2,
  Briefcase,
  Compass,
  FileText,
  Calendar,
  Image as ImageIcon,
  GraduationCap,
  Sparkles,
  Building2,
  HeartHandshake,
  HelpCircle,
  Mail,
} from 'lucide-react'
import { Button } from './Button'

interface SubNavItem {
  name: string
  href: string
  description: string
  icon: React.ElementType
}

interface NavCategory {
  name: string
  href?: string
  children?: SubNavItem[]
}

const navigation: NavCategory[] = [
  {
    name: 'About',
    children: [
      {
        name: 'Our Story & Mission',
        href: '/about',
        description: 'History, Ubuntu values, founder journey & leadership',
        icon: Info,
      },
      {
        name: 'Impact & Governance',
        href: '/impact',
        description: 'Audited reach metrics, compliance, Board & SARS PBO',
        icon: Award,
      },
      {
        name: 'Institutional Partners',
        href: '/partners',
        description: 'DI², RebelBase, MasterPeace & university alliances',
        icon: Handshake,
      },
      {
        name: 'Thought Leadership & Resources',
        href: '/resources',
        description: 'No Fit book, podcasts & Triple E framework',
        icon: BookOpen,
      },
    ],
  },
  {
    name: 'Our Work',
    children: [
      {
        name: 'Programme & Triple E Framework',
        href: '/programme',
        description: '1-Year Journey, interactive hub & annual master calendar',
        icon: Layers,
      },
      {
        name: 'Meet the Nelsons',
        href: '/nelsons',
        description: 'Profiles of emerging youth changemakers nationwide',
        icon: Users2,
      },
      {
        name: 'Grassroots Projects',
        href: '/projects',
        description: 'Community social enterprises validated by Nelsons',
        icon: Briefcase,
      },
    ],
  },
  {
    name: 'Stories & Media',
    children: [
      {
        name: 'Impact Stories',
        href: '/stories',
        description: 'Firsthand transformation narratives and case studies',
        icon: FileText,
      },
      {
        name: 'Events & Summits',
        href: '/events',
        description: 'Ganzekraal 2026 Conference, pitch showcases & walks',
        icon: Calendar,
      },
      {
        name: 'Media Gallery',
        href: '/gallery',
        description: 'Documentary photo & video archive across 104+ townships',
        icon: ImageIcon,
      },
    ],
  },
  {
    name: 'Get Involved',
    children: [
      {
        name: 'Apply for Cohort 2026/27',
        href: '/apply',
        description: 'Interactive 5-step application for youth changemakers',
        icon: GraduationCap,
      },
      {
        name: 'Dolphins Mentorship',
        href: '/mentorship',
        description: '1:1 international coaching portal (3-month cycles)',
        icon: Sparkles,
      },
      {
        name: 'Corporate & CSI Partnerships',
        href: '/corporate-partnerships',
        description: 'B-BBEE SED/ED scorecard points & Section 18A receipts',
        icon: Building2,
      },
      {
        name: 'Volunteer With Us',
        href: '/volunteer',
        description: '5 dedicated volunteer pathways and skills contributions',
        icon: HeartHandshake,
      },
      {
        name: 'Frequently Asked Questions (FAQ)',
        href: '/faq',
        description: 'Common questions for youth, mentors, donors & partners',
        icon: HelpCircle,
      },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name))
  }

  const toggleMobileGroup = (name: string) => {
    setMobileExpanded((prev) => (prev === name ? null : name))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container">
        <nav className="flex items-center justify-between py-3.5 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setActiveDropdown(null)}>
            <div className="relative w-44 h-14 sm:w-52 sm:h-16 lg:w-56 lg:h-18">
              <Image
                src="/images/brand/streetbiz-logo.png"
                alt="StreetBiz logo"
                fill
                sizes="240px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Consolidated Navigation */}
          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigation.map((item) => {
              if (item.children) {
                const isOpen = activeDropdown === item.name
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isOpen
                          ? 'bg-neutral-100 text-primary-700'
                          : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-primary-600' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu Panel */}
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 sm:w-96 rounded-2xl bg-white border border-neutral-200 shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="space-y-1">
                          {item.children.map((child) => {
                            const Icon = child.icon
                            return (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                              >
                                <div className="p-2 rounded-lg bg-neutral-100 group-hover:bg-primary-50 text-neutral-600 group-hover:text-primary-700 transition-colors shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-sm font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
                                    {child.name}
                                  </p>
                                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                                    {child.description}
                                  </p>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href || '/'}
                  className="px-3 py-2 text-sm font-semibold text-neutral-700 rounded-lg hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Header Action: Single Prominent Donate Button */}
          <div className="flex items-center gap-3">
            <Link href="/donate" className="hidden sm:block">
              <Button className="rounded-full px-6 py-2.5 text-sm font-bold shadow-md shadow-primary-600/10">
                Donate
              </Button>
            </Link>

            {/* Mobile Menu Trigger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Accordion Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4 max-h-[80vh] overflow-y-auto space-y-2 animate-in fade-in duration-200">
            {navigation.map((item) => {
              if (item.children) {
                const isExpanded = mobileExpanded === item.name
                return (
                  <div key={item.name} className="border-b border-neutral-100 pb-2">
                    <button
                      type="button"
                      onClick={() => toggleMobileGroup(item.name)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-base font-bold text-neutral-900 rounded-lg hover:bg-neutral-50 text-left"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-primary-600' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-4 pr-2 pt-1 space-y-1.5">
                        {item.children.map((child) => {
                          const Icon = child.icon
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-neutral-700 hover:text-primary-700 hover:bg-neutral-50"
                            >
                              <Icon className="w-4 h-4 text-primary-600 shrink-0" />
                              <span className="font-medium">{child.name}</span>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href || '/'}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-base font-bold text-neutral-900 rounded-lg hover:bg-neutral-50"
                >
                  <Mail className="w-4 h-4 text-primary-600" />
                  <span>{item.name}</span>
                </Link>
              )
            })}

            {/* Mobile Bottom Action: Donate */}
            <div className="pt-4 border-t border-neutral-200 px-2">
              <Link href="/donate" onClick={() => setMobileOpen(false)}>
                <Button className="w-full rounded-xl py-3 text-base font-bold">
                  Donate to StreetBiz
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
