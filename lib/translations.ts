export const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    emergency: 'Emergency',
    waterHeaters: 'Pest Control',
    maintenance: 'Prevention',
    faqs: 'FAQs',
    contact: 'Contact',
    leaveReview: 'Leave a Review',
    emergencyButton: 'Same-Day Service',
    
    // Hero Section
    heroTitle1: 'Direct Pest',
    heroTitle2: "Solutions",
    heroTitle3: 'Miami Pest Control',
    heroDescription: 'Licensed • Insured • Same-Day Service Available. Professional pest control for termites, bed bugs, rodents, mosquitoes & all pests.',
    heroTrust1: '5.0 from 500+ Miami homeowners',
    heroTrust2: 'Licensed & Insured',
    heroTrust3: 'Certified Exterminators',
    callButton: 'Call',
    getQuoteButton: 'Get Free Inspection',
    
    // Quote Form
    quoteTitle: 'Get Your Free Inspection',
    quoteSubtitle: "Answer a few questions—we'll text you a quote today.",
    fullName: 'Full Name',
    phone: 'Phone',
    serviceNeeded: 'Service Needed',
    address: 'Address (City/ZIP)',
    notes: 'Notes',
    requestEstimate: 'Request Estimate',
    sending: 'Sending…',
    thankYouMessage: 'Thanks! We got it—someone will reach out shortly.',
    errorMessage: 'Something went wrong. Please call us or try again.',
    
    // Services
    ourServices: 'Our Services',
    servicesSubtitle: 'Professional pest control solutions for Miami homes and businesses',
    viewAllServices: 'View All Services',
    scheduleService: 'Schedule Service',
    
    // Service Names
    emergencyService: 'Emergency Pest Control',
    pestControl: 'General Pest Control',
    termiteControl: 'Termite Control',
    bedBugExtermination: 'Bed Bug Extermination',
    mosquitoControl: 'Mosquito Control',
    rodentControl: 'Rodent & Wildlife Control',
    insectControl: 'Ant & Roach Control',
    prevention: 'Prevention & Inspection',
    
    // Why Choose Us
    whyChooseUs: 'Why Choose Direct Pest Solutions?',
    whyChooseSubtitle: 'When it comes to protecting your home from pests, choose Miami\'s trusted professionals',
    
    // Footer
    footerTagline: 'Miami\'s Trusted Pest Control Company',
    footerDescription: 'Professional pest control services for homes and businesses throughout Miami-Dade County.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    
    // Call to Action
    ctaTitle: 'Get Your Free Pest Inspection Today',
    ctaDescription: 'Professional service, same-day availability, 100% satisfaction guaranteed',
    
    // Trust Badges
    licensed: 'Licensed & Insured',
    satisfaction: '100% Satisfaction',
    sameDay: 'Same-Day Service',
    experienced: 'Experienced Team',
  },
  es: {
    // Navigation
    home: 'Inicio',
    services: 'Servicios',
    emergency: 'Emergencia',
    waterHeaters: 'Control de Plagas',
    maintenance: 'Prevención',
    faqs: 'Preguntas',
    contact: 'Contacto',
    leaveReview: 'Dejar Reseña',
    emergencyButton: 'Servicio el Mismo Día',
    
    // Hero Section
    heroTitle1: 'Direct Pest',
    heroTitle2: "Solutions",
    heroTitle3: 'Control de Plagas en Miami',
    heroDescription: 'Licenciado • Asegurado • Servicio el Mismo Día. Control profesional de plagas para termitas, chinches, roedores, mosquitos y todas las plagas.',
    heroTrust1: '5.0 de más de 500 propietarios en Miami',
    heroTrust2: 'Licenciado y Asegurado',
    heroTrust3: 'Exterminadores Certificados',
    callButton: 'Llamar',
    getQuoteButton: 'Inspección Gratuita',
    
    // Quote Form
    quoteTitle: 'Obtenga Su Inspección Gratuita',
    quoteSubtitle: "Responda algunas preguntas—le enviaremos un presupuesto hoy.",
    fullName: 'Nombre Completo',
    phone: 'Teléfono',
    serviceNeeded: 'Servicio Necesario',
    address: 'Dirección (Ciudad/Código Postal)',
    notes: 'Notas',
    requestEstimate: 'Solicitar Presupuesto',
    sending: 'Enviando…',
    thankYouMessage: '¡Gracias! Lo recibimos—alguien se comunicará pronto.',
    errorMessage: 'Algo salió mal. Por favor llámenos o intente de nuevo.',
    
    // Services
    ourServices: 'Nuestros Servicios',
    servicesSubtitle: 'Soluciones profesionales de control de plagas para hogares y negocios en Miami',
    viewAllServices: 'Ver Todos los Servicios',
    scheduleService: 'Programar Servicio',
    
    // Service Names
    emergencyService: 'Control de Plagas de Emergencia',
    pestControl: 'Control General de Plagas',
    termiteControl: 'Control de Termitas',
    bedBugExtermination: 'Exterminación de Chinches',
    mosquitoControl: 'Control de Mosquitos',
    rodentControl: 'Control de Roedores y Vida Silvestre',
    insectControl: 'Control de Hormigas y Cucarachas',
    prevention: 'Prevención e Inspección',
    
    // Why Choose Us
    whyChooseUs: '¿Por Qué Elegir Direct Pest Solutions?',
    whyChooseSubtitle: 'Cuando se trata de proteger su hogar de las plagas, elija a los profesionales confiables de Miami',
    
    // Footer
    footerTagline: 'Empresa de Control de Plagas Confiable de Miami',
    footerDescription: 'Servicios profesionales de control de plagas para hogares y negocios en todo el condado de Miami-Dade.',
    quickLinks: 'Enlaces Rápidos',
    contactUs: 'Contáctenos',
    followUs: 'Síguenos',
    allRightsReserved: 'Todos los derechos reservados.',
    
    // Call to Action
    ctaTitle: 'Obtenga Su Inspección Gratuita de Plagas Hoy',
    ctaDescription: 'Servicio profesional, disponibilidad el mismo día, satisfacción 100% garantizada',
    
    // Trust Badges
    licensed: 'Licenciado y Asegurado',
    satisfaction: '100% Satisfacción',
    sameDay: 'Servicio el Mismo Día',
    experienced: 'Equipo Experimentado',
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || translations.en[key]
}
