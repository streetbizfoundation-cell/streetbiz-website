import { H1, Lead } from '@/components/common/Typography'
import { NelsonCard } from '@/components/sections/NelsonCard'
import Link from 'next/link'
import { nelsons as staticNelsons } from '@/content/nelsons'

export const metadata = {
  title: 'Meet the Nelsons | StreetBiz Foundation',
  description: 'Discover the faces and stories of the Be a Nelson movement. Real people, real transformation.',
}

export default function NelsonsPage() {
  const topProfiles = [
    'pilasande-mlatha',
    'loyiso-pieterse',
    'zimasa-mretyana',
    'thuso-pejane',
    'muganyizi-melchoir',
    'bafana-binda',
    'mahlatse-pride-molepo',
    'tanya-mapfure',
    'mandela-nkabila',
  ]

  const topProfileRank = topProfiles.reduce<Record<string, number>>((acc, slug, index) => {
    acc[slug] = index
    return acc
  }, {})

  const visibleNelsons = [...staticNelsons].sort((a, b) => {
    const aRank = topProfileRank[a.slug] ?? Number.POSITIVE_INFINITY
    const bRank = topProfileRank[b.slug] ?? Number.POSITIVE_INFINITY

    if (aRank !== bRank) {
      return aRank - bRank
    }

    return a.name.localeCompare(b.name)
  })

  return (
    <main>
      {/* Header Section */}
      <section className="bg-neutral-900 py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary-500 font-bold tracking-widest uppercase mb-4">The Faces of Change</p>
            <H1 className="text-white mb-6">Meet the Nelsons</H1>
            <Lead className="text-neutral-400">
              Established in 2019, the Be a Nelson Movement empowers emerging grassroots changemakers to shift from survival thinking to action and independence.
            </Lead>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          {visibleNelsons.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">Our Nelson profiles are being prepared. Check back soon for stories of transformation.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {visibleNelsons.map((nelson) => (
                <NelsonCard key={nelson.id} nelson={nelson} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Become part of the story.</h2>
            <p className="text-neutral-600 mb-10 text-lg leading-relaxed">
              Your support helps provide access to education, a global network of mentors and coaches, and experience and exposure on local and global levels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
              >
                Support the Movement
              </Link>
              <Link 
                href="/about" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 font-bold rounded-full border border-neutral-200 hover:border-neutral-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
