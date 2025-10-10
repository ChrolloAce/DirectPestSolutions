import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Phone, Flame, Droplet, Thermometer, Shield, Zap, CheckCircle, X } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Bed Bug Treatment Methods Miami | Heat vs Chemical | Direct Pest Solutions',
  description: 'Compare bed bug treatment methods: heat treatment vs chemical vs integrated approaches. Learn which method is best for your Miami home. Free consultation available.',
  keywords: 'bed bug treatment methods Miami, heat treatment bed bugs, chemical bed bug treatment, bed bug heat vs chemical, best bed bug treatment Miami, bed bug extermination methods, Miami bed bug solutions',
  authors: [{ name: 'Direct Pest Solutions' }],
  openGraph: {
    title: 'Bed Bug Treatment Methods: Heat vs Chemical | Miami Guide',
    description: 'Complete comparison of bed bug extermination methods. Expert guidance on choosing the right treatment for your situation.',
    type: 'article',
    url: 'https://directpestsolutions.com/bed-bug-extermination-miami/treatment-methods',
  },
  alternates: {
    canonical: 'https://directpestsolutions.com/bed-bug-extermination-miami/treatment-methods',
  },
}

export default function BedBugTreatmentMethodsPage() {
  const heatTreatment = {
    name: 'Heat Treatment',
    icon: <Flame size={48} />,
    effectiveness: '95-100%',
    duration: '6-8 hours (single day)',
    priceRange: '$1,500 - $4,000',
    pros: [
      'Kills all life stages (eggs, nymphs, adults) in one treatment',
      'Non-toxic - no chemicals used',
      'Penetrates walls, furniture, cracks',
      'Same-day results, no waiting period',
      'Kills bed bugs hiding in electronics, books',
      'No resistance issues like with chemicals'
    ],
    cons: [
      'Higher upfront cost',
      'Requires vacating home for 6-8 hours',
      'Can damage heat-sensitive items (candles, vinyl, medications)',
      'Requires specialized equipment and training',
      'No residual protection after treatment'
    ],
    bestFor: 'Severe infestations, fast results needed, chemical-sensitive individuals, multi-unit buildings',
    howItWorks: 'Specially designed heaters raise room temperature to 135-145°F for 4+ hours. This lethal temperature penetrates furniture, walls, and all hiding spots, killing bed bugs and their eggs instantly.'
  }

  const chemicalTreatment = {
    name: 'Chemical Treatment',
    icon: <Droplet size={48} />,
    effectiveness: '70-95%',
    duration: '2-4 treatments over 4-6 weeks',
    priceRange: '$300 - $1,200 per treatment',
    pros: [
      'Lower initial cost per visit',
      'Provides residual protection for weeks',
      'Can target specific areas',
      'No heat-sensitive item concerns',
      'Multiple product options if resistance occurs',
      'Proven track record over decades'
    ],
    cons: [
      'Requires multiple treatments (2-4 sessions)',
      'Takes 4-6 weeks for complete elimination',
      'Chemical exposure concerns for some',
      'Doesn\'t penetrate walls or sealed items',
      'Miss eggs = reinfestation',
      'Growing resistance to some products'
    ],
    bestFor: 'Light to moderate infestations, budget-conscious treatments, ongoing prevention, single room infestations',
    howItWorks: 'EPA-approved insecticides (pyrethroids, neonicotinoids, etc.) are applied to infested areas. Bed bugs die on contact or when crossing treated surfaces. Multiple treatments spaced 10-14 days apart target newly hatched nymphs.'
  }

  const integratedApproach = {
    name: 'Integrated Pest Management (IPM)',
    icon: <Shield size={48} />,
    effectiveness: '90-100%',
    duration: 'Varies by infestation',
    priceRange: '$1,000 - $3,500',
    description: 'Combines multiple methods for maximum effectiveness: heat or steam in heavily infested areas, strategic chemical applications for residual protection, encasements for mattresses/box springs, and ongoing monitoring.',
    pros: [
      'Highest success rate overall',
      'Tailored to your specific situation',
      'Combines benefits of multiple methods',
      'Includes prevention components',
      'Lower resistance risk'
    ],
    bestFor: 'Most comprehensive solution, especially for moderate to severe cases'
  }

  const comparisonTable = [
    {
      factor: 'Kill Rate (First Treatment)',
      heat: '95-100%',
      chemical: '60-80%',
      integrated: '85-100%'
    },
    {
      factor: 'Kills Eggs',
      heat: 'Yes, all stages',
      chemical: 'Some products only',
      integrated: 'Yes'
    },
    {
      factor: 'Time to Complete',
      heat: '1 day',
      chemical: '4-6 weeks',
      integrated: '1-3 weeks'
    },
    {
      factor: 'Residual Protection',
      heat: 'None',
      chemical: '2-4 weeks',
      integrated: 'Yes (chemical component)'
    },
    {
      factor: 'Chemical Exposure',
      heat: 'None',
      chemical: 'Moderate',
      integrated: 'Minimal'
    },
    {
      factor: 'Reinfestation Risk',
      heat: 'Higher without monitoring',
      chemical: 'Lower with residual',
      integrated: 'Lowest'
    }
  ]

  const otherMethods = [
    {
      name: 'Steam Treatment',
      description: 'Localized heat application using steam. Effective for mattresses, furniture, carpets.',
      effectiveness: '90-100% where applied',
      cost: '$200-$800',
      notes: 'Great supplement, but can\'t treat entire home'
    },
    {
      name: 'Fumigation',
      description: 'Whole-structure gas fumigation (rare for bed bugs). Used in severe commercial cases.',
      effectiveness: '100%',
      cost: '$5,000+',
      notes: 'Overkill for most residential cases'
    },
    {
      name: 'Cold Treatment',
      description: 'Freezing infested items to -18°F for 4+ days. For small items only.',
      effectiveness: '100% for treated items',
      cost: 'DIY to $100',
      notes: 'Not practical for whole-home treatment'
    },
    {
      name: 'Diatomaceous Earth',
      description: 'Natural powder that dehydrates bed bugs. Slow-acting supplemental treatment.',
      effectiveness: '50-70% over weeks',
      cost: '$20-$100',
      notes: 'Works but very slow, best as supplement'
    }
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-brand-black/10">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Bed Bug Extermination', href: '/bed-bug-extermination-miami' },
              { label: 'Treatment Methods' }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red to-red-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="mx-auto mb-6" size={64} />
            <h1 className="heading-xl uppercase mb-6">
              Bed Bug Treatment Methods: Heat vs Chemical
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Compare proven bed bug extermination methods and find the best solution for your Miami home. Expert guidance on heat treatment, chemical applications, and integrated approaches.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" size="lg" variant="secondary">
                Get Treatment Recommendation
              </Button>
              <Button href="tel:+13053516886" size="lg" variant="primary" className="bg-white !text-brand-red hover:bg-gray-100">
                <Phone className="inline-block mr-2" size={20} />
                Call +1-(305) 351-6886
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Decision Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              Which Treatment is Right for You?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-6 border-2 border-orange-500">
                <Flame className="text-orange-500 mb-3" size={40} />
                <h3 className="font-bold text-xl mb-3">Choose Heat Treatment If...</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-1" />
                    <span>Severe infestation throughout home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-1" />
                    <span>You need immediate results (1 day)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-1" />
                    <span>Chemical-sensitive individuals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-1" />
                    <span>Multi-unit building (prevent spread)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 border-2 border-blue-500">
                <Droplet className="text-blue-500 mb-3" size={40} />
                <h3 className="font-bold text-xl mb-3">Choose Chemical Treatment If...</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                    <span>Light to moderate infestation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                    <span>Budget is primary concern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                    <span>Single room/area affected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                    <span>Want ongoing residual protection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 border-2 border-green-500">
                <Shield className="text-green-500 mb-3" size={40} />
                <h3 className="font-bold text-xl mb-3">Choose Integrated (IPM) If...</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>You want the highest success rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Moderate to severe infestation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Previous treatments have failed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                    <span>Want comprehensive long-term solution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heat Treatment Deep Dive */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Flame className="text-orange-500" size={48} />
              <h2 className="heading-lg uppercase">Heat Treatment</h2>
            </div>
            
            <div className="bg-white p-8 border-2 border-brand-black mb-8">
              <div className="grid md:grid-cols-4 gap-6 text-center mb-6">
                <div>
                  <div className="text-3xl font-bold text-orange-500">{heatTreatment.effectiveness}</div>
                  <div className="text-sm text-brand-black/70">Kill Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">{heatTreatment.duration}</div>
                  <div className="text-sm text-brand-black/70">Duration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">{heatTreatment.priceRange}</div>
                  <div className="text-sm text-brand-black/70">Cost Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">135-145°F</div>
                  <div className="text-sm text-brand-black/70">Treatment Temp</div>
                </div>
              </div>
              
              <p className="text-brand-black/80 mb-6">{heatTreatment.howItWorks}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">✓ Advantages</h4>
                  <ul className="space-y-2">
                    {heatTreatment.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-red-700">✗ Disadvantages</h4>
                  <ul className="space-y-2">
                    {heatTreatment.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <X size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-orange-50 p-4 border-l-4 border-orange-500">
                <strong className="text-orange-700">Best For:</strong> {heatTreatment.bestFor}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Treatment Deep Dive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Droplet className="text-blue-500" size={48} />
              <h2 className="heading-lg uppercase">Chemical Treatment</h2>
            </div>
            
            <div className="bg-brand-off p-8 border-2 border-brand-black mb-8">
              <div className="grid md:grid-cols-4 gap-6 text-center mb-6">
                <div>
                  <div className="text-3xl font-bold text-blue-500">{chemicalTreatment.effectiveness}</div>
                  <div className="text-sm text-brand-black/70">Kill Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">{chemicalTreatment.duration}</div>
                  <div className="text-sm text-brand-black/70">Duration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">{chemicalTreatment.priceRange}</div>
                  <div className="text-sm text-brand-black/70">Per Treatment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">2-4</div>
                  <div className="text-sm text-brand-black/70">Treatments Needed</div>
                </div>
              </div>
              
              <p className="text-brand-black/80 mb-6">{chemicalTreatment.howItWorks}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">✓ Advantages</h4>
                  <ul className="space-y-2">
                    {chemicalTreatment.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-red-700">✗ Disadvantages</h4>
                  <ul className="space-y-2">
                    {chemicalTreatment.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <X size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 border-l-4 border-blue-500">
                <strong className="text-blue-700">Best For:</strong> {chemicalTreatment.bestFor}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              Side-by-Side Comparison
            </h2>
            
            <div className="bg-white border-2 border-brand-black overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-black text-white">
                    <th className="p-4 text-left font-bold">Factor</th>
                    <th className="p-4 text-center font-bold">Heat Treatment</th>
                    <th className="p-4 text-center font-bold">Chemical Treatment</th>
                    <th className="p-4 text-center font-bold">Integrated (IPM)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-brand-off' : 'bg-white'}>
                      <td className="p-4 font-semibold">{row.factor}</td>
                      <td className="p-4 text-center">{row.heat}</td>
                      <td className="p-4 text-center">{row.chemical}</td>
                      <td className="p-4 text-center">{row.integrated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="py-16 md:py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto mb-6" size={64} />
            <h2 className="heading-lg uppercase mb-6">
              Integrated Pest Management (IPM) - Best of Both Worlds
            </h2>
            
            <div className="bg-white/10 p-8 mb-6">
              <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
                <div>
                  <div className="text-4xl font-bold">{integratedApproach.effectiveness}</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{integratedApproach.priceRange}</div>
                  <div className="text-sm text-white/80">Total Cost</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{integratedApproach.duration}</div>
                  <div className="text-sm text-white/80">Duration</div>
                </div>
              </div>
              
              <p className="text-lg text-white/90">{integratedApproach.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              {integratedApproach.pros.map((pro, index) => (
                <div key={index} className="flex items-start gap-2 bg-white/10 p-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </div>
              ))}
            </div>

            <Button href="/contact" size="lg" variant="secondary">
              Get Custom IPM Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Other Methods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              Other Treatment Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {otherMethods.map((method, index) => (
                <div key={index} className="border-2 border-brand-black p-6">
                  <h3 className="font-bold text-xl mb-3">{method.name}</h3>
                  <p className="text-brand-black/80 mb-4">{method.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <strong className="text-brand-black/70">Effectiveness:</strong>
                      <div className="text-brand-black">{method.effectiveness}</div>
                    </div>
                    <div>
                      <strong className="text-brand-black/70">Cost:</strong>
                      <div className="text-brand-black">{method.cost}</div>
                    </div>
                  </div>
                  <p className="text-sm text-brand-black/60 italic">{method.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl mb-6 text-center">Related Bed Bug Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/bed-bug-extermination-miami" className="p-4 border-2 border-brand-black hover:border-brand-red transition-colors bg-white">
                <h4 className="font-bold mb-2">← Back to Bed Bug Extermination</h4>
                <p className="text-sm text-brand-black/70">Complete bed bug control services</p>
              </a>
              <a href="/contact" className="p-4 bg-brand-red text-white hover:bg-red-700 transition-colors">
                <h4 className="font-bold mb-2">Get Treatment Recommendation →</h4>
                <p className="text-sm text-white/90">Free consultation & quote</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is heat treatment better than chemical for bed bugs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Heat treatment is more effective for severe infestations (95-100% kill rate in one day) and kills all life stages immediately. Chemical treatment is more affordable and provides residual protection but requires multiple treatments over 4-6 weeks. The best choice depends on infestation severity, budget, and timeline.'
                }
              },
              {
                '@type': 'Question',
                name: 'How much does bed bug heat treatment cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Bed bug heat treatment in Miami typically costs $1,500-$4,000 for a whole-home treatment, depending on home size. While more expensive upfront than chemical treatments, it eliminates the infestation in a single day with 95-100% effectiveness.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the most effective bed bug treatment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Integrated Pest Management (IPM) combining heat or steam treatment with strategic chemical applications offers the highest success rate (90-100%). This approach provides immediate elimination plus residual protection against reinfestation.'
                }
              }
            ]
          })
        }}
      />
    </>
  )
}

