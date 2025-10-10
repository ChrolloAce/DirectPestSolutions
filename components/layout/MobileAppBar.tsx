'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FileText, Wrench, Phone } from 'lucide-react'

export default function MobileAppBar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
    },
    {
      name: 'Services',
      href: '/services',
      icon: Wrench,
    },
    {
      name: 'Quote',
      href: '/contact',
      icon: FileText,
    },
    {
      name: 'Call Now',
      href: 'tel:3053516886',
      icon: Phone,
      isExternal: true,
    },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-brand-black">
      <nav className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          if (item.isExternal) {
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center py-2 px-3 flex-1 transition-colors"
              >
                <div
                  className={`p-1.5 rounded-none transition-colors ${
                    item.name === 'Call Now'
                      ? 'bg-brand-red text-brand-white'
                      : isActive
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-black'
                  }`}
                >
                  <Icon size={20} />
                </div>
                <span className="text-xs mt-1 font-medium text-brand-black">
                  {item.name}
                </span>
              </a>
            )
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center py-2 px-3 flex-1 transition-colors"
            >
              <div
                className={`p-1.5 rounded-none transition-colors ${
                  isActive
                    ? 'bg-brand-blue text-white'
                    : 'text-brand-black hover:bg-brand-gray'
                }`}
              >
                <Icon size={20} />
              </div>
              <span
                className={`text-xs mt-1 font-medium ${
                  isActive ? 'text-brand-blue' : 'text-brand-black'
                }`}
              >
                {item.name}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
