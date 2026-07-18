import type { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://streetbiz.co.za'),
  title: 'StreetBiz Foundation - The Be a Nelson Movement',
  description:
    'Real stories of transformation. Supporting the Be a Nelson Movement to create lasting change in lives and communities.',
  keywords: ['nonprofit', 'transformation', 'community', 'impact', 'stories'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://streetbiz.co.za',
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L20HX70X0P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L20HX70X0P');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

