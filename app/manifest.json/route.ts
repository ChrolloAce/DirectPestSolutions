import { NextResponse } from 'next/server'

export async function GET() {
  const manifest = {
    name: 'Direct Pest Solutions Miami',
    short_name: 'Direct Pest Solutions',
    description: 'Professional pest control services in Miami & Miami-Dade County. Licensed exterminators specializing in termites, bed bugs, rodents, mosquitoes & all pests. Same-day service available.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
    categories: ['business', 'services', 'pest control', 'home services'],
    scope: '/',
    lang: 'en-US',
    dir: 'ltr'
  }

  return NextResponse.json(manifest)
}

