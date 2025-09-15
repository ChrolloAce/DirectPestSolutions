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
    id: 'ac-repair',
    title: 'AC Repair',
    shortDescription: 'Fast, reliable AC repair service for all makes and models in Miami',
    description: [
      'When your AC breaks down in Miami\'s heat, you need immediate professional help. Our certified technicians provide same-day AC repair service throughout Miami-Dade County.',
      'We diagnose and fix all AC problems including refrigerant leaks, compressor failures, frozen coils, electrical issues, and thermostat malfunctions.',
      'With transparent pricing and a satisfaction guarantee, trust CBE Air Services to restore your comfort quickly and affordably.'
    ],
    icon: 'Wrench',
    image: '/images/ac-repair-new.png',
    benefits: [
      'Same-day service available',
      'All makes and models',
      'Transparent pricing',
      'Licensed & insured technicians',
      '100% satisfaction guarantee'
    ],
    href: '/services/ac-repair-miami',
    featured: true,
    emergency: true
  },
  {
    id: 'ac-maintenance',
    title: 'AC Maintenance',
    shortDescription: 'Preventive maintenance to keep your AC running efficiently year-round',
    description: [
      'Regular AC maintenance is essential in Miami\'s climate to prevent breakdowns and extend system life. Our comprehensive tune-ups keep your AC running at peak efficiency.',
      'Our maintenance service includes cleaning coils, checking refrigerant levels, inspecting electrical connections, calibrating thermostats, and replacing filters.',
      'Join our maintenance plan for priority service, discounted repairs, and peace of mind knowing your AC is always ready for Miami\'s heat.'
    ],
    icon: 'Shield',
    image: '/images/ac-maintenance-tech.png',
    benefits: [
      'Prevent costly breakdowns',
      'Lower energy bills',
      'Extend equipment life',
      'Priority service',
      'Maintenance agreements available'
    ],
    href: '/services/ac-maintenance-miami',
    featured: true
  },
  {
    id: 'ac-installation',
    title: 'AC Installation',
    shortDescription: 'Professional AC installation with energy-efficient systems',
    description: [
      'Upgrade to a new, energy-efficient AC system and save up to 40% on cooling costs. Our HVAC experts help you choose the perfect system for your Miami home.',
      'We install all major brands including Carrier, Trane, Lennox, and Rheem. Our certified installers ensure proper sizing and code compliance.',
      'Take advantage of available rebates and our flexible financing options. Professional installation backed by comprehensive warranties.'
    ],
    icon: 'Home',
    image: '/images/ac-installation-updated.png',
    benefits: [
      'Energy-efficient systems',
      'All major brands',
      'Financing available',
      'Rebates & incentives',
      'Installation warranty'
    ],
    href: '/services/ac-installation-miami',
    featured: true
  },
  {
    id: 'heating-installation',
    title: 'Heating System Installation',
    shortDescription: 'Heat pump and heating system installation for Miami homes',
    description: [
      'While Miami is known for heat, winter nights can get chilly. We install efficient heating systems including heat pumps that provide both heating and cooling.',
      'Heat pumps are ideal for Miami\'s climate, offering energy-efficient heating in winter and cooling in summer from a single system.',
      'Our experts help you choose between heat pumps, electric heaters, and other heating solutions based on your needs and budget.'
    ],
    icon: 'Thermometer',
    image: '/images/commercial.png',
    benefits: [
      'Heat pump specialists',
      'Energy-efficient options',
      'Dual heating/cooling systems',
      'Professional installation',
      'Warranty included'
    ],
    href: '/services/heating-installation-miami'
  },
  {
    id: 'coil-cleaning',
    title: 'Coil Cleaning Service',
    shortDescription: 'Professional evaporator and condenser coil cleaning',
    description: [
      'Dirty coils reduce AC efficiency by up to 30% and increase energy bills. Our professional coil cleaning service restores your system\'s performance.',
      'We thoroughly clean both evaporator and condenser coils, removing dirt, debris, and microbial growth that impedes heat transfer.',
      'Regular coil cleaning improves air quality, reduces energy consumption, and prevents premature system failure.'
    ],
    icon: 'Sparkles',
    image: '/images/drain-cleaning.png',
    benefits: [
      'Improved efficiency',
      'Lower energy bills',
      'Better air quality',
      'Prevent breakdowns',
      'Extended equipment life'
    ],
    href: '/services/coil-cleaning-miami'
  },
  {
    id: 'commercial-hvac',
    title: 'Commercial HVAC',
    shortDescription: 'Complete HVAC solutions for Miami businesses',
    description: [
      'Keep your Miami business comfortable with our commercial HVAC services. We service offices, retail stores, restaurants, and industrial facilities.',
      'Our commercial services include installation, repair, maintenance contracts, and emergency service for all types of commercial HVAC equipment.',
      'Minimize downtime with our preventive maintenance programs and 24/7 emergency response for critical systems.'
    ],
    icon: 'Building',
    image: '/images/commercial-hvac-tech.png',
    benefits: [
      'All commercial systems',
      'Maintenance contracts',
      '24/7 emergency service',
      'Minimal downtime',
      'Licensed & insured'
    ],
    href: '/commercial',
    featured: true
  },
  {
    id: 'emergency-service',
    title: 'Emergency AC Service',
    shortDescription: '24/7 emergency AC repair when you need it most',
    description: [
      'AC emergencies don\'t wait for business hours. Our emergency response team is available 24/7 for urgent AC repairs throughout Miami-Dade County.',
      'We prioritize emergency calls and arrive quickly with fully-stocked trucks to handle most repairs on the spot.',
      'Don\'t suffer in the heat - call CBE Air Services for immediate emergency AC service.'
    ],
    icon: 'AlertCircle',
    image: '/images/emergency-ac-new.png',
    benefits: [
      '24/7 availability',
      'Fast response time',
      'No overtime charges',
      'Fully stocked trucks',
      'Immediate relief'
    ],
    href: '/services/weekend-service-miami',
    featured: true,
    emergency: true
  },
  {
    id: 'duct-cleaning',
    title: 'Air Duct Cleaning',
    shortDescription: 'Professional duct cleaning for better air quality',
    description: [
      'Clean air ducts are essential for healthy indoor air quality. Our professional duct cleaning removes dust, allergens, and contaminants from your HVAC system.',
      'We use advanced equipment to thoroughly clean your ductwork, improving airflow and reducing allergens that trigger respiratory issues.',
      'Breathe easier with our comprehensive duct cleaning service that improves both air quality and system efficiency.'
    ],
    icon: 'Wind',
    image: '/images/air-duct-cleaning-new.png',
    benefits: [
      'Improved air quality',
      'Reduced allergens',
      'Better airflow',
      'Energy savings',
      'Eliminate odors'
    ],
    href: '/services/regular-service-miami',
    featured: true
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