"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function AnimatedTextSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="manifesto" className="relative h-screen w-full overflow-hidden bg-black">
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center">
              <div className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] text-white mb-4">
                We transform
              </div>
              <div 
                className="text-5xl md:text-7xl lg:text-8xl font-regular leading-[1.2]"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px #d1d1d1',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center'
                }}
              >
                <div>architectural ideas</div>
                <div>into striking</div>
                <div>3D visuals that</div>
                <div>captivate and connect</div>
                <div>with your audience.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="manifesto" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Green-yellow radial gradient in top-left */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-yellow-400/20 via-green-400/10 to-transparent rounded-full blur-3xl" />
      
      {/* Two faint large circles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full" />
      </div>

      {/* Main text */}
      <div className="relative h-full flex items-center justify-center z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] text-white mb-4">
              We transform
            </div>
            <div 
              className="text-5xl md:text-7xl lg:text-8xl font-regular leading-[1.2]"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px #d1d1d1',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center'
              }}
            >
              <div>architectural ideas</div>
              <div>into striking</div>
              <div>3D visuals that</div>
              <div>captivate and connect</div>
              <div>with your audience.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button - orange with upward caret */}
      <motion.div
        className="absolute bottom-8 right-8 z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-[#ff6b35] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white" size={20} />
        </button>
      </motion.div>
    </section>
  )
}
