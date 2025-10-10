'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'

export function ProcessSection() {
  const steps = [
    {
      title: 'Inspection And Quote',
      description: 'Our experts conduct a thorough inspection of your home to identify pest issues and provide a detailed quote tailored to your specific needs.',
      image: '/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/pest-inspection-animation.gif',
      alt: 'Professional pest control inspector examining home for termites, bed bugs, and pest infestations in Miami'
    },
    {
      title: 'Bug The Bugs',
      description: 'We implement your customized pest control plan using advanced technology and methods to eliminate pests from your home effectively.',
      image: '/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/pest-spraying-animation.gif',
      alt: 'Licensed exterminator applying professional pest control treatment to eliminate bugs and insects in Miami home'
    },
    {
      title: 'Enjoy!',
      description: 'Relax and enjoy your pest-free home, knowing that Direct Pest Solutions has you covered with lasting protection and exceptional service.',
      image: '/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/pest-treatment-animation.gif',
      alt: 'Happy Miami family enjoying their pest-free home after professional pest control treatment by Direct Pest Solutions'
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4">
            The <span className="text-brand-red">Direct Pest Solutions</span> Process
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore Our Step By Step Process To A Pest Free Life
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Image Container with Border */}
              <div className="relative mb-6 border-4 border-brand-black overflow-hidden bg-gray-100">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover"
                    unoptimized // For GIFs
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl uppercase mb-4">
                {index === 1 ? (
                  <>
                    <span className="text-brand-red">{step.title.split(' ')[0]}</span> {step.title.split(' ').slice(1).join(' ')}
                  </>
                ) : (
                  step.title
                )}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            as="a"
            href="/contact"
            size="lg"
            variant="primary"
            className="!px-12 !py-6 !text-xl"
          >
            GET A FREE QUOTE™ NOW →
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            Join over 10000+ other happy clients
          </p>
        </div>
      </div>
    </section>
  )
}

