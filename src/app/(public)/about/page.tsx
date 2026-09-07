import Link from 'next/link'
import Image from 'next/image'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { CheckCircle, Target, Sparkles, Compass } from 'lucide-react'

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
  { year: '100+', event: 'Township communities reached through the walk.' },
  { year: '200', event: 'High schools engaged through the walk.' },
  { year: '2022', event: 'First Be a Nelson Conference held.' },
  { year: '2024', event: 'MasterPeace South Africa Walk in the Western Cape Coastal region.' },
  { year: '2023–2026', event: '73 young changemakers completed Democratizing Innovation Institute Social Entrepreneurship and Leading Change for Sustainability cohorts.' },
  { year: '6', event: 'Provinces represented in initiative project implementation (GP, FS, MP, WC, EC, KZN).' },
]

export const metadata = {
  title: 'Our Story & Mission | StreetBiz Foundation',
  description: 'Learn about our journey from a 1,700-mile walk to a national movement of young changemakers across South Africa.',
}

export default function AboutPage() {
  return (
    <main>
      {/* 1. HERO INTRO WITH PANORAMIC TRAIL BACKGROUND */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-neutral-950 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/masterpeace-walk-nature.jpg"
            alt="Young changemakers walking together along the South African coastal trail"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Rich multi-stop dark scrim overlay for razor-sharp typography readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/65 to-black/50 z-10" />
        </div>

        <div className="container relative z-20 text-white">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/40 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary-300">
                Foundation Overview
              </span>
            </div>

            <H1 className="text-white text-4xl sm:text-6xl md:text-7xl font-serif leading-tight">
              Our Story &amp; <span className="italic text-primary-400">Mission</span>
            </H1>

            <Lead className="text-white/95 text-2xl md:text-3xl font-light leading-relaxed">
              StreetBiz Foundation is a South African nonprofit dedicated to developing the entrepreneurial mindset of young people and expanding access to the opportunities that help them grow.
            </Lead>

            <Paragraph className="text-neutral-300 text-lg md:text-xl font-light max-w-3xl leading-relaxed pt-2">
              At the centre of our work is the <strong className="text-white font-medium">Be a Nelson Movement</strong> — our flagship initiative for developing young changemakers inspired by Nelson Mandela’s legacy.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (Collaborative Conference Learning Workshop) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text & Values */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Identity</h2>
                <H2 className="text-4xl md:text-5xl font-serif leading-tight">Who We Are</H2>
              </div>

              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p className="font-bold text-neutral-900 text-2xl font-serif italic border-l-4 border-primary-500 pl-6">
                  “We believe that talent is everywhere, but access is not.”
                </p>
                <p>
                  Across South Africa, too many young people are underestimated by systems that fail to recognise their potential. StreetBiz Foundation exists to help change that by creating pathways for leadership, growth, and social entrepreneurship.
                </p>
                <p>
                  Founded in 2017, StreetBiz Foundation focuses on entrepreneurial mindset development, youth empowerment, and access to meaningful opportunities. Our work brings together learning, coaching, conferences, competitions, experiential journeys, and community engagement to help young people grow in confidence, purpose, and impact.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Photo Card + Focus Badges */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <Image
                  src="/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (86).jpg"
                  alt="Young leaders participating attentively in an interactive Be a Nelson conference session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-3 py-1 rounded-full inline-block">
                    Inspiration in Action
                  </span>
                  <p className="text-lg font-serif font-bold text-white mt-1">
                    Equipping Youth with Collaborative Confidence
                  </p>
                </div>
              </div>

              {/* 4 Pillars Card */}
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200/80 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-primary-700">
                  <Target className="h-5 w-5 text-primary-600" />
                  <span className="text-xs font-bold uppercase tracking-widest">Core Focus Areas</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Entrepreneurial Mindset',
                    'Youth Empowerment',
                    'Access to Opportunity',
                    'Leadership Pathways',
                  ].map((item) => (
                    <div key={item} className="flex gap-2.5 items-center text-neutral-800 font-medium text-sm">
                      <CheckCircle className="h-4 w-4 text-primary-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY (Township Streets During The 1,700-Mile Long Walk) */}
      <section className="py-24 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Historical Narrative */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500">History &amp; Origins</h2>
                <H2 className="text-white text-4xl md:text-6xl font-serif">Our Story</H2>
              </div>

              <div className="space-y-6 text-lg text-neutral-300 font-light leading-relaxed">
                <p>
                  The story of StreetBiz Foundation is inseparable from the <strong className="text-white font-medium">Long Walk for the Entrepreneurial Mindset</strong>. In 2018, Dr Nico de Klerk walked 1,700 miles (2,750 km) across South Africa, visiting 100+ township communities and 200 high schools.
                </p>
                <p className="text-white font-medium italic border-l-4 border-primary-500 pl-6 text-xl leading-relaxed">
                  That journey revealed both the scale of the challenge and the depth of the opportunity: immense potential exists among young people in South Africa’s township communities.
                </p>
                <p>
                  From that insight, the Be a Nelson Movement was born. The movement later took shape as a national network, and the first Be a Nelson Conference was held in 2022. Since then, StreetBiz Foundation has continued to expand its work through courses, coaching, conferences, community engagement, and international learning opportunities.
                </p>
              </div>
            </div>

            {/* Right Column: Authentic Long Walk Photo in Township Street */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group">
                <Image
                  src="/images/extra images/Long Walk 2018 -  Friends everywhere. Here in Khayalitsha long walk.jpg"
                  alt="Dr. Nico de Klerk connecting with youth on the street in Khayelitsha during the 1,700-mile Long Walk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-3 py-1 rounded-full inline-block">
                    2,750 km Across South Africa
                  </span>
                  <p className="text-xl font-serif font-bold text-white">
                    On the Ground in Khayelitsha (2018)
                  </p>
                  <p className="text-xs text-neutral-300">
                    Listening to young people across 100+ townships &amp; 200 high schools nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE ARE BUILDING (Dynamic 3-Photo Action Mosaic of Foundation Programs) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Mosaic: 3 Real Photos of Movement Pillars (Mentorship, Accredited Social Entrepreneurship, and National Conferences) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {/* Photo 1: Global 1-on-1 Mentoring Session */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 group">
                <Image
                  src="/images/projects/dolphins-mentoring-session.jpg"
                  alt="International dolphin mentor and mentee coaching session in Cape Town"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary-400">Global Mentorship</p>
                  <p className="text-sm font-serif font-semibold">1-on-1 Coaching</p>
                </div>
              </div>

              {/* Photo 2: Accredited Social Entrepreneurship Cohort Graduation */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 group translate-y-6">
                <Image
                  src="/images/extra images/Social Entrepreneurship course Certificates received by Nelsons.jpg"
                  alt="Nelsons, Dr. Nico de Klerk, and leadership holding Social Entrepreneurship graduation certificates"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary-400">Accredited Learning</p>
                  <p className="text-sm font-serif font-semibold">DI² Enterprise Cohorts</p>
                </div>
              </div>

              {/* Photo 3: National Youth Movement Conference Celebration Banner */}
              <div className="col-span-2 relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 group mt-2">
                <Image
                  src="/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (72).jpg"
                  alt="Young changemakers, mentors, and international faculty celebrating together on the conference deck"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary-400">Be a Nelson Movement</p>
                    <p className="text-sm font-serif font-semibold">National Leadership Conferences &amp; Bootcamps</p>
                  </div>
                  <Compass className="w-5 h-5 text-primary-400 shrink-0" />
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Vision</h2>
                <H2 className="text-4xl md:text-5xl font-serif">What We Are Building</H2>
              </div>

              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  StreetBiz Foundation is building a movement of young changemakers who can think entrepreneurially, lead with courage, and make meaningful contributions in their communities.
                </p>
                <p>
                  Our work includes workshops, conferences, pitch competitions, bootcamps, nature walks, coaching, and access to online higher education opportunities that support both personal and professional development.
                </p>
                <div className="p-6 rounded-2xl bg-primary-50 border border-primary-200/80 space-y-2">
                  <p className="text-xs uppercase tracking-widest font-bold text-primary-700">Democratizing Innovation Cohorts</p>
                  <p className="font-bold text-neutral-900 text-lg">
                    From 2023 to August 2026, a total of 73 participants across all course cohorts attended and completed the Social Entrepreneurship and Leading Change for Sustainability programmes, spanning six South African provinces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM */}
      <section className="py-24 md:py-32 bg-neutral-50 border-y border-neutral-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Team</h2>
            <H2 className="text-4xl md:text-5xl font-serif">Leadership</H2>
            <Paragraph className="text-lg text-neutral-600">
              StreetBiz Foundation is led by a team committed to the vision, growth, and integrity of the organisation.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="bg-white p-5 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group"
              >
                <div className="relative w-full aspect-[3/4] sm:aspect-auto sm:w-44 sm:h-56 shrink-0 overflow-hidden rounded-2xl shadow-md border-2 border-primary-500/20 group-hover:border-primary-500 transition-colors">
                  <Image
                    src={member.image_url}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 176px"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <H3 className="text-2xl font-serif text-neutral-900">{member.name}</H3>
                    <p className="text-primary-600 font-bold text-xs uppercase tracking-widest mt-1">
                      {member.role}
                    </p>
                  </div>
                  <Paragraph className="text-neutral-600 leading-relaxed text-sm">
                    {member.bio}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MILESTONES (Timeline Paired with International Collaboration Roundtable) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Heading, Subtitle & Collaborative Roundtable Photo */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Timeline</h2>
                  <H2 className="text-4xl md:text-5xl font-serif leading-tight">Milestones</H2>
                  <Paragraph className="text-neutral-500 italic">
                    A journey of steady growth and deepening impact across South Africa.
                  </Paragraph>
                </div>

                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
                  <Image
                    src="/images/extra images/Africa Unite with Nelsons.jpg"
                    alt="International delegates and Nelsons collaborating in an Africa Unite workshop in Cape Town"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-0.5 rounded-full inline-block">
                      Global &amp; Pan-African Impact
                    </span>
                    <p className="text-sm font-serif font-bold mt-1">Institutional Collaboration &amp; Partnerships</p>
                    <p className="text-xs text-neutral-300">Connecting local changemakers with international platforms</p>
                  </div>
                </div>
              </div>

              {/* Right Column: 8 Timeline Milestones */}
              <div className="lg:col-span-7 space-y-4">
                {milestones.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 items-start p-4 rounded-2xl hover:bg-neutral-50 border-b border-neutral-100 transition-colors group"
                  >
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-primary-300 group-hover:text-primary-600 transition-colors w-28 shrink-0">
                      {item.year}
                    </span>
                    <p className="text-neutral-700 text-base sm:text-lg font-medium leading-relaxed pt-1">
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHAT DRIVES US (Runway to Peace Community Leadership in Action) */}
      <section className="py-24 md:py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Inspiring Civic Leadership Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group">
                <Image
                  src="/images/Internation Day of Peace 2025/Runway to Peace 2025 (44).jpg"
                  alt="Dr. Nico de Klerk and young leaders smiling together following their International Day of Peace clean-up"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-3 py-1 rounded-full inline-block">
                    Living Leadership
                  </span>
                  <p className="text-xl font-serif font-bold text-white">
                    Walking Beside Young Leaders on the Ground
                  </p>
                  <p className="text-xs text-neutral-300">
                    Runway to Peace • Grassroots civic action and community service in action
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500">Our Motivation</h2>
                <H2 className="text-white text-4xl md:text-6xl font-serif leading-tight italic">
                  What Drives Us
                </H2>
              </div>

              <div className="space-y-6 text-lg text-neutral-300 font-light leading-relaxed">
                <p>
                  StreetBiz Foundation is driven by the belief that South Africa’s future depends on young people who are equipped to think differently, lead boldly, and act with purpose.
                </p>
                <p className="text-white font-medium text-xl leading-relaxed border-l-4 border-primary-500 pl-6">
                  We are committed to building a future in which more young people have access to the opportunities, support, and relationships they need to grow into leaders and changemakers.
                </p>
                <p>
                  The Be a Nelson Movement is how that commitment becomes visible — in real lives, real communities, and real possibilities taking shape across South Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLOSING CTA (Full Cohort Celebration Photo Background) */}
      <section className="py-28 md:py-36 bg-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
          <Image
            src="/images/extra images/Group photo of Nelson in Gauteng Conference.jpg"
            alt="Be a Nelson conference cohort celebrating together"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-primary-950/90 z-0" />

        <div className="container relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-10">
            <H2 className="text-white text-5xl md:text-7xl font-serif leading-tight">Join the Story</H2>
            <Paragraph className="text-primary-50/95 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
              StreetBiz Foundation continues to grow the Be a Nelson Movement as a platform for leadership, entrepreneurial mindset, and youth-led social impact. We invite you to walk with us.
            </Paragraph>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/nelsons">
                <Button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3.5 text-base font-semibold rounded-full border-none shadow-xl w-full sm:w-auto transition-all">
                  Meet the Nelsons
                </Button>
              </Link>
              <Link href="/stories">
                <Button className="bg-primary-900 text-white hover:bg-primary-950 px-8 py-3.5 text-base font-semibold rounded-full border border-primary-400/40 shadow-xl w-full sm:w-auto transition-all">
                  View Our Impact
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="text-white hover:bg-white/10 px-8 py-3.5 text-base font-semibold rounded-full border border-white/40 w-full sm:w-auto transition-all">
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
