'use client'

import React from 'react'
import { Phone } from 'lucide-react'

export class TopBar extends React.Component {
  render() {
    return (
      <div className="hidden md:block fixed inset-x-0 top-0 z-50 bg-brand-red text-brand-white border-b border-brand-black/20">
        <div className="container mx-auto px-4">
          {/* Desktop Layout */}
          <div className="flex items-center justify-between h-14">
            {/* Left: Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2">
                <span className="font-bold text-xl">Hitts Top Quality Tree And Lawn LLC</span>
              </a>
            </div>
            
            {/* Center: Empty for now */}
            <div className="flex items-center gap-6">
              {/* Location and hours removed as requested */}
            </div>
            
            {/* Right: Phone */}
            <div className="flex items-center">
              <a 
                href="tel:+13055603087" 
                className="flex items-center gap-2 text-lg font-bold hover:underline"
              >
                <Phone size={20} />
                <span>(305) 560-3087</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}