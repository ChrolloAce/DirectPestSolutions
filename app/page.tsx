import React from 'react'
import Hero from '@/components/Hero'
import { FeaturedServices } from '@/components/sections/FeaturedServices'
import { ServiceTeaser } from '@/components/sections/ServiceTeaser'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/Reviews'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { NextSteps } from '@/components/sections/NextSteps'
import { PortfolioCarousel } from '@/components/sections/PortfolioCarousel'

export default function HomePage() {
  return (
    <>
      {/* Hero with Lead Form */}
      <Hero />
      
      {/* Services Grid */}
      <FeaturedServices />
      
      {/* Service Teasers */}
      <ServiceTeaser
        title="Professional Landscape Design Miami"
        description={[
          'When your outdoor space needs transformation in Miami\'s tropical climate, you need expert design and reliable service. Our certified landscape architects create beautiful, sustainable designs with same-day consultations available.',
          'We use advanced design tools and local plant knowledge to create stunning landscapes, from native plant selections to irrigation planning. Our design process ensures your landscape thrives in South Florida\'s climate.',
          'With transparent pricing and a satisfaction guarantee, you can trust our landscape experts to bring your outdoor vision to life, creating beautiful spaces that enhance your property value year-round.'
        ]}
        images={['/images/landscape-design-teaser.png', '/images/garden-planning.png']}
        direction="left"
        ctaText="Schedule Design Consultation"
        ctaHref="/services/landscape-design-miami"
      />
      
      <ServiceTeaser
        title="Irrigation Systems & Installation"
        description={[
          'Upgrade to a new, water-efficient irrigation system and save up to 40% on your water costs. Our irrigation experts help you choose the perfect system for your Miami landscape and budget.',
          'We install all major brands including Rain Bird, Hunter, Toro, and Raindrip. Our certified installers ensure proper coverage, pressure optimization, and code compliance for maximum efficiency and plant health.',
          'Take advantage of available water rebates and our flexible financing options. With professional installation and comprehensive warranties, your new irrigation system will provide reliable plant care for years to come.'
        ]}
        images={['/images/irrigation-installation-final.png', '/images/sprinkler-system.png']}
        direction="right"
        ctaText="Get Free Irrigation Quote"
        ctaHref="/services/irrigation-systems-miami"
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