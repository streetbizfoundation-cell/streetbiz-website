'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  GraduationCap,
  Globe2,
  Zap,
  Layers,
  Award,
  MapPin,
  Users2,
  Sparkles,
  BookOpen,
  Compass,
  Heart,
  Flame,
  ArrowDown,
} from 'lucide-react'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'

type PillarType = 'all' | 'education' | 'exposure' | 'experience'

interface ProgramItem {
  id: string
  title: string
  cadence: string
  timingCategory: 'seasonal' | 'ongoing' | 'biennial'
  education: boolean
  exposure: boolean
  experience: boolean
  classification: string
  description: string
  details: string
  icon: React.ElementType
}

const masterPrograms: ProgramItem[] = [
  {
    id: 'leading-change',
    title: 'Leading Change for Sustainability',
    cadence: 'February',
    timingCategory: 'seasonal',
    education: true,
    exposure: true,
    experience: false,
    classification: 'Education + Exposure',
    description: 'Accredited Democratizing Innovation Institute (DI²) course with university faculty & international students across 12 countries.',
    details:
      'Delivered in collaboration with the Democratizing Innovation Institute (DI²). Nelsons join international virtual classrooms to study organizational change, climate resilience, and systems thinking alongside global students.',
    icon: GraduationCap,
  },
  {
    id: 'youth-day-pitch',
    title: 'Youth Day Pitch Competition',
    cadence: '16 June',
    timingCategory: 'seasonal',
    education: false,
    exposure: true,
    experience: true,
    classification: 'Experience + Exposure',
    description: 'Live pitch showcase commemorating June 16; young entrepreneurs pitch before corporate judges, mentors, and investors to win catalytic seed capital cash prizes between R5,000 and R15,000.',
    details:
      'Commemorating South Africa’s Youth Day. Young entrepreneurs pitch their validated social enterprise MVPs before a panel of corporate judges, mentors, and investors to win catalytic seed capital cash prizes between R5,000 and R15,000 to pilot and scale their local impact.',
    icon: Flame,
  },
  {
    id: 'mandela-day',
    title: 'Mandela Day Campaign',
    cadence: '18 July',
    timingCategory: 'seasonal',
    education: false,
    exposure: false,
    experience: true,
    classification: 'Experience',
    description: '100% on-the-ground community service (food gardens, cleanups, school workshops) honoring Nelson Mandela’s legacy of action.',
    details:
      'Nelsons lead tangible community actions across townships—such as expanding urban organic vegetable gardens, organizing youth sports clinics, or launching reading clubs and digital learning spaces.',
    icon: Heart,
  },
  {
    id: 'social-entrepreneurship',
    title: 'Social Entrepreneurship Course',
    cadence: 'September',
    timingCategory: 'seasonal',
    education: true,
    exposure: false,
    experience: true,
    classification: 'Education + Experience',
    description: 'Rigorous enterprise curriculum offered by the Democratizing Innovation Institute (DI²) on RebelBase, covering unit economics, customer discovery, and practical business execution.',
    details:
      'Offered by the Democratizing Innovation Institute (DI²). Applied enterprise modeling on the RebelBase platform focusing on market validation, pricing, budgeting, cash flow forecasting, and legal compliance for sustainable township micro-ventures.',
    icon: BookOpen,
  },
  {
    id: 'peace-day',
    title: 'International Day of Peace Campaigns',
    cadence: '21 September',
    timingCategory: 'seasonal',
    education: false,
    exposure: true,
    experience: true,
    classification: 'Exposure + Experience',
    description: 'Global solidarity with MasterPeace International (44+ countries), leading local township peace dialogues and cultural events.',
    details:
      'Grassroots peace-building and intercultural dialogue events organized in collaboration with MasterPeace International, uniting youth across divides to lead social harmony campaigns.',
    icon: Globe2,
  },
  {
    id: 'monthly-meetings',
    title: 'National Monthly Meetings',
    cadence: 'Monthly (Thursdays)',
    timingCategory: 'ongoing',
    education: true,
    exposure: true,
    experience: false,
    classification: 'Exposure + Education',
    description: 'Virtual pan-provincial gatherings featuring expert guest speakers, updates on compliance/funding, and peer knowledge-sharing.',
    details:
      'Held monthly on Thursday evenings. Unites members across all provinces to review progress, share wins, and learn from invited corporate/academic guest speakers.',
    icon: Users2,
  },
  {
    id: 'recruitment-onboarding',
    title: 'Recruitment & Onboarding',
    cadence: 'Ongoing',
    timingCategory: 'ongoing',
    education: true,
    exposure: true,
    experience: false,
    classification: 'Education + Exposure',
    description: 'Signing the "Nelson Pact" pledge, digital data inclusion, and introduction into a national changemaker network.',
    details:
      'Continuous intake via peer nominations and online forms. Selected youth sign the "Nelson Pact" pledge to embody ethical leadership, Ubuntu, and integrity, and receive data connectivity support.',
    icon: Award,
  },
  {
    id: 'dolphins-pairing',
    title: 'Pairing with Coaches (Dolphins)',
    cadence: 'Ongoing',
    timingCategory: 'ongoing',
    education: true,
    exposure: true,
    experience: false,
    classification: 'Exposure + Education',
    description: '1:1 bi-weekly coaching connecting township youth with executives and professionals from Europe, the US, and South Africa.',
    details:
      'Each Nelson is paired with an international or local coach for bi-weekly 1:1 strategy calls and weekly WhatsApp check-ins, providing strategic accountability and personal growth support.',
    icon: Sparkles,
  },
  {
    id: 'member-engagement',
    title: 'Member Engagement & Communication',
    cadence: 'Ongoing',
    timingCategory: 'ongoing',
    education: false,
    exposure: true,
    experience: false,
    classification: 'Exposure',
    description: 'Active WhatsApp community circles, peer problem-solving, and personal check-ins by leadership.',
    details:
      'Daily peer-to-peer support, resource sharing, and encouragement across active regional WhatsApp circles to keep momentum and social cohesion high across cohorts.',
    icon: MessageCircleIcon,
  },
  {
    id: 'visiting-nelsons',
    title: 'Visiting Nelsons in Communities',
    cadence: 'Ongoing',
    timingCategory: 'ongoing',
    education: false,
    exposure: false,
    experience: true,
    classification: 'Experience',
    description: 'Direct provincial field visits by leadership (Dr. Nico de Klerk & Bafana Binda) to validate projects and support local operations.',
    details:
      'On-the-ground provincial site visits by the executive team to inspect projects, meet local beneficiaries, troubleshoot operational challenges, and maintain deep personal connection.',
    icon: MapPin,
  },
  {
    id: 'book-club',
    title: 'Tuesday Evening Book Club',
    cadence: 'Weekly (Tuesdays)',
    timingCategory: 'ongoing',
    education: true,
    exposure: false,
    experience: false,
    classification: 'Education',
    description: 'Weekly reading circles exploring biographies, African leadership, No Fit, and social innovation books.',
    details:
      'Weekly intellectual and character development discussions reading influential texts on history, leadership, social enterprise, and personal transformation.',
    icon: BookOpen,
  },
  {
    id: 'national-conference',
    title: 'National Be a Nelson Conference',
    cadence: 'Every 2 Years',
    timingCategory: 'biennial',
    education: true,
    exposure: true,
    experience: true,
    classification: 'Holistic (All 3 Pillars)',
    description: 'National flagship summit with multi-provincial delegates, international speakers, intensive masterclasses, and awards.',
    details:
      'A premier national gathering bringing together youth from across South Africa, international mentors, and corporate partners for 3 days of intensive masterclasses, networking, innovation showcases, and celebration.',
    icon: Layers,
  },
  {
    id: 'road-trips',
    title: 'Road Trips & Nature Expeditions',
    cadence: 'Every 2 Years',
    timingCategory: 'biennial',
    education: false,
    exposure: true,
    experience: true,
    classification: 'Experience + Exposure',
    description: 'Multi-day nature walks and provincial road trips fostering deep reflection, physical resilience, and cultural discovery.',
    details:
      '6-to-10 day nature walks (e.g., MasterPeace Western Cape Coastal Walk) and provincial road trips where international adventurers and Nelsons walk side-by-side (15+15 Model), building lifelong cross-cultural bonds and deep resilience.',
    icon: Compass,
  },
]

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

