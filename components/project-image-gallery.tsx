"use client"

import { useState } from "react"
import { Maximize2 } from "lucide-react"
import { ImageLightbox } from "./image-lightbox"

interface ProjectImageGalleryProps {
  images: string[]
  title: string
}

export function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* Gallery Grid - Improved spacing and layout */}
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
