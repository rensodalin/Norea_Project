"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import dynamic from "next/dynamic"

const Silk = dynamic(() => import("@appletosolutions/reactbits").then((mod) => mod.Silk), { ssr: false })

export function AnimatedTextSection() {
  // Split text into words for staggered animation
  const text =
    "We transform architectural ideas into striking 3D visuals that captivate and connect with your audience."
  const words = text.split(" ")

  return (
    <section id="manifesto" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]} style={{ background: "transparent" }}>
          <Suspense fallback={null}>
            <Silk speed={8.1} scale={1.1} noiseIntensity={7.3} rotation={2.64} color="#4169E1" />
          </Suspense>
        </Canvas>
      </div>

      {/* Green glow effect */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="absolute w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Overlapping circles */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
          <div className="absolute w-[600px] h-[600px] border border-green-500/20 rounded-full -translate-x-32" />
          <div className="absolute w-[600px] h-[600px] border border-green-500/20 rounded-full translate-x-32" />
        </div>
      </div>

      {/* Animated text */}
      <div className="relative h-full flex items-center justify-center z-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => {
              // Determine the style for each word
              let className = ""
              if (index === 0) {
                // "We" - solid white
                className = "text-white"
              } else if (index === 1) {
                // "transform" - gradient from white to green
                className = "bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent"
              } else {
                // Rest - outlined text
                className = "text-transparent"
                return (
                  <motion.span
                    key={index}
                    className={`inline-block mr-3 ${className}`}
                    style={{
                      WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)",
                      textStroke: "1.5px rgba(255, 255, 255, 0.3)",
                    }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                )
              }

              return (
                <motion.span
                  key={index}
                  className={`inline-block mr-3 ${className}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
              )
            })}
          </motion.h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <button
          onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          className="w-16 h-16 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Scroll to work section"
        >
          <ArrowDown className="text-white" size={24} />
        </button>
      </motion.div>
    </section>
  )
}
