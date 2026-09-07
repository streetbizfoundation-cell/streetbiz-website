'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  HeartHandshake,
  Briefcase,
  GraduationCap,
  Scale,
  Calendar,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'

const pathways = [
  {
    num: '1',
    title: 'Pathway 1: Pro Bono Professional Services',
    desc: 'Lend specialized expertise to build robust operational foundations for the movement and youth enterprises.',
    icon: Briefcase,
    items: [
      'Legal & Governance: Entity structuring, contracts, IP protection, and compliance.',
      'Accounting & Tax: Financial modeling, budgeting, and Section 18A systems.',
      'Web & Tech Development: Full-stack development, UI/UX design, and database systems.',
      'Media & Storytelling: Photography, documentary filmmaking, video editing, and copywriting.',
    ],
  },
  {
    num: '2',
    title: 'Pathway 2: Workshop Facilitation & Masterclasses',
    desc: 'Deliver high-impact 90-minute online or in-person clinics for active cohorts across South Africa.',
    icon: GraduationCap,
    items: [
      'Sales & Market Access: B2B sales pipelines, pricing models, and retail distribution.',
      'Digital Literacy & AI Tools: Practical productivity tools and digital marketing.',
      'Financial Literacy: Cash flow management and foundational bookkeeping.',
      'Pitch Coaching: Public speaking, investor readiness, and storytelling.',
    ],
  },
  {
    num: '3',
    title: 'Pathway 3: Governance Committees & Advisory Roles',
    desc: 'Support organizational oversight and strategic growth by serving on specialized committees.',
    icon: Scale,
    items: [
      'Finance & Compliance Committee: Fiscal monitoring and audit readiness.',
      'Program & Volunteer Committee: Cohort milestone tracking and volunteer engagement.',
      'Fundraising & Stakeholders: Grant application development and donor reporting.',
      'Marketing & Social Media: Campaign design, brand visibility, and storytelling.',
    ],
  },
  {
    num: '4',
    title: 'Pathway 4: Event & Expedition Logistics',
    desc: 'Assist with on-the-ground coordination for flagship national gatherings and wilderness walks.',
    icon: Calendar,
    items: [
      'Annual Be a Nelson National Conference (Western Cape & Gauteng).',
      'Regional youth pitch competitions, hackathons, and bootcamps.',
      'The 10-day South Africa Adventure & Be a Nelson nature walks.',
    ],
  },
  {
    num: '5',
    title: 'Pathway 5: Community Field Days & Mandela Day Action',
    desc: 'Roll up your sleeves on community action days working shoulder-to-shoulder with Nelsons.',
    icon: HeartHandshake,
    items: [
      'Establishing and cultivating community organic food gardens in townships.',
      'Setting up digital learning spaces and resource hubs in township schools.',
      'Participating in community youth sports and creative arts outreach.',
    ],
  },
]

