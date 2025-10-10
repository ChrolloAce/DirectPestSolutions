import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pest Control Blog | Expert Tips & Advice | Direct Pest Solutions Miami',
  description: 'Expert pest control tips, prevention advice, and extermination insights for Miami homeowners. Learn from Direct Pest Solutions professionals about keeping your home pest-free.',
  keywords: 'pest control blog, pest control tips Miami, termite prevention, bed bug treatment, mosquito control, rodent removal, pest extermination tips, Miami pest blog',
}

const blogPosts = [
  {
    slug: 'signs-your-ac-needs-repair-miami',
    title: '10 Warning Signs of a Termite Infestation in Miami',
    excerpt: 'Learn to identify early warning signs of termite damage in your Miami home before it becomes a costly structural emergency.',
    author: 'Direct Pest Solutions',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Termite Control',
    image: '/images/company/termite-inspection-professional.webp',
    featured: true
  },
  {
    slug: 'ac-maintenance-tips-miami-heat',
    title: 'Essential Pest Prevention Tips for Miami Homeowners',
    excerpt: 'Discover how to keep your home pest-free in Miami\'s challenging climate with these professional prevention strategies.',
    author: 'Direct Pest Solutions',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Prevention',
    image: '/images/company/pest-control-technician-exterior.jpg',
    featured: true
  },
  {
    slug: 'choosing-right-ac-system-miami-home',
    title: 'How to Choose the Right Pest Control Service in Miami',
    excerpt: 'A comprehensive guide to selecting the perfect pest control company for your Miami home, including licensing, methods, and cost considerations.',
    author: 'Direct Pest Solutions',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Guides',
    image: '/images/company/residential-pest-control-service.webp',
    featured: true
  },
  {
    slug: 'commercial-hvac-energy-efficiency',
    title: 'Commercial Pest Control: Protecting Your Miami Business',
    excerpt: 'Learn how Miami businesses can maintain pest-free environments and comply with health regulations with professional commercial pest control.',
    author: 'Direct Pest Solutions',
    date: '2023-12-28',
    readTime: '8 min read',
    category: 'Commercial',
    image: '/images/company/commercial-pest-inspection.webp',
    featured: false
  },
  {
    slug: 'emergency-ac-repair-what-to-do',
    title: 'Bed Bug Emergency? Here\'s What to Do Before We Arrive',
    excerpt: 'Quick steps to take when you discover bed bugs in your Miami home, plus when to call for emergency service and what to expect.',
    author: 'Direct Pest Solutions',
    date: '2023-12-20',
    readTime: '4 min read',
    category: 'Bed Bugs',
    image: '/images/company/bed-bug-treatment-residential.webp',
    featured: false
  },
  {
    slug: 'air-duct-cleaning-benefits-miami',
    title: 'The Benefits of Professional Rodent Exclusion in Miami',
    excerpt: 'Discover how professional rodent exclusion improves home safety, prevents damage, and provides long-term protection for South Florida homes.',
    author: 'Direct Pest Solutions',
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Rodent Control',
    image: '/images/company/rodent-control-specialist.webp',
    featured: false
  },
  {
    slug: 'hvac-maintenance-schedule-miami',
    title: 'Year-Round Pest Prevention Schedule for Miami Homes',
    excerpt: 'A month-by-month guide to pest prevention tasks that will keep your home pest-free in Miami\'s year-round tropical climate.',
    author: 'Direct Pest Solutions',
    date: '2023-12-10',
    readTime: '9 min read',
    category: 'Prevention',
    image: '/images/company/interior-pest-treatment.webp',
    featured: false
  },
  {
    slug: 'common-ac-problems-miami-solutions',
    title: 'Most Common Pest Problems in Miami and Their Solutions',
    excerpt: 'Explore the most frequent pest issues Miami homeowners face and learn when to DIY versus when to call professional exterminators.',
    author: 'Direct Pest Solutions',
    date: '2023-12-05',
    readTime: '8 min read',
    category: 'Pest Control',
    image: '/images/company/pest-exterminator-spraying.webp',
    featured: false
  }
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl uppercase mb-6 font-black">
              PEST CONTROL <span className="text-brand-red">BLOG</span>
            </h1>
            <p className="text-xl text-white/90">
              Expert advice, prevention tips, and pest control insights from Miami's trusted professionals
            </p>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full rounded-xl">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Red diagonal banner */}
                      <div className="absolute bottom-0 left-0 bg-brand-red px-8 py-4" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
                        <span className="text-white text-sm font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-brand-black/50 mb-3 uppercase tracking-wide">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-brand-black group-hover:text-brand-red transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-brand-black/70 mb-4 line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider">
                        <span>Read More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
