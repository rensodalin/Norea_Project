"use client"

import { useState, useEffect, useRef } from "react"

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
}

export function TypewriterText({ text, speed = 30, className = "" }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (currentIndex < text.length) {
      // Variable speed for more natural typing
      const baseSpeed = speed
      const randomVariation = Math.random() * 20 - 10 // -10 to +10ms variation
      const actualSpeed = Math.max(10, baseSpeed + randomVariation)
      
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, actualSpeed)

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [currentIndex, text, speed])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530) // Slightly longer interval for smoother blinking

    return () => clearInterval(cursorInterval)
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <span className={`text-type ${className}`}>
      {displayedText}
      <span className={`text-type__cursor ${!showCursor ? 'text-type__cursor--hidden' : ''}`}>
        |
      </span>
    </span>
  )
}
