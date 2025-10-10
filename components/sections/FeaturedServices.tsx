'use client'

import React from 'react'
import Image from 'next/image'
import { getFeaturedServices } from '@/content/services'

export function FeaturedServices() {
  const services = getFeaturedServices()
  
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading uppercase text-5xl sm:text-6xl md:text-7xl text-brand-black mb-4 leading-none">
            OUR <span className="text-brand-red">SERVICES</span>
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-brand-black/80 font-medium">
            Explore our comprehensive range of services designed to tackle all your pest control needs with efficiency and expertise
          </p>
        </div>
        
        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
