import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/common/Card'
import { H3 } from '@/components/common/Typography'

interface NelsonCardProps {
  nelson: {
    id: string
    name: string
    slug: string
    short_description: string | null
    image_url: string | null
    location: string | null
  }
}

export function NelsonCard({ nelson }: NelsonCardProps) {
  return (
    <Link href={`/nelsons/${nelson.slug}`} className="group block">
      <Card className="overflow-hidden h-full border-none shadow-none bg-transparent transition-transform duration-500 group-hover:-translate-y-2">
        <div className="aspect-[3/4] relative overflow-hidden rounded-2xl mb-6">
          {nelson.image_url ? (
            <Image
              src={nelson.image_url}
              alt={nelson.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-neutral-400 text-4xl font-serif">
              {nelson.name.charAt(0)}
            </div>
          )}
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <H3 className="text-white mb-1 drop-shadow-md">
              {nelson.name}
            </H3>
            {nelson.location && (
              <p className="text-white/80 text-sm font-medium tracking-wider uppercase">
                {nelson.location}
              </p>
            )}
          </div>
        </div>
        
        <div className="px-2">
          <p className="text-neutral-600 line-clamp-3 leading-relaxed italic font-serif">
            &ldquo;{nelson.short_description || 'A story of transformation and resilience within the Be a Nelson movement.'}&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-2 text-primary-600 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
            Read Profile <span>→</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
