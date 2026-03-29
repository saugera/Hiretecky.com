export type AgentCategory =
  | 'Sales & Lead Gen'
  | 'Customer Support'
  | 'HR & Recruiting'
  | 'Marketing & Content'
  | 'Finance & Accounting'
  | 'Software Development'
  | 'Data & Analytics'
  | 'Legal & Compliance'
  | 'Operations'

export type AgentTier = 'Starter' | 'Professional' | 'Enterprise'

export interface AgentPricing {
  tier: AgentTier
  price: number
  unit: 'per month' | 'per task' | 'per hour'
  features: string[]
}

export interface Agent {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  category: AgentCategory
  capabilities: string[]
  useCases: string[]
  integrations: string[]
  pricing: AgentPricing[]
  rating: number
  reviewCount: number
  companiesUsing: number
  badge?: 'Popular' | 'New' | 'Featured'
  icon: string
  color: string
}

export interface RequestFormData {
  companyName: string
  contactName: string
  email: string
  phone?: string
  role: string
  description: string
  budget: string
  timeline: string
  agentType?: string
}
