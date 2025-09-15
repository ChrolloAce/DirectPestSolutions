import type { Metadata } from 'next'
import './globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProofToasts } from '@/components/ui/ProofToasts'
import MobileAppBar from '@/components/layout/MobileAppBar'
import LanguageToggle from '@/components/layout/LanguageToggle'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: '24/7 Plumber | Professional Emergency Plumbing Services Miami',
  description: 'Professional 24/7 emergency plumbing services in Miami. Licensed master plumbers for repairs, installations, and maintenance. Call (786) 296-7304',
  keywords: '24/7 plumber, emergency plumbing, Miami plumber, plumbing repair, leak detection, drain cleaning, water heater, sewer line, Florida',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: '24/7 Plumber | Miami',
    description: 'Professional 24/7 emergency plumbing services in Miami. Licensed master plumbers ready to help!',
    type: 'website',
    locale: 'en_US',
    url: 'https://24-7-plomero.vercel.app',
    siteName: '24/7 Plumber',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Plumber | Miami',
    description: 'Professional 24/7 emergency plumbing services in Miami. Licensed master plumbers ready to help!',
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
          <LanguageToggle />
          <ProofToasts />
        </LanguageProvider>
        
        {/* Schema.org LocalBusiness markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Plumber',
              name: '24/7 Plumber',
              description: 'Professional 24/7 emergency plumbing services in Miami and surrounding areas',
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
              url: 'https://24-7-plomero.vercel.app'
            })
          }}
        />
      </body>
    </html>
  )
}
