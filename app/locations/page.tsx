import { Metadata } from 'next'
import { MapPin, Phone, Clock, Star } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'HVAC Service Locations | CBE Air Services Miami-Dade County',
  description: 'CBE Air Services provides AC repair, installation & maintenance throughout Miami-Dade County. Serving Miami, Miami Beach, Coral Gables, Aventura, Kendall, Homestead & more.',
  keywords: 'AC repair Miami, HVAC service Miami Beach, air conditioning Coral Gables, AC installation Aventura, heating repair Kendall, emergency AC Homestead, commercial HVAC Doral',
}

const serviceLocations = [
  {
    city: 'Miami',
    zipCodes: ['33101', '33102', '33109', '33125', '33126', '33127', '33128', '33129', '33130', '33131', '33132', '33133', '33134', '33135', '33136', '33137', '33138', '33142', '33145', '33146', '33150', '33155', '33156', '33157', '33158', '33161', '33162', '33163', '33164', '33165', '33166', '33167', '33168', '33169', '33170', '33172', '33173', '33174', '33175', '33176', '33177', '33178', '33179', '33180', '33181', '33182', '33183', '33184', '33185', '33186', '33187', '33189', '33190', '33193', '33194', '33196'],
    description: 'Downtown Miami, Brickell, Wynwood, Little Havana, and surrounding areas',
    services: ['Emergency AC Repair', 'AC Installation', 'Commercial HVAC', 'Duct Cleaning'],
    responseTime: '30 minutes'
  },
  {
    city: 'Miami Beach',
    zipCodes: ['33109', '33119', '33139', '33140', '33141', '33154'],
    description: 'South Beach, Mid Beach, North Beach, and Bal Harbour',
    services: ['AC Repair', 'AC Maintenance', 'Emergency Service', 'Hotel HVAC'],
    responseTime: '45 minutes'
  },
  {
    city: 'Coral Gables',
    zipCodes: ['33114', '33124', '33134', '33143', '33146', '33156', '33158'],
    description: 'The City Beautiful - Historic homes and luxury residences',
    services: ['AC Installation', 'Historic Home HVAC', 'AC Maintenance', 'Duct Cleaning'],
    responseTime: '30 minutes'
  },
  {
    city: 'Aventura',
    zipCodes: ['33160', '33180', '33181'],
    description: 'High-rise condominiums and luxury shopping district',
    services: ['Condo HVAC', 'AC Repair', 'Emergency Service', 'Commercial HVAC'],
    responseTime: '35 minutes'
  },
  {
    city: 'Kendall',
    zipCodes: ['33143', '33156', '33173', '33176', '33183', '33186', '33193', '33196'],
    description: 'West Miami-Dade residential communities',
    services: ['AC Installation', 'AC Repair', 'AC Maintenance', 'Duct Cleaning'],
    responseTime: '40 minutes'
  },
  {
    city: 'Homestead',
    zipCodes: ['33030', '33031', '33032', '33033', '33034', '33035'],
    description: 'South Miami-Dade agricultural and residential area',
    services: ['AC Repair', 'Emergency Service', 'AC Installation', 'Commercial HVAC'],
    responseTime: '45 minutes'
  },
  {
    city: 'Palmetto Bay',
    zipCodes: ['33157', '33158', '33176'],
    description: 'Upscale residential community in South Miami-Dade',
    services: ['AC Installation', 'AC Maintenance', 'Luxury Home HVAC', 'Duct Cleaning'],
    responseTime: '35 minutes'
  },
  {
    city: 'Cutler Bay',
    zipCodes: ['33157', '33189', '33190'],
    description: 'Family-friendly residential community',
    services: ['AC Repair', 'AC Installation', 'AC Maintenance', 'Emergency Service'],
    responseTime: '40 minutes'
  },
  {
    city: 'Doral',
    zipCodes: ['33122', '33126', '33166', '33172', '33178', '33182', '33184'],
    description: 'Business district and modern residential developments',
    services: ['Commercial HVAC', 'AC Installation', 'Emergency Service', 'Office Buildings'],
    responseTime: '30 minutes'
  },
  {
    city: 'Hialeah',
    zipCodes: ['33010', '33012', '33013', '33014', '33015', '33016', '33017', '33018'],
    description: 'Large residential community in northwest Miami-Dade',
    services: ['AC Repair', 'AC Installation', 'Emergency Service', 'AC Maintenance'],
    responseTime: '35 minutes'
  },
  {
    city: 'Pinecrest',
    zipCodes: ['33156', '33158', '33176'],
    description: 'Affluent residential village with large estates',
    services: ['Luxury Home HVAC', 'AC Installation', 'AC Maintenance', 'Duct Cleaning'],
    responseTime: '35 minutes'
  },
  {
    city: 'Key Biscayne',
    zipCodes: ['33149'],
    description: 'Island community with luxury condos and homes',
    services: ['AC Repair', 'Salt Air HVAC Solutions', 'Emergency Service', 'Condo HVAC'],
    responseTime: '50 minutes'
  },
  {
    city: 'Coconut Grove',
    zipCodes: ['33133', '33134'],
    description: 'Historic neighborhood with bohemian charm',
    services: ['Historic Home HVAC', 'AC Repair', 'AC Installation', 'Emergency Service'],
    responseTime: '25 minutes'
  },
  {
    city: 'Westchester',
    zipCodes: ['33144', '33155', '33165', '33174', '33175'],
    description: 'Established residential neighborhood',
    services: ['AC Repair', 'AC Installation', 'AC Maintenance', 'Emergency Service'],
    responseTime: '35 minutes'
  },
  {
    city: 'South Beach',
    zipCodes: ['33139'],
    description: 'Art Deco District and world-famous beaches',
    services: ['Hotel HVAC', 'Restaurant HVAC', 'Emergency Service', 'AC Repair'],
    responseTime: '40 minutes'
  },
  {
    city: 'Brickell',
    zipCodes: ['33131', '33132'],
    description: 'Financial district with luxury high-rises',
    services: ['High-Rise HVAC', 'Commercial HVAC', 'Condo HVAC', 'Emergency Service'],
    responseTime: '25 minutes'
  }
]

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-blue bg-noise py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="heading-xl uppercase mb-6">
              HVAC Service Locations
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Professional AC Repair, Installation & Maintenance Throughout Miami-Dade County
            </p>
            <p className="text-lg text-white/80">
              24/7 Emergency Service • Same-Day Repairs • Licensed & Insured
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-lg uppercase mb-6 text-brand-black">
              Serving All of Miami-Dade County
            </h2>
            <p className="text-lg text-brand-black/80 mb-8">
              CBE Air Services proudly serves over 16 cities and communities throughout Miami-Dade County. 
              Our certified HVAC technicians are strategically located to provide fast response times and 
              professional service to every corner of South Florida.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-brand-off border-2 border-brand-black p-6">
                <div className="text-3xl font-bold text-brand-gold mb-2">16+</div>
                <p className="font-semibold">Cities Served</p>
              </div>
              <div className="bg-brand-off border-2 border-brand-black p-6">
                <div className="text-3xl font-bold text-brand-gold mb-2">24/7</div>
                <p className="font-semibold">Emergency Service</p>
              </div>
              <div className="bg-brand-off border-2 border-brand-black p-6">
                <div className="text-3xl font-bold text-brand-gold mb-2">30min</div>
                <p className="font-semibold">Average Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-brand-off">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            Our Service Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {serviceLocations.map((location, index) => (
              <div key={index} className="bg-white border-2 border-brand-black p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-black">{location.city}</h3>
                  <MapPin className="text-brand-blue flex-shrink-0" size={24} />
                </div>
                
                <p className="text-brand-black/70 mb-4">{location.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-brand-black mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-1">
                    {location.services.map((service, idx) => (
                      <span key={idx} className="text-xs bg-brand-gold/20 text-brand-black px-2 py-1 border border-brand-black/20">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-brand-red" />
                    <span className="text-brand-black/70">Response: {location.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-brand-gold fill-current" />
                    <span className="text-brand-black/70">4.9★</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-brand-black/10">
                  <p className="text-xs text-brand-black/60">
                    ZIP Codes: {location.zipCodes.slice(0, 5).join(', ')}
                    {location.zipCodes.length > 5 && ` +${location.zipCodes.length - 5} more`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
              Why Choose CBE Air Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-brand-black" size={28} />
                </div>
                <h3 className="font-bold mb-2">Fast Response</h3>
                <p className="text-brand-black/70 text-sm">Same-day service available with average 30-minute response time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-brand-black" size={28} />
                </div>
                <h3 className="font-bold mb-2">24/7 Emergency</h3>
                <p className="text-brand-black/70 text-sm">Round-the-clock emergency service for urgent AC repairs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-brand-black" size={28} />
                </div>
                <h3 className="font-bold mb-2">5-Star Rated</h3>
                <p className="text-brand-black/70 text-sm">Consistently rated 4.9+ stars by customers across all locations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-brand-black" size={28} />
                </div>
                <h3 className="font-bold mb-2">Local Experts</h3>
                <p className="text-brand-black/70 text-sm">Deep knowledge of Miami's unique climate and HVAC needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg uppercase mb-4 text-white">
            Need HVAC Service in Your Area?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't see your specific location listed? We serve all of Miami-Dade County. 
            Call us to confirm service in your area.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="tel:3055603087" size="lg" variant="primary">
              <Phone className="inline-block mr-2" size={20} />
              Call (305) 560-3087
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              Get Free Estimate
            </Button>
          </div>
          <p className="text-white/60 mt-6 text-sm">
            Licensed & Insured • Same-Day Service Available • 100% Satisfaction Guaranteed
          </p>
        </div>
      </section>
    </>
  )
}
