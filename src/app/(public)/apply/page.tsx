import Link from 'next/link'
import { CheckCircle, Globe, GraduationCap, Handshake, Route, Users, Zap } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'

const fitChecks = [
  'You are ready to launch or grow a sustainable social enterprise.',
  'You want mentorship, structure, and accountability rather than a quick certificate.',
  'You are prepared to lead community action and contribute to a wider movement.',
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
  'Global mentorship and coaching.',
  'Peer-to-peer leadership development and collective community action.',
]

export const metadata = {
  title: 'Apply | Be a Nelson 2026',
  description: 'Applications are open for the Be a Nelson 1-Year Accelerated Journey for emerging social entrepreneurs and community changemakers.',
}

export default function ApplyPage() {
  return (
    <main className="overflow-hidden">
      <section className="bg-neutral-900 py-24 md:py-32 text-white">
        <div className="container">
          <div className="max-w-5xl space-y-8">
            <p className="text-primary-500 font-bold tracking-[0.3em] uppercase">Be a Nelson 2026</p>
            <H1 className="text-white leading-tight">Do not just join a course. Join a Movement.</H1>
            <Lead className="text-white/90 text-2xl md:text-3xl">
              Applications are open for the Be a Nelson 1-Year Accelerated Journey.
            </Lead>
            <Paragraph className="text-neutral-300 text-xl max-w-4xl">
              Transform from a volunteer into a proven social entrepreneur and lifelong leader through education, exposure, experience, mentorship, and community action.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10 py-7 text-lg">
                  Apply for Membership
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="ghost" size="lg" className="rounded-full px-10 py-7 text-lg text-white border border-white/30 hover:bg-white/10">
                  View 2026 Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Who Should Apply</p>
              <H2 className="text-4xl md:text-5xl font-serif">This is for the doers.</H2>
              <Paragraph className="text-lg text-neutral-600">
                This journey is not designed for people looking only for a stipend, a quick certificate, or free data. It is for people ready to build, serve, and lead.
              </Paragraph>
            </div>
            <div className="space-y-4">
              {fitChecks.map((item) => (
                <div key={item} className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary-600" />
                  <p className="font-medium text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutral-50 border-y border-neutral-100">
        <div className="container">
          <div className="max-w-4xl space-y-6 mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Journey</p>
            <H2 className="text-4xl md:text-5xl font-serif">StreetBiz Foundation and Be a Nelson work as one.</H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journey.map((item, index) => (
              <div key={item} className="rounded-lg bg-white border border-neutral-200 p-6 flex gap-4">
                {index % 2 === 0 ? <Handshake className="h-6 w-6 text-primary-600 shrink-0" /> : <Users className="h-6 w-6 text-primary-600 shrink-0" />}
                <p className="text-neutral-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-6">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Triple E Framework</p>
            <H2 className="text-4xl md:text-5xl font-serif">How potential becomes action</H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {framework.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-lg border border-neutral-200 bg-neutral-50 p-8">
                  <Icon className="mb-6 h-8 w-8 text-primary-600" />
                  <H3 className="mb-4 text-2xl font-serif">{item.title}</H3>
                  <Paragraph className="text-neutral-600">{item.text}</Paragraph>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-100">Also Open</p>
              <H2 className="text-white text-4xl md:text-5xl font-serif">South Africa Adventure 2026</H2>
              <Paragraph className="text-primary-50/90 text-lg">
                From 6-15 October 2026, 15 international adventurers and 15 local Nelsons will share a Western Cape journey of guided coastal hiking, connection, growth, and social impact.
              </Paragraph>
            </div>
            <div className="rounded-lg bg-primary-700 p-8 space-y-5">
              <div className="flex gap-4">
                <Route className="h-6 w-6 shrink-0 text-primary-100" />
                <p className="font-medium">10 days in the Western Cape, South Africa.</p>
              </div>
              <div className="flex gap-4">
                <Users className="h-6 w-6 shrink-0 text-primary-100" />
                <p className="font-medium">Each participant sponsors one Nelson to join the expedition.</p>
              </div>
              <Link href="/contact" className="inline-block pt-4">
                <Button className="rounded-full bg-white text-primary-600 hover:bg-primary-50">
                  Enquire About the Adventure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
