import type { Metadata } from 'next'
import './globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProofToasts } from '@/components/ui/ProofToasts'
import MobileAppBar from '@/components/layout/MobileAppBar'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Hitts Top Quality Tree And Lawn LLC – Professional Tree & Lawn Services | Miami',
  description: 'Professional tree and lawn services in Miami & Miami-Dade County. Licensed & insured tree and lawn care experts. Call (305) 560-3087 for same-day service.',
  keywords: 'landscape design Miami, landscaping Miami, lawn care Miami, landscape maintenance Miami, irrigation installation Miami, hardscaping Miami, tree care Miami, emergency cleanup Miami, commercial landscaping Miami, residential landscaping Miami',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Hitts Top Quality Tree And Lawn LLC – Professional Tree & Lawn Services',
    description: 'Professional tree and lawn services in Miami. Licensed & insured tree and lawn care experts. Call (305) 560-3087.',
    type: 'website',
    locale: 'en_US',
    url: 'https://greenscapemiami.com',
    siteName: 'Hitts Top Quality Tree And Lawn LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hitts Top Quality Tree And Lawn LLC – Professional Tree & Lawn Services',
    description: 'Professional tree and lawn services in Miami. Call (305) 560-3087.',
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
              '@type': 'LandscapingBusiness',
              name: 'Hitts Top Quality Tree And Lawn LLC',
              description: 'Professional tree and lawn care services in Miami and Miami-Dade County',
              telephone: '+1-305-560-3087',
              email: 'info@greenscapemiami.com',
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
              image: '/images/GreenScapeLogo.png',
              url: 'https://greenscapemiami.com'
            })
          }}
        />
      </body>
    </html>
  )
}
