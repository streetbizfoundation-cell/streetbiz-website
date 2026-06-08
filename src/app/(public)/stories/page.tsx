'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { H1, Lead } from '@/components/common/Typography'
import { StoryCard } from '@/components/sections/StoryCard'
import { stories as staticStories } from '@/content/stories'
import { findNelson } from '@/content/utils'

export default function StoriesPage() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filterOptions = useMemo(() => {
    const categories = Array.from(new Set(
      staticStories
        .map((story) => story.category)
        .filter((cat): cat is NonNullable<typeof cat> => Boolean(cat) && cat !== 'Nelson Stories')
    )).sort()
    return ['All', 'Nelson Stories', ...categories]
  }, [])

  const visibleStories = useMemo(() => {
    let filtered = staticStories
    
    if (selectedFilter === 'All') {
      filtered = staticStories
    } else if (selectedFilter === 'Nelson Stories') {
      filtered = staticStories.filter((story) => Boolean(story.nelson_slug))
    } else {
      filtered = staticStories.filter((story) => story.category === selectedFilter)
    }

    // Sort by publish_date in descending order (latest first)
    return filtered.sort((a, b) => 
      new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
    )
  }, [selectedFilter])

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
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-2">Filter stories</p>
              <div className="flex flex-wrap gap-3">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      selectedFilter === filter
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-neutral-500">
              Showing {visibleStories.length} {visibleStories.length === 1 ? 'story' : 'stories'}
            </div>
          </div>

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
            <div className="mt-2">
              <Link 
                href="https://streetbiz.us10.list-manage.com/subscribe?u=80acd5ee1259b06c495b07222&id=18b999605c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/30 scale-100 hover:scale-105"
              >
                Subscribe to our Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
