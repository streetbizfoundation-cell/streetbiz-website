import Link from 'next/link'
import Image from 'next/image'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { CheckCircle, Users, Target, Rocket, Compass } from 'lucide-react'

const leadership = [
  {
    name: 'Dr Nico de Klerk',
    role: 'Founder & Director',
    image_url: '/images/leadership/nico.png',
    bio: 'Dr Nico de Klerk is a social entrepreneur, public speaker, lecturer, and the founder of StreetBiz Foundation. He led the Long Walk for the Entrepreneurial Mindset and is the author of No Fit: My 1,700-Mile Walk from Apartheid. His work has focused on entrepreneurial mindset development, youth empowerment, and the growth of the Be a Nelson Movement.',
  },
  {
    name: 'Jabulani Zwane',
    role: 'Director',
    image_url: '/images/leadership/jabu.jpg',
    bio: 'Jabulani Zwane is a director of StreetBiz Foundation and a powerful example of the entrepreneurial mindset the organisation is committed to developing. His journey includes building a successful business and serving as vice-president of the Professional Speakers Association of South Africa.',
  },
  {
    name: 'Mahlatse Madisha',
    role: 'Director',
    image_url: '/images/leadership/mahlatse.jpg',
    bio: 'Mahlatse Madisha is a director of StreetBiz Foundation, contributing strategic oversight and mentorship to the organisation’s programmes and leadership development work.',
  },
  {
    name: 'Bafana Binda',
    role: 'Executive Administrator',
    image_url: '/images/leadership/bafana.jpg',
    bio: 'Bafana Binda is the Executive Administrator of StreetBiz Foundation. He supports the operational coordination of the organisation and serves as a key point of contact for logistics, follow-up, and programme administration.',
  },
]

const milestones = [
  { year: '2017', event: 'StreetBiz Foundation founded.' },
  { year: '2018', event: 'Long Walk for the Entrepreneurial Mindset across South Africa.' },
  { year: '100+', event: 'township communities reached through the walk.' },
  { year: '200', event: 'high schools engaged through the walk.' },
  { year: '2022', event: 'First Be a Nelson Conference.' },
  { year: '2024', event: 'MasterPeace South Africa Walk in the Western Cape Coastal region.' },
  { year: '73', event: 'young changemakers supported across OSUN Social Entrepreneurship and Leading Change for Sustainability cohorts.' },
  { year: '6', event: 'provinces represented in initiative project implementation (GP, FS, MP, WC, EC, KZN).' },
]

