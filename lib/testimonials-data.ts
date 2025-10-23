export interface Testimonial {
  id: string
  name: string
  role: string
  organization: string
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emily Chen",
    role: "Creative Director",
    organization: "Luxe Properties",
    text: "ANT Archviz transformed our vision into stunning photorealistic renders that helped us secure funding for our luxury development project. Their attention to detail and understanding of architectural aesthetics is unmatched.",
  },
  {
    id: "2",
    name: "James Thompson",
    role: "Principal Architect",
    organization: "Thompson & Associates",
    text: "Working with ANT has been a game-changer for our client presentations. The quality of their visualizations brings our designs to life in ways that traditional drawings simply cannot achieve.",
  },
  {
    id: "3",
    name: "Sophia Miller",
    role: "Real Estate Developer",
    organization: "Miller Development Group",
    text: "The team at ANT Archviz delivered exceptional results on our mixed-use development. Their renders were instrumental in pre-selling 80% of our units before construction even began.",
  },
  {
    id: "4",
    name: "Alexander Davis",
    role: "Design Director",
    organization: "Urban Design Studio",
    text: "ANT's ability to capture lighting, materials, and atmosphere in their visualizations is extraordinary. They've become an essential partner in our design process.",
  },
  {
    id: "5",
    name: "Olivia Wilson",
    role: "Marketing Manager",
    organization: "Coastal Resorts Inc.",
    text: "The photorealistic quality of ANT's work has elevated our marketing campaigns significantly. Their renders generate genuine excitement and engagement from potential buyers.",
  },
  {
    id: "6",
    name: "Ethan Roberts",
    role: "Project Manager",
    organization: "Roberts Construction",
    text: "ANT Archviz consistently delivers high-quality visualizations on time and within budget. Their professionalism and technical expertise make them our go-to partner for all visualization needs.",
  },
]
