import Link from 'next/link'
import Image from 'next/image'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { CheckCircle, GraduationCap, Network, Zap } from 'lucide-react'

const metrics = [
  { label: '120 Nelsons impacted to date', value: '120' },
  { label: '100+ township communities reached', value: '100+' },
  { label: '200 high schools engaged', value: '200' },
  { label: '73 participants across all course cohorts', value: '73' },
  { label: '6 provinces represented', value: '6' },
]

const tripleE = [
  {
    title: 'Education',
    icon: GraduationCap,
    description: 'We create access to learning that expands thinking, builds entrepreneurial mindset, and equips young people with tools for leadership and social innovation.',
    details: 'This includes structured courses, training opportunities, mentorship, and access to new ways of seeing themselves and the world around them.',
  },
  {
    title: 'Experience',
    icon: Zap,
    description: 'We believe growth happens when learning becomes lived experience.',
    details: 'Through conferences, bootcamps, coaching, community projects, leadership journeys, and practical engagement, young people develop confidence, resilience, initiative, and the ability to turn ideas into action.',
  },
  {
    title: 'Exposure',
    icon: Network,
    description: 'Exposure changes mindsets.',
    details: 'The movement creates opportunities for young people to connect beyond the limits of their immediate environment — through networks, collaboration, global learning opportunities, new relationships, and transformational experiences that broaden vision, unlock ambition, and open new possibilities.',
  },
]

