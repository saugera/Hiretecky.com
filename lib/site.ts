export const siteConfig = {
  name: 'Hiretecky',
  url: 'https://hiretecky.com',
  title: 'Hiretecky | AI Agent Services for Business Teams',
  description:
    'Hiretecky helps companies deploy AI agent services for software development, sales, customer support, recruiting, marketing, and analytics.',
  email: 'hello@hiretecky.com',
}

export const staticRoutes = [
  '',
  '/about',
  '/agents',
  '/audit',
  '/blog',
  '/case-studies',
  '/compare',
  '/contact',
  '/demo',
  '/demos',
  '/faq',
  '/portal',
  '/privacy',
  '/request',
  '/roi',
  '/services',
  '/terms',
  '/trust',
] as const

export function absoluteUrl(path = '') {
  if (!path || path === '/') return siteConfig.url
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
