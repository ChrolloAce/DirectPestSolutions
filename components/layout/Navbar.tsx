'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Emergency', href: '/24-7-emergency' },
    { label: 'Water Heaters', href: '/water-heaters' },
    { label: 'Maintenance', href: '/maintenance-programs' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' }
  ]
  
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  
  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname])
  
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  
  return (
    <>
      <nav className="fixed inset-x-0 top-0 md:top-[3.5rem] z-40 bg-white border-b-2 border-brand-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      font-semibold uppercase text-sm tracking-wide transition-colors
                      ${isActive 
                        ? 'text-brand-blue border-b-2 border-brand-red' 
                        : 'text-brand-black hover:text-brand-blue'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
            
            {/* Desktop Right Side Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                as="a"
                href="https://www.google.com/maps/place/Plomero+24%2F7/@25.782414,-80.2253934,14z/data=!4m9!1m2!2m1!1sPlomero+24%2F7!3m5!1s0x25211ebdf7fef481:0xcd6ea1ee74acd776!8m2!3d25.782414!4d-80.2253934!16s%2Fg%2F11wg50s473?entry=ttu&g_ep=EgoyMDI5MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
              >
                Leave a Review
              </Button>
              <Button
                as="a"
                href="/contact"
                variant="emergency"
                size="sm"
              >
                24/7 Emergency
              </Button>
            </div>
            
            {/* Mobile Logo and Hamburger */}
            <div className="md:hidden flex items-center justify-between w-full">
              <Link href="/" className="flex items-center gap-2">
                <img src="/images/ACLOGO.png" alt="AC Company" className="h-12 w-auto" />
              </Link>
              
              <button
                type="button"
                className="h-10 w-10 grid place-items-center rounded-none border-2 border-brand-black bg-white hover:bg-brand-red/20 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? 'true' : 'false'}
                onClick={toggleMenu}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Panel and Backdrop */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 z-40 bg-black/50" 
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Mobile Menu Panel */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            className="md:hidden fixed inset-x-0 top-16 z-50 bg-white border-b-2 border-brand-black shadow-lg transform transition-transform duration-200 ease-out"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      block px-3 py-3 font-semibold uppercase text-sm tracking-wide transition-colors border-b border-brand-black/10
                      ${isActive 
                        ? 'text-brand-blue bg-brand-red/10' 
                        : 'text-brand-black hover:bg-brand-blue/5'
                      }
                    `}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )
              })}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Button
                  as="a"
                  href="https://www.google.com/maps/place/Plomero+24%2F7/@25.782414,-80.2253934,14z/data=!4m9!1m2!2m1!1sPlomero+24%2F7!3m5!1s0x25211ebdf7fef481:0xcd6ea1ee74acd776!8m2!3d25.782414!4d-80.2253934!16s%2Fg%2F11wg50s473?entry=ttu&g_ep=EgoyMDI5MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  fullWidth
                  onClick={closeMenu}
                >
                  Leave a Review
                </Button>
                <Button
                  as="a"
                  href="/contact"
                  variant="emergency"
                  fullWidth
                  onClick={closeMenu}
                >
                  24/7 Emergency
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}