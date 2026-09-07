import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Globe, GraduationCap, Handshake, Users, Zap, Sparkles } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { CohortApplicationForm } from '@/components/sections/CohortApplicationForm'

const fitChecks = [
  'You are ready to launch or grow a sustainable social enterprise in your township.',
  'You want mentorship, structure, and accountability rather than a quick certificate.',
  'You are prepared to lead community action and contribute to a wider national movement.',
  'You commit 4–6 hours weekly to attend masterclasses, coaching, and project implementation.',
]

const framework = [
  {
    title: 'Education',
    icon: GraduationCap,
    text: 'Build a business plan, manage a budget, pitch your idea, and validate your market through social entrepreneurship learning and the RebelBase platform.',
  },
  {
    title: 'Exposure',
    icon: Globe,
    text: 'Connect with coaches from the USA and Europe who expand your worldview, challenge your thinking, and support your growth.',
  },
  {
    title: 'Experience',
    icon: Zap,
    text: 'Move from ideas into action through practical community work, peer support, pitching, and implementation.',
  },
]

const journey = [
  'Access to StreetBiz Foundation resources, connectivity, and education.',
  'Membership in the Be a Nelson community of changemakers shaped by Ubuntu, integrity, and resilience.',
  'Global mentorship and 1:1 international coaching.',
  'Peer-to-peer leadership development and collective community action.',
]

export const metadata = {
  title: 'Apply | Be a Nelson 2026 / 2027',
  description: 'Applications are open for the Be a Nelson 1-Year Accelerated Journey for emerging social entrepreneurs and community changemakers.',
}

export default function ApplyPage() {
  return (
    <main>
      {/* Hero Header with Panoramic Youth Leadership Summit Photo */}
      <section className="bg-neutral-950 py-24 md:py-32 text-white relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (105).jpg"
            alt="Young leaders and delegates gathered in inspiration at the Be a Nelson Summit"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-black/60 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-5xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-primary-400" />
              Be a Nelson 2026 / 2027
            </div>
            <H1 className="text-white text-5xl md:text-7xl font-serif leading-tight">
              Do not just join a course. <br />
              <span className="text-primary-400 italic">Join a Movement.</span>
            </H1>
            <Lead className="text-neutral-200 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Applications are open for the Be a Nelson 1-Year Accelerated Journey for emerging youth founders.
            </Lead>
            <Paragraph className="text-neutral-300 text-lg max-w-4xl leading-relaxed">
              Transform from a passionate community volunteer into a proven social entrepreneur and lifelong leader through education, exposure, experience, mentorship, and collective action.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#application-form">
                <Button size="lg" className="rounded-full px-8 py-3.5 text-base font-semibold">
                  Apply for Membership ↓
                </Button>
              </a>
              <Link href="/events">
                <Button variant="ghost" size="lg" className="rounded-full px-8 py-3.5 text-base font-semibold text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm">
                  View 2026 Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 md:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="container">
          <CohortApplicationForm />
        </div>
      </section>

      {/* Who Should Apply with Youth Founder Photo */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Who Should Apply</p>
              <H2 className="text-4xl md:text-5xl font-serif">This is for the doers.</H2>
              <Paragraph className="text-lg text-neutral-600 leading-relaxed">
                This journey is not designed for people looking only for a stipend, a quick certificate, or free data. It is for young people ready to build, serve, and lead their communities.
              </Paragraph>

              <div className="space-y-3 pt-2">
                {fitChecks.map((item) => (
                  <div key={item} className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 items-start">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    <p className="font-medium text-neutral-800 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <Image
                  src="/images/BaN Gauteng Conference 2026/BaN Gauteng Conference 2026  (10).jpg"
                  alt="Young Nelson participant focused and engaged in workshop masterclass"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-0.5 rounded-full inline-block">
                    Candidate Profile
                  </span>
                  <p className="text-lg font-serif font-bold mt-1">Gauteng Cohort Member</p>
                  <p className="text-xs text-neutral-300">Resilient, community-rooted, and driven to create local economic opportunity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-20 md:py-28 bg-neutral-50 border-y border-neutral-100">
        <div className="container max-w-5xl">
          <div className="space-y-4 mb-14 text-center">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Journey</p>
            <H2 className="text-4xl md:text-5xl font-serif">StreetBiz Foundation and Be a Nelson work as one.</H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journey.map((item, index) => (
              <div key={item} className="rounded-2xl bg-white border border-neutral-200 p-6 flex gap-4 shadow-sm">
                {index % 2 === 0 ? <Handshake className="h-6 w-6 text-primary-600 shrink-0" /> : <Users className="h-6 w-6 text-primary-600 shrink-0" />}
                <p className="text-neutral-700 font-medium text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Triple E Framework */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mx-auto mb-14 space-y-4">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Triple E Framework</p>
            <H2 className="text-4xl md:text-5xl font-serif">How potential becomes action</H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {framework.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
                  <Icon className="mb-6 h-8 w-8 text-primary-600" />
                  <H3 className="mb-4 text-2xl font-serif">{item.title}</H3>
                  <Paragraph className="text-neutral-600 text-sm leading-relaxed">{item.text}</Paragraph>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
