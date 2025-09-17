import { Metadata } from 'next'
import ThankYouClient from './ThankYouClient'

export const metadata: Metadata = {
  title: 'Thank You! Request Received | CBE Air Services',
  description: 'Your HVAC service request has been received. We will contact you shortly.',
  robots: { 
    index: false,
    follow: false 
  }
}

export default function ThankYouPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  return <ThankYouClient searchParams={searchParams} />
}