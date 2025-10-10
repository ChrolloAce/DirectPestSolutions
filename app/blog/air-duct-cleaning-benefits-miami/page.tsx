import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Benefits of Professional Air Duct Cleaning in Miami | CBE Air Services',
  description: 'Discover how professional duct cleaning improves indoor air quality, reduces allergens, and increases HVAC efficiency in South Florida homes.',
  keywords: 'air duct cleaning Miami, duct cleaning benefits, indoor air quality Miami, allergen removal, HVAC duct cleaning',
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
                Air Quality
              </span>
            </div>
            
            <h1 className="heading-xl uppercase mb-6 text-brand-black">
              The Benefits of Professional Air Duct Cleaning in Miami
            </h1>
            
            <div className="flex items-center gap-6 text-brand-black/60 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>December 15, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>6 min read</span>
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
                src="/images/air-duct-cleaning-new.png"
                alt="Professional air duct cleaning service in Miami"
                fill
                className="object-cover border-2 border-brand-black"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-brand-black/80 mb-8 font-medium">
                Miami's humid climate creates ideal conditions for dust, mold, and allergens to accumulate in your 
                home's ductwork. Professional air duct cleaning can significantly improve your indoor air quality, 
                reduce health issues, and increase your HVAC system's efficiency.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Why Miami Homes Need Duct Cleaning</h2>
              <p className="text-brand-black/80 mb-4">
                South Florida's unique environment presents several challenges for indoor air quality:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li><strong>High Humidity:</strong> Creates ideal conditions for mold and mildew growth</li>
                <li><strong>Year-Round AC Use:</strong> Constant air circulation moves contaminants through ducts</li>
                <li><strong>Tropical Vegetation:</strong> High pollen counts and organic debris</li>
                <li><strong>Salt Air:</strong> Coastal areas deal with additional corrosive particles</li>
                <li><strong>Construction Activity:</strong> Ongoing development creates dust and debris</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Health Benefits of Clean Air Ducts</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Reduced Allergens and Irritants</h3>
              <p className="text-brand-black/80 mb-4">
                Clean ducts remove accumulated allergens that can trigger respiratory issues:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-4 space-y-2">
                <li>Dust mites and their waste products</li>
                <li>Pollen from Miami's abundant plant life</li>
                <li>Pet dander and hair</li>
                <li>Mold spores and bacteria</li>
                <li>Tobacco smoke residue</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Improved Respiratory Health</h3>
              <p className="text-brand-black/80 mb-4">
                Particularly beneficial for family members with:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Asthma or chronic respiratory conditions</li>
                <li>Seasonal allergies</li>
                <li>Compromised immune systems</li>
                <li>Elderly family members or young children</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">HVAC System Benefits</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Improved Airflow and Efficiency</h3>
              <p className="text-brand-black/80 mb-4">
                Clean ducts allow your HVAC system to operate more efficiently:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-4 space-y-2">
                <li>Unrestricted airflow reduces strain on blower motors</li>
                <li>Better air distribution throughout your home</li>
                <li>Reduced energy consumption and lower utility bills</li>
                <li>Extended equipment lifespan</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Reduced Maintenance Requirements</h3>
              <p className="text-brand-black/80 mb-6">
                Clean ducts mean less debris circulating through your system, resulting in cleaner coils, 
                longer-lasting filters, and fewer service calls.
              </p>

              <div className="bg-brand-blue bg-noise text-white p-8 my-8 border-2 border-brand-black">
                <h3 className="text-2xl font-bold mb-4">Professional Duct Cleaning Service</h3>
                <p className="mb-6">
                  CBE Air Services uses advanced equipment and proven techniques to thoroughly clean your ductwork. 
                  Our certified technicians ensure every part of your system is properly cleaned and sanitized.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="tel:3053516886" variant="primary" className="!bg-brand-gold !text-brand-black hover:!bg-white">
                    <Phone className="inline-block mr-2" size={18} />
                    Call +1-(305) 351-6886
                  </Button>
                  <Button href="/contact" variant="secondary" className="!bg-white/10 !text-white !border-white hover:!bg-white/20">
                    Schedule Cleaning
                  </Button>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Signs You Need Duct Cleaning</h2>
              <p className="text-brand-black/80 mb-4">
                Consider professional duct cleaning if you notice:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Visible dust or debris blowing from vents</li>
                <li>Musty or stale odors when AC runs</li>
                <li>Increased allergy symptoms at home</li>
                <li>Dust accumulation shortly after cleaning</li>
                <li>Uneven cooling or heating throughout the home</li>
                <li>Higher than normal energy bills</li>
                <li>Evidence of rodent or insect infestation</li>
                <li>Recent home renovation or construction</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">The Professional Cleaning Process</h2>
              
              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Inspection and Assessment</h3>
              <p className="text-brand-black/80 mb-4">
                Our technicians begin with a thorough inspection using cameras to assess ductwork condition 
                and identify problem areas.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Powerful Vacuum Systems</h3>
              <p className="text-brand-black/80 mb-4">
                We use truck-mounted vacuum systems that create negative pressure throughout your duct system, 
                ensuring contaminants are captured rather than released into your home.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Agitation and Removal</h3>
              <p className="text-brand-black/80 mb-4">
                Specialized brushes and air tools dislodge stubborn debris, while powerful suction removes 
                all loosened contaminants.
              </p>

              <h3 className="text-xl font-bold text-brand-black mt-6 mb-3">Sanitization (Optional)</h3>
              <p className="text-brand-black/80 mb-6">
                For homes with mold or bacteria concerns, we can apply EPA-approved sanitizers to eliminate 
                microbial growth and prevent future problems.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">How Often Should Ducts Be Cleaned?</h2>
              <p className="text-brand-black/80 mb-4">
                The National Air Duct Cleaners Association (NADCA) recommends cleaning every 3-5 years, but 
                Miami's climate may require more frequent service:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li><strong>Every 2-3 years:</strong> Homes with pets, smokers, or allergy sufferers</li>
                <li><strong>Every 3-4 years:</strong> Average Miami homes with normal usage</li>
                <li><strong>Every 4-5 years:</strong> New homes with minimal contamination</li>
                <li><strong>Immediately after:</strong> Home renovations, water damage, or pest infestations</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Choosing a Professional Service</h2>
              <p className="text-brand-black/80 mb-4">
                When selecting a duct cleaning service, look for:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>NADCA certification and membership</li>
                <li>Licensed and insured technicians</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>Modern equipment and proven methods</li>
                <li>Positive customer reviews and references</li>
                <li>Comprehensive service including all system components</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Maintaining Clean Ducts</h2>
              <p className="text-brand-black/80 mb-4">
                After professional cleaning, maintain air quality with these steps:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Change air filters regularly (monthly in Miami)</li>
                <li>Keep vents and registers clean</li>
                <li>Control humidity levels (30-50%)</li>
                <li>Regular HVAC maintenance</li>
                <li>Address water leaks promptly</li>
                <li>Use high-quality air filters</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Cost vs. Benefits</h2>
              <p className="text-brand-black/80 mb-6">
                While professional duct cleaning is an investment, the benefits often outweigh the costs:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Improved health and comfort for your family</li>
                <li>Reduced energy costs from improved efficiency</li>
                <li>Extended HVAC equipment lifespan</li>
                <li>Fewer sick days and medical expenses</li>
                <li>Increased home value and appeal</li>
              </ul>

              <p className="text-brand-black/80 mb-6">
                Professional air duct cleaning is an important investment in your family's health and comfort. 
                In Miami's challenging climate, clean ducts can make a significant difference in your indoor 
                air quality and HVAC system performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
