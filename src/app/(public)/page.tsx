import Link from 'next/link'
import Image from 'next/image'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { CheckCircle, GraduationCap, Network, Zap, Sparkles } from 'lucide-react'

const metrics = [
  { label: '133 Nelsons impacted to date', value: '133' },
  { label: '100+ township communities reached', value: '100+' },
  { label: '200 high schools engaged', value: '200' },
  { label: '73 participants across course cohorts (2023–2026)', value: '73' },
  { label: '6 provinces represented', value: '6' },
]

const tripleE = [
  {
    title: 'Education',
    icon: GraduationCap,
    image: '/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (110).jpg',
    imageAlt: 'Nelsons engaged in classroom workshop session',
    badge: 'Structured Learning',
    description: 'We create access to learning that expands thinking, builds entrepreneurial mindset, and equips young people with tools for leadership and social innovation.',
    details: 'This includes structured courses, training opportunities, mentorship, and access to new ways of seeing themselves and the world around them.',
  },
  {
    title: 'Experience',
    icon: Zap,
    image: '/images/stories/mandela-day-2025.png',
    imageAlt: 'Nelsons leading community recycling and service on Mandela Day',
    badge: 'Lived Action',
    description: 'We believe growth happens when learning becomes lived experience.',
    details: 'Through conferences, bootcamps, coaching, community projects, leadership journeys, and practical engagement, young people develop confidence, resilience, initiative, and the ability to turn ideas into action.',
  },
  {
    title: 'Exposure',
    icon: Network,
    image: '/images/projects/pitch-competition-group.png',
    imageAlt: 'Virtual pitch competition and international mentorship panel',
    badge: 'Global Horizons',
    description: 'Exposure changes mindsets.',
    details: 'The movement creates opportunities for young people to connect beyond the limits of their immediate environment — through networks, collaboration, global learning opportunities, new relationships, and transformational experiences that broaden vision, unlock ambition, and open new possibilities.',
  },
]

const supportPossibilities = [
  'Access to entrepreneurship and leadership learning',
  'Sponsored participation for Nelsons in courses and conferences',
  'Laptops, digital access, and data for online learning',
  'Coaching, mentorship, and personal development support',
  'Implementation of community-led projects',
  'Monitoring, evaluation, and storytelling that help us measure and grow impact',
]

