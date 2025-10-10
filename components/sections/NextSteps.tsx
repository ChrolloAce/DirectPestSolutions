'use client'

import React from 'react'
import { Phone, Calendar, Info } from 'lucide-react'

interface Step {
  icon: React.ReactNode
  label: string
  description: string
  href: string
}

export class NextSteps extends React.Component {
  private steps: Step[] = [
    {
      icon: <Phone className="h-12 w-12" />,
      label: 'Get Free Inspection',
      description: 'Free pest inspection & quote',
      href: '/contact'
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      label: 'Schedule Treatment',
      description: 'Same-day service available',
      href: '/contact'
    },
    {
      icon: <Info className="h-12 w-12" />,
      label: 'Learn More',
      description: 'Explore our pest control services',
      href: '/services'
    }
  ]
  
  render() {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center mb-12">
            What&apos;s Next?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {this.steps.map((step, index) => (
              <a
                key={index}
                href={step.href}
                className="group text-center p-8 rounded-xl2 border-2 border-black/10 hover:border-brand-red hover:shadow-card transition-all"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-red/10 rounded-full mb-4 group-hover:bg-brand-red/20 transition text-brand-red">
                  {step.icon}
                </div>
                <h3 className="font-heading text-2xl uppercase mb-2">
                  {step.label}
                </h3>
                <p className="text-black/60">
                  {step.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }
}
