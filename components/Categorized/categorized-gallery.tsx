"use client";

import { useState, useMemo } from "react";
import { Maximize2 } from "lucide-react";
import { ImageLightbox } from "../Gallery/image-lightbox";

interface CategorizedGalleryProps {
  gallery: {
    exterior?: string[];
    interior?: string[];
    aerial?: string[];
    details?: string[];
  };
  title: string;
}

export function CategorizedGallery({
  gallery,
  title,
}: CategorizedGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Collect all images from all categories into a single array
  const allImages = useMemo(() => {
    const images: string[] = [];
    if (gallery.exterior) images.push(...gallery.exterior);
    if (gallery.interior) images.push(...gallery.interior);
    if (gallery.aerial) images.push(...gallery.aerial);
    if (gallery.details) images.push(...gallery.details);
    return images;
  }, [gallery]);

  // Find the index in allImages from a category-specific index
  const getImageIndex = (
    category: "exterior" | "interior" | "aerial" | "details",
    categoryIndex: number
  ): number => {
    const categoryImages = gallery[category] || [];
    const targetImage = categoryImages[categoryIndex];
    return allImages.findIndex((img) => img === targetImage);
  };

  const openLightbox = (
    category: "exterior" | "interior" | "aerial" | "details",
    index: number
  ) => {
    const globalIndex = getImageIndex(category, index);
    setLightboxIndex(globalIndex >= 0 ? globalIndex : 0);
    setLightboxOpen(true);
  };

  const GallerySection = ({
    title: sectionTitle,
    images,
    category,
  }: {
    title: string;
    images: string[];
    category: "exterior" | "interior" | "aerial" | "details";
  }) => {
    if (!images || images.length === 0) return null;

    return (
      <div>
        <h3 className="mb-4 text-xl font-semibold text-foreground">
          {sectionTitle}
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(category, index)}
              className="relative overflow-hidden transition-all duration-300 rounded-lg cursor-pointer bg-card group hover:shadow-2xl"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} - ${sectionTitle} ${index + 1}`}
                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="p-4 rounded-full bg-primary/20 backdrop-blur-sm">
                  <Maximize2 className="text-white" size={32} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="space-y-8">
        {gallery.exterior && gallery.exterior.length > 0 && (
          <GallerySection
            title="Exterior Views"
            images={gallery.exterior}
            category="exterior"
          />
        )}

        {gallery.interior && gallery.interior.length > 0 && (
          <GallerySection
            title="Interior Spaces"
            images={gallery.interior}
            category="interior"
          />
        )}

        {gallery.aerial && gallery.aerial.length > 0 && (
          <GallerySection
            title="Aerial Views"
            images={gallery.aerial}
            category="aerial"
          />
        )}

        {gallery.details && gallery.details.length > 0 && (
          <GallerySection
            title="Design Details"
            images={gallery.details}
            category="details"
          />
        )}
      </div>

      <ImageLightbox
        images={allImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={title}
      />
    </>
  );
}
