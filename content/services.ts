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
}

export const services: Service[] = [
  {
    id: 'pest-control',
    slug: 'pest-control-miami',
    title: 'General Pest Control',
    shortDescription: 'Comprehensive pest control services for your Miami home or business',
    description: [
      'Protect your property with our comprehensive pest control services in Miami. Our licensed exterminators provide effective treatments for all common household pests.',
      'We use Integrated Pest Management (IPM) approaches that combine prevention, monitoring, and treatment for long-lasting results. Safe for your family, pets, and the environment.',
      'With flexible service plans, satisfaction guarantees, and same-day emergency service available, you can trust Direct Pest Solutions for all your pest control needs.'
    ],
    icon: 'Shield',
    image: '/images/company/residential-pest-control-service.webp',
    benefits: [
      'Licensed & certified technicians',
      'Safe, eco-friendly treatments',
      'Flexible service plans',
      'Same-day emergency service',
      '100% satisfaction guarantee'
    ],
    href: '/pest-control-miami',
    featured: true,
    emergency: true
  },
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
    featured: true,
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
    featured: true,
    emergency: true
  },
  {
    id: 'mosquito-control',
    slug: 'mosquito-control-miami',
    title: 'Mosquito Control',
    shortDescription: 'Reduce mosquitoes and reclaim your outdoor space',
    description: [
      'Enjoy your Miami outdoor space without mosquitoes. Our mosquito control programs reduce mosquito populations by up to 90% using targeted treatments and prevention strategies.',
      'We treat breeding sites, apply barrier treatments to vegetation, and use larvicides to prevent mosquito development. Safe for your family, pets, and beneficial insects like bees.',
      'Monthly service plans keep mosquitoes under control year-round. Perfect for homes, businesses, outdoor events, and special occasions.'
    ],
    icon: 'Wind',
    image: '/images/company/mosquito-control-yard-treatment.webp',
    benefits: [
      'Up to 90% mosquito reduction',
      'Barrier & larvicide treatments',
      'Monthly service plans',
      'Safe for family & pets',
      'Special event treatments available'
    ],
    href: '/mosquito-control-miami',
    featured: true,
    emergency: false
  },
  {
    id: 'rodent-wildlife-control',
    slug: 'rodent-wildlife-control-miami',
    title: 'Rodent & Wildlife Control',
    shortDescription: 'Humane rodent and wildlife removal with exclusion services',
    description: [
      'Get rid of rats, mice, raccoons, and other wildlife safely and humanely. Our wildlife control specialists identify entry points, remove animals, and seal your property to prevent re-entry.',
      'We handle all types of rodents and wildlife common in Miami including rats, mice, squirrels, raccoons, opossums, and birds. Trapping, exclusion, and damage repair services available.',
      'Long-term solutions that address the root cause. We don\'t just remove the animals—we prevent them from coming back with professional exclusion and prevention strategies.'
    ],
    icon: 'Squirrel',
    image: '/images/company/rodent-control-specialist.webp',
    benefits: [
      'Humane removal methods',
      'Entry point identification',
      'Professional exclusion work',
      'Damage repair services',
      'Prevention strategies included'
    ],
    href: '/rodent-wildlife-control-miami',
    featured: true,
    emergency: true
  },
  {
    id: 'insect-control',
    slug: 'insect-control-miami',
    title: 'Ant, Roach & General Insect Control',
    shortDescription: 'Eliminate ants, cockroaches, spiders, and other common insects',
    description: [
      'Say goodbye to ants, cockroaches, spiders, and other unwanted insects. Our targeted treatments eliminate existing infestations and create barriers to prevent future invasions.',
      'We treat for all common South Florida insects including Argentine ants, carpenter ants, German cockroaches, American cockroaches, spiders, silverfish, earwigs, and more.',
      'Indoor and outdoor treatments available. Safe, effective products that work. Quarterly service plans keep your home insect-free year-round.'
    ],
    icon: 'Bug',
    image: '/images/company/insect-control-specialist.webp',
    benefits: [
      'Targets all common insects',
      'Indoor & outdoor treatments',
      'Quarterly service plans',
      'Safe for indoor use',
      'Fast-acting solutions'
    ],
    href: '/insect-control-miami',
    featured: true,
    emergency: false
  },
  {
    id: 'prevention-inspection',
    slug: 'prevention-inspection-miami',
    title: 'Pest Prevention & Inspection',
    shortDescription: 'Proactive pest prevention and comprehensive property inspections',
    description: [
      'Prevent pest problems before they start with our comprehensive inspection and prevention services. Our IPM approach focuses on eliminating conditions that attract pests.',
      'We perform detailed property inspections, identify vulnerabilities, seal entry points, and recommend modifications to reduce pest attraction. Detailed inspection reports provided.',
      'Seasonal maintenance plans available. Perfect for new homeowners, property managers, and anyone who wants to stay ahead of pest problems rather than react to them.'
    ],
    icon: 'Search',
    image: '/images/company/pest-prevention-service.webp',
    benefits: [
      'Comprehensive property inspection',
      'Detailed inspection reports',
      'IPM approach',
      'Entry point sealing',
      'Seasonal maintenance plans'
    ],
    href: '/prevention-inspection-miami',
    featured: false,
    emergency: false
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
