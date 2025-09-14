'use client'

import React, { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

export default function LanguageToggle() {
  const [language, setLanguage] = useState<'en' | 'es'>('en')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('language') as 'en' | 'es'
    if (savedLang) {
      setLanguage(savedLang)
      if (savedLang === 'es') {
        loadGoogleTranslate()
      }
    }
    setIsLoaded(true)
  }, [])

  const loadGoogleTranslate = () => {
    // Add Google Translate script if not already added
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(script)

      // Define the callback function
      ;(window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'es',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        )
      }
    }
  }

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)

    if (newLang === 'es') {
      loadGoogleTranslate()
      // Trigger translation
      setTimeout(() => {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
        if (selectElement) {
          selectElement.value = 'es'
          selectElement.dispatchEvent(new Event('change'))
        }
      }, 1000)
    } else {
      // Reload page to reset to English
      window.location.reload()
    }
  }

  if (!isLoaded) return null

  return (
    <>
      <button
        onClick={toggleLanguage}
        className="fixed bottom-20 right-4 md:bottom-4 md:right-4 z-50 bg-brand-yellow text-brand-black border-2 border-brand-black rounded-none p-3 shadow-lg hover:bg-brand-yellow2 transition-colors flex items-center gap-2"
        aria-label={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      >
        <Globe size={20} />
        <span className="font-bold text-sm">
          {language === 'en' ? 'ES' : 'EN'}
        </span>
      </button>
      
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      {/* Hide Google Translate banner */}
      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .skiptranslate {
          display: none !important;
        }
      `}</style>
    </>
  )
}
