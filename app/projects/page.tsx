"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects-data"
import { useState } from "react"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const uniqueCategories = [...new Set(projects.map(p => p.category))]
  const categories = ["All", ...uniqueCategories]

  const filteredProjects =
    selectedCategory === "All" 
      ? projects 
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#060010' }}>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Explore our complete portfolio of architectural visualizations
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24" style={{ backgroundColor: '#060010' }}>
        <div className="w-full px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-transparent text-green-400"
                    : "bg-transparent text-gray-300 hover:text-green-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

