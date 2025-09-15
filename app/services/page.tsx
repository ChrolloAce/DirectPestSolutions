import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CTAButton } from '@/components/ui/CTAButton'
import { Phone } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '24/7 Plumber Miami Services | Emergency Plumbing Miami FL',
  description: '24/7 Plumber offers complete plumbing services in Miami, Florida. Emergency repairs, drain cleaning, water heaters, leak detection, and more. Available 24/7 in Miami-Dade County. Call (786) 296-7304.',
  keywords: '24/7 plumber Miami, emergency plumbing Miami, Miami plumbing services, plumber Miami FL, drain cleaning Miami, water heater repair Miami, leak detection Miami, sewer line Miami, Miami-Dade plumber',
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-blue bg-noise py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl mb-4 text-brand-black">
            24/7 Plumber Miami - Complete Plumbing Services
          </h1>
          <p className="text-xl text-brand-black/80 max-w-3xl mx-auto mb-8">
            24/7 Plumber is Miami's premier plumbing company offering emergency repairs, installations, and maintenance 
            throughout Miami-Dade County. From South Beach to Coral Gables, Brickell to Aventura, we're Miami's 
            most trusted plumbing experts available 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="tel:7862967304" size="lg">
              <Phone className="inline-block mr-2" size={20} />
              Call (786) 296-7304
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get Free Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <ServicesGrid />

      {/* CTA Section */}
      <section className="bg-brand-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-4 text-white">
            Need Emergency Plumbing in Miami?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            24/7 Plumber Miami - Available 24/7 for emergencies throughout Miami-Dade County. 
            Licensed Florida plumbers, fully insured, and ready to help anywhere in Miami.
          </p>
          <CTAButton href="/contact" size="lg">
            Schedule Service Today
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
