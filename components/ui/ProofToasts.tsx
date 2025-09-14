'use client'

import { useEffect, useRef, useState } from 'react'

type Toast = { 
  id: number
  name: string
  message: string
  startedAt: number
  duration: number
}

const REVIEWS = [
  { name: 'Maya', message: 'just left a ★★★★★ review' },
  { name: 'Carlos', message: 'rated us 5 stars!' },
  { name: 'Sarah', message: 'left a glowing review' },
  { name: 'Mike', message: 'highly recommends us!' },
  { name: 'Lisa', message: 'gave us ★★★★★' },
  { name: 'David', message: 'loves our service!' },
  { name: 'Rachel', message: 'left a 5-star review' },
  { name: 'Andy', message: 'recommends our plumbers' },
  { name: 'Jenna', message: 'rated us excellent!' },
  { name: 'Tommy', message: 'left ★★★★★ feedback' }
]

export function ProofToasts() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [dismissedIds, setDismissedIds] = useState<Set<number>>(new Set())
  const idRef = useRef(0)

  // Show a new toast every 25s
  useEffect(() => {
    const push = () => {
      const id = ++idRef.current
      // Don't show if already dismissed
      if (dismissedIds.has(id)) return
      
      const review = REVIEWS[Math.floor(Math.random() * REVIEWS.length)]
      setToasts((t) => [
        ...t,
        {
          id,
          name: review.name,
          message: review.message,
          startedAt: Date.now(),
          duration: 8000, // 8s lifetime
        },
      ])
    }
    
    // Initial toast after 8s
    const initialTimeout = setTimeout(push, 8000)
    
    // Then every 25s
    const iv = setInterval(push, 25000)
    
    return () => {
      clearTimeout(initialTimeout)
      clearInterval(iv)
    }
  }, [dismissedIds])

  // Auto remove when elapsed
  useEffect(() => {
    const iv = setInterval(() => {
      setToasts((list) =>
        list.filter((t) => Date.now() - t.startedAt < t.duration)
      )
    }, 200)
    return () => clearInterval(iv)
  }, [])

  function close(id: number) {
    setToasts((list) => list.filter((t) => t.id !== id))
    setDismissedIds((prev) => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }

  return (
    <div className="fixed left-4 bottom-4 z-[60] space-y-3">
      {toasts.map((t) => {
        const elapsed = Date.now() - t.startedAt
        const pct = Math.min(100, (elapsed / t.duration) * 100)

        return (
          <div
            key={t.id}
            className="w-[320px] bg-white border-2 border-brand-black shadow-card rounded-none animate-slideIn"
          >
            <div className="p-3">
              <div className="flex items-center gap-2">
                <div className="flex-1 text-sm text-brand-black">
                  <strong>{t.name}</strong> {t.message}
                </div>
                <button
                  onClick={() => close(t.id)}
                  className="ml-auto -mt-1 text-2xl leading-none text-black/40 hover:text-black px-1 transition"
                  aria-label="Close"
                  title="Close"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-black/10">
              <div
                className="h-1 bg-brand-gold transition-all"
                style={{ 
                  width: `${pct}%`, 
                  transition: 'width .18s linear' 
                }}
              />
            </div>
          </div>
        )
      })}
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}