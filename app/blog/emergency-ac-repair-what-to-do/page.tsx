import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pest Emergency? Here\'s What to Do Before We Arrive | Direct Pest Solutions',
  description: 'Discovered a pest infestation? Learn what immediate actions to take before professional help arrives. Emergency pest control guide for Miami homeowners.',
  keywords: 'pest emergency, emergency pest control, pest infestation Miami, what to do bed bugs, emergency exterminator Miami',
  alternates: {
    canonical: 'https://directpestsolutions.com/blog/emergency-ac-repair-what-to-do',
  },
}

export default function BlogPost() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-black hover:text-brand-red transition-colors mb-6">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-brand-red text-white px-4 py-2 text-sm font-bold uppercase">
                Emergency Guide
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl uppercase mb-6 text-brand-black font-bold">
              Pest Emergency? Here's What to Do Before We Arrive
            </h1>
            
            <div className="flex items-center gap-6 text-brand-black/60 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>February 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>6 min read</span>
              </div>
              <span>By Direct Pest Solutions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="/images/company/pest-exterminator-spraying.webp"
                alt="Emergency pest control services in Miami - Direct Pest Solutions"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-red-50 border-l-4 border-brand-red p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-brand-red flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-brand-black mb-2">Pest Emergency?</p>
                    <p className="text-brand-black/80">
                      Call Direct Pest Solutions now at <a href="tel:+13053516886" className="text-brand-red font-bold">+1-(305) 351-6886</a> for same-day emergency service in Miami-Dade County.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xl text-brand-black/80 mb-8 font-medium leading-relaxed">
                Discovering a pest infestation can be alarming. Whether it's bed bugs, a wasp nest, rodents, or a swarm 
                of termites, knowing what to do while waiting for professional help can prevent the problem from getting 
                worse and keep your family safe. Here's your complete emergency pest control guide.
              </p>

              <h2 className="text-3xl font-bold text-brand-black mt-8 mb-4">Immediate Actions for Common Pest Emergencies</h2>

              <h3 className="text-2xl font-bold text-brand-black mt-6 mb-3">Bed Bug Discovery</h3>
              <p className="text-brand-black/80 mb-4 leading-relaxed">
                If you suspect or confirm bed bugs:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2 ml-4 leading-relaxed">
                <li><strong>Don't panic or spray pesticides</strong> - This can spread bed bugs to other rooms</li>
                <li><strong>Isolate infected bedding</strong> - Place in sealed plastic bags immediately</li>
                <li><strong>Vacuum thoroughly</strong> - Focus on mattress seams, bed frame, and nearby furniture. Dispose of vacuum bag in sealed plastic bag outside</li>
                <li><strong>Wash fabrics in hot water</strong> - Use highest heat setting for linens, clothing, and curtains</li>
                <li><strong>Don't move to another room</strong> - This spreads the infestation</li>
                <li><strong>Avoid DIY treatments</strong> - Wait for professional heat or chemical treatment</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-black mt-6 mb-3">Wasp or Bee Nest</h3>
              <p className="text-brand-black/80 mb-4 leading-relaxed">
                If you discover an active wasp or bee nest:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2 ml-4 leading-relaxed">
                <li><strong>Stay away from the nest</strong> - Keep family and pets at a safe distance</li>
                <li><strong>Don't disturb it</strong> - No swatting, throwing objects, or spraying water</li>
                <li><strong>Close nearby windows and doors</strong> - Prevent insects from entering your home</li>
                <li><strong>Never attempt DIY removal</strong> - Wasp and bee stings can be dangerous, especially for those with allergies</li>
                <li><strong>Remove food sources</strong> - Cover trash cans and remove pet food from the area</li>
                <li><strong>Wait for professionals</strong> - We have protective equipment and proper removal techniques</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-black mt-6 mb-3">Rodent Sighting</h3>
              <p className="text-brand-black/80 mb-4 leading-relaxed">
                If you see a mouse or rat:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2 ml-4 leading-relaxed">
                <li><strong>Remove food sources</strong> - Store all food in sealed containers, including pet food</li>
                <li><strong>Clean thoroughly</strong> - Eliminate crumbs and food residue</li>
                <li><strong>Seal accessible entry points</strong> - Stuff steel wool in obvious gaps (temporary measure)</li>
                <li><strong>Remove clutter</strong> - Reduce hiding spots in storage areas</li>
                <li><strong>Don't touch droppings</strong> - Rodent waste can carry disease. Wait for professional cleanup</li>
                <li><strong>Keep pets away</strong> - Prevent contact with rodents or their droppings</li>
              </ul>

              <div className="bg-brand-red text-white p-8 my-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Need Emergency Pest Control?</h3>
                <p className="mb-6 leading-relaxed">
                  Direct Pest Solutions offers same-day emergency service throughout Miami-Dade County. Our licensed 
                  exterminators are equipped to handle any pest emergency safely and effectively.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+13053516886" className="inline-flex items-center gap-2 bg-white text-brand-red px-6 py-3 font-bold uppercase hover:bg-brand-black hover:text-white transition-colors">
                    <Phone size={18} />
                    Call +1-(305) 351-6886
                  </a>
                  <a href="/contact" className="bg-brand-black text-white px-6 py-3 font-bold uppercase hover:bg-white hover:text-brand-black transition-colors">
                    Request Emergency Service
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-black mt-6 mb-3">Termite Swarm</h3>
              <p className="text-brand-black/80 mb-4 leading-relaxed">
                If you see flying termites (swarmers):
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2 ml-4 leading-relaxed">
                <li><strong>Don't spray pesticides</strong> - Swarmers you see are the tip of the iceberg</li>
                <li><strong>Collect a few specimens</strong> - Place in a sealed bag or container for identification</li>
                <li><strong>Note the location</strong> - Remember where you saw the swarm</li>
                <li><strong>Check for mud tubes</strong> - Look for brown mud tubes on foundation walls</li>
                <li><strong>Document the damage</strong> - Take photos of any visible wood damage</li>
                <li><strong>Schedule immediate inspection</strong> - Termites cause extensive damage quickly</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-black mt-6 mb-3">Ant Infestation</h3>
              <p className="text-brand-black/80 mb-4 leading-relaxed">
                For sudden ant invasions:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2 ml-4 leading-relaxed">
                <li><strong>Don't spray</strong> - Store-bought sprays scatter colonies and make treatment harder</li>
                <li><strong>Clean up food</strong> - Wipe down surfaces and sweep floors</li>
                <li><strong>Seal food containers</strong> - Use airtight containers for all food</li>
                <li><strong>Note entry points</strong> - Watch where ants are coming from</li>
                <li><strong>Fix moisture issues</strong> - Repair leaks and reduce humidity</li>
                <li><strong>Wait for professional treatment</strong> - We'll treat the colony, not just the ants you see</li>
              </ul>

              <h2 className="text-3xl font-bold text-brand-black mt-8 mb-4">What NOT to Do During a Pest Emergency</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <p className="font-bold text-brand-black mb-3">❌ Common Mistakes That Make Things Worse:</p>
                <ul className="list-disc list-inside text-brand-black/80 space-y-2 ml-4 leading-relaxed">
                  <li>Don't use multiple DIY pest control products</li>
                  <li>Don't disturb nests or colonies</li>
                  <li>Don't ignore the problem hoping it goes away</li>
                  <li>Don't delay professional treatment</li>
                  <li>Don't attempt to handle stinging insects yourself</li>
                  <li>Don't touch or clean rodent waste without proper protection</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-brand-black mt-8 mb-4">Preparing for the Exterminator's Arrival</h2>
              
              <p className="text-brand-black/80 mb-4 leading-relaxed">
                While waiting for professional help:
              </p>
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2 ml-4 leading-relaxed">
                <li><strong>Clear access areas</strong> - Move furniture away from walls if possible</li>
                <li><strong>Secure pets</strong> - Plan to keep them in a safe area during treatment</li>
                <li><strong>Document the problem</strong> - Note when you first noticed pests and where you've seen them</li>
                <li><strong>Prepare questions</strong> - Write down concerns to discuss with the technician</li>
                <li><strong>Remove clutter</strong> - This helps the exterminator access problem areas</li>
              </ul>

              <h2 className="text-3xl font-bold text-brand-black mt-8 mb-4">Why Choose Direct Pest Solutions for Emergencies</h2>
              
              <ul className="list-disc list-inside text-brand-black/80 mb-6 space-y-2 ml-4 leading-relaxed">
                <li><strong>Same-day service available</strong> throughout Miami-Dade County</li>
                <li><strong>Licensed and insured</strong> exterminators with years of experience</li>
                <li><strong>Safe, EPA-approved products</strong> for your family and pets</li>
                <li><strong>Comprehensive treatment</strong> that addresses the root cause</li>
                <li><strong>Follow-up service</strong> to ensure complete elimination</li>
                <li><strong>Emergency hotline</strong> available 24/7</li>
              </ul>

              <p className="text-brand-black/80 mb-6 leading-relaxed">
                Don't let a pest emergency ruin your peace of mind. Contact Direct Pest Solutions immediately for 
                professional, fast, and effective treatment. We're here to help protect your Miami home.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-brand-black mb-4">24/7 Emergency Pest Control</h3>
                <p className="text-brand-black/80 mb-4 leading-relaxed">
                  Direct Pest Solutions provides emergency pest control services throughout Miami-Dade County. Don't wait 
                  for pests to multiply—call now for immediate assistance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+13053516886" className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-bold uppercase hover:bg-brand-black transition-colors">
                    <Phone size={18} />
                    Call +1-(305) 351-6886
                  </a>
                  <a href="/contact" className="bg-brand-black text-white px-6 py-3 font-bold uppercase hover:bg-brand-red transition-colors">
                    Get Emergency Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
