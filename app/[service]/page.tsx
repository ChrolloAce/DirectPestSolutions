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
import { ServiceIntro } from '@/components/sections/ServiceIntro'
import { WhatToExpect } from '@/components/sections/WhatToExpect'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { PropertyMaintenance } from '@/components/sections/PropertyMaintenance'
import { RelatedServicesSection } from '@/components/sections/RelatedServicesSection'
import Reviews from '@/components/Reviews'

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

  // Generate service intro description
  const serviceDescription = `Protect your home with Direct Pest Solutions' expert ${service.title.toLowerCase()} services in Miami. Our team specializes in eliminating common household pests, including ants, bed bugs, cockroaches, termites, and more. We provide customized treatment plans, safe and eco-friendly solutions, and ongoing prevention to ensure your home remains pest-free. Trust our experienced professionals to keep your family safe and your property protected from infestations. Contact us today for a free quote and take the first step towards a pest-free home.`
  
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

      {/* Service Intro */}
      <ServiceIntro serviceTitle={service.title} description={serviceDescription} />

      {/* Insect Catalog - Only show on applicable services */}
      {showInsectCatalog && <InsectCatalog insects={commonInsects} />}

      {/* Why Choose Us Section - BLACK BACKGROUND */}
      <WhyChooseUs />

      {/* What To Expect - WHITE BACKGROUND */}
      <WhatToExpect />

      {/* Process Section - WHITE BACKGROUND */}
      <ProcessSection />

      {/* Customer Reviews - BLACK BACKGROUND */}
      <Reviews />

      {/* Property Maintenance - WHITE BACKGROUND */}
      <PropertyMaintenance />

      {/* Related Services - WHITE BACKGROUND */}
      <RelatedServicesSection currentServiceId={service.id} />

      {/* FAQ Section - WHITE BACKGROUND */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading uppercase text-3xl md:text-4xl text-center mb-12 text-brand-black">
            Pest Control Frequently Asked Questions
          </h2>
          <ServiceFAQ faqs={faqs} serviceName={service.title} />
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