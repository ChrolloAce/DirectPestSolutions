import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { PhotoStack } from '@/components/ui/PhotoStack'

interface ServiceIntroProps {
  serviceTitle: string
  description: string
  image: string
}

export function ServiceIntro({ serviceTitle, description, image }: ServiceIntroProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-sm uppercase tracking-wider text-brand-red font-bold mb-4">
                Understand our {serviceTitle} services
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-brand-black mb-6 leading-tight">
                Comprehensive {serviceTitle} Services in Miami
              </h2>
              <p className="text-lg text-brand-black/80 leading-relaxed mb-8">
                {description}
              </p>
              <Button as="a" href="/contact" size="lg" variant="primary">
                BOOK A FREE QUOTE™ NOW
              </Button>
            </div>
            
            {/* Right: Image Stack */}
            <div className="relative">
              <div className="aspect-square relative">
                <Image
                  src={image}
                  alt={`${serviceTitle} - Professional pest control services in Miami`}
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

