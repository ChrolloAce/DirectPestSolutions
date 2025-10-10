'use client'

import React from 'react'
import { Search, Shield, Users, Headphones } from 'lucide-react'

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Search className="h-12 w-12 text-brand-red mx-auto" />,
      title: 'Thorough Inspections',
      description: 'Our team conducts meticulous inspections to identify and address all potential pest issues. We leave no stone unturned to ensure your property is thoroughly examined and protected.'
    },
    {
      icon: <Shield className="h-12 w-12 text-brand-red mx-auto" />,
      title: 'Lifetime Protection Guarantee',
      description: 'Enjoy peace of mind with our lifetime protection guarantee. We stand by our services and offer ongoing support to keep your home or business pest-free for the long term.'
    },
    {
      icon: <Users className="h-12 w-12 text-brand-red mx-auto" />,
      title: 'Skilled and Certified Experts',
      description: 'Our skilled and certified experts bring extensive knowledge and experience to every job. Trust in our professional team to deliver effective and reliable pest control solutions.'
    },
    {
      icon: <Headphones className="h-12 w-12 text-brand-red mx-auto" />,
      title: 'Exceptional Customer Care',
      description: 'At Direct Pest Solutions, we prioritize your satisfaction. Our exceptional customer care ensures that your needs are met with prompt, courteous, and effective service every time.'
    }
  ]

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#0E0E0E' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[40%_60%] gap-16 items-start">
            {/* Left Column - Text & CTA */}
            <div className="space-y-8">
              {/* Eyebrow Label */}
              <p className="text-brand-red font-bold uppercase text-sm tracking-wider">
                WHY TRUST DIRECT PEST SOLUTIONS?
              </p>
              
              {/* Main Heading */}
              <h2 className="font-heading text-4xl md:text-5xl text-white font-bold leading-tight">
                Pest Control Experts In Miami
              </h2>
              
              {/* Supporting Paragraph */}
              <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed">
                Direct Pest Solutions is a family-owned and operated company, fully licensed and insured. 
                Our goal is to leave our customers 100% satisfied with our services.
              </p>
              
              {/* CTA Button */}
              <div className="space-y-3">
                <a 
                  href="/contact" 
                  className="block w-full bg-brand-red text-white px-8 py-5 text-center font-bold uppercase text-base tracking-wide hover:shadow-xl transition-shadow duration-300"
                  style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span>GET A FREE QUOTE™ NOW</span>
                    <span className="text-xl">→</span>
                  </div>
                </a>
                
                {/* Subtext */}
                <p className="text-[#DDD] text-sm text-center tracking-wide">
                  Join over 10000+ other happy clients
                </p>
              </div>
            </div>
            
            {/* Right Column - 2x2 Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="text-center p-8 rounded"
                  style={{ 
                    backgroundColor: '#0E0E0E',
                    border: '1px solid #333333'
                  }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    {reason.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-lg md:text-xl mb-4 text-white">
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#CCCCCC] text-sm md:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
