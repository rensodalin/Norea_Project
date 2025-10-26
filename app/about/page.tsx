"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GraduationCap, Code, Lightbulb, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
      description: "Professional-level mastery of real-time rendering and visualization."
    },
    {
      icon: Code,
      title: "Software Instruction",
      description: "Expert training in Revit, Lumion, Enscape, SketchUp, and AutoCAD."
    },
    {
      icon: Lightbulb,
      title: "Architectural Design",
      description: "Complex projects executed with precision and innovation."
    },
    {
      icon: Target,
      title: "Professional Mentorship",
      description: "Guiding the next generation of designers and architects."
    }
  ]

  const expertise = [
    { label: "Years of Experience", value: "10+" },
    { label: "Projects Completed", value: "100+" },
    { label: "Students Trained", value: "500+" },
    { label: "Software Platforms", value: "7+" }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Architect • Educator • Innovator</p>
        </div>
      </section>

      {/* Full Screen Images */}
      <div className="relative">
        {/* First Image - Fixed Position */}
        {mounted && (
          <div 
            className="fixed inset-0 w-screen h-screen bg-black overflow-hidden group flex items-center justify-center"
          >
            <img 
              src="/profile/IMG_4335.JPG" 
              alt="Bun Sambath"
              className="w-full h-full object-cover object-center object-[center_10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Bun Sambath</h3>
              <p className="text-green-400 font-medium text-lg">Architect & Educator</p>
              <p className="text-white/80 mt-2 max-w-2xl">With 10+ years of experience in architectural visualization and software training</p>
            </div>
          </div>
        )}

        {/* Spacer to push content below */}
        <div className="relative h-screen w-screen"></div>

        {/* Second Image - Split Layout */}
        <div 
          ref={(el) => (sectionsRef.current[0] = el)}
          className={`relative w-screen min-h-screen bg-black overflow-hidden flex flex-col md:flex-row transition-all duration-1000 ${
            isVisible(0) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          {/* Image - Left Side */}
          <div className="w-full md:w-1/2 h-screen md:h-auto md:min-h-screen flex items-center justify-center bg-black group overflow-hidden">
            <img 
              src="/profile/IMG_4339.JPG" 
              alt="Bun Sambath in action"
              className="w-full h-full md:h-auto md:min-h-screen object-contain group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Info - Right Side */}
          <div className="w-full md:w-1/2 h-screen md:h-auto md:min-h-screen bg-black flex items-center justify-center p-8 md:p-16">
            <div className="max-w-xl">
              <div className="relative mb-8">
                <div className="absolute -left-4 top-0 w-1 h-full bg-green-400 animate-pulse"></div>
                <h3 className="text-4xl md:text-5xl font-bold text-white relative overflow-hidden group">
                  <span className="inline-block animate-fade-in-up delay-0">I am </span>
                  <span className="inline-block text-green-400 animate-fade-in-up delay-100 ml-2 relative">
                    Bun Sambath
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  </span>
                </h3>
              </div>
              <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                <p className="animate-fade-in-up delay-200 opacity-0 animation-fill-forwards">
                  An architect and software instructor with more than 10 years of professional experience at the intersection of design and technology.
                </p>
                <p className="animate-fade-in-up delay-300 opacity-0 animation-fill-forwards">
                  My career has been dedicated to two core principles: executing complex architectural projects for clients and mentoring the next generation of designers. My team and I are trusted to deliver results, translating ambitious visions into buildable realities.
                </p>
                <p className="animate-fade-in-up delay-400 opacity-0 animation-fill-forwards">
                  As an educator, I am passionate about demystifying the industry's most powerful tools. I specialize in developing professional-level competence in a comprehensive suite of software, including D5 Render, Corona, Revit, Lumion, Enscape, SketchUp, and AutoCAD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-24" style={{ backgroundColor: '#060010' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div 
              ref={(el) => (sectionsRef.current[1] = el)}
              className={`bg-black/50 rounded-lg p-8 md:p-12 mb-16 transition-all duration-1000 ${
                isVisible(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-1 bg-green-400 mr-4"></div>
                <h2 className="text-4xl font-bold text-white">I am Bun Sambath</h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  An architect and software instructor with more than 10 years of professional experience at the intersection of design and technology.
                </p>
                <p>
                  My career has been dedicated to two core principles: executing complex architectural projects for clients and mentoring the next generation of designers. My team and I are trusted to deliver results, translating ambitious visions into buildable realities.
                </p>
                <p>
                  As an educator, I am passionate about demystifying the industry's most powerful tools. I specialize in developing professional-level competence in a comprehensive suite of software, including D5 Render, Corona, Revit, Lumion, Enscape, SketchUp, and AutoCAD.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div 
              ref={(el) => (sectionsRef.current[2] = el)}
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${
                isVisible(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {expertise.map((item, index) => (
                <div key={index} className="bg-black/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">{item.value}</div>
                  <div className="text-gray-300 text-sm">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Services/Expertise */}
            <div 
              ref={(el) => (sectionsRef.current[3] = el)}
              className={`mb-16 transition-all duration-1000 ${
                isVisible(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-3xl font-bold text-white mb-12 text-center">Areas of Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div key={index} className="bg-black/50 rounded-lg p-6 border border-gray-800 hover:border-green-400 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-400/10 flex-shrink-0">
                          <Icon className="text-green-400" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                          <p className="text-gray-300 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mission Statement */}
            <div 
              ref={(el) => (sectionsRef.current[4] = el)}
              className={`bg-gradient-to-r from-green-500/10 to-green-400/5 rounded-lg p-8 md:p-12 border border-green-400/30 transition-all duration-1000 ${
                isVisible(4) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Mission</h3>
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                To bridge the gap between ambitious architectural visions and successful project execution, while empowering the next generation of designers with industry-leading software proficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24" style={{ backgroundColor: '#060010' }}>
        <div className="container mx-auto px-6">
          <div 
            ref={(el) => (sectionsRef.current[5] = el)}
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              isVisible(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Our Work</h2>

            {/* Exterior Images */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Exterior Visualizations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="/Exterior-1.jpg"
                    alt="Exterior 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="/Exterior-1 2.jpg"
                    alt="Exterior 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="/Exterior-2.jpg"
                    alt="Exterior 2"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="/Exterior-3.jpg"
                    alt="Exterior 3"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="/Exterior-4.jpg"
                    alt="Exterior 4"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="/Exterior-5.jpg"
                    alt="Exterior 5"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Scene Images */}
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6">Architectural Scenes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <div key={num} className="group overflow-hidden rounded-lg">
                    <img 
                      src={`/Scene ${num}.jpg`}
                      alt={`Scene ${num}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
