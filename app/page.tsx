import React from 'react'
import Hero from '@/components/Hero'
import { FeaturedServices } from '@/components/sections/FeaturedServices'
import { ServiceTeaser } from '@/components/sections/ServiceTeaser'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/Reviews'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { NextSteps } from '@/components/sections/NextSteps'

export default function HomePage() {
  return (
    <>
      {/* Hero with Lead Form */}
      <Hero />
      
      {/* Services Grid */}
      <FeaturedServices />
      
      {/* Service Teasers */}
      <ServiceTeaser
        title="Professional AC Repair Miami"
        description={[
          'When your AC stops working in Miami\'s heat and humidity, you need fast, reliable service. Our certified technicians diagnose and repair all AC makes and models with same-day service available.',
          'We use advanced diagnostic tools to quickly identify issues, from refrigerant leaks to compressor problems. Our repair trucks are fully stocked with common parts, ensuring most repairs are completed in a single visit.',
          'With transparent pricing and a satisfaction guarantee, you can trust CBE Air Services to get your AC running efficiently again, keeping your home cool and comfortable year-round.'
        ]}
        images={['/images/ac-repair-teaser.png', '/images/leak-detection.png']}
        direction="left"
        ctaText="Schedule AC Repair"
        ctaHref="/services/ac-repair-miami"
      />
      
      <ServiceTeaser
        title="AC Installation & Replacement"
        description={[
          'Upgrade to a new, energy-efficient AC system and save up to 40% on your cooling costs. Our HVAC experts help you choose the perfect system for your Miami home and budget.',
          'We install all major brands including Carrier, Trane, Lennox, and Rheem. Our certified installers ensure proper sizing, ductwork optimization, and code compliance for maximum efficiency and longevity.',
          'Take advantage of available rebates and our flexible financing options. With professional installation and comprehensive warranties, your new AC system will provide reliable comfort for years to come.'
        ]}
        images={['/images/ac-installation-updated.png', '/images/bathroom.png']}
        direction="right"
        ctaText="Get Free Installation Quote"
        ctaHref="/services/ac-installation-miami"
      />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Customer Reviews */}
      <Reviews />
      
      {/* FAQs */}
      <FAQAccordion />
      
      {/* Next Steps */}
      <NextSteps />
    </>
  )
}