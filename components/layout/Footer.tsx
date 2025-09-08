'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { CTAButton } from '../ui/CTAButton'
import { servicesNav } from '@/content/services'

export class Footer extends React.Component {
  private quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/faqs' }
  ]
  
  render() {
    return (
      <footer className="bg-brand-black text-white">
        {/* CTA Banner */}
        <div className="bg-brand-blue text-brand-black py-12 border-b-4 border-brand-gold">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Get Your Free Quote Today
              </h2>
              <div className="flex gap-4">
                <CTAButton href="/contact" variant="secondary">
                  Free Estimate
                </CTAButton>
                <CTAButton href="tel:5615712995" variant="primary">
                  Call Now
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4 text-brand-gold">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {this.quickLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-brand-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4 text-brand-gold">
                Our Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="hover:text-brand-gold transition-colors font-semibold">
                    All Services →
                  </Link>
                </li>
                {servicesNav.slice(0, 5).map(service => (
                  <li key={service.slug}>
                    <Link href={`/${service.slug}`} className="hover:text-brand-gold transition-colors">
                      {service.short || service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4 text-brand-gold">
                Contact Info
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone size={18} className="mt-1 text-brand-gold" />
                  <div>
                    <a href="tel:5615712995" className="hover:text-brand-gold transition-colors">
                      (561) 571-2995
                    </a>
                    <span className="block text-sm text-white/60">Primary</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={18} className="mt-1 text-brand-gold" />
                  <div>
                    <a href="tel:9546573429" className="hover:text-brand-gold transition-colors">
                      (954) 657-3429
                    </a>
                    <span className="block text-sm text-white/60">Secondary</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="mt-1 text-brand-gold" />
                  <a href="mailto:info@allinplumbingsolutions.com" className="hover:text-brand-gold transition-colors">
                    info@allinplumbingsolutions.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 text-brand-gold" />
                  <span>Miami, FL</span>
                </li>
              </ul>
            </div>
            
            {/* Business Hours */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4 text-brand-gold">
                Business Hours
              </h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Clock size={18} className="text-brand-gold" />
                  <span>Mon-Fri: 7AM - 8PM</span>
                </li>
                <li className="ml-6">Sat: 8AM - 6PM</li>
                <li className="ml-6">Sun: 9AM - 5PM</li>
                <li className="mt-3 font-semibold text-brand-gold">
                  24/7 Emergency Service
                </li>
              </ul>
              
              {/* Social Media */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-gold hover:text-brand-black transition-colors rounded-none border border-white/20 flex items-center justify-center">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-gold hover:text-brand-black transition-colors rounded-none border border-white/20 flex items-center justify-center">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-gold hover:text-brand-black transition-colors rounded-none border border-white/20 flex items-center justify-center">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Areas */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="font-heading text-xl uppercase mb-4 text-brand-gold">
              Proudly Serving Miami-Dade County
            </h3>
            <p className="text-white/60 text-sm">
              Miami • Miami Beach • Coral Gables • Aventura • Kendall • Homestead • 
              Palmetto Bay • Cutler Bay • Doral • Hialeah • Key Biscayne • Wynwood • 
              Brickell • Coconut Grove • South Beach • North Miami • Bal Harbour • 
              Sunny Isles • Pinecrest • South Miami • West Miami • Miami Lakes
            </p>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 All In Plumbing Solutions. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-brand-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-brand-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white/60 hover:text-brand-gold transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}