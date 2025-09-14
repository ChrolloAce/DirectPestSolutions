import type { Metadata } from 'next'
import './globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProofToasts } from '@/components/ui/ProofToasts'
import MobileAppBar from '@/components/layout/MobileAppBar'
import LanguageToggle from '@/components/layout/LanguageToggle'

export const metadata: Metadata = {
  title: 'CBE Air Services | Professional Air Conditioning & Heating Services Miami',
  description: 'Professional air conditioning and heating services in Miami. Licensed HVAC technicians for AC repair, installation, maintenance, and heating systems. Call (305) 560-3087',
  keywords: 'air conditioning, AC repair, HVAC, Miami, heating system, AC installation, AC maintenance, emergency AC repair, Florida',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'CBE Air Services | Miami',
    description: 'Professional air conditioning and heating services in Miami. Licensed HVAC technicians ready to help!',
    type: 'website',
    locale: 'en_US',
    url: 'https://cbeairservices.com',
    siteName: 'CBE Air Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CBE Air Services | Miami',
    description: 'Professional air conditioning and heating services in Miami. Licensed HVAC technicians ready to help!',
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
        <TopBar />
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-[7.5rem] pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileAppBar />
        <LanguageToggle />
        <ProofToasts />
        
        {/* Schema.org LocalBusiness markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HVACBusiness',
              name: 'CBE Air Services',
              description: 'Professional air conditioning and heating services in Miami and surrounding areas',
              telephone: '786-296-7304',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '201 180th Dr',
                addressLocality: 'Sunny Isles Beach',
                addressRegion: 'FL',
                postalCode: '33160',
                addressCountry: 'US'
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '18:00'
                }
              ],
              priceRange: '$$',
              image: '/images/logo-247.png',
              url: 'https://cbeairservices.com'
            })
          }}
        />
      </body>
    </html>
  )
}
