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
        title="Premium Exterior Detailing"
        description={[
          'When your luxury vehicle needs that showroom shine in Miami, you need expert detailing and reliable service. Our certified detailers restore your car\'s exterior to pristine condition with same-day appointments available.',
          'We use professional-grade products and advanced techniques including hand washing, clay bar treatment, paint correction, and protective coating to ensure your vehicle looks its absolute best.',
          'With transparent pricing and a satisfaction guarantee, you can trust our detailing experts to deliver exceptional results that protect your investment and turn heads on Miami streets.'
        ]}
        images={['/images/imgi_29_AdobeStock_432639942-1024x654.jpg', '/images/imgi_32_radiator-grille-of-a-new-luxury-car.jpg']}
        direction="left"
        ctaText="Schedule Exterior Detailing"
        ctaHref="/services/exterior-detailing-miami"
      />
      
      <ServiceTeaser
        title="Ceramic Coating & Paint Protection"
        description={[
          'Protect your luxury vehicle with our professional ceramic coating services. Save time on maintenance and enjoy years of durable, hydrophobic protection for your car\'s paint.',
          'We install premium ceramic coatings including industry-leading brands. Our certified installers ensure proper paint preparation, flawless application, and maximum durability with multi-year warranties.',
          'Take advantage of our package deals and financing options. With professional installation and comprehensive warranties, your ceramic coating will provide lasting protection and stunning gloss.'
        ]}
        images={['/images/imgi_34_luxury-car-interior-in-brown-and-white-colors.jpg', '/images/imgi_41_AdobeStock_312924792_Editorial_Use_Only-2048x1160.jpg']}
        direction="right"
        ctaText="Get Ceramic Coating Quote"
        ctaHref="/services/ceramic-coating-miami"
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
