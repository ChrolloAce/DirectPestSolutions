'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs?: FAQ[]
  serviceName?: string
}

export function ServiceFAQ({ faqs = [], serviceName = 'Service' }: ServiceFAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Default FAQs if none provided
  const defaultFAQs: FAQ[] = [
    {
      question: 'How quickly can you respond to landscape emergencies?',
      answer: 'We offer same-day service for most landscape emergencies in Miami-Dade County. Our team is available Mon-Sat 9AM-6PM, with emergency cleanup services available.'
    },
    {
      question: 'Do you handle all types of landscaping projects?',
      answer: 'Yes! Our certified landscaping professionals handle all types of projects including lawn care, tree service, irrigation, hardscaping, commercial landscaping, and more.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We provide landscaping services throughout Miami-Dade County including Miami, Miami Beach, Sunny Isles Beach, Aventura, Coral Gables, Doral, and surrounding areas.'
    },
    {
      question: 'Do you offer financing for landscaping projects?',
      answer: 'Yes, we offer flexible financing options to help make your landscaping project more affordable. Contact us to learn about current financing plans and promotions.'
    },
    {
      question: 'How often should I maintain my landscape?',
      answer: 'We recommend regular landscape maintenance to keep your outdoor spaces healthy and beautiful. Regular care prevents issues, maintains property value, and keeps your landscape thriving year-round.'
    }
  ]

  const faqsToShow = faqs.length > 0 ? faqs : defaultFAQs

  return (
    <div className="max-w-3xl mx-auto">
      {faqsToShow.map((faq, index) => (
        <div key={index} className="mb-4 border-2 border-brand-black bg-white">
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-blue/5 transition-colors"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
            <ChevronDown 
              className={`flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              size={24}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-4 pt-2 border-t border-brand-black/10">
              <p className="text-brand-black/80">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}

// Default export for backward compatibility
export default ServiceFAQ
