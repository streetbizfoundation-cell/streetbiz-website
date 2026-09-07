'use client'

import { useState } from 'react'
import Image from 'next/image'
import { H1, H2 } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/icons/SocialIcons'
import Link from 'next/link'

export default function ContactPage() {
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
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        const data = await response.json()
        const errors = data.errors as { message: string }[] | undefined
        setErrorMessage(errors?.map((e) => e.message).join(', ') || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Failed to connect to the server. Please check your internet connection.')
      setStatus('error')
    }
  }

  return (
    <main className="bg-white">
      {/* Narrative Header with Youth Greeting Panoramic Background */}
      <section className="py-24 md:py-32 bg-neutral-950 text-white overflow-hidden relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extra images/Walk 2024 (3).jpg"
            alt="Walk 2024 coastal expedition along the Western Cape trails"
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
              Connection
            </div>
            <H1 className="text-5xl md:text-7xl font-serif leading-tight text-white">
              Let&apos;s start a <br />
              <span className="italic text-primary-400">conversation.</span>
            </H1>
            <p className="text-xl text-neutral-200 leading-relaxed font-light max-w-2xl">
              Whether you want to support the Be a Nelson Movement, partner on a project, join an event, or learn more about StreetBiz, we are here to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Information & Ubuntu Connection Card */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <H2 className="text-3xl md:text-4xl font-serif">Reach out directly</H2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  StreetBiz welcomes partnerships and support from individuals, corporations, universities, mentors, coaches, and the international community.
                </p>
              </div>

              {/* Authentic Ubuntu Connection Photo Card */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
                <Image
                  src="/images/extra images/SafetyNet Nelsons Project Team.jpg"
                  alt="SafetyNet Nelson project team standing together in unity and collaboration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-0.5 rounded-full inline-block">
                    Living Ubuntu
                  </span>
                  <p className="text-base font-serif font-bold mt-1">Relationships of Mutual Dignity &amp; Trust</p>
                </div>
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm border border-neutral-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Email Us</p>
                    <a href="mailto:hello@streetbiz.co.za" className="text-lg font-bold text-neutral-900 hover:text-primary-600 transition-colors">hello@streetbiz.co.za</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm border border-neutral-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Call Us</p>
                    <a href="mailto:hello@streetbiz.co.za" className="text-lg font-bold text-neutral-900 hover:text-primary-600 transition-colors">Request a call by email</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm border border-neutral-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Our Hub</p>
                    <p className="text-base font-bold text-neutral-900 leading-snug">
                      205 Zeezicht, 34 Beach Boulevard<br />
                      Tableview, Cape Town, 7441
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Follow StreetBiz</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Facebook', href: 'https://www.facebook.com/StreetBizFoundation', icon: FacebookIcon },
                    { name: 'Instagram', href: 'https://www.instagram.com/streetbizfoundation/', icon: InstagramIcon },
                    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/streetbiz', icon: LinkedinIcon },
                    { name: 'YouTube', href: 'https://www.youtube.com/@streetbizfoundation8854', icon: YoutubeIcon }
                  ].map(social => {
                    const Icon = social.icon
                    return (
                      <a 
                        key={social.name} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-900 hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-sm border border-neutral-100"
                        aria-label={social.name}
                      >
                        <Icon size={18} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-neutral-50 p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[40px] border border-neutral-200 shadow-sm">
                {status === 'success' ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <H2 className="text-3xl font-serif">Message Sent!</H2>
                    <p className="text-neutral-600 text-lg max-w-sm mx-auto">
                      Thank you for reaching out. A member of the StreetBiz team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-primary-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Full Name</label>
                        <Input name="name" required placeholder="Your name" className="rounded-2xl border-none shadow-inner" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Email Address</label>
                        <Input name="email" type="email" required placeholder="you@example.com" className="rounded-2xl border-none shadow-inner" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Subject</label>
                      <select name="subject" className="w-full h-12 px-4 rounded-2xl bg-white border-none shadow-inner text-base sm:text-sm focus:ring-2 focus:ring-primary-500">
                        <option>General Inquiry</option>
                        <option>Nominate a Nelson</option>
                        <option>Partnership Interest</option>
                        <option>Be a Nelson Walk</option>
                        <option>Mentoring and Coaching</option>
                        <option>Media/Press</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Your Message</label>
                      <textarea 
                        name="message"
                        required
                        placeholder="Tell us more about how you&apos;d like to get involved..."
                        className="w-full min-h-[160px] px-4 py-4 rounded-2xl bg-white border-none shadow-inner text-base sm:text-sm focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm font-medium bg-red-50 p-4 rounded-xl border border-red-100">
                        {errorMessage}
                      </p>
                    )}

                    <Button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 text-base font-semibold rounded-xl group disabled:opacity-70"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'} 
                      {status !== 'submitting' && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Secondary Action */}
      <section className="py-24 bg-white">
        <div className="container text-center">
          <div className="p-12 md:p-24 bg-neutral-900 rounded-[60px] relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <H2 className="text-white text-3xl md:text-5xl font-serif max-w-2xl mx-auto">Want to support the movement immediately?</H2>
              <Link 
                href="/donate" 
                className="inline-block px-8 py-3.5 bg-primary-600 text-white font-semibold text-base rounded-full hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20"
              >
                Donate Now
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-600/20 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  )
}
