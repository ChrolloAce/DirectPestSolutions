'use client'

import React from 'react'
import Image from 'next/image'
import { Review } from '@/content/reviews'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  // Generate avatar fallback with initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <article className="relative h-full rounded-none bg-white border-2 border-brand-black shadow-card p-5 pt-8">
      {/* Google icon badge - positioned with proper spacing */}
      <div className="absolute top-0 left-4 h-10 w-10 rounded-full border-2 border-brand-black bg-white flex items-center justify-center transform -translate-y-1/2">
        <Image 
          src="/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/google-g-logo.png" 
          alt="Google Review" 
          width={20} 
          height={20}
          className="w-5 h-5"
        />
      </div>

      {/* Header with name and rating only (no avatar) */}
      <div className="flex items-center gap-3">
        <div>
          <h4 className="font-semibold text-brand-black">{review.name}</h4>
          <div className="text-sm text-yellow-400 font-bold">
            {renderStars(review.rating)}
          </div>
        </div>
      </div>

      {/* Review text */}
      <p className="mt-4 text-brand-black/80 text-[15px] leading-relaxed line-clamp-5">
        {review.text}
      </p>

      {/* Footer with date */}
      <div className="mt-4 flex items-center justify-end text-xs">
        <time dateTime={review.date} className="text-brand-black/60">
          {review.timeAgo || formatDate(review.date)}
        </time>
      </div>

      {/* Google Verified badge */}
      <div className="absolute top-5 right-5">
        <div className="inline-flex items-center gap-1">
          <Image 
            src="/images/Direct Pest Solutions _ Top Pest Control Miami & Surrounding Areas/google-g-logo.png" 
            alt="Google Verified" 
            width={16} 
            height={16}
            className="w-4 h-4"
          />
        </div>
      </div>
    </article>
  )
}
