'use client'

import React from 'react'
import { Phone } from 'lucide-react'
import Image from 'next/image'

export class TopBar extends React.Component {
  render() {
    return (
      <div className="hidden md:block bg-white text-brand-black border-b border-brand-black/20">
        <div className="container mx-auto px-4">
          {/* Desktop Layout */}
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2">
                <Image 
                  src="/images/direct-pest-solutions-logo.png" 
                  alt="Direct Pest Solutions - Miami's Trusted Pest Control Company" 
                  width={280} 
                  height={84}
                  className="h-14 w-auto"
                  priority
                />
              </a>
            </div>
            
            {/* Right: Phone */}
            <div className="flex items-center">
              <a 
                href="tel:+13053516886" 
                className="flex items-center gap-2 text-lg font-bold hover:text-brand-red transition-colors"
                aria-label="Call Direct Pest Solutions at 305-351-6886"
              >
                <Phone size={20} />
                <span>+1-(305) 351-6886</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}