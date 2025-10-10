'use client'

import React from 'react'
import { Search, Shield, Users, Headphones } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Search className="h-12 w-12 text-brand-red" />,
      title: 'Thorough Inspections',
      description: 'Our team conducts meticulous inspections to identify and address all potential pest issues. We leave no stone unturned to ensure your property is thoroughly examined and protected.'
    },
    {
      icon: <Shield className="h-12 w-12 text-brand-red" />,
      title: 'Lifetime Protection Guarantee',
      description: 'Enjoy peace of mind with our lifetime protection guarantee. We stand by our services and offer ongoing support to keep your home or business pest-free for the long term.'
    },
    {
      icon: <Users className="h-12 w-12 text-brand-red" />,
      title: 'Skilled and Certified Experts',
      description: 'Our skilled and certified experts bring extensive knowledge and experience to every job. Trust in our professional team to deliver effective and reliable pest control solutions.'
    },
    {
      icon: <Headphones className="h-12 w-12 text-brand-red" />,
      title: 'Exceptional Customer Care',
      description: 'At Direct Pest Solutions, we prioritize your satisfaction. Our exceptional customer care ensures that your needs are met with prompt, courteous, and effective service every time.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-red font-bold uppercase mb-2 text-sm tracking-wider">
              WHY TRUST DIRECT PEST SOLUTIONS?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white uppercase mb-6">
              Pest Control Experts In Miami
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl">
              Direct Pest Solutions is a family-owned and operated company, fully licensed and insured. 
              Our goal is to leave our customers 100% satisfied with our services.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-brand-red text-white px-8 py-4 border-2 border-brand-black hover:bg-white hover:text-brand-black transition-colors font-bold uppercase"
            >
              <div className="flex items-center gap-3">
                <span>GET A FREE QUOTE™ NOW</span>
                <span className="text-2xl">→</span>
              </div>
              <div className="text-sm font-normal normal-case mt-1">
                Join over 10000+ other happy clients
              </div>
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-brand-black border-2 border-white/20 p-8 hover:border-brand-red transition-colors"
              >
                <div className="mb-4">{reason.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-white">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
