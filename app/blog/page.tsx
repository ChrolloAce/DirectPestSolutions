import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Blog | AC Tips & Advice | CBE Air Services Miami',
  description: 'Expert HVAC tips, AC maintenance advice, and heating solutions for Miami homeowners. Learn from CBE Air Services professionals about keeping your home comfortable.',
  keywords: 'HVAC blog, AC tips Miami, air conditioning advice, heating tips, HVAC maintenance, AC repair tips, Miami HVAC blog',
}

const blogPosts = [
  {
    slug: 'signs-your-ac-needs-repair-miami',
    title: '10 Warning Signs Your AC Needs Repair in Miami',
    excerpt: 'Learn to identify early warning signs that your air conditioning system needs professional attention before it becomes a costly emergency.',
    author: 'CBE Air Services',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AC Repair',
    image: '/images/ac-repair-service.png',
    featured: true
  },
  {
    slug: 'ac-maintenance-tips-miami-heat',
    title: 'Essential AC Maintenance Tips for Miami\'s Heat',
    excerpt: 'Discover how to keep your air conditioning system running efficiently in Miami\'s challenging climate with these professional maintenance tips.',
    author: 'CBE Air Services',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Maintenance',
    image: '/images/ac-maintenance-tech.png',
    featured: true
  },
  {
    slug: 'choosing-right-ac-system-miami-home',
    title: 'How to Choose the Right AC System for Your Miami Home',
    excerpt: 'A comprehensive guide to selecting the perfect air conditioning system for your Miami home, including size, efficiency, and cost considerations.',
    author: 'CBE Air Services',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Installation',
    image: '/images/ac-installation-final.png',
    featured: true
  },
  {
    slug: 'commercial-hvac-energy-efficiency',
    title: 'Maximizing Energy Efficiency in Commercial HVAC Systems',
    excerpt: 'Learn how Miami businesses can reduce energy costs and improve comfort with smart commercial HVAC strategies and modern technology.',
    author: 'CBE Air Services',
    date: '2023-12-28',
    readTime: '8 min read',
    category: 'Commercial',
    image: '/images/commercial-hvac-tech.png',
    featured: false
  },
  {
    slug: 'emergency-ac-repair-what-to-do',
    title: 'AC Emergency? Here\'s What to Do Before We Arrive',
    excerpt: 'Quick steps to take when your AC breaks down in Miami heat, plus when to call for emergency service and what to expect.',
    author: 'CBE Air Services',
    date: '2023-12-20',
    readTime: '4 min read',
    category: 'Emergency',
    image: '/images/emergency-ac-new.png',
    featured: false
  },
  {
    slug: 'air-duct-cleaning-benefits-miami',
    title: 'The Benefits of Professional Air Duct Cleaning in Miami',
    excerpt: 'Discover how professional duct cleaning improves indoor air quality, reduces allergens, and increases HVAC efficiency in South Florida homes.',
    author: 'CBE Air Services',
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Air Quality',
    image: '/images/air-duct-cleaning-new.png',
    featured: false
  },
  {
    slug: 'hvac-maintenance-schedule-miami',
    title: 'Year-Round HVAC Maintenance Schedule for Miami Homes',
    excerpt: 'A month-by-month guide to HVAC maintenance tasks that will keep your system running efficiently in Miami\'s year-round heat.',
    author: 'CBE Air Services',
    date: '2023-12-10',
    readTime: '9 min read',
    category: 'Maintenance',
    image: '/images/ac-maintenance-tech.png',
    featured: false
  },
  {
    slug: 'common-ac-problems-miami-solutions',
    title: 'Most Common AC Problems in Miami and Their Solutions',
    excerpt: 'Explore the most frequent air conditioning issues Miami homeowners face and learn when to DIY versus when to call professionals.',
    author: 'CBE Air Services',
    date: '2023-12-05',
    readTime: '8 min read',
    category: 'AC Repair',
    image: '/images/ac-repair-service.png',
    featured: false
  }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-blue bg-noise py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="heading-xl uppercase mb-6">
              HVAC Blog & Tips
            </h1>
            <p className="text-xl text-white/90">
              Expert advice, maintenance tips, and HVAC insights from Miami's trusted professionals
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            Featured Articles
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredPosts.map((post, index) => (
              <article key={post.slug} className={`group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="border-2 border-brand-black hover:shadow-lg transition-all duration-300 bg-white h-full">
                    <div className={`relative ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-gold text-brand-black px-3 py-1 text-sm font-bold border border-brand-black">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-brand-black/60 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className={`font-bold mb-3 group-hover:text-brand-blue transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                        {post.title}
                      </h3>
                      <p className="text-brand-black/70 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-brand-black/60">By {post.author}</span>
                        <div className="flex items-center gap-1 text-brand-blue group-hover:text-brand-red transition-colors">
                          <span className="text-sm font-semibold">Read More</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-brand-off">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="border-2 border-brand-black hover:shadow-lg transition-all duration-300 bg-white h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-gold text-brand-black px-3 py-1 text-sm font-bold border border-brand-black">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-brand-black/60 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-brand-black/70 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-brand-black/60">By {post.author}</span>
                        <div className="flex items-center gap-1 text-brand-blue group-hover:text-brand-red transition-colors">
                          <span className="text-sm font-semibold">Read More</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg uppercase mb-4 text-white">
              Stay Updated
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get the latest HVAC tips, maintenance reminders, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-brand-gold focus:border-brand-blue outline-none"
              />
              <button className="bg-brand-gold hover:bg-brand-red text-brand-black hover:text-white px-6 py-3 font-bold transition-colors border-2 border-brand-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
