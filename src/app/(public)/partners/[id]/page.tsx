import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { partners } from '@/content/partners'
import { H2, Paragraph } from '@/components/common/Typography'

type Props = {
  params: { id: string }
}

export default function PartnerDetail({ params }: Props) {
  const partner = partners.find((p) => p.id === params.id)
  if (!partner) return <div className="p-12">Partner not found.</div>

  return (
    <main className="py-20">
      <div className="container max-w-4xl mx-auto">
        <div className="flex gap-8 items-center mb-8">
          <div className="h-28 w-28 relative">
            <Image src={partner.logo_url} alt={`${partner.name} logo`} fill className="object-contain" />
          </div>
          <div>
            <H2 className="text-3xl">{partner.name}</H2>
            {partner.website_url && (
              <Link href={partner.website_url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 inline-flex items-center gap-2">
                Visit website
                <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {partner.excerpt && <Paragraph className="mb-6">{partner.excerpt}</Paragraph>}
        {partner.description ? (
          <div className="prose max-w-none text-neutral-700" dangerouslySetInnerHTML={{ __html: partner.description }} />
        ) : (
          <Paragraph className="text-neutral-600">More details available on request.</Paragraph>
        )}
      </div>
    </main>
  )
}
