import type { Metadata } from 'next'
import './globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProofToasts } from '@/components/ui/ProofToasts'
import MobileAppBar from '@/components/layout/MobileAppBar'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'CBE Air Services – Miami AC & Heating | AC Repair & Installation',
  description: 'Professional AC repair, installation & maintenance in Miami & Miami-Dade County. Licensed & insured HVAC experts. Call (305) 560-3087 for same-day service.',
  keywords: 'air conditioning repair Miami, AC repair Miami, AC service Miami, AC maintenance Miami, AC installation Miami, heating system installation Miami, HVAC Miami, emergency AC repair Miami, commercial HVAC Miami, residential AC Miami',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'CBE Air Services – Miami AC & Heating',
    description: 'Professional AC repair, installation & maintenance in Miami. Licensed & insured HVAC experts. Call (305) 560-3087.',
    type: 'website',
    locale: 'en_US',
    url: 'https://cbeairservices.com',
    siteName: 'CBE Air Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CBE Air Services – Miami AC & Heating',
    description: 'Professional AC repair, installation & maintenance in Miami. Call (305) 560-3087.',
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
              '@type': 'HVACBusiness',
              name: 'CBE Air Services',
              description: 'Professional AC repair, installation and maintenance services in Miami and Miami-Dade County',
              telephone: '+1-305-560-3087',
              email: 'cbeairservices@gmail.com',
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
                  opens: '09:00',
                  closes: '18:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '00:00',
                  closes: '00:00'
                }
              ],
              priceRange: '$$',
              image: '/images/ACLOGO.png',
              url: 'https://cbeairservices.com'
            })
          }}
        />
      </body>
    </html>
  )
}
