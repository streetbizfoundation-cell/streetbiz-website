import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { H1 } from '@/components/common/Typography'
import { findStory, findNelson } from '@/content/utils'
import { stories as staticStories } from '@/content/stories'

interface StoryReaderPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: StoryReaderPageProps) {
  const { slug } = await params
  const visibleStory = findStory(slug)

  if (!visibleStory) return { title: 'Story Not Found' }

  return {
    title: `${visibleStory.title} | StreetBiz Foundation Stories`,
    description: visibleStory.excerpt,
  }
}

export function generateStaticParams() {
  return staticStories.map((story) => ({
    slug: story.slug,
  }))
}

export default async function StoryReaderPage({ params }: StoryReaderPageProps) {
  const { slug } = await params
  const visibleStory = findStory(slug)

  if (!visibleStory) {
    notFound()
  }

  const relatedNelson = visibleStory.nelson_slug ? findNelson(visibleStory.nelson_slug) : null

  return (
    <main className="bg-white pb-32">
      {/* Article Header */}
      <header className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container max-w-4xl">
          <Link 
            href="/stories" 
            className="text-primary-600 hover:text-primary-700 mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors"
          >
            ← Back to Stories
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-neutral-500">
              {new Date(visibleStory.publish_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            {visibleStory.is_featured && (
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest rounded-full">
                Featured Impact
              </span>
            )}
          </div>

          <H1 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
            {visibleStory.title}
          </H1>

          <p className="text-xl md:text-2xl text-neutral-600 font-serif italic leading-relaxed">
            {visibleStory.excerpt}
          </p>
        </div>
      </header>

      <article className="container max-w-3xl">
        <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-serif prose-p:leading-loose prose-p:text-neutral-700">
          {/* Parse content for inline images */}
          {visibleStory.content.split(/(\[IMAGE\][\s\S]*?\[\/IMAGE\])/).map((part, idx) => {
            if (part.startsWith('[IMAGE]')) {
              const match = part.match(/\[IMAGE\]([\s\S]*?)\[\/IMAGE\]/)
              if (match) {
                const imagePath = match[1].trim()
                return (
                  <figure key={idx} className="my-12">
                    <div className="relative w-full bg-neutral-100 rounded-2xl overflow-hidden flex items-center justify-center py-8" style={{ maxHeight: '500px' }}>
                      <Image
                        src={imagePath}
                        alt="Story image"
                        width={600}
                        height={400}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </figure>
                )
              }
            } else if (part.trim()) {
              return (
                <div key={idx} className="whitespace-pre-wrap">
                  {part}
                </div>
              )
            }
            return null
          })}
        </div>

        {/* Story Footer / Author Link */}
        {relatedNelson && (
          <div className="mt-24 pt-12 border-t border-neutral-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8 text-center">Related Nelson</h3>
            <Link 
              href={`/nelsons/${relatedNelson.slug}`}
              className="group flex flex-col md:flex-row items-center gap-8 bg-neutral-50 p-8 rounded-3xl border border-neutral-100 transition-colors hover:bg-white hover:border-primary-200"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden relative flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                {relatedNelson.image_url ? (
                  <Image 
                    src={relatedNelson.image_url} 
                    alt={relatedNelson.name} 
                    fill 
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-200" />
                )}
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {relatedNelson.name}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed max-w-md">
                  {relatedNelson.short_description}
                </p>
                <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-primary-600">
                  View Full Profile →
                </span>
              </div>
            </Link>
          </div>
        )}
      </article>

      {/* Bottom Navigation */}
      <section className="container max-w-3xl mt-24 flex justify-between items-center border-t border-neutral-100 pt-8">
        <Link href="/stories" className="font-bold text-neutral-900 hover:text-primary-600 transition-colors">
          ← All Stories
        </Link>
        <Link href="https://www.paypal.com/donate/?hosted_button_id=ZDJE4AWUAZV7Y" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary-600 text-white text-sm font-bold rounded-full hover:bg-primary-700 transition-colors">
          Support the Movement
        </Link>
      </section>
    </main>
  )
}
