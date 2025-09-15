'use client'

import React from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en'
    setLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-20 right-4 md:bottom-4 md:right-4 z-50 bg-brand-blue text-brand-white border-2 border-brand-black rounded-none p-3 shadow-lg hover:bg-brand-blue2 transition-colors flex items-center gap-2"
      aria-label={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <Globe size={20} />
      <span className="font-bold text-sm">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  )
}
