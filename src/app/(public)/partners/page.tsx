import { H1, H2 } from '@/components/common/Typography'
import PartnerCard from '@/components/partners/PartnerCard'
import { partners as staticPartners } from '@/content/partners'
import Link from 'next/link'

export const metadata = {
  title: 'Our Partners | StreetBiz Foundation',
  description:
    'The organisations and individuals who make the Be a Nelson Movement possible through collaboration, mentorship and support.',
  openGraph: {
    title: 'Our Partners | StreetBiz Foundation',
    description:
      'The organisations and individuals who make the Be a Nelson Movement possible through collaboration, mentorship and support.',
    url: 'https://streetbizfoundation.org/partners',
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
      {/* Header */}
      <section className="py-24 md:py-32 bg-neutral-50 border-b border-neutral-100">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-bold tracking-widest uppercase mb-4">Strength in Unity</p>
            <H1 className="text-5xl md:text-7xl font-serif mb-6">Our Partners</H1>
            <p className="text-xl text-neutral-600 leading-relaxed font-light">
              We don&apos;t work in isolation. The Be a Nelson Movement is powered by a network of visionary organisations and individuals dedicated to radical community transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 md:py-32">
        <div className="container">
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
      </section>

      {/* Become a Partner CTA */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <H2 className="text-4xl font-serif text-white">Join the Network</H2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Does your organisation align with our mission of radical empowerment? We are always looking for partners in mentorship, resource provision, and documentary storytelling.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-block px-10 py-5 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                Inquire About Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
