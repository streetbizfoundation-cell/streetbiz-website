import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, PlayCircle, ExternalLink } from 'lucide-react'
import { H1, H2, Paragraph, Lead } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { projects } from '@/content/projects'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Helper to extract YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const youtubeId = project.video_url ? getYouTubeId(project.video_url) : null

  return (
    <main className="bg-white">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-neutral-900">
        {project.image_url && (
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        
        <div className="container relative flex h-full flex-col justify-end pb-12">
          <Link 
            href="/projects" 
            className="mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <div className="max-w-4xl">
            <H1 className="text-white mb-4 text-4xl md:text-6xl lg:text-7xl font-serif">
              {project.title}
            </H1>
            <Lead className="text-neutral-300 max-w-2xl">
              {project.description}
            </Lead>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left: Content */}
            <div className="lg:col-span-7">
              <div className="prose prose-lg prose-neutral max-w-none prose-p:text-neutral-700 prose-p:leading-relaxed prose-headings:font-serif">
                {project.content ? (
                  project.content.split(/(\[IMAGE\][\s\S]*?\[\/IMAGE\])/).map((part, idx) => {
                    if (part.startsWith('[IMAGE]')) {
                      const match = part.match(/\[IMAGE\]([\s\S]*?)\[\/IMAGE\]/)
                      if (match) {
                        const imagePath = match[1].trim()
                        return (
                          <figure key={idx} className="my-12">
                            <div className="relative w-full bg-neutral-100 rounded-3xl overflow-hidden flex items-center justify-center py-8" style={{ maxHeight: '500px' }}>
                              <Image
                                src={imagePath}
                                alt="Project image"
                                width={800}
                                height={600}
                                className="max-w-full max-h-full object-contain shadow-md"
                              />
                            </div>
                          </figure>
                        )
                      }
                    } else if (part.trim()) {
                      // Split by newlines to maintain paragraphs and markdown-like parsing
                      return part.split(/\n\s*\n/).map((paragraph, pIdx) => {
                        if (paragraph.startsWith('####')) {
                          return <h4 key={`${idx}-${pIdx}`} className="mt-10 mb-4 text-2xl font-bold text-neutral-900">{paragraph.replace('####', '').trim()}</h4>
                        }
                        if (paragraph.startsWith('###')) {
                          return <H2 key={`${idx}-${pIdx}`} className="mt-12 mb-6">{paragraph.replace('###', '').trim()}</H2>
                        }
                        if (paragraph.trim().startsWith('* ')) {
                          const items = paragraph
                            .split('\n')
                            .map((line) => line.trim())
                            .filter((line) => line.startsWith('* '))
                            .map((line) => line.replace(/^\*\s*/, '').trim())

                          return (
                            <ul key={`${idx}-${pIdx}`} className="mb-8 space-y-4 pl-6">
                              {items.map((item) => {
                                const strongMatch = item.match(/^\*\*(.*?)\*\*[\s:–-]+(.*)$/)

                                return (
                                  <li key={item} className="list-disc text-neutral-700 text-lg leading-relaxed">
                                    {strongMatch ? (
                                      <>
                                        <strong className="font-bold text-neutral-900">{strongMatch[1]}</strong>{' '}
                                        <span>–</span> {strongMatch[2]}
                                      </>
                                    ) : (
                                      item
                                    )}
                                  </li>
                                )
                              })}
                            </ul>
                          )
                        }
                        if (paragraph.startsWith('**')) {
                          const titleMatch = paragraph.match(/^\*\*(.*?)\*\*([\s\S]*)/)
                          if (titleMatch) {
                            const body = titleMatch[2].trim()
                            // Check if the body contains a Listen link (Libsyn or RebelBase)
                            const listenLinkMatch = body.match(/\[Listen on (Libsyn|RebelBase)\]\((.*?)\)/)
                            
                            if (listenLinkMatch) {
                              const platform = listenLinkMatch[1]
                              const textBeforeLink = body.replace(listenLinkMatch[0], '').trim()
                              const linkUrl = listenLinkMatch[2]
                              
                              return (
                                <div key={`${idx}-${pIdx}`} className="mb-10 bg-neutral-50 p-6 rounded-2xl border border-neutral-100 transition-all hover:bg-white hover:border-primary-200">
                                  <h4 className="text-xl font-bold text-neutral-900 mb-3">{titleMatch[1]}</h4>
                                  <Paragraph className="text-neutral-700 text-lg mb-6">
                                    {textBeforeLink}
                                  </Paragraph>
                                  <Link 
                                    href={linkUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-all shadow-md shadow-primary-600/20"
                                  >
                                    <PlayCircle className="w-5 h-5" />
                                    Listen on {platform}
                                  </Link>
                                </div>
                              )
                            }

                            return (
                              <div key={`${idx}-${pIdx}`} className="mb-6">
                                <h4 className="text-xl font-bold text-neutral-900 mb-2">{titleMatch[1]}</h4>
                                <Paragraph className="text-neutral-700 text-lg">
                                  {body}
                                </Paragraph>
                              </div>
                            )
                          }
                        }
                        if (paragraph.startsWith('[')) {
                          const linkMatch = paragraph.match(/^\[(.*?)\]\((.*?)\)$/)
                          if (linkMatch) {
                            return (
                              <div key={`${idx}-${pIdx}`} className="mb-10">
                                <Link 
                                  href={linkMatch[2]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-full border-2 border-primary-600 hover:bg-primary-600 hover:text-white transition-all shadow-md group"
                                >
                                  {linkMatch[1]}
                                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                              </div>
                            )
                          }
                        }
                        return (
                          <Paragraph key={`${idx}-${pIdx}`} className="text-neutral-700 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                            {paragraph.trim()}
                          </Paragraph>
                        )
                      })
                    }
                    return null
                  })
                ) : (
                  <Paragraph className="text-neutral-700 text-lg leading-relaxed mb-6">
                    {project.description}
                  </Paragraph>
                )}
              </div>

              {/* Video Embed */}
              {youtubeId && (
                <div className="mt-16 space-y-6">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="h-6 w-6 text-primary-600" />
                    <H2 className="text-2xl font-serif">Documentary Video</H2>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}`}
                      title={`${project.title} video`}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {project.objectives.length > 0 && (
                <div className="mt-16 rounded-3xl bg-neutral-50 p-8 md:p-12 border border-neutral-100">
                  <H2 className="text-3xl font-serif mb-8">Key Objectives</H2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.objectives.map((objective) => (
                      <div key={objective} className="flex gap-4">
                        <CheckCircle2 className="h-6 w-6 shrink-0 text-primary-600" />
                        <span className="text-neutral-800 font-medium leading-snug">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sidebar / Sticky Info */}
            <aside className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Join the Movement</h3>
                  <Paragraph className="mb-8 text-neutral-600">
                    Your support helps us scale projects like this and reach more young changemakers across South Africa.
                  </Paragraph>
                  <div className="space-y-4">
                    <Link href="/contact" className="block">
                      <Button className="w-full rounded-full py-6 text-lg font-bold">
                        Partner With Us
                      </Button>
                    </Link>
                    <Link href="/apply" className="block">
                      <Button variant="secondary" className="w-full rounded-full py-6 text-lg font-bold border-neutral-200 hover:border-neutral-900">
                        Become a Nelson
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Other Projects */}
                <div className="px-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Other Projects</h3>
                  <div className="space-y-6">
                    {projects.filter(p => p.slug !== slug).slice(0, 2).map(other => (
                      <Link key={other.id} href={`/projects/${other.slug}`} className="group block">
                        <p className="text-lg font-serif group-hover:text-primary-600 transition-colors mb-1">{other.title}</p>
                        <p className="text-sm text-neutral-500 line-clamp-1">{other.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to make a difference?</h2>
            <p className="text-xl text-neutral-400 mb-10">
              Whether you are an aspiring entrepreneur or looking to support the next generation of leaders, there is a place for you in the StreetBiz community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-white text-neutral-900 hover:bg-neutral-200 border-none">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/stories">
                <Button size="lg" variant="secondary" className="rounded-full px-10 py-7 text-lg font-bold border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                  Read Impact Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
