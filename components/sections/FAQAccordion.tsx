'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

export class FAQAccordion extends React.Component {
  private faqs: FAQ[] = [
    {
      question: 'Do you offer same-day pest control services in Miami?',
      answer: 'Yes! We offer same-day emergency pest control services for urgent situations like bed bugs, rodents, wasps, or severe infestations. Our licensed technicians are available 7 days a week throughout Miami-Dade County.'
    },
    {
      question: 'Are your pest control treatments safe for children and pets?',
      answer: 'Absolutely! We use EPA-approved products and follow strict safety protocols. Most treatments are safe for re-entry within a few hours. We always provide specific safety instructions and use eco-friendly options when requested.'
    },
    {
      question: 'How often should I schedule pest control service in Miami?',
      answer: 'We recommend quarterly service for general pest control in South Florida due to our warm, humid climate. For specific issues like termites or mosquitoes, we\'ll customize a treatment schedule based on your property\'s needs.'
    },
    {
      question: 'Do you offer free pest inspections?',
      answer: 'Yes! We provide free termite inspections and complimentary pest assessments with service estimates. Our technicians will identify pest issues, entry points, and provide customized treatment recommendations.'
    },
    {
      question: 'What pests are most common in Miami homes?',
      answer: 'Miami\'s most common pests include: termites (subterranean and drywood), bed bugs, German cockroaches, ants (especially Argentine ants), mosquitoes, rodents, and spiders. We treat all of these pests effectively.'
    },
    {
      question: 'How long does a typical pest control treatment take?',
      answer: 'Most general pest treatments take 30-60 minutes depending on property size. Termite treatments or fumigation services may require several hours or days. We\'ll provide a timeline during your free inspection.'
    },
    {
      question: 'Do I need to leave my home during pest control treatment?',
      answer: 'For most treatments, you don\'t need to leave. However, for intensive treatments like fumigation or severe bed bug heat treatments, temporary relocation may be necessary. We\'ll inform you in advance and help coordinate.'
    },
    {
      question: 'What\'s included in your termite control service?',
      answer: 'Our termite service includes: comprehensive inspection with detailed report, species identification (subterranean or drywood), treatment (liquid barrier, baiting, or fumigation), warranty coverage, and annual monitoring to ensure termite-free protection.'
    },
    {
      question: 'Can you guarantee pest elimination?',
      answer: 'Yes! We guarantee our treatments. If pests return between scheduled services or during the warranty period, we return for free re-treatment. Our satisfaction guarantee ensures you\'re 100% happy with the results.'
    },
    {
      question: 'Do you service commercial properties and businesses?',
      answer: 'Yes! We provide comprehensive commercial pest control for restaurants, hotels, offices, warehouses, and other businesses. Services include preventive maintenance, IPM programs, and documentation for health inspections.'
    }
  ]
  
  render() {
    return (
      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {this.faqs.map((faq, index) => (
              <details key={index} className="group border-b border-black/10">
                <summary className="cursor-pointer flex justify-between items-center py-4 text-lg font-semibold hover:text-brand-red transition">
                  {faq.question}
                  <ChevronDown className="ml-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-4">
                  <p className="text-black/70 text-[17px] leading-7">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    )
  }
}
