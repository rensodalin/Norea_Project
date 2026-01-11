"use client"

import { useEffect } from "react"

/**
 * Component to fix hydration errors caused by browser extensions
 * that add attributes to the DOM before React hydrates
 */
export function HydrationFix() {
  useEffect(() => {
    // List of attributes often added by browser extensions causing hydration issues
    const extensionAttributes = ['bis_skin_checked', 'bis_size', 'bis_id']

    // Remove attributes added by browser extensions that cause hydration mismatches
    const removeExtensionAttributes = () => {
      extensionAttributes.forEach(attr => {
        const elements = document.querySelectorAll(`[${attr}]`)
        elements.forEach(el => {
          el.removeAttribute(attr)
        })
      })
    }

    // Run immediately and then again after a short delay
    removeExtensionAttributes()
    const timeoutId = setTimeout(removeExtensionAttributes, 50)
    
    // Also run on DOM mutations to catch dynamically added attributes
    const observer = new MutationObserver((mutations) => {
      // Only process if attributes were added
      const hasRelevantMutations = mutations.some(mutation => 
        mutation.type === 'attributes' && 
        extensionAttributes.includes(mutation.attributeName || '')
      )
      if (hasRelevantMutations || mutations.some(m => m.type === 'childList')) {
        removeExtensionAttributes()
      }
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: extensionAttributes,
      subtree: true,
      childList: true
    })

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])

  return null
}

