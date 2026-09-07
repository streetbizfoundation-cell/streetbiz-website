import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Compass,
  Building,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Zap,
} from 'lucide-react'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'

export const metadata: Metadata = {
  title: 'Impact, Governance & Compliance | StreetBiz Foundation',
  description:
    'Explore StreetBiz Foundation’s verifiable social impact metrics, governance structure, CIPC & SARS Section 18A compliance, and institutional accountability.',
}

const reachMetrics = [
  {
    value: '25,000+',
    label: 'Community Members',
    detail: 'Engaged across 104+ townships and informal settlements nationwide.',
    icon: Users,
  },
  {
    value: '200+',
    label: 'Township High Schools',
    detail: 'Visited during national youth mindset and entrepreneurship workshops.',
    icon: GraduationCap,
  },
  {
    value: '2,750 km',
    label: 'Long Walk Project',
    detail: 'Traversed across South Africa on foot to map youth enterprise potential.',
    icon: Compass,
  },
  {
    value: '73+',
    label: 'Certified Nelsons',
    detail: 'Social entrepreneurship cohort leaders trained and incubated across SA (2023–2026).',
    icon: Award,
  },
  {
    value: '6',
    label: 'Provinces Active',
    detail: 'Western Cape, Gauteng, Eastern Cape, Free State, Mpumalanga, Limpopo.',
    icon: MapPin,
  },
  {
    value: '100%',
    label: 'Action Rate',
    detail: 'Graduating Nelsons launch an active community enterprise or project.',
    icon: Zap,
  },
]

const complianceItems = [
  {
    requirement: 'Legal Entity',
    detail: 'Non-Profit Company (NPC) incorporated under the Companies Act of South Africa',
  },
  {
    requirement: 'CIPC NPC Registration No.',
    detail: '2018 / 356208 / 08 (Established 2017)',
    highlight: true,
  },
  {
    requirement: 'SARS Tax Exemption Status',
    detail: 'Approved Public Benefit Organisation (PBO) under Section 30(3) of the Income Tax Act',
  },
  {
    requirement: 'SARS PBO Reference No.',
    detail: '930087066',
    highlight: true,
  },
  {
    requirement: 'Income Tax Reference No.',
    detail: '9193637247',
  },
  {
    requirement: 'Section 18A Status',
    detail: 'Approved under Section 18A(1)(a) — Donations are tax-deductible for individuals and corporates',
    highlight: true,
  },
  {
    requirement: 'Approved PBO Activities',
    detail: '• Community development for poor and needy persons & anti-poverty initiatives\n• Training for unemployed persons to obtain employment and launch enterprises',
  },
  {
    requirement: 'B-BBEE Compliance',
    detail: '100% Black Beneficiary Base — Qualifies corporate donors for full Socio-Economic Development (SED) and Enterprise Development (ED) scorecard points',
    highlight: true,
  },
]

const boardMembers = [
  {
    name: 'Dr. Jacobus Nicolas (Nico) de Klerk',
    role: 'Founder & Director',
    qual: 'PhD in Pilgrimage Studies, Master Trainer in Entrepreneurship (Univ. of California)',
    desc: 'Social innovator and author of No Fit. Led the 2,750km Long Walk for the Entrepreneurial Mindset and guides the foundation’s vision.',
  },
  {
    name: 'Jabulani (Jabu) Zwane',
    role: 'Director',
    qual: 'Mindset Development Specialist',
    desc: 'Former Vice-President of PSASA, leading community mindset models, coaching frameworks, and youth empowerment workshops.',
  },
  {
    name: 'Mahlatse Madisha',
    role: 'Director',
    qual: 'Strategy & Leadership Specialist',
    desc: 'Directs organizational strategy, stakeholder alignment, partnership structures, and youth development programmes.',
  },
  {
    name: 'Bafana Binda',
    role: 'Executive Administrator',
    qual: 'Operations & Programme Administration',
    desc: 'Oversees operational logistics, institutional documentation, stakeholder coordination, and monitoring & evaluation.',
  },
]

const governanceCommittees = [
  {
    title: '1. Finance & Compliance Committee',
    desc: 'Oversees budgets, cash flows, independent accounting, SARS compliance, and anti-fraud controls.',
  },
  {
    title: '2. Program & Volunteer Management Committee',
    desc: 'Tracks participant milestones, monitors cohort performance, and oversees mentor onboarding.',
  },
  {
    title: '3. Funding & Stakeholder Engagement Committee',
    desc: 'Manages transparent donor reporting, grant application governance, and institutional MOUs.',
  },
  {
    title: '4. Marketing & Media Committee',
    desc: 'Enforces participant safeguarding, privacy compliance, and ethical storytelling.',
  },
]

