import React from 'react'
import Image from 'next/image'
import { getFeaturedServices } from '@/content/services'

interface RelatedServicesSectionProps {
  currentServiceId: string
}

export function RelatedServicesSection({ currentServiceId }: RelatedServicesSectionProps) {
  const allServices = getFeaturedServices()
  const relatedServices = allServices.filter(s => s.id !== currentServiceId)
  
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading uppercase text-4xl md:text-5xl text-brand-black mb-4">
            Our services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-brand-black/80">
            Explore our comprehensive range of services designed to tackle all your pest control needs with efficiency and expertise
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {relatedServices.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Professional pest control services in Miami`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Service Title Banner */}
              <div className="absolute bottom-0 left-0 right-0 bg-brand-red px-6 py-4">
                <h3 className="font-heading uppercase text-white text-lg md:text-xl font-bold tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm mt-1">
                  BOOK NOW →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

