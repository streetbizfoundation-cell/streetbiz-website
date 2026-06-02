import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/common/Card'
import { H3 } from '@/components/common/Typography'

interface StoryCardProps {
  story: {
    id: string
    title: string
    slug: string
    excerpt: string | null
    featured_image: string | null
    publish_date: string
  }
  nelsonName?: string | null
}

export function StoryCard({ story, nelsonName }: StoryCardProps) {
  return (
    <Link href={`/stories/${story.slug}`} className="group block">
      <Card className="overflow-hidden border-none shadow-none bg-transparent">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
          {story.featured_image ? (
            <Image
              src={story.featured_image}
              alt={story.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-neutral-400">
              <span className="text-4xl">📖</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary-600">
            <span>{new Date(story.publish_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            {nelsonName && (
              <>
                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                <span className="text-neutral-500">{nelsonName}</span>
              </>
            )}
          </div>
          
          <H3 className="text-2xl font-serif group-hover:text-primary-600 transition-colors leading-tight">
            {story.title}
          </H3>
          
          <p className="text-neutral-600 line-clamp-2 leading-relaxed italic">
            {story.excerpt}
          </p>
          
          <div className="pt-2">
            <span className="text-sm font-bold border-b-2 border-primary-500 pb-1 group-hover:border-primary-700 transition-all">
              Read Story
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
