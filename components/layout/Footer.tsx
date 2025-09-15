'use client'

import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { CTAButton } from '../ui/CTAButton'

export class Footer extends React.Component {
  private quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Commercial', href: '/commercial' },
    { label: 'About', href: '/about' },
    { label: 'Locations', href: '/locations' },
    { label: 'Contact', href: '/contact' }
  ]
  
  private services = [
    { label: 'AC Repair', href: '/services/ac-repair-miami' },
    { label: 'AC Maintenance', href: '/services/ac-maintenance-miami' },
    { label: 'AC Installation', href: '/services/ac-installation-miami' },
    { label: 'Heating Installation', href: '/services/heating-installation-miami' },
    { label: 'Coil Cleaning', href: '/services/coil-cleaning-miami' },
    { label: 'Weekend Service', href: '/services/weekend-service-miami' }
  ]
  
  render() {
    return (
      <footer className="bg-brand-black text-white">
        {/* CTA Banner */}
        <div className="bg-brand-red text-brand-white py-12 border-b-4 border-brand-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Need AC Service? Get Your Free Quote:
              </h2>
              <div className="flex gap-4">
                <CTAButton href="/contact" variant="secondary">
                  Book Service
                </CTAButton>
                <CTAButton href="tel:+13055603087" variant="primary">
                  Call (305) 560-3087
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">CBE Air Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-brand-blue mt-1" />
                  <span className="text-white/70">
                    201 180th Dr<br />
                    Sunny Isles Beach, FL 33160
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={18} className="text-brand-blue mt-1" />
                  <a href="tel:+13055603087" className="text-white/70 hover:text-brand-blue">
                    (305) 560-3087
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="text-brand-blue mt-1" />
                  <a href="mailto:cbeairservices@gmail.com" className="text-white/70 hover:text-brand-blue">
                    cbeairservices@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={18} className="text-brand-blue mt-1" />
                  <span className="text-white/70">
                    Mon-Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Our Services</h3>
              <ul className="space-y-2">
                {this.services.map((service) => (
                  <li key={service.href}>
                    <a href={service.href} className="text-white/70 hover:text-brand-blue transition">
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {this.quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/70 hover:text-brand-blue transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Service Areas */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Service Areas</h3>
              <p className="text-white/70 mb-4">
                Proudly serving Miami & Miami-Dade County:
              </p>
              <ul className="text-sm text-white/60 space-y-1">
                <li>• Miami Beach</li>
                <li>• Aventura</li>
                <li>• North Miami Beach</li>
                <li>• Coral Gables</li>
                <li>• Doral</li>
                <li>• Hialeah</li>
                <li>• And more...</li>
              </ul>
              
              {/* Social Links */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-white/50 hover:text-brand-blue transition">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-white/50 hover:text-brand-blue transition">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-white/50 hover:text-brand-blue transition">
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} CBE Air Services. All rights reserved. Licensed & Insured.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy" className="text-white/60 hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-white/60 hover:text-white transition">
                  Terms of Service
                </a>
                <a href="/sitemap" className="text-white/60 hover:text-white transition">
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