"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

// Helper function to encode URL properly (handles spaces and special characters)
function encodeMediaUrl(url: string): string {
  if (!url) return url
  try {
    if (url.startsWith('/')) {
      const parts = url.substring(1).split('/')
      return '/' + parts.map(part => encodeURIComponent(part)).join('/')
    }
    return url.split('/').map(part => encodeURIComponent(part)).join('/')
  } catch {
    return url
  }
}

// Collection of videos from different projects for hero background
const heroVideos = [
  "/12-HIGH RISE BUILDING/VIDEO/Clip 1.mp4",
  "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 1.mp4",
  "/16-SB TOWER/Animation/Clip 1.mp4",
  "/10-RUFER UNIVERSITY/Animation/Clip 1.mp4",
  "/13-WESTLINE UNIVERSITY/video/Clip 2.mp4",
  "/03-TRIVIENNA MIXED USE BUILDING/ANIMATION/Clip 1.mp4",
  "/04-MIXED USE BUILDING/MIXED USE BUILDING/ANIMATION/Clip 2.mp4",
]

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle video end event to play next video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      // Move to next video in the playlist
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % heroVideos.length
        return nextIndex
      })
    }

    video.addEventListener('ended', handleVideoEnd)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [currentVideoIndex])

  // Load and play the current video when index changes
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = async () => {
      try {
        video.load()
        const playPromise = video.play()
        if (playPromise !== undefined) {
          await playPromise
        }
      } catch (error) {
        console.log('Video autoplay prevented:', error)
      }
    }

    playVideo()
  }, [currentVideoIndex])

  const currentVideo = heroVideos[currentVideoIndex]
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          key={currentVideoIndex} // Force re-render when video changes
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={encodeMediaUrl(currentVideo)} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/modern-luxury-architectural-interior-with-dramatic.jpg"
            alt="Architectural visualization"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(20, 20, 20, 0.4)' }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
             ARCH<span className="text-primary">TIPSBOX</span>

          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Transforming architectural visions into photorealistic 3D visualizations
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="#work">View Our Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={() => document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown className="animate-bounce" size={24} />
        </button>
      </motion.div>
    </section>
  )
}
