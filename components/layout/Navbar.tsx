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
        { label: 'Residential Pest Control', href: '/residential-pest-control-miami' },
        { label: 'Commercial Pest Control', href: '/commercial-pest-control-miami' },
        { label: 'Termite Control', href: '/termite-control-miami' },
        { label: 'Bed Bug Extermination', href: '/bed-bug-extermination-miami' },
        { label: 'Mosquito Control', href: '/mosquito-control-miami' },
        { label: 'Wildlife Control', href: '/wildlife-control-miami' },
        { label: 'Bee Removal', href: '/bee-removal-miami' },
        { label: 'Full Property Protection', href: '/full-property-protection-miami' }
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
      setIsScrolled(window.scrollY > 80) // Show sticky nav after scrolling past TopBar
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
      {/* Static Navbar - Desktop */}
      <nav className="hidden md:block bg-white border-b border-brand-black/20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-start gap-6 h-16">
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
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white border-2 border-brand-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
            
            <Button
              as="a"
              href="/contact"
              variant="primary"
              size="sm"
              className="ml-auto"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Sticky Navbar - Appears on Scroll (Desktop Only) */}
      <nav className={`hidden md:block fixed inset-x-0 top-0 z-50 bg-white border-b border-brand-black/20 shadow-lg transition-transform duration-300 ${
        isScrolled ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo on left */}
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/images/logo.png" 
                alt="Direct Pest Solutions" 
                width={200} 
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
            
            {/* Nav items */}
            <div className="flex items-center gap-6">
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
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white border-2 border-brand-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
              
              <a href="tel:+13053516886" className="flex items-center gap-2 text-brand-black hover:text-brand-red transition-colors">
                <Phone size={18} />
                <span className="font-semibold">+1-(305) 351-6886</span>
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
          </div>
        </div>
      </nav>
      
      {/* Mobile Nav - Fixed */}
      <nav className="md:hidden fixed inset-x-0 top-0 z-40 bg-white border-b border-brand-black/20 shadow-sm">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/images/logo.png" 
                alt="Direct Pest Solutions" 
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
            className="md:hidden fixed inset-x-0 top-16 z-50 bg-white border-b-2 border-brand-black shadow-lg transform transition-transform duration-200 ease-out max-h-[calc(100vh-4rem)] overflow-y-auto"
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
                  href="tel:+13053516886" 
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-red text-white font-semibold border-2 border-brand-black"
                  onClick={closeMenu}
                >
                  <Phone size={18} />
                  Call +1-(305) 351-6886
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
