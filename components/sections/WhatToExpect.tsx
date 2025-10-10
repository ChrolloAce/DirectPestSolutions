import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export function WhatToExpect() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 md:order-1">
              <Image
                src="/images/company/residential-pest-control-service.webp"
                alt="Direct Pest Solutions employee shakes hands with satisfied client"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <p className="text-sm uppercase tracking-wider text-brand-red font-bold mb-4">
                Understand our pest control services
              </p>
              <h2 className="font-heading uppercase text-3xl md:text-4xl text-brand-black mb-6">
                What To Expect From Direct pest Solutions ?
              </h2>
              <p className="text-lg text-brand-black/80 leading-relaxed mb-8">
                At Direct Pest Solutions, we deliver top-quality pest control services with professionalism and expertise. Our experienced team offers personalized solutions, ensuring effective and long-lasting protection for your property. Expect thorough inspections, eco-friendly treatments, and ongoing support tailored to your specific needs. We prioritize safety and customer satisfaction, providing a seamless and stress-free experience from start to finish. Trust us to handle all your pest concerns with reliability and excellence.
              </p>
              <Button href="/contact" size="lg" variant="primary">
                BOOK A FREE QUOTE™ NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

