import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Clock, Award, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/Reviews'
import { getFeaturedServices, services } from '@/content/services'

export const metadata: Metadata = {
  title: 'Pest Control Services Miami | Direct Pest Solutions',
  description: 'Comprehensive pest control services in Miami & Miami-Dade County. Termite control, bed bug extermination, rodent removal, mosquito treatment & more. Licensed & insured. Same-day service available. Call +1-(305) 351-6886.',
  keywords: 'pest control services Miami, exterminator services Miami, termite control, bed bug treatment, rodent control, mosquito control, ant control, cockroach extermination, wildlife removal, pest inspection Miami',
  alternates: {
    canonical: 'https://directpestsolutions.com/services',
  },
}

export default function ServicesPage() {
  const featuredServices = getFeaturedServices()
  const allServices = services

  const serviceAreas = [
    'Miami', 'Miami Beach', 'Coral Gables', 'Aventura',
    'Kendall', 'Homestead', 'Palmetto Bay', 'Cutler Bay',
    'Doral', 'Hialeah', 'Sunny Isles Beach', 'Brickell'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/company/termite-inspection-professional.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase mb-6 font-black leading-tight">
              Professional Pest Control <span className="text-brand-red">Services</span> in Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              From termite inspections to bed bug extermination, we provide comprehensive pest control solutions for Miami-Dade County homes and businesses. Same-day service available with licensed, insured exterminators.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="text-brand-red" size={20} />
                <span className="text-sm">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-brand-red" size={20} />
                <span className="text-sm">Emergency Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-brand-red" size={20} />
                <span className="text-sm">Licensed & Insured</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+13053516886" className="bg-brand-red text-white px-8 py-4 font-bold uppercase hover:bg-brand-red/90 transition-colors text-lg">
                Call +1-(305) 351-6886
              </a>
              <a href="/contact" className="bg-white text-brand-black px-8 py-4 font-bold uppercase hover:bg-gray-100 transition-colors text-lg">
                Get Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading uppercase text-5xl md:text-6xl text-brand-black mb-4 font-black">
              OUR <span className="text-brand-red">SERVICES</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-brand-black/80">
              Expert pest control solutions for every pest problem in Miami-Dade County
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group block"
              >
                <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full rounded-xl">
                  {/* Service Image with Diagonal Red Banner */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - Professional pest control services in Miami`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Diagonal red banner at bottom-left */}
                    <div 
                      className="absolute bottom-0 left-0 bg-brand-red px-8 py-4" 
                      style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
                    >
                      <span className="text-white text-sm font-bold uppercase tracking-wider">
                        {service.id.replace(/-/g, ' ')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-brand-black group-hover:text-brand-red transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-brand-black/70 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider">
                      <span>View Service</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Services */}
          {allServices.filter(s => !s.featured).length > 0 && (
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="font-heading uppercase text-3xl text-brand-black mb-8 text-center">
                Additional Services
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {allServices.filter(s => !s.featured).map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group flex items-center gap-4 p-6 bg-gray-50 hover:bg-brand-red hover:text-white transition-colors border border-brand-black/10"
                  >
                    <CheckCircle className="text-brand-red group-hover:text-white flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{service.title}</h4>
                      <p className="text-sm opacity-80 line-clamp-2">{service.shortDescription}</p>
                    </div>
                    <ArrowRight className="ml-auto flex-shrink-0 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Customer Reviews - BLACK BACKGROUND */}
      <Reviews />

      {/* Service Areas - WHITE BACKGROUND to break up black sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6 font-bold text-brand-black">
              Serving All of <span className="text-brand-red">Miami-Dade County</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-brand-black/80">
              Direct Pest Solutions provides professional pest control services throughout Miami and surrounding areas. 
              Our local exterminators know Miami's unique pest challenges and are ready to protect your property.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {serviceAreas.map(area => (
                <div key={area} className="py-3 px-4 bg-gray-50 hover:bg-brand-red hover:text-white transition-colors border border-brand-black/10 font-medium">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - BLACK BACKGROUND */}
      <WhyChooseUs />
    </div>
  )
}