export default function VolunteerPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('_to', 'hello@streetbiz.co.za')

    try {
      const response = await fetch('https://formspree.io/f/xgobkbgw', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        const data = await response.json()
        const errors = data.errors as { message: string }[] | undefined
        setErrorMessage(errors?.map((err) => err.message).join(', ') || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Failed to connect. Please check your internet connection or email us directly.')
      setStatus('error')
    }
  }

  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Header with Panoramic Youth Action Photo */}
      <section className="bg-neutral-950 py-24 md:py-32 text-white relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Internation Day of Peace 2025/Runway to Peace 2025 (10).jpg"
            alt="Young changemakers and volunteers actively engaged in community civic action"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-black/60 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <HeartHandshake className="w-4 h-4 text-primary-400" />
              Volunteer &amp; Get Involved
            </div>
            <H1 className="text-white text-4xl md:text-6xl font-serif leading-tight">
              Join the Movement. <span className="text-primary-400 italic">Unlock Youth Potential.</span>
            </H1>
            <Lead className="text-neutral-200 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              Empowering South African township youth through entrepreneurship, mentorship, professional skills, and community action.
            </Lead>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#volunteer-form">
                <Button size="lg" className="rounded-full px-8">
                  Sign Up to Volunteer
                </Button>
              </a>
              <Link href="/mentorship">
                <Button variant="ghost" size="lg" className="rounded-full px-8 text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm">
                  Explore 1:1 Mentorship
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Why Volunteer with StreetBiz */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Power of Collaboration</p>
            <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">
              Why Volunteer with StreetBiz Foundation?
            </H2>
            <Paragraph className="text-neutral-600 text-lg leading-relaxed">
              Transformation happens when skilled, passionate individuals collaborate to unlock the potential in South Africa’s township youth.
            </Paragraph>
            <Paragraph className="text-neutral-600 text-lg leading-relaxed">
              Whether you are an experienced executive, an entrepreneur, a student, or a creative specialist, your time and knowledge directly accelerate the work of our young community leaders (&quot;Nelsons&quot;).
            </Paragraph>
          </div>
        </div>
      </section>

      {/* Community Action In Focus (2 Authentic Action Photos) */}
      <section className="py-20 md:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">On The Ground</span>
              <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">Grassroots Service &amp; Community Building</H2>
              <Paragraph className="text-neutral-600 text-base">
                Volunteers work shoulder-to-shoulder with Nelsons in community parks, cleanup initiatives, and school workshops.
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Photo 1: Orange Farm Eco Park */}
              <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-md group flex flex-col justify-between">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/extra images/Nelson Pproject - Orange Farm Eco Park 1 b.jpg"
                    alt="Orange Farm Eco Park youth initiative led by Nelsons and volunteers"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full inline-block">
                      Township Greening
                    </span>
                    <p className="text-lg font-serif font-bold mt-1">Orange Farm Eco Park Project</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Transforming vacant township spaces into thriving community eco parks, vegetable gardens, and safe play areas for local children.
                  </p>
                </div>
              </div>

              {/* Photo 2: Community Cleanup Outreach */}
              <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-md group flex flex-col justify-between">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/stories/mandela-day-2025-3.png"
                    alt="Volunteers and Nelsons collaborating in community cleanup and distribution"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-0.5 rounded-full inline-block">
                      Civic Outreach
                    </span>
                    <p className="text-lg font-serif font-bold mt-1">Community Field Days</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Partnering on Mandela Day and International Day of Peace to support local waste pickers, clear illegal dumping spots, and paint school classrooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Structured Pathways */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">5 Ways to Contribute</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Volunteer Pathways</H2>
              <p className="text-neutral-600 text-lg">
                Choose the pathway that best matches your professional skills, personal passions, and availability.
              </p>
            </div>

            <div className="space-y-6">
              {pathways.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.num} className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 space-y-4 shadow-sm hover:border-primary-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <H3 className="text-xl font-serif text-neutral-900">{p.title}</H3>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">{p.desc}</p>
                    <ul className="space-y-2 pt-2 border-t border-neutral-200 text-xs text-neutral-600">
                      {p.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Volunteer Application Form */}
      <section id="volunteer-form" className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 text-center">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Get Involved Today</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Sign Up to Volunteer</H2>
              <p className="text-neutral-600 text-base max-w-xl mx-auto">
                Fill out the form below and our team will get in touch to discuss onboarding, volunteer pathways, and upcoming initiatives.
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-green-900 space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold font-serif">Thank You for Volunteering!</h3>
                <p className="text-sm text-green-800 max-w-lg mx-auto">
                  Your interest in supporting the Be a Nelson Movement has been received. Our volunteer coordinator will reach out to you shortly with next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm font-bold text-green-700 underline pt-2 block mx-auto"
                >
                  Submit another form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-sm">
                <input type="hidden" name="_subject" value="New Volunteer Sign-Up" />

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-800 text-sm border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Sipho Ndlovu"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. sipho@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+27 82 123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Preferred Volunteer Pathway *
                    </label>
                    <select
                      name="preferredPathway"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm bg-white"
                    >
                      <option value="">Select a pathway...</option>
                      <option value="Pro Bono Professional Services">Pathway 1: Pro Bono Professional Services</option>
                      <option value="Workshop Facilitation">Pathway 2: Workshop Facilitation &amp; Masterclasses</option>
                      <option value="Governance & Advisory">Pathway 3: Governance Committees &amp; Advisory</option>
                      <option value="Event Logistics">Pathway 4: Event &amp; Expedition Logistics</option>
                      <option value="Community Field Days">Pathway 5: Community Field Days &amp; Mandela Day</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Skills &amp; How You&apos;d Like to Contribute
                  </label>
                  <textarea
                    name="skillsContribution"
                    rows={4}
                    placeholder="Tell us about your professional background, skills, and how you would like to help..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-10"
                  >
                    {status === 'submitting' ? 'Submitting Form...' : 'Submit Volunteer Sign-Up'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
