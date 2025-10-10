'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import Image from 'next/image'

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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image and Info */}
            <div className="space-y-6">
              {/* Professional Image */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/imgi_11_66a6612dc4b559d6c99a5250_2.png"
                  alt="Direct Pest Solutions - Professional pest control technician in Miami providing expert pest inspection and treatment services"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Heading and Contact Info */}
              <div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase font-black leading-tight mb-6">
                  BOOK A <span className="text-brand-red">FREE PEST CONTROL</span><br />
                  ESTIMATE TODAY!
                </h1>
                
                <p className="text-lg text-brand-black/70 mb-8">
                  Contact us using the links below or fill out the form. One of our agents will get in touch with you shortly.
                </p>

                {/* Contact Links */}
                <div className="flex flex-wrap gap-6">
                  <a 
                    href="mailto:directpestsolutions@hotmail.com"
                    className="inline-flex items-center gap-2 text-brand-black hover:text-brand-red transition-colors font-semibold"
                  >
                    <svg className="w-6 h-6 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    directpestsolutions@hotmail.com
                  </a>

                  <a 
                    href="tel:+13053516886"
                    className="inline-flex items-center gap-2 text-brand-black hover:text-brand-red transition-colors font-semibold"
                  >
                    <svg className="w-6 h-6 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    +1-(305) 351-6886
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white shadow-2xl p-8 lg:p-10 rounded-lg border-2 border-gray-100">
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

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-red transition-colors text-brand-black placeholder-gray-400"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-red transition-colors text-brand-black placeholder-gray-400"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-red transition-colors text-brand-black placeholder-gray-400"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-red transition-colors text-brand-black placeholder-gray-400"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-red transition-colors text-brand-black placeholder-gray-400"
                    placeholder="Address"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-red transition-colors resize-none text-brand-black placeholder-gray-400"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-red text-white px-8 py-4 font-bold uppercase hover:bg-brand-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg rounded-md"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>

                <div className="flex items-start gap-2 text-xs text-brand-black/60 mt-4">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    name="consent"
                    className="mt-0.5"
                  />
                  <label htmlFor="consent" className="uppercase">
                    DO YOU CONSENT TO RECEIVE OFFERS AND AUTOMATED MESSAGES TO THE PROVIDED PHONE NUMBER ?
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
