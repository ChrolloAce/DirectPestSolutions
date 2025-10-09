'use client'

import React from 'react'

interface PhotoStackProps {
  images: string[]
  alt?: string
}

export class PhotoStack extends React.Component<PhotoStackProps> {
  render() {
    const { images, alt = 'Service photos' } = this.props
    
    if (images.length === 0) return null
    
    return (
      <div className="relative h-full flex items-center justify-center">
        {images[0] && (
          <div className="relative z-10 aspect-square w-full rounded-lg border-4 border-white shadow-card rotate-[-1.5deg] overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src={images[0]}
              alt={`${alt} 1`}
            />
          </div>
        )}
        {images[1] && (
          <div className="absolute -right-6 top-8 aspect-square w-[90%] rounded-lg border-4 border-white shadow-card rotate-[1.5deg] overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src={images[1]}
              alt={`${alt} 2`}
            />
          </div>
        )}
      </div>
    )
  }
}
