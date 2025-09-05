'use client'

import React, { useState, FormEvent } from 'react'
import { CTAButton } from '@/components/ui/CTAButton'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours.')
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="heading-xl text-center mb-8">
          Get Your Free Quote
        </h1>
        
        <p className="text-xl text-center text-black/70 mb-12 max-w-3xl mx-auto">
          Ready to transform your property? Fill out the form below or give us a call for your 
          free, no-obligation estimate. We typically respond within 24 hours!
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl2 shadow-card p-8">
            <h2 className="heading-md mb-6">Request a Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="house-wash">House Wash</option>
                  <option value="roof-wash">Roof Wash</option>
                  <option value="concrete">Concrete Cleaning & Sealing</option>
                  <option value="gutter">Gutter Cleaning</option>
                  <option value="commercial">Commercial Services</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <CTAButton onClick={() => {}} fullWidth>
                Submit Request
              </CTAButton>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-brand-gray rounded-xl2 p-8 mb-8">
              <h2 className="heading-md mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-brand-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:5615712995" className="text-brand-blue hover:underline">
                      (561) 571-2995
                    </a>
                    <a href="tel:9546573429" className="text-brand-blue hover:underline block">
                      (954) 657-3429
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-brand-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@brownspressurewashing.com" className="text-brand-blue hover:underline">
                      info@brownspressurewashing.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-brand-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-black/70">
                      Nashville, Franklin, Brentwood, Spring Hill, 
                      and surrounding Middle Tennessee areas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-brand-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-black/70">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-blue text-black rounded-xl2 p-8">
              <h3 className="font-heading text-2xl uppercase mb-4">
                Prefer to Call?
              </h3>
              <p className="mb-6">
                Get your quote even faster by calling us directly. Our friendly team is ready to help!
              </p>
              <CTAButton href="tel:5615712995" variant="secondary" size="lg" fullWidth>
                Call (561) 571-2995
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
