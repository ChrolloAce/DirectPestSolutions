import React from 'react'
import Button from '@/components/ui/Button'

interface ServiceIntroProps {
  serviceTitle: string
  description: string
}

export function ServiceIntro({ serviceTitle, description }: ServiceIntroProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-brand-black mb-6">
            Understand our {serviceTitle} services
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
            Comprehensive {serviceTitle} Services in Miami
          </h3>
          <p className="text-lg text-brand-black/80 leading-relaxed mb-8">
            {description}
          </p>
          <Button href="/contact" size="lg" variant="primary">
            BOOK A FREE QUOTE™ NOW
          </Button>
        </div>
      </div>
    </section>
  )
}

