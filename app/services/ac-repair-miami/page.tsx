import { Metadata } from 'next'
import Image from 'next/image'
import { CTAButton } from '@/components/ui/CTAButton'
import { Check, Phone, Clock, Shield, Star } from 'lucide-react'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'

export const metadata: Metadata = {
  title: 'AC Repair Miami | Same-Day Service | CBE Air Services',
  description: 'Fast, reliable AC repair in Miami. Same-day service for all makes & models. Licensed technicians, transparent pricing. Call +1-(305) 351-6886.',
  keywords: 'AC repair Miami, air conditioning repair Miami, emergency AC repair, AC not cooling, AC repair near me, same-day AC repair Miami'
}

export default function ACRepairPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-brand-black/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-5xl md:text-6xl uppercase mb-6">
                AC Repair Miami
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Fast, reliable AC repair service throughout Miami-Dade County. 
                Our certified technicians fix all makes and models with same-day service available.
              </p>
              
              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="text-brand-red" size={20} />
                  <span>Same-day emergency service</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-brand-red" size={20} />
                  <span>All brands & models serviced</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-brand-red" size={20} />
                  <span>Upfront, transparent pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-brand-red" size={20} />
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <CTAButton href="tel:+13053516886" variant="primary">
                  Call +1-(305) 351-6886
                </CTAButton>
                <CTAButton href="/contact" variant="secondary">
                  Get Free Quote
                </CTAButton>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src="/images/emergency.png"
                alt="AC Repair Service Miami"
                fill
                className="object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Common AC Problems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl uppercase mb-8 text-center">
            Common AC Problems We Fix
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                problem: 'AC Not Cooling',
                description: 'Refrigerant leaks, compressor issues, or frozen coils preventing proper cooling.'
              },
              {
                problem: 'AC Won\'t Turn On',
                description: 'Electrical problems, thermostat issues, or circuit breaker trips.'
              },
              {
                problem: 'Strange Noises',
                description: 'Grinding, squealing, or banging sounds indicating mechanical problems.'
              },
              {
                problem: 'Water Leaks',
                description: 'Clogged drain lines, frozen coils, or condensate pump failures.'
              },
              {
                problem: 'High Energy Bills',
                description: 'Inefficient operation due to dirty coils, low refrigerant, or aging components.'
              },
              {
                problem: 'Poor Airflow',
                description: 'Blocked vents, dirty filters, or ductwork issues restricting air circulation.'
              }
            ].map((item, index) => (
              <div key={index} className="border border-brand-black/10 p-6">
                <h3 className="font-bold text-xl mb-3">{item.problem}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl uppercase mb-8 text-center">
            Our AC Repair Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Call or Schedule Online</h3>
                  <p className="text-gray-700">
                    Contact us at +1-(305) 351-6886 or book online. We'll schedule your service appointment, 
                    often for the same day.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Professional Diagnosis</h3>
                  <p className="text-gray-700">
                    Our certified technician arrives on time and performs a thorough inspection to 
                    accurately diagnose the problem.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Upfront Pricing</h3>
                  <p className="text-gray-700">
                    Before any work begins, we provide clear, upfront pricing with no hidden fees 
                    or surprises.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Expert Repair</h3>
                  <p className="text-gray-700">
                    With your approval, we complete the repair using quality parts and proven techniques, 
                    often finishing the same day.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Quality Guarantee</h3>
                  <p className="text-gray-700">
                    We test your system thoroughly and back our work with a satisfaction guarantee 
                    and warranty on parts and labor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Phone className="text-brand-red mx-auto mb-4" size={48} />
              <h3 className="font-bold text-xl mb-2">24/7 Emergency</h3>
              <p className="text-gray-700">Available when you need us most</p>
            </div>
            <div>
              <Clock className="text-brand-red mx-auto mb-4" size={48} />
              <h3 className="font-bold text-xl mb-2">Same-Day Service</h3>
              <p className="text-gray-700">Fast response times</p>
            </div>
            <div>
              <Shield className="text-brand-red mx-auto mb-4" size={48} />
              <h3 className="font-bold text-xl mb-2">Licensed & Insured</h3>
              <p className="text-gray-700">Certified professionals</p>
            </div>
            <div>
              <Star className="text-brand-red mx-auto mb-4" size={48} />
              <h3 className="font-bold text-xl mb-2">5-Star Service</h3>
              <p className="text-gray-700">300+ satisfied customers</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Areas */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl uppercase mb-8 text-center">
            AC Repair Service Areas in Miami
          </h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
            CBE Air Services provides fast AC repair throughout Miami-Dade County. 
            Our local technicians can reach you quickly, no matter where you are.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            {[
              'Miami', 'Miami Beach', 'Sunny Isles Beach', 'Aventura',
              'North Miami', 'Coral Gables', 'Doral', 'Hialeah',
              'Wynwood', 'Brickell', 'Kendall', 'Homestead'
            ].map(area => (
              <div key={area} className="py-3 px-4 bg-white border border-brand-black/10">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <ServiceFAQ />
      
      {/* Bottom CTA */}
      <section className="py-16 bg-brand-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl uppercase mb-4">
            Need AC Repair Now?
          </h2>
          <p className="text-xl mb-8">
            Don't suffer in the heat. Call CBE Air Services for fast, reliable AC repair in Miami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="tel:+13053516886" variant="secondary">
              Call +1-(305) 351-6886
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
