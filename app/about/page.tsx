import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
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
              <Button as="a" href="/contact" size="lg" variant="primary">
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
              <Button as="a" href="/services" size="lg" variant="primary">
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

      {/* Customer Reviews - BLACK BACKGROUND - Last Section */}
      <Reviews />
    </>
  )
}
