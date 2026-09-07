import Link from 'next/link'
import Image from 'next/image'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { Calendar, MapPin, History, CheckCircle, Sparkles } from 'lucide-react'

type EventAction = {
  label: string
  href: string
  target?: string
}

type EventItem = {
  title: string
  date: string
  location?: string
  description: string
  subtext?: string
  actions?: EventAction[]
  outcome?: string
  imageUrl?: string
  imageAlt?: string
}

const upcomingEvents: EventItem[] = [
  {
    title: 'Be a Nelson Walk / South Africa Adventure',
    date: 'Postponed — New Dates TBA',
    location: 'Western Cape, South Africa',
    description: 'A 10-day journey along South Africa’s Western Cape into the heart of personal transformation and social impact. This experience combines guided coastal hiking, story-sharing, personal growth, and connection with local social entrepreneurs. The event has been postponed; revised dates will be announced once confirmed.',
    subtext: 'A collaboration between Rebelieve Adventure, StreetBiz Foundation, and MasterPeace Global.',
    actions: [
      { label: 'Register Interest', href: 'mailto:hello@streetbiz.co.za?subject=Expedition%20Inquiry' },
    ],
  },
]

const pastEvents: EventItem[] = [
  {
    title: 'Be a Nelson Conference 2026',
    date: '13–15 July 2026',
    location: 'Ganzekraal Coastal Resort (Western Cape) & KSM, Centurion (Gauteng), South Africa',
    description: 'The Be a Nelson Conference brings Nelsons together from across provinces for leadership development, connection, and shared learning. In the Western Cape, Nelsons gathered at the Ganzekraal Coastal Resort from 13–14 July, while the Gauteng event took place at KSM in Centurion on 15 July.',
    outcome: 'The conferences successfully brought together changemakers across two provinces to connect, collaborate, and strengthen the future of the movement.',
    imageUrl: '/images/extra images/Professor Jeffrey giving workshop on Leadership in Gauteng Conference.jpg',
    imageAlt: 'Professor Jeffrey giving workshop on Leadership in Gauteng Conference',
  },
  {
    title: 'Be a Nelson Pitch Competition',
    date: 'June 16, 2025',
    description: 'StreetBiz Foundation hosted the first Be a Nelson Pitch Competition on Microsoft Teams, bringing together Nelsons and community innovators to present projects aimed at addressing social challenges. Participants pitched ideas ranging from recycling initiatives and student accommodation solutions to soup kitchen support, delivery services, and theatre-based education projects.',
    outcome: 'Cash prizes totaling R10,000 were awarded to the top three projects, sponsored by Jochem Wieringa. The event also created opportunities for feedback, mentorship, and practical growth for the participating Nelsons.',
    imageUrl: '/images/extra images/Nelsons Pitch Competition.jpg',
    imageAlt: 'Nelsons Pitch Competition',
  },
  {
    title: 'The Nelsons on Nelson Mandela Day',
    date: 'July 18, 2025',
    description: 'On Nelson Mandela Day 2025, the Be a Nelson Movement supported waste pickers across five provinces — Eastern Cape, KwaZulu-Natal, Gauteng, Free State, and Western Cape — reaching a total of 137 waste pickers. Activities were tailored to each community and included care packages, meals, and practical support.',
    outcome: 'The initiative reflected StreetBiz Foundation’s commitment to dignity, community resilience, and inclusive economic growth, while also highlighting the link between waste management, recognition, and sustainable livelihoods.',
    imageUrl: '/images/stories/mandela-day-2025-2.png',
    imageAlt: 'StreetBiz teams distributing essential care packages and meals to township waste pickers',
  },
  {
    title: 'Be a Nelson Workshop in Social Entrepreneurship',
    date: 'July 2024',
    description: 'In July 2024, StreetBiz led Be a Nelson Entrepreneurial Workshops across four South African provinces — Free State, Gauteng, KwaZulu-Natal, and Western Cape. The workshops attracted over 60 aspiring social entrepreneurs interested in developing innovative solutions for their communities.',
    outcome: 'During the workshops, StreetBiz also presented certificates to participants who successfully completed the Democratizing Innovation Institute’s Social Entrepreneurship course.',
  },
  {
    title: 'Be a Nelson / MasterPeace Walk in Nature',
    date: 'March 2024',
    description: 'This six-day, off-the-grid walk brought together 15 international participants and 18 South African youth from the Be a Nelson Movement for a journey of personal reflection and leadership development along the coastal Indian Ocean.',
    outcome: 'The experience fostered lifelong friendships across cultural boundaries and empowered participants to believe in their potential to achieve greatness, regardless of their background.',
    imageUrl: '/images/extra images/Walk 2024 (1).jpg',
    imageAlt: 'Walk 2024 (1)',
  },
  {
    title: 'UN General Assembly Science Summit & Civic Campaigns',
    date: 'September 2024–2025',
    description: 'StreetBiz Foundation participated in the Science Summit 2024 alongside the 79th UN General Assembly, where Nico de Klerk was featured as a speaker on the theme of Space Education for Africa. Concurrently, Nelsons conducted grassroots peace campaigns in township communities across South Africa.',
    outcome: 'The event focused on collaboration around the Sustainable Development Goals, local civic action, and the future of youth innovation beyond 2030.',
  },
]

