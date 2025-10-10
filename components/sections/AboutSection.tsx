import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export function AboutSection() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Video */}
          <div className="relative w-full rounded-lg overflow-hidden shadow-xl">
            <div style={{ width: '100%', height: 0, position: 'relative', paddingBottom: '56.604%' }}>
              <iframe 
                src="https://streamable.com/e/4pvp6b?quality=highest" 
                frameBorder="0" 
                width="100%" 
                height="100%" 
                allowFullScreen 
                style={{ width: '100%', height: '100%', position: 'absolute' }}
                title="Direct Pest Solutions - Professional Pest Control Services in Miami"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Rating Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-brand-black font-semibold">453+ Trusted Customer Reviews</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading uppercase text-4xl md:text-5xl lg:text-6xl text-brand-black leading-tight mb-6">
              TOP RATED PEST CONTROL SERVICES<br />
              <span className="text-brand-black">IN MIAMI, FLORIDA!</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-brand-black/80 mb-8 leading-relaxed">
              For over 22 years, Direct Pest Solutions has been a trusted, family-owned and operated pest control and wildlife removal company. Based in Miami, Florida, we proudly serve customers throughout the region. Our commitment is straightforward: to ensure customer satisfaction by addressing all pest concerns with unparalleled care and expertise.
            </p>

            {/* CTA Button */}
            <Button 
              as="a" 
              href="#quote"
              variant="primary"
              className="!bg-brand-red !text-white !border-brand-red hover:!bg-brand-red/90 !text-lg !px-8 !py-4"
            >
              GET A FREE QUOTE™ NOW →
            </Button>
            
            <p className="text-sm text-brand-black/60 mt-3">
              Join over 10000+ other happy clients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

