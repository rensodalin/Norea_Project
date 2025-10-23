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

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

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
            <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Project Details Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Location</h3>
              <p className="text-foreground">{project.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Client</h3>
              <p className="text-foreground">{project.details.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Scope</h3>
              <p className="text-foreground">{project.details.scope}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Duration</h3>
              <p className="text-foreground">{project.details.duration}</p>
            </div>
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
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Project Gallery</h2>
          <ProjectImageGallery images={project.images} title={project.title} />
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
