import { Metadata } from 'next'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { CTAButton } from '@/components/ui/CTAButton'
import { Phone, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AC & HVAC Services Miami | CBE Air Services',
  description: 'Professional AC repair, installation, maintenance and HVAC services in Miami. Same-day service, licensed technicians. Call (305) 560-3087.',
  keywords: 'AC repair Miami, AC installation Miami, AC maintenance Miami, HVAC services Miami, air conditioning service, heating installation Miami'
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-brand-black/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl uppercase mb-6">
              Professional HVAC Services in Miami
            </h1>
            <p className="text-xl mb-8 text-white/90">
              From AC repair to installation, we provide comprehensive HVAC solutions for Miami homes and businesses. 
              Same-day service available with licensed, certified technicians.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="text-brand-red" size={20} />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-brand-red" size={20} />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-brand-red" size={20} />
                <span>Licensed & Insured</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton href="tel:+13055603087" variant="primary">
                Call (305) 560-3087
              </CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Get Free Quote
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Service Areas */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl uppercase mb-6">
              Serving All of Miami-Dade County
            </h2>
            <p className="text-lg mb-8">
              CBE Air Services provides professional HVAC services throughout Miami and surrounding areas. 
              Our local technicians know Miami's unique climate challenges and are ready to help.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                'Miami', 'Miami Beach', 'Sunny Isles Beach', 'Aventura',
                'North Miami', 'North Miami Beach', 'Bal Harbour', 'Surfside',
                'Coral Gables', 'Doral', 'Hialeah', 'Wynwood',
                'Brickell', 'Kendall', 'Homestead', 'Little Havana'
              ].map(area => (
                <div key={area} className="py-2 px-4 bg-white rounded-none border border-brand-black/10">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose CBE */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl uppercase mb-8 text-center">
              Why Choose CBE Air Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Expert Technicians</h3>
                <p className="text-gray-700">
                  Our NATE-certified technicians have years of experience with all AC brands and models. 
                  We diagnose problems accurately and fix them right the first time.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Transparent Pricing</h3>
                <p className="text-gray-700">
                  No surprises or hidden fees. We provide upfront pricing before any work begins, 
                  so you know exactly what to expect.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Fast Response</h3>
                <p className="text-gray-700">
                  We understand Miami's heat is no joke. That's why we offer same-day service 
                  and 24/7 emergency repairs to restore your comfort quickly.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Satisfaction Guaranteed</h3>
                <p className="text-gray-700">
                  We stand behind our work with comprehensive warranties and a 100% satisfaction guarantee. 
                  Your comfort is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service FAQ */}
      <ServiceFAQ />
      
      {/* Bottom CTA */}
      <section className="py-16 bg-brand-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl uppercase mb-4">
            Ready to Schedule Service?
          </h2>
          <p className="text-xl mb-8">
            Don't wait for a complete breakdown. Call CBE Air Services today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="tel:+13055603087" variant="secondary">
              Call (305) 560-3087
            </CTAButton>
            <CTAButton href="/contact" variant="primary">
              Schedule Online
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}