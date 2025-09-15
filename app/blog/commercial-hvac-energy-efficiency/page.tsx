import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Maximizing Energy Efficiency in Commercial HVAC Systems | CBE Air Services',
  description: 'Learn how Miami businesses can reduce energy costs and improve comfort with smart commercial HVAC strategies and modern technology.',
  keywords: 'commercial HVAC Miami, energy efficiency, commercial AC Miami, business HVAC, office building HVAC',
}

export default function BlogPost() {
  return (
    <>
      <section className="py-12 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-red transition-colors mb-6">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-brand-gold text-brand-black px-3 py-1 text-sm font-bold border border-brand-black">
                Commercial
              </span>
            </div>
            
            <h1 className="heading-xl uppercase mb-6 text-brand-black">
              Maximizing Energy Efficiency in Commercial HVAC Systems
            </h1>
            
            <div className="flex items-center gap-6 text-brand-black/60 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>December 28, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>8 min read</span>
              </div>
              <span>By CBE Air Services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="/images/commercial-hvac-tech.png"
                alt="Commercial HVAC energy efficiency in Miami"
                fill
                className="object-cover border-2 border-brand-black"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-brand-black/80 mb-8 font-medium">
                Commercial HVAC systems in Miami face unique challenges from year-round cooling demands and high humidity. 
                Implementing energy-efficient strategies can significantly reduce operating costs while improving occupant comfort.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">The Cost of Inefficient Commercial HVAC</h2>
              <p className="text-brand-black/80 mb-6">
                HVAC systems typically account for 40-60% of a commercial building's energy consumption in Miami. 
                An inefficient system can cost thousands of dollars annually in wasted energy, making efficiency 
                improvements a smart business investment.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Smart System Design and Upgrades</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Variable Refrigerant Flow (VRF) Systems</h3>
              <p className="text-brand-black/80 mb-4">
                VRF systems offer superior energy efficiency by providing precise temperature control for different 
                zones while allowing heat recovery between areas that need heating and cooling simultaneously.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">High-Efficiency Equipment</h3>
              <p className="text-brand-black/80 mb-6">
                Modern commercial HVAC equipment with high SEER ratings and ENERGY STAR certification can reduce 
                energy consumption by 20-40% compared to older systems.
              </p>

              <div className="bg-brand-blue bg-noise text-white p-8 my-8 border-2 border-brand-black">
                <h3 className="text-2xl font-bold mb-4">Commercial HVAC Consultation</h3>
                <p className="mb-6">
                  CBE Air Services specializes in commercial HVAC efficiency solutions for Miami businesses. 
                  Our experts can assess your current system and recommend cost-effective improvements.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="tel:3055603087" variant="primary" className="!bg-brand-gold !text-brand-black hover:!bg-white">
                    <Phone className="inline-block mr-2" size={18} />
                    Call (305) 560-3087
                  </Button>
                  <Button href="/contact" variant="secondary" className="!bg-white/10 !text-white !border-white hover:!bg-white/20">
                    Schedule Assessment
                  </Button>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Advanced Control Systems</h2>
              <p className="text-brand-black/80 mb-4">
                Modern building automation systems can optimize HVAC performance through:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Occupancy-based temperature control</li>
                <li>Demand-controlled ventilation</li>
                <li>Real-time energy monitoring</li>
                <li>Predictive maintenance scheduling</li>
                <li>Integration with lighting and security systems</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Regular Maintenance for Peak Efficiency</h2>
              <p className="text-brand-black/80 mb-4">
                Preventive maintenance is crucial for maintaining energy efficiency:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Quarterly filter changes and coil cleaning</li>
                <li>Annual refrigerant level checks</li>
                <li>Belt and motor inspections</li>
                <li>Ductwork sealing and insulation</li>
                <li>Control system calibration</li>
              </ul>

              <p className="text-brand-black/80 mb-6">
                Investing in commercial HVAC efficiency pays dividends through reduced energy costs, improved 
                occupant comfort, and enhanced system reliability. Contact CBE Air Services to learn how we 
                can help optimize your Miami business's HVAC performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
