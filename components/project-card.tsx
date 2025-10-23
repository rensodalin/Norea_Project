"use client"

import Link from "next/link"
import { useState } from "react"
import type { Project } from "@/lib/projects-data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="group relative overflow-hidden bg-card cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-90" : "opacity-60"
            }`}
          />
        </div>

        {/* Project Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="mb-2">
            <span className="text-sm text-primary font-medium">{project.category}</span>
            <span className="text-sm text-muted-foreground ml-3">{project.year}</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p
            className={`text-muted-foreground transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {project.description}
          </p>
        </div>

        {/* Hover indicator */}
        <div
          className={`absolute top-6 right-6 w-12 h-12 border-2 border-primary flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100 rotate-0" : "opacity-0 rotate-45"
          }`}
        >
          <span className="text-primary text-xl">→</span>
        </div>
      </div>
    </Link>
  )
}
