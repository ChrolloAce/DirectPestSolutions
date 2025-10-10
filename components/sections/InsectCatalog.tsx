import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface InsectItem {
  name: string
  slug: string
  image: string
  treatment: string
}

interface InsectCatalogProps {
  insects: InsectItem[]
}

export function InsectCatalog({ insects }: InsectCatalogProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading uppercase text-4xl md:text-5xl text-brand-black mb-4">
            Targeted Treatments For The <span className="text-brand-red">Most Common Pests</span>
          </h2>
          <p className="text-lg text-brand-black/80">
            We target 100,000+ Species to ensure the most tailored and satisfactory job.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {insects.map((insect) => (
            <Link
              key={insect.slug}
              href={`/pests/${insect.slug}`}
              className="group bg-white border-2 border-brand-black rounded-lg p-6 hover:border-brand-red transition-all duration-300 text-center"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={insect.image}
                  alt={`${insect.name} pest control treatment in Miami`}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-brand-red font-bold text-lg mb-1 group-hover:underline">
                {insect.treatment}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

