import Image from 'next/image'
import Link from 'next/link'
import type { NewsletterArticle as Article } from '@/content/articles/unlisted'

export function NewsletterArticle({ article }: { article: Article }) {
  return (
    <main className="bg-white pb-24">
      <header className="pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="container max-w-3xl">
          <Link href={article.sectionHref} className="mb-8 inline-block text-sm font-bold uppercase tracking-widest text-primary-600 hover:text-primary-700">
            ← Back to {article.section}
          </Link>
          <h1 className="mb-6 font-serif text-4xl leading-tight md:text-6xl">{article.title}</h1>
          <p className="font-serif text-xl italic leading-relaxed text-neutral-600 md:text-2xl">{article.subtitle}</p>
          {article.author && <p className="mt-5 text-sm font-semibold text-neutral-600">By {article.author}</p>}
        </div>
      </header>
      <article className="container max-w-3xl">
        {article.blocks.map((block, index) => {
          if (block.type === 'photos') {
            return (
              <figure key={index} className="my-10">
                <div className={block.images.length === 1 ? 'grid grid-cols-1' : 'grid grid-cols-2 gap-3 md:gap-6'}>
                  {block.images.map((image) => (
                    <div key={image.src} className="flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-100">
                      <Image src={image.src} alt={image.alt} width={900} height={675} sizes={block.images.length === 1 ? '(max-width: 768px) 90vw, 720px' : '(max-width: 768px) 45vw, 360px'} className="h-auto max-h-[600px] w-full object-contain" />
                    </div>
                  ))}
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-neutral-500">{block.caption}</figcaption>
              </figure>
            )
          }
          if (block.type === 'heading') return <h2 key={index} className="mt-10 mb-5 font-serif text-2xl leading-snug md:text-3xl">{block.text}</h2>
          if (block.type === 'link') return <a key={index} href={block.href} target="_blank" rel="noopener noreferrer" className="mb-6 inline-flex rounded-full bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700">{block.text} ↗</a>
          return (
            <p key={index} className="mb-6 text-lg leading-relaxed text-neutral-700">
              {block.text.split(/(hello@streetbiz\.co\.za)/).map((part, partIndex) => part === 'hello@streetbiz.co.za'
                ? <a key={partIndex} href="mailto:hello@streetbiz.co.za" className="text-primary-700 underline underline-offset-4">{part}</a>
                : part)}
            </p>
          )
        })}
        <div className="mt-16 border-t border-neutral-200 pt-8">
          <Link href={article.sectionHref} className="font-semibold text-primary-600 hover:text-primary-700">← Back to {article.section}</Link>
        </div>
      </article>
    </main>
  )
}
