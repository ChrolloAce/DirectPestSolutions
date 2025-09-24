import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Hitts Top Quality Tree And Lawn LLC | Miami\'s Trusted HVAC Company',
  description: 'Learn about Hitts Top Quality Tree And Lawn LLC - Miami\'s trusted HVAC company. Family-owned, licensed & insured, providing professional AC repair and installation since establishment.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-blue bg-noise py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="heading-xl uppercase mb-6">
              About Hitts Top Quality Tree And Lawn LLC
            </h1>
            <p className="text-xl text-white/90">
              Miami's Trusted HVAC Experts - Professional, Reliable, and Committed to Your Comfort
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
                Hitts Top Quality Tree And Lawn LLC was founded with a simple mission: to provide Miami residents and businesses with 
                honest, reliable, and professional HVAC services they can trust.
              </p>
              <p className="text-lg text-brand-black/80 mb-4">
                Led by owner Blendi, our team has built a reputation for excellence through years of dedicated service 
                to the Miami-Dade community. We understand the unique challenges of South Florida's climate and are 
                committed to keeping your spaces comfortable year-round.
              </p>
              <p className="text-lg text-brand-black/80 mb-6">
                What sets us apart is our hands-on approach - Blendi personally ensures every job meets our high 
                standards, and we treat every customer's home or business as if it were our own.
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
                <p className="font-bold text-brand-black text-lg">Serving Miami Since Day One</p>
                <p className="text-sm mt-2">Family-owned & operated with pride</p>
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
                Your comfort is our priority. We go above and beyond to ensure every customer is completely satisfied.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-brand-black" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-brand-black/70">
                Continuous training, cutting-edge equipment, and attention to detail in every service we provide.
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
              Why Miami Chooses CBE
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Licensed & Insured</h3>
                    <p className="text-brand-black/70">
                      Fully licensed HVAC contractors with comprehensive insurance for your protection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">24/7 Emergency Service</h3>
                    <p className="text-brand-black/70">
                      AC emergencies don't wait - neither do we. Available round the clock for urgent repairs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Same-Day Service</h3>
                    <p className="text-brand-black/70">
                      Fast response times with same-day service available for most repairs.
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
                      No hidden fees, no surprises. Clear, upfront pricing on all services.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Expert Technicians</h3>
                    <p className="text-brand-black/70">
                      Certified, experienced technicians who know Miami's unique HVAC needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-brand-gold flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">100% Satisfaction</h3>
                    <p className="text-brand-black/70">
                      We're not happy until you're happy - guaranteed satisfaction on every job.
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
              <div className="text-4xl font-bold text-brand-gold mb-2">500+</div>
              <p className="text-white">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">4.9★</div>
              <p className="text-white">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">24/7</div>
              <p className="text-white">Emergency Service</p>
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
              Meet the Owner
            </h2>
            <div className="bg-brand-off p-8 border-2 border-brand-black">
              <h3 className="text-2xl font-bold mb-4">Blendi - Owner & Lead Technician</h3>
              <p className="text-lg text-brand-black/80 mb-6">
                "I started Hitts Top Quality Tree And Lawn LLC with one goal: to provide the kind of honest, reliable HVAC service 
                that I would want for my own family. Every day, my team and I work hard to earn your trust through 
                quality work, fair pricing, and exceptional customer service."
              </p>
              <p className="text-lg text-brand-black/80 mb-6">
                "When you call CBE, you're not just getting a service provider - you're getting a partner who cares 
                about your comfort. I personally ensure every job meets our high standards, and I'm always available 
                to address any concerns."
              </p>
              <p className="font-bold text-brand-black">
                - Blendi, Owner of Hitts Top Quality Tree And Lawn LLC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg uppercase mb-4 text-white">
            Experience the CBE Difference
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Hitts Top Quality Tree And Lawn LLC for all their HVAC needs.
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
