import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Compass,
  CheckCircle2,
  Calendar,
  Mail,
  ArrowRight,
} from 'lucide-react'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'

export const metadata: Metadata = {
  title: 'South Africa Adventure with Nelsons | StreetBiz Foundation',
  description:
    'A transformative 10-day expedition along the Western Cape coastline. 15 International Adventurers sponsor and walk alongside 15 local Nelson changemakers. Future dates to be announced.',
}

const keyFacts = [
  { label: 'Status', value: 'Postponed — New Dates to be Announced' },
  { label: 'Location', value: 'Western Cape Coastline & Wilderness Trails, South Africa' },
  { label: 'Capacity', value: 'Strictly limited to 15 International Adventurers + 15 Local Nelsons' },
  { label: 'Model', value: 'Dual-Impact: Each international participant sponsors one local Nelson' },
  {
    label: "What's Included",
    value:
      '• Full accommodation, all meals, and local ground transport in SA.\n• 7 days of guided coastal and nature hiking with certified wilderness guides.\n• Full 100% sponsorship of one local Nelson to join the expedition.\n• Daily facilitated personal growth circles and MasterPeace story dialogues.',
  },
  { label: 'Expedition Partners', value: 'StreetBiz Foundation • Rebelieve Adventure • MasterPeace Global' },
]

const itineraryDays = [
  {
    day: 'Day 1',
    title: 'Arrival in Cape Town',
    desc: 'Airport reception and transfer to coastal lodging. Afternoon welcome circle, team orientation, and our opening intercultural story circle by the ocean.',
  },
  {
    day: 'Day 2',
    title: 'Table Mountain & Township Context',
    desc: 'Scenic morning ascent and orientation walk overlooking Cape Town. Afternoon visit to a local Be a Nelson community hub to meet grassroots leaders and learn about township enterprise initiatives.',
  },
  {
    day: 'Days 3 – 8',
    title: 'The 6-Day Coast & Wilderness Trek',
    desc: 'Transitioning off-the-grid along rugged cliffs, pristine beaches, and fynbos trails. Walking 12–18 km per day with morning contemplative silence, organic trail dialogues between international hikers and Nelsons, and evening MasterPeace story circles around the campfire.',
    highlight: true,
  },
  {
    day: 'Day 9',
    title: 'Social Innovation Showcase & Harvest Dinner',
    desc: 'Closing reflection gathering where local Nelsons present their social enterprise visions and community project roadmaps. Evening celebratory harvest dinner with local music and storytelling.',
  },
  {
    day: 'Day 10',
    title: 'Departure & Next Steps',
    desc: 'Farewell breakfast, final team reflections, and scheduled group transfers to Cape Town International Airport (CPT).',
  },
]

const faqs = [
  {
    q: 'Why has the 2026 expedition been postponed?',
    a: 'To ensure optimal logistical alignment, safety, and community integration with our international partners Rebelieve Adventure and MasterPeace, the expedition has been rescheduled. Confirmed future dates will be announced once finalized.',
  },
  {
    q: 'How can I stay updated on new expedition dates?',
    a: 'You can register your interest with our team at hello@streetbiz.co.za to receive direct updates as soon as the revised expedition dates and registration details are published.',
  },
  {
    q: 'What fitness level is required?',
    a: 'A moderate fitness level is recommended. Participants should be comfortable walking 12 to 18 km per day over varying terrain (sand, rocky paths, coastal trails) carrying a lightweight daypack.',
  },
  {
    q: 'How is safety managed on the trail?',
    a: 'The trek is led by certified South African wilderness guides with support vehicles, comprehensive first aid protocols, and direct emergency evacuation coordination.',
  },
  {
    q: 'How does the sponsorship model work?',
    a: 'Your registration fee covers your complete in-country expedition costs AND fully funds the participation, accommodation, equipment, and meals of one local South African youth leader ("Nelson").',
  },
]

