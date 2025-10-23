export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  year: string
  location: string
  details: {
    client: string
    scope: string
    software: string[]
    duration: string
  }
  images: string[]
}

export const projects: Project[] = [
  {
    id: "modern-villa",
    title: "Modern Villa Residence",
    category: "Residential",
    description:
      "A stunning contemporary villa featuring clean lines, expansive glass walls, and seamless indoor-outdoor living spaces.",
    image: "/projects/modern-villa-main.jpg",
    year: "2024",
    location: "Los Angeles, CA",
    details: {
      client: "Private Client",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop"],
      duration: "3 weeks",
    },
    images: ["/projects/modern-villa-1.jpg", "/projects/modern-villa-2.jpg", "/projects/modern-villa-3.jpg"],
  },
  {
    id: "urban-tower",
    title: "Urban Tower Complex",
    category: "Commercial",
    description:
      "A mixed-use high-rise development combining residential, retail, and office spaces in the heart of the city.",
    image: "/projects/urban-tower-main.jpg",
    year: "2024",
    location: "New York, NY",
    details: {
      client: "Urban Development Corp",
      scope: "Exterior Visualization & Aerial Views",
      software: ["3ds Max", "Corona", "Photoshop"],
      duration: "4 weeks",
    },
    images: ["/projects/urban-tower-1.jpg", "/projects/urban-tower-2.jpg", "/projects/urban-tower-3.jpg"],
  },
  {
    id: "luxury-penthouse",
    title: "Luxury Penthouse Interior",
    category: "Interior",
    description:
      "An opulent penthouse interior showcasing high-end finishes, custom furniture, and breathtaking city views.",
    image: "/projects/luxury-penthouse-main.jpg",
    year: "2023",
    location: "Miami, FL",
    details: {
      client: "Elite Properties",
      scope: "Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop"],
      duration: "2 weeks",
    },
    images: [
      "/projects/luxury-penthouse-1.jpg",
      "/projects/luxury-penthouse-2.jpg",
      "/projects/luxury-penthouse-3.jpg",
    ],
  },
  {
    id: "eco-resort",
    title: "Eco-Friendly Resort",
    category: "Hospitality",
    description:
      "A sustainable resort design integrating natural materials and green technologies in a tropical paradise setting.",
    image: "/projects/eco-resort-main.jpg",
    year: "2023",
    location: "Bali, Indonesia",
    details: {
      client: "Green Hospitality Group",
      scope: "Master Plan & Key Views",
      software: ["3ds Max", "Corona", "Photoshop", "Lumion"],
      duration: "5 weeks",
    },
    images: ["/projects/eco-resort-1.jpg", "/projects/eco-resort-2.jpg", "/projects/eco-resort-3.jpg"],
  },
  {
    id: "corporate-headquarters",
    title: "Corporate Headquarters",
    category: "Commercial",
    description:
      "A state-of-the-art office building featuring innovative workspace design and sustainable architecture.",
    image: "/projects/corporate-hq-main.jpg",
    year: "2023",
    location: "San Francisco, CA",
    details: {
      client: "Tech Innovations Inc",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop"],
      duration: "4 weeks",
    },
    images: ["/projects/corporate-hq-1.jpg", "/projects/corporate-hq-2.jpg", "/projects/corporate-hq-3.jpg"],
  },
  {
    id: "minimalist-apartment",
    title: "Minimalist Apartment",
    category: "Interior",
    description:
      "A serene urban apartment embracing minimalist design principles with natural light and clean aesthetics.",
    image: "/projects/minimalist-apt-main.jpg",
    year: "2024",
    location: "Tokyo, Japan",
    details: {
      client: "Private Client",
      scope: "Interior Visualization",
      software: ["3ds Max", "Corona", "Photoshop"],
      duration: "2 weeks",
    },
    images: ["/projects/minimalist-apt-1.jpg", "/projects/minimalist-apt-2.jpg", "/projects/minimalist-apt-3.jpg"],
  },
]
