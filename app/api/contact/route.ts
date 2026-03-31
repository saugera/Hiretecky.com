import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, reason, message } = body

    if (!name || !email || !reason || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

    const file = path.join(dataDir, 'contacts.json')
    let contacts: unknown[] = []
    if (fs.existsSync(file)) {
      try { contacts = JSON.parse(fs.readFileSync(file, 'utf-8')) } catch { contacts = [] }
    }

    contacts.push({ ...body, submittedAt: new Date().toISOString(), id: `contact_${Date.now()}` })
    fs.writeFileSync(file, JSON.stringify(contacts, null, 2))

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact submission error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
