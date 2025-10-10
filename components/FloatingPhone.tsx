'use client'

import React from 'react'
import { Phone } from 'lucide-react'

export function FloatingPhone() {
  return (
    <a
      href="tel:+13055603087"
      className="fixed bottom-8 right-8 z-50 bg-brand-red text-white p-4 rounded-full shadow-2xl border-2 border-brand-black hover:bg-brand-black hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Call Direct Pest Solutions"
    >
      <Phone size={28} className="animate-none" />
    </a>
  )
}

