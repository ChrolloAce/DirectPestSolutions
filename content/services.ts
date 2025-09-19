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
    image: '/images/ac-repair-service.png',
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
    image: '/images/ac-installation-final.png',
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
    id: 'duct-installation',
    title: 'Air Duct Installation',
    shortDescription: 'Professional ductwork installation for optimal airflow',
    description: [
      'Proper ductwork is crucial for efficient HVAC operation. Our professional duct installation ensures optimal airflow and energy efficiency throughout your Miami home.',
      'We design and install custom ductwork systems using high-quality materials and proper sizing calculations for maximum performance.',
      'Trust our certified technicians to install ductwork that delivers consistent comfort and reduces energy costs.'
    ],
    icon: 'Wind',
    image: '/images/air-duct-installation.png',
    benefits: [
      'Optimal airflow design',
      'Energy efficient installation',
      'Custom ductwork solutions',
      'Professional installation',
      'Improved system performance'
    ],
    href: '/duct-installation',
    featured: true
  },
  {
    id: 'uv-installation',
    title: 'UV Installation',
    shortDescription: 'UV light systems for cleaner, healthier indoor air',
    description: [
      'UV light installation provides advanced air purification by eliminating bacteria, viruses, and mold spores in your HVAC system.',
      'Our UV light systems are installed directly in your air handler or ductwork, continuously purifying the air as it circulates through your home.',
      'Perfect for Miami\'s humid climate, UV lights prevent mold growth and improve indoor air quality for healthier living.'
    ],
    icon: 'Zap',
    image: '/images/uv-installation.png',
    benefits: [
      'Eliminates bacteria and viruses',
      'Prevents mold growth',
      'Improves air quality',
      'Reduces allergens',
      'Low maintenance solution'
    ],
    href: '/uv-installation',
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