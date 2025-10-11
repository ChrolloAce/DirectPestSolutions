import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Phone, DollarSign, Home, Building, ShieldCheck, TrendingUp } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Termite Treatment Cost Miami | Pricing Guide 2025 | Direct Pest Solutions',
  description: 'How much does termite treatment cost in Miami? Complete pricing guide covering inspection, treatment, and prevention costs. Free estimates available. Licensed & insured.',
  keywords: 'termite treatment cost Miami, termite control cost, termite inspection price Miami, termite extermination cost, how much termite treatment, termite control pricing Miami, affordable termite treatment',
  authors: [{ name: 'Direct Pest Solutions' }],
  openGraph: {
    title: 'Termite Treatment Cost Miami | Complete Pricing Guide',
    description: 'Transparent termite treatment pricing for Miami homes. Learn what affects costs and get a free estimate from licensed professionals.',
    type: 'article',
    url: 'https://directpestsolutions.com/termite-control-miami/treatment-cost',
  },
  alternates: {
    canonical: 'https://directpestsolutions.com/termite-control-miami/treatment-cost',
  },
}

export default function TermiteTreatmentCostPage() {
  const costFactors = [
    {
      icon: <Home size={32} />,
      title: 'Property Size',
      description: 'Larger homes require more material and labor. Average Miami home (1,500-2,500 sq ft) ranges $1,200-$2,500.',
    },
    {
      icon: <Building size={32} />,
      title: 'Infestation Severity',
      description: 'Minor infestations cost less than extensive damage. Early detection saves money on treatment.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Treatment Method',
      description: 'Liquid barriers ($1,200-$2,500), baiting systems ($1,500-$3,500), fumigation ($2,000-$5,000+)',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Termite Type',
      description: 'Subterranean termites (most common) vs drywood termites affect treatment approach and cost.',
    },
  ]

  const treatmentOptions = [
    {
      name: 'Liquid Barrier Treatment',
      priceRange: '$1,200 - $2,500',
      description: 'Chemical barrier around foundation perimeter. Effective for subterranean termites. Lasts 5-10 years with warranty.',
      bestFor: 'Most Miami homes, preventive & active infestations',
    },
    {
      name: 'Baiting System',
      priceRange: '$1,500 - $3,500',
      description: 'Underground bait stations around property. Monitors and eliminates colonies. Requires ongoing monitoring.',
      bestFor: 'Environmentally sensitive areas, ongoing prevention',
    },
    {
      name: 'Fumigation (Tenting)',
      priceRange: '$2,000 - $5,000+',
      description: 'Whole-home fumigation for drywood termites. Requires 2-3 days out of home. Most comprehensive solution.',
      bestFor: 'Severe drywood termite infestations',
    },
    {
      name: 'Spot Treatment',
      priceRange: '$500 - $1,200',
      description: 'Localized treatment for small, accessible infestations. Foam or injection into affected wood.',
      bestFor: 'Minor, isolated drywood termite activity',
    },
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
              { label: 'Treatment Cost' }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red to-red-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <DollarSign className="mx-auto mb-6" size={64} />
            <h1 className="heading-xl uppercase mb-6">
              Termite Treatment Cost in Miami
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Transparent pricing guide for Miami homeowners. Learn what affects termite treatment costs and get a free, no-obligation estimate from licensed professionals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button as="a" href="/contact" size="lg" variant="secondary">
                Get Free Estimate
              </Button>
              <Button as="a" href="tel:+13053516886" size="lg" variant="primary" className="bg-white !text-brand-red hover:bg-gray-100">
                <Phone className="inline-block mr-2" size={20} />
                Call +1-(305) 351-6886
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Average Cost Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              Average Termite Treatment Costs in Miami
            </h2>
            
            <div className="bg-brand-off p-8 border-l-4 border-brand-red mb-12">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-red mb-2">$1,200 - $2,500</div>
                  <p className="text-sm text-brand-black/70">Average Treatment</p>
                  <p className="text-xs text-brand-black/60 mt-1">Most common for typical Miami homes</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-red mb-2">$300 - $500</div>
                  <p className="text-sm text-brand-black/70">Inspection Cost</p>
                  <p className="text-xs text-brand-black/60 mt-1">Often FREE with treatment</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-red mb-2">5-10 Years</div>
                  <p className="text-sm text-brand-black/70">Treatment Duration</p>
                  <p className="text-xs text-brand-black/60 mt-1">With warranty protection</p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-brand-black/80 mb-4">
                <strong>The average cost for professional termite treatment in Miami ranges from $1,200 to $2,500</strong> for a typical single-family home. However, costs vary significantly based on several factors including property size, infestation severity, treatment method, and termite species.
              </p>
              <p className="text-lg text-brand-black/80">
                In South Florida's climate, termites are a year-round threat. Investing in professional treatment protects your home's structural integrity and can <strong>save tens of thousands in repair costs</strong>. Most treatments include warranties and ongoing monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-4">
              What Affects Termite Treatment Cost?
            </h2>
            <p className="text-center text-brand-black/70 mb-12 max-w-3xl mx-auto">
              Understanding these factors helps you budget accurately and choose the right treatment for your Miami property.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {costFactors.map((factor, index) => (
                <div key={index} className="bg-white p-6 border-2 border-brand-black">
                  <div className="text-brand-red mb-4">{factor.icon}</div>
                  <h3 className="font-bold text-xl mb-3">{factor.title}</h3>
                  <p className="text-brand-black/70">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options & Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12">
              Termite Treatment Methods & Costs
            </h2>
            
            <div className="grid gap-6">
              {treatmentOptions.map((option, index) => (
                <div key={index} className="border-2 border-brand-black p-6 hover:border-brand-red transition-colors">
                  <div className="md:flex md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="font-bold text-2xl">{option.name}</h3>
                        <span className="bg-brand-red text-white px-4 py-1 text-lg font-bold">
                          {option.priceRange}
                        </span>
                      </div>
                      <p className="text-brand-black/80 mb-3">{option.description}</p>
                      <p className="text-sm text-brand-black/60">
                        <strong>Best for:</strong> {option.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-brand-off p-6 border-l-4 border-brand-red">
              <h4 className="font-bold text-lg mb-3">💡 Cost-Saving Tip</h4>
              <p className="text-brand-black/80">
                <strong>Free termite inspections</strong> are often included when you proceed with treatment. Early detection is key—the sooner you treat, the less extensive (and expensive) the damage. Annual inspections cost $100-$300 but can save thousands in treatment and repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 md:py-24 bg-brand-red text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg uppercase mb-6">
              The Real Cost of NOT Treating Termites
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-5xl font-bold mb-2">$3,000</div>
                <p className="text-white/90">Average termite damage repair cost</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$8,000+</div>
                <p className="text-white/90">Severe structural damage repairs</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">20%</div>
                <p className="text-white/90">Home value loss from termite damage</p>
              </div>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Professional treatment ($1,200-$2,500) is a small investment compared to repair costs. Most homeowner insurance policies DON'T cover termite damage.
            </p>
            <Button as="a" href="/contact" size="lg" variant="secondary">
              Protect Your Investment - Get Quote
            </Button>
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
              <a href="/termite-control-miami/damage-signs" className="p-4 border-2 border-brand-black hover:border-brand-red transition-colors">
                <h4 className="font-bold mb-2">Signs of Termite Damage →</h4>
                <p className="text-sm text-brand-black/70">Identify termite problems early</p>
              </a>
              <a href="/contact" className="p-4 bg-brand-red text-white hover:bg-red-700 transition-colors">
                <h4 className="font-bold mb-2">Get Free Estimate →</h4>
                <p className="text-sm text-white/90">Custom quote for your property</p>
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
                name: 'How much does termite treatment cost in Miami?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Average termite treatment in Miami costs between $1,200 and $2,500 for a typical single-family home. Costs vary based on property size, infestation severity, treatment method, and termite species.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is termite inspection free in Miami?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Many pest control companies in Miami, including Direct Pest Solutions, offer free termite inspections when you proceed with treatment. Standard paid inspections typically cost $300-$500.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the cheapest termite treatment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Spot treatments are the most affordable option at $500-$1,200, but they only work for minor, localized infestations. Liquid barrier treatments ($1,200-$2,500) offer the best value for most homes with comprehensive coverage.'
                }
              }
            ]
          })
        }}
      />
    </>
  )
}

