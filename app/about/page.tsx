import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react'
import Button from '@/components/ui/Button'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = {
  title: 'About Direct Pest Solutions | Miami\'s Trusted Pest Control Company',
  description: 'Learn about Direct Pest Solutions - Miami\'s premier pest control service. Family-owned, licensed exterminators providing professional pest control and extermination services since 2020.',
  keywords: 'about Direct Pest Solutions, Miami pest control company, licensed exterminators Miami, professional pest control, family-owned pest control, certified pest control Miami',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/company/pest-prevention-service.webp"
            alt="Direct Pest Solutions - Professional pest control and prevention services in Miami"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl uppercase mb-6 font-black">
              ABOUT <span className="text-brand-red">DIRECT PEST SOLUTIONS</span>
            </h1>
            <p className="text-xl text-white/90">
              Miami's Trusted Pest Control Experts - Professional, Reliable, and Committed to Eliminating Pests
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <p className="text-sm uppercase tracking-wider text-brand-red font-bold mb-4">
                Our Story
              </p>
              <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6 text-brand-black leading-tight">
                Miami's Premier Pest Control Company
              </h2>
              <p className="text-lg text-brand-black/80 mb-4">
                Direct Pest Solutions was founded with a simple mission: to provide Miami homeowners and businesses with 
                honest, reliable, and professional pest control services they can trust.
              </p>
              <p className="text-lg text-brand-black/80 mb-4">
                For over 22 years, our team has built a reputation for excellence through dedicated service 
                to the Miami-Dade community. We understand the unique pest challenges in South Florida and are 
                committed to keeping your property pest-free year-round.
              </p>
              <p className="text-lg text-brand-black/80 mb-6">
                What sets us apart is our hands-on approach - we personally ensure every job meets our high 
                standards, and we treat every customer's property as if it were our own.
              </p>
              <Button href="/contact" size="lg" variant="primary">
                Get to Know Us Better
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square relative">
                <Image
                  src="/images/company/pest-control-technician-exterior.jpg"
                  alt="Direct Pest Solutions professional pest control team in Miami"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - BLACK BACKGROUND */}
      <WhyChooseUs />

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-center mb-12 text-brand-black font-bold">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-brand-black/70">
                Honest pricing, transparent communication, and standing behind our work with a 100% satisfaction guarantee.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-brand-black/70">
                Your property's protection is our priority. We go above and beyond to ensure every customer is completely satisfied.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-brand-black/70">
                Continuous training, EPA-approved products, and meticulous attention to detail in every pest control service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews - BLACK BACKGROUND */}
      <Reviews />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-brand-red mb-2">10,000+</div>
              <p className="text-brand-black font-medium">Properties Protected</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-red mb-2">4.9★</div>
              <p className="text-brand-black font-medium">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-red mb-2">22+</div>
              <p className="text-brand-black font-medium">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-red mb-2">100%</div>
              <p className="text-brand-black font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="aspect-square relative">
                <Image
                  src="/images/company/commercial-pest-inspection.webp"
                  alt="Direct Pest Solutions professional pest inspection and treatment approach in Miami"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="text-white">
              <p className="text-sm uppercase tracking-wider text-brand-red font-bold mb-4">
                Our Approach
              </p>
              <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6 leading-tight">
                Comprehensive Pest Protection
              </h2>
              <p className="text-lg text-white/80 mb-4">
                We don't just treat pests - we provide comprehensive protection plans tailored to your property's 
                specific needs. Our integrated pest management (IPM) approach combines inspection, prevention, 
                treatment, and ongoing monitoring.
              </p>
              <p className="text-lg text-white/80 mb-4">
                Every technician on our team is fully licensed, extensively trained, and equipped with the latest 
                pest control technology. We use only EPA-approved products that are safe for your family and pets 
                while being highly effective against pests.
              </p>
              <p className="text-lg text-white/80 mb-6">
                From termite inspections to mosquito treatments, bed bug extermination to wildlife removal, 
                we handle every pest problem with the same level of professionalism and attention to detail.
              </p>
              <Button href="/services" size="lg" variant="primary">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Licensed & Certified Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <p className="text-sm uppercase tracking-wider text-brand-red font-bold mb-4">
                Licensed & Certified
              </p>
              <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6 text-brand-black leading-tight">
                Trusted Professionals You Can Count On
              </h2>
              <p className="text-lg text-brand-black/80 mb-4">
                Direct Pest Solutions is fully licensed and insured in the state of Florida. Our team maintains 
                all required certifications and stays current with the latest pest control techniques and safety 
                protocols through continuous professional development.
              </p>
              <p className="text-lg text-brand-black/80 mb-4">
                We're proud members of industry associations and adhere to strict standards for quality, safety, 
                and environmental responsibility. When you hire us, you can rest assured that your property is 
                in expert hands.
              </p>
              <p className="text-lg text-brand-black/80 mb-6">
                Our commitment to excellence has earned us hundreds of 5-star reviews from satisfied customers 
                throughout Miami-Dade County. We stand behind our work with a 100% satisfaction guarantee.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded">
                  <CheckCircle className="text-brand-red" size={20} />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded">
                  <CheckCircle className="text-brand-red" size={20} />
                  <span className="font-semibold">EPA Approved Products</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded">
                  <CheckCircle className="text-brand-red" size={20} />
                  <span className="font-semibold">100% Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative">
                <Image
                  src="/images/company/pest-exterminator-spraying.webp"
                  alt="Licensed and certified pest control professionals from Direct Pest Solutions serving Miami-Dade County"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Commitment Section */}
      <section className="py-16 md:py-24 bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-8 text-white font-bold">
              Our Commitment to Miami
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-black">Serving Our Community for Over 22 Years</h3>
              <p className="text-lg text-brand-black/80 mb-6">
                "We started Direct Pest Solutions with one goal: to provide the kind of professional, thorough pest control 
                that Miami property owners deserve. Every day, our team works hard to earn your trust through 
                exceptional workmanship, safe EPA-approved products, and unparalleled attention to detail."
              </p>
              <p className="text-lg text-brand-black/80 mb-6">
                "As a local, family-owned business, we understand Miami's unique pest challenges - from termites and bed bugs 
                to mosquitoes and wildlife. We're invested in this community because we live and work here too. When you 
                choose Direct Pest Solutions, you're supporting a local business that truly cares about protecting your 
                property and your peace of mind."
              </p>
              <p className="font-bold text-brand-black">
                - The Direct Pest Solutions Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-t-4 border-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4 text-brand-black font-bold">
            Experience Professional Pest Control
          </h2>
          <p className="text-xl text-brand-black/80 mb-8 max-w-2xl mx-auto">
            Join over 10,000 satisfied Miami homeowners and businesses who trust us for all their pest control needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-brand-red text-white px-8 py-4 font-bold uppercase border-2 border-brand-black hover:bg-brand-black transition-colors text-lg">
              Get Free Estimate
            </a>
            <a href="tel:+13053516886" className="bg-brand-black text-white px-8 py-4 font-bold uppercase border-2 border-brand-black hover:bg-brand-red transition-colors text-lg inline-flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call +1-(305) 351-6886
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
