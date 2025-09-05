'use client'

import React from 'react'
import { AlertCircle, Droplets, Flame, Search, Bath, Building2, Wrench } from 'lucide-react'

interface ServiceIconProps {
  name: string
  className?: string
  size?: number
}

export class ServiceIcon extends React.Component<ServiceIconProps> {
  private getIcon() {
    const { name, className = '', size = 24 } = this.props
    
    const icons: Record<string, React.ReactNode> = {
      emergency: <AlertCircle className={className} size={size} />,
      drain: <Droplets className={className} size={size} />,
      heater: <Flame className={className} size={size} />,
      leak: <Search className={className} size={size} />,
      bathroom: <Bath className={className} size={size} />,
      building: <Building2 className={className} size={size} />,
      default: <Wrench className={className} size={size} />
    }
    
    return icons[name] || icons.default
  }
  
  render() {
    return <>{this.getIcon()}</>
  }
}
