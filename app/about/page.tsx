"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GraduationCap, Code, Lightbulb, Target, Award, Users, TrendingUp, BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { CountUp } from "@/components/count-up"

import { getMediaUrl } from "@/lib/utils"

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
  const [mounted, setMounted] = useState(false)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observers: IntersectionObserver[] = []

    sectionsRef.current.forEach((section, index) => {
      if (!section) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set([...prev, index]))
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [mounted])

  const isVisible = (index: number) => mounted && visibleSections.has(index)

  const services = [
    {
      icon: GraduationCap,
      title: "D5 Render Training",
      description: "Professional-level mastery of real-time rendering and visualization techniques."
    },
    {
      icon: Code,
      title: "Software Instruction",
      description: "Expert training in Revit, Lumion, Enscape, SketchUp, and AutoCAD."
    },
    {
      icon: Lightbulb,
      title: "Architectural Design",
      description: "Complex projects executed with precision and innovative solutions."
    },
    {
      icon: Target,
      title: "Professional Mentorship",
      description: "Guiding the next generation of designers and architects to success."
    }
  ]

  const expertise = [
    { label: "Years of Experience", value: "10+", icon: TrendingUp },
    { label: "Projects Completed", value: "100+", icon: Award },
    { label: "Students Trained", value: "500+", icon: Users },
    { label: "Software Platforms", value: "7+", icon: BookOpen }
  ]

  const values = [
    {
      title: "Excellence",
      description: "Delivering award-winning quality in every project, from concept to final render."
    },
    {
      title: "Innovation",
      description: "Cutting-edge technology and creative solutions to bring visions to life."
    },
    {
      title: "Education",
      description: "Empowering the next generation with industry-leading software proficiency."
    },
    {
      title: "Precision",
      description: "Every detail matters. Pixel-perfect visualizations that exceed expectations."
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: '#060010' }}>
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(154, 205, 50, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(154, 205, 50, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(154, 205, 50, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 h-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                >
                  {["A", "b", "o", "u", "t", " "].map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      style={{ display: 'inline-block' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 200 }}
                    style={{ color: '#9ACD32', display: 'inline-block' }}
                  >
                    Us
                  </motion.span>
                </motion.h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="mb-4"
              >
                <motion.p
                  className="text-xl md:text-2xl text-gray-300"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Architect • Educator • Innovator
                </motion.p>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-base md:text-lg text-gray-400 max-w-xl"
              >
                Transforming architectural visions into photorealistic 3D visualizations
              </motion.p>
        </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full max-h-[80vh] flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: '#9ACD32' }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Rotating Glowing Border Container */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ zIndex: 1 }}>
                    {/* Main Rotating Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        padding: '3px',
                        borderRadius: '1rem',
                        background: 'conic-gradient(from 0deg, #9ACD32, #9ACD32 25%, transparent 25%, transparent 50%, transparent 75%, #9ACD32 75%, #9ACD32)',
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* Inner background to create border effect */}
                      <div
                        className="w-full h-full rounded-2xl"
                        style={{
                          background: '#060010',
                          borderRadius: 'calc(1rem - 3px)',
                        }}
                      />
                    </motion.div>
                    
                    {/* Glowing Outer Ring */}
                    <motion.div
                      className="absolute inset-[-6px] rounded-2xl"
                      style={{
                        background: 'conic-gradient(from 0deg, rgba(154, 205, 50, 0.8), rgba(154, 205, 50, 0.4) 50%, rgba(154, 205, 50, 0.8))',
                        borderRadius: '1rem',
                        filter: 'blur(8px)',
                        pointerEvents: 'none',
                      }}
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Pulsing Outer Glow */}
                    <motion.div
                      className="absolute inset-[-16px] rounded-2xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(154, 205, 50, 0.5) 0%, transparent 70%)',
                        filter: 'blur(24px)',
                        borderRadius: '1rem',
                        pointerEvents: 'none',
                      }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.25, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  <img 
                    src="/profile/IMG_4335.JPG" 
                    alt="Bun Sambath"
                    className="relative w-full h-full object-contain rounded-2xl"
                    style={{ 
                      objectFit: 'contain',
                      objectPosition: 'center center',
                      position: 'relative',
                      zIndex: 10
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Split Layout */}
      <section 
          ref={(el) => (sectionsRef.current[0] = el)}
        className="relative min-h-screen w-full overflow-hidden"
        style={{ backgroundColor: '#060010' }}
      >
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              animate={isVisible(0) ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[600px] lg:h-[800px] rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={isVisible(0) ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#060010]/60 to-transparent" />
              </motion.div>
              <motion.img 
              src="/profile/IMG_4339.JPG" 
              alt="Bun Sambath in action"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={isVisible(0) ? { scale: 1 } : {}}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div
                className="absolute inset-0 border-2 rounded-2xl"
                style={{ borderColor: '#9ACD32' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible(0) ? { opacity: 0.3, scale: 1 } : {}}
                whileHover={{ opacity: 0.6, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible(0) ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible(0) ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="inline-block mb-4"
                >
                  <motion.span
                    className="text-sm font-semibold px-4 py-2 rounded-full inline-block"
                    style={{ backgroundColor: 'rgba(154, 205, 50, 0.1)', color: '#9ACD32' }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(154, 205, 50, 0.2)' }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    About Bun Sambath
                  </motion.span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible(0) ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                >
                  I am <motion.span
                    style={{ color: '#9ACD32' }}
                    animate={{
                      textShadow: [
                        '0 0 0px rgba(154, 205, 50, 0)',
                        '0 0 20px rgba(154, 205, 50, 0.5)',
                        '0 0 0px rgba(154, 205, 50, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Bun Sambath
                  </motion.span>
                </motion.h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                {[
                  "An architect and software instructor with more than 10 years of professional experience at the intersection of design and technology.",
                  "My career has been dedicated to two core principles: executing complex architectural projects for clients and mentoring the next generation of designers. My team and I are trusted to deliver results, translating ambitious visions into buildable realities.",
                  "As an educator, I am passionate about demystifying the industry's most powerful tools. I specialize in developing professional-level competence in a comprehensive suite of software, including D5 Render, Corona, Revit, Lumion, Enscape, SketchUp, and AutoCAD."
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isVisible(0) ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  >
                    {text.includes("10 years") ? (
                      <>
                        An architect and software instructor with more than <motion.strong
                          className="text-white"
                          animate={{
                            color: ['#ffffff', '#9ACD32', '#ffffff'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          10 years
                        </motion.strong> of professional experience at the intersection of design and technology.
                      </>
                    ) : text.includes("D5 Render") ? (
                      <>
                        As an educator, I am passionate about demystifying the industry's most powerful tools. I specialize in developing professional-level competence in a comprehensive suite of software, including <motion.strong
                          className="text-white"
                          animate={{
                            color: ['#ffffff', '#9ACD32', '#ffffff'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        >
                          D5 Render, Corona, Revit, Lumion, Enscape, SketchUp, and AutoCAD
                        </motion.strong>.
                      </>
                    ) : (
                      text
                    )}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible(0) ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
                className="pt-6 border-t border-gray-800"
              >
                <motion.div
                  className="flex items-center gap-2 text-gray-400"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#9ACD32' }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-sm">Available for consulting and training</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-24"
        style={{ backgroundColor: '#141414' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible(1) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible(1) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
            >
              Our <motion.span
                style={{ color: '#9ACD32' }}
                animate={{
                  textShadow: [
                    '0 0 0px rgba(154, 205, 50, 0)',
                    '0 0 25px rgba(154, 205, 50, 0.6)',
                    '0 0 0px rgba(154, 205, 50, 0)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Achievements
              </motion.span>
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {expertise.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                    animate={isVisible(1) ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="rounded-xl p-8 text-center border border-gray-800"
              style={{ backgroundColor: 'rgba(20, 20, 20, 0.5)' }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      borderColor: '#9ACD32',
                      boxShadow: '0 0 30px rgba(154, 205, 50, 0.3)'
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(154, 205, 50, 0.1)' }}
                        animate={{
                          boxShadow: [
                            '0 0 0px rgba(154, 205, 50, 0)',
                            '0 0 20px rgba(154, 205, 50, 0.5)',
                            '0 0 0px rgba(154, 205, 50, 0)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      >
                        <Icon size={28} style={{ color: '#9ACD32' }} />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="text-4xl md:text-5xl font-bold mb-2"
                      style={{ color: '#9ACD32' }}
                      initial={{ scale: 0 }}
                      animate={isVisible(1) ? { scale: 1 } : {}}
                      transition={{ 
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {item.value}
                    </motion.div>
                    <motion.div
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={isVisible(1) ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      {item.label}
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services/Expertise Section */}
      <section 
              ref={(el) => (sectionsRef.current[2] = el)}
        className="py-24"
        style={{ backgroundColor: '#060010' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible(2) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible(2) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
            >
              Areas of <motion.span
                style={{ color: '#9ACD32' }}
                animate={{
                  textShadow: [
                    '0 0 0px rgba(154, 205, 50, 0)',
                    '0 0 25px rgba(154, 205, 50, 0.6)',
                    '0 0 0px rgba(154, 205, 50, 0)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Expertise
              </motion.span>
            </motion.h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              Comprehensive training and professional services
            </p>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    animate={isVisible(2) ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="group rounded-xl p-8 border border-gray-800 cursor-pointer relative overflow-hidden"
                    style={{ backgroundColor: 'rgba(20, 20, 20, 0.3)' }}
                    whileHover={{ 
                      scale: 1.03,
                      borderColor: '#9ACD32',
                      backgroundColor: 'rgba(154, 205, 50, 0.05)',
                      boxShadow: '0 10px 40px rgba(154, 205, 50, 0.2)'
                    }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30"
                      style={{ backgroundColor: '#9ACD32' }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="flex items-start gap-6 relative z-10">
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="w-16 h-16 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(154, 205, 50, 0.1)' }}
                          whileHover={{ 
                            scale: 1.15,
                            rotate: 360,
                            backgroundColor: 'rgba(154, 205, 50, 0.2)'
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={32} style={{ color: '#9ACD32' }} />
                        </motion.div>
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3
                          className="text-2xl font-bold text-white mb-3"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p
                          className="text-gray-400 leading-relaxed"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                  )
                })}
              </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-24"
        style={{ backgroundColor: '#141414' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible(3) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible(3) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
            >
              Our <motion.span
                style={{ color: '#9ACD32' }}
                animate={{
                  textShadow: [
                    '0 0 0px rgba(154, 205, 50, 0)',
                    '0 0 25px rgba(154, 205, 50, 0.6)',
                    '0 0 0px rgba(154, 205, 50, 0)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Values
              </motion.span>
            </motion.h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              The principles that guide our work
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateZ: -5 }}
                  animate={isVisible(3) ? { opacity: 1, y: 0, rotateZ: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="rounded-xl p-6 text-center border border-gray-800 relative overflow-hidden"
                  style={{ backgroundColor: 'rgba(20, 20, 20, 0.5)' }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateZ: 2,
                    borderColor: '#9ACD32',
                    boxShadow: '0 0 25px rgba(154, 205, 50, 0.3)'
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: '#9ACD32' }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h3
                    className="text-xl font-bold text-white mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 text-sm leading-relaxed"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

            {/* Mission Statement */}
      <section 
              ref={(el) => (sectionsRef.current[4] = el)}
        className="py-24"
        style={{ backgroundColor: '#060010' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible(4) ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="rounded-2xl p-12 md:p-16 border-2 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(154, 205, 50, 0.1) 0%, rgba(154, 205, 50, 0.05) 100%)',
                borderColor: 'rgba(154, 205, 50, 0.3)'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(154, 205, 50, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(154, 205, 50, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(154, 205, 50, 0.1) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible(4) ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                Our <motion.span
                  style={{ color: '#9ACD32' }}
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(154, 205, 50, 0)',
                      '0 0 30px rgba(154, 205, 50, 0.8)',
                      '0 0 0px rgba(154, 205, 50, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Mission
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible(4) ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                To bridge the gap between ambitious architectural visions and successful project execution, while empowering the next generation of designers with industry-leading software proficiency.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery Preview */}
      <section 
        ref={(el) => (sectionsRef.current[5] = el)}
        className="py-24"
        style={{ backgroundColor: '#141414' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible(5) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible(5) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
            >
              Featured <motion.span
                style={{ color: '#9ACD32' }}
                animate={{
                  textShadow: [
                    '0 0 0px rgba(154, 205, 50, 0)',
                    '0 0 25px rgba(154, 205, 50, 0.6)',
                    '0 0 0px rgba(154, 205, 50, 0)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Work
              </motion.span>
            </motion.h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              A glimpse into our portfolio
            </p>

            {/* Exterior Visualizations */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#9ACD32' }}>Exterior Visualizations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "/15-APAC BUILDING/TWIN TOWER EXTERIOR-1.jpg",
                  "/15-APAC BUILDING/TWIN TOWER EXTERIOR-2.jpg",
                  "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-1.jpg",
                  "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-2.jpg",
                  "/22-Hill House /Exterior-1.jpg",
                  "/22-Hill House /Exterior-2.jpg",
                ].map((imagePath, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={isVisible(5) ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="group relative overflow-hidden rounded-lg aspect-square"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      zIndex: 10
                    }}
                  >
                    <motion.img
                      src={getMediaUrl(imagePath)}
                      alt={`Exterior ${index + 1}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.7 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-[#9ACD32] rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 0.5, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Architectural Scenes */}
            <div>
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#9ACD32' }}>Architectural Scenes</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  "/08-KALMET OFFICE BUIDLING/Render image/Scene 1.jpg",
                  "/08-KALMET OFFICE BUIDLING/Render image/Scene 2.jpg",
                  "/08-KALMET OFFICE BUIDLING/Render image/Scene 3.jpg",
                  "/08-KALMET OFFICE BUIDLING/Render image/Scene 4.jpg",
                  "/08-KALMET OFFICE BUIDLING/Render image/Scene 5.jpg",
                  "/10-RUFER UNIVERSITY/Render image/Curve building-1.jpg",
                  "/10-RUFER UNIVERSITY/Render image/Curve building-2.jpg",
                  "/10-RUFER UNIVERSITY/Render image/Curve building-3.jpg",
                  "/09-HAFFITY SPORT SHOPPING CENTER/Scene 1_upscale01.jpg",
                  "/09-HAFFITY SPORT SHOPPING CENTER/Scene 3_upscale01.jpg",
                ].map((imagePath, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                    animate={isVisible(5) ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="group relative overflow-hidden rounded-lg aspect-square"
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: 2,
                      zIndex: 10
                    }}
                  >
                    <motion.img
                      src={getMediaUrl(imagePath)}
                      alt={`Scene ${index + 1}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.7 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-[#9ACD32] rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 0.5, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
