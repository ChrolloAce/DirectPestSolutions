import React from 'react'
import Hero from '@/components/Hero'
import { FeaturedServices } from '@/components/sections/FeaturedServices'
import { ServiceTeaser } from '@/components/sections/ServiceTeaser'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/Reviews'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { NextSteps } from '@/components/sections/NextSteps'
import { PortfolioCarousel } from '@/components/sections/PortfolioCarousel'
import { BrandMarquee } from '@/components/sections/BrandMarquee'

export default function HomePage() {
  return (
    <>
      {/* Hero with Lead Form */}
      <Hero />
      
      {/* Brand Marquee */}
      <BrandMarquee />
      
      {/* Services Grid */}
      <FeaturedServices />
      
      {/* Service Teasers */}
      <ServiceTeaser
        title="Professional Termite Control in Miami"
        description={[
          'Protect your Miami home from destructive termites with expert termite control services. Our licensed termite specialists provide comprehensive inspections and effective treatments to eliminate termite infestations.',
          'We offer multiple treatment options including liquid barrier treatments, baiting systems, and fumigation for drywood termites. All treatments come with warranties and ongoing monitoring to ensure your property stays termite-free.',
          'Free termite inspections available. With same-day service and transparent pricing, you can trust Direct Pest Solutions to protect your most valuable investment from termite damage.'
        ]}
        images={['/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/pest-inspection-animation.gif', '/images/Insects/termite.png']}
        alt="Professional termite inspection and control services in Miami"
        direction="left"
        ctaText="Schedule Free Termite Inspection"
        ctaHref="/termite-control-miami"
      />
      
      <ServiceTeaser
        title="Complete Bed Bug Extermination"
        description={[
          'Eliminate bed bugs completely with our proven treatment methods. Bed bugs require professional treatment—our experienced technicians use heat treatment, chemical applications, and thorough inspections to ensure complete elimination.',
          'We provide detailed preparation guides and flexible scheduling to minimize disruption to your life. Multiple treatment options available based on the severity of your infestation and your specific situation.',
          'Our bed bug treatments are guaranteed. If bed bugs return within the warranty period, we return for free re-treatment. Discreet service with unmarked vehicles available for your privacy.'
        ]}
        images={['/images/Insects/bed-bug.png', '/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/pest-spraying-animation.gif']}
        alt="Bed bug extermination and heat treatment services in Miami"
        direction="right"
        ctaText="Get Bed Bug Treatment Quote"
        ctaHref="/bed-bug-extermination-miami"
      />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Customer Reviews */}
      <Reviews />
      
      {/* FAQs */}
      <FAQAccordion />
      
      {/* Portfolio Gallery */}
      <PortfolioCarousel />
      
      {/* Next Steps */}
      <NextSteps />
    </>
  )
}
