import type { Metadata } from 'next'
import { NewsletterArticle } from '@/components/sections/NewsletterArticle'
import { justMakeItWork } from '@/content/articles/unlisted'

export const metadata: Metadata = {
  title: 'Watch Just Make It Work | StreetBiz Foundation Gallery',
  description: justMakeItWork.subtitle,
  robots: { index: false, follow: false },
}

export default function JustMakeItWorkPage() {
  return <NewsletterArticle article={justMakeItWork} />
}
