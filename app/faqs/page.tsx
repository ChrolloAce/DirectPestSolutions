import React from 'react'
import { Metadata } from 'next'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Pest Control FAQs Miami | Direct Pest Solutions',
  description: 'Frequently asked questions about pest control, termite treatment, bed bug extermination, and more. Get answers from Miami\'s trusted pest control experts. Call +1-(305) 351-6886.',
  keywords: 'pest control FAQ, pest control questions, termite FAQ Miami, bed bug questions, pest control information, Miami pest control help',
  alternates: {
    canonical: 'https://directpestsolutions.com/faqs',
  },
}

export default function FAQsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="heading-xl text-center mb-8">
          Frequently Asked Questions
        </h1>
        
        <p className="text-xl text-center text-black/70 mb-12 max-w-3xl mx-auto">
          Have questions about pressure washing? We&apos;ve got answers. If you don&apos;t see your 
          question below, feel free to give us a call at (615) 581-1581.
        </p>
        
        <FAQAccordion />
        
        <div className="mt-16 text-center">
          <h2 className="heading-md mb-6">
            Still Have Questions?
          </h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            We&apos;re here to help! Contact us today for a free consultation and let us show you 
            how we can transform your property.
          </p>
          <div className="flex gap-4 justify-center">
            <CTAButton href="/contact" size="lg">
              Get Your Free Quote
            </CTAButton>
            <CTAButton href="tel:6155811581" variant="secondary" size="lg">
              Call Now
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}
