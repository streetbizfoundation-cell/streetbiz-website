import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  HelpCircle,
  GraduationCap,
  Users2,
  Building2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { H1, H2, Lead } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | StreetBiz Foundation',
  description:
    'Find answers to common questions about the Be a Nelson Movement, Dolphins Mentorship Network, corporate CSI/B-BBEE sponsorships, and Section 18A tax receipts.',
}

const applicantFaqs = [
  {
    q: 'Do I need an existing registered business to apply?',
    a: 'No. You do not need a registered company or existing business revenue. We look for passionate, proactive young leaders (aged 18–35) with deep community insight, resilience, and a desire to solve local challenges. We guide you from concept to a validated, working enterprise MVP.',
  },
  {
    q: 'How much does the program cost for participants?',
    a: 'The Be a Nelson 1-Year Journey and associated courses are 100% free for accepted participants. Tuition, software access (RebelBase), coaching, and workshop materials are fully sponsored by our donors and corporate partners.',
  },
  {
    q: 'What is the time commitment required?',
    a: 'The program is a 1-year, 4-quarter journey requiring approximately 4 to 6 hours per week. This includes attending online/in-person workshops, participating in bi-weekly 1:1 coaching with your international mentor, completing enterprise modules, and executing your community project.',
  },
  {
    q: 'What if I don’t have consistent internet data access?',
    a: 'Through our "Keep a Nelson Connected" corporate sponsorship fund, StreetBiz provides monthly data bundles and access to digital hubs so no young leader is excluded due to connectivity barriers.',
  },
  {
    q: 'What do I receive upon graduation?',
    a: 'Graduates receive an accredited certificate of completion, eligibility to pitch for enterprise seed grants at our annual pitch competition, lifelong membership in the Be a Nelson Alumni Network, and opportunities to become paid peer-facilitators for future cohorts.',
  },
]

const mentorFaqs = [
  {
    q: 'What is the time commitment for a Dolphin Mentor?',
    a: 'Mentorship is structured in 3-month coaching cycles. Mentors commit to 3 to 4 hours per month, which comprises two 60-minute virtual coaching calls per month (bi-weekly) plus brief weekly WhatsApp check-ins.',
  },
  {
    q: 'Do I need to be located in South Africa to mentor?',
    a: 'No. Our Dolphins Network is global, with mentors connecting virtually from Europe, North America, and South Africa via Zoom, Microsoft Teams, or Google Meet.',
  },
  {
    q: 'What training and support is provided to mentors?',
    a: 'Every mentor receives the StreetBiz Mentor Toolkit, which includes guidance on Appreciative Inquiry, Ubuntu cultural principles, youth safeguarding guidelines, and access to the mentee’s curriculum modules on RebelBase.',
  },
]

const donorFaqs = [
  {
    q: 'How do I receive a Section 18A tax certificate?',
    a: 'StreetBiz Foundation is an approved Public Benefit Organisation (PBO No: 930087066). Donations made by South African taxpayers and companies are tax-deductible up to 10% of taxable income. Official SARS Section 18A tax certificates are issued within 14 business days of payment clearance.',
  },
  {
    q: 'How does corporate sponsorship benefit our B-BBEE Scorecard?',
    a: 'Because 100% of StreetBiz Foundation’s youth participants are Black South Africans from disadvantaged communities, corporate contributions qualify for full points under Socio-Economic Development (SED) and Enterprise Development (ED) scorecard elements.',
  },
  {
    q: 'Can international donors contribute tax-efficiently?',
    a: 'Yes. Through our partnerships with US-based 501(c)(3) organizations (via the Democratizing Innovation Institute) and European partners (via MasterPeace / Rebelieve in the Netherlands), international donors can give tax-efficiently within their respective jurisdictions.',
  },
  {
    q: 'How does StreetBiz ensure financial transparency?',
    a: 'StreetBiz Foundation is governed by an independent Board of Directors and a dedicated Finance & Compliance Committee. We maintain separate project accounting, independent annual financial reviews, and provide corporate donors with verified quarterly impact reports.',
  },
]

export default function FaqPage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Section with Interactive Workshop Photo */}
      <section className="bg-neutral-950 py-24 md:py-32 text-white relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (65).jpg"
            alt="Young leaders and facilitators in interactive dialogue and Q&A session"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-black/60 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-primary-400" />
              Frequently Asked Questions
            </div>
            <H1 className="text-white text-5xl md:text-7xl font-serif leading-tight">
              Questions &amp; <span className="text-primary-400 italic">Answers</span>
            </H1>
            <Lead className="text-neutral-200 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              Everything you need to know about applying as a youth changemaker, becoming a Dolphin mentor, corporate CSI partnerships, and expeditions.
            </Lead>

            {/* Jump Links */}
            <div className="flex flex-wrap gap-3 pt-4 text-xs font-medium">
              <a href="#applicants" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 border border-white/20 backdrop-blur-sm transition-colors">
                Youth Applicants
              </a>
              <a href="#mentors" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 border border-white/20 backdrop-blur-sm transition-colors">
                Mentors &amp; Coaches
              </a>
              <a href="#donors" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 border border-white/20 backdrop-blur-sm transition-colors">
                Donors &amp; CSI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1. For Youth Applicants */}
      <section id="applicants" className="py-20 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
                <GraduationCap className="w-4 h-4" />
                Youth Opportunities
              </div>
              <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">
                For Prospective Youth Applicants (&quot;Nelsons&quot;)
              </H2>
            </div>

            <div className="space-y-6">
              {applicantFaqs.map((faq, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-3 shadow-sm hover:border-primary-300 transition-colors">
                  <h3 className="text-xl font-bold font-serif text-neutral-900">{faq.q}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/apply">
                <Button className="rounded-full px-8 py-3.5 font-semibold text-sm">
                  Apply for Cohort 2026/2027 →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. For Mentors & Coaches */}
      <section id="mentors" className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
                <Users2 className="w-4 h-4" />
                Mentorship Network
              </div>
              <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">
                For Dolphin Mentors &amp; Coaches
              </H2>
            </div>

            <div className="space-y-6">
              {mentorFaqs.map((faq, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-3 shadow-sm hover:border-primary-300 transition-colors">
                  <h3 className="text-xl font-bold font-serif text-neutral-900">{faq.q}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/mentorship">
                <Button className="rounded-full px-8 py-3.5 font-semibold text-sm">
                  Become a Dolphin Mentor →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. For Donors & Corporate Partners */}
      <section id="donors" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
                <Building2 className="w-4 h-4" />
                Funder &amp; Partner FAQs
              </div>
              <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">
                For Donors, Foundations &amp; Corporate Partners
              </H2>
            </div>

            <div className="space-y-6">
              {donorFaqs.map((faq, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-3 shadow-sm hover:border-primary-300 transition-colors">
                  <h3 className="text-xl font-bold font-serif text-neutral-900">{faq.q}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/corporate-partnerships">
                <Button className="rounded-full px-8 py-3.5 font-semibold text-sm">
                  Explore Corporate CSI Partnerships →
                </Button>
              </Link>
              <Link href="/impact">
                <Button variant="ghost" className="rounded-full px-8 py-3.5 font-semibold text-sm border border-neutral-300">
                  View Governance &amp; Metrics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
