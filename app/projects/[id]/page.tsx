import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { ProjectImageGallery } from "@/components/project-image-gallery"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <Link href="/#work">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground -ml-4">
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

        {/* Project Info */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="text-primary font-medium">{project.category}</span>
                <span className="text-muted-foreground ml-3">{project.year}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.description}</p>
              
              {/* Project Features */}
              {project.details.features && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.details.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Challenges & Solutions */}
              {project.details.challenges && project.details.solutions && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {project.details.challenges.map((challenge, index) => (
                        <li key={index} className="text-muted-foreground flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      {project.details.solutions.map((solution, index) => (
                        <li key={index} className="text-muted-foreground flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

          {/* Project Details Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Location</h3>
              <p className="text-foreground">{project.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Scope</h3>
              <p className="text-foreground">{project.details.scope}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Duration</h3>
              <p className="text-foreground">{project.details.duration}</p>
            </div>
            {(project.details.bedrooms || project.details.bathrooms || project.details.floors) && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Specifications</h3>
                <div className="space-y-1">
                  {project.details.bedrooms && (
                    <p className="text-foreground">Bedrooms: {project.details.bedrooms}</p>
                  )}
                  {project.details.bathrooms && (
                    <p className="text-foreground">Bathrooms: {project.details.bathrooms}</p>
                  )}
                  {project.details.floors && (
                    <p className="text-foreground">Floors: {project.details.floors}</p>
                  )}
                </div>
              </div>
            )}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Software</h3>
              <div className="flex flex-wrap gap-2">
                {project.details.software.map((software) => (
                  <span key={software} className="px-3 py-1 bg-secondary text-foreground text-sm">
                    {software}
                  </span>
                ))}
              </div>
            </div>
            {project.testimonials && (
              <div className="border-t pt-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Client Testimonial</h3>
                <blockquote className="text-foreground italic mb-2">
                  "{project.testimonials.quote}"
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">{project.testimonials.author}</p>
                  <p>{project.testimonials.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Project Gallery</h2>
          
          {/* Categorized Gallery */}
          {project.gallery && (
            <div className="space-y-12">
              {project.gallery.exterior && project.gallery.exterior.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Exterior Views</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.gallery.exterior.map((image, index) => (
                      <div key={index} className="group cursor-pointer">
                        <img 
                          src={image} 
                          alt={`${project.title} exterior view ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.gallery.interior && project.gallery.interior.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Interior Spaces</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.gallery.interior.map((image, index) => (
                      <div key={index} className="group cursor-pointer">
                        <img 
                          src={image} 
                          alt={`${project.title} interior view ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.gallery.aerial && project.gallery.aerial.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Aerial Views</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.gallery.aerial.map((image, index) => (
                      <div key={index} className="group cursor-pointer">
                        <img 
                          src={image} 
                          alt={`${project.title} aerial view ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.gallery.details && project.gallery.details.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Design Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.gallery.details.map((image, index) => (
                      <div key={index} className="group cursor-pointer">
                        <img 
                          src={image} 
                          alt={`${project.title} detail view ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Fallback to original gallery if categorized gallery is not available */}
          {(!project.gallery || Object.keys(project.gallery).length === 0) && (
            <ProjectImageGallery images={project.images} title={project.title} />
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your architectural vision to life with stunning photorealistic visualizations
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
