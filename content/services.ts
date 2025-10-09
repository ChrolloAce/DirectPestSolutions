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
    id: 'exterior-detailing',
    title: 'Exterior Detailing',
    shortDescription: 'Premium exterior detailing to restore your vehicle\'s showroom shine',
    description: [
      'Transform your vehicle\'s exterior with our premium detailing services. Our expert detailers use professional-grade products and techniques to restore your car\'s original luster.',
      'We perform comprehensive hand washing, clay bar treatment, paint correction, polishing, and protective wax or sealant application for lasting protection.',
      'With transparent pricing and a satisfaction guarantee, trust our detailing experts to bring your vehicle back to showroom condition.'
    ],
    icon: 'Sparkles',
    image: '/images/imgi_23_car-body-polishing-process-at-the-detailing-workshop-1024x682.jpg',
    benefits: [
      'Hand wash & clay bar treatment',
      'Paint correction & polishing',
      'Protective wax application',
      'Wheel & tire detailing',
      '100% satisfaction guarantee'
    ],
    href: '/services/exterior-detailing-miami',
    featured: true,
    emergency: false
  },
  {
    id: 'interior-detailing',
    title: 'Interior Detailing',
    shortDescription: 'Deep cleaning and restoration of your vehicle\'s interior',
    description: [
      'Experience a like-new interior with our comprehensive interior detailing services. We clean, condition, and protect every surface inside your luxury vehicle.',
      'Our service includes vacuum, steam cleaning, leather conditioning, fabric protection, dashboard restoration, and odor elimination for a fresh, pristine interior.',
      'Join our maintenance plan for priority service, discounted treatments, and peace of mind knowing your vehicle interior is always immaculate.'
    ],
    icon: 'Shield',
    image: '/images/imgi_31_cropped-image-of-businessman-with-luxury-watch-closing-door-while-sitting-in-car.jpg',
    benefits: [
      'Deep vacuum & steam cleaning',
      'Leather conditioning & protection',
      'Fabric stain removal',
      'Dashboard & console restoration',
      'Odor elimination'
    ],
    href: '/services/interior-detailing-miami',
    featured: true
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    shortDescription: 'Professional ceramic coating for long-lasting paint protection',
    description: [
      'Protect your investment with our professional ceramic coating services. This advanced protection provides years of durable, hydrophobic protection for your vehicle\'s paint.',
      'We apply premium ceramic coatings that create a permanent bond with your paint, offering superior protection against UV rays, chemicals, and environmental contaminants.',
      'Available with multi-year warranties and professional installation that ensures flawless results and maximum durability.'
    ],
    icon: 'Shield',
    image: '/images/imgi_24_AdobeStock_198465715-1024x683.jpg',
    benefits: [
      'Multi-year protection',
      'Hydrophobic properties',
      'UV & chemical resistance',
      'Enhanced gloss & depth',
      'Warranty included'
    ],
    href: '/services/ceramic-coating-miami',
    featured: true
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction',
    shortDescription: 'Expert paint correction to remove swirls, scratches, and imperfections',
    description: [
      'Restore your vehicle\'s paint to perfection with our multi-stage paint correction services. We remove swirls, scratches, oxidation, and paint defects.',
      'Our certified paint correction specialists use precision tools and techniques to safely remove paint imperfections and restore factory finish or better.',
      'Perfect for luxury and exotic vehicles, our paint correction service delivers mirror-like results that enhance your vehicle\'s value.'
    ],
    icon: 'Wand',
    image: '/images/imgi_25_AdobeStock_377385492-1024x682.jpg',
    benefits: [
      'Multi-stage correction',
      'Swirl & scratch removal',
      'Paint depth measurement',
      'Professional-grade equipment',
      'Guaranteed results'
    ],
    href: '/services/paint-correction-miami',
    featured: true
  },
  {
    id: 'ppf-installation',
    title: 'Paint Protection Film',
    shortDescription: 'Clear paint protection film installation for ultimate paint defense',
    description: [
      'Protect your luxury vehicle with invisible paint protection film (PPF). This self-healing film guards against rock chips, scratches, and road debris.',
      'We install premium PPF brands with precision cutting and expert application, ensuring seamless protection that\'s virtually invisible.',
      'Available in full front-end coverage or complete vehicle wraps with manufacturer warranties for long-term peace of mind.'
    ],
    icon: 'Shield',
    image: '/images/imgi_26_AdobeStock_791616590-1024x574.jpg',
    benefits: [
      'Self-healing technology',
      'Invisible protection',
      'Custom fit installation',
      'Manufacturer warranty',
      'Preserves resale value'
    ],
    href: '/services/ppf-installation-miami',
    featured: true
  },
  {
    id: 'engine-detailing',
    title: 'Engine Bay Detailing',
    shortDescription: 'Professional engine bay cleaning and detailing services',
    description: [
      'Complete engine bay detailing that makes your engine compartment look as good as the exterior. Safe cleaning methods that protect sensitive components.',
      'We degrease, clean, and dress all engine bay components including hoses, plastic covers, and metal surfaces for a factory-fresh appearance.',
      'From daily drivers to show cars, we deliver professional engine bay detailing that impresses and helps maintain resale value.'
    ],
    icon: 'Wrench',
    image: '/images/imgi_27_AdobeStock_462320361-1024x683.jpg',
    benefits: [
      'Safe degreasing methods',
      'Component protection',
      'Detailed hand cleaning',
      'Dressing & protection',
      'Show-quality results'
    ],
    href: '/services/engine-detailing-miami',
    featured: false
  },
  {
    id: 'headlight-restoration',
    title: 'Headlight Restoration',
    shortDescription: 'Restore clarity and brightness to oxidized headlights',
    description: [
      'Restore hazy, yellowed headlights to like-new clarity. Our professional restoration process removes oxidation and protects against future UV damage.',
      'We use multi-stage wet sanding and polishing followed by UV-protective coating to ensure long-lasting clarity and improved nighttime visibility.',
      'Affordable alternative to headlight replacement that improves appearance, safety, and resale value.'
    ],
    icon: 'Sun',
    image: '/images/imgi_28_AdobeStock_781952791-1024x574.jpg',
    benefits: [
      'Improved visibility',
      'UV protection coating',
      'Professional wet sanding',
      'Long-lasting results',
      'Cost-effective solution'
    ],
    href: '/services/headlight-restoration-miami',
    featured: false
  },
  {
    id: 'leather-conditioning',
    title: 'Leather Conditioning',
    shortDescription: 'Professional leather care to maintain suppleness and prevent cracking',
    description: [
      'Preserve your luxury vehicle\'s leather interior with professional cleaning and conditioning. Our treatments restore moisture and protect against cracking and fading.',
      'We use pH-balanced cleaners and premium conditioners specifically formulated for automotive leather, ensuring proper care without damage.',
      'Regular leather maintenance extends the life of your interior and maintains that luxurious feel and appearance.'
    ],
    icon: 'Armchair',
    image: '/images/imgi_33_car-dashboard-modern-luxury-interior-steering-wheel.jpg',
    benefits: [
      'pH-balanced cleaners',
      'Premium conditioners',
      'Prevents cracking',
      'UV protection',
      'Maintains suppleness'
    ],
    href: '/services/leather-conditioning-miami',
    featured: false
  },
  {
    id: 'full-detail',
    title: 'Complete Detail Package',
    shortDescription: 'Comprehensive interior and exterior detailing for total transformation',
    description: [
      'Our complete detail package combines all our premium services for the ultimate vehicle transformation. Inside and out, we restore your car to showroom condition.',
      'Includes exterior wash, clay bar, paint correction, wax, full interior deep clean, leather conditioning, engine bay detail, and protective treatments.',
      'Perfect for luxury and exotic vehicles, special occasions, or when your car deserves the absolute best care available in Miami.'
    ],
    icon: 'Star',
    image: '/images/imgi_35_AdobeStock_312924792_Editorial_Use_Only-scaled.jpg',
    benefits: [
      'Complete interior & exterior',
      'Paint correction included',
      'Engine bay detailing',
      'All protective treatments',
      'Premium service package'
    ],
    href: '/services/full-detail-miami',
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
