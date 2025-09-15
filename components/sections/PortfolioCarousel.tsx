'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const portfolioImages = [
  { src: '/images/portfolio/IMG_3592.webp', alt: 'HVAC Installation Project 1' },
  { src: '/images/portfolio/2024-05-03.webp', alt: 'AC Repair Service' },
  { src: '/images/portfolio/Resized_20230516_171935.webp', alt: 'Commercial HVAC Work' },
  { src: '/images/portfolio/IMG_4144.webp', alt: 'Residential AC Installation' },
  { src: '/images/portfolio/Resized_20230516_171828.webp', alt: 'AC Maintenance Service' },
  { src: '/images/portfolio/IMG_4077.webp', alt: 'HVAC System Upgrade' },
  { src: '/images/portfolio/IMG_4108.webp', alt: 'Emergency AC Repair' },
  { src: '/images/portfolio/IMG_4076.webp', alt: 'Duct Cleaning Service' },
  { src: '/images/portfolio/IMG_3734.webp', alt: 'AC Unit Installation' },
  { src: '/images/portfolio/Resized_20230715_094803.webp', alt: 'Commercial HVAC Maintenance' },
  { src: '/images/portfolio/Resized_20230516_171951.webp', alt: 'Residential HVAC Service' },
  { src: '/images/portfolio/2024-05-03 (1).webp', alt: 'AC System Repair' },
  { src: '/images/portfolio/2024-01-24.webp', alt: 'HVAC Installation Complete' },
]

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesPerView, setImagesPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImagesPerView(1)
      } else if (window.innerWidth < 768) {
        setImagesPerView(2)
      } else if (window.innerWidth < 1024) {
        setImagesPerView(3)
      } else {
        setImagesPerView(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, portfolioImages.length - imagesPerView)
      return prevIndex >= maxIndex ? 0 : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, portfolioImages.length - imagesPerView)
      return prevIndex <= 0 ? maxIndex : prevIndex - 1
    })
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [imagesPerView])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg uppercase mb-4 text-brand-black">
            Our Work Portfolio
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Browse through our recent HVAC installations, repairs, and maintenance projects. 
            Quality workmanship and customer satisfaction in every job.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)` }}
            >
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / imagesPerView}%` }}
                >
                  <div className="relative aspect-[4/3] rounded-none overflow-hidden border-2 border-brand-black shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-semibold">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-brand-gold hover:bg-brand-red text-brand-black hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Previous images"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-brand-gold hover:bg-brand-red text-brand-black hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Next images"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.max(1, portfolioImages.length - imagesPerView + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-brand-gold w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-block bg-brand-gold hover:bg-brand-red text-brand-black hover:text-white px-8 py-4 font-bold uppercase transition-all duration-300 border-2 border-brand-black"
          >
            Get Your Free Estimate Today
          </a>
        </div>
      </div>
    </section>
  )
}
