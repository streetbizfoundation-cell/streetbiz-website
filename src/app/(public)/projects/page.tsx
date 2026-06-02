import Link from 'next/link'
import { H1, H2, H3, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { BookOpen, Globe2, GraduationCap, Handshake, Route, Users } from 'lucide-react'

const projects = [
  {
    title: 'Be a Nelson Movement',
    label: 'Social Entrepreneurship',
    icon: Users,
    body: 'Established in 2019, the Be a Nelson Movement grew directly from the Long Walk for the Entrepreneurial Mindset. Inspired by Nelson Mandela, it helps youth shift from survival thinking to action and independence.',
    points: ['Access to education', 'A global network of mentors and coaches', 'Experience and exposure locally and globally'],
  },
  {
    title: 'Open Society University Network',
    label: 'Accessible Higher Education',
    icon: GraduationCap,
    body: 'Since 2023, StreetBiz has partnered with OSUN to enable Be a Nelson members to participate in courses on Social Entrepreneurship and Leading Change for Sustainability.',
    points: ['Global classroom participation', 'Community development plans', 'Peer and faculty feedback'],
  },
  {
    title: 'The GLOBE Program',
    label: 'Environmental Education',
    icon: Globe2,
    body: 'StreetBiz joined the Global Learning and Observations to Benefit the Environment Program in 2021, connecting local learners with worldwide citizen science and NASA-linked data.',
    points: ['Water, clouds, trees, and insect observations', 'Hands-on inquiry', 'Environmental learning through local investigations'],
  },
  {
    title: 'Be a Nelson Walk',
    label: 'Experience & Education',
    icon: Route,
    body: 'The Be a Nelson Walk brings participants into nature and community for shared reflection, mentoring, social justice dialogue, and practical connection with grassroots leaders.',
    points: ['Purposeful hiking', 'The Mindshift Experience', 'Cross-cultural mentoring and connection'],
  },
  {
    title: 'Dolphins Mentoring and Coaching',
    label: 'Coaching and Mentoring',
    icon: Handshake,
    body: 'Dolphin mentors and coaches provide personalized guidance, encouragement, and support to Be a Nelson members in a safe and collaborative online environment.',
    points: ['One-on-one support', 'Flexible three-month mentoring cycles', 'A volunteer network from Europe, the USA, and beyond'],
  },
  {
    title: 'StreetBiz Learning Pathways',
    label: 'Education, Experience, Exposure',
    icon: BookOpen,
    body: 'Across all projects, StreetBiz focuses on opening access to alternative ways of learning and practical exposure so community leaders can act with confidence.',
    points: ['Entrepreneurial mindset development', 'Community-based knowledge', 'Practical, actionable insight'],
  },
]

export const metadata = {
  title: 'Projects | StreetBiz Foundation',
  description: 'Explore the StreetBiz Foundation projects: Be a Nelson Movement, OSUN, GLOBE, Be a Nelson Walk, and mentoring.',
}

export default function ProjectsPage() {
  return (
    <main className="bg-white">
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

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <article key={project.title} className="rounded-lg border border-neutral-200 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-600">{project.label}</p>
                      <H2 className="text-3xl">{project.title}</H2>
                    </div>
                    <Icon className="h-10 w-10 shrink-0 text-primary-600" />
                  </div>
                  <Paragraph className="text-neutral-600">{project.body}</Paragraph>
                  <ul className="mt-6 space-y-3">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-neutral-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <H3 className="text-3xl md:text-4xl">Grassroots leaders have a vital role in shaping a better future.</H3>
              <Paragraph className="mt-4 text-lg text-neutral-600">
                StreetBiz partnerships with universities, mentors, coaches, environmental programs, and local communities prove that changemakers do not need traditional pathways to make meaningful contributions.
              </Paragraph>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10 py-6">Partner With StreetBiz</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
