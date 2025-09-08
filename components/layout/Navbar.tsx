'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { servicesNav } from '@/content/services'

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const active = pathname === href || (href !== '/' && pathname?.startsWith(href))
  return (
    <Link
      href={href}
      className={[
        'px-3 py-2 uppercase font-semibold tracking-wide border-2 border-transparent rounded-none transition-colors',
        active ? 'text-brand-black border-b-brand-gold' : 'text-brand-black/80 hover:text-brand-black hover:border-b-brand-blue'
      ].join(' ')}
    >
      {children}
    </Link>
  )
}

export function Navbar() {
  // desktop dropdown state
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // close on outside click / Esc
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!open) return
      if (!menuRef.current || !btnRef.current) return
      if (!menuRef.current.contains(e.target as Node) && !btnRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onEsc)
    return () => { 
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open])

  // mobile menu
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const pathname = usePathname()

  return (
    <>
      <nav className="fixed inset-x-0 top-0 md:top-12 z-40 bg-white border-b-2 border-brand-black">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-final.png"
              alt="All In Plumbing Solutions"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>

            {/* Services dropdown trigger */}
            <div className="relative">
              <button
                ref={btnRef}
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                onMouseEnter={() => setOpen(true)}
                className={[
                  'px-3 py-2 uppercase font-semibold tracking-wide rounded-none border-2 transition-colors',
                  open ? 'border-brand-black bg-brand-blue text-brand-black' : 'border-transparent text-brand-black/80 hover:text-brand-black hover:border-b-brand-blue'
                ].join(' ')}
              >
                Services <span className="text-xs">▾</span>
              </button>

              {/* Dropdown menu */}
              {open && (
                <div
                  ref={menuRef}
                  role="menu"
                  onMouseLeave={() => setOpen(false)}
                  className="absolute left-0 mt-2 w-72 bg-white border-2 border-brand-black shadow-card rounded-none"
                >
                  <Link
                    href="/services"
                    className="block px-4 py-3 border-b-2 border-brand-gold bg-brand-blue hover:bg-brand-blue2 text-brand-black uppercase text-sm font-semibold transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    All Services →
                  </Link>
                  <ul className="py-1">
                    {servicesNav.map(s => (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}`}
                          className="block px-4 py-2 hover:bg-brand-blue/10 text-sm transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {s.short ?? s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <NavLink href="/about">About</NavLink>
            <NavLink href="/faqs">FAQs</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            
            {/* CTA Button */}
            <Link
              href="tel:5615712995"
              className="ml-4 px-4 py-2 bg-brand-gold text-brand-black border-2 border-brand-black rounded-none font-semibold uppercase tracking-wide hover:bg-brand-gold2 transition-colors shadow-btn"
            >
              (561) 571-2995
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden px-3 py-2 border-2 border-brand-black rounded-none bg-white hover:bg-brand-blue/10 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 bg-black/50 z-30"
              onClick={() => setMobileOpen(false)}
            />
            
            {/* Mobile menu */}
            <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white border-t-2 border-brand-black overflow-y-auto">
              <Link 
                href="/" 
                className="block px-4 py-3 border-b border-black/10 uppercase font-semibold hover:bg-brand-blue/10 transition-colors" 
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {/* Services accordion */}
              <button
                className="w-full flex items-center justify-between px-4 py-3 border-b border-black/10 uppercase font-semibold hover:bg-brand-blue/10 transition-colors"
                onClick={() => setMobileServicesOpen(v => !v)}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <span className="text-xl">{mobileServicesOpen ? '−' : '+'}</span>
              </button>
              {mobileServicesOpen && (
                <div className="bg-brand-off">
                  <Link 
                    href="/services" 
                    className="block px-6 py-2 text-sm font-semibold text-brand-blue hover:text-brand-blue2" 
                    onClick={() => setMobileOpen(false)}
                  >
                    View All Services →
                  </Link>
                  {servicesNav.map(s => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="block px-6 py-2 text-sm hover:bg-brand-blue/10 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.short ?? s.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link 
                href="/about" 
                className="block px-4 py-3 border-t border-black/10 uppercase font-semibold hover:bg-brand-blue/10 transition-colors" 
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/faqs" 
                className="block px-4 py-3 border-t border-black/10 uppercase font-semibold hover:bg-brand-blue/10 transition-colors" 
                onClick={() => setMobileOpen(false)}
              >
                FAQs
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 border-t border-black/10 uppercase font-semibold hover:bg-brand-blue/10 transition-colors" 
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="p-4 border-t-2 border-brand-gold bg-brand-blue/10">
                <Link
                  href="tel:5615712995"
                  className="block w-full px-4 py-3 bg-brand-gold text-brand-black border-2 border-brand-black rounded-none font-semibold uppercase tracking-wide text-center hover:bg-brand-gold2 transition-colors shadow-btn"
                  onClick={() => setMobileOpen(false)}
                >
                  Call Now: (561) 571-2995
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  )
}