import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

    const file = path.join(dataDir, 'subscribers.json')
    let subscribers: unknown[] = []
    if (fs.existsSync(file)) {
      try { subscribers = JSON.parse(fs.readFileSync(file, 'utf-8')) } catch { subscribers = [] }
    }

    subscribers.push({ email, subscribedAt: new Date().toISOString() })
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2))

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
