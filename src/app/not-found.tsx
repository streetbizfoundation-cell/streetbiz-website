import Link from 'next/link'
import { H1, Paragraph } from '@/components/common/Typography'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Page not found</p>
        <H1 className="mt-6 text-5xl md:text-6xl font-serif">We couldn’t find that page.</H1>
        <Paragraph className="mt-6 text-lg text-neutral-600">
          The page you were looking for does not exist or may have moved. Return to the homepage to continue exploring StreetBiz Foundation.
        </Paragraph>
        <div className="mt-10">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-bold text-white hover:bg-primary-700 transition-colors">
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