export default function ExpeditionsPage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 blur-[130px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">
              <Calendar className="w-4 h-4" />
              Event Status: Postponed (New Dates TBA)
            </div>
            <H1 className="text-white text-4xl md:text-6xl font-serif leading-tight">
              &ldquo;Adventure with a Difference: One Journey, Two Lives Changed&rdquo;
            </H1>
            <Lead className="text-neutral-300 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              A 10-day off-the-grid expedition along the Western Cape coastline. 15 International Adventurers walk side-by-side with 15 local South African changemakers.
            </Lead>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="mailto:hello@streetbiz.co.za?subject=Inquiry:%20Future%20Expedition%20Dates">
                <Button size="lg" className="rounded-full px-8 flex items-center gap-2 bg-primary-500 text-neutral-950 hover:bg-primary-400 font-bold">
                  <Mail className="w-4 h-4" />
                  <span>Register Interest for Future Dates</span>
                </Button>
              </a>
              <a href="#itinerary">
                <Button variant="ghost" size="lg" className="rounded-full px-8 text-white border border-white/30 hover:bg-white/10">
                  View Expedition Itinerary
                </Button>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs font-medium text-neutral-400">
              <span>Partners:</span>
              <span className="text-white font-bold">StreetBiz Foundation</span>
              <span>•</span>
              <span className="text-white font-bold">Rebelieve Adventure</span>
              <span>•</span>
              <span className="text-white font-bold">MasterPeace Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Expedition Concept & Dual-Impact Model */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Vision</p>
                <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">
                  Wilderness Hiking, Cultural Dialogue &amp; Social Impact
                </H2>
                <Paragraph className="text-neutral-600 text-lg leading-relaxed">
                  In partnership with <strong>Rebelieve Adventure</strong> (Netherlands) and <strong>MasterPeace International</strong>, StreetBiz Foundation invites global changemakers to embark on a transformative 10-day journey along the Western Cape coastline of South Africa.
                </Paragraph>
                <Paragraph className="text-neutral-600 text-lg leading-relaxed">
                  This is not conventional tourism. For every international adventurer who joins, one emerging grassroots leader (&ldquo;Nelson&rdquo;) from a South African township is fully sponsored to participate.
                </Paragraph>
              </div>

              {/* 15+15 Impact Box */}
              <div className="lg:col-span-5 bg-neutral-900 text-white p-8 md:p-10 rounded-3xl space-y-6 shadow-xl border border-neutral-800">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400">The 15 + 15 Model</span>
                  <h3 className="text-3xl font-serif font-bold text-white">Dual-Impact Journey</h3>
                </div>
                <div className="space-y-4 text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>15 International Adventurers:</strong> Executives, leaders, and travellers seeking meaningful personal reflection and purpose.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>15 Local Nelson Changemakers:</strong> Youth community entrepreneurs fully sponsored to join, learn, and lead.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>100% Symmetrical:</strong> Equal footing, shared campfire dialogues, and mutual growth across cultural boundaries.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Facts Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
              {keyFacts.map((fact) => (
                <div key={fact.label} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-700">{fact.label}</p>
                  <p className="text-sm font-semibold text-neutral-900 whitespace-pre-line leading-relaxed">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. 10-Day Itinerary */}
      <section id="itinerary" className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-14">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">The Journey</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">10-Day Expedition Itinerary</H2>
              <p className="text-neutral-600 text-lg">
                An outline of the transformative coastal journey across the Western Cape.
              </p>
            </div>

            <div className="space-y-6">
              {itineraryDays.map((item) => (
                <div
                  key={item.day}
                  className={`p-8 rounded-3xl border transition-all ${
                    item.highlight
                      ? 'bg-neutral-900 text-white border-neutral-800 shadow-xl'
                      : 'bg-white text-neutral-900 border-neutral-200 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                          item.highlight ? 'bg-primary-500 text-neutral-950' : 'bg-primary-100 text-primary-800'
                        }`}
                      >
                        {item.day}
                      </span>
                    </div>
                    <H3 className={`text-xl md:text-2xl font-serif font-bold ${item.highlight ? 'text-white' : 'text-neutral-900'}`}>
                      {item.title}
                    </H3>
                  </div>
                  <p className={`text-sm md:text-base leading-relaxed ${item.highlight ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-200">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Frequently Asked Questions</p>
              <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">Expedition Details &amp; FAQs</H2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
                  <h3 className="font-bold text-neutral-900 text-base">{faq.q}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Action Box */}
            <div className="bg-primary-600 text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
              <div className="space-y-2 max-w-xl">
                <h3 className="text-2xl md:text-3xl font-serif font-bold">Have Questions About Future Expeditions?</h3>
                <p className="text-primary-100 text-sm">
                  Our leadership team is available to discuss custom corporate treks, dates, and sponsorship pathways.
                </p>
              </div>
              <a href="mailto:hello@streetbiz.co.za?subject=Expedition%20Inquiry">
                <Button className="rounded-full bg-white text-primary-700 hover:bg-primary-50 font-bold px-8 py-3.5 text-base shrink-0 shadow-md">
                  Contact Expedition Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
