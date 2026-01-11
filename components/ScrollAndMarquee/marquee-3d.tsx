"use client";

import { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { getMediaUrl, cn } from "@/lib/utils";

interface Marquee3DProps {
  items: {
    id: string;
    title: string;
    category: string;
    image: string;
  }[];
  speed?: number;
}

export function Marquee3D({ items, speed = 0.5 }: Marquee3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerX, setCenterX] = useState(0);

  // We'll use a motion value to drive the scroll
  const scrollX = useMotionValue(0);

  // Duplicate items to create infinite effect (enough to fill screen + buffer)
  // We need 3 sets to ensure smooth looping in both directions if needed,
  // but for uni-directional, 2 sets is usually enough if we reset correctly.
  // Let's use a large enough multiplier.
  const multipliedItems = [...items, ...items, ...items, ...items];

  useAnimationFrame((time, delta) => {
    if (!containerRef.current) return;

    // Update center position in case of resize
    const rect = containerRef.current.getBoundingClientRect();
    if (centerX !== rect.width / 2) {
      setCenterX(rect.width / 2);
    }

    // Move scrollX
    let currentX = scrollX.get() - speed * delta * 0.06; // Normalize delta

    // Reset logic for infinite loop
    // We assume each item is roughly 400px + gap
    // Total width of one set
    const singleSetWidth = items.length * 450; // 400px width + 50px gap approx

    if (currentX <= -singleSetWidth) {
      currentX += singleSetWidth;
    }

    scrollX.set(currentX);
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden flex items-center perspective-1000"
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060010] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060010] to-transparent z-20 pointer-events-none" />

      <motion.div
        className="absolute flex items-center h-full left-1/2"
        style={{ x: scrollX }}
      >
        {multipliedItems.map((item, index) => (
          <MarqueeItem
            key={`${item.id}-${index}`}
            item={item}
            index={index}
            scrollX={scrollX}
            containerWidth={centerX * 2}
            totalItems={multipliedItems.length}
          />
        ))}
      </motion.div>
    </div>
  );
}

function MarqueeItem({
  item,
  index,
  scrollX,
  containerWidth,
  totalItems,
}: {
  item: any;
  index: number;
  scrollX: any;
  containerWidth: number;
  totalItems: number;
}) {
  // Item dimensions
  const itemWidth = 400;
  const gap = 50;
  const position = index * (itemWidth + gap);

  // Calculate distance from center
  // The item's absolute position is scrollX + position
  // We want the distance relative to the center of the screen.
  // Since the container is centered with left-1/2, center is at 0 relative to parent's center.

  const distance = useTransform(scrollX, (x: number) => {
    const absPos = x + position;
    // Center of the screen is 0 because we offset the parent by left-1/2
    // Actually, let's refine. The parent is left-1/2.
    // So an item at x=0 is at the center.
    return Math.abs(absPos);
  });

  // Scale based on distance
  // Center (0 distance) = 1.1 scale
  // Edge (500 distance) = 0.8 scale
  const scale = useTransform(distance, [0, 500], [1.15, 0.85]);
  const opacity = useTransform(distance, [0, 800], [1, 0.5]);
  const zIndex = useTransform(distance, [0, 500], [100, 0]);

  // 3D Rotation
  const rotateY = useTransform(scrollX, (x: number) => {
    const absPos = x + position;
    // If absPos is negative (left of center), rotate Y positive
    // If absPos is positive (right of center), rotate Y negative
    // Range -500 to 500 maps to 45deg to -45deg
    const val = (absPos / 800) * -25;
    return Math.min(Math.max(val, -25), 25);
  });

  return (
    <motion.div
      style={{
        width: itemWidth,
        x: position, // absolute positioning relative to the moving parent
        position: "absolute",
        scale,
        opacity,
        zIndex,
        rotateY,
        perspective: 1000,
      }}
      className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-white/10"
    >
      <img
        src={getMediaUrl(item.image)}
        alt={item.title}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 p-8">
        <p className="mb-2 text-sm font-medium text-primary">{item.category}</p>
        <h3 className="text-2xl font-bold leading-tight text-white">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}
