import type { MetadataRoute } from 'next'
import { agents } from '@/lib/agents'
import { services } from '@/lib/services'
import { solutions } from '@/lib/solutions'
import { absoluteUrl, staticRoutes } from '@/lib/site'

const blogSlugs = [
  'replace-sdr-with-ai-agent',
  'ai-customer-support-roi',
  'how-to-build-business-case-ai-agents',
  'ai-agents-vs-rpa',
  'ai-recruiting-bias',
  '2026-ai-agent-playbook',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))

  const agentEntries: MetadataRoute.Sitemap = agents.map((agent) => ({
    url: absoluteUrl(`/agents/${agent.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  const solutionEntries: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: absoluteUrl(`/solutions/${solution.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: absoluteUrl(`/blog/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    ...staticEntries,
    ...agentEntries,
    ...serviceEntries,
    ...solutionEntries,
    ...blogEntries,
  ]
}
