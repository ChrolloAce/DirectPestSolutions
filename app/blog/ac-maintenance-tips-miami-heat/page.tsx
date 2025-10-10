import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Essential Pest Prevention Tips for Miami\'s Heat | Direct Pest Solutions',
  description: 'Keep pests away in Miami\'s challenging climate with these professional prevention tips from Direct Pest Solutions experts. Protect your home year-round.',
  keywords: 'pest prevention Miami, pest control tips, pest prevention tips Miami, summer pest control, Miami pest prevention',
  alternates: {
    canonical: 'https://directpestsolutions.com/blog/ac-maintenance-tips-miami-heat',
  },
}

export default function BlogPost() {
  return (
    <>
      <section className="py-12 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-red transition-colors mb-6">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-brand-gold text-brand-black px-3 py-1 text-sm font-bold border border-brand-black">
                Maintenance
              </span>
            </div>
            
            <h1 className="heading-xl uppercase mb-6 text-brand-black">
              Essential AC Maintenance Tips for Miami's Heat
            </h1>
            
            <div className="flex items-center gap-6 text-brand-black/60 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>January 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>7 min read</span>
              </div>
              <span>By CBE Air Services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="/images/ac-maintenance-tech.png"
                alt="AC maintenance technician in Miami"
                fill
                className="object-cover border-2 border-brand-black"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-brand-black/80 mb-8 font-medium">
                Miami's year-round heat and humidity put extraordinary demands on air conditioning systems. 
                Regular maintenance is essential to keep your AC running efficiently and prevent costly breakdowns.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Why Miami AC Systems Need Special Care</h2>
              <p className="text-brand-black/80 mb-6">
                Unlike other climates where AC systems get seasonal breaks, Miami air conditioners run almost continuously. 
                The combination of high temperatures, humidity, salt air (near the coast), and frequent storms creates 
                unique challenges that require proactive maintenance.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Monthly Maintenance Tasks</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Check and Replace Air Filters</h3>
              <p className="text-brand-black/80 mb-4">
                In Miami's dusty environment, air filters can clog quickly. Check filters monthly and replace them 
                every 1-2 months during peak usage. Clean filters improve airflow, reduce energy consumption, and 
                protect your system from debris.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Clear Debris from Outdoor Unit</h3>
              <p className="text-brand-black/80 mb-4">
                Miami's frequent storms and lush vegetation can quickly clog outdoor units with leaves, branches, 
                and debris. Keep a 2-foot clearance around your outdoor unit and regularly remove any obstructions.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Check Thermostat Settings</h3>
              <p className="text-brand-black/80 mb-6">
                Ensure your thermostat is set to cooling mode and the temperature is appropriate for Miami's climate. 
                Consider upgrading to a programmable thermostat to optimize energy usage when you're away.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Seasonal Maintenance (Every 3-6 Months)</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Clean Evaporator and Condenser Coils</h3>
              <p className="text-brand-black/80 mb-4">
                Miami's humidity and dust can quickly dirty coils, reducing efficiency by up to 30%. Professional 
                coil cleaning should be done every 3-6 months to maintain peak performance.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Inspect and Clean Drain Lines</h3>
              <p className="text-brand-black/80 mb-4">
                High humidity means your AC produces lots of condensation. Clogged drain lines can cause water 
                damage and system shutdowns. Regular cleaning prevents these costly problems.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Check Refrigerant Levels</h3>
              <p className="text-brand-black/80 mb-6">
                Low refrigerant levels reduce cooling capacity and increase energy costs. Only licensed technicians 
                should check and add refrigerant, as this requires specialized equipment and EPA certification.
              </p>

              <div className="bg-brand-blue bg-noise text-white p-8 my-8 border-2 border-brand-black">
                <h3 className="text-2xl font-bold mb-4">Professional Maintenance Plans</h3>
                <p className="mb-6">
                  While some maintenance tasks can be done by homeowners, professional tune-ups are essential for 
                  optimal performance. CBE Air Services offers comprehensive maintenance plans designed specifically 
                  for Miami's climate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="tel:3053516886" variant="primary" className="!bg-brand-gold !text-brand-black hover:!bg-white">
                    <Phone className="inline-block mr-2" size={18} />
                    Call +1-(305) 351-6886
                  </Button>
                  <Button href="/contact" variant="secondary" className="!bg-white/10 !text-white !border-white hover:!bg-white/20">
                    Schedule Maintenance
                  </Button>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Annual Professional Maintenance</h2>
              <p className="text-brand-black/80 mb-4">
                Even with regular DIY maintenance, annual professional service is crucial. Our certified technicians perform:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Complete system inspection and testing</li>
                <li>Electrical connection tightening and testing</li>
                <li>Motor lubrication and belt adjustment</li>
                <li>Refrigerant pressure testing</li>
                <li>Thermostat calibration</li>
                <li>Ductwork inspection for leaks</li>
                <li>Safety control testing</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Signs Your AC Needs Professional Attention</h2>
              <p className="text-brand-black/80 mb-4">
                Even with regular maintenance, watch for these warning signs:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Rising energy bills without increased usage</li>
                <li>Uneven cooling throughout your home</li>
                <li>Strange noises or odors</li>
                <li>Frequent cycling on and off</li>
                <li>Excessive humidity indoors</li>
                <li>Ice formation on the unit</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Miami-Specific Maintenance Tips</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Hurricane Preparation</h3>
              <p className="text-brand-black/80 mb-4">
                Before hurricane season, secure outdoor units and consider surge protectors. After storms, 
                inspect for damage and debris before restarting your system.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Salt Air Protection</h3>
              <p className="text-brand-black/80 mb-4">
                If you live near the coast, salt air can corrode AC components faster. More frequent professional 
                cleaning and inspection of coils and electrical connections is recommended.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Mold and Mildew Prevention</h3>
              <p className="text-brand-black/80 mb-6">
                Miami's humidity creates ideal conditions for mold growth. Ensure proper drainage, consider UV 
                lights in ductwork, and maintain low indoor humidity levels (30-50%).
              </p>

              <p className="text-brand-black/80 mb-6">
                Regular maintenance is the key to reliable cooling in Miami's demanding climate. Don't wait for 
                problems to develop - schedule your maintenance appointment today with CBE Air Services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
