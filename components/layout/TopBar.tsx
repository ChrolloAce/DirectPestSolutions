'use client'

import React from 'react'
import { Phone } from 'lucide-react'

export class TopBar extends React.Component {
  render() {
    return (
      <div className="hidden md:block fixed inset-x-0 top-0 z-50 bg-brand-red text-brand-white border-b-2 border-brand-black">
        <div className="container mx-auto px-4">
          {/* Desktop Layout */}
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2">
                <img src="/images/ACLOGO.png" alt="AC Company" className="h-12 w-auto" />
              </a>
            </div>
            
            {/* Phone Number - Right */}
            <div className="flex items-center">
              <a 
                href="tel:7862967304" 
                className="flex items-center gap-2 text-xl font-bold hover:underline"
              >
                <Phone size={20} />
                <span>(786) 296-7304</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
