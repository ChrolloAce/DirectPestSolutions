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
    id: 'landscape-design',
    title: 'Landscape Design',
    shortDescription: 'Custom landscape design services for beautiful Miami outdoor spaces',
    description: [
      'Transform your Miami property with our professional landscape design services. Our certified landscape architects create stunning outdoor spaces that thrive in South Florida\'s climate.',
      'We design custom landscapes including native plant selections, irrigation planning, hardscaping elements, and sustainable solutions that enhance your property value.',
      'With transparent pricing and a satisfaction guarantee, trust our landscape experts to bring your outdoor vision to life quickly and professionally.'
    ],
    icon: 'Palette',
    image: '/images/1.jpg',
    benefits: [
      'Same-day consultations available',
      'Custom design solutions',
      'Transparent pricing',
      'Licensed & insured designers',
      '100% satisfaction guarantee'
    ],
    href: '/services/landscape-design-miami',
    featured: true,
    emergency: false
  },
  {
    id: 'lawn-maintenance',
    title: 'Lawn Maintenance',
    shortDescription: 'Regular lawn care services to keep your Miami landscape healthy year-round',
    description: [
      'Regular lawn maintenance is essential in Miami\'s climate to prevent disease and maintain lush, green landscapes. Our comprehensive care keeps your lawn thriving at peak health.',
      'Our maintenance service includes mowing, edging, fertilization, pest control, weed management, and seasonal treatments tailored to South Florida grass types.',
      'Join our maintenance plan for priority service, discounted treatments, and peace of mind knowing your lawn is always ready for Miami\'s weather.'
    ],
    icon: 'Shield',
    image: '/images/2.jpg',
    benefits: [
      'Prevent lawn diseases',
      'Maintain property value',
      'Extend lawn life',
      'Priority service',
      'Maintenance agreements available'
    ],
    href: '/services/lawn-maintenance-miami',
    featured: true
  },
  {
    id: 'irrigation-systems',
    title: 'Irrigation Systems',
    shortDescription: 'Professional irrigation installation with water-efficient systems',
    description: [
      'Upgrade to a new, water-efficient irrigation system and save up to 40% on water costs. Our irrigation experts help you choose the perfect system for your Miami landscape.',
      'We install all major brands including Rain Bird, Hunter, Toro, and Raindrip. Our certified installers ensure proper coverage, pressure, and code compliance.',
      'Take advantage of available water rebates and our flexible financing options. Professional installation backed by comprehensive warranties.'
    ],
    icon: 'Home',
    image: '/images/3.jpg',
    benefits: [
      'Water-efficient systems',
      'All major brands',
      'Financing available',
      'Water rebates & incentives',
      'Installation warranty'
    ],
    href: '/services/irrigation-systems-miami',
    featured: true
  },
  {
    id: 'commercial-landscaping',
    title: 'Commercial Landscaping',
    shortDescription: 'Complete landscaping solutions for Miami businesses',
    description: [
      'Enhance your Miami business appeal with our commercial landscaping services. We service offices, retail stores, restaurants, and industrial facilities.',
      'Our commercial services include design, installation, maintenance contracts, and emergency cleanup for all types of commercial properties.',
      'Maintain professional appearance with our preventive maintenance programs and rapid response for urgent landscaping needs.'
    ],
    icon: 'Building',
    image: '/images/4.jpg',
    benefits: [
      'All commercial properties',
      'Maintenance contracts',
      'Emergency cleanup service',
      'Minimal disruption',
      'Licensed & insured'
    ],
    href: '/commercial',
    featured: true
  },
  {
    id: 'tree-shrub-care',
    title: 'Tree & Shrub Care',
    shortDescription: 'Professional tree and shrub care services - pruning, trimming, and health maintenance',
    description: [
      'Specializing in comprehensive tree and shrub care for Miami properties. We provide complete pruning, trimming, health assessments, and disease treatment services.',
      'Our certified arborists have extensive experience with all South Florida tree species and shrub varieties, ensuring your landscape plants thrive in peak health.',
      'From small residential gardens to large commercial properties, we deliver reliable tree care solutions that keep your landscape beautiful and safe.'
    ],
    icon: 'Trees',
    image: '/images/tree-care-service.png',
    benefits: [
      'All tree species expertise',
      'Pruning and health care',
      'Disease prevention',
      'Emergency tree service',
      'Certified arborists'
    ],
    href: '/tree-shrub-care',
    featured: false
  },
  {
    id: 'emergency-cleanup',
    title: 'Emergency Cleanup Service',
    shortDescription: '24/7 emergency landscape cleanup when you need it most',
    description: [
      'Storm damage and landscape emergencies don\'t wait for business hours. Our emergency response team is available 24/7 for urgent cleanup throughout Miami-Dade County.',
      'We prioritize emergency calls and arrive quickly with fully-equipped trucks to handle storm cleanup, fallen trees, and urgent landscape repairs on the spot.',
      'Don\'t let landscape damage sit - call our landscape experts for immediate emergency cleanup service.'
    ],
    icon: 'AlertCircle',
    image: '/images/5.jpg',
    benefits: [
      '24/7 availability',
      'Fast response time',
      'No overtime charges',
      'Fully equipped trucks',
      'Immediate property protection'
    ],
    href: '/services/emergency-cleanup-miami',
    featured: true,
    emergency: true
  },
  {
    id: 'hardscaping',
    title: 'Hardscaping',
    shortDescription: 'Professional hardscaping installation for beautiful outdoor living',
    description: [
      'Proper hardscaping is crucial for functional outdoor spaces. Our professional hardscape installation ensures optimal design and durability throughout your Miami property.',
      'We design and install custom hardscape features using high-quality materials including pavers, retaining walls, walkways, and patios for maximum beauty and function.',
      'Trust our certified installers to create hardscaping that delivers lasting value and enhances your outdoor lifestyle.'
    ],
    icon: 'Mountain',
    image: '/images/6.jpg',
    benefits: [
      'Custom design solutions',
      'Durable installations',
      'Premium materials',
      'Professional installation',
      'Enhanced property value'
    ],
    href: '/hardscaping',
    featured: true
  },
  {
    id: 'sod-installation',
    title: 'Sod Installation',
    shortDescription: 'Professional sod installation for instant, beautiful lawns',
    description: [
      'Sod installation provides instant lawn transformation by establishing healthy, mature grass in your landscape immediately.',
      'Our sod systems are installed using premium grass varieties suited for Miami\'s climate, ensuring quick establishment and lasting beauty.',
      'Perfect for Miami\'s year-round growing season, professional sod installation creates lush lawns and enhances your property value.'
    ],
    icon: 'Grass',
    image: '/images/sod-installation.png',
    benefits: [
      'Instant lawn transformation',
      'Premium grass varieties',
      'Quick establishment',
      'Enhanced curb appeal',
      'Professional installation'
    ],
    href: '/sod-installation',
    featured: false
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