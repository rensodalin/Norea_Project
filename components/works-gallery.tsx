"use client"

import { projects } from "@/lib/projects-data"
import { ProjectCard } from "@/components/project-card"
import FadeContent from "@/components/fade-content"

export function WorksGallery() {

  return (
    <section 
      id="work" 
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#060010' }}
    >
      <div className="w-full px-6 relative z-10">
        {/* Section Header */}
        <FadeContent delay={0} duration={1000} easing="ease-out" threshold={0.1}>
          <div className="text-left mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Explore our portfolio of photorealistic architectural visualizations
            </p>
          </div>
        </FadeContent>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project, index) => (
            <FadeContent
              key={project.id}
              delay={index * 150}
              duration={800}
              easing="ease-out"
              threshold={0.1}
              initialOpacity={0}
            >
              <ProjectCard project={project} />
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
