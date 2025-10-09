'use client'

import Link from 'next/link'

interface ServiceCardProps {
  slug: string
  title: string
  icon: string
  image: string
}

export function ServiceCard({ slug, title, icon, image }: ServiceCardProps) {
  return (
    <article className="group relative overflow-visible rounded-none shadow-card bg-white border border-black/10 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-within:ring-2 focus-within:ring-brand-gold focus-within:-translate-y-0.5">
      <div className="w-full h-[22rem] md:h-[24rem] lg:h-[26rem]">
        <img 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" 
          src={image}
          alt=""
        />
      </div>
      
      {/* Bottom ribbon */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <div className="border-t border-brand-red bg-brand-black text-white uppercase font-semibold tracking-wide px-5 py-3 relative">
          {title} <span className="ml-2 text-brand-red">»</span>
          <span className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-brand-black border-t-8 border-t-transparent" />
        </div>
      </div>
      
      {/* Full-card link overlay */}
      <Link
        href={`/${slug}`}
        aria-label={title}
        className="absolute inset-0 focus:outline-none"
      >
        <span className="sr-only">View {title} service</span>
      </Link>
    </article>
  )
}