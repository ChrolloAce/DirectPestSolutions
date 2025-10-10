import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getServiceBySlug, services } from '@/content/services'
import { CTAButton } from '@/components/ui/CTAButton'
import { CheckCircle, Phone, Clock, Shield, Award, MapPin, ChevronRight, Star } from 'lucide-react'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { getServiceFAQs } from '@/content/service-faqs'
import Button from '@/components/ui/Button'

interface ServicePageProps {
  params: {
    service: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.service)
  
  if (!service) {
    return {
      title: 'Service Not Found | Direct Pest Solutions',
    }
  }
  
  return {
    title: `${service.title} Miami | Direct Pest Solutions`,
    description: service.shortDescription + ' Call (305) 560-3087 for same-day service in Miami.',
    keywords: `${service.title.toLowerCase()} Miami, ${service.title.toLowerCase()} Miami FL, emergency ${service.title.toLowerCase()} Miami, pest control Miami, exterminator Miami, ${service.title.toLowerCase()} service Miami Beach, ${service.title.toLowerCase()} Coral Gables`,
    openGraph: {
      title: `${service.title} | Direct Pest Solutions`,
      description: service.shortDescription,
      type: 'website',
      images: [service.image],
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.service)
  
  if (!service) {
    notFound()
  }

  const faqs = getServiceFAQs(service.id)
  
  // Service-specific content
  const problemSolution = {
    problem: `Without professional ${service.title.toLowerCase()}, you risk property damage, health hazards, and pest infestations that worsen over time.`,
    solution: `Our licensed exterminators use proven IPM methods and safe, effective treatments to eliminate pests and prevent future infestations.`
  }

  const process = [
    { step: 1, title: 'Free Inspection', description: 'Comprehensive property assessment and pest identification' },
    { step: 2, title: 'Custom Treatment Plan', description: 'Tailored solution based on your specific pest problem' },
    { step: 3, title: 'Safe Treatment', description: 'Professional application using EPA-approved products' },
    { step: 4, title: 'Follow-Up & Prevention', description: 'Monitoring and preventive measures for lasting protection' },
  ]

  // Always use the object format for benefits to maintain consistency
  const benefits = [
    { icon: 'shield', title: 'Protect Your Property', description: 'Prevent damage and health risks from pests' },
    { icon: 'clock', title: 'Fast Response', description: 'Same-day service available for urgent pest problems' },
    { icon: 'award', title: 'Licensed & Insured', description: 'State-certified exterminators you can trust' },
    { icon: 'star', title: 'Guaranteed Results', description: 'If pests return, we return for free' },
  ]

  const serviceAreas = [
    'Miami', 'Miami Beach', 'Coral Gables', 'Aventura', 'Kendall',
    'Homestead', 'Palmetto Bay', 'Cutler Bay', 'Doral', 'Hialeah'
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-brand-red bg-noise py-20 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 13, 15, 0.7), rgba(11, 13, 15, 0.7)), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="heading-xl uppercase mb-6">
              Professional {service.title} in Miami, Florida
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {service.shortDescription} Direct Pest Solutions is Miami's trusted pest control company, serving Miami-Dade County with expert {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/contact" size="lg">
                Get Free Inspection
              </CTAButton>
              <CTAButton href="tel:+13055603087" variant="secondary" size="lg">
                <Phone className="inline-block mr-2" size={20} />
                Call (305) 560-3087
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Block */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="heading-lg uppercase mb-6 text-brand-black">
                Why {service.title} Matters
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-red-600">The Problem:</h3>
                <p className="text-lg text-brand-black/80">
                  {problemSolution.problem}
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Our Solution:</h3>
                <p className="text-lg text-brand-black/80">
                  {problemSolution.solution}
                </p>
              </div>
              
              <Button href="/contact" size="lg">
                Schedule Service Today
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={service.image} 
                alt={`Professional ${service.title} service in Miami`}
                className="rounded-none shadow-xl border-4 border-brand-black"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-red p-4 border-2 border-brand-black text-white">
                <p className="font-bold">Same-Day</p>
                <p className="text-sm">Service Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Step-by-Step Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center border-2 border-brand-black">
                    <span className="font-bold text-brand-black">{step.step}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-brand-black/70">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-8 bg-brand-gold/30 ml-6 mt-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-brand-red bg-noise">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-4 text-white">
            Why Choose Professional {service.title}?
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
            Professional {service.title.toLowerCase()} protects your property, health, and peace of mind.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-none shadow-lg border-2 border-brand-black">
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mb-4">
                  {benefit.icon === 'shield' && <Shield className="text-white" size={24} />}
                  {benefit.icon === 'clock' && <Clock className="text-white" size={24} />}
                  {benefit.icon === 'award' && <Award className="text-white" size={24} />}
                  {benefit.icon === 'star' && <Star className="text-white" size={24} />}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-brand-black/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Proof Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
              Trusted by Miami Homeowners
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-red mb-2">500+</div>
                <p className="text-lg">{service.title} Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-red mb-2">4.9★</div>
                <p className="text-lg">Average Customer Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-red mb-2">Same-Day</div>
                <p className="text-lg">Emergency Service Available</p>
              </div>
            </div>

            {/* Sample Testimonial */}
            <div className="bg-brand-off p-8 border-l-4 border-brand-red">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-brand-red text-brand-red" size={20} />
                ))}
              </div>
              <p className="text-lg italic mb-4">
                "Direct Pest Solutions provided excellent {service.title.toLowerCase()}. 
                Professional, on-time, and they completely eliminated our pest problem. 
                Highly recommend for anyone in Miami!"
              </p>
              <p className="font-bold">- Maria G., Coral Gables</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            {service.title} FAQs
          </h2>
          <ServiceFAQ faqs={faqs} serviceName={service.title} />
        </div>
      </section>

      {/* Service Area Block */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="mx-auto mb-4 text-brand-blue" size={48} />
            <h2 className="heading-lg uppercase mb-6 text-brand-black">
              Serving All of Miami-Dade County
            </h2>
            <p className="text-lg mb-8 text-brand-black/80">
              We provide professional {service.title.toLowerCase()} services throughout the Miami metropolitan area.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="px-4 py-2 bg-brand-blue/10 border border-brand-blue text-brand-black">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-black py-16 border-t-4 border-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg uppercase mb-4 text-white">
            Get Your Free {service.title} Inspection Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Professional service, same-day availability, 100% satisfaction guaranteed
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Get Free Inspection
            </Button>
            <Button href="tel:+13055603087" size="lg" variant="secondary">
              <Phone className="inline-block mr-2" size={20} />
              (305) 560-3087
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.shortDescription,
            provider: {
              '@type': 'PestControlService',
              name: 'Direct Pest Solutions',
              telephone: '+1-305-560-3087',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Miami',
                addressRegion: 'FL',
              }
            },
            areaServed: {
              '@type': 'City',
              name: 'Miami',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: service.title + ' Services',
              itemListElement: benefits.map(b => ({
                '@type': 'Offer',
                name: b.title,
                description: b.description,
              }))
            }
          })
        }}
      />
    </>
  )
}