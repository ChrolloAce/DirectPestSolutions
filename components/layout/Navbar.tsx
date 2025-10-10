'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      dropdown: [
        { label: 'General Pest Control', href: '/pest-control-miami' },
        { label: 'Termite Control', href: '/termite-control-miami' },
        { label: 'Bed Bug Extermination', href: '/bed-bug-extermination-miami' },
        { label: 'Mosquito Control', href: '/mosquito-control-miami' },
        { label: 'Rodent & Wildlife Control', href: '/rodent-wildlife-control-miami' },
        { label: 'Insect Control', href: '/insect-control-miami' },
        { label: 'Prevention & Inspection', href: '/prevention-inspection-miami' }
      ]
    },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Locations', href: '/locations' },
    { label: 'Contact', href: '/contact' }
  ]
  
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  
  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 56) // 56px is TopBar height
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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
      <nav className={`fixed inset-x-0 md:top-[3.5rem] z-40 bg-white border-b border-brand-black/20 shadow-sm transition-all duration-300 ${
        isScrolled ? 'top-0 md:top-0' : 'top-16 md:top-[3.5rem]'
      }`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - shows when scrolled */}
            <Link href="/" className={`md:flex items-center gap-2 transition-all duration-300 ${
              isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
            }`}>
              <Image 
                src="/images/direct-pest-solutions-logo.png" 
                alt="Direct Pest Solutions" 
                width={180} 
                height={54}
                className="h-10 w-auto"
                priority
              />
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(sub => pathname === sub.href))
                
                if (item.dropdown) {
                  return (
                    <div key={item.href} className="relative group">
                      <Link
                        href={item.href}
                        className={`
                          font-semibold uppercase text-sm tracking-wide transition-colors flex items-center gap-1
                          ${isActive 
                            ? 'text-brand-red' 
                            : 'text-brand-black hover:text-brand-red'
                          }
                        `}
                      >
                        {item.label}
                        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                      </Link>
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white border-2 border-brand-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-brand-black hover:bg-brand-red hover:text-white transition-colors border-b border-brand-black/10 last:border-b-0"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      font-semibold uppercase text-sm tracking-wide transition-colors
                      ${isActive 
                        ? 'text-brand-red' 
                        : 'text-brand-black hover:text-brand-red'
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
              <a href="tel:+13055603087" className="flex items-center gap-2 text-brand-black hover:text-brand-red transition-colors">
                <Phone size={18} />
                <span className="font-semibold">(305) 560-3087</span>
              </a>
              <Button
                as="a"
                href="/contact"
                variant="primary"
                size="sm"
              >
                Get Free Quote
              </Button>
            </div>
            
            {/* Mobile Logo and Hamburger */}
            <div className="md:hidden flex items-center justify-between w-full">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/images/direct-pest-solutions-logo.png" 
                  alt="Direct Pest Solutions - Miami's Trusted Pest Control Company" 
                  width={180} 
                  height={50}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              
              <button
                type="button"
                className="h-10 w-10 grid place-items-center rounded-none border-2 border-brand-black bg-white hover:bg-brand-red hover:text-white transition-colors text-brand-black"
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
                const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(sub => pathname === sub.href))
                
                if (item.dropdown) {
                  return (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className={`
                          block px-3 py-3 font-semibold uppercase text-sm tracking-wide transition-colors border-b border-brand-black/10
                          ${isActive 
                            ? 'text-brand-red' 
                            : 'text-brand-black hover:text-brand-red'
                          }
                        `}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-brand-black/70 hover:text-brand-red transition-colors"
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      block px-3 py-3 font-semibold uppercase text-sm tracking-wide transition-colors border-b border-brand-black/10
                      ${isActive 
                        ? 'text-brand-red' 
                        : 'text-brand-black hover:text-brand-red'
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
                <a 
                  href="tel:+13055603087" 
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-red text-white font-semibold border-2 border-brand-black"
                  onClick={closeMenu}
                >
                  <Phone size={18} />
                  Call (305) 560-3087
                </a>
                <Button
                  as="a"
                  href="/contact"
                  variant="primary"
                  fullWidth
                  onClick={closeMenu}
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
