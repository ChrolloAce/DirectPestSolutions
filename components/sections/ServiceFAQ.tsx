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
      question: 'How quickly can you respond to AC emergencies?',
      answer: 'We offer same-day service for most AC repairs in Miami-Dade County. Our technicians are available Mon-Sat 9AM-6PM, with emergency services available.'
    },
    {
      question: 'Do you service all AC brands?',
      answer: 'Yes! Our certified technicians are trained to repair and maintain all major AC brands including Carrier, Trane, Lennox, Rheem, Goodman, and more.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We provide AC services throughout Miami-Dade County including Miami, Miami Beach, Sunny Isles Beach, Aventura, Coral Gables, Doral, and surrounding areas.'
    },
    {
      question: 'Do you offer financing for new AC installations?',
      answer: 'Yes, we offer flexible financing options to help make your new AC system more affordable. Contact us to learn about current financing plans and promotions.'
    },
    {
      question: 'How often should I service my AC?',
      answer: 'We recommend annual AC maintenance to keep your system running efficiently and prevent breakdowns. Regular maintenance can extend your AC\'s life and lower energy bills.'
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
