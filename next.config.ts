import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      // Legacy service pages → new AI Agent services
      { source: '/services/mobile-app-development', destination: '/services/software-development', permanent: true },
      { source: '/services/web-designing', destination: '/services/software-development', permanent: true },
      // Legacy portfolio → about / marketing-content
      { source: '/portfolio', destination: '/about', permanent: true },
      { source: '/portfolio/social-media-marketing', destination: '/services/marketing-content', permanent: true },
      // Legacy utility pages
      { source: '/send-resume', destination: '/contact', permanent: true },
      { source: '/hello-world', destination: '/', permanent: true },
    ]
  },
};

export default nextConfig;
