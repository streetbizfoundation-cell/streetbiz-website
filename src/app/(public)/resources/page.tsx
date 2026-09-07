import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  BookOpen,
  Headphones,
  ExternalLink,
  Award,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'

export const metadata: Metadata = {
  title: 'Thought Leadership, Media & Publications | StreetBiz Foundation',
  description:
    'Explore StreetBiz Foundation published books, podcast features, and proprietary mindset frameworks developed in collaboration with global partners.',
}

const podcasts = [
  {
    title: 'The Legacy of Apartheid',
    host: 'Hosted on Libsyn',
    desc: 'Examining how spatial segregation, economic exclusion, and historical trauma affect today’s youth—and how values-based social entrepreneurship offers a practical solution.',
    links: [
      { label: 'Listen on Libsyn', url: 'https://whatsyourlegacy.libsyn.com/nico-de-klerk-and-jabu-zwane-the-legacy-of-apartheid' },
    ],
    badge: 'Audio Series',
  },
  {
    title: 'What If Instead',
    host: 'Featured on RebelBase Hub',
    desc: 'Conversations with global social innovators and researchers asking radical questions about community ownership, alternative education, and technology. Featured Episode: Dr. Nico de Klerk on "Rebooting Mindsets: Why Grassroots Action Beats Classroom Theory."',
    links: [
      { label: 'Listen on RebelBase', url: 'https://rebelbase.co/what-if-instead-podcast-the-two-way-street-with-nico-de-klerk/' },
    ],
    badge: 'Podcast Episode',
  },
  {
    title: 'Awakin Calls: Walking Towards an Entrepreneurial Mindset',
    host: 'ServiceSpace Global Dialogue Series',
    desc: 'Reflections on pilgrimage, deep listening, contemplative action, and cross-cultural mentoring between international leaders and South African township youth.',
    links: [
      { label: 'Listen on Awakin Archive', url: 'https://www.awakin.org/v2/calls/701/nico-de-klerk/' },
    ],
    badge: 'Global Dialogue',
  },
]

export default function ResourcesPage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Section with International Stage Photo */}
      <section className="bg-neutral-950 py-24 md:py-32 text-white relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extra images/ILA.jpg"
            alt="Dr. Nico de Klerk speaking on global stage at the International Leadership Association"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-black/60 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-primary-400" />
              Knowledge &amp; Thought Leadership
            </div>
            <H1 className="text-white text-4xl md:text-6xl font-serif leading-tight">
              Thought Leadership, Media &amp; <span className="text-primary-400 italic">Publications</span>
            </H1>
            <Lead className="text-neutral-200 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              Grounded in academic research, lived township experience, and actionable social innovation. Explore our published book, podcast features, and proprietary frameworks.
            </Lead>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#featured-book">
                <Button size="lg" className="rounded-full px-8">
                  Read About the Book
                </Button>
              </a>
              <a href="#podcasts">
                <Button variant="ghost" size="lg" className="rounded-full px-8 text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm">
                  Listen to Podcasts
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Overview */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Research &amp; Innovation</p>
            <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">
              Transformative Insights for Grassroots Mobility
            </H2>
            <Paragraph className="text-neutral-600 text-lg leading-relaxed">
              At StreetBiz Foundation, our methodologies are rooted in academic research, lived community experience, and actionable social innovation.
            </Paragraph>
            <Paragraph className="text-neutral-600 text-lg leading-relaxed">
              Explore our published books, podcasts, and proprietary mindset frameworks developed in collaboration with global partners including the <strong>Democratizing Innovation Institute (DI²)</strong> and <strong>RebelBase</strong>.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* 2. Featured Book: No Fit with Authentic High-Res Cover */}
      <section id="featured-book" className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Featured Publication</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">
                No Fit: My 1,700-Mile Walk from Apartheid
              </H2>
              <p className="text-neutral-600 text-lg">
                By Dr. Nico de Klerk (Founder &amp; Director, StreetBiz Foundation) &amp; Prof. Leonie Baldacchino
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-primary-600" />
                  Edward de Bono Award Winner
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
                  <p>
                    In 2018, to mark Nelson Mandela’s centenary, social entrepreneur Dr. Nico de Klerk undertook a 1,700-mile (2,750 km) walk from Pretoria to Cape Town. Over four months, he walked through <strong>104 marginalized townships</strong>, engaging with more than <strong>25,000 young people</strong> and visiting over <strong>200 schools</strong>.
                  </p>
                  <p>
                    <em>No Fit</em> chronicles this journey, confronting the persistent socio-economic barriers facing township youth and establishing the foundational insights that launched the <strong>Be a Nelson Movement</strong>.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Core Themes:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'The Transformative Practice of Walking',
                      'Bridging Socio-Economic Divides',
                      'Living Ubuntu',
                      'Rebooting the Entrepreneurial Mindset',
                    ].map((theme) => (
                      <span key={theme} className="px-3 py-1 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-medium">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.amazon.com/No-Fit-700-Mile-Walk-Apartheid-ebook/dp/B0C2JN76KQ?ref_=ast_author_mpb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="rounded-full px-6 flex items-center gap-2">
                      <span>Buy on Amazon</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                  <span className="text-xs text-neutral-500 font-medium">
                    Available on Kindle &amp; Paperback via Amazon
                  </span>
                </div>
              </div>

              {/* Book High-Res Cover Visual Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 sm:w-72 aspect-[1/1.5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/extra images/No Fit Book.jpg"
                    alt="Official book cover of No Fit by Dr Nico de Klerk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Podcasts & Audio Series + DII Studio Photo */}
      <section id="podcasts" className="py-20 md:py-28 bg-white border-y border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Audio Conversations</p>
                <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Podcasts &amp; Audio Series</H2>
                <p className="text-neutral-600 text-lg">
                  Listen to discussions with global thought leaders, podcast hosts, and researchers on social entrepreneurship and mindset change.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
                  <Image
                    src="/images/projects/dii-podcast.jpg"
                    alt="Democratizing Innovation Institute podcast discussion on grassroots youth development"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary-400">Audio Insights</p>
                    <p className="text-sm font-serif font-bold">DI² &amp; RebelBase Collaborative Podcasts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {podcasts.map((p) => (
                <div key={p.title} className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center">
                        <Headphones className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700">
                        {p.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold font-serif text-xl text-neutral-900 mb-1">{p.title}</h3>
                      <p className="text-xs font-bold text-primary-700">{p.host}</p>
                    </div>

                    <p className="text-xs text-neutral-600 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 space-y-2">
                    {p.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-800"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Academic Frameworks Workshop Photo */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Research &amp; Practice</p>
                <H2 className="text-3xl font-serif text-neutral-900">Academic Frameworks &amp; Workshops</H2>
                <Paragraph className="text-neutral-600 text-sm md:text-base leading-relaxed">
                  Our curricula merge experiential leadership with rigorous academic theory. Through partnerships with international professors and research fellows, we continuously refine our pedagogical approach to youth entrepreneurial mindset cultivation.
                </Paragraph>
                <div className="pt-2">
                  <Link href="/programme">
                    <Button variant="ghost" className="text-primary-700 hover:text-primary-800 p-0 font-bold text-sm inline-flex items-center gap-1.5">
                      <span>Explore the Triple E Framework</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-neutral-200 group">
                  <Image
                    src="/images/extra images/Professor Jeffrey giving workshop on Leadership in Western CapeConference.jpg"
                    alt="Professor Jeffrey McClellan presenting leadership frameworks to youth delegates"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs font-serif font-bold">Academic Leadership Workshop</p>
                    <p className="text-[10px] text-neutral-300">Western Cape Youth Conference</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
