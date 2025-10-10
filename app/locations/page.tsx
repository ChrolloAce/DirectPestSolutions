import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pest Control Service Locations | Direct Pest Solutions Miami-Dade County',
  description: 'Direct Pest Solutions provides professional pest control, termite treatment, bed bug extermination & rodent removal throughout Miami-Dade County. Serving Miami, Coral Gables, Kendall, Aventura & more.',
  keywords: 'pest control Miami, exterminator Miami Beach, termite control Coral Gables, bed bug treatment Aventura, rodent removal Kendall, pest inspection Homestead, mosquito control Doral, pest control near me Miami-Dade',
}

const serviceLocations = [
  {
    city: 'Miami',
    slug: 'miami',
    description: 'Downtown Miami, Brickell, Wynwood, Little Havana, and surrounding areas',
    services: ['Termite Control', 'Bed Bug Extermination', 'Rodent Removal', 'Emergency Service'],
    responseTime: 'Same-Day',
    rating: 4.9,
    image: '/images/locations/miami-tropical-building-palm-trees.jpg',
    imageAlt: 'Professional pest control services in Miami Florida - Direct Pest Solutions serving downtown Miami, Brickell, and Wynwood with expert extermination'
  },
  {
    city: 'Miami Beach',
    slug: 'miami-beach',
    description: 'South Beach, Mid Beach, North Beach, and Bal Harbour',
    services: ['Bed Bugs', 'Mosquito Control', 'Hotel Pest Control', 'Emergency Service'],
    responseTime: 'Same-Day',
    rating: 4.9,
    image: '/images/locations/miami-beach-florida-coastline.jpg',
    imageAlt: 'Miami Beach pest control and bed bug extermination - Direct Pest Solutions protecting South Beach, hotels, and condos from pests'
  },
  {
    city: 'Coral Gables',
    slug: 'coral-gables',
    description: 'The City Beautiful - Historic homes and luxury residences',
    services: ['Termite Inspections', 'Rodent Exclusion', 'Mosquito Treatment', 'Prevention'],
    responseTime: 'Same-Day',
    rating: 5.0,
    image: '/images/locations/coral-gables-florida-pest-control.jpg',
    imageAlt: 'Coral Gables Florida pest control - Termite inspections and rodent removal for historic homes and luxury residences in the City Beautiful'
  },
  {
    city: 'Aventura',
    slug: 'aventura',
    description: 'High-rise condominiums and luxury shopping district',
    services: ['Condo Pest Control', 'Bed Bugs', 'Emergency Service', 'Commercial'],
    responseTime: 'Same-Day',
    rating: 4.9,
    image: '/images/locations/north-miami-florida.jpg',
    imageAlt: 'Aventura pest control for condos and high-rises - Bed bug treatment and commercial extermination in Aventura shopping district'
  },
  {
    city: 'Kendall',
    slug: 'kendall',
    description: 'West Miami-Dade residential communities',
    services: ['Termite Control', 'Rodent Removal', 'Ant Control', 'Inspections'],
    responseTime: 'Same-Day',
    rating: 4.9,
    image: '/images/locations/kendall-miami-florida.jpg',
    imageAlt: 'Kendall Miami pest control and termite treatment - Protecting West Kendall and East Kendall residential communities from pests'
  },
  {
    city: 'Homestead',
    slug: 'homestead',
    description: 'South Miami-Dade agricultural and residential area',
    services: ['Wildlife Removal', 'Termite Treatment', 'Emergency Service', 'Farm Pest Control'],
    responseTime: '1-2 Hours',
    rating: 4.8,
    image: '/images/locations/pinecrest-miami-florida.jpg',
    imageAlt: 'Homestead Florida pest control and wildlife removal - Farm pest control and termite treatment in South Miami-Dade'
  },
  {
    city: 'Palmetto Bay',
    slug: 'palmetto-bay',
    description: 'Upscale residential community in South Miami-Dade',
    services: ['Eco-Friendly Control', 'Termite Prevention', 'Mosquito Treatment', 'Inspections'],
    responseTime: 'Same-Day',
    rating: 5.0,
    image: '/images/locations/coconut-grove-miami.jpg',
    imageAlt: 'Palmetto Bay eco-friendly pest control - Termite prevention and mosquito treatment for upscale South Miami-Dade homes'
  },
  {
    city: 'Cutler Bay',
    slug: 'cutler-bay',
    description: 'Family-friendly residential community',
    services: ['Pest Control', 'Termite Treatment', 'Rodent Removal', 'Emergency Service'],
    responseTime: 'Same-Day',
    rating: 4.9,
    image: '/images/locations/key-biscayne-miami.jpg',
    imageAlt: 'Cutler Bay pest control and extermination - Family-safe pest removal and termite treatment for Cutler Bay residential homes'
  },
  {
    city: 'Doral',
    slug: 'doral',
    description: 'Business district and modern residential developments',
    services: ['Commercial Pest Control', 'Termite Inspections', 'Emergency Service', 'Offices'],
    responseTime: 'Same-Day',
    rating: 4.9,
    image: '/images/locations/west-kendall-miami.jpg',
    imageAlt: 'Doral commercial pest control - Office and business pest management for Doral business district and residential developments'
  },
  {
    city: 'Hialeah',
    slug: 'hialeah',
    description: 'Large residential community in northwest Miami-Dade',
    services: ['Pest Control', 'Termite Treatment', 'Emergency Service', 'Bilingual Service'],
    responseTime: 'Same-Day',
    rating: 4.9,
    image: '/images/locations/fisher-island-miami-beach.jpg',
    imageAlt: 'Hialeah pest control with bilingual service - Termite treatment and extermination for northwest Miami-Dade residential community'
  }
]

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/locations/miami-tropical-building-palm-trees.jpg"
            alt="Miami Pest Control Service Locations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <MapPin className="mx-auto mb-6 text-white" size={64} />
            <h1 className="font-heading text-5xl md:text-7xl uppercase mb-6 font-black">
              SERVICE <span className="text-brand-red">LOCATIONS</span>
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Professional Pest Control & Extermination Throughout Miami-Dade County
            </p>
            <p className="text-lg text-white/80">
              Locations • Licensed & Insured • 100% Guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-center mb-4 text-brand-black font-bold">
            Our Service Locations
          </h2>
          <p className="text-center text-lg text-brand-black/70 mb-12 max-w-3xl mx-auto">
            Professional pest control services available throughout Miami-Dade County. Click on your city to view local information.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceLocations.map((location) => (
              <Link 
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group"
              >
                <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full rounded-xl">
                  {/* Image with red banner */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Red diagonal banner */}
                    <div className="absolute bottom-0 left-0 bg-brand-red px-8 py-4" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
                      <span className="text-white text-lg font-bold uppercase tracking-wider">
                        {location.city}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-brand-black/70 text-sm leading-relaxed">{location.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
