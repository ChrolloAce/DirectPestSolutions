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
        <div className="text-center mb-16">
          <h2 className="font-heading uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-black mb-6 leading-none font-black">
            OUR <span className="text-brand-red">SERVICES</span>
          </h2>
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-brand-black/80 font-medium">
            Explore our comprehensive range of services designed to tackle all your pest control needs with efficiency and expertise
          </p>
        </div>
        
        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="group block"
            >
              <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full rounded-xl">
                {/* Service Image with Diagonal Red Banner */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Professional pest control services in Miami`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Diagonal red banner at bottom-left */}
                  <div 
                    className="absolute bottom-0 left-0 bg-brand-red px-8 py-4" 
                    style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
                  >
                    <span className="text-white text-sm font-bold uppercase tracking-wider">
                      {service.id.replace(/-/g, ' ')}
                    </span>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-brand-black group-hover:text-brand-red transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-brand-black/70 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider">
                    <span>Book Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
