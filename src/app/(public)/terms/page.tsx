import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, HeartHandshake, Award, Mail, Phone, MapPin, Building, CheckCircle, AlertTriangle } from 'lucide-react'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'

export const metadata: Metadata = {
  title: 'Terms of Service & Code of Conduct | StreetBiz Foundation',
  description:
    'Review the official Terms of Service and Code of Conduct for StreetBiz Foundation, the Be a Nelson Movement, participants, mentors, and donors.',
}

export default function TermsPage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-neutral-900 py-20 md:py-28 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
              <FileText className="w-4 h-4" />
              Governance &amp; Community Standards
            </div>
            <H1 className="text-white text-4xl md:text-6xl font-serif">Terms of Service &amp; Code of Conduct</H1>
            <Lead className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              Setting standards of excellence, mutual respect, accountability, and Ubuntu for the Be a Nelson Movement, mentors, participants, and supporters.
            </Lead>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-400 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                <strong>Effective Date:</strong> August 2026
              </span>
              <span>•</span>
              <span><strong>NPC Reg:</strong> 2018/356208/08</span>
              <span>•</span>
              <span>Section 18A Public Benefit Organisation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Quick Summary Box */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-wider text-xs">
                <HeartHandshake className="w-4 h-4" />
                Our Community Charter
              </div>
              <H2 className="text-2xl md:text-3xl font-serif text-neutral-900">Built on Ubuntu, Integrity, and Action</H2>
              <Paragraph className="text-neutral-600 leading-relaxed">
                By participating in StreetBiz Foundation programmes, applying as a Nelson, serving as an international Dolphin coach, making a contribution, or using this platform, you join a community dedicated to ethical leadership and positive community transformation.
              </Paragraph>
            </div>

            {/* Section 1: Acceptance of Terms */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">1</span>
                <H2 className="text-2xl font-serif text-neutral-900">Acceptance of Terms</H2>
              </div>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  These Terms of Service &amp; Code of Conduct (&quot;Terms&quot;) govern your use of the website (<a href="https://streetbiz.co.za" className="text-primary-600 hover:underline">https://streetbiz.co.za</a>), programs, digital portals, donation systems, and community initiatives operated by StreetBiz Entrepreneurial Mindset Foundation NPC (<strong>StreetBiz Foundation</strong>, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, Registration No: <strong>2018/356208/08</strong>).
                </p>
                <p>
                  By accessing our website, applying for programs, donating, volunteering, or participating in the <strong>Be a Nelson Movement</strong>, you agree to these Terms and our <Link href="/privacy" className="text-primary-600 font-medium hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>

            {/* Section 2: Website Use & Intellectual Property */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">2</span>
                <H2 className="text-2xl font-serif text-neutral-900">Website Use &amp; Intellectual Property</H2>
              </div>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <h3 className="font-bold text-neutral-900 text-sm">1. Permitted Use</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    You agree to use the website solely for lawful, educational, and mission-aligned purposes. Unauthorized access, data extraction, scraping, or interference with site infrastructure is strictly prohibited.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <h3 className="font-bold text-neutral-900 text-sm">2. Intellectual Property</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    All materials on this site—including logos, trademarks, program frameworks (&quot;Triple E Framework&quot;, &quot;Be a Nelson Movement&quot;, &quot;Pilgrims Theology&quot;), course materials, text, photography, and video productions—are the property of StreetBiz Foundation or its academic partners.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <h3 className="font-bold text-neutral-900 text-sm">3. Limited License</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Materials may be viewed or downloaded for non-commercial, personal, or educational use only. Commercial exploitation or unauthorized reproduction requires prior written approval from StreetBiz leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Program Applications & Participant Commitments */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">3</span>
                <H2 className="text-2xl font-serif text-neutral-900">Program Applications &amp; Participant Commitments</H2>
              </div>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span><strong>Application Accuracy:</strong> Applicants to the Be a Nelson 1-Year Journey, bootcamps, and associated courses must provide accurate, complete, and truthful information.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span><strong>Participation Standards:</strong> Selected participants (&quot;Nelsons&quot;) commit to attending scheduled workshops, engaging constructively with assigned mentors (&quot;Dolphins&quot;), completing practical enterprise milestones (e.g., via the RebelBase platform), and reporting community action outcomes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span><strong>Alumni Standing:</strong> Progression to alumni benefits, facilitation roles, and advanced pitching opportunities is contingent upon ongoing adherence to our standards and Code of Conduct.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4: Donations, Sponsorships & Section 18A Tax Receipts */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">4</span>
                <H2 className="text-2xl font-serif text-neutral-900">Donations, Sponsorships &amp; Section 18A Tax Receipts</H2>
              </div>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm">Processing &amp; Section 18A Deductibility</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Donations may be made via integrated online payment gateways or direct bank transfer. As an approved PBO under Section 18A of the South African Income Tax Act, we issue official tax receipts for qualifying donations upon submission of donor tax details.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm">International Giving &amp; Refunds</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Contributions via international partners comply with applicable jurisdictional regulations. Donations are voluntary philanthropic gifts. Refunds are processed only in cases of demonstrable administrative error reported within 14 days at <a href="mailto:hello@streetbiz.co.za" className="text-primary-600 font-medium">hello@streetbiz.co.za</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: In-Person Events, Bootcamps & Fieldwork */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">5</span>
                <H2 className="text-2xl font-serif text-neutral-900">In-Person Events, Bootcamps &amp; Fieldwork</H2>
              </div>
              <div className="space-y-3 text-neutral-600 leading-relaxed">
                <p>
                  <strong>Safety Compliance:</strong> Attendees at physical bootcamps, conferences, and off-the-grid expeditions (such as the MasterPeace Walk or regional Be a Nelson Walks) must follow safety protocols established by event organizers.
                </p>
                <p>
                  <strong>Indemnity:</strong> Participation in physical treks and fieldwork is voluntary. Participants (or guardians for minors) must complete standard activity waivers acknowledging personal assumption of risk.
                </p>
              </div>
            </div>

            {/* Section 6: Code of Conduct */}
            <div className="bg-primary-50/50 rounded-3xl p-8 md:p-10 border border-primary-200/60 shadow-sm space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  Chapter 11 Handbook
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-sm">6</span>
                  <H2 className="text-2xl md:text-3xl font-serif text-neutral-900">Code of Conduct</H2>
                </div>
                <p className="text-sm text-neutral-600">
                  Aligned with Chapter 11 of the StreetBiz Foundation Handbook and Committee Terms of Reference.
                </p>
              </div>

              {/* 6.1 Purpose & Guiding Values */}
              <div className="space-y-3 bg-white p-6 rounded-2xl border border-neutral-200">
                <H3 className="text-lg font-serif text-neutral-900">6.1 Purpose &amp; Guiding Values</H3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  This Code of Conduct ensures a safe, respectful, and empowering environment grounded in <strong>Ubuntu</strong>, mutual dignity, ethical responsibility, and Nelson Mandela’s legacy of transformative leadership.
                </p>
              </div>

              {/* 6.2 Applying and Use of Services */}
              <div className="space-y-3 bg-white p-6 rounded-2xl border border-neutral-200">
                <H3 className="text-lg font-serif text-neutral-900">6.2 Applying and Use of Services</H3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Provide honest, accurate information during applications and onboarding.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Use Foundation resources (including data support, bursaries, digital tools, and facilities) strictly for their intended developmental purposes without exploitation or wastage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Dedicate necessary time and effort to coaching sessions, educational assignments, and cohort meetings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Notify coordinators promptly if changing personal circumstances affect your participation.</span>
                  </li>
                </ul>
              </div>

              {/* 6.3 Marketing, Media & Representation */}
              <div className="space-y-3 bg-white p-6 rounded-2xl border border-neutral-200">
                <H3 className="text-lg font-serif text-neutral-900">6.3 Marketing, Media &amp; Representation</H3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Respect and uphold the Foundation’s public reputation and mission across public and digital platforms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Do not issue unauthorized public, press, or commercial statements on behalf of StreetBiz Foundation without prior board authorization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Grant permission for photographs, video interviews, and project case studies captured during official activities to be used in non-profit reporting, marketing, and storytelling, as outlined in our Privacy Policy.</span>
                  </li>
                </ul>
              </div>

              {/* 6.4 Responsible Conduct & Safeguarding */}
              <div className="space-y-3 bg-white p-6 rounded-2xl border border-neutral-200">
                <H3 className="text-lg font-serif text-neutral-900">6.4 Responsible Conduct &amp; Safeguarding</H3>
                <div className="space-y-3 text-sm text-neutral-600">
                  <p>
                    Treat fellow participants, staff, international mentors, and community members with dignity, respect, and fairness.
                  </p>
                  <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/70 text-red-900 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-red-700">
                      <AlertTriangle className="w-4 h-4" />
                      Zero Tolerance Policy
                    </div>
                    <p className="text-xs text-red-800 leading-relaxed">
                      Harassment, discrimination, bullying, sexual misconduct, hate speech, or abuse based on race, gender, sexual orientation, disability, religion, age, or background is strictly prohibited.
                    </p>
                  </div>
                  <p>
                    <strong>Youth Safeguarding:</strong> Mentors and facilitators working with young learners must observe professional boundaries and adhere to transparent communication guidelines.
                  </p>
                  <p>
                    <strong>Confidentiality:</strong> Respect the confidentiality of personal stories, group discussions, and proprietary community project concepts shared within cohorts.
                  </p>
                </div>
              </div>

              {/* 6.5 Enforcement & Consequences */}
              <div className="space-y-3 bg-white p-6 rounded-2xl border border-neutral-200">
                <H3 className="text-lg font-serif text-neutral-900">6.5 Enforcement &amp; Consequences</H3>
                <p className="text-sm text-neutral-600">
                  Violations of this Code of Conduct will be reviewed by the StreetBiz leadership. Depending on severity, actions may include:
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Formal written warnings and corrective guidance;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Suspension from coaching access, committee responsibilities, or event attendance;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    <span>Permanent expulsion from programs, revocation of alumni benefits, or referral to legal authorities where warranted.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7: Disclaimer & Limitation of Liability */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">7</span>
                <H2 className="text-2xl font-serif text-neutral-900">Disclaimer &amp; Limitation of Liability</H2>
              </div>
              <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                <p>
                  <strong>1. Educational Purpose:</strong> StreetBiz Foundation provides educational training, mentorship, and capacity-building. We do not guarantee specific commercial revenues, employment outcomes, or third-party funding.
                </p>
                <p>
                  <strong>2. Website &quot;As Is&quot;:</strong> Our website and digital resources are provided on an &quot;as is&quot; and &quot;as available&quot; basis without express or implied warranties.
                </p>
                <p>
                  <strong>3. Liability Limitation:</strong> To the extent permitted by South African law, StreetBiz Foundation, its directors, employees, and volunteers shall not be liable for indirect, incidental, or consequential damages resulting from website use or program participation.
                </p>
              </div>
            </div>

            {/* Section 8: Governing Law & Jurisdiction */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">8</span>
                <H2 className="text-2xl font-serif text-neutral-900">Governing Law &amp; Jurisdiction</H2>
              </div>
              <div className="space-y-2 text-sm text-neutral-600 leading-relaxed">
                <p>
                  These Terms are governed by and construed under the laws of the <strong>Republic of South Africa</strong>. Any legal disputes shall be subject to the exclusive jurisdiction of the courts of South Africa (Western Cape Division, Cape Town).
                </p>
              </div>
            </div>

            {/* Section 9: Contact Information */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm">9</span>
                <H2 className="text-2xl font-serif text-neutral-900">Contact Information</H2>
              </div>
              <p className="text-sm text-neutral-600">
                For questions regarding these Terms or the Code of Conduct, please reach out to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-wider">
                    <Building className="w-4 h-4 text-primary-500" />
                    Organization
                  </div>
                  <p className="text-sm text-neutral-800 font-bold">StreetBiz Entrepreneurial Mindset Foundation NPC</p>
                  <p className="text-xs text-neutral-600">Reg: 2018/356208/08</p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-wider">
                    <Mail className="w-4 h-4 text-primary-500" />
                    Direct Inquiries
                  </div>
                  <div className="space-y-1">
                    <a href="mailto:hello@streetbiz.co.za" className="block text-sm text-primary-600 font-medium hover:underline">hello@streetbiz.co.za</a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    Physical &amp; Postal Address
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    205 Zeezicht, Beach Boulevard, Table View, Cape Town, Western Cape, 7439, South Africa<br />
                    <span className="text-neutral-500">Postal: PO Box 65076, Erasmusrand, Gauteng, 0165</span>
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-wider">
                    <Phone className="w-4 h-4 text-primary-500" />
                    Telephone
                  </div>
                  <p className="text-sm text-neutral-700 font-medium">+27 82 566 1484 / +27 79 842 0873</p>
                </div>
              </div>
            </div>

            {/* Footer Navigation Back Link */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-neutral-200">
              <Link href="/privacy" className="text-primary-600 font-medium hover:underline text-sm">
                ← View Privacy Policy (POPIA / GDPR)
              </Link>
              <Link href="/contact" className="text-neutral-500 hover:text-neutral-800 text-sm">
                Contact StreetBiz Leadership
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
