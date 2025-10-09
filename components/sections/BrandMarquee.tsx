'use client'

import Image from 'next/image'

const brands = [
  { name: 'Bentley', logo: '/images/imgi_42_bentley-logo.png' },
  { name: 'McLaren', logo: '/images/imgi_43_mclaren-logo.png' },
  { name: 'GMC', logo: '/images/imgi_44_gmc-logo.png' },
  { name: 'Fiat', logo: '/images/imgi_45_fiat-logo.png' },
  { name: 'Lamborghini', logo: '/images/imgi_46_lamborghini-logo.png' },
  { name: 'Mini', logo: '/images/imgi_47_mini-logo.png' },
  { name: 'Mercedes-Benz', logo: '/images/imgi_48_mercedes-benz-logo.png' },
  { name: 'BMW', logo: '/images/imgi_49_bmw-logo.png' },
]

export function BrandMarquee() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading uppercase text-3xl sm:text-4xl text-brand-black">
            Trusted by <span className="text-brand-green">Luxury Car Owners</span>
          </h2>
          <p className="mt-3 text-lg text-brand-black/70">
            We detail the finest vehicles in Miami
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          {/* Marquee container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ width: '150px', height: '80px' }}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee" aria-hidden="true">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-duplicate-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ width: '150px', height: '80px' }}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

