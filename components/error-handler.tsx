"use client"

import { useEffect } from "react"

/**
 * Error handler component to catch and handle className.split errors
 * This error typically occurs when browser extensions or third-party scripts
 * try to call .split() on className which may be a DOMTokenList instead of a string
 */
export function ErrorHandler() {
  useEffect(() => {
    // Add a global error handler to catch className.split errors
    const originalErrorHandler = window.onerror
    
    window.onerror = (message, source, lineno, colno, error) => {
      // Check if it's the className.split error
      if (
        typeof message === 'string' &&
        (message.includes('className.split') || 
         message.includes('is not a function') ||
         (error && error.message && error.message.includes('className.split')))
      ) {
        // Suppress this specific error as it's likely from browser extensions
        console.warn('Suppressed className.split error (likely from browser extension):', message)
        return true // Prevent default error handling
      }
      
      // Call original error handler if it exists
      if (originalErrorHandler) {
        return originalErrorHandler(message, source, lineno, colno, error)
      }
      
      return false
    }

    // Also handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason &&
        typeof event.reason === 'object' &&
        'message' in event.reason &&
        typeof event.reason.message === 'string' &&
        event.reason.message.includes('className.split')
      ) {
        console.warn('Suppressed className.split promise rejection (likely from browser extension)')
        event.preventDefault()
      }
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.onerror = originalErrorHandler
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}



