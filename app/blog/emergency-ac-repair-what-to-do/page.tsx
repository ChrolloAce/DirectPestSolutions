import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Pest Emergency? Here\'s What to Do Before We Arrive | Direct Pest Solutions',
  description: 'Quick steps to take when you discover pests in your Miami home. Emergency pest control guide from Direct Pest Solutions professionals. Same-day service available.',
  keywords: 'emergency pest control Miami, pest emergency, urgent pest removal, emergency exterminator Miami, 24/7 pest control',
  alternates: {
    canonical: 'https://directpestsolutions.com/blog/emergency-ac-repair-what-to-do',
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
                Emergency
              </span>
            </div>
            
            <h1 className="heading-xl uppercase mb-6 text-brand-black">
              AC Emergency? Here's What to Do Before We Arrive
            </h1>
            
            <div className="flex items-center gap-6 text-brand-black/60 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>December 20, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>4 min read</span>
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
                src="/images/emergency-ac-new.png"
                alt="Emergency AC repair service in Miami"
                fill
                className="object-cover border-2 border-brand-black"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-brand-black/80 mb-8 font-medium">
                When your AC breaks down in Miami's sweltering heat, every minute counts. While waiting for professional 
                help to arrive, there are several steps you can take to diagnose the problem and potentially restore 
                cooling to your home.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-2">⚠️ Safety First</h3>
                <p className="text-red-700">
                  If you smell gas, hear unusual electrical sounds, see sparks, or notice burning odors, 
                  turn off your system immediately and call for emergency service. Do not attempt any troubleshooting.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Step 1: Check Your Thermostat</h2>
              <p className="text-brand-black/80 mb-4">
                Before panicking, verify these basic thermostat settings:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Ensure it's set to "COOL" mode, not "HEAT" or "OFF"</li>
                <li>Check that the temperature setting is below current room temperature</li>
                <li>Replace thermostat batteries if display is dim or blank</li>
                <li>Look for error codes or unusual displays</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Step 2: Check Your Circuit Breakers</h2>
              <p className="text-brand-black/80 mb-4">
                AC systems have multiple electrical components that can trip breakers:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Check the main AC breaker in your electrical panel</li>
                <li>Look for any tripped breakers (switches in middle position)</li>
                <li>Reset tripped breakers by turning them fully OFF, then ON</li>
                <li>Check the outdoor unit's disconnect switch near the condenser</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Step 3: Inspect Your Air Filter</h2>
              <p className="text-brand-black/80 mb-4">
                A severely clogged filter can cause system shutdown:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Locate your air filter (usually in return air grille or air handler)</li>
                <li>Remove and inspect the filter - if you can't see through it, it's too dirty</li>
                <li>Replace with a new filter if available</li>
                <li>Never run your system without a filter</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Step 4: Check the Outdoor Unit</h2>
              <p className="text-brand-black/80 mb-4">
                Inspect your outdoor condenser unit for obvious problems:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Clear any debris, leaves, or objects blocking airflow</li>
                <li>Ensure the unit has at least 2 feet of clearance on all sides</li>
                <li>Check if the fan is running when system is on</li>
                <li>Look for ice formation (if present, turn system off immediately)</li>
              </ul>

              <div className="bg-brand-blue bg-noise text-white p-8 my-8 border-2 border-brand-black">
                <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
                <p className="mb-6">
                  CBE Air Services provides 24/7 emergency AC repair throughout Miami-Dade County. Our certified 
                  technicians arrive quickly with fully-stocked trucks to get your cooling restored fast.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="tel:3053516886" variant="primary" className="!bg-brand-gold !text-brand-black hover:!bg-white">
                    <Phone className="inline-block mr-2" size={18} />
                    Emergency: +1-(305) 351-6886
                  </Button>
                  <Button href="/contact" variant="secondary" className="!bg-white/10 !text-white !border-white hover:!bg-white/20">
                    Schedule Service
                  </Button>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">What NOT to Do During an AC Emergency</h2>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li><strong>Don't</strong> repeatedly turn the system on and off - this can cause more damage</li>
                <li><strong>Don't</strong> attempt electrical repairs unless you're qualified</li>
                <li><strong>Don't</strong> remove panels or access electrical components</li>
                <li><strong>Don't</strong> add refrigerant yourself - it requires EPA certification</li>
                <li><strong>Don't</strong> ignore strange smells, sounds, or smoke</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Temporary Cooling Measures</h2>
              <p className="text-brand-black/80 mb-4">
                While waiting for repair service, try these cooling strategies:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Close blinds and curtains to block sunlight</li>
                <li>Use fans to circulate air and create a cooling effect</li>
                <li>Stay hydrated and avoid strenuous activities</li>
                <li>Consider temporary cooling with portable units if available</li>
                <li>Move to the coolest room in your home</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">When to Call for Emergency Service</h2>
              <p className="text-brand-black/80 mb-4">
                Call immediately if you experience:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Complete system failure during extreme heat</li>
                <li>Burning smells or visible smoke</li>
                <li>Electrical sparks or unusual sounds</li>
                <li>Water leaks causing property damage</li>
                <li>Ice formation on the unit</li>
                <li>Refrigerant leaks (sweet chemical smell)</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Information to Have Ready</h2>
              <p className="text-brand-black/80 mb-4">
                When calling for service, have this information ready:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>AC system make, model, and age (if known)</li>
                <li>Description of the problem and when it started</li>
                <li>Any unusual sounds, smells, or visible issues</li>
                <li>What troubleshooting steps you've already tried</li>
                <li>Your address and best contact number</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mt-8 mb-4">Prevention for Future Emergencies</h2>
              <p className="text-brand-black/80 mb-4">
                Reduce the likelihood of future AC emergencies:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2">
                <li>Schedule regular maintenance twice per year</li>
                <li>Replace air filters monthly during peak season</li>
                <li>Keep outdoor unit clean and clear of debris</li>
                <li>Address minor issues before they become major problems</li>
                <li>Consider a maintenance agreement for priority service</li>
              </ul>

              <p className="text-brand-black/80 mb-6">
                Remember, while these troubleshooting steps can help identify simple problems, most AC issues 
                require professional diagnosis and repair. Don't hesitate to call CBE Air Services for fast, 
                reliable emergency service when your Miami home's cooling is at stake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
