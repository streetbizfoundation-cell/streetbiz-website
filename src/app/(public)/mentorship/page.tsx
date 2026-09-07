'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users2,
  Clock,
  Globe2,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Sparkles,
} from 'lucide-react'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'

export default function MentorshipPage() {
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
      {/* Hero Section with Dolphins Network Panoramic Backdrop */}
      <section className="bg-neutral-950 py-24 md:py-32 text-white relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/dolphins.png"
            alt="Dolphins Mentorship Network branding and international coaching atmosphere"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-black/70 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <Users2 className="w-4 h-4 text-primary-400" />
              Dolphins Mentorship Network
            </div>
            <H1 className="text-white text-4xl md:text-6xl font-serif leading-tight">
              &ldquo;You Can&apos;t Be What <span className="text-primary-400 italic">You Can&apos;t See&rdquo;</span>
            </H1>
            <Lead className="text-neutral-200 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              Pairing emerging South African township changemakers (&quot;Nelsons&quot;) with global executives, entrepreneurs, and advisors (&quot;Dolphins&quot;) for transformative 1:1 mentorship.
            </Lead>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#apply">
                <Button size="lg" className="rounded-full px-8">
                  Apply to Become a Dolphin Mentor
                </Button>
              </a>
              <Link href="/nelsons">
                <Button variant="ghost" size="lg" className="rounded-full px-8 text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm">
                  Meet the Nelsons
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Overview & 1:1 Coaching Feature Card */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Philosophy</p>
              <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">
                Intentional 1:1 Coaching for Grassroots Innovators
              </H2>
              <Paragraph className="text-neutral-600 text-lg leading-relaxed">
                The <strong>Dolphins Mentorship Network</strong> pairs emerging grassroots youth leaders (&quot;Nelsons&quot;) from South African townships with experienced international and local professionals, entrepreneurs, and executives (&quot;Dolphins&quot;) across Europe, North America, and South Africa.
              </Paragraph>
              <Paragraph className="text-neutral-600 text-lg leading-relaxed">
                Rather than top-down lectures, the Dolphins program provides an intentional 1:1 coaching relationship. Mentors act as sounding boards, strategic advisors, and champions of mindset development, helping young changemakers navigate the practical realities of launching and scaling community social enterprises.
              </Paragraph>

              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-3">
                <div className="flex items-center gap-2 text-primary-600 font-bold uppercase tracking-wider text-xs">
                  <Globe2 className="w-4 h-4" />
                  Global Matching Philosophy
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  We match mentors based on mutual interests, venture focus (e.g. green economy, digital literacy, community retail, arts), and leadership aspirations—ensuring high alignment and long-term personal rapport.
                </p>
              </div>
            </div>

            {/* Visual Photo Card: Nelson and Dolphin Mentor */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <Image
                  src="/images/stories/from-ngobozana-to-the-world-2.jpg"
                  alt="Nelson mentee and European dolphin mentor smiling warmly together"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-3 py-1 rounded-full inline-block">
                    Mentorship in Action
                  </span>
                  <p className="text-xl font-serif font-bold text-white">
                    Walking the Journey Together
                  </p>
                  <p className="text-xs text-neutral-300">
                    Deep personal trust and strategic coaching bridging continents and cultures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 3-Month Coaching Structure & Virtual Sessions Visual */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-14">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Structured Commitment</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">The 3-Month Coaching Structure</H2>
              <p className="text-neutral-600 text-lg">
                Designed for high impact with manageable time investment for busy global professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <H3 className="text-xl font-serif text-neutral-900">Bi-Weekly Virtual Calls</H3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Two 60-minute virtual coaching calls per month via Zoom or Google Meet focusing on enterprise strategy, budgeting, and milestone reviews.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <H3 className="text-xl font-serif text-neutral-900">Weekly Check-Ins</H3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Brief weekly WhatsApp voice notes or text messages for lightweight accountability, rapid problem-solving, and continuous encouragement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <H3 className="text-xl font-serif text-neutral-900">3–4 Hours / Month Total</H3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  A compact, highly focused commitment yielding deep personal transformation for both mentor and mentee over a 90-day sprint.
                </p>
              </div>
            </div>

            {/* Virtual Coaching Banner: Authentic Mentorship Call */}
            <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
              <Image
                src="/images/stories/from-strangers-to-family.jpg"
                alt="Nelson participant in virtual mentorship coaching session with global mentor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1200px) 100vw, 1152px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1 max-w-xl">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-3 py-1 rounded-full inline-block">
                    Connected Across Continents
                  </span>
                  <p className="text-xl font-serif font-bold text-white">
                    Digital Connectivity Unlocking Global Mentorship
                  </p>
                  <p className="text-xs text-neutral-300">
                    Virtual coaching calls enabled by StreetBiz data bundles and dedicated community digital spaces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mentor Toolkit & Guidelines */}
      <section className="py-20 md:py-28 bg-white border-y border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Equipping Mentors</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">The Dolphin Mentor Toolkit</H2>
              <p className="text-neutral-600 text-lg">
                We provide complete onboarding, structured frameworks, and ongoing support so you can mentor with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-4">
                <div className="flex items-center gap-3 text-primary-700 font-bold">
                  <BookOpen className="w-5 h-5" />
                  <span>Onboarding &amp; Curriculum Alignment</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Mentors receive a comprehensive orientation to the Be a Nelson curriculum, the RebelBase social enterprise modeling tools, and our Appreciative Inquiry coaching philosophy.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-4">
                <div className="flex items-center gap-3 text-primary-700 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Safeguarding &amp; Ethical Guidelines</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Clear boundaries, safeguarding policies, and cultural sensitivity protocols ensure a safe, respectful, and empowering space for all participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Application Form Section with In-Person Dialogue Image */}
      <section id="apply" className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Join the Network</p>
                <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Apply to Become a Dolphin Mentor</H2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Complete the intake form below. Our mentorship team will review your background and connect with you for our next cohort pairing.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-neutral-200 group">
                  <Image
                    src="/images/extra images/Dolphin Mentors Group Picture.jpg"
                    alt="Dolphin Mentors coaches group photo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary-400">Global Coaches</p>
                    <p className="text-sm font-serif font-bold">Dolphin Mentors Cohort</p>
                  </div>
                </div>
              </div>
            </div>

            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-green-900 space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold font-serif">Thank You for Applying!</h3>
                <p className="text-sm text-green-800 max-w-lg mx-auto">
                  Your application to join the Dolphins Mentorship Network has been received. Our team will review your profile and contact you regarding onboarding and mentee matching.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm font-bold text-green-700 underline pt-2 block mx-auto"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-sm">
                <input type="hidden" name="_subject" value="New Dolphin Mentor Application" />

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-800 text-sm border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Sarah van der Merwe"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+31 6 12345678 / +27 82 123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                    />
                  </div>

                  {/* LinkedIn Profile */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      LinkedIn Profile URL *
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      required
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Location & Time Zone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Location &amp; Time Zone *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. Amsterdam (CET / UTC+1)"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                    />
                  </div>

                  {/* Professional Expertise */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Primary Area of Expertise *
                    </label>
                    <input
                      type="text"
                      name="expertise"
                      required
                      placeholder="e.g. Financial Strategy, Marketing, Tech, Operations"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                    />
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Why would you like to mentor a Nelson? *
                  </label>
                  <textarea
                    name="motivation"
                    required
                    rows={4}
                    placeholder="Tell us about your background and what inspires you to coach emerging youth leaders in South Africa..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-base sm:text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-10"
                  >
                    {status === 'submitting' ? 'Submitting Application...' : 'Submit Mentor Application'}
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
