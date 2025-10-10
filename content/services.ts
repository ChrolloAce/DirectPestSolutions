export interface Service {
  id: string
  slug?: string
  title: string
  shortDescription: string
  description: string[]
  icon: string
  image: string
  benefits: string[]
  href: string
  featured?: boolean
  emergency?: boolean
  subServices?: string[]
}

export const services: Service[] = [
  {
    id: 'residential-pest-control',
    slug: 'residential-pest-control-miami',
    title: 'Residential Pest Control',
    shortDescription: 'Complete pest protection for your Miami home and family',
    description: [
      'Protect your home and family with our comprehensive residential pest control services. We handle all common household pests including ants, roaches, spiders, termites, bed bugs, and more.',
      'Our licensed exterminators use safe, family-friendly treatments that are effective against pests but gentle on your home environment. We offer flexible service plans including one-time treatments, quarterly maintenance, and annual protection.',
      'Same-day emergency service available. Free inspections for new customers. We guarantee our residential pest control—if pests return between scheduled treatments, we return for free.'
    ],
    icon: 'Home',
    image: '/images/company/pest-control-technician-exterior.jpg',
    benefits: [
      'Safe for children & pets',
      'All household pests covered',
      'Flexible service plans',
      'Same-day emergency service',
      'Free re-service guarantee'
    ],
    href: '/residential-pest-control-miami',
    featured: true,
    emergency: true,
    subServices: ['General Pest Control', 'Termite Control', 'Bed Bug Treatment', 'Ant Control', 'Roach Control']
  },
  {
    id: 'commercial-pest-control',
    slug: 'commercial-pest-control-miami',
    title: 'Commercial Pest Control',
    shortDescription: 'Professional pest management for Miami businesses and commercial properties',
    description: [
      'Keep your business pest-free with our commercial pest control services. We serve restaurants, hotels, offices, warehouses, retail stores, and all types of commercial properties throughout Miami-Dade County.',
      'Our commercial programs include regular scheduled service, detailed documentation for health inspections, discreet service during business hours, and 24/7 emergency response for urgent pest problems.',
      'We understand the unique challenges of commercial pest control—protecting your reputation, meeting health codes, and maintaining a pest-free environment for employees and customers.'
    ],
    icon: 'Building',
    image: '/images/company/commercial-pest-inspection.webp',
    benefits: [
      'Health code compliance',
      'Scheduled service plans',
      'Discreet treatments',
      '24/7 emergency response',
      'Detailed documentation'
    ],
    href: '/commercial-pest-control-miami',
    featured: true,
    emergency: true,
    subServices: ['Restaurant Pest Control', 'Hotel Pest Control', 'Office Buildings', 'Retail Stores', 'Warehouses']
  },
  {
    id: 'full-property-protection',
    slug: 'full-property-protection-miami',
    title: 'Full Property Protection',
    shortDescription: 'Comprehensive pest prevention and protection plans for complete peace of mind',
    description: [
      'Our Full Property Protection plans provide year-round pest prevention and elimination for your entire property—inside and out. This comprehensive service covers all pests, all year, with unlimited re-services included.',
      'We create a customized treatment plan based on your property\'s specific needs, season, and pest pressure. Our IPM approach combines prevention, monitoring, and treatment for long-lasting results.',
      'Includes quarterly inspections, exterior barrier treatments, interior spot treatments as needed, termite monitoring, rodent exclusion, and detailed service reports. Perfect for homeowners and property managers who want complete protection.'
    ],
    icon: 'Shield',
    image: '/images/company/termite-inspection-professional.webp',
    benefits: [
      'Year-round protection',
      'All pests covered',
      'Unlimited re-services',
      'Quarterly inspections',
      'Termite monitoring included'
    ],
    href: '/full-property-protection-miami',
    featured: true,
    emergency: false,
    subServices: ['Annual Protection Plans', 'Pest Prevention', 'Termite Monitoring', 'Property Inspections', 'IPM Programs']
  },
  {
    id: 'mosquito-control',
    slug: 'mosquito-control-miami',
    title: 'Mosquito Control',
    shortDescription: 'Reduce mosquitoes by up to 90% and reclaim your outdoor space',
    description: [
      'Enjoy your Miami outdoor space without mosquitoes. Our mosquito control programs reduce mosquito populations by up to 90% using targeted treatments and prevention strategies.',
      'We treat breeding sites, apply barrier treatments to vegetation, and use larvicides to prevent mosquito development. Safe for your family, pets, and beneficial insects like bees and butterflies.',
      'Monthly service plans keep mosquitoes under control year-round. Perfect for homes, businesses, outdoor events, and special occasions. One-time treatments available for parties and events.'
    ],
    icon: 'Wind',
    image: '/images/company/insect-control-specialist.webp',
    benefits: [
      'Up to 90% mosquito reduction',
      'Barrier & larvicide treatments',
      'Monthly service plans',
      'Safe for family & pets',
      'Special event treatments'
    ],
    href: '/mosquito-control-miami',
    featured: true,
    emergency: false,
    subServices: ['Yard Treatments', 'Barrier Sprays', 'Larvicide Applications', 'Event Services', 'Monthly Programs']
  },
  {
    id: 'bee-removal',
    slug: 'bee-removal-miami',
    title: 'Bee Removal',
    shortDescription: 'Safe, humane bee removal and wasp/hornet extermination services',
    description: [
      'Professional bee, wasp, and hornet removal services throughout Miami. We safely remove bee hives and swarms, relocating honey bees when possible and exterminating aggressive wasps, hornets, and yellow jackets.',
      'Our bee removal specialists are equipped to handle all stinging insects including honey bees, carpenter bees, bumble bees, paper wasps, mud daubers, hornets, and yellow jackets. We remove nests from homes, trees, walls, attics, and ground locations.',
      'Emergency same-day service available for dangerous situations. We also provide prevention services to keep bees and wasps from returning. All work guaranteed with licensed and insured technicians.'
    ],
    icon: 'Bug',
    image: '/images/company/rodent-control-specialist.webp',
    benefits: [
      'Safe bee relocation',
      'Wasp & hornet extermination',
      'Same-day emergency service',
      'Nest removal & prevention',
      'Licensed bee specialists'
    ],
    href: '/bee-removal-miami',
    featured: true,
    emergency: true,
    subServices: ['Honey Bee Removal', 'Wasp Extermination', 'Hornet Removal', 'Yellow Jacket Control', 'Nest Removal']
  },
  {
    id: 'wildlife-control',
    slug: 'wildlife-control-miami',
    title: 'Wildlife Control',
    shortDescription: 'Humane wildlife and rodent removal with professional exclusion services',
    description: [
      'Get rid of rats, mice, raccoons, squirrels, opossums, and other wildlife safely and humanely. Our wildlife control specialists identify entry points, remove animals, and seal your property to prevent re-entry.',
      'We handle all types of wildlife common in Miami including roof rats, Norway rats, mice, squirrels, raccoons, opossums, iguanas, and birds. Trapping, exclusion, damage repair, and sanitization services available.',
      'Long-term solutions that address the root cause. We don\'t just remove the animals—we prevent them from coming back with professional exclusion work, entry point sealing, and ongoing monitoring.'
    ],
    icon: 'Squirrel',
    image: '/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/raccoon-photo.jpg',
    benefits: [
      'Humane removal methods',
      'Entry point identification',
      'Professional exclusion work',
      'Damage repair & sanitization',
      'Prevention strategies'
    ],
    href: '/wildlife-control-miami',
    featured: true,
    emergency: true,
    subServices: ['Rodent Control', 'Raccoon Removal', 'Squirrel Removal', 'Opossum Removal', 'Iguana Control']
  },
  // Additional non-featured services for specific needs
  {
    id: 'termite-control',
    slug: 'termite-control-miami',
    title: 'Termite Control & Inspection',
    shortDescription: 'Professional termite inspection and treatment to protect your Miami property',
    description: [
      'Protect your home from destructive termites with our professional termite control services. South Florida\'s climate makes termite infestations common—don\'t wait until it\'s too late.',
      'Our certified termite specialists perform thorough inspections, identify termite species (subterranean or drywood), and implement targeted treatment plans including baiting systems, liquid treatments, and fumigation.',
      'Free termite inspections available. We offer comprehensive warranties and ongoing monitoring to ensure your property stays termite-free for years to come.'
    ],
    icon: 'Bug',
    image: '/images/company/termite-inspection-professional.webp',
    benefits: [
      'Free termite inspections',
      'Multiple treatment options',
      'Licensed termite specialists',
      'Comprehensive warranties',
      'Ongoing monitoring programs'
    ],
    href: '/termite-control-miami',
    featured: false,
    emergency: false
  },
  {
    id: 'bed-bug-extermination',
    slug: 'bed-bug-extermination-miami',
    title: 'Bed Bug Extermination',
    shortDescription: 'Fast, effective bed bug treatment with guaranteed results',
    description: [
      'Eliminate bed bugs completely with our proven treatment methods. Bed bugs are difficult to eradicate—DIY solutions rarely work. Our professionals have the tools and expertise to eliminate infestations.',
      'We use a combination of heat treatment, chemical applications, and thorough inspection to ensure complete bed bug elimination. Multiple treatment methods available based on your situation.',
      'Preparation guides provided, flexible scheduling, and follow-up inspections included. We guarantee our bed bug treatments—if they return, we return for free.'
    ],
    icon: 'Bed',
    image: '/images/company/bed-bug-treatment-residential.webp',
    benefits: [
      'Heat & chemical treatments',
      'Detailed preparation guide',
      'Complete elimination guaranteed',
      'Follow-up inspections included',
      'Discreet service'
    ],
    href: '/bed-bug-extermination-miami',
    featured: false,
    emergency: true
  }
]

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id)
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug || service.id === slug)
}

export function getFeaturedServices(): Service[] {
  return services.filter(service => service.featured)
}

export function getEmergencyServices(): Service[] {
  return services.filter(service => service.emergency)
}
