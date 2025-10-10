import type { Metadata } from 'next'
import './globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProofToasts } from '@/components/ui/ProofToasts'
import { FloatingPhone } from '@/components/FloatingPhone'
import MobileAppBar from '@/components/layout/MobileAppBar'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://directpestsolutions.com'),
  title: 'Direct Pest Solutions Miami – Professional Pest Control Services | Licensed & Insured',
  description: 'Professional pest control services in Miami & Miami-Dade County. Licensed exterminators specializing in termites, bed bugs, rodents, mosquitoes & more. Same-day service available. Call (305) 560-3087.',
  keywords: 'pest control Miami, exterminator Miami, termite control Miami, bed bug extermination Miami, mosquito control Miami, rodent control Miami, ant control Miami, cockroach control Miami, wildlife removal Miami, pest inspection Miami',
  authors: [{ name: 'Direct Pest Solutions' }],
  creator: 'Direct Pest Solutions',
  publisher: 'Direct Pest Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Direct Pest Solutions Miami – Professional Pest Control Services',
    description: 'Licensed pest control services in Miami. Specializing in termites, bed bugs, rodents, and all pest problems. Same-day service available. Call (305) 560-3087.',
    type: 'website',
    locale: 'en_US',
    url: 'https://directpestsolutions.com',
    siteName: 'Direct Pest Solutions Miami',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direct Pest Solutions Miami – Professional Pest Control Services',
    description: 'Licensed pest control services in Miami. Call (305) 560-3087.',
  },
  alternates: {
    canonical: 'https://directpestsolutions.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        <LanguageProvider>
          <TopBar />
          <Navbar />
          <FloatingPhone />
          <main className="min-h-screen pt-16 md:pt-0 pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
          <MobileAppBar />
          <ProofToasts />
        </LanguageProvider>
        
        {/* Schema.org LocalBusiness markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'PestControlService',
              name: 'Direct Pest Solutions Miami',
              description: 'Professional pest control and extermination services in Miami and Miami-Dade County',
              telephone: '+1-305-560-3087',
              email: 'info@directpestsolutions.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '201 180th Dr',
                addressLocality: 'Sunny Isles Beach',
                addressRegion: 'FL',
                postalCode: '33160',
                addressCountry: 'US'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '25.9429',
                longitude: '-80.1213'
              },
              areaServed: [
                'Miami',
                'Miami-Dade County',
                'Sunny Isles Beach',
                'Aventura',
                'North Miami Beach',
                'Miami Beach',
                'North Miami',
                'Bal Harbour',
                'Surfside',
                'Hialeah',
                'Doral',
                'Wynwood',
                'Brickell',
                'Little Havana',
                'Coral Gables',
                'Kendall',
                'Homestead'
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '07:00',
                  closes: '19:00'
                }
              ],
              priceRange: '$$',
              image: '/images/direct-pest-solutions-logo.png',
              url: 'https://directpestsolutions.com',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Pest Control Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Termite Control',
                      description: 'Professional termite inspection and treatment services'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bed Bug Extermination',
                      description: 'Complete bed bug elimination with guaranteed results'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Mosquito Control',
                      description: 'Mosquito reduction and prevention services'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Rodent Control',
                      description: 'Rodent and wildlife removal services'
                    }
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  )
}
