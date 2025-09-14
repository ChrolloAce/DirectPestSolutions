import React from 'react'
import Hero from '@/components/Hero'
import { EmergencyBanner } from '@/components/sections/EmergencyBanner'
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
      
      {/* 24/7 Emergency Services */}
      <EmergencyBanner />
      
      {/* Services Grid */}
      <FeaturedServices />
      
      {/* Service Teasers */}
      <ServiceTeaser
        title="Professional Drain Cleaning"
        description={[
          'Slow drains and frequent clogs are more than just annoyances - they\'re warning signs of bigger problems brewing in your plumbing system.',
          'Our professional drain cleaning service uses advanced hydro-jetting technology and video inspection cameras to thoroughly clean your pipes and identify potential issues before they become emergencies.',
          'Regular drain maintenance prevents costly backups, eliminates foul odors, and ensures your plumbing system operates efficiently, saving you money and headaches in the long run.'
        ]}
        images={['/images/drain-cleaning-new.png', '/images/leak-detection.png']}
        direction="left"
        ctaText="Schedule Drain Service"
        ctaHref="/drain-cleaning"
      />
      
      <ServiceTeaser
        title="Expert Water Heater Services"
        description={[
          'Nothing disrupts your day like running out of hot water. Whether your water heater needs repair or it\'s time for an upgrade, our expert technicians have you covered.',
          'We service all makes and models, from traditional tank water heaters to modern tankless systems. Our team can help you choose the most energy-efficient option for your home and budget.',
          'With same-day installation available and comprehensive maintenance plans, we ensure you always have reliable hot water when you need it most.'
        ]}
        images={['/images/water-heater.png', '/images/bathroom.png']}
        direction="right"
        ctaText="Get Hot Water Today"
        ctaHref="/water-heater"
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
