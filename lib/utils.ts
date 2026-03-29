import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const colorMap: Record<string, string> = {
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  violet: 'bg-violet-50 text-violet-700 border-violet-200',
  pink: 'bg-pink-50 text-pink-700 border-pink-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  slate: 'bg-slate-50 text-slate-700 border-slate-200',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
}

export const colorAccentMap: Record<string, string> = {
  indigo: 'bg-indigo-600',
  blue: 'bg-blue-600',
  violet: 'bg-violet-600',
  pink: 'bg-pink-600',
  emerald: 'bg-emerald-600',
  slate: 'bg-slate-600',
  cyan: 'bg-cyan-600',
  amber: 'bg-amber-600',
}
