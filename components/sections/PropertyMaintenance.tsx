import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export function PropertyMaintenance() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-sm uppercase tracking-wider text-brand-red font-bold mb-4">
                Interested in Pest Control? Book Your Free QUOTE today!
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-6">
                Maintaining your property isn't just about aesthetics!
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-4">
                Why It's Important to Keep Your Property Well-Maintained
              </h3>
              <p className="text-lg text-brand-black/80 leading-relaxed mb-8">
                it's crucial to prevent pest infestations. Well-kept properties deter pests like rodents, insects, and termites, which thrive in cluttered, damp, and unkempt environments. Regular maintenance, such as fixing leaks, sealing cracks, and keeping your yard tidy, reduces the risk of attracting pests. Not only does this protect your investment by preventing structural damage, but it also ensures a healthier living environment for you and your family. Prioritize property maintenance and safeguard your home from unwanted invaders with Direct Pest Solutions' expert guidance and services.
              </p>
              <Button href="/contact" size="lg" variant="primary">
                BOOK A FREE QUOTE™ NOW
              </Button>
            </div>
            
            {/* Right: Image */}
            <div>
              <Image
                src="/images/company/residential-pest-control-service.webp"
                alt="Well-maintained residential home with clean exterior"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

