import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getServiceBySlug, services } from '@/content/services'
import { CTAButton } from '@/components/ui/CTAButton'
import { CheckCircle, Phone, Clock, Shield, Award, MapPin, ChevronRight, Star } from 'lucide-react'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { getServiceFAQs } from '@/content/service-faqs'
import Button from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { InsectCatalog } from '@/components/sections/InsectCatalog'

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
    title: `${service.title} Miami | Licensed Exterminators | Direct Pest Solutions`,
    description: `${service.shortDescription} Licensed & insured pest control company serving Miami-Dade County. Same-day service available. Free inspections. Call (305) 560-3087.`,
    keywords: `${service.title.toLowerCase()} Miami, ${service.title.toLowerCase()} Miami FL, emergency ${service.title.toLowerCase()} Miami, pest control Miami, exterminator Miami, ${service.title.toLowerCase()} service Miami Beach, ${service.title.toLowerCase()} Coral Gables, ${service.title.toLowerCase()} Aventura, ${service.title.toLowerCase()} Kendall, ${service.title.toLowerCase()} Homestead, licensed exterminator Miami, pest inspection Miami`,
    authors: [{ name: 'Direct Pest Solutions' }],
    openGraph: {
      title: `${service.title} Miami | Direct Pest Solutions`,
      description: `${service.shortDescription} Professional, licensed pest control serving Miami-Dade County.`,
      type: 'website',
      url: `https://directpestsolutions.com${service.href}`,
      siteName: 'Direct Pest Solutions',
      images: [{
        url: service.image,
        width: 1200,
        height: 630,
        alt: `Professional ${service.title} in Miami`
      }],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} Miami | Direct Pest Solutions`,
      description: service.shortDescription,
      images: [service.image],
    },
    alternates: {
      canonical: `https://directpestsolutions.com${service.href}`,
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.service)
  
  if (!service) {
    notFound()
  }

  const faqs = getServiceFAQs(service.id)
  
  // Define insects for catalog (show on applicable service pages)
  const commonInsects = [
    { name: 'Beetle', slug: 'beetle', image: '/images/Insects/beetle.png', treatment: 'Beetle Treatment' },
    { name: 'Bed Bug', slug: 'bed-bug', image: '/images/Insects/bed-bug.png', treatment: 'Bed Bug Treatment' },
    { name: 'Ant', slug: 'ant', image: '/images/Insects/ant.png', treatment: 'Ant Treatment' },
    { name: 'Centipede', slug: 'centipede', image: '/images/Insects/centipede.png', treatment: 'Centipede Treatment' },
    { name: 'Mouse', slug: 'rodent', image: '/images/Insects/mouse.png', treatment: 'Rodent Treatment' },
    { name: 'Fly', slug: 'fly', image: '/images/Insects/fly.png', treatment: 'Fly Treatment' },
    { name: 'Cricket', slug: 'cricket', image: '/images/Insects/cricket.png', treatment: 'Cricket Treatment' },
    { name: 'Mosquito', slug: 'mosquito', image: '/images/Insects/mosquito.png', treatment: 'Mosquito Treatment' },
  ]
  
  // Show insect catalog on general pest control, residential, and insect control pages
  const showInsectCatalog = ['pest-control', 'residential-pest-control', 'insect-control', 'general-pest-control'].includes(service.id)
  
  // Service-specific content
  const problemSolution = {
    problem: `Without professional ${service.title.toLowerCase()}, you risk property damage, health hazards, and pest infestations that worsen over time.`,
    solution: `Our licensed exterminators use proven IPM methods and safe, effective treatments to eliminate pests and prevent future infestations.`
  }

  // Always use the object format for benefits to maintain consistency
  const benefits = [
    { icon: 'shield', title: 'Protect Your Property', description: 'Prevent damage and health risks from pests' },
    { icon: 'clock', title: 'Fast Response', description: 'Same-day service available for urgent pest problems' },
    { icon: 'award', title: 'Licensed & Insured', description: 'State-certified exterminators you can trust' },
    { icon: 'star', title: 'Guaranteed Results', description: 'If pests return, we return for free' },
  ]

  const serviceAreas = [
    { name: 'Miami', slug: 'miami' },
    { name: 'Miami Beach', slug: 'miami-beach' },
    { name: 'Coral Gables', slug: 'coral-gables' },
    { name: 'Aventura', slug: 'aventura' },
    { name: 'Kendall', slug: 'kendall' },
    { name: 'Homestead', slug: 'homestead' },
    { name: 'Palmetto Bay', slug: 'palmetto-bay' },
    { name: 'Cutler Bay', slug: 'cutler-bay' },
    { name: 'Doral', slug: 'doral' },
    { name: 'Hialeah', slug: 'hialeah' }
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-brand-black/10">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title }
            ]}
          />
        </div>
      </div>

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
                alt={`Professional ${service.title} in Miami - Licensed exterminators providing expert ${service.title.toLowerCase()} for Miami-Dade County homes and businesses`}
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


      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Insect Catalog - Only show on applicable services */}
      {showInsectCatalog && <InsectCatalog insects={commonInsects} />}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            {service.title} FAQs
          </h2>
          <ServiceFAQ faqs={faqs} serviceName={service.title} />
        </div>
      </section>

      {/* Related Services - Internal Linking */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
              Related Pest Control Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services
                .filter(s => s.id !== service.id && s.featured)
                .slice(0, 3)
                .map((relatedService) => (
                  <a
                    key={relatedService.id}
                    href={relatedService.href}
                    className="bg-white p-6 border-2 border-brand-black hover:border-brand-red transition-all group"
                  >
                    <h3 className="font-bold text-xl mb-3 group-hover:text-brand-red transition-colors">
                      {relatedService.title}
                    </h3>
                    <p className="text-brand-black/70 mb-4 text-sm">
                      {relatedService.shortDescription}
                    </p>
                    <span className="text-brand-red font-semibold text-sm flex items-center gap-2">
                      Learn More <ChevronRight size={16} />
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Block */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="mx-auto mb-4 text-brand-red" size={48} />
            <h2 className="heading-lg uppercase mb-6 text-brand-black">
              Serving All of Miami-Dade County
            </h2>
            <p className="text-lg mb-8 text-brand-black/80">
              We provide professional {service.title.toLowerCase()} services throughout the Miami metropolitan area.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <a 
                  key={area.slug} 
                  href={`/locations/${area.slug}`}
                  className="px-4 py-2 bg-brand-red/10 border border-brand-red text-brand-black hover:bg-brand-red hover:text-white transition-colors"
                >
                  {area.name}
                </a>
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