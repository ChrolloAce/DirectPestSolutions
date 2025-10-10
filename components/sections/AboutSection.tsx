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
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-brand-black text-sm font-semibold">453+ Trusted Reviews</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading uppercase text-3xl md:text-4xl text-brand-black leading-tight mb-4">
              TOP RATED PEST CONTROL<br />
              <span className="text-brand-black">IN MIAMI, FLORIDA!</span>
            </h2>

            {/* Description */}
            <p className="text-base text-brand-black/80 mb-6 leading-relaxed">
              Family-owned and operated for over 22 years, Direct Pest Solutions is Miami's trusted pest control company. Licensed, insured, and committed to 100% customer satisfaction.
            </p>

            {/* CTA Button */}
            <Button 
              as="a" 
              href="#quote"
              variant="primary"
              className="!bg-brand-red !text-white !border-brand-red hover:!bg-brand-red/90 !text-base !px-6 !py-3"
            >
              GET A FREE QUOTE™ NOW →
            </Button>
            
            <p className="text-xs text-brand-black/60 mt-2">
              Join over 10,000+ other happy clients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