const supportPossibilities = [
  'access to entrepreneurship and leadership learning',
  'sponsored participation for Nelsons in courses and conferences',
  'laptops, digital access, and data for online learning',
  'coaching, mentorship, and personal development support',
  'implementation of community-led projects',
  'monitoring, evaluation, and storytelling that help us measure and grow impact',
]

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-screen pb-24 flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* No dark overlay - 0% transparency */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/brand/hero_cover_pic.jpg"
              alt="StreetBiz Foundation Hero"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="container relative z-30 text-center pt-16 sm:pt-20 lg:pt-28">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-4">
              <p className="text-primary-500 font-bold tracking-[0.3em] uppercase animate-fade-in drop-shadow-lg">
                StreetBiz Foundation
              </p>
              <H1 className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-tight drop-shadow-2xl">
                Be a Nelson <span className="italic text-primary-400">Movement</span>
              </H1>
              <Lead className="text-white text-2xl md:text-3xl font-medium max-w-5xl mx-auto drop-shadow-xl">
                Equipping young South Africans to lead change through entrepreneurship, learning, and community action.
              </Lead>
            </div>
            
            <Paragraph className="text-white/80 max-w-4xl mx-auto text-lg md:text-xl font-light drop-shadow-md">
              The Be a Nelson Movement is the flagship initiative of StreetBiz Foundation — building a growing network of young changemakers inspired by Nelson Mandela’s legacy and equipped to create impact in their communities.
            </Paragraph>

            <Paragraph className="text-white/90 max-w-4xl mx-auto text-base md:text-lg font-medium drop-shadow-md">
              Coming 14–15 July 2026 at Ganzekraal Coastal Resort, Western Cape: the Be a Nelson Conference brings together young leaders, changemakers, and community builders for two days of learning, connection, and action.
            </Paragraph>
            <Paragraph className="text-white/90 max-w-4xl mx-auto text-base md:text-lg font-medium drop-shadow-md">
              Coming 6–15 October 2026: the Be a Nelson Adventure Walk in South Africa, a 10-day Western Cape journey where adventure and impact move together.
            </Paragraph>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Link href="/apply">
                <Button size="lg" className="px-8 py-5 sm:px-12 sm:py-8 text-lg sm:text-xl rounded-full shadow-2xl shadow-primary-600/20 bg-primary-500 hover:bg-primary-600 border-none">
                  Apply Now
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" className="px-8 py-5 sm:px-12 sm:py-8 text-lg sm:text-xl rounded-full shadow-2xl shadow-primary-600/20 bg-white text-primary-600 hover:bg-primary-50 border-none">
                  Donate
                </Button>
              </Link>
              <Link href="/stories">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 px-8 py-5 sm:px-12 sm:py-8 text-lg sm:text-xl rounded-full border border-white/30 backdrop-blur-sm">
                  View Our Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS STRIP */}
      <section className="bg-primary-600 py-12 border-y border-primary-500/30">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest lg:w-1/4">Impact at a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:w-3/4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center lg:text-left border-l border-white/20 pl-6">
                  <p className="text-white text-sm font-medium leading-tight opacity-90">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT THE MOVEMENT IS */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Identity</h2>
              <H2 className="text-4xl md:text-6xl font-serif leading-tight">A Movement for Young Changemakers</H2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  The Be a Nelson Movement exists to help young people move from survival thinking to leadership, entrepreneurship, and action. Rooted in Nelson Mandela’s legacy, the movement identifies, develops, and supports young people with the courage and potential to make a difference where they live.
                </p>
                <p className="font-bold text-neutral-900 text-xl italic">
                  This is not just a programme. It is a pathway. A network. A platform for growth.
                </p>
                <p>
                  Through the movement, young people gain access to learning, guidance, real-world opportunities, and meaningful relationships that strengthen their confidence and expand what they believe is possible.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-primary-100 flex items-center justify-center p-12 text-center">
                   <p className="text-primary-900 font-serif italic text-3xl md:text-4xl leading-relaxed">
                     &ldquo;A growing network of young changemakers inspired by Nelson Mandela&apos;s legacy.&rdquo;
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY IT MATTERS */}
      <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500">The Challenge</h2>
              <H2 className="text-white text-4xl md:text-6xl font-serif">Why This Matters</H2>
            </div>
            <div className="space-y-8 text-xl text-neutral-400 font-light leading-relaxed">
              <p>
                Too many young people in South Africa are growing up with talent, drive, and ideas, but without the access, support, and opportunities needed to flourish.
              </p>
              <p className="text-white font-medium">
                The Be a Nelson Movement responds to that challenge by investing in mindset, leadership, entrepreneurial thinking, and practical opportunity. We believe that when young people are given the right environment to grow, they do not only change their own lives — they help transform their communities.
              </p>
              <p>
                For donors and partners, this is an opportunity to invest in youth-led change that is practical, values-driven, and built for long-term impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW THE MOVEMENT WORKS */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-5xl mx-auto mb-20 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Strategy</h2>
            <H2 className="text-4xl md:text-5xl">How the Movement Works: The Triple E Framework</H2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tripleE.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="group p-10 rounded-3xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:border-primary-200 hover:shadow-2xl transition-all duration-500">
                  <div className="h-16 w-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-8 w-8 text-primary-600 group-hover:text-white" />
                  </div>
                  <H3 className="mb-4 text-3xl font-serif">{index + 1}) {item.title}</H3>
                  <Paragraph className="text-neutral-900 font-medium mb-4">{item.description}</Paragraph>
                  <Paragraph className="text-neutral-500 text-sm italic">{item.details}</Paragraph>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION: WHAT SUPPORT MAKES POSSIBLE */}
      <section className="py-32 bg-neutral-50 border-y border-neutral-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Direct Impact</h2>
              <H2 className="text-4xl md:text-5xl font-serif leading-tight">What Your Support Makes Possible</H2>
              <Paragraph className="text-lg text-neutral-600">
                When you fund the Be a Nelson Movement, you help young people cross the threshold from potential to action.
              </Paragraph>
            </div>
            <div className="grid gap-4">
              {supportPossibilities.map((text, index) => (
                <div key={index} className="flex gap-4 p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm items-start">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary-600" />
                  </div>
                  <p className="text-neutral-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EVIDENCE OF MOMENTUM */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Origins</h2>
              <H2 className="text-4xl md:text-5xl font-serif">From Vision to Movement</H2>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
                <p>
                  The Be a Nelson Movement grew out of the Long Walk for the Entrepreneurial Mindset — a journey that reached more than 100 township communities and included workshops at 200 high schools.
                </p>
                <p>
                  That journey helped shape a national network of young leaders and gave rise to the first Be a Nelson Conference in 2022.
                </p>
                <p className="font-medium text-neutral-900">
                  Today, the movement continues to grow through learning opportunities, community engagement, leadership development, and practical support for young changemakers across South Africa.
                </p>
              </div>
            </div>
            <div className="w-64 h-64 shrink-0 rounded-full border-4 border-dashed border-primary-300 flex items-center justify-center p-8 text-center animate-pulse-slow">
              <p className="text-primary-600 font-bold uppercase tracking-widest text-sm">Growing Stronger Every Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE NELSONS */}
      <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500">The People</h2>
              <H2 className="text-white text-4xl md:text-6xl font-serif italic">Meet the Nelsons</H2>
            </div>
            <div className="space-y-8 text-xl text-neutral-400 font-light leading-relaxed">
              <p>
                At the center of this movement are young people with ideas, courage, and untapped potential.
              </p>
              <p className="text-white font-medium">
                We call them the Nelsons — young changemakers committed to growth, leadership, and making a meaningful contribution in their communities.
              </p>
              <p>
                Each Nelson represents more than an individual success story. Together, they represent a new generation of grassroots leadership in South Africa.
              </p>
            </div>
            <div className="pt-8">
              <Link href="/nelsons">
                <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-primary-50 px-12 py-8 text-xl rounded-full border-none shadow-2xl">
                  Meet the Nelsons
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY PARTNER WITH US */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Strategic Alignment</h2>
              <H2 className="text-4xl md:text-6xl font-serif">Why Partner with the Movement</H2>
            </div>
            <div className="space-y-8 text-xl text-neutral-600 leading-relaxed text-left max-w-4xl mx-auto">
              <p>
                When you partner with <strong>StreetBiz Foundation</strong>, you invest in a movement that is practical, grounded, and ready to grow. Through the <strong>Be a Nelson Movement</strong>, we support young changemakers with access to learning, leadership development, mentorship, and real-world opportunities that strengthen communities from the ground up.
              </p>
              <p>
                We also understand that strong partnerships require trust, accountability, and the right compliance structures in place.
              </p>
              <p className="font-bold text-neutral-900">
                StreetBiz Foundation holds a Section 18A certificate and is Public Benefit Organisation (PBO) compliant, enabling South African donors to claim a tax benefit where applicable.
              </p>
              <p>
                <strong>International partners and donors</strong> have the PayPal option or to donate locally with trusted nonprofit partners with MOU’s with StreetBiz:
              </p>
              <ul className="list-disc pl-8 space-y-3 text-neutral-600">
                <li>
                  <strong>U.S.A:</strong> we will gladly provide details of our partner 501(c)(3) organisation
                </li>
                <li>
                  <strong>Europe:</strong> we have more than one partner in Europe to donate for StreetBiz. We will gladly provide details if preferred instead of the PayPal option on the website.
                </li>
              </ul>
              <p>
                This means partners can support the movement with greater confidence, clarity, and alignment to their own donation and compliance requirements.
              </p>
            </div>
            <div className="mt-10 rounded-3xl border border-primary-200 bg-primary-50 px-8 py-8 text-center">
              <p className="text-sm uppercase tracking-[0.3em] font-bold text-primary-600 mb-4">Funding-ready and partnership-ready</p>
              <p className="text-lg font-semibold text-neutral-900">
                Section 18A certified | PBO compliant | International partnership pathways available for U.S. and European donors*
              </p>
              <p className="mt-4 text-sm text-neutral-600 italic">
                *Details shared on request, including relevant partner organisations and giving pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-primary-600 relative overflow-hidden">
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <H2 className="text-white text-5xl md:text-7xl font-serif leading-tight italic">Help Build the Next Generation of Nelsons</H2>
            <Paragraph className="text-primary-50/90 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Young people do not need more speeches about potential. They need access, support, and real opportunities to grow. Partner with us to expand the Be a Nelson Movement, deepen our impact, and help more young changemakers rise.
            </Paragraph>
            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/donate">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 px-12 py-8 text-xl rounded-full border-none shadow-2xl w-full md:w-auto">
                  Donate
                </Button>
              </Link>
              <Link href="/partners">
                <Button size="lg" className="bg-primary-800 text-white hover:bg-primary-900 px-12 py-8 text-xl rounded-full border-none shadow-2xl w-full md:w-auto">
                  Partner With Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 px-12 py-8 text-xl rounded-full border border-white/40 w-full md:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