export default function ImpactGovernancePage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Section with Panoramic Partnership Photo */}
      <section className="bg-neutral-900 py-24 md:py-32 text-white relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/West Coast District Municipality/West Coast District Municipality (2).jpg"
            alt="StreetBiz Foundation executive leadership and municipal partners collaborating"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-black/60 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-primary-400" />
              Institutional Credibility &amp; Transparency
            </div>
            <H1 className="text-white text-4xl md:text-6xl font-serif leading-tight">
              Impact, Governance &amp; <span className="text-primary-400 italic">Compliance</span>
            </H1>
            <Lead className="text-neutral-200 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              Dismantling systemic youth unemployment through rigorous social entrepreneurship, fiduciary integrity, and verifiable community outcomes.
            </Lead>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/corporate-partnerships">
                <Button size="lg" className="rounded-full px-8">
                  Corporate &amp; CSI Partnerships
                </Button>
              </Link>
              <Link href="/donate">
                <Button variant="ghost" size="lg" className="rounded-full px-8 text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm">
                  Donate with Section 18A
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Institutional Overview */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary-600">
              <Building className="w-4 h-4" />
              Foundation Overview
            </div>
            <H2 className="text-3xl md:text-4xl font-serif text-neutral-900">
              Built on Fiduciary Discipline and Measurable Transformation
            </H2>
            <Paragraph className="text-lg text-neutral-600 leading-relaxed">
              StreetBiz Entrepreneurial Mindset Foundation NPC is a registered South African Non-Profit Company (NPC) founded in 2017 to dismantle systemic youth unemployment and inequality in townships through social entrepreneurship, experiential learning, and mindset transformation.
            </Paragraph>
            <Paragraph className="text-lg text-neutral-600 leading-relaxed">
              We operate under strict fiduciary governance, regulatory compliance, and transparent financial stewardship to ensure institutional donors, corporate grantmakers, and foundations achieve verifiable, high-impact social outcomes.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics & Reach Dashboard + Footprint Visual */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Data-Driven Impact</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Key Metrics &amp; Reach Dashboard</H2>
              <p className="text-neutral-600 text-lg">
                Tracking measurable grassroots mobilization, incubation depth, and social venture creation.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reachMetrics.map((m) => {
                const Icon = m.icon
                return (
                  <div key={m.label} className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-4xl font-bold font-serif text-neutral-900">{m.value}</div>
                      <div className="text-base font-bold text-primary-700">{m.label}</div>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{m.detail}</p>
                  </div>
                )
              })}
            </div>

            {/* Visual Footprint Banner: Long Walk */}
            <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
              <Image
                src="/images/extra images/Long Walk 2028 - Knysna school Grade 11.jpg"
                alt="Long Walk 2018 / 2028 engagement with youth at Knysna school across township communities"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1200px) 100vw, 1152px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1 max-w-xl">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-3 py-1 rounded-full inline-block">
                    Footprint in Action
                  </span>
                  <p className="text-xl font-serif font-bold text-white">
                    Walking 2,750 km Across 100+ Township Communities
                  </p>
                  <p className="text-xs text-neutral-300">
                    Direct engagement with youth on the ground to map enterprise capability and inspire changemakers
                  </p>
                </div>
              </div>
            </div>

            {/* Global Reach & Pipeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-primary-600 font-bold text-sm uppercase tracking-wider mb-4">
                    <Globe2 className="w-5 h-5" />
                    Leadership Incubation &amp; Global Networks
                  </div>
                  <ul className="space-y-3 text-neutral-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                      <span><strong>42+ Be a Nelson participants</strong> paired with international students across <strong>12 global universities</strong> via the Democratizing Innovation Institute (DI²).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                      <span><strong>100% digital enterprise modeling</strong> through the accredited <strong>RebelBase</strong> social innovation platform.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                      <span><strong>1:1 Dolphins Network:</strong> Direct virtual mentorship matching youth with executives across Europe and the USA.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                      <span><strong>Annual Pitch Showcase:</strong> Commemorating Youth Day with catalytic cash seed prizes for top validated ventures.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Accolades Card with Official Edward de Bono Award Image */}
              <div className="bg-neutral-900 text-white p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 text-primary-400 font-bold text-sm uppercase tracking-wider">
                    <Award className="w-5 h-5" />
                    Global Accolades &amp; Recognition
                  </div>
                  <ul className="space-y-3 text-neutral-300 text-sm">
                    <li className="border-l-2 border-primary-500 pl-4 space-y-1">
                      <p className="font-bold text-white">Edward de Bono Award</p>
                      <p className="text-xs text-neutral-400">Awarded for Best Global Social Innovative Project by Life Learning Academia (Slovenia).</p>
                    </li>
                    <li className="border-l-2 border-primary-500 pl-4 space-y-1">
                      <p className="font-bold text-white">UN General Assembly Science Summit (2024)</p>
                      <p className="text-xs text-neutral-400">Official presenter on Space Education for Africa &amp; Grassroots Development.</p>
                    </li>
                    <li className="border-l-2 border-primary-500 pl-4 space-y-1">
                      <p className="font-bold text-white">International Leadership Summits</p>
                      <p className="text-xs text-neutral-400">Featured at Global Entrepreneurship Summit (Toronto) and ILA (Prague).</p>
                    </li>
                  </ul>
                </div>

                <div className="relative aspect-[16/7] rounded-2xl overflow-hidden border border-neutral-800 mt-2 z-10">
                  <Image
                    src="/images/extra images/Edward de  Bono sign Award.jpg"
                    alt="Dr. Nico de Klerk receiving the Edward de Bono Global Social Innovation Award"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-[11px] text-white font-medium">
                    Official Edward de Bono Social Innovation Award Certificate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Compliance & Legal Status Table */}
      <section className="py-20 md:py-28 bg-white border-y border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Regulatory Standing</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Compliance &amp; Legal Verification</H2>
              <p className="text-neutral-600 text-lg">
                StreetBiz Foundation is fully registered and in good standing with CIPC, SARS, and B-BBEE regulatory frameworks.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-sm bg-white">
              <div className="divide-y divide-neutral-200">
                {complianceItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-start ${
                      item.highlight ? 'bg-primary-50/40' : 'hover:bg-neutral-50'
                    }`}
                  >
                    <div className="md:col-span-4 font-bold text-neutral-900 text-sm flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0" />
                      {item.requirement}
                    </div>
                    <div className="md:col-span-8 text-neutral-700 text-sm whitespace-pre-line leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Theory of Change (Triple E Framework) */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-14">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Pedagogical Framework</p>
              <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Theory of Change: Triple E</H2>
              <Paragraph className="text-neutral-600 text-lg">
                We address the root cause of inequality by bridging the <strong>mindset and exposure gap</strong> before vocational skills training.
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <H3 className="text-2xl font-serif text-neutral-900">Education</H3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Rigorous social entrepreneurship modeling, market validation, financial budgeting, and sustainability curriculum via the Democratizing Innovation Institute (DI²) and the RebelBase platform.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <H3 className="text-2xl font-serif text-neutral-900">Exposure</H3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Connecting grassroots youth with 1:1 international Dolphin mentors across the US and Europe, expanding worldviews and professional confidence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <H3 className="text-2xl font-serif text-neutral-900">Experience</H3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Off-the-grid nature expeditions (MasterPeace Walks), pitch competitions, micro-seed funding, and real-world township enterprise execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Board of Directors & Specialized Committees */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-600">Leadership &amp; Oversight</p>
                <H2 className="text-3xl md:text-5xl font-serif text-neutral-900">Board of Directors &amp; Governance</H2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Our board maintains strategic direction, legal compliance, and fiduciary discipline across all operations, ensuring accountability to community beneficiaries and institutional funders alike.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-neutral-200 group">
                  <Image
                    src="/images/extra images/Mahlatse Madisha and Nico at Gauteng Conference 2026.jpg"
                    alt="Board Directors Mahlatse Madisha and Dr. Nico de Klerk in strategic dialogue at the Gauteng Conference"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary-400">Active Stewardship</p>
                    <p className="text-sm font-serif font-bold">Directors Mahlatse Madisha &amp; Dr Nico de Klerk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Board Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boardMembers.map((b) => (
                <div key={b.name} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="font-bold text-neutral-900 text-xl font-serif">{b.name}</h3>
                      <p className="text-primary-700 font-bold text-sm">{b.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 italic font-medium">{b.qual}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed pt-2">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Specialized Committees */}
            <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary-400">Institutional Safeguards</p>
                <H3 className="text-2xl md:text-3xl font-serif text-white">Specialized Governance Committees</H3>
                <p className="text-neutral-400 text-sm">
                  In line with our formal Terms of Reference, oversight is distributed across four active committees:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {governanceCommittees.map((c) => (
                  <div key={c.title} className="p-6 rounded-2xl bg-neutral-800 border border-neutral-700 space-y-2">
                    <h4 className="font-bold text-primary-300 text-base">{c.title}</h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Funder Contact */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary-600 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
              <div className="space-y-2 max-w-xl">
                <h3 className="text-2xl md:text-3xl font-serif font-bold">Have an Institutional or Funder Inquiry?</h3>
                <p className="text-primary-100 text-sm">
                  Our executive team supplies Section 18A receipts, audited project accounting, and governance documentation upon request.
                </p>
              </div>
              <a href="mailto:hello@streetbiz.co.za?subject=Institutional%20Funder%20Inquiry">
                <Button className="rounded-full bg-white text-primary-700 hover:bg-primary-50 font-bold px-8 py-3.5 text-base shrink-0 shadow-md">
                  Contact Executive Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