export const metadata = {
  title: 'About StreetBiz Foundation | Developing Entrepreneurial Mindsets',
  description: 'Learn about our journey from a 2,750km walk to a national movement of young changemakers across South Africa.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Intro */}
      <section className="bg-neutral-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black/40 to-neutral-900 opacity-90" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-5xl">
            <p className="text-primary-500 font-bold tracking-[0.3em] uppercase mb-4">Foundation Overview</p>
            <H1 className="text-white mb-8 leading-tight">About StreetBiz Foundation</H1>
            <Lead className="text-white/90 text-2xl md:text-3xl font-light leading-relaxed max-w-4xl">
              StreetBiz Foundation is a South African nonprofit dedicated to developing the entrepreneurial mindset of young people and expanding access to the opportunities that help them grow.
            </Lead>
            <Paragraph className="mt-8 text-neutral-400 text-xl max-w-3xl">
              At the centre of our work is the Be a Nelson Movement — our flagship initiative for developing young changemakers inspired by Nelson Mandela’s legacy.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Identity</h2>
              <H2 className="text-4xl md:text-5xl font-serif">Who We Are</H2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p className="font-bold text-neutral-900 text-xl italic">
                  We believe that talent is everywhere, but access is not.
                </p>
                <p>
                  Across South Africa, too many young people are underestimated by systems that fail to recognise their potential. StreetBiz Foundation exists to help change that by creating pathways for leadership, growth, and social entrepreneurship.
                </p>
                <p>
                  Founded in 2017, StreetBiz Foundation focuses on entrepreneurial mindset development, youth empowerment, and access to meaningful opportunities. Our work brings together learning, coaching, conferences, competitions, experiential journeys, and community engagement to help young people grow in confidence, purpose, and impact.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-neutral-50 p-12 rounded-3xl border border-neutral-100 shadow-xl">
                 <Target className="h-12 w-12 text-primary-600 mb-8" />
                 <H3 className="text-2xl mb-4">Our Focus</H3>
                 <ul className="space-y-4">
                   {[
                     'Entrepreneurial Mindset',
                     'Youth Empowerment',
                     'Access to Opportunity',
                     'Leadership Pathways'
                   ].map((item) => (
                     <li key={item} className="flex gap-3 items-center text-neutral-700 font-medium">
                       <CheckCircle className="h-5 w-5 text-primary-500" />
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story (The Long Walk) */}
      <section className="py-24 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500">History & Origins</h2>
              <H2 className="text-white text-4xl md:text-6xl font-serif">Our Story</H2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6 text-xl text-neutral-400 font-light leading-relaxed">
                <p>
                  The story of StreetBiz Foundation is inseparable from the Long Walk for the Entrepreneurial Mindset. In 2018, Dr Nico de Klerk walked 1,700 miles (2,750 km) across South Africa, visiting 100+ township communities and 200 high schools.
                </p>
                <p className="text-white font-medium italic border-l-4 border-primary-500 pl-8">
                  That journey revealed both the scale of the challenge and the depth of the opportunity: immense potential exists among young people in South Africa’s township communities.
                </p>
              </div>
              <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                <p>
                  From that insight, the Be a Nelson Movement was born. The movement later took shape as a national network, and the first Be a Nelson Conference was held in 2022.
                </p>
                <p>
                  Since then, StreetBiz Foundation has continued to expand its work through courses, coaching, conferences, community engagement, and international learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are Building */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-primary-50 rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                    <Users className="h-8 w-8 text-primary-600 mb-4" />
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Community</p>
                  </div>
                  <div className="aspect-square bg-neutral-900 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-white">
                    <Rocket className="h-8 w-8 text-primary-400 mb-4" />
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Momentum</p>
                  </div>
                  <div className="col-span-2 aspect-[2/1] bg-primary-600 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-white">
                    <Compass className="h-8 w-8 text-white mb-4" />
                    <p className="text-lg font-serif italic">&ldquo;Think entrepreneurially, lead with courage.&rdquo;</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Vision</h2>
                <H2 className="text-4xl md:text-5xl font-serif">What We Are Building</H2>
                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    StreetBiz Foundation is building a movement of young changemakers who can think entrepreneurially, lead with courage, and make meaningful contributions in their communities.
                  </p>
                  <p>
                    Our work includes workshops, conferences, competitions, bootcamps, nature walks, coaching, and access to online higher education opportunities that support both personal and professional development.
                  </p>
                  <p className="font-bold text-neutral-900">
                    A recent initiative supported 73 participants across all course cohorts in the social entrepreneurship and Leading Change for Sustainability programmes, reaching six South African provinces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 md:py-32 bg-neutral-50 border-y border-neutral-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Team</h2>
            <H2 className="text-4xl md:text-5xl">Leadership</H2>
            <Paragraph className="text-lg text-neutral-600">
              StreetBiz Foundation is led by a team committed to the vision, growth, and integrity of the organisation.
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {leadership.map((member) => (
              <div key={member.name} className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col sm:flex-row gap-8 items-start">
                <div className="relative w-full sm:w-40 h-52 shrink-0 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-md">
                  <Image
                    src={member.image_url}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <H3 className="text-2xl font-serif">{member.name}</H3>
                    <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                  <Paragraph className="text-neutral-600 leading-relaxed italic text-sm">
                    {member.bio}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3 space-y-6">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Timeline</h2>
                <H2 className="text-4xl font-serif leading-tight">Milestones</H2>
                <Paragraph className="text-neutral-500 italic">
                  A journey of steady growth and deepening impact across South Africa.
                </Paragraph>
              </div>
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 gap-6">
                  {milestones.map((item, index) => (
                    <div key={index} className="flex gap-8 items-start border-b border-neutral-100 pb-6 group">
                      <span className="text-3xl font-serif font-bold text-primary-200 group-hover:text-primary-600 transition-colors w-24 shrink-0">
                        {item.year}
                      </span>
                      <p className="text-neutral-700 text-lg font-medium leading-tight pt-2">
                        {item.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-24 md:py-32 bg-neutral-900 text-white">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500">Our Motivation</h2>
              <H2 className="text-white text-4xl md:text-6xl font-serif leading-tight italic">What Drives Us</H2>
            </div>
            <div className="space-y-8 text-xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto">
              <p>
                StreetBiz Foundation is driven by the belief that South Africa’s future depends on young people who are equipped to think differently, lead boldly, and act with purpose.
              </p>
              <p className="text-white font-medium">
                We are committed to building a future in which more young people have access to the opportunities, support, and relationships they need to grow into leaders and changemakers.
              </p>
              <p>
                The Be a Nelson Movement is how that commitment becomes visible — in real lives, real communities, and real possibilities taking shape across South Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 bg-primary-600 relative overflow-hidden">
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <H2 className="text-white text-5xl md:text-7xl font-serif leading-tight">Join the Story</H2>
            <Paragraph className="text-primary-50/90 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              StreetBiz Foundation continues to grow the Be a Nelson Movement as a platform for leadership, entrepreneurial mindset, and youth-led social impact. We invite you to walk with us.
            </Paragraph>
            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/nelsons">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 px-12 py-8 text-xl rounded-full border-none shadow-2xl w-full md:w-auto">
                  Meet the Nelsons
                </Button>
              </Link>
              <Link href="/stories">
                <Button size="lg" className="bg-primary-800 text-white hover:bg-primary-900 px-12 py-8 text-xl rounded-full border-none shadow-2xl w-full md:w-auto">
                  View Our Impact
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
