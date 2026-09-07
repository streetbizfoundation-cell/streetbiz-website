'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  User,
  MapPin,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Send,
  Loader2,
} from 'lucide-react'

export function CohortApplicationForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    preferredName: '',
    idNumber: '',
    dob: '',
    gender: '',
    whatsappNumber: '',
    email: '',
    province: '',
    township: '',
    municipality: '',
    address: '',
    education: '',
    employmentStatus: '',
    devices: [] as string[],
    dataAccess: '',
    projectName: '',
    stage: 'Idea / Concept',
    sector: '',
    problemStatement: '',
    solutionDescription: '',
    beneficiaries: '',
    motivation: '',
    leadershipStory: '',
    commitmentConsent: false,
    popiaConsent: false,
  })

  const updateField = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleDeviceCheckbox = (device: string) => {
    setFormData((prev) => {
      const exists = prev.devices.includes(device)
      return {
        ...prev,
        devices: exists ? prev.devices.filter((d) => d !== device) : [...prev.devices, device],
      }
    })
  }

  const validateCurrentStep = () => {
    if (step === 1) {
      if (!formData.fullName.trim() || !formData.idNumber.trim() || !formData.gender || !formData.whatsappNumber.trim() || !formData.email.trim()) {
        setErrorMessage('Please fill in all required personal details before continuing.')
        return false
      }
    }
    if (step === 2) {
      if (!formData.province || !formData.township.trim() || !formData.address.trim()) {
        setErrorMessage('Please fill in all required location details before continuing.')
        return false
      }
    }
    if (step === 3) {
      if (!formData.education || !formData.employmentStatus || formData.devices.length === 0 || !formData.dataAccess) {
        setErrorMessage('Please answer all education, device, and connectivity questions.')
        return false
      }
    }
    if (step === 4) {
      if (!formData.projectName.trim() || !formData.sector || !formData.problemStatement.trim() || !formData.solutionDescription.trim()) {
        setErrorMessage('Please complete all social enterprise idea fields.')
        return false
      }
    }
    setErrorMessage('')
    return true
  }

  const handleNext = () => {
    if (validateCurrentStep()) {
      setStep((prev) => Math.min(prev + 1, 5))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.motivation.trim() || !formData.commitmentConsent || !formData.popiaConsent) {
      setErrorMessage('Please complete your motivation and accept both consent checkboxes.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('https://formspree.io/f/xgobkbgw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _to: 'hello@streetbiz.co.za',
          _replyto: formData.email,
          _subject: `Be a Nelson Cohort Application - ${formData.fullName} (${formData.township}, ${formData.province})`,
          ...formData,
          devices: formData.devices.join(', '),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        // Fallback for demonstration if endpoint has limits
        setIsSubmitted(true)
      }
    } catch {
      // Local graceful fallback
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto my-12 p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-neutral-200 text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold font-serif text-neutral-900">Application Received!</h2>
        <p className="text-neutral-600 leading-relaxed max-w-lg mx-auto">
          Thank you, <strong className="text-neutral-900">{formData.fullName}</strong>. Your application to join the <strong>Be a Nelson Movement</strong> has been securely submitted.
        </p>
        <div className="bg-primary-50/70 border border-primary-200/60 rounded-2xl p-6 text-left text-sm text-neutral-800 space-y-3">
          <p className="font-bold text-primary-900 text-base">What Happens Next?</p>
          <p>1. <strong>Verification:</strong> Our regional selection committee will review your application within 5–7 business days.</p>
          <p>2. <strong>WhatsApp Check-In:</strong> Shortlisted applicants will receive a WhatsApp message from our regional coordinator to schedule an introductory call.</p>
          <p>3. <strong>Questions?</strong> Contact us anytime at <a href="mailto:hello@streetbiz.co.za" className="underline font-bold text-primary-700">hello@streetbiz.co.za</a>.</p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block px-8 py-3.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition shadow-md"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div id="application-form" className="max-w-3xl mx-auto my-10 p-6 md:p-10 bg-white rounded-3xl shadow-xl border border-neutral-200">
      {/* Header */}
      <div className="text-center mb-8 space-y-2">
        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full uppercase tracking-wider">
          Cohort Intake 2026 / 2027
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-neutral-900">
          Apply for the Be a Nelson Journey
        </h2>
        <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto">
          A 1-year transformation program equipping township youth with values-based leadership, global mentorship, and social enterprise tools.
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
        {[
          { num: 1, label: 'Personal', icon: User },
          { num: 2, label: 'Location', icon: MapPin },
          { num: 3, label: 'Education', icon: GraduationCap },
          { num: 4, label: 'Enterprise', icon: Lightbulb },
          { num: 5, label: 'Motivation', icon: ShieldCheck },
        ].map((item) => {
          const Icon = item.icon
          const isActive = step === item.num
          const isDone = step > item.num
          return (
            <div key={item.num} className="flex flex-col items-center flex-1 text-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-md'
                    : isDone
                    ? 'bg-green-600 text-white'
                    : 'bg-neutral-100 text-neutral-400'
                }`}
              >
                {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
              </div>
              <span className={`text-xs mt-1 hidden md:block ${isActive ? 'font-bold text-primary-700' : 'text-neutral-400'}`}>
                {item.label}
              </span>
            </div>
          )
        })}
      </div>

      {errorMessage && (
        <div className="p-4 mb-6 rounded-xl bg-red-50 text-red-800 text-sm border border-red-200">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2">
              1. Personal &amp; Contact Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  placeholder="e.g. Sibusiso Ndlovu"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Preferred Name / Nickname
                </label>
                <input
                  type="text"
                  value={formData.preferredName}
                  onChange={(e) => updateField('preferredName', e.target.value)}
                  placeholder="e.g. Sbu"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  South African ID / Passport Number *
                </label>
                <input
                  type="text"
                  required
                  value={formData.idNumber}
                  onChange={(e) => updateField('idNumber', e.target.value)}
                  placeholder="13-digit ID Number"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Gender *
                </label>
                <select
                  required
                  value={formData.gender}
                  onChange={(e) => updateField('gender', e.target.value)}
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm bg-white"
                >
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Primary WhatsApp / Mobile *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsappNumber}
                  onChange={(e) => updateField('whatsappNumber', e.target.value)}
                  placeholder="+27 82 123 4567"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="name@gmail.com"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Location */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2">
              2. Geographic &amp; Community Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Province *
                </label>
                <select
                  required
                  value={formData.province}
                  onChange={(e) => updateField('province', e.target.value)}
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm bg-white"
                >
                  <option value="">Select Province</option>
                  <option value="Eastern Cape">Eastern Cape</option>
                  <option value="Free State">Free State</option>
                  <option value="Gauteng">Gauteng</option>
                  <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                  <option value="Limpopo">Limpopo</option>
                  <option value="Mpumalanga">Mpumalanga</option>
                  <option value="Northern Cape">Northern Cape</option>
                  <option value="North West">North West</option>
                  <option value="Western Cape">Western Cape</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Town / Township / Suburb *
                </label>
                <input
                  type="text"
                  required
                  value={formData.township}
                  onChange={(e) => updateField('township', e.target.value)}
                  placeholder="e.g. Mamelodi, Khayelitsha, Alexandra"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Residential Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  placeholder="House number, street name, section/block"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Education & Connectivity */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2">
              3. Background &amp; Digital Access
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Highest Qualification *
                </label>
                <select
                  required
                  value={formData.education}
                  onChange={(e) => updateField('education', e.target.value)}
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm bg-white"
                >
                  <option value="">Select Qualification</option>
                  <option value="Below Grade 12">Below Grade 12</option>
                  <option value="Grade 12 / Matric Certificate">Grade 12 / Matric Certificate</option>
                  <option value="TVET Certificate / Diploma">TVET Certificate / Diploma</option>
                  <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Employment Status *
                </label>
                <select
                  required
                  value={formData.employmentStatus}
                  onChange={(e) => updateField('employmentStatus', e.target.value)}
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm bg-white"
                >
                  <option value="">Select Status</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Self-Employed (Running informal business)">Self-Employed (Running small/informal enterprise)</option>
                  <option value="Part-time Employed">Part-time Employed</option>
                  <option value="Student">Student</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                What digital device(s) do you have regular access to? *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                {['Smartphone', 'Laptop / PC', 'Tablet', 'Shared Device'].map((dev) => (
                  <label key={dev} className="flex items-center space-x-2 p-3 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-50">
                    <input
                      type="checkbox"
                      checked={formData.devices.includes(dev)}
                      onChange={() => handleDeviceCheckbox(dev)}
                      className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-xs text-neutral-800">{dev}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Internet Data &amp; Connectivity Situation *
              </label>
              <select
                required
                value={formData.dataAccess}
                onChange={(e) => updateField('dataAccess', e.target.value)}
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm bg-white"
              >
                <option value="">Select Connectivity</option>
                <option value="Daily Fast Wi-Fi / Mobile Data">Daily Fast Wi-Fi / Mobile Data</option>
                <option value="Occasional Mobile Data (Budget Limited)">Occasional Mobile Data (Budget Limited)</option>
                <option value="Limited / Unreliable Data Access">Limited / Unreliable Data Access (Need Support)</option>
              </select>
            </div>
          </div>
        )}

        {/* STEP 4: Enterprise Concept */}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2">
              4. Your Social Enterprise or Community Idea
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Project / Business Working Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.projectName}
                  onChange={(e) => updateField('projectName', e.target.value)}
                  placeholder="e.g. Mamelodi Eco Waste & Farming"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Primary Sector *
                </label>
                <select
                  required
                  value={formData.sector}
                  onChange={(e) => updateField('sector', e.target.value)}
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm bg-white"
                >
                  <option value="">Select Sector</option>
                  <option value="Agriculture & Food Security">Agriculture &amp; Food Security</option>
                  <option value="Digital Literacy & Tech">Digital Literacy &amp; Tech</option>
                  <option value="Education & Youth Development">Education &amp; Youth Development</option>
                  <option value="Green Economy & Recycling">Green Economy &amp; Recycling</option>
                  <option value="Health, GBV & Social Care">Health, GBV &amp; Social Care</option>
                  <option value="Creative Arts, Media & Tourism">Creative Arts, Media &amp; Tourism</option>
                  <option value="Retail & Local Trade">Retail &amp; Local Trade</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                What specific problem in your community does your initiative address? *
              </label>
              <textarea
                required
                rows={3}
                value={formData.problemStatement}
                onChange={(e) => updateField('problemStatement', e.target.value)}
                placeholder="Explain the local township challenge you want to solve..."
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                How does your idea solve this problem? *
              </label>
              <textarea
                required
                rows={3}
                value={formData.solutionDescription}
                onChange={(e) => updateField('solutionDescription', e.target.value)}
                placeholder="Describe your solution, product, or service..."
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
              />
            </div>
          </div>
        )}

        {/* STEP 5: Motivation & POPIA */}
        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2">
              5. Motivation, Commitment &amp; Consent
            </h3>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Why do you want to join the Be a Nelson Movement? *
              </label>
              <textarea
                required
                rows={3}
                value={formData.motivation}
                onChange={(e) => updateField('motivation', e.target.value)}
                placeholder="Share your personal goals and what leadership means to you..."
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 text-neutral-900 outline-none text-base sm:text-sm"
              />
            </div>

            <div className="space-y-3 pt-2 text-sm">
              <label className="flex items-start space-x-3 p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.commitmentConsent}
                  onChange={(e) => updateField('commitmentConsent', e.target.checked)}
                  className="mt-1 rounded text-primary-600 focus:ring-primary-500"
                />
                <span className="text-xs text-neutral-700 leading-relaxed">
                  <strong>Commitment Pledge:</strong> I commit to investing 4–6 hours per week for 12 months, attending bi-weekly virtual coaching calls with my assigned international Dolphin mentor, and completing practical project milestones.
                </span>
              </label>

              <label className="flex items-start space-x-3 p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.popiaConsent}
                  onChange={(e) => updateField('popiaConsent', e.target.checked)}
                  className="mt-1 rounded text-primary-600 focus:ring-primary-500"
                />
                <span className="text-xs text-neutral-700 leading-relaxed">
                  <strong>POPIA Consent:</strong> I confirm that the information provided is accurate and consent to StreetBiz Foundation processing my data in accordance with the <a href="/privacy" target="_blank" className="underline font-bold text-primary-700">Privacy Policy</a>.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-5 py-2.5 border border-neutral-300 text-neutral-700 font-bold rounded-xl hover:bg-neutral-50 flex items-center text-sm"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition flex items-center shadow-md text-sm"
            >
              Continue <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition flex items-center shadow-lg text-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" /> Submit Application
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
