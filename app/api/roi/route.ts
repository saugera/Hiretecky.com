import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, industry, totalHeadcount, infraMonthly } = body

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const entry = {
      email: email.trim().toLowerCase(),
      industry: industry ?? '',
      totalHeadcount: totalHeadcount ?? 0,
      infraMonthly: infraMonthly ?? 0,
      createdAt: new Date().toISOString(),
    }

    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'roi-leads.json')

    let leads: typeof entry[] = []
    try {
      const raw = await fs.readFile(filePath, 'utf8')
      leads = JSON.parse(raw)
    } catch {
      // file doesn't exist yet
    }

    leads.push(entry)
    await fs.mkdir(dataDir, { recursive: true })
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2))

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
