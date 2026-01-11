"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Play } from "lucide-react"
import type { Project } from "@/lib/projects-data"
import { getMediaUrl } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playPromiseRef = useRef<Promise<void> | null>(null)
  const hasVideos = project.videos && project.videos.length > 0
  // Check if image is actually a video file
  const imageIsVideo = project.image && (project.image.endsWith('.mp4') || project.image.endsWith('.avi') || project.image.endsWith('.mov') || project.image.endsWith('.webm'))
  
  // Prioritize MP4 files for better browser compatibility
  const getBestVideo = (videos: string[]) => {
    const mp4Video = videos.find(v => v.endsWith('.mp4'))
    return mp4Video || videos[0]
  }
  
  const displayVideo = hasVideos && project.videos ? getBestVideo(project.videos) : (imageIsVideo ? project.image : null)
  const displayImage = !displayVideo ? project.image : null

  // Handle video playback with proper promise handling
  useEffect(() => {
    const video = videoRef.current
    if (!video || !displayVideo) return

    // Cancel any pending play promise when source changes
    if (playPromiseRef.current) {
      playPromiseRef.current.catch(() => {})
      playPromiseRef.current = null
    }

    let isMounted = true

    const handlePlay = async () => {
      if (!isMounted || !video || !isHovered) return
      
      // Don't play if video is still loading
      if (video.readyState < 2) return
      
      // Cancel any existing play promise
      if (playPromiseRef.current) {
        playPromiseRef.current.catch(() => {})
        playPromiseRef.current = null
      }

      try {
        // Pause first to reset any pending operations
        video.pause()
        
        // Small delay to ensure any pending operations complete
        await new Promise(resolve => setTimeout(resolve, 50))
        
        if (!isMounted || !isHovered) return
        
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromiseRef.current = playPromise
          await playPromise
          playPromiseRef.current = null
        }
      } catch (error) {
        // Autoplay was prevented or interrupted, this is normal
        playPromiseRef.current = null
      }
    }

    const handleCanPlay = () => {
      if (isHovered && isMounted) {
        handlePlay()
      }
    }

    const handleLoadStart = () => {
      // Cancel any pending play when new load starts
      if (playPromiseRef.current) {
        playPromiseRef.current.catch(() => {})
        playPromiseRef.current = null
      }
      if (video) {
        video.pause()
      }
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadstart', handleLoadStart)

    // Try to play if video is already loaded and hovered
    if (video.readyState >= 2 && isHovered) {
      handlePlay()
    }

    return () => {
      isMounted = false
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadstart', handleLoadStart)
      
      // Cancel any pending play promise
      if (playPromiseRef.current) {
        playPromiseRef.current.catch(() => {})
        playPromiseRef.current = null
      }
      
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [displayVideo, isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    const video = videoRef.current
    if (video) {
      // Cancel any pending play promise
      if (playPromiseRef.current) {
        playPromiseRef.current.catch(() => {})
        playPromiseRef.current = null
      }
      video.pause()
      if (displayVideo) {
        video.currentTime = 0
      }
    }
  }

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="group relative overflow-hidden bg-card cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Project Image/Video */}
        <div className="relative overflow-hidden">
          {displayVideo ? (
            <>
              <video
                ref={videoRef}
                key={displayVideo}
                src={getMediaUrl(displayVideo)}
                className={`w-full h-auto transition-transform duration-700 object-cover ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
                muted
                loop
                playsInline
                preload="metadata"
                onError={(e) => {
                  console.error('Video failed to load:', getMediaUrl(displayVideo))
                }}
              />
              {/* Video Play Icon Indicator */}
              <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-80">
                <Play className="text-white" size={16} fill="white" />
              </div>
            </>
          ) : (
            <img
              src={displayImage ? getMediaUrl(displayImage) : "/placeholder.svg"}
              alt={project.title}
              className={`w-full h-auto transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          )}
          {/* Overlay - Lighter for better visibility */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-95" : "opacity-75"
            }`}
          />
          
          {/* Info on top left - Enhanced visibility */}
          <div className={`absolute top-4 left-4 z-10 ${displayVideo ? 'top-16' : ''}`}>
            <div className="mb-2">
              <span className="text-sm text-primary font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg">
              {project.title}
            </h3>
          </div>
        </div>


        {/* Hover indicator */}
        <div
          className={`absolute top-6 right-6 w-12 h-12 border-2 border-primary flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100 rotate-0" : "opacity-0 rotate-45"
          }`}
        >
          <span className="text-primary text-xl">→</span>
        </div>
      </div>
    </Link>
  )
}
