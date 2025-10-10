import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import { Phone, CheckCircle, Shield, Clock, Award } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/Reviews'

interface PestPageProps {
  params: {
    pest: string
  }
}

// Define all pests with detailed information
const pests = {
  'termite': {
    name: 'Termite',
    scientificName: 'Isoptera',
    treatmentName: 'Termite Control & Treatment',
    image: '/images/Insects/termite.png',
    description: 'Termites are wood-destroying insects that can cause significant structural damage to homes and buildings. In Miami\'s humid climate, subterranean and drywood termites thrive year-round.',
    dangers: [
      'Structural damage to homes and buildings',
      'Costly repairs (average $3,000-$8,000)',
      'Weakened foundations and wooden structures',
      'Decreased property value'
    ],
    signs: [
      'Mud tubes on exterior walls',
      'Hollow-sounding wood',
      'Discarded wings near windows',
      'Frass (termite droppings)',
      'Bubbling or uneven paint',
      'Tight-fitting doors or windows'
    ],
    treatment: 'Our termite control includes liquid barrier treatments, baiting systems, and fumigation for drywood termites. All treatments come with warranties and ongoing monitoring.',
    prevention: [
      'Remove wood-to-soil contact',
      'Fix moisture problems and leaks',
      'Seal cracks in foundation',
      'Regular professional inspections',
      'Keep firewood away from home'
    ]
  },
  'bed-bug': {
    name: 'Bed Bug',
    scientificName: 'Cimex lectularius',
    treatmentName: 'Bed Bug Extermination',
    image: '/images/Insects/bed-bug.png',
    description: 'Bed bugs are small, blood-feeding insects that hide in mattresses, furniture, and cracks. They are notoriously difficult to eliminate and require professional treatment.',
    dangers: [
      'Itchy, painful bites',
      'Allergic reactions',
      'Sleep deprivation and anxiety',
      'Rapid infestation spread',
      'Difficult to eliminate DIY'
    ],
    signs: [
      'Small blood stains on sheets',
      'Dark spots (bed bug excrement)',
      'Live bugs in mattress seams',
      'Musty odor in bedroom',
      'Shed skins and eggs',
      'Bites in clusters or lines'
    ],
    treatment: 'We use heat treatments and chemical applications to completely eliminate bed bugs. Our multi-step process includes inspection, treatment, and follow-up visits with a guarantee.',
    prevention: [
      'Inspect used furniture before bringing home',
      'Use mattress encasements',
      'Reduce clutter in bedrooms',
      'Vacuum regularly',
      'Inspect luggage after travel'
    ]
  },
  'mosquito': {
    name: 'Mosquito',
    scientificName: 'Culicidae',
    treatmentName: 'Mosquito Control',
    image: '/images/Insects/mosquito.png',
    description: 'Mosquitoes are flying insects that feed on blood and breed in standing water. Miami\'s tropical climate makes it a prime breeding ground for multiple mosquito species year-round.',
    dangers: [
      'Zika virus transmission',
      'Dengue fever',
      'West Nile virus',
      'Chikungunya',
      'Painful, itchy bites',
      'Disrupted outdoor activities'
    ],
    signs: [
      'Buzzing sounds near ears',
      'Standing water around property',
      'Active biting at dusk/dawn',
      'Increased mosquito presence',
      'Larvae in water sources'
    ],
    treatment: 'Our mosquito control includes barrier sprays, larvicide treatments, and breeding site elimination. Monthly treatments reduce mosquito populations by up to 90%.',
    prevention: [
      'Eliminate standing water',
      'Clean gutters regularly',
      'Use screens on windows/doors',
      'Maintain swimming pools',
      'Trim overgrown vegetation'
    ]
  },
  'rodent': {
    name: 'Rodent',
    scientificName: 'Rodentia',
    treatmentName: 'Rodent Control & Removal',
    image: '/images/Insects/mouse.png',
    description: 'Rodents including rats and mice are destructive pests that contaminate food, spread disease, and cause property damage. They can squeeze through incredibly small openings.',
    dangers: [
      'Disease transmission (Hantavirus, Salmonella)',
      'Structural damage from gnawing',
      'Fire risk (chewing electrical wires)',
      'Food contamination',
      'Rapid reproduction',
      'Unpleasant odors'
    ],
    signs: [
      'Droppings in cabinets or corners',
      'Gnaw marks on food packages',
      'Scratching sounds in walls',
      'Greasy rub marks along walls',
      'Nests in hidden areas',
      'Pet behavior changes'
    ],
    treatment: 'Our rodent control includes trapping, exclusion work, and sealing entry points. We identify how rodents are entering and prevent future infestations.',
    prevention: [
      'Seal cracks and holes (1/4 inch+)',
      'Store food in sealed containers',
      'Keep property clean and clutter-free',
      'Trim tree branches away from roof',
      'Install door sweeps'
    ]
  },
  'cockroach': {
    name: 'Cockroach',
    scientificName: 'Blattodea',
    treatmentName: 'Cockroach Extermination',
    image: '/images/Insects/cockroach.png',
    description: 'Cockroaches are resilient pests that thrive in warm, humid environments. Miami has multiple species including German and American roaches that spread disease and trigger allergies.',
    dangers: [
      'Asthma and allergy triggers',
      'Food contamination',
      'Disease transmission',
      'Rapid reproduction',
      'Damage to books and fabrics',
      'Unpleasant odor'
    ],
    signs: [
      'Live or dead roaches',
      'Droppings (coffee grounds appearance)',
      'Egg cases (oothecae)',
      'Musty odor',
      'Smear marks on walls',
      'Activity at night'
    ],
    treatment: 'We use targeted gel baits, residual sprays, and IGRs (insect growth regulators) to eliminate cockroach colonies. Treatment includes cracks, crevices, and harbourage areas.',
    prevention: [
      'Keep kitchen clean and dry',
      'Store food in sealed containers',
      'Fix water leaks',
      'Seal cracks and crevices',
      'Remove cardboard boxes',
      'Take out garbage regularly'
    ]
  },
  'ant': {
    name: 'Ant',
    scientificName: 'Formicidae',
    treatmentName: 'Ant Control & Extermination',
    image: '/images/Insects/ant.png',
    description: 'Ants are social insects that form large colonies. Miami has multiple ant species including fire ants, carpenter ants, and sugar ants that invade homes and cause problems.',
    dangers: [
      'Painful fire ant stings',
      'Allergic reactions',
      'Food contamination',
      'Structural damage (carpenter ants)',
      'Electrical damage',
      'Large colonies difficult to eliminate'
    ],
    signs: [
      'Visible ant trails',
      'Small piles of dirt/sand',
      'Rustling sounds in walls',
      'Wood shavings (carpenter ants)',
      'Swarmers (winged ants)',
      'Mounds in lawn'
    ],
    treatment: 'Our ant control includes colony elimination through baiting systems and targeted treatments. We identify the ant species and treat both indoor and outdoor nests.',
    prevention: [
      'Wipe up food spills immediately',
      'Seal food in containers',
      'Seal entry points',
      'Trim vegetation away from house',
      'Fix moisture issues',
      'Remove debris from yard'
    ]
  },
  'spider': {
    name: 'Spider',
    scientificName: 'Araneae',
    treatmentName: 'Spider Control & Removal',
    image: '/images/Insects/spider.png',
    description: 'Spiders are arachnids that help control other pests but can be dangerous when venomous species like Black Widows and Brown Recluses are present in your home.',
    dangers: [
      'Venomous bites (Black Widow, Brown Recluse)',
      'Allergic reactions',
      'Fear and anxiety',
      'Unsightly webs',
      'Difficult to eliminate'
    ],
    signs: [
      'Spider webs in corners',
      'Live spiders',
      'Egg sacs',
      'Shed skins',
      'Dead insects (prey)'
    ],
    treatment: 'Our spider control includes de-webbing, residual treatments, and sealing entry points. We focus on eliminating food sources (other insects) and harbourage areas.',
    prevention: [
      'Reduce clutter',
      'Seal cracks and gaps',
      'Install screens',
      'Remove outdoor debris',
      'Control other insects',
      'Keep outdoor lights off'
    ]
  },
  'beetle': {
    name: 'Beetle',
    scientificName: 'Coleoptera',
    treatmentName: 'Beetle Control',
    image: '/images/Insects/beetle.png',
    description: 'Beetles are a diverse group of insects that include wood-boring species, carpet beetles, and pantry pests. Some species cause significant damage to structures and stored products.',
    dangers: [
      'Structural damage (wood-boring beetles)',
      'Fabric damage (carpet beetles)',
      'Food contamination (pantry beetles)',
      'Difficult to detect',
      'Expensive damage'
    ],
    signs: [
      'Small holes in wood',
      'Fine sawdust (frass)',
      'Live beetles',
      'Larvae in fabrics or food',
      'Damaged clothing or carpets'
    ],
    treatment: 'Our beetle control varies by species and includes fumigation for severe infestations, residual treatments, and removal of infested materials.',
    prevention: [
      'Inspect firewood before bringing inside',
      'Store grains in sealed containers',
      'Vacuum regularly',
      'Reduce humidity',
      'Seal cracks in wood'
    ]
  },
  'flea': {
    name: 'Flea',
    scientificName: 'Siphonaptera',
    treatmentName: 'Flea Control & Treatment',
    image: '/images/Insects/flea.png',
    description: 'Fleas are blood-feeding parasites that primarily infest pets but can also bite humans. They multiply rapidly and are difficult to eliminate without professional treatment.',
    dangers: [
      'Itchy, painful bites',
      'Disease transmission',
      'Pet discomfort and health issues',
      'Allergic reactions',
      'Rapid infestation growth',
      'Difficulty in elimination'
    ],
    signs: [
      'Pets scratching excessively',
      'Small black specks on pet bedding',
      'Bites on ankles and legs',
      'Live fleas jumping',
      'Flea dirt (dried blood)',
      'Pet hair loss'
    ],
    treatment: 'Our flea treatment includes pet-safe indoor treatments, yard treatments, and follow-up visits. We target adult fleas, larvae, and eggs throughout your property.',
    prevention: [
      'Treat pets with flea prevention',
      'Vacuum frequently',
      'Wash pet bedding weekly',
      'Keep grass cut short',
      'Limit outdoor time for pets',
      'Groom pets regularly'
    ]
  },
  'fly': {
    name: 'Fly',
    scientificName: 'Diptera',
    treatmentName: 'Fly Control',
    image: '/images/Insects/fly.png',
    description: 'Flies are flying insects that breed in decaying organic matter and spread disease through contamination. House flies and fruit flies are common Miami pests.',
    dangers: [
      'Disease transmission',
      'Food contamination',
      'Rapid reproduction',
      'Unsanitary conditions',
      'Annoyance'
    ],
    signs: [
      'Live flies indoors',
      'Maggots in trash',
      'Flies around food',
      'Buzzing sounds',
      'Fly spots on surfaces'
    ],
    treatment: 'Our fly control includes identifying breeding sites, sanitation recommendations, fly traps, and residual treatments to eliminate current populations.',
    prevention: [
      'Keep trash covered',
      'Clean up food spills',
      'Seal gaps in screens',
      'Remove overripe fruit',
      'Clean drains',
      'Store food properly'
    ]
  },
  'cricket': {
    name: 'Cricket',
    scientificName: 'Gryllidae',
    treatmentName: 'Cricket Control',
    image: '/images/Insects/cricket.png',
    description: 'Crickets are jumping insects known for their chirping sounds. While mostly harmless, large infestations can cause fabric damage and become a significant nuisance.',
    dangers: [
      'Fabric and paper damage',
      'Loud chirping disrupts sleep',
      'Plant damage (outdoors)',
      'Large populations',
      'Attract other pests'
    ],
    signs: [
      'Chirping sounds at night',
      'Live crickets indoors',
      'Damaged fabrics',
      'Cricket droppings',
      'Activity near lights'
    ],
    treatment: 'Our cricket control includes barrier treatments, crack and crevice applications, and exclusion work to prevent cricket entry into your home.',
    prevention: [
      'Seal cracks and gaps',
      'Reduce outdoor lighting',
      'Remove debris from yard',
      'Keep grass short',
      'Install door sweeps',
      'Fix moisture problems'
    ]
  },
  'centipede': {
    name: 'Centipede',
    scientificName: 'Chilopoda',
    treatmentName: 'Centipede Control',
    image: '/images/Insects/centipede.png',
    description: 'Centipedes are multi-legged arthropods that prey on other insects. While beneficial outdoors, they can be alarming indoors and some species can deliver painful bites.',
    dangers: [
      'Painful bites',
      'Allergic reactions',
      'Fear and anxiety',
      'Indicate moisture problems',
      'Presence of other pests'
    ],
    signs: [
      'Live centipedes in damp areas',
      'Presence in bathrooms',
      'Found in basements',
      'Moisture problems',
      'Other insect activity'
    ],
    treatment: 'Our centipede control focuses on reducing moisture, eliminating food sources (other insects), and applying barrier treatments around entry points.',
    prevention: [
      'Fix moisture issues',
      'Seal cracks and gaps',
      'Remove outdoor debris',
      'Control other insects',
      'Use dehumidifiers',
      'Improve ventilation'
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(pests).map((pest) => ({
    pest: pest,
  }))
}

export async function generateMetadata({ params }: PestPageProps): Promise<Metadata> {
  const pest = pests[params.pest as keyof typeof pests]
  
  if (!pest) {
    return {
      title: 'Pest Not Found | Direct Pest Solutions',
    }
  }
  
  return {
    title: `${pest.name} Control Miami | Professional ${pest.treatmentName} | Direct Pest Solutions`,
    description: `${pest.description} Professional ${pest.name.toLowerCase()} control serving Miami-Dade County. Licensed exterminators. Same-day service. Call +1-(305) 351-6886.`,
    keywords: `${pest.name.toLowerCase()} control Miami, ${pest.name.toLowerCase()} extermination Miami, ${pest.name.toLowerCase()} removal Miami, pest control Miami, exterminator Miami, ${pest.scientificName}`,
    alternates: {
      canonical: `https://directpestsolutions.com/pests/${params.pest}`,
    },
  }
}

export default function PestPage({ params }: PestPageProps) {
  const pest = pests[params.pest as keyof typeof pests]
  
  if (!pest) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-brand-black/10">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: 'Pests', href: '/services' },
              { label: pest.name }
            ]}
          />
        </div>
      </div>

      {/* Hero Section - BLACK BACKGROUND */}
      <section className="relative bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="font-heading uppercase text-4xl md:text-5xl mb-4">
                  {pest.name} Control in Miami
                </h1>
                <p className="text-lg text-white/90 mb-2 italic">
                  Scientific Name: {pest.scientificName}
                </p>
                <p className="text-xl mb-8 text-white/90">
                  {pest.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" size="lg" variant="primary">
                    Get Free Inspection
                  </Button>
                  <Button href="tel:+13053516886" variant="secondary" size="lg">
                    <Phone className="inline-block mr-2" size={20} />
                    Call +1-(305) 351-6886
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-lg p-8 shadow-2xl">
                  <Image
                    src={pest.image}
                    alt={`${pest.name} pest control in Miami`}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dangers Section - WHITE BACKGROUND */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading uppercase text-3xl md:text-4xl text-brand-black mb-8 text-center">
              Dangers of {pest.name} Infestations
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pest.dangers.map((danger, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-brand-black">
                  <Shield className="text-brand-black flex-shrink-0 mt-1" size={20} />
                  <p className="text-brand-black">{danger}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signs Section - WHITE BACKGROUND */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading uppercase text-3xl md:text-4xl text-brand-black mb-8 text-center">
              Signs of {pest.name} Infestation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pest.signs.map((sign, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 border-2 border-brand-black/10">
                  <CheckCircle className="text-brand-black flex-shrink-0 mt-1" size={20} />
                  <p className="text-brand-black">{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - BLACK BACKGROUND */}
      <WhyChooseUs />

      {/* Treatment Section - WHITE BACKGROUND */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading uppercase text-3xl md:text-4xl text-brand-black mb-6">
              Our {pest.name} Treatment Process
            </h2>
            <p className="text-lg text-brand-black/80 mb-8">
              {pest.treatment}
            </p>
            <Button href="/contact" size="lg">
              Schedule Treatment Today
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews - BLACK BACKGROUND */}
      <Reviews />

      {/* Prevention Tips - WHITE BACKGROUND */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading uppercase text-3xl md:text-4xl text-brand-black mb-8 text-center">
              {pest.name} Prevention Tips
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pest.prevention.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 border-2 border-brand-black/10">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-brand-black">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

