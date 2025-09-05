'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'
import Button from '@/components/ui/Button'

interface NavbarProps {
  currentPath?: string
}

interface NavItem {
  label: string
  href: string
}

export class Navbar extends React.Component<NavbarProps> {
  private navItems: NavItem[] = [
    { label: 'Emergency', href: '/emergency-plumbing' },
    { label: 'Drain Cleaning', href: '/drain-cleaning' },
    { label: 'Water Heater', href: '/water-heater' },
    { label: 'Leak Detection', href: '/leak-detection' },
    { label: 'Bathroom', href: '/bathroom-plumbing' },
    { label: 'Commercial', href: '/commercial-plumbing' }
  ]
  
  render() {
    const { currentPath = '' } = this.props
    
    return (
      <nav className="bg-white border-b border-black/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Main Navigation */}
            <div className="flex items-center space-x-8">
              {this.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'font-semibold uppercase text-sm tracking-wide transition-colors hover:text-brand-blue',
                    currentPath === item.href && 'text-brand-blue border-b-2 border-brand-gold'
                  )}
                >
                  {item.label}
                </a>
              ))}
              
              {/* More Dropdown */}
              <button className="flex items-center gap-1 font-semibold uppercase text-sm tracking-wide hover:text-brand-blue">
                More <ChevronDown size={16} />
              </button>
            </div>
            
            {/* Right Side Buttons */}
            <div className="flex items-center gap-4">
              <Button 
                as="a" 
                href="/contact" 
                variant="emergency" 
                size="sm"
              >
                24/7 Emergency
              </Button>
              <Button 
                as="a" 
                href="/watch-videos" 
                variant="secondary" 
                size="sm"
              >
                Watch Videos
              </Button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
