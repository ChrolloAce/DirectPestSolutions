'use client'

import React from 'react'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { getFeaturedServices } from '@/content/services'

export function FeaturedServices() {
  const services = getFeaturedServices()
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4">
            Our Pest Control Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From termite inspections to bed bug extermination, we provide comprehensive 
            pest control solutions for Miami-Dade County homes and businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              slug={service.id}
              title={service.title}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/services" 
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-red transition-colors"
          >
            View All Services
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}