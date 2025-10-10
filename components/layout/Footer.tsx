'use client'

import React from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { CTAButton } from '../ui/CTAButton'

export class Footer extends React.Component {
  private quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Locations', href: '/locations' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ]
  
  private services = [
    { label: 'Termite Control', href: '/termite-control-miami' },
    { label: 'Bed Bug Extermination', href: '/bed-bug-extermination-miami' },
    { label: 'Mosquito Control', href: '/mosquito-control-miami' },
    { label: 'Rodent & Wildlife Control', href: '/rodent-wildlife-control-miami' },
    { label: 'Insect Control', href: '/insect-control-miami' },
    { label: 'Prevention & Inspection', href: '/prevention-inspection-miami' },
    { label: 'General Pest Control', href: '/pest-control-miami' }
  ]
  
  render() {
    return (
      <footer className="bg-white text-brand-black">
        {/* CTA Banner */}
        <div className="bg-brand-red text-brand-white py-12 border-b-4 border-brand-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Need Pest Control? Get Your Free Inspection:
              </h2>
              <div className="flex gap-4">
                <a href="/contact" className="bg-white text-brand-black px-6 py-3 font-bold uppercase border-2 border-brand-black hover:bg-brand-black hover:text-white transition-colors">
                  Book Service
                </a>
                <a href="tel:+13053516886" className="bg-white text-brand-black px-6 py-3 font-bold uppercase border-2 border-brand-black hover:bg-brand-black hover:text-white transition-colors">
                  Call +1-(305) 351-6886
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Direct Pest Solutions - Miami's Trusted Pest Control Company"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <p className="text-brand-black/70 mb-4 text-sm">
                Miami's trusted pest control company providing professional extermination services since 2020. Licensed, insured, and guaranteed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Clock size={18} className="text-brand-red mt-1 flex-shrink-0" />
                  <span className="text-brand-black/70 text-sm">
                    Monday – Friday: 9 AM – 5 PM<br />
                    Saturday: 9 AM – 1 PM
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4 text-brand-black">Our Services</h3>
              <ul className="space-y-2">
                {this.services.map((service) => (
                  <li key={service.href}>
                    <a href={service.href} className="text-brand-black/70 hover:text-brand-red transition text-sm">
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4 text-brand-black">Quick Links</h3>
              <ul className="space-y-2">
                {this.quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-brand-black/70 hover:text-brand-red transition text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h3 className="font-heading text-xl uppercase mt-6 mb-4 text-brand-black">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/faqs" className="text-brand-black/70 hover:text-brand-red transition text-sm">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/termite-control-miami/treatment-cost" className="text-brand-black/70 hover:text-brand-red transition text-sm">
                    Treatment Costs
                  </a>
                </li>
                <li>
                  <a href="/termite-control-miami/prevention" className="text-brand-black/70 hover:text-brand-red transition text-sm">
                    Prevention Tips
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4 text-brand-black">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/blog" className="text-brand-black/70 hover:text-brand-red transition text-sm">
                    Pest Control Blog
                  </a>
                </li>
                <li>
                  <a href="/termite-control-miami/damage-signs" className="text-brand-black/70 hover:text-brand-red transition text-sm">
                    Signs of Damage
                  </a>
                </li>
                <li>
                  <a href="/bed-bug-extermination-miami/treatment-methods" className="text-brand-black/70 hover:text-brand-red transition text-sm">
                    Treatment Methods
                  </a>
                </li>
                <li>
                  <a href="/locations" className="text-brand-black/70 hover:text-brand-red transition text-sm">
                    Service Areas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - BLACK BACKGROUND */}
        <div className="bg-brand-black border-t border-white/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} Direct Pest Solutions. All rights reserved. Licensed & Insured FL Pest Control Operator.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy" className="text-white/60 hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-white/60 hover:text-white transition">
                  Terms of Service
                </a>
                <a href="/sitemap.xml" className="text-white/60 hover:text-white transition">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
