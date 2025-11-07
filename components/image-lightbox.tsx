"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from "lucide-react"

interface ImageLightboxProps {
  images: string[]
  initialIndex?: number
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function ImageLightbox({ images, initialIndex = 0, isOpen, onClose, title }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [zoom, setZoom] = useState(1)
  const [isZoomed, setIsZoomed] = useState(false)
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Update current index when initialIndex changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
      setZoom(1)
      setIsZoomed(false)
      setImagePosition({ x: 0, y: 0 })
    }
  }, [initialIndex, isOpen])

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setZoom(1)
    setIsZoomed(false)
    setImagePosition({ x: 0, y: 0 })
  }

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setZoom(1)
    setIsZoomed(false)
    setImagePosition({ x: 0, y: 0 })
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4))
    setIsZoomed(true)
  }

  const handleZoomOut = () => {
    const newZoom = Math.max(zoom - 0.5, 1)
    setZoom(newZoom)
    if (newZoom === 1) {
      setIsZoomed(false)
      setImagePosition({ x: 0, y: 0 })
    }
  }

  const handleResetZoom = () => {
    setZoom(1)
    setIsZoomed(false)
    setImagePosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isZoomed) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && isZoomed) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (isOpen) {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.2 : 0.2
      const newZoom = Math.max(1, Math.min(zoom + delta, 4))
      setZoom(newZoom)
      setIsZoomed(newZoom > 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
        case "+":
        case "=":
          e.preventDefault()
          handleZoomIn()
          break
        case "-":
          e.preventDefault()
          handleZoomOut()
          break
        case "0":
          e.preventDefault()
          handleResetZoom()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex, zoom])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/98 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isZoomed) {
          onClose()
        }
      }}
      onWheel={handleWheel}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50 bg-black/50 backdrop-blur-sm rounded-full p-4 hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50 bg-black/50 backdrop-blur-sm rounded-full p-4 hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Zoom Controls */}
      <div className="absolute top-6 left-6 flex gap-2 z-50">
        <button
          onClick={handleZoomIn}
          className="text-white hover:text-primary transition-colors bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
          aria-label="Zoom in"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={handleZoomOut}
          disabled={zoom <= 1}
          className="text-white hover:text-primary transition-colors bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Zoom out"
        >
          <ZoomOut size={20} />
        </button>
        <button
          onClick={handleResetZoom}
          disabled={zoom === 1}
          className="text-white hover:text-primary transition-colors bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Reset zoom"
        >
          <RotateCw size={20} />
        </button>
      </div>

      {/* Image Container */}
      <div
        className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isZoomed ? (isDragging ? "grabbing" : "grab") : "default" }}
      >
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={title ? `${title} - Image ${currentIndex + 1}` : `Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain select-none"
          style={{
            transform: `scale(${zoom}) translate(${imagePosition.x / zoom}px, ${imagePosition.y / zoom}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
          }}
          draggable={false}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            if (target.src !== '/placeholder.svg') {
              console.error('Image failed to load:', images[currentIndex])
              target.src = '/placeholder.svg'
            }
          }}
        />
      </div>

      {/* Image Counter & Info */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 z-50">
        <div className="text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
        {zoom > 1 && (
          <div className="text-xs text-gray-300 mt-1">
            {Math.round(zoom * 100)}% • Drag to pan
          </div>
        )}
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="absolute bottom-6 right-6 text-white/60 text-xs bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 z-50 hidden md:block">
        <div>← → Navigate</div>
        <div>+ - Zoom</div>
        <div>ESC Close</div>
      </div>
    </div>
  )
}



