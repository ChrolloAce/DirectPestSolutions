export interface Service {
  slug: string
  name: string
  icon: string
  heroImage: string
  gallery: string[]
  summary: string
  bullets: string[]
  ctaLabel: string
  description?: string
  longDescription?: string[]
}

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    name: '24/7 Emergency',
    icon: 'emergency',
    heroImage: '/images/emergency.png',
    gallery: ['/images/hero-plumber.jpeg', '/images/van.jpeg'],
    summary: 'Round-the-clock emergency plumbing services when you need us most.',
    bullets: [
      'Available 24 hours a day, 7 days a week',
      'Rapid response within 60 minutes',
      'No extra charge for nights and weekends',
      'All repairs guaranteed'
    ],
    ctaLabel: 'Call Emergency Hotline Now!',
    description: 'When plumbing disasters strike, we\'re here 24/7 to save the day.',
    longDescription: [
      'Plumbing emergencies don\'t wait for business hours, and neither do we. Our 24/7 emergency service ensures you\'re never left dealing with a crisis alone.',
      'From burst pipes to major leaks, overflowing toilets to complete drain backups, our emergency response team is equipped to handle any situation quickly and efficiently.',
      'We pride ourselves on our rapid response time and our ability to minimize damage to your property while providing lasting solutions.'
    ]
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    icon: 'drain',
    heroImage: '/images/drain-cleaning-new.png',
    gallery: ['/images/hero-plumber.jpeg', '/images/van.jpeg'],
    summary: 'Professional drain cleaning to keep your pipes flowing smoothly.',
    bullets: [
      'High-pressure hydro jetting',
      'Video camera inspections',
      'Removes all blockages and buildup',
      'Preventive maintenance available'
    ],
    ctaLabel: 'Schedule Drain Service',
    description: 'Keep your drains clear and your home healthy with our professional drain cleaning services.',
    longDescription: [
      'Clogged drains are more than just an inconvenience - they can lead to serious plumbing issues and health hazards if left untreated.',
      'Our professional drain cleaning service uses state-of-the-art equipment including hydro jetting and video inspection cameras to thoroughly clean your pipes and identify potential problems.',
      'Regular drain maintenance can prevent costly repairs and ensure your plumbing system operates efficiently for years to come.'
    ]
  },
  {
    slug: 'water-heater',
    name: 'Water Heater Service',
    icon: 'heater',
    heroImage: '/images/water-heater.png',
    gallery: ['/images/hero-plumber.jpeg', '/images/van.jpeg'],
    summary: 'Expert water heater repair, maintenance, and installation services.',
    bullets: [
      'Repair all makes and models',
      'Tank and tankless options',
      'Energy-efficient upgrades',
      'Same-day installation available'
    ],
    ctaLabel: 'Get Hot Water Today!',
    description: 'Never run out of hot water again with our comprehensive water heater services.',
    longDescription: [
      'A reliable water heater is essential for your daily comfort. Whether you need a repair, replacement, or upgrade to a more efficient model, we\'ve got you covered.',
      'We service all types of water heaters including traditional tank models, tankless systems, and hybrid heat pump water heaters.',
      'Our experts can help you choose the right size and type of water heater for your home, ensuring optimal performance and energy efficiency.'
    ]
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    icon: 'leak',
    heroImage: '/images/leak-detection.png',
    gallery: ['/images/hero-plumber.jpeg', '/images/van.jpeg'],
    summary: 'Advanced leak detection to find and fix hidden water leaks.',
    bullets: [
      'Non-invasive detection methods',
      'Thermal imaging technology',
      'Acoustic leak detection',
      'Prevent water damage and mold'
    ],
    ctaLabel: 'Find Hidden Leaks Now',
    description: 'Stop water waste and prevent damage with our advanced leak detection services.',
    longDescription: [
      'Hidden water leaks can cause thousands of dollars in damage before you even know they exist. Our advanced leak detection services find problems before they become disasters.',
      'Using cutting-edge technology including thermal imaging cameras, acoustic listening devices, and pressure testing, we can pinpoint leaks without destructive exploration.',
      'Early detection and repair of leaks can save you money on water bills, prevent structural damage, and avoid dangerous mold growth.'
    ]
  },
  {
    slug: 'bathroom-plumbing',
    name: 'Bathroom Plumbing',
    icon: 'bathroom',
    heroImage: '/images/bathroom.png',
    gallery: ['/images/hero-plumber.jpeg', '/images/van.jpeg'],
    summary: 'Complete bathroom plumbing services from repairs to renovations.',
    bullets: [
      'Toilet repair and replacement',
      'Shower and tub installation',
      'Faucet and fixture upgrades',
      'Complete bathroom remodels'
    ],
    ctaLabel: 'Upgrade Your Bathroom',
    description: 'Transform your bathroom with our expert plumbing services.',
    longDescription: [
      'Your bathroom should be a comfortable, functional space. Our comprehensive bathroom plumbing services cover everything from simple repairs to complete renovations.',
      'We handle all aspects of bathroom plumbing including toilet repairs and replacements, shower and bathtub installations, sink and faucet upgrades, and pipe relocations for remodels.',
      'Whether you\'re dealing with a running toilet, planning a bathroom upgrade, or need emergency repairs, our skilled plumbers deliver quality results.'
    ]
  },
  {
    slug: 'commercial-plumbing',
    name: 'Commercial Services',
    icon: 'building',
    heroImage: '/images/commercial.png',
    gallery: ['/images/van.jpeg', '/images/hero-plumber.jpeg'],
    summary: 'Reliable commercial plumbing for businesses throughout Miami.',
    bullets: [
      'Preventive maintenance programs',
      'Minimal disruption to operations',
      'Code compliance expertise',
      'Emergency response available'
    ],
    ctaLabel: 'Get Commercial Quote',
    description: 'Keep your business running smoothly with our commercial plumbing services.',
    longDescription: [
      'Your business can\'t afford plumbing problems. Our commercial services are designed to keep your operations running smoothly with minimal disruption.',
      'We work with restaurants, offices, retail stores, apartment complexes, and industrial facilities, providing both emergency repairs and preventive maintenance.',
      'Our commercial plumbers understand the unique needs of businesses and work efficiently to resolve issues while maintaining compliance with all local codes and regulations.'
    ]
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}