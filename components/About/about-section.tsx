import { Award, Users, Lightbulb, Target } from "lucide-react";
import { CountUp } from "@/components/Counter/count-up";
import Beams from "@/components/Beams";

export function AboutSection() {
  const stats = [
    { number: 500, label: "Projects Completed" },
    { number: 200, label: "Happy Clients" },
    { number: 10, label: "Years Experience" },
    { number: 50, label: "Awards Won" },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "Every detail matters. We deliver pixel-perfect visualizations that exceed expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Cutting-edge technology and creative solutions to bring your vision to life.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working closely with architects and designers to achieve the perfect result.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Award-winning quality in every project, from concept to final render.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6 text-5xl font-bold md:text-6xl text-foreground">
            About Archtipsbox
          </h2>
          <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
            We are a team of passionate 3D artists and visualization specialists
            dedicated to transforming architectural concepts into stunning
            photorealistic imagery.
          </p>
          <p className="text-xl leading-relaxed text-muted-foreground">
            With 10+ years of experience in the industry, we've helped
            architects, developers, and designers around the world communicate
            their vision through powerful visual storytelling.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mb-20 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <CountUp
                end={stat.number}
                duration={2000}
                suffix="+"
                className="mb-2 text-4xl font-bold md:text-5xl text-primary"
              />
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Architecture Image Gallery */}
        <div className="mb-20">
          <h3 className="mb-12 text-3xl font-bold text-center text-foreground">
            Our Work in Action
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg group">
              <img
                src="/profile/IMG_4335.JPG"
                alt="Architecture Visualization"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                src="/profile/IMG_4339.JPG"
                alt="Architecture Visualization"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="mb-12 text-3xl font-bold text-center text-foreground">
            Our Values
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div className="relative flex flex-col justify-center min-h-screen p-12 overflow-hidden bg-background md:p-20">
          {/* Animated beams background */}
          <div className="absolute inset-0">
            <Beams
              beamWidth={2}
              beamHeight={15}
              beamNumber={12}
              lightColor="#ffffff"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={0}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="mb-12 text-5xl font-bold text-center md:text-6xl text-foreground">
              Our Services
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="pl-6 border-l-4 border-primary">
                <h4 className="mb-2 text-xl font-semibold text-foreground">
                  Exterior Visualization
                </h4>
                <p className="text-muted-foreground">
                  Stunning exterior renders showcasing your building design in
                  its environment with realistic lighting and materials.
                </p>
              </div>
              <div className="pl-6 border-l-4 border-primary">
                <h4 className="mb-2 text-xl font-semibold text-foreground">
                  Interior Visualization
                </h4>
                <p className="text-muted-foreground">
                  Photorealistic interior renders that capture the atmosphere,
                  materials, and spatial qualities of your design.
                </p>
              </div>
              <div className="pl-6 border-l-4 border-primary">
                <h4 className="mb-2 text-xl font-semibold text-foreground">
                  Aerial & Drone Views
                </h4>
                <p className="text-muted-foreground">
                  Bird's eye perspectives and aerial shots perfect for master
                  planning and large-scale developments.
                </p>
              </div>
              <div className="pl-6 border-l-4 border-primary">
                <h4 className="mb-2 text-xl font-semibold text-foreground">
                  Animation & Virtual Tours
                </h4>
                <p className="text-muted-foreground">
                  Dynamic walkthroughs and animations that bring your project to
                  life with cinematic quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
