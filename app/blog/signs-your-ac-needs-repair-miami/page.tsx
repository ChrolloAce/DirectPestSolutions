import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: '10 Warning Signs Your AC Needs Repair in Miami | CBE Air Services',
  description: 'Learn to identify early warning signs that your Miami AC system needs professional repair. Expert tips from CBE Air Services to prevent costly breakdowns.',
  keywords: 'AC repair signs Miami, air conditioning problems, AC not cooling Miami, HVAC repair Miami, AC breakdown symptoms',
}

export default function BlogPost() {
  return (
    <>
      {/* Header */}
      <section className="py-12 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-red transition-colors mb-6">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-brand-gold text-brand-black px-3 py-1 text-sm font-bold border border-brand-black">
                AC Repair
              </span>
            </div>
            
            <h1 className="heading-xl uppercase mb-6 text-brand-black">
              10 Warning Signs Your AC Needs Repair in Miami
            </h1>
            
            <div className="flex items-center gap-6 text-brand-black/60 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>5 min read</span>
              </div>
              <span>By CBE Air Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="/images/ac-repair-service.png"
                alt="AC technician diagnosing air conditioning problems in Miami"
                fill
                className="object-cover border-2 border-brand-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-brand-black/80 mb-8 font-medium">
                Miami's year-round heat puts tremendous stress on air conditioning systems. Recognizing early warning signs 
                of AC problems can save you from costly emergency repairs and uncomfortable nights without cooling.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">1. Weak or No Airflow</h2>
              <p className="text-brand-black/80 mb-6">
                If you notice weak airflow from your vents or certain rooms aren't getting cool air, this could indicate 
                a failing compressor, blocked ducts, or issues with your AC's blower fan. In Miami's heat, this problem 
                will only get worse without professional attention.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">2. Warm Air Blowing from Vents</h2>
              <p className="text-brand-black/80 mb-6">
                When your AC is running but blowing warm air, it's a clear sign something is wrong. This could be due to 
                refrigerant leaks, compressor problems, or thermostat issues. Don't ignore this - Miami heat makes this 
                an emergency situation.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">3. Strange Noises</h2>
              <p className="text-brand-black/80 mb-6">
                Grinding, squealing, or banging sounds coming from your AC unit are never normal. These noises often 
                indicate worn belts, motor problems, or loose components that need immediate attention to prevent 
                further damage.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">4. Unusual Odors</h2>
              <p className="text-brand-black/80 mb-6">
                Musty smells could indicate mold growth in your ductwork or AC unit - a common problem in Miami's 
                humid climate. Burning odors might signal electrical problems that require immediate professional attention.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">5. High Humidity Levels</h2>
              <p className="text-brand-black/80 mb-6">
                Your AC should control humidity as well as temperature. If your Miami home feels sticky or humid even 
                with the AC running, your system may not be functioning properly or could be undersized for your space.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">6. Frequent Cycling</h2>
              <p className="text-brand-black/80 mb-6">
                If your AC turns on and off frequently (short cycling), it's working inefficiently and wasting energy. 
                This could be caused by thermostat problems, refrigerant issues, or an oversized system.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">7. Water Leaks Around the Unit</h2>
              <p className="text-brand-black/80 mb-6">
                While some condensation is normal in Miami's humid climate, excessive water or leaks around your AC 
                unit could indicate blocked drain lines, frozen coils, or other issues that need professional repair.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">8. Rising Energy Bills</h2>
              <p className="text-brand-black/80 mb-6">
                If your electricity bills are climbing without increased usage, your AC may be working harder due to 
                efficiency problems. This is especially noticeable during Miami's peak summer months.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">9. Ice Formation on the Unit</h2>
              <p className="text-brand-black/80 mb-6">
                Ice on your AC unit, even in Miami heat, indicates serious problems like refrigerant leaks, dirty coils, 
                or airflow issues. Turn off your system immediately and call for professional repair.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">10. Age of the System</h2>
              <p className="text-brand-black/80 mb-6">
                AC systems in Miami typically last 10-15 years due to constant use. If your system is approaching this 
                age and showing multiple warning signs, it may be time to consider replacement rather than continued repairs.
              </p>

              <div className="bg-brand-blue bg-noise text-white p-8 my-8 border-2 border-brand-black">
                <h3 className="text-2xl font-bold mb-4">Don't Wait - Call CBE Air Services</h3>
                <p className="mb-6">
                  Recognizing these warning signs early can prevent costly breakdowns and keep your Miami home comfortable. 
                  Our certified technicians are available 24/7 for emergency repairs and same-day service.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="tel:3055603087" variant="primary" className="!bg-brand-gold !text-brand-black hover:!bg-white">
                    <Phone className="inline-block mr-2" size={18} />
                    Call (305) 560-3087
                  </Button>
                  <Button href="/contact" variant="secondary" className="!bg-white/10 !text-white !border-white hover:!bg-white/20">
                    Get Free Estimate
                  </Button>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">When to Call for Emergency Service</h2>
              <p className="text-brand-black/80 mb-6">
                In Miami's heat, some AC problems require immediate attention:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Complete AC failure during heat waves</li>
                <li>Electrical burning smells</li>
                <li>Refrigerant leaks</li>
                <li>Water damage from AC leaks</li>
                <li>Ice formation on the unit</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Prevention is Key</h2>
              <p className="text-brand-black/80 mb-6">
                Regular maintenance can prevent many of these issues. CBE Air Services offers comprehensive maintenance 
                plans designed specifically for Miami's climate. Our tune-ups include:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Thorough system inspection</li>
                <li>Cleaning of coils and components</li>
                <li>Refrigerant level checks</li>
                <li>Filter replacement</li>
                <li>Thermostat calibration</li>
                <li>Electrical connection inspection</li>
              </ul>

              <p className="text-brand-black/80 mb-6">
                Don't let AC problems leave you sweltering in Miami heat. Contact CBE Air Services at the first sign 
                of trouble for fast, professional repair service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg uppercase mb-8 text-brand-black">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ac-maintenance-tips-miami-heat" className="block group">
                <div className="border-2 border-brand-black hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="/images/ac-maintenance-tech.png"
                      alt="AC maintenance tips"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                      Essential AC Maintenance Tips for Miami's Heat
                    </h3>
                    <p className="text-brand-black/70">Keep your AC running efficiently in Miami's challenging climate...</p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/emergency-ac-repair-what-to-do" className="block group">
                <div className="border-2 border-brand-black hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="/images/emergency-ac-new.png"
                      alt="Emergency AC repair"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                      AC Emergency? Here's What to Do Before We Arrive
                    </h3>
                    <p className="text-brand-black/70">Quick steps to take when your AC breaks down in Miami heat...</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
