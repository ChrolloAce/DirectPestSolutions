import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Phone, Search, AlertTriangle, Home, Eye, Bug } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Signs of Termite Damage Miami | How to Spot Termites | Direct Pest Solutions',
  description: 'Learn to identify termite damage in your Miami home. Recognize early warning signs including mud tubes, hollow wood, wings, and more. Free inspection available.',
  keywords: 'signs of termite damage Miami, termite damage symptoms, how to spot termites, termite infestation signs, termite damage identification, Miami termite inspection, detect termite activity',
  authors: [{ name: 'Direct Pest Solutions' }],
  openGraph: {
    title: 'Signs of Termite Damage in Miami Homes | Identification Guide',
    description: 'Complete visual guide to identifying termite damage. Learn what to look for and when to call professionals.',
    type: 'article',
    url: 'https://directpestsolutions.com/termite-control-miami/damage-signs',
  },
  alternates: {
    canonical: 'https://directpestsolutions.com/termite-control-miami/damage-signs',
  },
}

export default function TermiteDamageSignsPage() {
  const warningSign = [
    {
      icon: <Home size={32} />,
      title: 'Mud Tubes on Walls or Foundation',
      severity: 'High Alert',
      description: 'Pencil-thick mud tunnels running from soil to wood structures. Subterranean termites build these protective highways.',
      where: 'Foundation, basement walls, crawl spaces, exterior walls',
      action: 'Call immediately - active infestation'
    },
    {
      icon: <Bug size={32} />,
      title: 'Discarded Wings Near Doors/Windows',
      severity: 'High Alert',
      description: 'Piles of translucent wings left behind after swarmers (reproductive termites) shed them to start new colonies.',
      where: 'Window sills, door frames, bathtubs, sinks',
      action: 'Recent colony formation - inspect now'
    },
    {
      icon: <Home size={32} />,
      title: 'Hollow-Sounding Wood',
      severity: 'Medium Alert',
      description: 'Wood that sounds hollow when tapped or feels weak/spongy. Termites eat wood from inside out, leaving thin shell.',
      where: 'Door frames, baseboards, support beams, furniture',
      action: 'May indicate extensive damage'
    },
    {
      icon: <AlertTriangle size={32} />,
      title: 'Bubbling or Peeling Paint',
      severity: 'Medium Alert',
      description: 'Paint that appears water-damaged but no water leak present. Termite moisture/damage causes paint to bubble.',
      where: 'Walls, trim, wooden furniture',
      action: 'Investigate immediately'
    },
    {
      icon: <Search size={32} />,
      title: 'Frass (Termite Droppings)',
      severity: 'Medium Alert',
      description: 'Tiny wood-colored pellets that look like sawdust or coffee grounds. Drywood termites push these out of galleries.',
      where: 'Below exit holes, window sills, near furniture',
      action: 'Sign of active drywood termites'
    },
    {
      icon: <Eye size={32} />,
      title: 'Tight-Fitting Doors or Windows',
      severity: 'Low Alert',
      description: 'Doors/windows suddenly become difficult to open. Termite-produced moisture causes wood to warp.',
      where: 'All doors and window frames',
      action: 'Could be termites or humidity'
    }
  ]

  const inspectionAreas = [
    {
      area: 'Foundation & Exterior',
      checks: [
        'Check foundation for mud tubes (most obvious sign)',
        'Inspect siding for damage or hollow spots',
        'Look for wings near foundation vents',
        'Check wooden fence posts and deck supports',
        'Examine any wood touching soil'
      ]
    },
    {
      area: 'Crawl Space & Basement',
      checks: [
        'Look for mud tubes on walls and floor joists',
        'Tap support beams for hollow sound',
        'Check moisture levels (termites love dampness)',
        'Inspect stored wood or cardboard',
        'Look for frass piles below beams'
      ]
    },
    {
      area: 'Interior Living Spaces',
      checks: [
        'Check baseboards for damage or frass',
        'Inspect door and window frames',
        'Look for bubbling paint on walls',
        'Examine wooden furniture (especially vintage)',
        'Check attic rafters and beams'
      ]
    },
    {
      area: 'Garage & Storage',
      checks: [
        'Inspect stored boxes and paper',
        'Check wooden shelving for damage',
        'Look for wings near garage doors',
        'Examine any wood in contact with concrete',
        'Check water heater area for moisture'
      ]
    }
  ]

  const miamiTermites = [
    {
      type: 'Subterranean Termites',
      prevalence: 'Most Common (90% of Miami cases)',
      signs: 'Mud tubes, moisture damage, hollow wood',
      danger: 'Eat wood continuously, can cause severe structural damage',
      image: '🏠'
    },
    {
      type: 'Drywood Termites',
      prevalence: 'Common (Especially in coastal Miami)',
      signs: 'Frass (droppings), kick-out holes, wings',
      danger: 'Live entirely in wood, harder to detect, spread to furniture',
      image: '🪵'
    },
    {
      type: 'Formosan Termites',
      prevalence: 'Growing Threat in South Florida',
      signs: 'Large mud cartons, aggressive damage, huge colonies',
      danger: 'Most destructive species, can damage home in months',
      image: '⚠️'
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
              { label: 'Termite Control', href: '/termite-control-miami' },
              { label: 'Damage Signs' }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red to-red-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Search className="mx-auto mb-6" size={64} />
            <h1 className="heading-xl uppercase mb-6">
              Signs of Termite Damage in Miami Homes
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Learn to identify termite activity early. Recognize the warning signs and protect your home from extensive damage.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button as="a" href="/contact" size="lg" variant="secondary">
                Schedule Inspection
              </Button>
              <Button as="a" href="tel:+13053516886" size="lg" variant="primary" className="bg-white !text-brand-red hover:bg-gray-100">
                <Phone className="inline-block mr-2" size={20} />
                Call +1-(305) 351-6886
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-4">
              6 Key Signs of Termite Damage
            </h2>
            <p className="text-center text-brand-black/70 mb-12 max-w-3xl mx-auto">
              Early detection is crucial. If you spot any of these signs, contact a professional immediately for a thorough inspection.
            </p>
            
            <div className="space-y-6">
              {warningSign.map((sign, index) => (
                <div key={index} className="border-2 border-brand-black hover:border-brand-red transition-colors p-6">
                  <div className="md:flex md:gap-6">
                    <div className="text-brand-red mb-4 md:mb-0">{sign.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-bold text-2xl">{sign.title}</h3>
                        <span className={`px-3 py-1 text-sm font-bold ${
                          sign.severity === 'High Alert' 
                            ? 'bg-red-100 text-red-800' 
                            : sign.severity === 'Medium Alert'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {sign.severity}
                        </span>
                      </div>
                      <p className="text-brand-black/80 mb-3">{sign.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong className="text-brand-black/70">Where to look:</strong>
                          <p className="text-brand-black/60">{sign.where}</p>
                        </div>
                        <div>
                          <strong className="text-brand-red">Action needed:</strong>
                          <p className="text-brand-black/80">{sign.action}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-brand-red text-white p-6 text-center">
              <h4 className="font-bold text-xl mb-2">⚠️ Don't Wait - Termites Work Fast</h4>
              <p className="text-white/90 mb-4">
                A colony of 60,000 termites can consume 1 foot of 2x4 wood in just 5 months. Early detection saves thousands in repairs.
              </p>
              <Button as="a" href="/contact" variant="secondary" size="lg">
                Get Free Inspection Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Termite Types */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              Termite Types in Miami & Their Signs
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {miamiTermites.map((termite, index) => (
                <div key={index} className="bg-white p-6 border-2 border-brand-black">
                  <div className="text-5xl text-center mb-4">{termite.image}</div>
                  <h3 className="font-bold text-xl mb-2 text-center">{termite.type}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-brand-red">Prevalence:</strong>
                      <p className="text-brand-black/70">{termite.prevalence}</p>
                    </div>
                    <div>
                      <strong className="text-brand-red">Key Signs:</strong>
                      <p className="text-brand-black/70">{termite.signs}</p>
                    </div>
                    <div>
                      <strong className="text-brand-red">Danger Level:</strong>
                      <p className="text-brand-black/70">{termite.danger}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIY Inspection Guide */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-4">
              DIY Termite Inspection Checklist
            </h2>
            <p className="text-center text-brand-black/70 mb-12 max-w-3xl mx-auto">
              Perform these quarterly inspections. If you find any signs, schedule a professional inspection immediately.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {inspectionAreas.map((section, index) => (
                <div key={index} className="bg-brand-off p-6 border-l-4 border-brand-red">
                  <h3 className="font-bold text-xl mb-4">{section.area}</h3>
                  <ul className="space-y-2">
                    {section.checks.map((check, checkIndex) => (
                      <li key={checkIndex} className="flex items-start gap-2">
                        <span className="text-brand-red mt-1">□</span>
                        <span className="text-brand-black/80 text-sm">{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-6 border-2 border-brand-red">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-brand-red flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-3">Why Professional Inspections Matter</h4>
                  <p className="text-brand-black/80 mb-3">
                    While DIY inspections help catch obvious signs, <strong>80% of termite damage is hidden</strong> behind walls, in crawl spaces, or underground. Professional inspectors use:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-brand-black/70">
                    <li>• Moisture meters to detect hidden activity</li>
                    <li>• Infrared cameras for thermal imaging</li>
                    <li>• Acoustic sensors for wall detection</li>
                    <li>• Trained eyes for subtle indicators</li>
                  </ul>
                  <Button as="a" href="/contact" className="mt-4">
                    Schedule Professional Inspection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-brand-red text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              Termite Damage Timeline
            </h2>
            
            <div className="space-y-6">
              {[
                { time: '3-6 Months', stage: 'Early Infestation', damage: 'Minimal visible damage, possible mud tubes or wings. Damage often unnoticeable to homeowners.' },
                { time: '6-12 Months', stage: 'Active Colony', damage: 'Hollow wood sounds, minor structural weakening. Still repairable with moderate cost.' },
                { time: '1-2 Years', stage: 'Established Problem', damage: 'Visible damage to baseboards, door frames. Repair costs $3,000-$5,000+.' },
                { time: '3+ Years', stage: 'Severe Damage', damage: 'Major structural issues, sagging floors, wall cracks. Repairs can exceed $8,000-$15,000.' }
              ].map((phase, index) => (
                <div key={index} className="bg-white/10 p-6 border-l-4 border-white">
                  <div className="md:flex md:items-center md:justify-between md:gap-6">
                    <div className="mb-3 md:mb-0">
                      <div className="text-2xl font-bold">{phase.time}</div>
                      <div className="text-xl text-white/80">{phase.stage}</div>
                    </div>
                    <p className="text-white/90 flex-1">{phase.damage}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl text-white/90 mb-6">
                The sooner you catch termites, the less damage and lower the repair costs. Annual inspections are your best defense.
              </p>
              <Button as="a" href="/contact" size="lg" variant="secondary">
                Protect Your Home - Schedule Inspection
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
              <a href="/termite-control-miami/prevention" className="p-4 border-2 border-brand-black hover:border-brand-red transition-colors">
                <h4 className="font-bold mb-2">Termite Prevention Tips →</h4>
                <p className="text-sm text-brand-black/70">How to prevent termites in Miami homes</p>
              </a>
              <a href="/termite-control-miami/treatment-cost" className="p-4 border-2 border-brand-black hover:border-brand-red transition-colors">
                <h4 className="font-bold mb-2">Treatment Cost Guide →</h4>
                <p className="text-sm text-brand-black/70">Termite treatment pricing for Miami</p>
              </a>
              <a href="/contact" className="p-4 bg-brand-red text-white hover:bg-red-700 transition-colors">
                <h4 className="font-bold mb-2">Get Inspection →</h4>
                <p className="text-sm text-white/90">Free professional termite inspection</p>
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
                name: 'What are the first signs of termites?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The first signs of termites include mud tubes on walls or foundation, discarded wings near windows or doors, hollow-sounding wood when tapped, and small piles of frass (termite droppings) that look like sawdust or coffee grounds.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can I tell if I have termite damage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Check for hollow-sounding wood, bubbling or peeling paint, tight-fitting doors or windows, visible mud tubes, discarded termite wings, and small holes in wood with frass piles below. If you suspect damage, schedule a professional inspection immediately.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long before termites cause damage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A colony of 60,000 termites can consume 1 foot of 2x4 wood in 5 months. Visible damage typically appears within 3-8 months of initial infestation, but can take 3-8 years to cause severe structural problems depending on colony size.'
                }
              }
            ]
          })
        }}
      />
    </>
  )
}