const pillarInfo = {
  all: {
    title: 'Triple E Framework: The Holistic Triad',
    subtitle: 'All 13 Confirmed Initiatives Across the Be a Nelson Movement',
    desc: 'Education, Exposure, and Experience work as a unified ecosystem. When knowledge is backed by global networks and applied in real community actions, true socio-economic mobility occurs.',
    color: 'from-primary-600 to-neutral-900',
    borderColor: 'border-primary-500',
    badgeBg: 'bg-primary-500/10 text-primary-400 border-primary-500/30',
  },
  education: {
    title: 'Education: Knowledge & Practical Rigor',
    subtitle: 'Academics, Business Modeling & Critical Thinking',
    desc: 'Equipping grassroots changemakers with formal academic curricula (DI², RebelBase), unit economics, pricing strategies, budgeting, and reflective reading circles.',
    color: 'from-blue-600 to-indigo-900',
    borderColor: 'border-blue-500',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  },
  exposure: {
    title: 'Exposure: Networks & Expanding Worldviews',
    subtitle: '1:1 Global Coaching, Cross-Border Cohorts & Alliances',
    desc: 'Connecting township youth with executives across Europe and North America (Dolphins Network), 12 international universities, and global peace networks (MasterPeace).',
    color: 'from-amber-600 to-yellow-900',
    borderColor: 'border-amber-500',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  },
  experience: {
    title: 'Experience: Applied Action & Field Immersion',
    subtitle: 'Live Pitching, Community Campaigns & Wilderness Walks',
    desc: 'Moving from theory to execution through seed pitch competitions, Mandela Day township actions, provincial site visits, and 10-day off-the-grid coastal expeditions.',
    color: 'from-emerald-600 to-teal-900',
    borderColor: 'border-emerald-500',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
}

export default function ProgrammePage() {
  const [selectedPillar, setSelectedPillar] = useState<PillarType | null>(null)

  const handleSelectPillar = (pillar: PillarType) => {
    setSelectedPillar(pillar)
    setTimeout(() => {
      document.getElementById('pillar-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  const handleBackToCircles = () => {
    document.getElementById('interactive-circles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleCloseDetails = () => {
    setSelectedPillar(null)
    document.getElementById('interactive-circles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filteredPrograms = selectedPillar
    ? masterPrograms.filter((prog) => {
        if (selectedPillar === 'all') return true
        if (selectedPillar === 'education') return prog.education
        if (selectedPillar === 'exposure') return prog.exposure
        if (selectedPillar === 'experience') return prog.experience
        return true
      })
    : []

  const countEducation = masterPrograms.filter((p) => p.education).length
  const countExposure = masterPrograms.filter((p) => p.exposure).length
  const countExperience = masterPrograms.filter((p) => p.experience).length

  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Header with Panoramic Conference Gathering Photo */}
      <section className="bg-neutral-950 py-24 md:py-32 text-white relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (115).jpg"
            alt="Be a Nelson Conference delegates gathered together in session"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-black/60 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-5xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <Layers className="w-4 h-4 text-primary-400" />
              Pedagogy &amp; Annual Rhythms
            </div>
            <H1 className="text-white text-4xl md:text-6xl font-serif leading-tight">
              Our Programme &amp; <span className="text-primary-400 italic">Triple E Framework</span>
            </H1>
            <Lead className="text-neutral-200 text-lg md:text-2xl font-light leading-relaxed max-w-4xl">
              Click any of the interconnected circles below to explore how <strong>Education</strong>, <strong>Exposure</strong>, and <strong>Experience</strong> work together to turn potential into lasting community action.
            </Lead>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#interactive-circles">
                <Button size="lg" className="rounded-full px-8 flex items-center gap-2">
                  Explore Interactive Circles <ArrowDown className="w-4 h-4" />
                </Button>
              </a>
              <a href="#annual-timeline">
                <Button variant="ghost" size="lg" className="rounded-full px-8 text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm">
                  View Annual Calendar
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1. INTERACTIVE 4-CIRCLE MERGING HUB */}
      <section id="interactive-circles" className="py-20 md:py-28 bg-neutral-950 text-white relative overflow-hidden border-b border-neutral-800">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-400">Interactive Framework Hub</p>
            <H2 className="text-3xl md:text-5xl font-serif text-white">Click a Circle to Filter Initiatives</H2>
            <p className="text-neutral-400 text-sm md:text-base">
              The Triple E Framework at the center branches into three pillars. Click any circle to view its activities below.
            </p>
          </div>

          {/* 1A. CIRCLES DIAGRAM (Desktop & Tablet Circular Radial Hub - hidden on mobile) */}
          <div className="hidden md:block max-w-4xl mx-auto relative w-full h-[580px] sm:h-[660px] md:h-[720px] select-none">
            
            {/* SVG Connecting Lines between center and satellite circles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Gradients for connecting lines */}
                <linearGradient id="grad-education" x1="50%" y1="50%" x2="22%" y2="20%">
                  <stop offset="0%" stopColor="#EAB308" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="grad-exposure" x1="50%" y1="50%" x2="78%" y2="20%">
                  <stop offset="0%" stopColor="#EAB308" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="grad-experience" x1="50%" y1="50%" x2="50%" y2="82%">
                  <stop offset="0%" stopColor="#EAB308" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Base background dashed connecting lines */}
              <line
                x1="50%"
                y1="50%"
                x2="22%"
                y2="20%"
                stroke="#404040"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
              <line
                x1="50%"
                y1="50%"
                x2="78%"
                y2="20%"
                stroke="#404040"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
              <line
                x1="50%"
                y1="50%"
                x2="50%"
                y2="82%"
                stroke="#404040"
                strokeWidth="4"
                strokeDasharray="6 6"
              />

              {/* Active illuminated connecting lines */}
              {(selectedPillar === 'all' || selectedPillar === 'education') && (
                <line
                  x1="50%"
                  y1="50%"
                  x2="22%"
                  y2="20%"
                  stroke="url(#grad-education)"
                  strokeWidth={selectedPillar === 'education' ? '6' : '3.5'}
                  className="transition-all duration-500"
                />
              )}
              {(selectedPillar === 'all' || selectedPillar === 'exposure') && (
                <line
                  x1="50%"
                  y1="50%"
                  x2="78%"
                  y2="20%"
                  stroke="url(#grad-exposure)"
                  strokeWidth={selectedPillar === 'exposure' ? '6' : '3.5'}
                  className="transition-all duration-500"
                />
              )}
              {(selectedPillar === 'all' || selectedPillar === 'experience') && (
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="82%"
                  stroke="url(#grad-experience)"
                  strokeWidth={selectedPillar === 'experience' ? '6' : '3.5'}
                  className="transition-all duration-500"
                />
              )}
            </svg>

            {/* 1. CENTER CIRCLE: Triple E Framework (50%, 50%) */}
            <button
              type="button"
              onClick={() => handleSelectPillar('all')}
              style={{ left: '50%', top: '50%' }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 flex flex-col items-center justify-center text-center p-4 transition-all duration-300 z-20 cursor-pointer ${
                selectedPillar === 'all'
                  ? 'bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-950 border-primary-400 shadow-[0_0_60px_rgba(234,179,8,0.45)] scale-105 ring-8 ring-primary-500/20'
                  : 'bg-neutral-900/95 border-neutral-700 hover:border-primary-400 hover:scale-105 backdrop-blur-md'
              }`}
            >
              <div className="p-2.5 rounded-full bg-primary-500/20 text-primary-300 mb-1">
                <Layers className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span className="font-serif font-bold text-base sm:text-xl text-white leading-tight">
                Triple E<br />Framework
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-primary-300 mt-1">
                {selectedPillar === 'all' ? '● Active: All 13' : 'Click to View All'}
              </span>
            </button>

            {/* 2. SATELLITE 1: EDUCATION (Top-Left: 22%, 20%) */}
            <button
              type="button"
              onClick={() => handleSelectPillar('education')}
              style={{ left: '22%', top: '20%' }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-4 flex flex-col items-center justify-center text-center p-3 sm:p-4 transition-all duration-300 z-20 cursor-pointer ${
                selectedPillar === 'education'
                  ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-950 border-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.55)] scale-110 ring-8 ring-blue-500/25'
                  : 'bg-neutral-900/95 border-neutral-700 hover:border-blue-400 hover:scale-105 backdrop-blur-md'
              }`}
            >
              <div className="p-2 rounded-full bg-blue-500/20 text-blue-300 mb-1">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-serif font-bold text-sm sm:text-lg text-white">Education</span>
              <span className="text-[10px] sm:text-xs text-blue-300 font-semibold">{countEducation} Activities</span>
              <span className="text-[9px] uppercase tracking-wider text-neutral-400 mt-0.5 hidden sm:block">Click to Open</span>
            </button>

            {/* 3. SATELLITE 2: EXPOSURE (Top-Right: 78%, 20%) */}
            <button
              type="button"
              onClick={() => handleSelectPillar('exposure')}
              style={{ left: '78%', top: '20%' }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-4 flex flex-col items-center justify-center text-center p-3 sm:p-4 transition-all duration-300 z-20 cursor-pointer ${
                selectedPillar === 'exposure'
                  ? 'bg-gradient-to-br from-amber-600 via-amber-700 to-orange-950 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.55)] scale-110 ring-8 ring-amber-500/25'
                  : 'bg-neutral-900/95 border-neutral-700 hover:border-amber-400 hover:scale-105 backdrop-blur-md'
              }`}
            >
              <div className="p-2 rounded-full bg-amber-500/20 text-amber-300 mb-1">
                <Globe2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-serif font-bold text-sm sm:text-lg text-white">Exposure</span>
              <span className="text-[10px] sm:text-xs text-amber-300 font-semibold">{countExposure} Activities</span>
              <span className="text-[9px] uppercase tracking-wider text-neutral-400 mt-0.5 hidden sm:block">Click to Open</span>
            </button>

            {/* 4. SATELLITE 3: EXPERIENCE (Bottom-Center: 50%, 82%) */}
            <button
              type="button"
              onClick={() => handleSelectPillar('experience')}
              style={{ left: '50%', top: '82%' }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-4 flex flex-col items-center justify-center text-center p-3 sm:p-4 transition-all duration-300 z-20 cursor-pointer ${
                selectedPillar === 'experience'
                  ? 'bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-950 border-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.55)] scale-110 ring-8 ring-emerald-500/25'
                  : 'bg-neutral-900/95 border-neutral-700 hover:border-emerald-400 hover:scale-105 backdrop-blur-md'
              }`}
            >
              <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-300 mb-1">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-serif font-bold text-sm sm:text-lg text-white">Experience</span>
              <span className="text-[10px] sm:text-xs text-emerald-300 font-semibold">{countExperience} Activities</span>
              <span className="text-[9px] uppercase tracking-wider text-neutral-400 mt-0.5 hidden sm:block">Click to Open</span>
            </button>

          </div>

          {/* 1B. MOBILE TACTILE INTERACTIVE CYCLE DECK (Visible only on mobile screens < 768px) */}
          <div className="block md:hidden max-w-lg mx-auto space-y-4">
            {/* Primary Master Hub Card */}
            <button
              type="button"
              onClick={() => handleSelectPillar('all')}
              className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                selectedPillar === 'all'
                  ? 'bg-gradient-to-r from-primary-950 via-neutral-900 to-neutral-950 border-primary-400 shadow-[0_0_30px_rgba(234,179,8,0.35)] ring-4 ring-primary-500/20'
                  : 'bg-neutral-900/95 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className={`p-3 rounded-xl ${selectedPillar === 'all' ? 'bg-primary-500 text-neutral-950 shadow-md' : 'bg-neutral-800 text-primary-400'}`}>
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white leading-tight">Triple E Framework</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">Holistic Triad • All 13 Initiatives</p>
                  </div>
                </div>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  selectedPillar === 'all'
                    ? 'bg-primary-500 text-neutral-950 font-extrabold'
                    : 'bg-neutral-800 text-primary-300 border border-primary-500/30'
                }`}>
                  {selectedPillar === 'all' ? '✓ Selected' : 'View All (13)'}
                </span>
              </div>
            </button>

            {/* 3 Satellite Pillar Cards */}
            <div className="grid grid-cols-1 gap-3">
              {/* Education Card */}
              <button
                type="button"
                onClick={() => handleSelectPillar('education')}
                className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer ${
                  selectedPillar === 'education'
                    ? 'bg-gradient-to-r from-blue-950/80 via-neutral-900 to-neutral-950 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.35)] ring-4 ring-blue-500/25'
                    : 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${selectedPillar === 'education' ? 'bg-blue-600 text-white shadow-md' : 'bg-neutral-800 text-blue-400'}`}>
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-white">1. Education</h4>
                      <p className="text-[11px] text-neutral-400">DI², RebelBase, Book Club &amp; Rigor</p>
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    selectedPillar === 'education'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500/10 text-blue-300 border border-blue-500/30'
                  }`}>
                    {selectedPillar === 'education' ? '✓ Selected' : `${countEducation} Activities`}
                  </span>
                </div>
              </button>

              {/* Exposure Card */}
              <button
                type="button"
                onClick={() => handleSelectPillar('exposure')}
                className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer ${
                  selectedPillar === 'exposure'
                    ? 'bg-gradient-to-r from-amber-950/80 via-neutral-900 to-neutral-950 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] ring-4 ring-amber-500/25'
                    : 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${selectedPillar === 'exposure' ? 'bg-amber-600 text-white shadow-md' : 'bg-neutral-800 text-amber-400'}`}>
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-white">2. Exposure</h4>
                      <p className="text-[11px] text-neutral-400">1:1 Dolphins, Pan-Provincial &amp; Alliances</p>
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    selectedPillar === 'exposure'
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                  }`}>
                    {selectedPillar === 'exposure' ? '✓ Selected' : `${countExposure} Activities`}
                  </span>
                </div>
              </button>

              {/* Experience Card */}
              <button
                type="button"
                onClick={() => handleSelectPillar('experience')}
                className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer ${
                  selectedPillar === 'experience'
                    ? 'bg-gradient-to-r from-emerald-950/80 via-neutral-900 to-neutral-950 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] ring-4 ring-emerald-500/25'
                    : 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${selectedPillar === 'experience' ? 'bg-emerald-600 text-white shadow-md' : 'bg-neutral-800 text-emerald-400'}`}>
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-white">3. Experience</h4>
                      <p className="text-[11px] text-neutral-400">Pitch Competitions, Nature Walks &amp; Action</p>
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    selectedPillar === 'experience'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {selectedPillar === 'experience' ? '✓ Selected' : `${countExperience} Activities`}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Interactive Helper Hint */}
          <div className="mt-12 text-center">
            {selectedPillar ? (
              <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-sm text-neutral-300 shadow-xl">
                <span>Active Cycle: <strong className="text-white capitalize">{selectedPillar === 'all' ? 'Triple E (All Initiatives)' : selectedPillar}</strong></span>
                <button
                  type="button"
                  onClick={() => document.getElementById('pillar-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="px-3.5 py-1 rounded-full bg-primary-500 text-neutral-950 font-bold text-xs hover:bg-primary-400 transition-colors inline-flex items-center gap-1"
                >
                  View Activities Below ↓
                </button>
              </div>
            ) : (
              <p className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900/90 border border-primary-500/40 text-primary-300 text-xs sm:text-sm font-medium animate-pulse shadow-lg">
                <Sparkles className="w-4 h-4 text-primary-400 shrink-0" />
                Click on any circle above to open its initiatives, activities, and curriculum
              </p>
            )}
          </div>
        </div>
      </section>

      {/* TRIPLE E FRAMEWORK IN ACTION (3 Distinct Authentic Photos) */}
      <section className="py-20 md:py-24 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-400">Living The Methodology</span>
              <H2 className="text-3xl md:text-4xl font-serif text-white">The Triple E Framework in Action</H2>
              <Paragraph className="text-neutral-400 text-sm md:text-base">
                How young changemakers experience education, exposure, and on-the-ground experience throughout their journey.
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Education */}
              <div className="bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 group flex flex-col justify-between shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/extra images/Social Entrepreneurship course Certificates received by Nelsons.jpg"
                    alt="Social Entrepreneurship course Certificates received by Nelsons"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-0.5 rounded-full inline-block">
                      1. Education
                    </span>
                    <p className="text-sm font-serif font-bold mt-1">Accredited Enterprise Modules</p>
                  </div>
                </div>
                <div className="p-6 space-y-1.5">
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Accredited coursework through DI² and RebelBase, focusing on budgeting, unit economics, and social enterprise certification.
                  </p>
                </div>
              </div>

              {/* Card 2: Exposure */}
              <div className="bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 group flex flex-col justify-between shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/extra images/Nelsons presenting on the road trips in Gauteng.jpg"
                    alt="Nelson speaking and presenting project to mentors and panel"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-white px-2.5 py-0.5 rounded-full inline-block">
                      2. Exposure
                    </span>
                    <p className="text-sm font-serif font-bold mt-1">Global Pitching &amp; Dialogue</p>
                  </div>
                </div>
                <div className="p-6 space-y-1.5">
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Presenting to visiting scholars, corporate panels, and international mentors, breaking isolation and building public confidence.
                  </p>
                </div>
              </div>

              {/* Card 3: Experience */}
              <div className="bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 group flex flex-col justify-between shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/extra images/Long Walk 2018 -  At workshop. Tshepang Fanja the leader.jpg"
                    alt="Youth participants in dynamic hands-on community leadership workshop"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full inline-block">
                      3. Experience
                    </span>
                    <p className="text-sm font-serif font-bold mt-1">Real-World Community Action</p>
                  </div>
                </div>
                <div className="p-6 space-y-1.5">
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Executing township community initiatives, leading experiential wilderness walks, and piloting active micro-enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC SPOTLIGHT & FILTERED INITIATIVES (Revealed when a cycle is clicked) */}
      {selectedPillar && (
        <section id="pillar-details" className="py-20 md:py-28 bg-white border-b border-neutral-200 scroll-mt-16 transition-all duration-500">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-12">
              
              {/* Navigation & Return Control Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-neutral-100 border border-neutral-200 shadow-sm">
                <button
                  type="button"
                  onClick={handleBackToCircles}
                  className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-neutral-800 hover:text-primary-700 bg-white px-4 py-2.5 rounded-xl sm:rounded-full border border-neutral-200 shadow-sm transition-all"
                >
                  ← Back to Interactive Cycles
                </button>

                <div className="overflow-x-auto no-scrollbar flex items-center gap-1.5 py-1 -mx-1 px-1">
                  <span className="text-neutral-500 font-bold hidden md:inline text-xs mr-1">Switch:</span>
                  <button
                    type="button"
                    onClick={() => setSelectedPillar('all')}
                    className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedPillar === 'all' ? 'bg-primary-500 text-neutral-950 shadow-sm' : 'bg-white text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    All ({masterPrograms.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPillar('education')}
                    className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedPillar === 'education' ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Education ({countEducation})
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPillar('exposure')}
                    className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedPillar === 'exposure' ? 'bg-amber-600 text-white shadow-sm' : 'bg-white text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Exposure ({countExposure})
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPillar('experience')}
                    className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedPillar === 'experience' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Experience ({countExperience})
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCloseDetails}
                  className="text-xs font-bold text-neutral-600 hover:text-neutral-900 bg-white px-3.5 py-2 rounded-xl sm:rounded-full border border-neutral-200 transition-colors text-center"
                >
                  ✕ Close Details
                </button>
              </div>

              {/* Active Pillar Spotlight Banner */}
              <div className={`p-6 sm:p-8 md:p-12 rounded-3xl bg-neutral-900 text-white border-2 ${pillarInfo[selectedPillar].borderColor} shadow-2xl relative overflow-hidden transition-all duration-500`}>
                <div className="space-y-4 max-w-3xl relative z-10">
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${pillarInfo[selectedPillar].badgeBg}`}>
                    Selected View: {selectedPillar.toUpperCase()}
                  </span>
                  <H2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                    {pillarInfo[selectedPillar].title}
                  </H2>
                  <p className="text-primary-300 text-sm font-bold">
                    {pillarInfo[selectedPillar].subtitle}
                  </p>
                  <Paragraph className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {pillarInfo[selectedPillar].desc}
                  </Paragraph>
                </div>
              </div>

              {/* Filtered Activity Cards */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-2xl font-bold text-neutral-900">
                    Showing {filteredPrograms.length} Confirmed {filteredPrograms.length === 1 ? 'Initiative' : 'Initiatives'}
                  </h3>
                  <span className="text-xs text-neutral-500 font-medium">
                    Be a Nelson Movement Master Schedule
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPrograms.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.id}
                        className="bg-neutral-50 p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex justify-between items-start gap-2 flex-wrap">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 text-primary-700 flex items-center justify-center shrink-0 shadow-sm">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-bold font-serif text-lg text-neutral-900">{item.title}</h4>
                                <span className="text-xs font-bold text-primary-700">{item.cadence}</span>
                              </div>
                            </div>
                          </div>

                          {/* Pillar Badges */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {item.education && (
                              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold">
                                ✓ Education
                              </span>
                            )}
                            {item.exposure && (
                              <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[11px] font-bold">
                                ✓ Exposure
                              </span>
                            )}
                            {item.experience && (
                              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                                ✓ Experience
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                            {item.description}
                          </p>
                          <p className="text-xs text-neutral-500 leading-relaxed border-t border-neutral-200/80 pt-3">
                            {item.details}
                          </p>
                        </div>

                        <div className="pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                            Classification: {item.classification}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. DETAILED ANNUAL TIMELINE BREAKDOWN */}
      <section id="annual-timeline" className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Annual Rhythms</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Detailed Calendar Breakdown</H2>
              <p className="text-neutral-600 text-lg">
                How our programmatic cadence unfolds across seasonal milestones, year-round activities, and biennial summits.
              </p>
            </div>

            {/* A. Fixed Seasonal Milestones */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-primary-600 text-white font-bold text-xs uppercase tracking-wider">
                  Section A
                </span>
                <H3 className="text-2xl font-serif text-neutral-900">Fixed Seasonal Milestones</H3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* February */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 space-y-3 shadow-sm">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-700">February</span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">Education + Exposure</span>
                  </div>
                  <h4 className="text-xl font-bold font-serif text-neutral-900">Leading Change for Sustainability</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Delivered in collaboration with the Democratizing Innovation Institute (DI²). Nelsons join international virtual classrooms to study organizational change, climate resilience, and systems thinking alongside global students across 12 countries.
                  </p>
                </div>

                {/* June 16 */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 space-y-4 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary-700">16 June</span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Experience + Exposure</span>
                    </div>
                    <h4 className="text-xl font-bold font-serif text-neutral-900">Youth Day Pitch Competition</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Commemorating South Africa’s Youth Day. Young entrepreneurs pitch their validated social enterprise MVPs before a panel of corporate judges, mentors, and investors to win catalytic seed capital cash prizes between R5,000 and R15,000 to scale their local impact.
                    </p>
                  </div>
                  <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-neutral-200 mt-2">
                    <Image
                      src="/images/extra images/Nelsons Pitch Competition.jpg"
                      alt="Nelsons presenting their venture at the annual Pitch Competition podium"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-3 text-[11px] text-white font-medium">
                      Live Youth Day Pitch Showcase &amp; Micro-Grants
                    </span>
                  </div>
                </div>

                {/* July 18 */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 space-y-3 shadow-sm">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-700">18 July</span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Experience</span>
                  </div>
                  <h4 className="text-xl font-bold font-serif text-neutral-900">Mandela Day Campaign</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Nelsons lead tangible community actions across townships—such as expanding urban organic vegetable gardens, organizing youth sports clinics, or launching reading clubs and digital resource centers.
                  </p>
                </div>

                {/* September */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 space-y-3 shadow-sm">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-700">September</span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-800">Education + Peace</span>
                  </div>
                  <h4 className="text-xl font-bold font-serif text-neutral-900">Social Entrepreneurship Course &amp; Peace Day</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    <strong>Coursework:</strong> Offered by the Democratizing Innovation Institute (DI²). Applied enterprise modeling on the RebelBase platform focusing on unit economics, pricing, budgeting, and legal compliance.
                    <br />
                    <strong>21 September (Peace Day):</strong> Grassroots peace-building and dialogue events organized in collaboration with MasterPeace International.
                  </p>
                </div>
              </div>
            </div>

            {/* B. Year-Round Continuous Initiatives */}
            <div className="space-y-8 pt-6 border-t border-neutral-200">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider">
                  Section B
                </span>
                <H3 className="text-2xl font-serif text-neutral-900">Year-Round Continuous Initiatives</H3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-white border border-neutral-200 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 text-primary-700 font-bold text-xs uppercase tracking-wider">
                    <Users2 className="w-4 h-4" />
                    Monthly (Thursdays)
                  </div>
                  <h4 className="font-bold text-neutral-900 font-serif text-lg">National Monthly Meetings</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Pan-provincial gatherings via Zoom/Teams with guest experts, compliance updates, and peer knowledge-sharing.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-neutral-200 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 text-primary-700 font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    Ongoing
                  </div>
                  <h4 className="font-bold text-neutral-900 font-serif text-lg">The &quot;Nelson Pact&quot; Onboarding</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Ethical leadership commitment, digital data bundle allocation, and integration into the national changemaker network.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-neutral-200 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 text-primary-700 font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    Ongoing
                  </div>
                  <h4 className="font-bold text-neutral-900 font-serif text-lg">1:1 Dolphin Mentorship</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Bi-weekly virtual coaching calls with assigned international executives from Europe, North America, and South Africa.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-neutral-200 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 text-primary-700 font-bold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    Ongoing
                  </div>
                  <h4 className="font-bold text-neutral-900 font-serif text-lg">Township Community Visits</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    On-the-ground provincial site visits by executive leadership to inspect projects and support local operations.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-neutral-200 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 text-primary-700 font-bold text-xs uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    Weekly (Tuesdays)
                  </div>
                  <h4 className="font-bold text-neutral-900 font-serif text-lg">Tuesday Book Club</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Weekly intellectual reading circles exploring biographies, African leadership, No Fit, and social innovation texts.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-neutral-200 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 text-primary-700 font-bold text-xs uppercase tracking-wider">
                    <Globe2 className="w-4 h-4" />
                    Daily
                  </div>
                  <h4 className="font-bold text-neutral-900 font-serif text-lg">Community WhatsApp Circles</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Active peer-to-peer accountability, instant resource distribution, and personal check-ins by leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* C. Biennial Flagship Milestones */}
            <div className="space-y-8 pt-6 border-t border-neutral-200">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-purple-700 text-white font-bold text-xs uppercase tracking-wider">
                  Section C
                </span>
                <H3 className="text-2xl font-serif text-neutral-900">Biennial Flagship Milestones (Every 2 Years)</H3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white space-y-4 shadow-xl">
                  <div className="flex items-center gap-2 text-primary-400 text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    Every 2 Years • All 3 Pillars
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white">The National Be a Nelson Conference</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    A premier national gathering bringing together youth from across South Africa, international mentors, and corporate partners for 3 days of intensive masterclasses, networking, and celebratory awards.
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white space-y-4 shadow-xl">
                  <div className="flex items-center gap-2 text-primary-400 text-xs font-bold uppercase tracking-wider">
                    <Compass className="w-4 h-4" />
                    Every 2 Years • Experience + Exposure
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white">Road Trips &amp; Nature Expeditions</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    6-to-10 day nature walks (such as the MasterPeace Western Cape Coastal Walk) where international adventurers and local Nelsons walk side-by-side (15+15 Model), building lifelong cross-cultural bonds and deep resilience.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">Ready to Step Into the Movement?</h3>
              <p className="text-neutral-400 text-sm">
                Apply for the upcoming 1-year cohort, sign up to coach as a Dolphin mentor, or sponsor a township innovation cohort.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/apply">
                <Button className="rounded-full px-8 py-3.5 text-base font-semibold bg-primary-500 text-neutral-950 hover:bg-primary-400">
                  Apply for Membership
                </Button>
              </Link>
              <Link href="/corporate-partnerships">
                <Button variant="ghost" className="rounded-full px-8 py-3.5 text-base font-semibold text-white border border-white/30 hover:bg-white/10">
                  Partner with StreetBiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
