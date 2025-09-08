import Image from 'next/image'
import { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | All In Plumbing Solutions | Miami\'s Trusted Plumbers',
  description: 'Learn about All In Plumbing Solutions - Miami\'s trusted plumbing experts. Family-owned, licensed, and insured with over 20 years of experience.',
}

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="heading-xl text-center mb-8">
            About All In Plumbing Solutions
          </h1>
          <p className="text-xl text-center text-black/70 max-w-3xl mx-auto">
            Family-owned and operated since 2004, we've been Miami's trusted plumbing experts 
            for over 20 years. Our commitment to quality, honesty, and exceptional service 
            has made us the go-to choice for thousands of homes and businesses.
          </p>
        </div>

        {/* Team Photo Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/team-photo.png"
                alt="All In Plumbing Solutions Team"
                width={600}
                height={400}
                className="w-full h-auto rounded-none border-2 border-brand-black shadow-card"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-black/80 mb-4">
                What started as a father-son operation has grown into Miami's most reliable 
                plumbing service. We've built our reputation on treating every home like it's 
                our own and every customer like family.
              </p>
              <p className="text-black/80 mb-6">
                Today, our team of certified master plumbers continues that tradition, combining 
                old-school values with cutting-edge technology to solve any plumbing challenge.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                  <span className="font-semibold">Licensed & Insured (CFC1234567)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                  <span className="font-semibold">BBB A+ Rating</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                  <span className="font-semibold">500+ Five-Star Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="heading-lg text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Quality First',
                description: 'We never cut corners. Every job is done right the first time.'
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Your satisfaction is our top priority. We\'re not happy until you are.'
              },
              {
                icon: Clock,
                title: 'Reliability',
                description: 'On-time, every time. We respect your schedule and your home.'
              },
              {
                icon: CheckCircle,
                title: 'Transparency',
                description: 'Upfront pricing, honest advice, and no hidden fees.'
              }
            ].map((value, index) => (
              <div key={index} className="border-2 border-brand-black bg-white p-6 rounded-none shadow-card">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                  <value.icon className="text-brand-black" size={24} />
                </div>
                <h3 className="font-heading uppercase text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-black/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-brand-blue border-2 border-brand-black rounded-none p-8 md:p-12">
            <h2 className="heading-lg text-center mb-6">Proudly Serving Miami-Dade County</h2>
            <p className="text-center text-black/80 mb-8">
              From emergency repairs to full renovations, we're here for all your plumbing needs:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="font-semibold mb-2">North Miami-Dade</h3>
                <p className="text-sm text-black/70">
                  Aventura • Bal Harbour • Bay Harbor Islands • North Miami Beach • Sunny Isles
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Central Miami-Dade</h3>
                <p className="text-sm text-black/70">
                  Miami • Miami Beach • Coral Gables • Coconut Grove • Brickell • Downtown
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">South Miami-Dade</h3>
                <p className="text-sm text-black/70">
                  Kendall • Pinecrest • Palmetto Bay • Cutler Bay • Homestead • Florida City
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Experience the All In Difference?</h2>
          <p className="text-xl text-black/70 mb-8">
            Join thousands of satisfied customers who trust us with their plumbing needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              as="a"
              href="/contact"
              variant="primary"
              size="lg"
            >
              Get Free Quote
            </Button>
            <Button
              as="a"
              href="tel:5615712995"
              variant="secondary"
              size="lg"
            >
              Call (561) 571-2995
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
