import Link from 'next/link'
import { Card, CardHeader, CardBody, CardFooter } from '@/components/common/Card'
import { H1, H2, Lead, Paragraph } from '@/components/common/Typography'

const newsletters = [
  {
    title: "Let's Journey Together",
    description:
      'A first newsletter introducing StreetBiz Foundation’s work, mission, and how young people can stay connected.',
    href: 'https://us10.campaign-archive.com/?u=80acd5ee1259b06c495b07222&id=d27f49c2ed',
  },
  {
    title: 'Breaking Barriers: The Nelsons in Action — Issue #2',
    description:
      'The second issue celebrating The Nelsons, their stories, and how they are creating change through StreetBiz Foundation.',
    href: 'https://mailchi.mp/9a0651f7d6c5/breaking-barriers-the-nelsons-in-action-issue-2?e=7027227cc1',
  },
]

export const metadata = {
  title: 'Newsletter Archive | StreetBiz Foundation',
  description: 'Browse previous StreetBiz Foundation newsletters and open the issues you want to read.',
}

export default function NewsletterArchivePage() {
  return (
    <main>
      <section className="bg-neutral-900 text-white py-24">
        <div className="container mx-auto px-6 lg:px-0 text-center max-w-4xl">
          <p className="text-primary-500 font-semibold tracking-[0.3em] uppercase mb-4">Newsletter Archive</p>
          <H1 className="text-4xl md:text-5xl mb-6">Previous StreetBiz Newsletters</H1>
          <Lead className="text-neutral-300 max-w-3xl mx-auto">
            Browse earlier newsletters from StreetBiz Foundation, then open the issues you want to read in full.
          </Lead>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="grid gap-6 md:grid-cols-2">
            {newsletters.map((newsletter) => (
              <Card key={newsletter.title} hoverable>
                <CardHeader>
                  <H2 className="text-2xl">{newsletter.title}</H2>
                </CardHeader>
                <CardBody>
                  <Paragraph className="text-neutral-700 leading-relaxed">{newsletter.description}</Paragraph>
                </CardBody>
                <CardFooter>
                  <a
                    href={newsletter.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                  >
                    Open newsletter
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center text-neutral-600">
            <Paragraph>
              If you would like to receive future newsletters directly to your inbox, please contact us at{' '}
              <Link href="mailto:hello@streetbiz.co.za" className="text-primary-600 hover:text-primary-700">
                hello@streetbiz.co.za
              </Link>
              .
            </Paragraph>
          </div>
        </div>
      </section>
    </main>
  )
}
