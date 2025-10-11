'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Phone, Download, Calendar, CheckCircle, Star, MapPin, Gift } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ThankYouClient({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const name = (searchParams?.name as string) || 'Friend'
  const phone = (searchParams?.phone as string) || ''
  const email = (searchParams?.email as string) || ''
  const service = (searchParams?.service as string) || ''
  const city = (searchParams?.city as string) || (searchParams?.address as string) || ''
  const message = (searchParams?.message as string) || ''

  useEffect(() => {
    // Fire conversion events
    if (typeof window !== 'undefined') {
      // Google Tag Manager
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push({ 
        event: 'lead_submitted',
        lead_value: 100,
        lead_source: 'quote_form'
      })
      
      // Facebook Pixel (if available)
      if (typeof (window as any).fbq !== 'undefined') {
        ;(window as any).fbq('track', 'Lead', {
          value: 100,
          currency: 'USD',
        })
      }
      
      // Google Analytics 4 (if available)
      if (typeof (window as any).gtag !== 'undefined') {
        ;(window as any).gtag('event', 'generate_lead', {
          value: 100,
          currency: 'USD',
        })
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-brand-off">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-4 border-brand-gold bg-brand-blue">
        <div className="absolute inset-0 bg-noise opacity-20" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white ring-2 ring-white/40 px-4 py-2 font-semibold uppercase">
              <CheckCircle className="w-5 h-5" />
              Request Received
            </span>
            
            <h1 className="mt-6 font-heading uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-6xl text-white">
              Thank You, {name}!
              <span className="block text-brand-gold">We've Received</span>
              Your Request
            </h1>
            
            <p className="mt-6 text-xl text-white/90">
              Our expert pest control team will contact you within <strong>30 minutes</strong> during business hours 
              to confirm details and schedule your free inspection. For urgent pest problems, call us directly.
            </p>

            <div className="mt-8">
              <Button
                as="a"
                href="tel:3053516886"
                size="lg"
                variant="primary"
                className="!bg-white !text-brand-black hover:!bg-brand-gold"
              >
                <Phone className="inline-block mr-2" size={20} />
                Call Now +1-(305) 351-6886
              </Button>
            </div>

            <div className="mt-6 text-sm text-white/70 flex items-center gap-2">
              <CheckCircle size={16} />
              Average response time: Under 30 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Summary & Coupon */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Summary Card */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card">
              <div className="px-5 py-4 border-b-2 border-brand-gold bg-brand-black text-white">
                <h3 className="font-heading uppercase text-xl">Your Information</h3>
                <p className="text-sm text-white/80">We'll confirm these details shortly</p>
              </div>
              <div className="p-5 space-y-3">
                <InfoRow label="Name" value={name} />
                {phone && <InfoRow label="Phone" value={phone} />}
                {email && <InfoRow label="Email" value={email} />}
                {service && <InfoRow label="Service" value={service} />}
                {city && <InfoRow label="Location" value={city} />}
                {message && (
                  <div className="pt-3 border-t border-brand-black/10">
                    <span className="text-sm text-black/60">Message:</span>
                    <p className="mt-1 text-sm">{message}</p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column - Next Steps & More */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* What Happens Next */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card p-6">
              <h2 className="font-heading uppercase text-2xl mb-6 text-brand-black">
                What Happens Next
              </h2>
              <div className="space-y-4">
                {[
                  { num: '1', text: 'We review your request and check our licensed exterminator availability in your area' },
                  { num: '2', text: 'We contact you to schedule your free inspection at a convenient time for you' },
                  { num: '3', text: 'Our certified pest control specialist conducts a thorough inspection and provides a treatment plan' },
                  { num: '4', text: 'We eliminate your pest problem with safe, effective treatments and guarantee results' }
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-brand-gold text-brand-black font-bold rounded-full flex items-center justify-center">
                      {step.num}
                    </span>
                    <p className="text-black/80">{step.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  as="a"
                  href="/services"
                  variant="secondary"
                  size="md"
                >
                  Browse All Services
                </Button>
                <Button
                  as="a"
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="!bg-brand-blue"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-black/70">5/5 from 200+ satisfied Miami customers</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <ReviewCard
                  name="Edward H. • Miami"
                  text="Great follow up on calls and excellent ability to diagnose AC problems. Customer service is on point and he's quite honest!"
                />
                <ReviewCard
                  name="Kevin K. • Aventura"
                  text="Direct Pest Solutions did a whole house pest treatment for me. They were excellent, very knowledgeable, professional and punctual!"
                />
              </div>
            </div>

            {/* Service Areas */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-brand-blue" size={24} />
                <h3 className="font-heading uppercase text-2xl">Serving All of Miami-Dade</h3>
              </div>
              <p className="text-black/70">
                Miami • Miami Beach • Coral Gables • Aventura • Kendall • Homestead • 
                Palmetto Bay • Cutler Bay • Doral • Hialeah • Key Biscayne • Wynwood • 
                Brickell • Coconut Grove • South Beach
              </p>
            </div>

            {/* Quick FAQ */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card p-6">
              <h3 className="font-heading uppercase text-2xl mb-4">Quick Answers</h3>
              <div className="space-y-3">
                <details className="border-b border-black/10 pb-3">
                  <summary className="cursor-pointer font-semibold hover:text-brand-blue">
                    How quickly can you provide service?
                  </summary>
                  <p className="mt-2 text-black/70">
                    We offer same-day and emergency pest control services throughout Miami-Dade County. 
                    Most inspections can be scheduled within 24 hours. We'll confirm your appointment when we call.
                  </p>
                </details>
                <details className="border-b border-black/10 pb-3">
                  <summary className="cursor-pointer font-semibold hover:text-brand-blue">
                    Are your treatments safe for my family and pets?
                  </summary>
                  <p className="mt-2 text-black/70">
                    Absolutely! We use EPA-approved products that are safe for children and pets when applied 
                    correctly. Our licensed technicians follow strict safety protocols on every job.
                  </p>
                </details>
                <details className="border-b border-black/10 pb-3">
                  <summary className="cursor-pointer font-semibold hover:text-brand-blue">
                    Do you guarantee your pest control services?
                  </summary>
                  <p className="mt-2 text-black/70">
                    Yes! If pests return between scheduled treatments, we return for free. 
                    Your satisfaction is guaranteed with Direct Pest Solutions.
                  </p>
                </details>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-black border-t-4 border-brand-gold py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading uppercase text-3xl text-white mb-4">
            Have An Urgent Pest Problem?
          </h2>
          <p className="text-white/80 mb-6">
            Call us now for same-day emergency pest control service throughout Miami
          </p>
          <Button
            as="a"
            href="tel:3053516886"
            size="lg"
            variant="primary"
            className="!bg-brand-gold !text-brand-black hover:!bg-white"
          >
            <Phone className="inline-block mr-2" size={20} />
            Call Now: +1-(305) 351-6886
          </Button>
        </div>
      </section>
    </main>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-black/60">{label}:</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  )
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="border border-black/10 p-4 bg-brand-off">
      <div className="flex text-brand-gold mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-sm text-black/80">{text}</p>
      <p className="text-xs text-black/60 mt-2">{name}</p>
    </div>
  )
}
