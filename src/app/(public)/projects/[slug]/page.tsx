import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
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
              <div className="prose prose-lg prose-neutral max-w-none">
                {project.content ? (
                  project.content.split('\n\n').map((paragraph, index) => (
                    <Paragraph key={index} className="text-neutral-700 text-lg leading-relaxed mb-6">
                      {paragraph}
                    </Paragraph>
                  ))
                ) : (
                  <Paragraph className="text-neutral-700 text-lg leading-relaxed mb-6">
                    {project.description}
                  </Paragraph>
                )}
              </div>

              {/* Objectives */}
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
