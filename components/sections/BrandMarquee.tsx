'use client'

import Image from 'next/image'

const pests = [
  { name: 'Termites', icon: '/images/Insects/termite.png', description: 'Subterranean & Drywood' },
  { name: 'Bed Bugs', icon: '/images/Insects/bed-bug.png', description: 'Heat & Chemical Treatment' },
  { name: 'Mosquitoes', icon: '/images/Insects/mosquito.png', description: 'Yard & Perimeter Control' },
  { name: 'Rodents', icon: '/images/Insects/mouse.png', description: 'Rats, Mice & Wildlife' },
  { name: 'Cockroaches', icon: '/images/Insects/cockroach.png', description: 'German & American Roaches' },
  { name: 'Ants', icon: '/images/Insects/ant.png', description: 'Fire Ants & Carpenter Ants' },
  { name: 'Spiders', icon: '/images/Insects/spider.png', description: 'Black Widows & Brown Recluse' },
  { name: 'Beetles', icon: '/images/Insects/beetle.png', description: 'Wood-Boring Beetles' },
  { name: 'Fleas', icon: '/images/Insects/flea.png', description: 'Pet & Yard Flea Control' },
  { name: 'Flies', icon: '/images/Insects/fly.png', description: 'House Flies & Fruit Flies' },
  { name: 'Crickets', icon: '/images/Insects/cricket.png', description: 'Mole Crickets & House Crickets' },
  { name: 'Centipedes', icon: '/images/Insects/centipede.png', description: 'House Centipedes & Millipedes' },
]

export function BrandMarquee() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading uppercase text-3xl sm:text-4xl text-brand-black">
            Common Pests We <span className="text-brand-red">Control in Miami</span>
          </h2>
          <p className="mt-3 text-lg text-brand-black/70">
            Expert extermination for all pest problems in Miami-Dade County
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          {/* Marquee container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...pests, ...pests].map((pest, index) => (
                <div
                  key={`${pest.name}-${index}`}
                  className="flex-shrink-0 mx-6 group"
                  style={{ width: '180px' }}
                >
                  <div className="flex flex-col items-center justify-center p-6 hover:bg-white rounded-lg transition-all duration-300 relative">
                    <div className="relative w-24 h-24 mb-3">
                      <Image
                        src={pest.icon}
                        alt={`${pest.name} pest control services in Miami - Direct Pest Solutions specializes in ${pest.name.toLowerCase()} extermination`}
                        fill
                        className="object-contain transition-all duration-300 group-hover:grayscale group-hover:opacity-40"
                      />
                      {/* Cancel/Close icon on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg 
                          className="w-8 h-8 text-brand-red" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-bold text-base text-brand-black text-center">{pest.name}</h3>
                    <p className="text-xs text-brand-black/60 text-center mt-1">{pest.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee" aria-hidden="true">
              {[...pests, ...pests].map((pest, index) => (
                <div
                  key={`${pest.name}-duplicate-${index}`}
                  className="flex-shrink-0 mx-6 group"
                  style={{ width: '180px' }}
                >
                  <div className="flex flex-col items-center justify-center p-6 hover:bg-white rounded-lg transition-all duration-300 relative">
                    <div className="relative w-24 h-24 mb-3">
                      <Image
                        src={pest.icon}
                        alt={`${pest.name} pest control services in Miami - Direct Pest Solutions specializes in ${pest.name.toLowerCase()} extermination`}
                        fill
                        className="object-contain transition-all duration-300 group-hover:grayscale group-hover:opacity-40"
                      />
                      {/* Cancel/Close icon on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg 
                          className="w-8 h-8 text-brand-red" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-bold text-base text-brand-black text-center">{pest.name}</h3>
                    <p className="text-xs text-brand-black/60 text-center mt-1">{pest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

