import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.formData()

  // TODO: push to your CRM / email / GSheet / webhook
  // Example: await fetch(process.env.WEBHOOK_URL!, { method:'POST', body: new URLSearchParams(data as any) })

  // Basic server-side validation (at least name + phone)
  const name = String(data.get('name') || '')
  const phone = String(data.get('phone') || '')
  if (!name || !phone) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  // Log the submission for now (replace with actual integration)
  console.log('New quote request:', {
    name,
    phone,
    email: data.get('email'),
    service: data.get('service'),
    address: data.get('address'),
    notes: data.get('notes'),
    timestamp: new Date().toISOString()
  })

  return NextResponse.json({ ok: true }, { status: 200 })
}
