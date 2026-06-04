import Image from 'next/image'
import Link from 'next/link'
import { H3, Paragraph } from '@/components/common/Typography'

type Props = {
  id: string
  name: string
  logo_url: string
  excerpt?: string
}

export function PartnerCard({ id, name, logo_url, excerpt }: Props) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
      <div className="h-20 w-20 relative">
        {logo_url && (
          <Image src={logo_url} alt={`${name} logo`} fill className="object-contain" />
        )}
      </div>
      <div className="flex-1">
        <H3 className="text-lg font-serif mb-1">{name}</H3>
        {excerpt && <Paragraph className="text-neutral-600 text-sm">{excerpt}</Paragraph>}
      </div>
      <div className="mt-4">
        <Link href={`/partners/${id}`} className="inline-block px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-semibold">
          Read more
        </Link>
      </div>
    </div>
  )
}

export default PartnerCard
