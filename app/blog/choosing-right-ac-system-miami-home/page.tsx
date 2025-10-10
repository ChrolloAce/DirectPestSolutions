import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'How to Choose the Right AC System for Your Miami Home | CBE Air Services',
  description: 'Complete guide to selecting the perfect air conditioning system for your Miami home. Learn about size, efficiency, and cost considerations from HVAC experts.',
  keywords: 'AC system selection Miami, best AC for Miami, air conditioning installation Miami, HVAC system Miami, AC sizing Miami',
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
                Installation
              </span>
            </div>
            
            <h1 className="heading-xl uppercase mb-6 text-brand-black">
              How to Choose the Right AC System for Your Miami Home
            </h1>
            
            <div className="flex items-center gap-6 text-brand-black/60 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>January 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>10 min read</span>
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
                src="/images/ac-installation-final.png"
                alt="Professional AC installation in Miami home"
                fill
                className="object-cover border-2 border-brand-black"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-brand-black/80 mb-8 font-medium">
                Choosing the right air conditioning system for your Miami home is crucial for comfort, energy efficiency, 
                and long-term cost savings. With year-round cooling needs, making the right choice is an investment in 
                your family's comfort and your home's value.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Understanding Miami's Unique Climate Challenges</h2>
              <p className="text-brand-black/80 mb-6">
                Miami's tropical climate presents unique challenges: high temperatures year-round, extreme humidity, 
                salt air near the coast, and frequent storms. Your AC system must handle these conditions while 
                maintaining efficiency and reliability.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Step 1: Proper System Sizing</h2>
              <p className="text-brand-black/80 mb-4">
                Proper sizing is critical for efficiency and comfort. An oversized system will short-cycle and fail 
                to remove humidity effectively. An undersized system will run constantly and struggle to cool your home.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Manual J Load Calculation</h3>
              <p className="text-brand-black/80 mb-4">
                Professional load calculations consider:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Home square footage and ceiling height</li>
                <li>Insulation levels and window efficiency</li>
                <li>Number of occupants and heat-generating appliances</li>
                <li>Orientation and shading of your home</li>
                <li>Local climate data and sun exposure</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Step 2: Choose Your System Type</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Central Air Systems</h3>
              <p className="text-brand-black/80 mb-4">
                <strong>Best for:</strong> Whole-home cooling, new construction, existing ductwork<br/>
                <strong>Pros:</strong> Even cooling, quiet operation, adds home value<br/>
                <strong>Cons:</strong> Higher upfront cost, requires ductwork
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Ductless Mini-Split Systems</h3>
              <p className="text-brand-black/80 mb-4">
                <strong>Best for:</strong> Room additions, homes without ducts, zone control<br/>
                <strong>Pros:</strong> High efficiency, individual room control, easy installation<br/>
                <strong>Cons:</strong> Indoor units visible, higher cost for multiple zones
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Heat Pump Systems</h3>
              <p className="text-brand-black/80 mb-6">
                <strong>Best for:</strong> Year-round comfort, energy efficiency<br/>
                <strong>Pros:</strong> Heating and cooling in one system, very efficient<br/>
                <strong>Cons:</strong> Higher upfront cost, complex installation
              </p>

              <div className="bg-brand-blue bg-noise text-white p-8 my-8 border-2 border-brand-black">
                <h3 className="text-2xl font-bold mb-4">Free In-Home Consultation</h3>
                <p className="mb-6">
                  Our certified technicians provide free, no-obligation consultations to help you choose the perfect 
                  AC system for your Miami home. We'll perform a proper load calculation and recommend the best options 
                  for your needs and budget.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="tel:3053516886" variant="primary" className="!bg-brand-gold !text-brand-black hover:!bg-white">
                    <Phone className="inline-block mr-2" size={18} />
                    Call +1-(305) 351-6886
                  </Button>
                  <Button href="/contact" variant="secondary" className="!bg-white/10 !text-white !border-white hover:!bg-white/20">
                    Schedule Consultation
                  </Button>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Step 3: Energy Efficiency Ratings</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">SEER Rating (Seasonal Energy Efficiency Ratio)</h3>
              <p className="text-brand-black/80 mb-4">
                Higher SEER ratings mean better efficiency and lower operating costs:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li><strong>14-16 SEER:</strong> Standard efficiency, lower upfront cost</li>
                <li><strong>17-20 SEER:</strong> High efficiency, significant energy savings</li>
                <li><strong>21+ SEER:</strong> Premium efficiency, maximum savings</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">ENERGY STAR Certification</h3>
              <p className="text-brand-black/80 mb-6">
                ENERGY STAR certified systems use 8% less energy than standard models and may qualify for rebates 
                and tax credits.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Step 4: Consider Miami-Specific Features</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Enhanced Dehumidification</h3>
              <p className="text-brand-black/80 mb-4">
                Miami's high humidity requires systems with excellent moisture removal capabilities. Look for:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-4 space-y-2">
                <li>Variable-speed compressors for better humidity control</li>
                <li>Enhanced dehumidification modes</li>
                <li>Properly sized systems to avoid short-cycling</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Corrosion Resistance</h3>
              <p className="text-brand-black/80 mb-4">
                Salt air and humidity can corrode AC components. Consider:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-4 space-y-2">
                <li>Coated coils for corrosion protection</li>
                <li>Stainless steel components</li>
                <li>Enhanced weatherproofing</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Storm Protection</h3>
              <p className="text-brand-black/80 mb-6">
                Hurricane-resistant features include reinforced mounting, surge protection, and quick-disconnect 
                electrical connections for storm preparation.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Step 5: Budget Considerations</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Upfront Costs</h3>
              <p className="text-brand-black/80 mb-4">
                System costs vary widely based on size, efficiency, and features:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-4 space-y-2">
                <li><strong>Basic Systems:</strong> $3,000-$6,000 installed</li>
                <li><strong>Mid-Range Systems:</strong> $6,000-$10,000 installed</li>
                <li><strong>Premium Systems:</strong> $10,000+ installed</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Operating Costs</h3>
              <p className="text-brand-black/80 mb-4">
                In Miami's climate, operating costs are significant. A high-efficiency system can save hundreds 
                of dollars annually in electricity costs.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Financing Options</h3>
              <p className="text-brand-black/80 mb-6">
                Many contractors offer financing options, and high-efficiency systems may qualify for utility 
                rebates and federal tax credits.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Top AC Brands for Miami</h2>
              <p className="text-brand-black/80 mb-4">
                Based on reliability and performance in South Florida's climate:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li><strong>Carrier:</strong> Excellent reliability, wide range of options</li>
                <li><strong>Trane:</strong> Durable construction, good warranty</li>
                <li><strong>Lennox:</strong> High efficiency options, advanced features</li>
                <li><strong>Rheem:</strong> Good value, reliable performance</li>
                <li><strong>Goodman:</strong> Budget-friendly with solid warranty</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Installation Considerations</h2>
              <p className="text-brand-black/80 mb-4">
                Proper installation is crucial for performance and longevity:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Licensed, insured contractors with local experience</li>
                <li>Proper permits and code compliance</li>
                <li>Quality ductwork design and sealing</li>
                <li>Appropriate refrigerant line sizing</li>
                <li>Comprehensive testing and commissioning</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Maintenance and Warranty</h2>
              <p className="text-brand-black/80 mb-6">
                Consider maintenance requirements and warranty coverage. Extended warranties and maintenance 
                plans can protect your investment and ensure optimal performance in Miami's demanding climate.
              </p>

              <p className="text-brand-black/80 mb-6">
                Choosing the right AC system is a significant decision that affects your comfort and energy costs 
                for years to come. Work with experienced professionals who understand Miami's unique requirements 
                to ensure you get the perfect system for your home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
