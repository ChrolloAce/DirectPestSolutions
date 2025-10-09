'use client'

import React from 'react'
import { Shield, Award, Users, Clock, ThumbsUp, Wrench } from 'lucide-react'

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="h-10 w-10 text-brand-blue" />,
      title: 'Certified Detailing Experts',
      description: 'Professional detailers trained in luxury and exotic vehicle care with full insurance'
    },
    {
      icon: <Clock className="h-10 w-10 text-brand-blue" />,
      title: 'Mobile Service Available',
      description: 'We come to your home or office - convenient detailing on your schedule'
    },
    {
      icon: <Award className="h-10 w-10 text-brand-blue" />,
      title: 'Transparent Pricing',
      description: 'Upfront quotes with no hidden fees or surprise charges'
    },
    {
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      title: 'Local Miami Company',
      description: 'Trusted by luxury car owners throughout Miami-Dade County'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-brand-blue" />,
      title: '100% Satisfaction Guarantee',
      description: 'We stand behind our work with comprehensive quality guarantees'
    },
    {
      icon: <Wrench className="h-10 w-10 text-brand-blue" />,
      title: 'Premium Products Only',
      description: 'Professional-grade products specifically chosen for luxury vehicles'
    }
  ]

  return (
    <section className="py-16 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4">
            Why Choose Our <span className="text-brand-green">Premium Detailing</span>?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            When it comes to your luxury vehicle, choose Miami's trusted auto detailing professionals. 
            Here's what sets us apart from the competition.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 shadow-card border-2 border-brand-black">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-brand-red text-white px-6 py-4 rounded-none">
            <span className="text-2xl font-bold">Call Now:</span>
            <a href="tel:+13055603087" className="text-2xl font-bold hover:underline">
              (305) 560-3087
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}