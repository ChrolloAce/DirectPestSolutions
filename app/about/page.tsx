import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Premium Auto Detailing Miami | Luxury Car Care Experts',
  description: 'Learn about Miami\'s premier auto detailing service - trusted by luxury car owners. Family-owned, certified detailers, providing professional car care and detailing services.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-blue bg-noise py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="heading-xl uppercase mb-6">
              About Our <span className="text-brand-gold">Premium Detailing</span>
            </h1>
            <p className="text-xl text-white/90">
              Miami's Trusted Auto Detailing Experts - Professional, Reliable, and Committed to Your Vehicle's Beauty
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="heading-lg uppercase mb-6 text-brand-black">
                Our Story
              </h2>
              <p className="text-lg text-brand-black/80 mb-4">
                Our premium auto detailing service was founded with a simple mission: to provide Miami's luxury car owners with 
                honest, reliable, and professional detailing services they can trust.
              </p>
              <p className="text-lg text-brand-black/80 mb-4">
                Our team has built a reputation for excellence through years of dedicated service 
                to the Miami-Dade community. We understand the unique needs of luxury and exotic vehicles and are 
                committed to keeping them in showroom condition year-round.
              </p>
              <p className="text-lg text-brand-black/80 mb-6">
                What sets us apart is our hands-on approach - we personally ensure every job meets our high 
                standards, and we treat every customer's vehicle as if it were our own prized possession.
              </p>
              <Button href="/contact" size="lg">
                Get to Know Us Better
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/Untitled design (28).png"
                  alt="Hitts Top Quality Tree And Lawn LLC Team"
                  fill
                  className="object-cover rounded-none border-4 border-brand-black"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-gold p-6 border-2 border-brand-black max-w-xs">
                <p className="font-bold text-brand-black text-lg">Trusted by Luxury Car Owners</p>
                <p className="text-sm mt-2">Certified detailing excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-brand-black" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-brand-black/70">
                Honest pricing, transparent communication, and standing behind our work with a 100% satisfaction guarantee.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-brand-black" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-brand-black/70">
                Your vehicle's care is our priority. We go above and beyond to ensure every customer is completely satisfied.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-brand-black" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-brand-black/70">
                Continuous training, premium products, and meticulous attention to detail in every detailing service we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
              Why Miami Luxury Car Owners Choose Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Certified Detailers</h3>
                    <p className="text-brand-black/70">
                      Professional detailers trained in luxury vehicle care with full insurance for your protection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Mobile Service Available</h3>
                    <p className="text-brand-black/70">
                      We come to you - convenient detailing at your home or office on your schedule.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Premium Products</h3>
                    <p className="text-brand-black/70">
                      Professional-grade products specifically chosen for luxury and exotic vehicles.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Transparent Pricing</h3>
                    <p className="text-brand-black/70">
                      No hidden fees, no surprises. Clear, upfront pricing on all detailing services.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Luxury Vehicle Specialists</h3>
                    <p className="text-brand-black/70">
                      Certified, experienced detailers who understand the unique needs of high-end vehicles.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">100% Satisfaction</h3>
                    <p className="text-brand-black/70">
                      We're not happy until you're happy - guaranteed satisfaction on every detailing job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-brand-blue bg-noise">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">1000+</div>
              <p className="text-white">Vehicles Detailed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">5.0★</div>
              <p className="text-white">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">Mobile</div>
              <p className="text-white">Service Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">100%</div>
              <p className="text-white">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg uppercase mb-8 text-brand-black">
              Our Commitment
            </h2>
            <div className="bg-brand-off p-8 border-2 border-brand-black">
              <h3 className="text-2xl font-bold mb-4">Premium Detailing Excellence</h3>
              <p className="text-lg text-brand-black/80 mb-6">
                "We started our detailing service with one goal: to provide the kind of meticulous, professional car care 
                that luxury vehicle owners deserve. Every day, our team works hard to earn your trust through 
                exceptional workmanship, premium products, and unparalleled attention to detail."
              </p>
              <p className="text-lg text-brand-black/80 mb-6">
                "When you choose us, you're not just getting a detailing service - you're getting specialists who treat 
                every vehicle like a masterpiece. We personally ensure every detail meets our exacting standards, and we're 
                committed to exceeding your expectations."
              </p>
              <p className="font-bold text-brand-black">
                - Miami's Premier Auto Detailing Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg uppercase mb-4 text-white">
            Experience Premium Detailing Excellence
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied luxury car owners who trust us for all their auto detailing needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Get Free Estimate
            </Button>
            <Button href="tel:3055603087" size="lg" variant="secondary">
              Call (305) 560-3087
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
