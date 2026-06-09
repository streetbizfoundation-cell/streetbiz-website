'use client'

import { useState } from 'react'
import { H1, H2, Paragraph, Lead } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { CreditCard, Globe, Heart } from 'lucide-react'

const currencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
]

export default function DonatePage() {
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState('25')

  const selectCurrency = (code: string) => {
    console.log('Currency selected:', code)
    setCurrency(code)
  }

  const selectAmount = (val: string) => {
    console.log('Amount selected:', val)
    setAmount(val)
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-neutral-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black/40 to-neutral-900 opacity-90" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="text-primary-500 font-bold tracking-[0.3em] uppercase mb-4">Invest in Transformation</p>
            <H1 className="text-white mb-8">Support the Movement</H1>
            <Lead className="text-white/90 text-2xl font-light max-w-2xl">
              Your contribution helps provide access to education, mentorship, and opportunities for young changemakers across South Africa.
            </Lead>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Why give */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <H2 className="text-4xl font-serif italic">Every contribution makes a difference.</H2>
                <Paragraph className="text-xl text-neutral-600 leading-relaxed">
                  StreetBiz Foundation is dedicated to identifying and equipping the next generation of Nelsons. When you donate, you are directly funding the growth of a movement built on leadership, entrepreneurial mindset, and community action.
                </Paragraph>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
                  <Globe className="h-10 w-10 text-primary-600 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Global Impact</h3>
                  <p className="text-neutral-600">Supporting Nelsons to participate in international learning opportunities and global networks.</p>
                </div>
                <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
                  <CreditCard className="h-10 w-10 text-primary-600 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Direct Support</h3>
                  <p className="text-neutral-600">Funding laptops, digital access, and data for Nelsons in township communities.</p>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="lg:col-span-5">
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-neutral-200 shadow-2xl relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-600 text-white p-4 rounded-full shadow-xl">
                  <Heart className="h-6 w-6 fill-current" />
                </div>
                
                <div className="space-y-8">
                  {/* Selection Section */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-bold uppercase tracking-widest text-neutral-500">
                        Select Currency
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {currencies.map((c) => (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => selectCurrency(c.code)}
                            className={`py-4 rounded-2xl text-sm font-bold transition-all border-2 ${
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

                    <div className="space-y-4">
                      <label className="block text-sm font-bold uppercase tracking-widest text-neutral-500">
                        Select or Enter Amount
                      </label>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {['10', '25', '50', '100', '250'].map((val) => (
                          <button
                            key={val}
                            type="button"
                            onClick={() => selectAmount(val)}
                            className={`py-3 rounded-xl text-sm font-bold transition-all border ${
                              amount === val
                                ? 'bg-neutral-900 text-white border-neutral-900'
                                : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-900'
                            }`}
                          >
                            {val}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => selectAmount('')}
                          className={`py-3 rounded-xl text-sm font-bold transition-all border ${
                            !['10', '25', '50', '100', '250'].includes(amount)
                              ? 'bg-neutral-900 text-white border-neutral-900'
                              : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-900'
                          }`}
                        >
                          Other
                        </button>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 font-bold">
                          {currencies.find(c => c.code === currency)?.symbol}
                        </div>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.00"
                          className="w-full pl-10 h-16 text-2xl font-bold rounded-2xl border border-neutral-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          required
                          min="1"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submission Form */}
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="POST">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="nico@streetbiz.co.za" />
                    <input type="hidden" name="item_name" value="Donation to StreetBiz Foundation" />
                    <input type="hidden" name="currency_code" value={currency} />
                    <input type="hidden" name="amount" value={amount} />
                    
                    <button 
                      type="submit" 
                      className="w-full py-8 text-xl font-bold text-white bg-primary-600 rounded-2xl shadow-xl shadow-primary-600/20 hover:bg-primary-700 transition-colors active:scale-[0.98]"
                    >
                      Donate via PayPal
                    </button>
                  </form>
                  
                  <p className="text-center text-sm text-neutral-400">
                    You will be redirected to PayPal to complete your donation securely.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Accountability Section */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <H2 className="text-3xl font-serif">Accountability & Transparency</H2>
            <Paragraph className="text-neutral-600">
              StreetBiz Foundation is Section 18A certified and PBO compliant. Your donations are managed with full transparency and used specifically for the programmes and initiatives of the Be a Nelson Movement.
            </Paragraph>
          </div>
        </div>
      </section>
    </main>
  )
}