const scrollingNelsons = [
  {
    name: 'Tanya Mapfure',
    role: 'Eco-Enterprise Founder',
    province: 'Gauteng',
    image: '/images/nelsons/tanya.jpg',
    slug: 'tanya-mapfure',
  },
  {
    name: 'Zimasa Mretyana',
    role: 'Community Nutrition & Soup Kitchen',
    province: 'Eastern Cape',
    image: '/images/nelsons/zimasa-mretyana.jpg',
    slug: 'zimasa-mretyana',
  },
  {
    name: 'Thuso Pejane',
    role: 'Enterprise Founder',
    province: 'Free State',
    image: '/images/nelsons/thuso-pejane.jpg',
    slug: 'thuso-pejane',
  },
  {
    name: 'Lerato Hanyane',
    role: 'Youth Changemaker & Founder',
    province: 'Gauteng',
    image: '/images/nelsons/lerato-hanyane.jpg',
    slug: 'lerato-hanyane',
  },
  {
    name: 'Wonderboy Gina',
    role: 'Creative Enterprise Lead',
    province: 'Mpumalanga',
    image: '/images/nelsons/wonderboy-gina.jpg',
    slug: 'wonderboy-gina',
  },
  {
    name: 'Amanda Mkhwanazi',
    role: 'Community Project Founder',
    province: 'KwaZulu-Natal',
    image: '/images/nelsons/amanda-mkhwanazi.jpg',
    slug: 'amanda-mkhwanazi',
  },
  {
    name: 'Bafana Binda',
    role: 'Executive Administrator & Lead',
    province: 'Gauteng',
    image: '/images/nelsons/bafana-binda.jpg',
    slug: 'bafana-binda',
  },
  {
    name: 'Andile Gumede',
    role: 'Grassroots Innovator',
    province: 'KwaZulu-Natal',
    image: '/images/nelsons/andile-gumede.jpg',
    slug: 'andile-gumede',
  },
  {
    name: 'Kiara van Neel',
    role: 'Youth Leadership & Service',
    province: 'Western Cape',
    image: '/images/nelsons/kiara-van-neel.jpg',
    slug: 'kiara-van-neel',
  },
  {
    name: 'Sikhelela Ndawule',
    role: 'Community Mobiliser',
    province: 'Eastern Cape',
    image: '/images/nelsons/sikhelela-ndawule.jpg',
    slug: 'sikhelela-ndawule',
  },
  {
    name: 'Khumbuzile Netshituni',
    role: 'Education & Enterprise',
    province: 'Limpopo',
    image: '/images/nelsons/khumbuzile-netshituni.jpg',
    slug: 'khumbuzile-netshituni',
  },
  {
    name: 'Fortunate Mokoena',
    role: 'Social Enterprise Founder',
    province: 'Free State',
    image: '/images/nelsons/fortunate-mokoena.jpg',
    slug: 'fortunate-mokoena',
  },
  {
    name: 'John Semenya',
    role: 'Youth Agribusiness Lead',
    province: 'Limpopo',
    image: '/images/nelsons/john-semenya.jpg',
    slug: 'john-semenya',
  },
  {
    name: 'Ludonga Tshabalala',
    role: 'Tech & Community Builder',
    province: 'Gauteng',
    image: '/images/nelsons/ludonga-tshabalala.jpg',
    slug: 'ludonga-tshabalala',
  },
  {
    name: 'Gabriel Letsoela',
    role: 'Grassroots Leader',
    province: 'Free State',
    image: '/images/nelsons/gabriel-letsoela.jpg',
    slug: 'gabriel-letsoela',
  },
  {
    name: 'Cassidy Carstens',
    role: 'Social Innovation Lead',
    province: 'Western Cape',
    image: '/images/nelsons/cassidy-carstens.jpg',
    slug: 'cassidy-carstens',
  },
  {
    name: 'Mahlatse Madisha',
    role: 'Enterprise Builder',
    province: 'Limpopo',
    image: '/images/nelsons/mahlatse-madisha.jpg',
    slug: 'mahlatse-madisha',
  },
  {
    name: 'Samkelo Matyantya',
    role: 'Community Development',
    province: 'Eastern Cape',
    image: '/images/nelsons/samkelo-matyantya.jpg',
    slug: 'samkelo-matyantya',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-screen pb-24 flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/brand/hero_cover_pic.jpg"
            alt="StreetBiz Foundation Hero"
            fill
            priority
            className="object-cover"
          />
          {/* Dark scrim overlay (40% opacity) for high-contrast white text readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="container relative z-30 text-center pt-16 sm:pt-20 lg:pt-28">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-4">
              <p className="text-primary-500 font-bold tracking-[0.3em] uppercase animate-fade-in drop-shadow-lg">
                StreetBiz Foundation
              </p>
              <H1 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-tight drop-shadow-2xl">
                Be a Nelson <span className="italic text-primary-400">Movement</span>
              </H1>
              <Lead className="text-white text-xl sm:text-2xl md:text-3xl font-medium max-w-5xl mx-auto drop-shadow-xl">
                Equipping young South Africans to lead change through entrepreneurship, learning, and community action.
              </Lead>
            </div>
            
            <Paragraph className="text-white/80 max-w-4xl mx-auto text-base sm:text-lg md:text-xl font-light drop-shadow-md">
              The Be a Nelson Movement is the flagship initiative of StreetBiz Foundation — building a growing network of young changemakers inspired by Nelson Mandela’s legacy and equipped to create impact in their communities.
            </Paragraph>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-4 w-full max-w-sm sm:max-w-none mx-auto">
              <Link href="/apply" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-full shadow-lg shadow-primary-600/20 bg-primary-500 hover:bg-primary-600 border-none transition-all">
                  Apply Now
                </Button>
              </Link>
              <Link href="/donate" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-full shadow-lg shadow-primary-600/20 bg-white text-primary-600 hover:bg-primary-50 border-none transition-all">
                  Donate
                </Button>
              </Link>
              <Link href="/stories" className="w-full sm:w-auto">
                <Button variant="ghost" className="w-full sm:w-auto text-white hover:bg-white/10 px-8 py-3.5 text-base font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all">
                  View Our Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS STRIP */}
      <section className="bg-primary-600 py-10 sm:py-12 border-y border-primary-500/30">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <h2 className="text-white text-lg sm:text-xl font-bold uppercase tracking-widest text-center lg:text-left lg:w-1/4">Impact at a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 w-full lg:w-3/4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center sm:text-left border-t sm:border-t-0 sm:border-l border-white/20 pt-3 sm:pt-0 pl-0 sm:pl-6">
                  <p className="text-white text-sm font-medium leading-tight opacity-90">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT THE MOVEMENT IS (Unobstructed Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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
              <div className="relative">
                {/* Main Hero Photo: Circle of Unity */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group">
                  <Image
                    src="/images/projects/be-a-nelson-movement.jpg"
                    alt="Be a Nelson young changemakers gathered in unity"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  
                  {/* Clean Frosted Text Overlay at Bottom Left (max-w prevents overlapping with bottom-right inset) */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10 max-w-[85%] sm:max-w-[62%] rounded-2xl bg-black/70 backdrop-blur-md p-3 sm:p-4 border border-white/20 text-white shadow-xl">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary-400">Grassroots Unity</p>
                    <p className="text-xs sm:text-base font-serif italic text-white/95 mt-0.5 sm:mt-1 leading-snug">
                      Young leaders coming together across communities
                    </p>
                  </div>
                </div>

                {/* Overlapping Inset Card: Repositioned to Bottom-Right without hiding text */}
                <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hover:scale-105 transition-transform">
                  <Image
                    src="/images/BaN Gauteng Conference 2026/BaN Gauteng Conference 2026  (60).jpg"
                    alt="Nelsons at the Be a Nelson Conference"
                    fill
                    className="object-cover"
                    sizes="208px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Floating Stat Pill: Positioned cleanly on Top-Left */}
                <div className="absolute -top-4 -left-4 bg-primary-600 text-white px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 border-2 border-white text-xs font-bold uppercase tracking-wider z-20">
                  <Sparkles className="w-4 h-4 text-primary-200" />
                  <span>133+ Nelsons Nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY IT MATTERS (Accurate Rivoni Foundation & Runway to Peace Context) */}
      <section className="py-24 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500">The Challenge</h2>
                <H2 className="text-white text-4xl md:text-6xl font-serif">Why This Matters</H2>
              </div>
              <div className="space-y-6 text-lg text-neutral-300 font-light leading-relaxed">
                <p>
                  Too many young people in South Africa are growing up with talent, drive, and ideas, but without the access, support, and opportunities needed to flourish.
                </p>
                <p className="text-white font-medium text-xl">
                  The Be a Nelson Movement responds to that challenge by investing in mindset, leadership, entrepreneurial thinking, and practical opportunity.
                </p>
                <p>
                  We believe that when young people are given the right environment to grow, they do not only change their own lives — they help transform their communities. For donors and partners, this is an opportunity to invest in youth-led change that is practical, values-driven, and built for long-term impact.
                </p>
              </div>
            </div>

            {/* Visual Mosaic of Grassroots Enterprise Action */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Photo 1: Rivoni Foundation Food Kitchen in Olievenhoutbosch */}
              <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-800 shadow-xl">
                <Image
                  src="/images/stories/mamelodi-vegetable-garden.jpg"
                  alt="Rivoni Foundation community food kitchen in Olievenhoutbosch, Gauteng"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-1 rounded-full inline-block">
                    Rivoni Foundation • Gauteng
                  </span>
                  <p className="font-serif text-lg font-bold mt-2">Community Food Kitchen</p>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-1">
                    Nelson-led organization in Olievenhoutbosch running a daily food kitchen and cultivating sustainable nutrition for families.
                  </p>
                </div>
              </div>

              {/* Photo 2: Runway to Peace 2025 Clean-Up in Gugulethu */}
              <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-800 shadow-xl sm:translate-y-8">
                <Image
                  src="/images/Internation Day of Peace 2025/Runway to Peace 2025 (23).jpg"
                  alt="Runway to Peace 2025 community cleanup campaign in Gugulethu, Western Cape"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-1 rounded-full inline-block">
                    Runway to Peace 2025 • Western Cape
                  </span>
                  <p className="font-serif text-lg font-bold mt-2">Gugulethu Clean-Up Campaign</p>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-1">
                    Nelsons taking action for the International Day of Peace, clearing illegal dumping areas into clean public community spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW THE MOVEMENT WORKS (The Triple E Framework with Image Cards) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-5xl mx-auto mb-16 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Strategy</h2>
            <H2 className="text-4xl md:text-5xl font-serif">How the Movement Works: The Triple E Framework</H2>
            <Paragraph className="text-neutral-600 text-lg max-w-2xl mx-auto">
              A holistic development model designed to transition township youth from survival thinking into proactive enterprise builders.
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tripleE.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-neutral-200 bg-white overflow-hidden hover:border-primary-300 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                        <Icon className="w-3.5 h-3.5 text-primary-600" />
                        <span>{item.badge}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8 space-y-4">
                      <H3 className="text-2xl font-serif">{index + 1}) {item.title}</H3>
                      <Paragraph className="text-neutral-900 font-medium text-base leading-relaxed">
                        {item.description}
                      </Paragraph>
                      <Paragraph className="text-neutral-500 text-sm italic leading-relaxed">
                        {item.details}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION: WHAT SUPPORT MAKES POSSIBLE (With Real Action Imagery) */}
      <section className="py-24 md:py-32 bg-neutral-50 border-y border-neutral-200">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading, Text & Active Participant Image */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Direct Impact</h2>
                <H2 className="text-4xl md:text-5xl font-serif leading-tight">What Your Support Makes Possible</H2>
                <Paragraph className="text-lg text-neutral-600 leading-relaxed">
                  When you fund the Be a Nelson Movement, you help young people cross the threshold from potential to action. Every rand invested directly expands capacity and creates tangible grassroots economic mobility.
                </Paragraph>
              </div>

              {/* Photo Showcase: Learners in Session */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
                <Image
                  src="/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (100).jpg"
                  alt="Young changemakers smiling during an interactive workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-400">Mentorship &amp; Growth</p>
                  <p className="text-sm font-medium text-neutral-200">Equipping leaders with practical skills and collaborative confidence</p>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Clear Deliverables */}
            <div className="lg:col-span-6 grid gap-4">
              {supportPossibilities.map((text, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm items-start hover:shadow-md hover:border-primary-200 transition-all"
                >
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary-600" />
                  </div>
                  <p className="text-neutral-800 font-medium text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EVIDENCE OF MOMENTUM / OUR ORIGINS (With 1,700-Mile Walk Photo) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Origins</h2>
              <H2 className="text-4xl md:text-5xl font-serif">From Vision to Movement</H2>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
                <p>
                  The Be a Nelson Movement grew out of the Long Walk for the Entrepreneurial Mindset — a 1,700-mile journey across South Africa that reached more than 100 township communities and included workshops at 200 high schools.
                </p>
                <p>
                  That journey helped shape a national network of young leaders and gave rise to the first Be a Nelson Conference in 2022.
                </p>
                <p className="font-medium text-neutral-900">
                  Today, the movement continues to grow through learning opportunities, community engagement, leadership development, and practical support for young changemakers across South Africa.
                </p>
              </div>
            </div>

            {/* Authentic Trek Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <Image
                  src="/images/projects/nelson-walk.jpg"
                  alt="The 1,700-Mile Long Walk for the Entrepreneurial Mindset across South Africa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-1 rounded-full inline-block">
                    Historic Foundation
                  </span>
                  <p className="text-xl font-serif font-bold text-white">The Long Walk for the Entrepreneurial Mindset</p>
                  <p className="text-xs text-neutral-300">1,700 miles | 100+ townships | 200 high schools reached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: MEET THE NELSONS (Smooth Infinite Auto-Scrolling Strip) */}
      <section className="py-24 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container relative z-10 text-center space-y-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-400">The People</h2>
            <H2 className="text-white text-4xl md:text-6xl font-serif italic">Meet the Nelsons</H2>
            <p className="text-xl text-neutral-300 font-light leading-relaxed">
              At the center of this movement are young people with ideas, courage, and commitment. Together, they represent a new generation of grassroots leadership in South Africa.
            </p>
          </div>

          {/* Continuous Auto-Scrolling Strip of Nelsons */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left & Right gradient fade masks for smooth infinite transition */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-neutral-900 via-neutral-900/80 to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee flex gap-6">
              {[...scrollingNelsons, ...scrollingNelsons].map((nelson, i) => (
                <Link
                  key={`${nelson.slug}-${i}`}
                  href={`/nelsons/${nelson.slug}`}
                  className="shrink-0 w-52 sm:w-60 bg-neutral-800/90 rounded-2xl p-5 border border-neutral-700/80 flex flex-col items-center text-center hover:border-primary-400 hover:bg-neutral-800 transition-all duration-300 hover:scale-105 shadow-xl group/card"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-primary-500/50 mb-3 shadow-md group-hover/card:border-primary-400 group-hover/card:scale-105 transition-all">
                    <Image
                      src={nelson.image}
                      alt={nelson.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 96px, 112px"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white group-hover/card:text-primary-300 transition-colors line-clamp-1">
                    {nelson.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-1">{nelson.role}</p>
                  <span className="text-[10px] text-primary-400 font-bold uppercase tracking-wider mt-2 px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20">
                    {nelson.province}
                  </span>
                </Link>
              ))}
            </div>

            <p className="text-xs text-neutral-400 mt-4 italic tracking-wide">
              Hover over any Nelson to pause and explore their story
            </p>
          </div>

          <div className="pt-4">
            <Link href="/nelsons">
              <Button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3.5 text-base font-semibold rounded-full border-none shadow-xl transition-all">
                Meet All 133 Nelsons →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: WHY PARTNER WITH US (With Municipal & Stakeholder Presentation Photo) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Partner Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group">
                <Image
                  src="/images/West Coast District Municipality/West Coast District Municipality (4).jpg"
                  alt="Dr. Nico presenting to municipal council leadership and partners"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-1 rounded-full inline-block">
                    Institutional Trust
                  </span>
                  <p className="text-lg font-serif font-bold text-white">Place-Based Regional Partnerships</p>
                  <p className="text-xs text-neutral-300">Collaborating with municipalities, corporates, and global institutes</p>
                </div>
              </div>
            </div>

            {/* Right: Compliance and Partnership pathways */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Strategic Alignment</h2>
                <H2 className="text-4xl md:text-5xl font-serif">Why Partner with the Movement</H2>
              </div>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  When you partner with <strong>StreetBiz Foundation</strong>, you invest in a movement that is practical, grounded, and ready to grow. Through the <strong>Be a Nelson Movement</strong>, we support young changemakers with access to learning, leadership development, mentorship, and real-world opportunities that strengthen communities from the ground up.
                </p>
                <p className="font-bold text-neutral-900">
                  StreetBiz Foundation holds a Section 18A certificate and is Public Benefit Organisation (PBO) compliant, enabling South African donors to claim tax benefits where applicable.
                </p>
                <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6 space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary-700">International Giving Pathways</p>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    <strong>International partners and donors</strong> can give via PayPal or locally through trusted nonprofit partners with established MOUs in the <strong>U.S.A.</strong> (501(c)(3) partner) and <strong>Europe</strong>. Details shared upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION (With Subtle Hero Background Blend) */}
      <section className="py-28 md:py-36 bg-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <Image
            src="/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (71).jpg"
            alt="Be a Nelson community leaders"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-primary-950/90 z-0" />

        <div className="container relative z-10 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <H2 className="text-white text-4xl sm:text-5xl md:text-7xl font-serif leading-tight italic">
              Help Build the Next Generation of Nelsons
            </H2>
            <Paragraph className="text-primary-50/95 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Young people do not need more speeches about potential. They need access, support, and real opportunities to grow. Partner with us to expand the Be a Nelson Movement and help more young changemakers rise.
            </Paragraph>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/donate">
                <Button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3.5 text-base font-semibold rounded-full border-none shadow-xl w-full sm:w-auto transition-all">
                  Donate
                </Button>
              </Link>
              <Link href="/corporate-partnerships">
                <Button className="bg-primary-900 text-white hover:bg-primary-950 px-8 py-3.5 text-base font-semibold rounded-full border border-primary-400/40 shadow-xl w-full sm:w-auto transition-all">
                  Partner With Us
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
