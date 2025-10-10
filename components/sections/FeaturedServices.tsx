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
              className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Professional pest control services in Miami`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              
              {/* Service Title Banner */}
              <div className="absolute bottom-0 left-0 right-0 bg-brand-red px-8 py-5 border-t-2 border-white/10">
                <h3 className="font-heading uppercase text-white text-xl md:text-2xl font-extrabold tracking-wide leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm mt-1 font-medium">
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
