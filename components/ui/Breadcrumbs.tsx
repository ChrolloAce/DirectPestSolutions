'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export class Breadcrumbs extends React.Component<BreadcrumbsProps> {
  render() {
    const { items } = this.props
    
    return (
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center flex-wrap gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {/* Home */}
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link 
              href="/" 
              className="flex items-center gap-1 text-brand-black/70 hover:text-brand-red transition-colors"
              itemProp="item"
            >
              <Home size={16} />
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          
          {items.map((item, index) => {
            const position = index + 2
            const isLast = index === items.length - 1
            
            return (
              <React.Fragment key={index}>
                <li className="text-brand-black/40">
                  <ChevronRight size={16} />
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  {item.href && !isLast ? (
                    <Link 
                      href={item.href}
                      className="text-brand-black/70 hover:text-brand-red transition-colors"
                      itemProp="item"
                    >
                      <span itemProp="name">{item.label}</span>
                    </Link>
                  ) : (
                    <span className="text-brand-black font-semibold" itemProp="name">
                      {item.label}
                    </span>
                  )}
                  <meta itemProp="position" content={position.toString()} />
                </li>
              </React.Fragment>
            )
          })}
        </ol>
      </nav>
    )
  }
}

