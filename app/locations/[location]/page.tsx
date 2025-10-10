import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { CTAButton } from '@/components/ui/CTAButton'
import { Phone, MapPin, CheckCircle, Clock, Shield, Award, Star } from 'lucide-react'
import { services } from '@/content/services'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

interface LocationPageProps {
  params: {
    location: string
  }
}

// Location data near 15245 SW 31st Ln, Miami, FL 33185
const locations = [
  {
    slug: 'miami',
    name: 'Miami',
    state: 'FL',
    zip: '33135',
    description: 'Professional pest control services in Miami, Florida. Serving downtown Miami, Brickell, Little Havana, and surrounding neighborhoods.',
    coordinates: { lat: 25.7617, lng: -80.1918 },
    neighborhoods: ['Downtown Miami', 'Brickell', 'Little Havana', 'Coconut Grove', 'Midtown'],
    distance: '12 miles from our central office'
  },
  {
    slug: 'miami-beach',
    name: 'Miami Beach',
    state: 'FL',
    zip: '33139',
    description: 'Expert pest control and extermination services in Miami Beach. Protecting South Beach, Mid-Beach, and North Beach properties from pests.',
    coordinates: { lat: 25.7907, lng: -80.1300 },
    neighborhoods: ['South Beach', 'Mid-Beach', 'North Beach', 'Sunset Islands', 'Fisher Island'],
    distance: '15 miles from our central office'
  },
  {
    slug: 'coral-gables',
    name: 'Coral Gables',
    state: 'FL',
    zip: '33134',
    description: 'Premium pest control services in Coral Gables, FL. Protecting historic homes and properties in the City Beautiful with eco-friendly solutions.',
    coordinates: { lat: 25.7211, lng: -80.2683 },
    neighborhoods: ['Miracle Mile', 'Gables Estates', 'Old Cutler', 'South Gables', 'University of Miami area'],
    distance: '8 miles from our central office'
  },
  {
    slug: 'aventura',
    name: 'Aventura',
    state: 'FL',
    zip: '33180',
    description: 'Trusted pest control company serving Aventura, Florida. Residential and commercial pest management for North Miami-Dade properties.',
    coordinates: { lat: 25.9565, lng: -80.1390 },
    neighborhoods: ['Aventura Mall area', 'Williams Island', 'Porto Vita', 'Waterways', 'Turnberry Isle'],
    distance: '20 miles from our central office'
  },
  {
    slug: 'kendall',
    name: 'Kendall',
    state: 'FL',
    zip: '33183',
    description: 'Complete pest control solutions in Kendall, Miami. Licensed exterminators serving West Kendall, East Kendall, and surrounding communities.',
    coordinates: { lat: 25.6792, lng: -80.3174 },
    neighborhoods: ['West Kendall', 'East Kendall', 'The Hammocks', 'Kendale Lakes', 'Three Lakes'],
    distance: '5 miles from our central office'
  },
  {
    slug: 'homestead',
    name: 'Homestead',
    state: 'FL',
    zip: '33030',
    description: 'Professional pest control in Homestead, FL. Protecting South Miami-Dade homes and farms from termites, rodents, and tropical pests.',
    coordinates: { lat: 25.4687, lng: -80.4776 },
    neighborhoods: ['Downtown Homestead', 'Naranja', 'Florida City', 'Redland', 'Princeton'],
    distance: '18 miles from our central office'
  },
  {
    slug: 'palmetto-bay',
    name: 'Palmetto Bay',
    state: 'FL',
    zip: '33157',
    description: 'Eco-friendly pest control services in Palmetto Bay. Family-safe extermination protecting South Miami-Dade residential communities.',
    coordinates: { lat: 25.6218, lng: -80.3246 },
    neighborhoods: ['Palmetto Bay Village Center', 'Cutler Ridge', 'Perrine', 'East Perrine', 'Palmetto Estates'],
    distance: '10 miles from our central office'
  },
  {
    slug: 'cutler-bay',
    name: 'Cutler Bay',
    state: 'FL',
    zip: '33189',
    description: 'Reliable pest control in Cutler Bay, Florida. Same-day service available for termite control, bed bugs, mosquitoes, and rodent removal.',
    coordinates: { lat: 25.5808, lng: -80.3468 },
    neighborhoods: ['Saga Bay', 'Cutler Ridge', 'Lakes by the Bay', 'Whispering Pines', 'Franjo Park'],
    distance: '12 miles from our central office'
  },
  {
    slug: 'doral',
    name: 'Doral',
    state: 'FL',
    zip: '33178',
    description: 'Commercial and residential pest control in Doral, Miami. Serving business parks, shopping centers, and neighborhoods throughout West Miami-Dade.',
    coordinates: { lat: 25.8195, lng: -80.3553 },
    neighborhoods: ['Downtown Doral', 'Doral Isles', 'Costa Del Sol', 'Trump National', 'Blue Lagoon'],
    distance: '10 miles from our central office'
  },
  {
    slug: 'hialeah',
    name: 'Hialeah',
    state: 'FL',
    zip: '33010',
    description: 'Affordable pest control services in Hialeah, FL. Licensed bilingual exterminators providing quality pest management for Miami-Dade families.',
    coordinates: { lat: 25.8576, lng: -80.2781 },
    neighborhoods: ['Hialeah Gardens', 'Palm Springs', 'Miami Lakes', 'Hialeah Heights', 'Westview'],
    distance: '8 miles from our central office'
  }
]

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = locations.find(loc => loc.slug === params.location)
  
  if (!location) {
    return {
      title: 'Location Not Found | Direct Pest Solutions',
    }
  }
  
  return {
    title: `Pest Control ${location.name} ${location.state} | Direct Pest Solutions | Licensed Exterminators`,
    description: `${location.description} Call (305) 560-3087 for same-day pest control service. Licensed, insured, and guaranteed results.`,
    keywords: `pest control ${location.name}, exterminator ${location.name}, ${location.name} pest control, termite control ${location.name}, bed bug extermination ${location.name}, rodent removal ${location.name}, mosquito control ${location.name}, pest inspection ${location.name}, ${location.name} ${location.state} pest control, emergency pest control ${location.name}`,
    authors: [{ name: 'Direct Pest Solutions' }],
    openGraph: {
      title: `Pest Control ${location.name}, ${location.state} | Direct Pest Solutions`,
      description: `Professional pest control and extermination services in ${location.name}. Licensed, insured, same-day service available.`,
      type: 'website',
      url: `https://directpestsolutions.com/locations/${location.slug}`,
      siteName: 'Direct Pest Solutions',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Pest Control ${location.name}, ${location.state}`,
      description: location.description,
    },
    alternates: {
      canonical: `https://directpestsolutions.com/locations/${location.slug}`,
    },
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = locations.find(loc => loc.slug === params.location)
  
  if (!location) {
    notFound()
  }

  const benefits = [
    { icon: Shield, title: 'Licensed & Insured', description: 'State-certified exterminators' },
    { icon: Clock, title: 'Same-Day Service', description: 'Emergency pest control available' },
    { icon: Award, title: 'Guaranteed Results', description: 'Free re-service if pests return' },
    { icon: Star, title: '100+ 5-Star Reviews', description: 'Trusted by local families' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PestControlService",
            "name": `Direct Pest Solutions - ${location.name}`,
            "description": location.description,
            "url": `https://directpestsolutions.com/locations/${location.slug}`,
            "telephone": "+13055603087",
            "email": "info@directpestsolutions.com",
            "areaServed": {
              "@type": "City",
              "name": location.name,
              "containedIn": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": location.coordinates.lat,
              "longitude": location.coordinates.lng
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15245 SW 31st Ln",
              "addressLocality": "Miami",
              "addressRegion": "FL",
              "postalCode": "33185",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "07:00",
                "closes": "19:00"
              }
            ],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "100"
            }
          })
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-brand-black/10">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: 'Locations', href: '/locations' },
              { label: location.name }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-brand-red bg-noise py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <MapPin className="mx-auto mb-6 text-white" size={64} />
            <h1 className="heading-xl uppercase mb-6">
              Pest Control in {location.name}, {location.state}
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {location.description}
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

      {/* Service Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            Why Choose Us in {location.name}?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-brand-off p-6 border-2 border-brand-black">
                <benefit.icon className="text-brand-red mb-4" size={40} />
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-brand-black/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-8 text-brand-black">
              Neighborhoods We Serve in {location.name}
            </h2>
            <p className="text-center text-lg text-brand-black/80 mb-8">
              Our licensed exterminators provide fast, reliable pest control throughout {location.name} and surrounding areas. {location.distance}.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {location.neighborhoods.map((neighborhood) => (
                <span key={neighborhood} className="px-4 py-2 bg-white border border-brand-red text-brand-black">
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
              Our Pest Control Services in {location.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter(s => s.featured).map((service) => (
                <a
                  key={service.id}
                  href={service.href}
                  className="bg-brand-off p-6 border-2 border-brand-black hover:border-brand-red transition-all group"
                >
                  <h3 className="font-bold text-xl mb-3 group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-black/70 mb-4 text-sm">
                    Professional {service.title.toLowerCase()} in {location.name}. {service.shortDescription}
                  </p>
                  <span className="text-brand-red font-semibold text-sm">
                    Learn More →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Pests */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-8 text-brand-black">
              Common Pests in {location.name}, Florida
            </h2>
            <p className="text-center text-lg text-brand-black/80 mb-8">
              South Florida's tropical climate creates ideal conditions for pests year-round. Our experts eliminate:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Termites', desc: 'Subterranean and drywood termites threaten structures' },
                { name: 'Bed Bugs', desc: 'Infestations in homes, hotels, and apartments' },
                { name: 'Mosquitoes', desc: 'Disease-carrying mosquitoes in yards and pools' },
                { name: 'Rodents', desc: 'Rats and mice seeking shelter and food' },
                { name: 'Ants', desc: 'Carpenter ants, fire ants, and sugar ants' },
                { name: 'Cockroaches', desc: 'German and American roaches in kitchens' },
                { name: 'Spiders', desc: 'Venomous and nuisance spider species' },
                { name: 'Wildlife', desc: 'Raccoons, opossums, and squirrels' },
              ].map((pest) => (
                <div key={pest.name} className="flex gap-3 bg-white p-4 border border-brand-black">
                  <CheckCircle className="text-brand-red flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">{pest.name}</h3>
                    <p className="text-sm text-brand-black/70">{pest.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg uppercase mb-8 text-brand-black">
              About Pest Control in {location.name}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-brand-black/80 mb-6">
                {location.name} residents face unique pest challenges due to Florida's humid subtropical climate. 
                Our local exterminators understand the specific pest pressures in {location.name} and provide 
                targeted treatments that work in South Florida conditions.
              </p>
              <p className="text-lg text-brand-black/80 mb-6">
                We serve all neighborhoods in {location.name}, including {location.neighborhoods.slice(0, 3).join(', ')}, 
                and surrounding areas. Our service area includes {location.zip} and nearby zip codes throughout Miami-Dade County.
              </p>
              <p className="text-lg text-brand-black/80 mb-6">
                <strong>Same-day emergency service available.</strong> We understand pest problems can't wait. 
                Call us at <a href="tel:+13055603087" className="text-brand-red font-bold">(305) 560-3087</a> and 
                we'll dispatch a licensed exterminator to your {location.name} property today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-brand-red bg-noise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg uppercase mb-6 text-white">
              Ready to Eliminate Pests in {location.name}?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free pest inspection and quote today. Licensed, insured, and guaranteed results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/contact" variant="secondary" size="lg">
                Schedule Free Inspection
              </CTAButton>
              <CTAButton href="tel:+13055603087" variant="primary" size="lg">
                <Phone className="inline-block mr-2" size={20} />
                Call (305) 560-3087
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

