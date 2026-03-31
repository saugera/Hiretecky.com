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
  '/blog',
  '/compare',
  '/contact',
  '/demo',
  '/faq',
  '/privacy',
  '/request',
  '/services',
  '/terms',
  '/trust',
  '/portfolio',
  '/send-resume',
  '/hello-world',
  '/services/mobile-app-development',
  '/services/web-designing',
  '/portfolio/social-media-marketing',
] as const

export function absoluteUrl(path = '') {
  if (!path || path === '/') return siteConfig.url
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