export const metadata = {
  title: 'Events | Be a Nelson Movement & StreetBiz Foundation',
  description: 'Explore spaces for leadership, connection, and growth. Join our upcoming conferences, wilderness walks, and community workshops.',
}

export default function EventsPage() {
  return (
    <main>
      {/* Hero Intro with Panoramic Workshop Gathering Photo */}
      <section className="bg-neutral-950 py-24 md:py-32 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (93).jpg"
            alt="Young changemakers and faculty collaborating in an intensive workshop session"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-black/60 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-primary-400" />
                Calendar of Impact
              </div>
              <H1 className="text-white text-5xl md:text-7xl font-serif leading-tight">
                Spaces for <span className="text-primary-400 italic">Movement &amp; Growth</span>
              </H1>
              <Lead className="text-neutral-200 text-xl md:text-2xl font-light leading-relaxed max-w-4xl">
                Explore the events that bring the Be a Nelson Movement to life — spaces for leadership, connection, growth, reflection, and real-world social impact.
              </Lead>
              <Paragraph className="text-neutral-300 text-lg max-w-3xl leading-relaxed">
                From national conferences to transformational wilderness journeys, our events create opportunities for people to learn, collaborate, and walk alongside a growing network of changemakers.
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Join Us</h2>
              <H2 className="text-4xl md:text-5xl font-serif">Upcoming Events</H2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {upcomingEvents.map((event) => (
                <div key={event.title} className="group bg-neutral-50 rounded-3xl border border-neutral-100 p-6 sm:p-8 md:p-12 flex flex-col justify-between hover:bg-white hover:border-primary-200 hover:shadow-2xl transition-all duration-500">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest text-primary-600">
                        <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-100 shadow-sm">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        {event.location && (
                          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-100 shadow-sm">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </span>
                        )}
                      </div>
                      <H3 className="text-3xl md:text-4xl font-serif leading-tight group-hover:text-primary-600 transition-colors">
                        {event.title}
                      </H3>
                    </div>
                    <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                      <p>{event.description}</p>
                      {event.subtext && (
                        <p className="text-base italic bg-primary-50 p-6 rounded-2xl border-l-4 border-primary-500 text-neutral-700">
                          {event.subtext}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-12 flex flex-wrap gap-4">
                    {event.actions?.map((action) => (
                      <Link key={action.label} href={action.href} target={action.target} rel={action.target === '_blank' ? 'noopener noreferrer' : undefined} className="flex-1">
                        <Button className="w-full rounded-full py-3.5 text-base font-semibold shadow-md shadow-primary-600/10">
                          {action.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Events Matter */}
      <section className="py-24 bg-primary-700 text-white overflow-hidden relative">
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-200">The Movement Mindset</h2>
            <H2 className="text-white text-4xl md:text-6xl font-serif italic">Why Our Events Matter</H2>
            <Paragraph className="text-primary-50/90 text-xl md:text-2xl leading-relaxed font-light">
              Our events are designed to create more than attendance. They create movement. They bring people together around leadership, growth, social entrepreneurship, and practical action. They strengthen the relationships, stories, and opportunities that help the Be a Nelson Movement grow.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* Past Events with Authentic Documentation Images */}
      <section className="py-24 md:py-32 bg-neutral-50 border-y border-neutral-100">
        <div className="container">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Our Track Record</h2>
              <div className="flex items-center gap-4">
                <H2 className="text-4xl md:text-5xl font-serif">Past Events &amp; Milestones</H2>
                <History className="h-8 w-8 text-neutral-300 hidden md:block" />
              </div>
            </div>

            <div className="space-y-12">
              {pastEvents.map((event) => (
                <div key={event.title} className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left: Date & Image if available */}
                    <div className="lg:col-span-4 bg-neutral-900 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
                      {event.imageUrl ? (
                        <>
                          <Image
                            src={event.imageUrl}
                            alt={event.imageAlt || event.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent z-10" />
                          <div className="relative z-20 p-8 flex flex-col justify-between h-full">
                            <span className="text-primary-400 font-bold uppercase tracking-widest text-xs">
                              Verified Event
                            </span>
                            <div>
                              <p className="text-white font-serif text-2xl font-bold">{event.date}</p>
                              {event.location && (
                                <p className="text-xs text-neutral-300 mt-1 line-clamp-1">{event.location}</p>
                              )}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="p-8 flex flex-col justify-center text-center lg:text-left h-full">
                          <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2">Completed</span>
                          <p className="text-white font-serif text-2xl">{event.date}</p>
                          {event.location && (
                            <p className="text-xs text-neutral-400 mt-2">{event.location}</p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Right: Narrative Details */}
                    <div className="lg:col-span-8 p-6 sm:p-8 md:p-12 space-y-6 flex flex-col justify-center">
                      <H3 className="text-2xl md:text-3xl font-serif text-neutral-900">{event.title}</H3>
                      <div className="space-y-6 text-base md:text-lg text-neutral-600 leading-relaxed">
                        <p>{event.description}</p>
                        {event.outcome && (
                          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex gap-4 items-start">
                            <CheckCircle className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                            <p className="text-sm md:text-base text-neutral-700 italic">{event.outcome}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
