import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { H1, H2, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { findNelson, getStoriesByNelson } from '@/content/utils'
import { nelsons as staticNelsons } from '@/content/nelsons'

interface NelsonProfilePageProps {
  params: Promise<{
    slug: string
  }>
}

interface RelatedStory {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  featured_image: string | null
  publish_date: string | null
}

export async function generateMetadata({ params }: NelsonProfilePageProps) {
  const { slug } = await params
  const profile = findNelson(slug)

  if (!profile) return { title: 'Profile Not Found' }

  return {
    title: `${profile.name} | The Be a Nelson Movement`,
    description: profile.short_description,
  }
}

export function generateStaticParams() {
  return staticNelsons.map((nelson) => ({
    slug: nelson.slug,
  }))
}

export default async function NelsonProfilePage({ params }: NelsonProfilePageProps) {
  const { slug } = await params
  const staticNelson = findNelson(slug)
  const profile = staticNelson
    ? {
        ...staticNelson,
        stories: getStoriesByNelson(staticNelson.slug) as RelatedStory[],
      }
    : null

  if (!profile) {
    notFound()
  }

  const storyHighlight = profile.stories && profile.stories.length > 0 ? profile.stories[0] : null
  const storyHighlightText = storyHighlight ? storyHighlight.content.split(/\n\s*\n/)[0] : null

  return (
    <main className="bg-white">
      {/* Hero Header */}
      <section className="relative h-[55vh] md:h-[70vh] min-h-[380px] md:min-h-[500px] flex items-end">
        {profile.image_url && (
          <Image
            src={profile.image_url}
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        
        <div className="container relative z-10 pb-16">
          <Link 
            href="/nelsons" 
            className="text-white/70 hover:text-white mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors"
          >
            ← Back to All Nelsons
          </Link>
          <div className="max-w-3xl">
            <p className="text-primary-500 font-bold tracking-widest uppercase mb-2">Be a Nelson Profile</p>
            <H1 className="text-white mb-4 leading-tight">{profile.name}</H1>
            {profile.location && (
              <p className="text-white/80 text-xl font-serif italic">
                {profile.location}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Profile Bio */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <H2 className="mb-8">About {profile.name.split(' ')[0]}</H2>
              <div className="prose prose-lg prose-neutral max-w-none">
                {profile.bio ? (
                  <div className="whitespace-pre-wrap leading-relaxed text-neutral-700 text-lg">
                    {profile.bio}
                  </div>
                ) : (
                  <Paragraph>Biography coming soon...</Paragraph>
                )}
              </div>

              {storyHighlight && storyHighlightText && (
                <div className="mt-16 rounded-3xl bg-primary-50 border border-primary-100 p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary-600">Story Highlight</p>
                  <h3 className="mt-4 text-3xl font-serif text-neutral-900">{storyHighlight.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                    {storyHighlightText}
                  </p>
                  <Link href={`/stories/${storyHighlight.slug}`} className="mt-6 inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
                    Read the full story →
                  </Link>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
                  <h3 className="text-xl font-bold mb-4">Support {profile.name.split(' ')[0]}</h3>
                  <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                    By donating, you contribute directly to the resources and support systems that empower {profile.name.split(' ')[0]} and others in the movement.
                  </p>
                  <Link href="https://www.paypal.com/donate?token=KHVFspueG9Wd2H7b8oGa9jSZlB1n5-7gwRidwVCHKq4uLu4dy3tqf0fw9SUDctSwIKAA_aIl1-CmnVM3" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full py-6 text-lg rounded-full">
                      Donate in Honor of {profile.name.split(' ')[0]}
                    </Button>
                  </Link>
                </div>

                <div className="p-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Details</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-neutral-500">Joined Movement</dt>
                      <dd className="text-neutral-900 font-bold">
                        {new Date(profile.join_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </dd>
                    </div>
                    {profile.location && (
                      <div>
                        <dt className="text-sm font-medium text-neutral-500">Community</dt>
                        <dd className="text-neutral-900 font-bold">{profile.location}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      {profile.stories && profile.stories.length > 0 && (
        <section className="py-24 bg-neutral-900 text-white overflow-hidden">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <p className="text-primary-500 font-bold tracking-widest uppercase mb-4">Impact Documentary</p>
                <H2 className="text-white">Documented Chapters</H2>
              </div>
              <Link href="/stories" className="text-white font-bold underline underline-offset-8 hover:text-primary-400 transition-colors">
                View All Stories
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {(profile.stories as RelatedStory[]).map((story) => (
                <Link key={story.id} href={`/stories/${story.slug}`} className="group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                    {story.featured_image ? (
                      <Image
                        src={story.featured_image}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-800" />
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-neutral-400 line-clamp-2 italic">
                    {story.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
