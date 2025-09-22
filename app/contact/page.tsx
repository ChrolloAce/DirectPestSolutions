'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

// export const metadata: Metadata = {
//   title: 'Contact CBE Air Services | AC Repair Miami',
//   description: 'Contact CBE Air Services for AC repair, installation & maintenance in Miami. Call (305) 560-3087 for same-day service. Available 24/7 for emergencies.',
// }

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-blue bg-noise py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="heading-xl uppercase mb-6">
              Contact CBE Air Services
            </h1>
            <p className="text-xl text-white/90">
              24/7 Emergency Service • Same-Day Repairs • Free Estimates
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-brand-off border-2 border-brand-black p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-brand-black" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <a href="tel:3055603087" className="text-brand-blue hover:text-brand-red font-bold text-xl">
                (305) 560-3087
              </a>
              <p className="text-sm text-brand-black/60 mt-2">24/7 Emergency Line</p>
            </div>

            <div className="bg-brand-off border-2 border-brand-black p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-brand-black" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <a href="mailto:cbeairservices@gmail.com" className="text-brand-blue hover:text-brand-red">
                cbeairservices@gmail.com
              </a>
              <p className="text-sm text-brand-black/60 mt-2">Quick Response</p>
            </div>

            <div className="bg-brand-off border-2 border-brand-black p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-brand-black" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Service Area</h3>
              <p className="text-brand-black">Miami-Dade County</p>
              <p className="text-sm text-brand-black/60 mt-2">All Areas Covered</p>
            </div>

            <div className="bg-brand-off border-2 border-brand-black p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-brand-black" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p className="text-brand-black">24/7 Available</p>
              <p className="text-sm text-brand-black/60 mt-2">Emergency Service</p>
            </div>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="heading-lg uppercase mb-6 text-brand-black">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-brand-black/70 mb-8">
                Fill out the form below and we'll get back to you within 30 minutes during business hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 p-8 text-center">
                  <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-lg">We've received your request and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-black mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border-2 border-brand-black/20 focus:border-brand-blue outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-black mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border-2 border-brand-black/20 focus:border-brand-blue outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-black mb-2">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border-2 border-brand-black/20 focus:border-brand-blue outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-black mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-brand-black/20 focus:border-brand-blue outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      className="w-full px-4 py-3 border-2 border-brand-black/20 focus:border-brand-blue outline-none transition-colors"
                    >
                      <option value="">Select a Service</option>
                      <option>AC Repair</option>
                      <option>AC Maintenance</option>
                      <option>AC Installation</option>
                      <option>Commercial HVAC</option>
                      <option>RTU Package Units</option>
                      <option>Emergency Service</option>
                      <option>Air Duct Installation</option>
                      <option>UV Installation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="w-full px-4 py-3 border-2 border-brand-black/20 focus:border-brand-blue outline-none transition-colors"
                      placeholder="City, ZIP Code"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-brand-black/20 focus:border-brand-blue outline-none transition-colors resize-none"
                      placeholder="Please describe your AC issue or service needs..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 p-4 flex items-start gap-3">
                      <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                      <p className="text-sm text-red-700">
                        There was an error submitting your request. Please try again or call us directly.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Get Free Quote'}
                  </Button>

                  <p className="text-sm text-brand-black/60 text-center">
                    By submitting, you agree to receive communications from CBE Air Services
                  </p>
                </form>
              )}
            </div>

            {/* Right Side - Info */}
            <div>
              <div className="bg-brand-blue bg-noise text-white p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose CBE?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0 mt-1" size={20} />
                    <span>24/7 Emergency Service Available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0 mt-1" size={20} />
                    <span>Same-Day Service for Most Repairs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0 mt-1" size={20} />
                    <span>Licensed & Insured Technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0 mt-1" size={20} />
                    <span>Transparent, Upfront Pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0 mt-1" size={20} />
                    <span>100% Satisfaction Guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-gold flex-shrink-0 mt-1" size={20} />
                    <span>5-Star Rated on Google</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-gold border-2 border-brand-black p-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-black">Need Immediate Help?</h3>
                <p className="text-lg mb-6 text-brand-black/80">
                  Don't wait for a callback. Our emergency line is available 24/7 for urgent AC repairs.
                </p>
                <Button
                  href="tel:3055603087"
                  size="lg"
                  className="w-full !bg-brand-black !text-white hover:!bg-brand-blue"
                >
                  <Phone className="inline-block mr-2" size={20} />
                  Call Now: (305) 560-3087
                </Button>
              </div>

              <div className="mt-8 p-6 bg-brand-off border-l-4 border-brand-red">
                <h4 className="font-bold mb-2">Service Areas Include:</h4>
                <p className="text-sm text-brand-black/70">
                  Miami, Miami Beach, Coral Gables, Aventura, Kendall, Homestead, 
                  Palmetto Bay, Cutler Bay, Doral, Hialeah, and all of Miami-Dade County
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional Placeholder) */}
      <section className="bg-gray-200 h-96 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-4 text-brand-blue" size={48} />
            <h3 className="text-2xl font-bold mb-2">Serving All of Miami-Dade County</h3>
            <p className="text-brand-black/70">Professional HVAC Services Throughout South Florida</p>
          </div>
        </div>
      </section>
    </>
  )
}