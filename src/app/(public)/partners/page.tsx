import Image from 'next/image'
import Link from 'next/link'
import { H1, H2, Lead, Paragraph } from '@/components/common/Typography'
import PartnerCard from '@/components/partners/PartnerCard'
import { partners as staticPartners } from '@/content/partners'
import { Handshake, Globe2, Sparkles, Building2 } from 'lucide-react'

export const metadata = {
  title: 'Our Partners | StreetBiz Foundation',
  description:
    'The organisations, academic institutions, and global mentors who make the Be a Nelson Movement possible through collaboration and support.',
  openGraph: {
    title: 'Our Partners | StreetBiz Foundation',
    description:
      'The organisations and individuals who make the Be a Nelson Movement possible through collaboration, mentorship and support.',
    url: 'https://streetbiz.co.za/partners',
    images: [
      {
        url: '/images/brand/streetbiz-logo.png',
        alt: 'StreetBiz Foundation partners',
      },
    ],
  },
}

export default function PartnersPage() {
  const partners = staticPartners

  return (
    <main className="bg-white">
      {/* 1. HERO SECTION WITH PANORAMIC INSTITUTIONAL PARTNERSHIP PHOTO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-neutral-950 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/West Coast District Municipality/West Coast District Municipality (3).jpg"
            alt="StreetBiz Foundation leadership engaging with regional municipal and academic partners"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-black/60 z-10" />
        </div>

        <div className="container relative z-20 text-white">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/40 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Handshake className="w-4 h-4 text-primary-400" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary-300">
                Strategic Alliances
              </span>
            </div>

            <H1 className="text-white text-4xl sm:text-5xl md:text-7xl font-serif leading-tight">
              Our <span className="italic text-primary-400">Partners</span>
            </H1>

            <Lead className="text-neutral-200 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              We don&apos;t work in isolation. The Be a Nelson Movement is powered by a network of visionary academic institutions, corporate partners, and global mentors dedicated to radical community transformation.
            </Lead>
          </div>
        </div>
      </section>

      {/* 2. COLLABORATIVE IMPACT SPOTLIGHT (3 Authentic Action Photos) */}
      <section className="py-20 md:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Cross-Sector Collaboration</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Partnership in Action</H2>
              <Paragraph className="text-neutral-600 text-lg">
                From international university professors and corporate mentors to local municipalities, our partners bring direct value to grassroots township innovators.
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Photo 1: Academic Leadership */}
              <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/extra images/Professor Jeffrey McClillan at the Western Cape Conference.jpg"
                    alt="Professor Jeffrey McClellan presenting leadership frameworks to youth at the Western Cape Conference"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-0.5 rounded-full inline-block">
                      Global Academia
                    </span>
                    <p className="text-sm font-serif font-bold mt-1">International Leadership Faculty</p>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-neutral-900 text-base">University &amp; Research Alliances</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Collaborating with academic scholars and international institutions to deliver accredited leadership frameworks and research-backed curricula.
                  </p>
                </div>
              </div>

              {/* Photo 2: Visiting Mentors */}
              <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/extra images/Dolphin Mentors Group Picture.jpg"
                    alt="Dolphin Mentors coaches group picture"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-0.5 rounded-full inline-block">
                      Dolphin Mentors
                    </span>
                    <p className="text-sm font-serif font-bold mt-1">Cross-Border Mentorship</p>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-neutral-900 text-base">Global Professional Network</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Connecting international executives, founders, and consultants with emerging township entrepreneurs for 1:1 strategic coaching.
                  </p>
                </div>
              </div>

              {/* Photo 3: Youth Social Tech Demonstration */}
              <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/extra images/Tanya Loyiso Asiphe present NaNi technology.jpeg"
                    alt="Young changemakers presenting social technology solutions to partners"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-0.5 rounded-full inline-block">
                      Innovation Pilots
                    </span>
                    <p className="text-sm font-serif font-bold mt-1">Youth-Led Enterprise MVPs</p>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-neutral-900 text-base">Social Enterprise Incubation</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Nelsons present validated community solutions to corporate and technical sponsors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARTNERS LOGO GRID */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Institutional Alliances</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Our Network of Collaborators</H2>
              <p className="text-neutral-600 text-lg">
                Organizations providing platform technology, academic accreditation, grant funding, and community infrastructure.
              </p>
            </div>

            {!partners || partners.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-neutral-100 rounded-3xl">
                <p className="text-neutral-400">Our partnership network is currently being documented. Check back soon.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
                {partners.map((partner) => (
                  <PartnerCard key={partner.id} id={partner.id} name={partner.name} logo_url={partner.logo_url} excerpt={partner.excerpt} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. BECOME A PARTNER CTA */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-4 h-4" />
              Collaborate With Us
            </div>
            <H2 className="text-4xl md:text-5xl font-serif text-white">Join the Network</H2>
            <p className="text-neutral-300 text-lg leading-relaxed font-light">
              Does your organization align with our mission of radical empowerment and entrepreneurial mindset? We welcome partners in mentorship, resource provision, B-BBEE CSI enterprise development, and academic research.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block px-10 py-4 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                Inquire About Partnership
              </Link>
              <Link href="/corporate-partnerships" className="inline-block px-10 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20">
                Corporate CSI Pathways
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
