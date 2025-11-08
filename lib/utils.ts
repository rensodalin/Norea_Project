import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Cloud storage base URL
const CLOUD_STORAGE_URL = 'https://pub-48d9546e38954be69a019a09247271cb.r2.dev'

/**
 * Transforms a media URL to use cloud storage if it's a local path.
 * - Absolute URLs (http/https) are left unchanged
 * - Local paths starting with '/' are prepended with cloud storage URL
 * - Placeholder paths are left unchanged
 */
export function getMediaUrl(url: string): string {
  if (!url) return url
  
  // If it's already an absolute URL, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  
  // If it's a placeholder, return as is (or you can handle it differently)
  if (url === '/placeholder.svg' || url.startsWith('/placeholder.svg')) {
    return url
  }
  
  // For local paths starting with '/', prepend cloud storage URL
  if (url.startsWith('/')) {
    // Remove leading slash and encode path segments
    const path = url.substring(1)
    const parts = path.split('/')
    const encodedPath = parts.map(part => encodeURIComponent(part)).join('/')
    return `${CLOUD_STORAGE_URL}/${encodedPath}`
  }
  
  // For relative paths without leading slash, encode and prepend
  const parts = url.split('/')
  const encodedPath = parts.map(part => encodeURIComponent(part)).join('/')
  return `${CLOUD_STORAGE_URL}/${encodedPath}`
}
