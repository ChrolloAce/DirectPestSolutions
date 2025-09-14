import React from 'react'
import Button from '@/components/ui/Button'
import { Phone, Clock, Shield, Zap } from 'lucide-react'

export function EmergencyBanner() {
  return (
    <section className="bg-brand-yellow border-y-4 border-brand-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/20 to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-brand-black">
            24/7 Emergency Plumbing Services
          </h2>
          <p className="mt-4 text-lg text-brand-black/80 max-w-3xl mx-auto">
            When disaster strikes, every minute counts. Our emergency response team is ready 24/7 to handle your plumbing crisis.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-black text-brand-yellow rounded-none flex items-center justify-center mb-3">
              <Zap size={28} />
            </div>
            <h3 className="font-bold text-brand-black mb-1">Rapid Response</h3>
            <p className="text-sm text-brand-black/70">60-minute arrival guaranteed</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-black text-brand-yellow rounded-none flex items-center justify-center mb-3">
              <Clock size={28} />
            </div>
            <h3 className="font-bold text-brand-black mb-1">24/7 Availability</h3>
            <p className="text-sm text-brand-black/70">Nights, weekends & holidays</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-black text-brand-yellow rounded-none flex items-center justify-center mb-3">
              <Shield size={28} />
            </div>
            <h3 className="font-bold text-brand-black mb-1">Licensed & Insured</h3>
            <p className="text-sm text-brand-black/70">Fully certified professionals</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-black text-brand-yellow rounded-none flex items-center justify-center mb-3">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-brand-black mb-1">Direct Hotline</h3>
            <p className="text-sm text-brand-black/70">Speak to a plumber now</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            as="a"
            href="tel:3054567890"
            variant="primary"
            size="lg"
            className="bg-brand-black text-brand-yellow hover:bg-brand-black2 min-w-[250px]"
          >
            <Phone size={20} className="mr-2" />
            Call Emergency Hotline
          </Button>
          <p className="text-brand-black font-bold text-lg">
            (305) 456-7890
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-brand-black/60">
            Common emergencies: Burst pipes • Major leaks • Sewage backups • No hot water • Gas leaks • Flooding
          </p>
        </div>
      </div>
    </section>
  )
}
