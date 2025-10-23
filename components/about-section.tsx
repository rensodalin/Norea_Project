import { Award, Users, Lightbulb, Target } from "lucide-react"

export function AboutSection() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Awards Won" },
  ]

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters. We deliver pixel-perfect visualizations that exceed expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technology and creative solutions to bring your vision to life.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with architects and designers to achieve the perfect result.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning quality in every project, from concept to final render.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About ANT Archviz</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            We are a team of passionate 3D artists and visualization specialists dedicated to transforming architectural
            concepts into stunning photorealistic imagery.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            With over 15 years of experience in the industry, we've helped architects, developers, and designers around
            the world communicate their vision through powerful visual storytelling.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Services */}
        <div className="bg-background p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">Exterior Visualization</h4>
              <p className="text-muted-foreground">
                Stunning exterior renders showcasing your building design in its environment with realistic lighting and
                materials.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">Interior Visualization</h4>
              <p className="text-muted-foreground">
                Photorealistic interior renders that capture the atmosphere, materials, and spatial qualities of your
                design.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">Aerial & Drone Views</h4>
              <p className="text-muted-foreground">
                Bird's eye perspectives and aerial shots perfect for master planning and large-scale developments.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">Animation & Virtual Tours</h4>
              <p className="text-muted-foreground">
                Dynamic walkthroughs and animations that bring your project to life with cinematic quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
