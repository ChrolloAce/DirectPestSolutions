'use client'

import React from 'react'
import { ServiceCard } from '../ui/ServiceCard'
import { services } from '@/content/services'

export class ServicesGrid extends React.Component {
  render() {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="heading-xl text-center mb-12">
            Our Services
          </h1>
          
          <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.name}
                icon={service.icon}
                image={service.heroImage}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}
