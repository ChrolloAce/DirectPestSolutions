import { Metadata } from 'next'
import ThankYouClient from './ThankYouClient'

export const metadata: Metadata = {
  title: 'Thank You! Request Received | Direct Pest Solutions Miami',
  description: 'Your pest control service request has been received. We will contact you shortly to schedule your free inspection. Call +1-(305) 351-6886.',
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