import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Briefcase,
  Award,
  FileCheck,
  Users2,
  HeartHandshake,
  Layers,
  Phone,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'

export const metadata: Metadata = {
  title: 'Corporate Partnerships & CSI | StreetBiz Foundation',
  description:
    'Partner with StreetBiz Foundation for high-impact CSI, B-BBEE SED/ED scorecard points, Section 18A tax deductions, and employee volunteering in township economies.',
}

const volunteeringTracks = [
  {
    num: '1',
    title: 'Executive 1:1 Coaching ("Dolphins Network")',
    desc: 'Pair your corporate professionals with emerging youth entrepreneurs for monthly virtual coaching sessions focused on strategy, accountability, and problem-solving.',
    icon: Users2,
  },
  {
    num: '2',
    title: 'Specialist Skills Clinics & Masterclasses',
    desc: 'Corporate teams deliver 90-minute masterclasses in Financial Management (budgeting & cash flow), Funding Readiness (pitch decks & grant writing), Brand & Marketing, or Entity Compliance.',
    icon: Layers,
  },
  {
    num: '3',
    title: 'Pitch Competition Judges',
    desc: 'Senior leaders sit on evaluation panels for our annual Youth Day Pitch Competition, providing constructive feedback and seed capital guidance to emerging entrepreneurs.',
    icon: Award,
  },
  {
    num: '4',
    title: 'Mandela Day & Collaborative Action',
    desc: 'Join Nelsons in high-impact community volunteer days (e.g., establishing community food gardens, setting up digital literacy hubs, clean-up initiatives).',
    icon: HeartHandshake,
  },
]

const verificationItems = [
  {
    title: 'SARS Section 18A Tax Certificate',
    desc: 'Issued within 14 days of donation receipt for immediate corporate tax deduction up to 10% of taxable income.',
  },
  {
    title: 'B-BBEE SED / ED Verification Letter & Affidavit',
    desc: 'Auditor-ready confirmation of 100% Black Beneficiary allocation under the B-BBEE Codes of Good Practice.',
  },
  {
    title: 'Quarterly Impact & Milestone Reports',
    desc: 'Comprehensive quantitative data, enterprise revenue updates, and qualitative case studies with photo/video assets.',
  },
  {
    title: 'Transparent Fund Utilization Statement',
    desc: 'Itemized project financial statements detailing exact cost allocation and fund management.',
  },
]

export default function CorporatePartnershipsPage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Header with Panoramic Corporate Summit Photo */}
      <section className="bg-neutral-950 py-24 md:py-32 text-white relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/BaN Gauteng Conference 2026/BaN Gauteng Conference 2026  (55).jpg"
            alt="Corporate partners, mentors, and delegates in keynote conference session"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-black/60 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <Briefcase className="w-4 h-4 text-primary-400" />
              Corporate Social Investment &amp; Enterprise Development
            </div>
            <H1 className="text-white text-4xl md:text-6xl font-serif leading-tight">
              Partner to Build Sustainable <span className="text-primary-400 italic">Township Economies</span>
            </H1>
            <Lead className="text-neutral-200 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              Turn your CSI and Enterprise Development spend into measurable economic mobility. Qualify for full Section 18A tax deductions and B-BBEE SED/ED points.
            </Lead>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact">
                <Button size="lg" className="rounded-full px-8">
                  Partner With Us
                </Button>
              </a>
              <Link href="/impact">
                <Button variant="ghost" size="lg" className="rounded-full px-8 text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm">
                  View Governance &amp; Metrics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Why Partner with StreetBiz Foundation */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Business Case</p>
              <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">
                Beyond Compliance: Verifiable Social Return
              </H2>
              <Paragraph className="text-neutral-600 text-lg leading-relaxed">
                Corporate social investment often struggles with high administrative overhead and low on-the-ground visibility. StreetBiz Foundation offers a verified, community-rooted partnership model designed for corporate transparency.
              </Paragraph>
              <Paragraph className="text-neutral-600 text-lg leading-relaxed">
                Every rand invested is matched with rigorous milestone reporting, POPIA-compliant participant tracking, and audited financials aligned with King IV governance principles.
              </Paragraph>
            </div>

            <div className="lg:col-span-5 bg-neutral-900 text-white p-8 md:p-10 rounded-3xl space-y-6 shadow-xl border border-neutral-800">
              <h3 className="text-2xl font-serif font-bold text-white">Compliance &amp; Benefits</h3>
              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <span><strong>Section 18A Tax Receipts:</strong> Deduct up to 10% of taxable corporate income under SARS PBO Ref: 930087066.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <span><strong>B-BBEE SED &amp; ED Points:</strong> 100% Black Beneficiary verification letter &amp; affidavit for corporate scorecards.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <span><strong>ESG Impact Evidence:</strong> Real-time quantitative reporting on youth employment, micro-enterprise creation, and community resilience.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Structured Engagement Tracks & Executive Mentorship Photo */}
      <section className="py-20 md:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Skills-Based Engagement</p>
                <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">
                  Corporate Employee Volunteering &amp; Mentoring
                </H2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Connect your team’s executive capabilities with grassroots innovators through structured virtual and in-person engagement pathways.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
                  <Image
                    src="/images/extra images/Vishal meets the Nelsons (7).jpeg"
                    alt="Corporate mentor in strategy discussion with emerging young founders"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary-400">Executive Mentorship</p>
                    <p className="text-sm font-serif font-bold">Skills Transfer &amp; Business Guidance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {volunteeringTracks.map((track) => {
                const Icon = track.icon
                return (
                  <div key={track.num} className="bg-white p-8 rounded-3xl border border-neutral-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <H3 className="text-xl font-serif text-neutral-900">{track.title}</H3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{track.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Partner Verification Pack & Skills Training Photo */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Institutional Assurance</p>
                <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Corporate Governance &amp; Verification Pack</H2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  We supply corporate grantmakers and CSI committees with complete, auditor-ready documentation for seamless internal compliance and reporting.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
                  <Image
                    src="/images/stories/from-richmonds-desert-to-konke-2.png"
                    alt="Youth participants mastering digital skills at workstations"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary-400">Auditable Outcomes</p>
                    <p className="text-sm font-serif font-bold">Tangible Enterprise Development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {verificationItems.map((item, idx) => (
                <div key={idx} className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 space-y-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-serif text-neutral-900 text-base">{item.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Inquiry Form Section */}
      <section id="contact" className="py-20 md:py-28 bg-neutral-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-400">Initiate a Partnership</h2>
            <H2 className="text-3xl md:text-5xl font-serif text-white">
              Request Corporate Partnership Information
            </H2>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Our executive directorate will provide customized SED/ED investment options, Section 18A tax guidance, and employee volunteering schedules.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="mailto:hello@streetbiz.co.za?subject=Corporate%20Partnership%20Inquiry">
                <Button size="lg" className="rounded-full px-10">
                  Email Executive Office
                </Button>
              </a>
              <Link href="/impact">
                <Button variant="ghost" size="lg" className="rounded-full px-10 text-white border border-white/30 hover:bg-white/10">
                  Review Governance Data
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
