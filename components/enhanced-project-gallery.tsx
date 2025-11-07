"use client"

import { useState, useEffect, useRef } from "react"
import { Maximize2, Grid3x3, Square } from "lucide-react"
import { ImageLightbox } from "./image-lightbox"

interface EnhancedProjectGalleryProps {
  images: string[]
  title: string
}

type ViewMode = "grid" | "fullsize"

export function EnhancedProjectGallery({ images, title }: EnhancedProjectGalleryProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const fullSizeRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Scroll animations for full-size view - smooth transitions only
  useEffect(() => {
    if (viewMode === "fullsize") {
      // Reset all images to initial state
      imageRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.remove("animate-slide-in-from-left")
          ref.style.opacity = "0"
          ref.style.transform = ""
        }
      })

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const element = entry.target as HTMLElement

              if (entry.isIntersecting) {
                // Animate in from left with smooth transition
                element.classList.add("animate-slide-in-from-left")
                element.style.opacity = "1"
                element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
              }
            })
          },
          {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
          }
        )

        imageRefs.current.forEach((ref) => {
          if (ref) observer.observe(ref)
        })

        return () => {
          imageRefs.current.forEach((ref) => {
            if (ref) observer.unobserve(ref)
          })
        }
      }, 100)
    } else {
      // Reset when switching back to grid
      imageRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.remove("animate-slide-in-from-left")
          ref.style.opacity = ""
          ref.style.transform = ""
          ref.style.transition = ""
        }
      })
    }
  }, [viewMode, images])

  return (
    <>
      {/* View Mode Toggle - More Prominent */}
      <div className="flex justify-center items-center gap-4 mb-10 py-4 border-b border-border/50">
        <span className="text-base font-medium text-foreground">View Mode:</span>
        <div className="flex gap-2 bg-secondary border border-border p-1.5 rounded-lg shadow-lg">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-6 py-2.5 rounded-md transition-all duration-300 flex items-center gap-2 font-medium ${
              viewMode === "grid"
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            <Grid3x3 size={20} />
            <span>Grid View</span>
          </button>
          <button
            onClick={() => setViewMode("fullsize")}
            className={`px-6 py-2.5 rounded-md transition-all duration-300 flex items-center gap-2 font-medium ${
              viewMode === "fullsize"
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            <Square size={20} />
            <span>Full Size</span>
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden bg-card group cursor-pointer transition-all duration-300 hover:shadow-2xl rounded-lg"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  if (target.src !== '/placeholder.svg') {
                    console.error('Image failed to load:', image)
                    target.src = '/placeholder.svg'
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4">
                  <Maximize2 className="text-white" size={32} />
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Full Size Scroll View */}
      {viewMode === "fullsize" && (
        <div ref={fullSizeRef} className="space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el
              }}
              className="w-full opacity-0"
              style={{
                transform: "translateX(-50px)",
              }}
            >
              <button
                onClick={() => openLightbox(index)}
                className="relative w-full group cursor-pointer transition-all duration-300 hover:shadow-2xl rounded-lg overflow-hidden bg-card"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    if (target.src !== '/placeholder.svg') {
                      console.error('Image failed to load:', image)
                      target.src = '/placeholder.svg'
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                      Image {index + 1} of {images.length}
                    </span>
                    <div className="bg-primary/20 backdrop-blur-sm rounded-full p-3">
                      <Maximize2 className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <ImageLightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={title}
      />
    </>
  )
}

