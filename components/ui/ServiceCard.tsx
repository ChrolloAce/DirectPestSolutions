'use client'

import React from 'react'
import { ServiceIcon } from './ServiceIcon'

interface ServiceCardProps {
  slug: string
  title: string
  icon: string
  image: string
}

export class ServiceCard extends React.Component<ServiceCardProps> {
  render() {
    const { slug, title, icon, image } = this.props
    
    return (
      <div className="group relative overflow-visible rounded-none shadow-card bg-white border border-black/10">
        <div className="w-full h-[22rem] md:h-[24rem] lg:h-[26rem]">
          <img 
            className="w-full h-full object-cover" 
            src={image}
            alt={title}
          />
        </div>
        
        {/* Icon badge - now visible outside card bounds */}
        <div className="absolute -top-4 left-4 z-10">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue border-2 border-brand-black">
            <ServiceIcon name={icon} />
          </span>
        </div>
        
        {/* Bottom ribbon */}
        <a href={`/${slug}`} className="absolute inset-x-0 bottom-0">
          <div className="border-t border-brand-gold bg-brand-black text-white uppercase font-semibold tracking-wide px-5 py-3 relative">
            {title} <span className="ml-2 text-brand-gold">»</span>
            <span className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-brand-black border-t-8 border-t-transparent" />
          </div>
        </a>
      </div>
    )
  }
}