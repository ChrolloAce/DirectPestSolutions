import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getServiceBySlug, services } from '@/content/services'
import { PhotoStack } from '@/components/ui/PhotoStack'
import { CTAButton } from '@/components/ui/CTAButton'
import { CheckCircle } from 'lucide-react'

interface ServicePageProps {
  params: {
    service: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.service)
  
  if (!service) {
    return {
      title: 'Service Not Found | All In Plumbing Solutions',
    }
  }
  
  return {
    title: `${service.name} | All In Plumbing Solutions | Miami`,
    description: service.summary,
    openGraph: {
      title: `${service.name} | All In Plumbing Solutions`,
      description: service.summary,
      type: 'website',
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.service)
  
  if (!service) {
    notFound()
  }
  
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <h1 className="heading-xl text-center mb-8">
            Professional {service.name} in Miami
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Left - Content */}
            <div>
              <p className="text-xl text-black/80 mb-6">
                {service.summary}
              </p>
              
              <div className="mt-8">
                <CTAButton href="/contact" size="lg">
                  {service.ctaLabel}
                </CTAButton>
              </div>
            </div>
            
            {/* Right - Photos */}
            <div>
              <PhotoStack 
                images={[service.heroImage, ...(service.gallery || [])].slice(0, 2)} 
                alt={service.name}
              />
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-brand-gray rounded-xl2 p-8 md:p-12">
            <h2 className="heading-md mb-8 text-center">
              Why Choose Our {service.name} Service?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {service.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-brand-blue mt-1 flex-shrink-0" size={20} />
                  <p className="text-body">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center bg-white rounded-xl2 shadow-card p-12">
            <h2 className="heading-lg mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Get your free, no-obligation quote today. We&apos;ll provide a speedy fast estimate 
              and work with your schedule to get the job done right.
            </p>
            <div className="flex gap-4 justify-center">
              <CTAButton href="/contact" size="lg">
                Get Free Estimate
              </CTAButton>
              <CTAButton href="tel:6155811581" variant="secondary" size="lg">
                Call (615) 581-1581
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
