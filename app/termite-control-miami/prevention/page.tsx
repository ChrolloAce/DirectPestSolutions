import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Phone, Shield, Droplets, Home, Trees, CheckCircle, AlertTriangle } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Termite Prevention Miami | How to Prevent Termites | Direct Pest Solutions',
  description: 'Effective termite prevention strategies for Miami homes. Learn how to protect your property from termite infestations with expert tips from licensed professionals.',
  keywords: 'termite prevention Miami, how to prevent termites, termite protection Miami, prevent termite infestation, termite prevention methods, Miami termite prevention tips, stop termites before they start',
  authors: [{ name: 'Direct Pest Solutions' }],
  openGraph: {
    title: 'Termite Prevention Miami | Protect Your Home from Termites',
    description: 'Complete guide to termite prevention for Miami homeowners. Expert tips, preventive treatments, and maintenance strategies.',
    type: 'article',
    url: 'https://directpestsolutions.com/termite-control-miami/prevention',
  },
  alternates: {
    canonical: 'https://directpestsolutions.com/termite-control-miami/prevention',
  },
}

export default function TermitePreventionPage() {
  const preventionTips = [
    {
      icon: <Droplets size={32} />,
      title: 'Eliminate Moisture',
      tips: [
        'Fix leaky faucets, pipes, and AC units immediately',
        'Ensure proper drainage away from foundation',
        'Use dehumidifiers in crawl spaces and basements',
        'Repair roof leaks and clean gutters regularly',
        'Grade soil to slope away from foundation'
      ]
    },
    {
      icon: <Trees size={32} />,
      title: 'Remove Wood-to-Soil Contact',
      tips: [
        'Keep mulch, wood chips 6+ inches from foundation',
        'Store firewood 20+ feet from house, elevated off ground',
        'Remove tree stumps, dead trees, and wood debris',
        'Eliminate wooden fence posts touching ground',
        'Replace damaged wooden siding promptly'
      ]
    },
    {
      icon: <Home size={32} />,
      title: 'Seal Entry Points',
      tips: [
        'Caulk cracks in foundation and walls',
        'Install mesh screens on vents and openings',
        'Seal gaps around pipes, wires, and utilities',
        'Repair damaged weather stripping on doors',
        'Fill expansion joints with sand or sealant'
      ]
    },
    {
      icon: <Shield size={32} />,
      title: 'Professional Barriers',
      tips: [
        'Install liquid termiticide barrier treatment',
        'Use termite-resistant building materials',
        'Apply borate treatments to exposed wood',
        'Install physical barriers during construction',
        'Maintain annual professional inspections'
      ]
    }
  ]

  const miamiFacts = [
    {
      fact: 'Year-Round Threat',
      detail: 'Miami\'s warm, humid climate allows termites to remain active 365 days/year—unlike northern climates with dormant periods.'
    },
    {
      fact: 'High Risk Area',
      detail: 'South Florida has the highest termite activity in the United States, with both subterranean and drywood species.'
    },
    {
      fact: 'Hidden Damage',
      detail: 'Termites can cause $3,000-$8,000+ in damage before homeowners notice. Prevention is far cheaper than treatment.'
    }
  ]

  const diyVsPro = {
    diy: [
      { item: 'Moisture control', recommended: true },
      { item: 'Proper landscaping', recommended: true },
      { item: 'Wood removal', recommended: true },
      { item: 'Regular inspections', recommended: true },
      { item: 'Chemical barriers', recommended: false },
      { item: 'Baiting systems', recommended: false }
    ],
    pro: [
      { item: 'Liquid termiticide barriers', benefit: '5-10 year protection' },
      { item: 'Professional baiting systems', benefit: 'Colony elimination' },
      { item: 'Comprehensive inspections', benefit: 'Early detection' },
      { item: 'Treatment warranties', benefit: 'Financial protection' }
    ]
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-brand-black/10">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Termite Control', href: '/termite-control-miami' },
              { label: 'Prevention' }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red to-red-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto mb-6" size={64} />
            <h1 className="heading-xl uppercase mb-6">
              How to Prevent Termites in Miami
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Protect your Miami home from termite damage before it starts. Expert prevention strategies proven effective in South Florida's climate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" size="lg" variant="secondary">
                Get Prevention Plan
              </Button>
              <Button href="tel:+13053516886" size="lg" variant="primary" className="bg-white !text-brand-red hover:bg-gray-100">
                <Phone className="inline-block mr-2" size={20} />
                Call +1-(305) 351-6886
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Prevention Matters in Miami */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              Why Termite Prevention is Critical in Miami
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {miamiFacts.map((item, index) => (
                <div key={index} className="bg-brand-off p-6 border-l-4 border-brand-red">
                  <h3 className="font-bold text-xl mb-3 text-brand-red">{item.fact}</h3>
                  <p className="text-brand-black/80">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-brand-black/80 mb-4">
                <strong>Miami's tropical climate creates the perfect environment for termites.</strong> Unlike many parts of the country where termites are seasonal, South Florida termites are active year-round, threatening homes 365 days a year.
              </p>
              <p className="text-lg text-brand-black/80">
                Prevention is your first line of defense. A combination of <strong>proper maintenance, strategic barriers, and professional monitoring</strong> can keep your home termite-free and save thousands in potential damage costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-4">
              Proven Termite Prevention Strategies
            </h2>
            <p className="text-center text-brand-black/70 mb-12 max-w-3xl mx-auto">
              Follow these four pillars of termite prevention to protect your Miami home.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {preventionTips.map((category, index) => (
                <div key={index} className="bg-white p-6 border-2 border-brand-black">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-brand-red">{category.icon}</div>
                    <h3 className="font-bold text-2xl">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2">
                        <CheckCircle size={20} className="text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="text-brand-black/80">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              DIY Prevention vs Professional Protection
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* DIY Methods */}
              <div className="border-2 border-brand-black p-6">
                <h3 className="font-bold text-2xl mb-6 text-center">DIY Maintenance</h3>
                <div className="space-y-4">
                  {diyVsPro.diy.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-brand-black/80">{item.item}</span>
                      {item.recommended ? (
                        <span className="bg-green-100 text-green-800 px-3 py-1 text-sm font-semibold">✓ Recommended</span>
                      ) : (
                        <span className="bg-red-100 text-red-800 px-3 py-1 text-sm font-semibold">✗ Not Advised</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-brand-black/60 mt-6 italic">
                  DIY methods work best for maintaining a termite-unfriendly environment, but can't replace professional protection.
                </p>
              </div>

              {/* Professional Methods */}
              <div className="border-2 border-brand-red p-6 bg-brand-red/5">
                <h3 className="font-bold text-2xl mb-6 text-center text-brand-red">Professional Protection</h3>
                <div className="space-y-4">
                  {diyVsPro.pro.map((item, index) => (
                    <div key={index} className="bg-white p-4 border-l-4 border-brand-red">
                      <div className="font-semibold text-brand-black mb-1">{item.item}</div>
                      <div className="text-sm text-brand-black/70">{item.benefit}</div>
                    </div>
                  ))}
                </div>
                <Button href="/contact" className="w-full mt-6" size="lg">
                  Get Professional Protection Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Prevention Timeline */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              Annual Prevention Maintenance Schedule
            </h2>
            
            <div className="space-y-6">
              {[
                { season: 'Spring (Mar-May)', tasks: 'Check for swarmers, inspect foundation, clean gutters, professional inspection' },
                { season: 'Summer (Jun-Aug)', tasks: 'Monitor moisture levels, check AC drainage, trim vegetation, inspect wood piles' },
                { season: 'Fall (Sep-Nov)', tasks: 'Seal cracks before rain season, check roof for leaks, remove dead wood' },
                { season: 'Winter (Dec-Feb)', tasks: 'Indoor inspection, check attic ventilation, review treatment effectiveness' }
              ].map((period, index) => (
                <div key={index} className="bg-white p-6 border-l-4 border-brand-red flex items-start gap-4">
                  <div className="bg-brand-red text-white w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{period.season}</h4>
                    <p className="text-brand-black/70">{period.tasks}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-6 border-2 border-brand-red">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-brand-red flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">🔍 Professional Inspections Are Key</h4>
                  <p className="text-brand-black/80">
                    Even with diligent DIY maintenance, annual professional inspections are crucial. Trained technicians can detect early signs of termite activity that homeowners often miss, saving thousands in potential damage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-red text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg uppercase mb-6">
              Start Protecting Your Home Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Combine these prevention strategies with professional protection for complete peace of mind. Free inspections available.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" size="lg" variant="secondary">
                Schedule Free Inspection
              </Button>
              <Button href="/termite-control-miami" size="lg" variant="primary" className="bg-white !text-brand-red hover:bg-gray-100">
                View All Termite Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl mb-6 text-center">Related Termite Control Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/termite-control-miami" className="p-4 border-2 border-brand-black hover:border-brand-red transition-colors">
                <h4 className="font-bold mb-2">← Back to Termite Control Miami</h4>
                <p className="text-sm text-brand-black/70">Complete termite control services & information</p>
              </a>
              <a href="/termite-control-miami/damage-signs" className="p-4 border-2 border-brand-black hover:border-brand-red transition-colors">
                <h4 className="font-bold mb-2">Signs of Termite Damage →</h4>
                <p className="text-sm text-brand-black/70">Identify termite problems early</p>
              </a>
              <a href="/termite-control-miami/treatment-cost" className="p-4 border-2 border-brand-black hover:border-brand-red transition-colors">
                <h4 className="font-bold mb-2">Treatment Cost Guide →</h4>
                <p className="text-sm text-brand-black/70">Termite treatment pricing for Miami</p>
              </a>
              <a href="/contact" className="p-4 bg-brand-red text-white hover:bg-red-700 transition-colors">
                <h4 className="font-bold mb-2">Get Prevention Plan →</h4>
                <p className="text-sm text-white/90">Custom prevention strategy for your home</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Prevent Termites in Miami: Complete Guide',
            description: 'Effective termite prevention strategies for Miami homes including moisture control, wood removal, barriers, and professional protection methods.',
            author: {
              '@type': 'Organization',
              name: 'Direct Pest Solutions'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Direct Pest Solutions',
              logo: {
                '@type': 'ImageObject',
                url: 'https://directpestsolutions.com/images/direct-pest-solutions-logo.png'
              }
            }
          })
        }}
      />
    </>
  )
}

