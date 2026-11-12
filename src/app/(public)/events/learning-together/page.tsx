import type { Metadata } from 'next'
import { NewsletterArticle } from '@/components/sections/NewsletterArticle'
import { learningTogether } from '@/content/articles/unlisted'

export const metadata: Metadata = {
  title: 'Learning together | StreetBiz Foundation Events',
  description: learningTogether.subtitle,
  robots: { index: false, follow: false },
}

export default function LearningTogetherPage() {
  return <NewsletterArticle article={learningTogether} />
}
