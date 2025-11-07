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
      <section id="manifesto" className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: '#141414' }}>
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
    <section id="manifesto" className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: '#141414' }}>
      {/* Animated Background Circles */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main text with modern animations */}
      <div className="relative h-full flex items-center justify-center z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            {/* "We transform" - Simple fade in */}
            <motion.div
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              We transform
            </motion.div>
            
            {/* Animated text lines with stagger effect */}
            <div 
              className="text-5xl md:text-7xl lg:text-8xl font-regular leading-[1.2]"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px #d1d1d1',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center'
              }}
            >
              {[
                "architectural ideas",
                "into striking",
                "3D visuals that",
                "captivate and connect",
                "with your audience."
              ].map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -100, clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    clipPath: 'inset(0 0% 0 0)',
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{
                    WebkitTextStroke: '1px #9ACD32',
                  }}
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 text-white/50 cursor-pointer"
          whileHover={{
            color: '#9ACD32',
          }}
        >
          <span className="text-sm">Scroll</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUp className="rotate-180" size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
