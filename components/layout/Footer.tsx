'use client'

import React from 'react'
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
      <footer className="bg-brand-black text-white">
        {/* CTA Banner */}
        <div className="bg-brand-red text-brand-white py-12 border-b-4 border-brand-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Need Pest Control? Get Your Free Inspection:
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
              <h3 className="font-heading text-xl uppercase mb-4">Direct Pest Solutions</h3>
              <p className="text-white/70 mb-4 text-sm">
                Miami's trusted pest control company providing professional extermination services since 2020. Licensed, insured, and guaranteed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-brand-red mt-1 flex-shrink-0" />
                  <span className="text-white/70 text-sm">
                    201 180th Dr<br />
                    Sunny Isles Beach, FL 33160
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={18} className="text-brand-red mt-1 flex-shrink-0" />
                  <a href="tel:+13055603087" className="text-white/70 hover:text-brand-red transition text-sm">
                    (305) 560-3087
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="text-brand-red mt-1 flex-shrink-0" />
                  <a href="mailto:info@directpestsolutions.com" className="text-white/70 hover:text-brand-red transition text-sm">
                    info@directpestsolutions.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={18} className="text-brand-red mt-1 flex-shrink-0" />
                  <span className="text-white/70 text-sm">
                    Mon-Sun: 7:00 AM - 7:00 PM<br />
                    Emergency Service Available
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
                    <a href={service.href} className="text-white/70 hover:text-brand-red transition text-sm">
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
                    <a href={link.href} className="text-white/70 hover:text-brand-red transition text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h3 className="font-heading text-xl uppercase mt-6 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/faqs" className="text-white/70 hover:text-brand-red transition text-sm">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/termite-control-miami/treatment-cost" className="text-white/70 hover:text-brand-red transition text-sm">
                    Treatment Costs
                  </a>
                </li>
                <li>
                  <a href="/termite-control-miami/prevention" className="text-white/70 hover:text-brand-red transition text-sm">
                    Prevention Tips
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Service Areas */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Service Areas</h3>
              <p className="text-white/70 mb-4 text-sm">
                Proudly serving Miami-Dade County:
              </p>
              <ul className="text-sm text-white/60 space-y-1">
                <li>• Miami</li>
                <li>• Miami Beach</li>
                <li>• Coral Gables</li>
                <li>• Aventura</li>
                <li>• Kendall</li>
                <li>• Homestead</li>
                <li>• Doral</li>
                <li>• Hialeah</li>
                <li>• Sunny Isles Beach</li>
                <li>• All Miami-Dade County</li>
              </ul>
              
              {/* Social Links */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-sm">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/directpestsolutions" className="text-white/50 hover:text-brand-red transition" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/directpestsolutions" className="text-white/50 hover:text-brand-red transition" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.yelp.com/biz/direct-pest-solutions-miami" className="text-white/50 hover:text-brand-red transition" aria-label="Yelp">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                      <path d="M12 7c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1s1-.448 1-1V8c0-.552-.448-1-1-1zm0 7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/>
                    </svg>
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
