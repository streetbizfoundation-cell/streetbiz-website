import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, Mail, Phone, MapPin, Building, ExternalLink, CheckCircle } from 'lucide-react'
import { H1, H2, Lead, Paragraph } from '@/components/common/Typography'

export const metadata: Metadata = {
  title: 'Privacy Policy | StreetBiz Foundation',
  description:
    'Read the StreetBiz Foundation Privacy Policy in compliance with POPIA (South Africa) and GDPR. Learn how we handle your personal data with transparency and care.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-neutral-900 py-20 md:py-28 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
              <Shield className="w-4 h-4" />
              Compliance & Data Protection
            </div>
            <H1 className="text-white text-4xl md:text-6xl font-serif">Privacy Policy</H1>
            <Lead className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              StreetBiz Foundation is committed to safeguarding the privacy and personal data of our youth changemakers, international mentors, donors, and partners in full compliance with POPIA and GDPR.
            </Lead>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-400 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                <strong>Effective Date:</strong> August 2026
              </span>
              <span>•</span>
              <span><strong>NPC Reg:</strong> 2018/356208/08</span>
              <span>•</span>
              <span><strong>Tax Number:</strong> 9193637247</span>
              <span>•</span>
              <span>Section 18A Approved PBO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Quick Summary Card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-wider text-xs">
                <Lock className="w-4 h-4" />
                Our Privacy Commitment
              </div>
              <H2 className="text-2xl md:text-3xl font-serif text-neutral-900">Your Trust & Privacy Matter</H2>
              <Paragraph className="text-neutral-600 leading-relaxed">
                Whether you are applying to the <strong>Be a Nelson Movement</strong>, mentoring as a <strong>Dolphin coach</strong>, funding grassroots community enterprises, or subscribing to our updates, your personal data is handled securely, ethically, and strictly for developmental and statutory purposes. We do not sell, rent, or trade your personal information.
              </Paragraph>
            </div>

            {/* Section 1: Introduction */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">1</span>
                <H2 className="text-2xl font-serif text-neutral-900">Introduction</H2>
              </div>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  StreetBiz Entrepreneurial Mindset Foundation NPC (operating as <strong>StreetBiz Foundation</strong>, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a registered Non-Profit Company in the Republic of South Africa (Registration Number: <strong>2018/356208/08</strong>; Tax Number: <strong>9193637247</strong>; Section 18A Approved Public Benefit Organisation).
                </p>
                <p>
                  We are committed to safeguarding the privacy and personal information of our website visitors, program applicants, youth changemakers (&quot;Nelsons&quot;), international and local mentors (&quot;Dolphins&quot;), donors, corporate partners, and volunteers.
                </p>
                <p>
                  This Privacy Policy sets out our data processing practices in compliance with:
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span>The <strong>Protection of Personal Information Act, No. 4 of 2013 (POPIA)</strong> of South Africa; and</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span>The <strong>General Data Protection Regulation (EU) 2016/679 (GDPR)</strong>, as applicable to international mentors, academic collaborators, and donors.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2: Responsible Party & Contact Details */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">2</span>
                <H2 className="text-2xl font-serif text-neutral-900">Responsible Party &amp; Contact Details</H2>
              </div>
              <p className="text-neutral-600">
                StreetBiz Entrepreneurial Mindset Foundation NPC acts as the <strong>Responsible Party</strong> (Data Controller).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-wider">
                    <Building className="w-4 h-4 text-primary-500" />
                    Registered Office
                  </div>
                  <p className="text-sm text-neutral-700 font-medium">
                    205 Zeezicht, Beach Boulevard, Table View, Cape Town, Western Cape, 7439, South Africa
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    Postal Address
                  </div>
                  <p className="text-sm text-neutral-700 font-medium">
                    PO Box 65076, Erasmusrand, Gauteng, 0165, South Africa
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-wider">
                    <Mail className="w-4 h-4 text-primary-500" />
                    Email Contacts
                  </div>
                  <div className="space-y-1">
                    <a href="mailto:hello@streetbiz.co.za" className="block text-sm text-primary-600 font-medium hover:underline">hello@streetbiz.co.za</a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-wider">
                    <Phone className="w-4 h-4 text-primary-500" />
                    Telephone &amp; Officer
                  </div>
                  <p className="text-sm text-neutral-700 font-medium">+27 82 566 1484</p>
                  <p className="text-xs text-neutral-500">Information Officer: CEO / Executive Administration (hello@streetbiz.co.za)</p>
                </div>
              </div>
            </div>

            {/* Section 3: Categories of Personal Information */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">3</span>
                <H2 className="text-2xl font-serif text-neutral-900">Categories of Personal Information We Collect</H2>
              </div>
              <p className="text-neutral-600">
                We collect personal information directly when you visit our site, submit forms, apply for initiatives, donate, or volunteer:
              </p>
              <div className="space-y-4">
                {[
                  {
                    num: '1',
                    title: 'General Inquiries & Contact Forms',
                    desc: 'Full name, email address, phone number, organization name, and inquiry details.',
                  },
                  {
                    num: '2',
                    title: 'Newsletter & Updates',
                    desc: 'Name, email address, and communication preferences.',
                  },
                  {
                    num: '3',
                    title: 'Program Applicants & Participants ("Nelsons")',
                    desc: 'Full legal name, date of birth, identity/passport number, contact details, township location, education history, enterprise pitch submissions, project milestones, and course progress records.',
                  },
                  {
                    num: '4',
                    title: 'Mentors, Coaches & Volunteers ("Dolphins")',
                    desc: 'Name, email, professional background, LinkedIn profile, geographic location, time zone, and session logs.',
                  },
                  {
                    num: '5',
                    title: 'Donors & Sponsors',
                    desc: 'Name, organization details, billing address, donation amounts, payment reference IDs, and tax information required for issuing South African Section 18A Tax Certificates. (Note: Credit card transactions are handled securely by external, PCI-compliant payment gateways; StreetBiz does not store raw credit card numbers).',
                  },
                  {
                    num: '6',
                    title: 'Media & Storytelling',
                    desc: 'Photographs, video recordings, audio interviews, and case studies captured during workshops, bootcamps, and events (processed strictly with prior consent).',
                  },
                  {
                    num: '7',
                    title: 'Website Usage & Cookies',
                    desc: 'IP address, browser type, device details, and page interaction analytics.',
                  },
                ].map((cat) => (
                  <div key={cat.num} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 flex gap-4 items-start">
                    <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-white border border-neutral-200 text-neutral-900 font-bold text-xs shrink-0 mt-0.5">
                      {cat.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-neutral-900 text-base mb-1">{cat.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{cat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Lawful Bases for Processing */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">4</span>
                <H2 className="text-2xl font-serif text-neutral-900">Lawful Bases for Processing</H2>
              </div>
              <p className="text-neutral-600">
                Under POPIA and GDPR, we process data on the following lawful grounds:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Consent', text: 'Clear, explicit consent provided during newsletter signups, program applications, and media release forms.' },
                  { title: 'Contractual & Programmatic Necessity', text: 'To deliver educational courses, mentorship pairing, bootcamps, and certification.' },
                  { title: 'Legal Obligation', text: 'To meet statutory requirements under South African law, including CIPC governance and SARS tax reporting for Section 18A donations.' },
                  { title: 'Legitimate Interests', text: 'To maintain site security, evaluate social impact, and expand community opportunities.' },
                ].map((base) => (
                  <div key={base.title} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                    <h3 className="font-bold text-neutral-900">{base.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{base.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Purpose of Processing */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">5</span>
                <H2 className="text-2xl font-serif text-neutral-900">Purpose of Processing</H2>
              </div>
              <div className="space-y-3">
                {[
                  'Review applications and enroll participants in the Be a Nelson Movement, bootcamps, and academic partnerships (e.g., Democratizing Innovation Institute, RebelBase).',
                  'Pair youth entrepreneurs with global mentors for regular online coaching.',
                  'Process donations, issue tax-deductible Section 18A receipts, and provide donor reporting.',
                  'Share community impact stories and documentary features (with explicit subject consent).',
                  'Maintain website functionality, prevent fraud, and comply with regulatory audits.',
                ].map((purpose, i) => (
                  <div key={i} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span>{purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6: Cross-Border Data Transfers */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">6</span>
                <H2 className="text-2xl font-serif text-neutral-900">Cross-Border Data Transfers</H2>
              </div>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  StreetBiz Foundation collaborates with international partners, including global academic and innovation platforms (Democratizing Innovation Institute in the USA, RebelBase), and international mentors across Europe and North America.
                </p>
                <p>When data is transferred across South African borders:</p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>We verify that recipient jurisdictions or platforms maintain adequate data protection safeguards aligned with POPIA;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>We utilize standard data transfer agreements and confidentiality commitments; or</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>We obtain explicit consent from the participant for international mentorship pairing.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7: Third-Party Disclosures */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">7</span>
                <H2 className="text-2xl font-serif text-neutral-900">Third-Party Disclosures</H2>
              </div>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  We do not sell, rent, or trade personal data. We share data solely with trusted third-party service providers performing essential functions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm">Learning &amp; Collaboration</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      RebelBase, Democratizing Innovation Institute (DI²), Google Workspace, Zoom, Microsoft Teams.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm">Payment &amp; Banking</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Regulated payment gateways (e.g., PayPal) and commercial banking partners.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm">Statutory Bodies</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      SARS, CIPC, and the Department of Social Development as legally mandated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8: Data Security & Retention */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">8</span>
                <H2 className="text-2xl font-serif text-neutral-900">Data Security &amp; Retention</H2>
              </div>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  <strong>Security:</strong> We apply technical and organizational safeguards (access controls, encryption, secure cloud infrastructure) to protect personal data from unauthorized access or destruction.
                </p>
                <p>
                  <strong>Retention:</strong> Personal data is retained only as long as necessary to fulfill the intended purpose or comply with statutory retention periods (e.g., Section 18A financial and donation records are retained for 5 years per SARS requirements).
                </p>
              </div>
            </div>

            {/* Section 9: Special Personal Information & Minors */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">9</span>
                <H2 className="text-2xl font-serif text-neutral-900">Special Personal Information &amp; Minors</H2>
              </div>
              <div className="space-y-3 text-neutral-600 leading-relaxed">
                <p>
                  We do not knowingly collect personal information from individuals under 18 without verifiable parental or guardian consent.
                </p>
                <p>
                  Special personal information (such as emergency medical information for field expeditions or demographic data for equality monitoring) is processed strictly in accordance with Sections 26–33 of POPIA.
                </p>
              </div>
            </div>

            {/* Section 10: Your Data Rights */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">10</span>
                <H2 className="text-2xl font-serif text-neutral-900">Your Data Rights</H2>
              </div>
              <p className="text-neutral-600">
                Under POPIA and the GDPR, you have the following rights regarding your personal information:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Right to Access', desc: 'Request confirmation and copies of personal data held about you.' },
                  { title: 'Right to Correction', desc: 'Request rectification of inaccurate or outdated information.' },
                  { title: 'Right to Deletion', desc: 'Request destruction or deletion of your data where retention is no longer justified.' },
                  { title: 'Right to Object & Restrict', desc: 'Object to processing based on legitimate interests or direct marketing.' },
                  { title: 'Right to Withdraw Consent', desc: 'Revoke previously granted consent at any time without penalty.' },
                ].map((right) => (
                  <div key={right.title} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
                    <h3 className="font-bold text-neutral-900 text-sm">{right.title}</h3>
                    <p className="text-neutral-600 text-xs leading-relaxed">{right.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-600 pt-2">
                To exercise any of these rights, please email us at <a href="mailto:hello@streetbiz.co.za" className="text-primary-600 font-medium hover:underline">hello@streetbiz.co.za</a>.
              </p>
            </div>

            {/* Section 11: Complaints to Information Regulator */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">11</span>
                <H2 className="text-2xl font-serif text-neutral-900">Complaints to the Information Regulator</H2>
              </div>
              <p className="text-neutral-600">
                If you have unresolved concerns about our data processing practices under POPIA, you may lodge a complaint with the South African Information Regulator:
              </p>
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-3 text-sm">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-bold text-neutral-900">The Information Regulator (South Africa)</span>
                  <a
                    href="https://inforegulator.org.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 font-medium hover:underline text-xs"
                  >
                    Visit Website <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="space-y-1 text-neutral-600">
                  <p><strong>Email:</strong> POPIAComplaints@inforegulator.org.za / enquiries@inforegulator.org.za</p>
                  <p><strong>Physical Address:</strong> JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</p>
                </div>
              </div>
            </div>

            {/* Footer Navigation Back Link */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-neutral-200">
              <Link href="/terms" className="text-primary-600 font-medium hover:underline text-sm">
                View Terms of Service &amp; Code of Conduct →
              </Link>
              <Link href="/contact" className="text-neutral-500 hover:text-neutral-800 text-sm">
                Have a privacy question? Contact our Information Officer
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
