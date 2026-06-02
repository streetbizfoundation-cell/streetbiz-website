import { H1, Lead } from '@/components/common/Typography'
import { StoryCard } from '@/components/sections/StoryCard'
import { stories as staticStories } from '@/content/stories'
import { findNelson } from '@/content/utils'

export const metadata = {
  title: 'Movement Stories | StreetBiz Foundation',
  description: 'Documentary-style stories of transformation, resilience, and community impact from the Be a Nelson movement.',
}

export default function StoriesPage() {
  const visibleStories = staticStories

  return (
    <main className="bg-white">
      {/* Narrative Header */}
      <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-bold tracking-widest uppercase mb-4">The Impact Journal</p>
            <H1 className="mb-6 font-serif">Documenting Change</H1>
            <Lead className="text-neutral-600 leading-relaxed">
              Real stories from the heart of the Be a Nelson movement. We believe in radical transparency through authentic storytelling, showcasing the grit and growth of our community.
            </Lead>
          </div>
        </div>
      </section>

      {/* Stories Feed */}
      <section className="py-20 md:py-32">
        <div className="container">
          {visibleStories.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">Our stories are currently being documented. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {visibleStories.map((story) => {
                const nelson = story.nelson_slug ? findNelson(story.nelson_slug) : null
                return (
                  <StoryCard 
                    key={story.id} 
                    story={story} 
                    nelsonName={nelson?.name}
                  />
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter/Action Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Stay connected to the movement.</h2>
            <p className="text-neutral-400 mb-10 text-lg">
              Receive monthly updates on new Nelson profiles and transformation stories directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-8 py-4 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
