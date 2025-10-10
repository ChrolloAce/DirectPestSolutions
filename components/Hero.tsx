'use client'

import Image from 'next/image'
import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Hero() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setOk(null)
    const form = e.currentTarget
    const fd = new FormData(form)
    
    // Convert FormData to JSON for the API
    const data = Object.fromEntries(fd.entries())
    
    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(() => null)
    
    setLoading(false)
    
    if (res?.ok) {
      // Redirect to thank-you page with form data
      const params = new URLSearchParams({
        name: data.name as string || '',
        phone: data.phone as string || '',
        email: data.email as string || '',
        service: data.service as string || '',
        address: data.address as string || '',
        message: data.message as string || '',
      })
      window.location.href = `/thank-you?${params.toString()}`
    } else {
      setOk(false)
    }
  }

  return (
    <section className="relative isolate">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/company/wholeteam.webp"
          alt="Direct Pest Solutions professional pest control team in Miami - Licensed exterminators providing expert pest control and extermination services for Miami-Dade County homes and businesses"
          fill
          priority
          className="object-cover object-center saturate-150"
          style={{ filter: 'saturate(1.5)' }}
        />
        {/* Overlay: lighter gradient for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />
        <div className="absolute inset-0 mix-blend-overlay bg-noise opacity-[.08]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy / CTAs */}
          <div className="text-white">
            <h1 className="font-heading uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl">
              <span className="text-white">#1 Pest Control</span> <span className="text-brand-red">In Miami</span>
              <br /> 
              <span className="text-white">Top Rated Residential & Commercial</span>
              <br />
              <span className="text-white">Pest Control In Florida</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-white/90">
              Miami's #1 Rated Pest Control Company | Licensed & Insured Exterminators | Same-Day Emergency Service | Termite Control, Bed Bug Extermination, Rodent Removal & Mosquito Treatment | Serving Miami-Dade County Since 2020 | Free Inspections & Guaranteed Results
            </p>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <div className="inline-flex items-center gap-2 rounded-none bg-white/10 px-3 py-2 ring-1 ring-white/20">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-white/80">5.0 from 2000+ Miami homeowners</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button 
                as="a" 
                href="tel:+13053516886" 
                variant="secondary"
                className="!bg-white/10 !text-white !border-white hover:!bg-white/20"
              >
                Call +1-(305) 351-6886
              </Button>
              <Button 
                as="a" 
                href="#quote" 
                variant="primary"
              >
                Get Free Pest Inspection
              </Button>
            </div>

            {/* Small proof strip */}
            <p className="mt-5 text-sm text-white/75">
              Miami's Trusted Pest Control • Same-day emergency service • Free inspections • Satisfaction guaranteed
            </p>
          </div>

          {/* Right: Form */}
          <div id="quote" className="lg:justify-self-end w-full">
            <form
              onSubmit={onSubmit}
              className="rounded-none bg-white/95 backdrop-blur px-5 sm:px-6 py-6 shadow-card ring-1 ring-brand-black/10 max-w-md ml-auto"
            >
              <div className="pb-4 border-b border-brand-red/30 mb-4">
                <h3 className="font-heading uppercase text-2xl text-brand-black">
                  Get Your Free Pest Inspection
                </h3>
                <p className="text-sm text-brand-black/70">
                  Fast response • Same-day service available
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-brand-black">Full Name*</span>
                  <input 
                    name="name" 
                    required 
                    className="mt-1 w-full rounded-none border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-red" 
                  />
                </label>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium text-brand-black">Phone*</span>
                    <input 
                      name="phone" 
                      required 
                      inputMode="tel" 
                      className="mt-1 w-full rounded-none border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-red" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-brand-black">Email*</span>
                    <input 
                      name="email" 
                      type="email"
                      required 
                      className="mt-1 w-full rounded-none border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-red" 
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-brand-black">Service Needed</span>
                  <select 
                    name="service" 
                    className="mt-1 w-full rounded-none border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-red"
                  >
                    <option>General Pest Control</option>
                    <option>Termite Inspection & Control</option>
                    <option>Bed Bug Extermination</option>
                    <option>Mosquito Control</option>
                    <option>Rodent Control</option>
                    <option>Ant Control</option>
                    <option>Cockroach Control</option>
                    <option>Wildlife Removal</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-brand-black">Address (City/ZIP)</span>
                  <input 
                    name="address" 
                    className="mt-1 w-full rounded-none border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-red" 
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-brand-black">Notes</span>
                  <textarea 
                    name="notes" 
                    rows={3} 
                    className="mt-1 w-full rounded-none border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-red" 
                  />
                </label>

                <Button
                  disabled={loading}
                  variant="primary"
                  fullWidth
                  className="mt-1"
                >
                  {loading ? 'Sending…' : 'Request Estimate'}
                </Button>

                {ok === true && (
                  <p className="text-sm text-emerald-600">Thanks! We got it—someone will reach out shortly.</p>
                )}
                {ok === false && (
                  <p className="text-sm text-red-600">Something went wrong. Please call us or try again.</p>
                )}
              </div>

              {/* red accent frame */}
              <div className="pointer-events-none absolute inset-0 rounded-none ring-1 ring-brand-red/60"></div>
            </form>
          </div>
        </div>
      </div>

      {/* Top Rated Bar - Below Hero */}
      <div className="bg-gray-100 border-t-2 border-brand-red/20 py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-12">
            <h3 className="font-heading uppercase text-xl md:text-2xl text-brand-black tracking-tight text-left">
              Top Rated Pest Control In Miami<br className="hidden lg:block" /> Across All Review Sites
            </h3>
            
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {/* Google */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/google-g-logo.png"
                  alt="Google Reviews"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-black">5/5</div>
                  <div className="text-xs text-brand-black/70">200+ reviews</div>
                </div>
              </div>

              {/* Yelp */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/yelp-logo.png"
                  alt="Yelp Reviews"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-black">4.8/5</div>
                  <div className="text-xs text-brand-black/70">4+ reviews</div>
                </div>
              </div>

              {/* Trustpilot */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/trustpilot-star-logo.png"
                  alt="Trustpilot Reviews"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-black">4.8/5</div>
                  <div className="text-xs text-brand-black/70">125+ reviews</div>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1877F2] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl md:text-3xl font-bold">f</span>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-black">4.8/5</div>
                  <div className="text-xs text-brand-black/70">24+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
