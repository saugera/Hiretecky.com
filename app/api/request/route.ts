import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { companyName, contactName, email, role, description, budget, timeline } = body

    if (!companyName || !contactName || !email || !role || !description || !budget || !timeline) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // In production, replace this with an email service (Resend, SendGrid, etc.)
    // For MVP, we write to a local submissions file
    const submissionsDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(submissionsDir)) {
      fs.mkdirSync(submissionsDir, { recursive: true })
    }

    const submissionsFile = path.join(submissionsDir, 'requests.json')
    let submissions: unknown[] = []
    if (fs.existsSync(submissionsFile)) {
      try {
        submissions = JSON.parse(fs.readFileSync(submissionsFile, 'utf-8'))
      } catch {
        submissions = []
      }
    }

    submissions.push({
      ...body,
      submittedAt: new Date().toISOString(),
      id: `req_${Date.now()}`,
    })

    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2))

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Request submission error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
