import React from 'react'
import Hero from '@/components/Hero'
import { FeaturedServices } from '@/components/sections/FeaturedServices'
import { ServiceTeaser } from '@/components/sections/ServiceTeaser'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/Reviews'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { BrandMarquee } from '@/components/sections/BrandMarquee'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { AboutSection } from '@/components/sections/AboutSection'

export default function HomePage() {
  return (
    <>
      {/* Hero with Lead Form */}
      <Hero />
      
      {/* About Us Section with Video */}
      <AboutSection />
      
      {/* Services Grid */}
      <FeaturedServices />
      
      {/* Service Teasers */}
      <ServiceTeaser
        title="Why Direct Pest Solutions is Miami's Most Trusted Pest Control Company"
        description={[
          'Since 2020, Direct Pest Solutions has been protecting Miami homes and businesses from all types of pests with safe, effective, and environmentally responsible treatments. Our family-owned company combines cutting-edge pest control technology with old-fashioned customer service values.',
          'We understand Miami\'s unique pest challenges—from termites thriving in our humid climate to mosquitoes breeding year-round. Our licensed exterminators are trained in Integrated Pest Management (IPM) techniques that prioritize prevention, use minimal chemicals, and deliver long-lasting results that protect your family and pets.',
          'Every technician is background-checked, fully licensed by the State of Florida, and insured. We offer flexible service plans, transparent pricing with no hidden fees, same-day emergency response, and a 100% satisfaction guarantee. If pests return between scheduled visits, so do we—for free.'
        ]}
        images={['/images/company/residential-pest-control-service.webp', '/images/company/professional-pest-inspection.webp']}
        alt="Direct Pest Solutions licensed pest control technicians providing professional residential pest control services in Miami - Family-owned company with certified exterminators and guaranteed results"
        direction="left"
        ctaText="Learn More About Our Company"
        ctaHref="/about"
      />
      
      <ServiceTeaser
        title="Comprehensive Pest Control Services for Miami Homes & Businesses"
        description={[
          'From ants and roaches to termites and rodents, we handle every pest problem Miami properties face. Our comprehensive pest control services cover residential homes, commercial buildings, restaurants, hotels, offices, warehouses, and multi-family properties throughout Miami-Dade County.',
          'We specialize in the pests that matter most to Miami residents: termite inspections and treatments, bed bug heat treatments, mosquito barrier treatments, rodent exclusion and removal, ant colony elimination, cockroach extermination, wildlife control, and preventive maintenance programs that keep pests away year-round.',
          'Our proven process starts with a thorough inspection to identify pest entry points and breeding areas. We then create a customized treatment plan using EPA-approved products that are safe for children and pets. Finally, we provide ongoing monitoring and prevention strategies to ensure pests don\'t return.'
        ]}
        images={['/images/company/commercial-building-treatment.webp', '/images/company/pest-exterminator-spraying.webp']}
        alt="Comprehensive pest control services for Miami residential and commercial properties - Direct Pest Solutions offers termite control, mosquito treatment, rodent removal, and ongoing pest prevention programs"
        direction="right"
        ctaText="View All Services"
        ctaHref="/services"
      />
      
      {/* Why Choose Us - Black Background */}
      <WhyChooseUs />
      
      {/* Brand Marquee - Common Pests */}
      <BrandMarquee />
      
      {/* The Process Section with 3 GIFs */}
      <ProcessSection />
      
      {/* Customer Reviews */}
      <Reviews />
    </>
  )
}
