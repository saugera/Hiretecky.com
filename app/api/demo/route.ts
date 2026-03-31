import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, companySize, agentInterest, useCase } = body

    if (!name || !email || !company || !companySize || !agentInterest || !useCase) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    const file = path.join(dataDir, 'demos.json')
    let demos: unknown[] = []
    if (fs.existsSync(file)) {
      try { demos = JSON.parse(fs.readFileSync(file, 'utf-8')) } catch { demos = [] }
    }

    demos.push({ ...body, submittedAt: new Date().toISOString(), id: `demo_${Date.now()}` })
    fs.writeFileSync(file, JSON.stringify(demos, null, 2))

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Demo submission error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
