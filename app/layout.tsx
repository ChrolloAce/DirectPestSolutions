import type { Metadata } from 'next'
import './globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProofToasts } from '@/components/ui/ProofToasts'
import MobileAppBar from '@/components/layout/MobileAppBar'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Premium Car Detailing Miami – Luxury Auto Detailing Services | Mobile Service Available',
  description: 'Professional car detailing services in Miami & Miami-Dade County. Certified detailers specializing in luxury and exotic vehicles. Mobile service available. Call (305) 560-3087.',
  keywords: 'car detailing Miami, auto detailing Miami, luxury car detailing, ceramic coating Miami, paint correction Miami, PPF Miami, mobile detailing Miami, interior detailing, exterior detailing, exotic car detailing',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Premium Car Detailing Miami – Luxury Auto Detailing Services',
    description: 'Professional car detailing services in Miami. Certified detailers specializing in luxury vehicles. Mobile service available. Call (305) 560-3087.',
    type: 'website',
    locale: 'en_US',
    url: 'https://premiumautodetailingmiami.com',
    siteName: 'Premium Car Detailing Miami',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Car Detailing Miami – Luxury Auto Detailing Services',
    description: 'Professional car detailing services in Miami. Call (305) 560-3087.',
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
          <main className="min-h-screen pt-16 md:pt-[7.5rem] pb-16 md:pb-0">
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
              '@type': 'AutoRepair',
              name: 'Premium Car Detailing Miami',
              description: 'Professional luxury car detailing services in Miami and Miami-Dade County',
              telephone: '+1-305-560-3087',
              email: 'info@premiumautodetailingmiami.com',
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
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '08:00',
                  closes: '18:00'
                }
              ],
              priceRange: '$$$',
              image: '/images/imgi_35_AdobeStock_312924792_Editorial_Use_Only-scaled.jpg',
              url: 'https://premiumautodetailingmiami.com'
            })
          }}
        />
      </body>
    </html>
  )
}
