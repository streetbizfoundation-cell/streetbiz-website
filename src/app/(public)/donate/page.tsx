'use client'

import { useState } from 'react'
import Image from 'next/image'
import { H1, H2, Paragraph, Lead } from '@/components/common/Typography'
import { CreditCard, Globe, Heart, Sparkles, ShieldCheck } from 'lucide-react'

const currencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
]

export default function DonatePage() {
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState('25')

  const selectCurrency = (code: string) => {
    setCurrency(code)
  }

  const selectAmount = (val: string) => {
    setAmount(val)
  }

  return (
    <main className="bg-white">
      {/* Hero with Nelson Mandela Balcony Photo */}
      <section className="bg-neutral-950 py-24 md:py-32 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extra images/Long Walk 2018 -  Grateful to complete the Long Walk for the Entrepreneurial Mindset.jpg"
            alt="Dr. Nico de Klerk completing the Long Walk at Cape Town City Hall alongside Nelson Mandela statue"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-black/60 z-10" />
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-primary-400" />
              Invest in Transformation
            </div>
            <H1 className="text-white text-5xl md:text-7xl font-serif leading-tight">
              Support the <span className="text-primary-400 italic">Movement</span>
            </H1>
            <Lead className="text-neutral-200 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              Your contribution provides access to higher education, global mentorship, and catalytic venture opportunities for young changemakers across South Africa.
            </Lead>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Why give & Impact Photo */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <H2 className="text-4xl md:text-5xl font-serif italic text-neutral-900">
                  Every contribution makes a tangible difference.
                </H2>
                <Paragraph className="text-lg text-neutral-600 leading-relaxed">
                  StreetBiz Foundation is dedicated to identifying and equipping the next generation of Nelsons. When you donate, you are directly funding the growth of a movement built on leadership, entrepreneurial mindset, and community action.
                </Paragraph>
              </div>

              {/* Community Impact Photo Card */}
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
                <Image
                  src="/images/stories/from-ngobozana-to-the-world-1.jpg"
                  alt="Young founders collaborating in community workspace"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-neutral-950 px-2.5 py-0.5 rounded-full inline-block">
                    Direct Community Impact
                  </span>
                  <p className="text-base font-serif font-bold mt-1">Investing in Emerging Grassroots Leaders</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
                  <Globe className="h-8 w-8 text-primary-600 mb-4" />
                  <h3 className="text-lg font-bold font-serif mb-2 text-neutral-900">Global Learning</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Supporting Nelsons to participate in international university courses, global conferences, and cross-border mentorship.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
                  <CreditCard className="h-8 w-8 text-primary-600 mb-4" />
                  <h3 className="text-lg font-bold font-serif mb-2 text-neutral-900">Digital Access</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Funding monthly high-speed data bundles, refurbished laptops, and workspace access for township innovators.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Donation Form */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-neutral-200 shadow-2xl relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-600 text-white p-4 rounded-full shadow-xl">
                  <Heart className="h-6 w-6 fill-current" />
                </div>
                
                <div className="space-y-8 pt-4">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500">
                        Select Currency
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {currencies.map((c) => (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => selectCurrency(c.code)}
                            className={`py-3.5 rounded-2xl text-sm font-bold transition-all border-2 ${
                              currency === c.code
                                ? 'border-primary-600 bg-primary-50 text-primary-600 shadow-sm'
                                : 'border-neutral-100 bg-neutral-50 text-neutral-500 hover:border-neutral-200'
                            }`}
                          >
                            {c.code} ({c.symbol})
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500">
                        Select Amount
                      </label>
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        {['10', '25', '50', '100', '250'].map((val) => (
                          <button
                            key={val}
                            type="button"
                            onClick={() => selectAmount(val)}
                            className={`py-3 rounded-2xl text-sm font-bold transition-all border-2 ${
                              amount === val
                                ? 'border-primary-600 bg-primary-50 text-primary-600 shadow-sm'
                                : 'border-neutral-100 bg-neutral-50 text-neutral-700 hover:border-neutral-200'
                            }`}
                          >
                            {currency === 'USD' ? '$' : '€'}{val}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`mailto:hello@streetbiz.co.za?subject=Donation%20Inquiry%20(${currency}%20${amount})`}
                      className="block w-full text-center py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-base rounded-full shadow-lg transition-colors"
                    >
                      Inquire About Giving {currency === 'USD' ? '$' : '€'}{amount}
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-1">
                    <div className="flex items-center justify-center gap-1.5 text-primary-700 font-bold text-xs">
                      <ShieldCheck className="w-4 h-4" />
                      Section 18A Tax Certificates Available
                    </div>
                    <p className="text-[11px] text-neutral-500">
                      Approved SARS PBO (No: 930087066). Donations are tax-deductible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
