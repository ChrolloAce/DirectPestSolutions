'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      dropdown: [
        { label: 'AC Repair', href: '/ac-repair' },
        { label: 'AC Maintenance', href: '/ac-maintenance' },
        { label: 'AC Installation', href: '/ac-installation' },
        { label: 'Commercial HVAC', href: '/commercial-hvac' },
        { label: 'Emergency AC Service', href: '/emergency-service' },
        { label: 'Air Duct Installation', href: '/duct-installation' },
        { label: 'UV Installation', href: '/uv-installation' }
      ]
    },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Locations', href: '/locations' },
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
      <nav className="fixed inset-x-0 top-0 md:top-[3.5rem] z-40 bg-black border-b border-brand-black/20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
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
                            : 'text-white hover:text-brand-blue'
                          }
                        `}
                      >
                        {item.label}
                        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                      </Link>
                      <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-brand-black/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-white hover:bg-brand-red hover:text-white transition-colors border-b border-brand-black/10 last:border-b-0"
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
                        : 'text-white hover:text-brand-blue'
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
              <a href="tel:+13055603087" className="flex items-center gap-2 text-white hover:text-brand-blue transition-colors">
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
                <img src="/images/ACLOGO.png" alt="CBE Air Services" className="h-12 w-auto" />
              </Link>
              
              <button
                type="button"
                className="h-10 w-10 grid place-items-center rounded-none border border-white/20 bg-black hover:bg-brand-red/20 transition-colors text-white"
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
            className="md:hidden fixed inset-x-0 top-16 z-50 bg-black border-b border-brand-black/20 shadow-lg transform transition-transform duration-200 ease-out"
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
                          block px-3 py-3 font-semibold uppercase text-sm tracking-wide transition-colors border-b border-white/10
                          ${isActive 
                            ? 'text-brand-red' 
                            : 'text-white hover:text-brand-blue'
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
                            className="block px-3 py-2 text-sm text-white/70 hover:text-brand-blue transition-colors"
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
                      block px-3 py-3 font-semibold uppercase text-sm tracking-wide transition-colors border-b border-white/10
                      ${isActive 
                        ? 'text-brand-red' 
                        : 'text-white hover:text-brand-blue'
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
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue text-white font-semibold rounded-none"
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