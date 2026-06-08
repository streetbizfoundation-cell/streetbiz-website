import Link from 'next/link'
import Image from 'next/image'
import { H1, H2, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { projects } from '@/content/projects'

export const metadata = {
  title: 'Projects | StreetBiz Foundation',
  description: 'Explore the StreetBiz Foundation projects: Be a Nelson Movement, Democratizing Innovation Institute, GLOBE, Be a Nelson Walk, and mentoring.',
}

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-neutral-900 text-white">
        <div className="container">
          <div className="max-w-4xl space-y-6">
            <p className="text-primary-500 font-bold tracking-[0.3em] uppercase">StreetBiz Projects</p>
            <H1 className="text-5xl md:text-7xl font-serif text-white">Access to education, experience, exposure, and mentors.</H1>
            <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
              StreetBiz projects are built to give emerging social entrepreneurs the tools, networks, and practical opportunities they need to serve their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.id} className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:shadow-xl">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  {project.image_url ? (
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-neutral-200">
                      <span className="text-neutral-400">Project Image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex-1">
                    <H2 className="mb-4 text-2xl font-serif">{project.title}</H2>
                    <Paragraph className="mb-6 line-clamp-3 text-neutral-600">
                      {project.description}
                    </Paragraph>
                    
                    {/* Objectives Preview */}
                    <ul className="mb-8 space-y-2">
                      {project.objectives.slice(0, 2).map((obj) => (
                        <li key={obj} className="flex items-start gap-2 text-sm text-neutral-700">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                          <span className="line-clamp-1">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <Button variant="secondary" className="w-full rounded-full border-primary-600 text-primary-600 hover:bg-primary-50">
                      Read More
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Grassroots leaders have a vital role in shaping a better future.</h2>
            <Paragraph className="text-xl text-neutral-600 mb-10">
              StreetBiz partnerships with universities, mentors, coaches, environmental programs, and local communities prove that changemakers do not need traditional pathways to make meaningful contributions.
            </Paragraph>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-12 py-8 text-lg font-bold">
                Partner With StreetBiz
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
