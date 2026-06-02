import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'StreetBiz Foundation - The Be a Nelson Movement',
  description:
    'Real stories of transformation. Supporting the Be a Nelson Movement to create lasting change in lives and communities.',
  keywords: ['nonprofit', 'transformation', 'community', 'impact', 'stories'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://streetbizfoundation.org',
    title: 'StreetBiz Foundation - The Be a Nelson Movement',
    description:
      'Real stories of transformation. Supporting the Be a Nelson Movement to create lasting change.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StreetBiz Foundation',
    description: 'The Be a Nelson Movement',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
