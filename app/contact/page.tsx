'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

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
      <section className="relative bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl uppercase mb-6 font-black">
              CONTACT <span className="text-brand-red">US</span>
            </h1>
            <p className="text-xl text-white/90">
              Book A Free Pest Control Estimate Today!
            </p>
            <p className="text-lg text-white/80 mt-4">
              Contact us using the links below or fill out the form. One of our agents will get in touch with you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-white border-2 border-brand-black p-6 text-center hover:shadow-lg transition-shadow rounded-lg">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <a href="tel:+13053516886" className="text-brand-red hover:text-brand-black font-bold text-xl">
                +1-(305) 351-6886
              </a>
              <p className="text-sm text-brand-black/60 mt-2">24/7 Emergency Line</p>
            </div>

            <div className="bg-white border-2 border-brand-black p-6 text-center hover:shadow-lg transition-shadow rounded-lg">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <a href="mailto:directpestsolutions@hotmail.com" className="text-brand-red hover:text-brand-black font-bold break-all">
                directpestsolutions@hotmail.com
              </a>
              <p className="text-sm text-brand-black/60 mt-2">Quick Response</p>
            </div>

            <div className="bg-white border-2 border-brand-black p-6 text-center hover:shadow-lg transition-shadow rounded-lg">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Service Area</h3>
              <p className="font-semibold">15245 SW 31st Ln</p>
              <p className="text-brand-black/70">Miami, FL 33185</p>
              <p className="text-sm text-brand-black/60 mt-2">Serving Miami-Dade</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-2 border-brand-black p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="font-heading text-3xl md:text-4xl uppercase mb-2 text-brand-black font-bold text-center">
                Get Your Free Pest Inspection
              </h2>
              <p className="text-center text-brand-black/70 mb-8">
                Fill out the form below and we'll contact you within 24 hours
              </p>

              {submitted && (
                <div className="mb-6 bg-green-50 border-2 border-green-500 p-4 rounded-lg flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-green-800">Thank you for contacting us!</p>
                    <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 bg-red-50 border-2 border-red-500 p-4 rounded-lg flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-red-800">Something went wrong</p>
                    <p className="text-sm text-red-700">Please try again or call us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-semibold mb-2 text-brand-black">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-brand-black rounded focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-semibold mb-2 text-brand-black">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border-2 border-brand-black rounded focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="(305) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-2 text-brand-black">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-brand-black rounded focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block font-semibold mb-2 text-brand-black">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 border-2 border-brand-black rounded focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="123 Main St, Miami, FL"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-semibold mb-2 text-brand-black">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border-2 border-brand-black rounded focus:outline-none focus:border-brand-red transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="Residential Pest Control">Residential Pest Control</option>
                    <option value="Commercial Pest Control">Commercial Pest Control</option>
                    <option value="Termite Control">Termite Control</option>
                    <option value="Bed Bug Extermination">Bed Bug Extermination</option>
                    <option value="Mosquito Control">Mosquito Control</option>
                    <option value="Rodent Control">Rodent Control</option>
                    <option value="Wildlife Control">Wildlife Control</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold mb-2 text-brand-black">
                    Tell us about your pest problem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-brand-black rounded focus:outline-none focus:border-brand-red transition-colors resize-none"
                    placeholder="Describe your pest issue..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-red text-white px-8 py-4 font-bold uppercase border-2 border-brand-black hover:bg-brand-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? 'Sending...' : 'Request Free Inspection'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg p-8">
              <Clock className="mx-auto mb-4 text-brand-red" size={48} />
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-lg">
                <p><strong>Monday - Sunday:</strong> 7:00 AM - 7:00 PM</p>
                <p className="text-brand-red font-bold">24/7 Emergency Service Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t-4 border-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4 text-brand-black font-bold">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-brand-black/80 mb-8 max-w-2xl mx-auto">
            Call us now for same-day pest control service in Miami-Dade County
          </p>
          <a
            href="tel:+13053516886"
            className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 font-bold uppercase border-2 border-brand-black hover:bg-brand-black transition-colors text-xl rounded-lg shadow-lg"
          >
            <Phone size={24} />
            Call Now: +1-(305) 351-6886
          </a>
          <p className="text-brand-black/60 mt-6 text-sm font-medium">
            Licensed & Insured • Same-Day Service Available • 100% Satisfaction Guaranteed
          </p>
        </div>
      </section>
    </>
  )
}
