export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  year: string
  location: string
  price: string
  details: {
    client: string
    scope: string
    software: string[]
    duration: string
    area?: string
    bedrooms?: number
    bathrooms?: number
    floors?: number
    features?: string[]
    challenges?: string[]
    solutions?: string[]
  }
  images: string[]
  gallery: {
    exterior: string[]
    interior: string[]
    details: string[]
    aerial?: string[]
  }
  videos?: string[]
  testimonials?: {
    quote: string
    author: string
    role: string
  }
}

export const projects: Project[] = [
  {
    id: "westline-university",
    title: "WESTLINE UNIVERSITY",
    category: "Commercial",
    description:
      "A prestigious university campus featuring innovative architectural design, modern educational facilities, and inspiring learning environments. This academic institution showcases contemporary campus architecture with spacious classrooms, advanced research facilities, and a dynamic campus atmosphere that promotes academic excellence and student engagement.",
    image: "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 1_1_upscale01.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$42,000",
    details: {
      client: "WESTLINE University",
      scope: "Exterior & Interior Visualization & Animation",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion", "After Effects"],
      duration: "6 weeks",
      area: "220,000 sq ft",
      floors: 7,
      features: [
        "Modern educational facilities",
        "Spacious classrooms and lecture halls",
        "Advanced research laboratories",
        "Student common areas",
        "Contemporary campus architecture",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic educational environments",
        "Achieving photorealistic animations and renders",
        "Balancing multiple functional requirements"
      ],
      solutions: [
        "Advanced 3D modeling and animation techniques",
        "Comprehensive material and lighting studies",
        "Dynamic camera movements and cinematic presentations"
      ]
    },
    images: [
      "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 1_1_upscale01.jpg",
      "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 2_1_upscale01.jpg",
      "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 3_1_upscale01.jpg",
      "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 4_1_upscale01.jpg",
      "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 5.jpg",
      "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 6.jpg",
      "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 7.jpg"
    ],
    gallery: {
      exterior: [
        "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 1_1_upscale01.jpg",
        "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 2_1_upscale01.jpg",
        "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 3_1_upscale01.jpg",
        "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 4_1_upscale01.jpg",
        "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 5.jpg",
        "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 6.jpg",
        "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 7.jpg"
      ],
      interior: [],
      details: []
    },
    videos: [
      "/13-WESTLINE UNIVERSITY/video/Clip 2.mp4",
      "/13-WESTLINE UNIVERSITY/video/Clip 3.mp4",
      "/13-WESTLINE UNIVERSITY/video/Clip 4.mp4",
      "/13-WESTLINE UNIVERSITY/video/Clip 5.mp4",
      "/13-WESTLINE UNIVERSITY/video/Clip 6.mp4",
      "/13-WESTLINE UNIVERSITY/video/Clip 7.mp4"
    ],
    testimonials: {
      quote: "The university campus visualizations and animations exceeded all expectations. The photorealistic quality helped us secure funding and attract students before construction even began.",
      author: "Dr. Ratha Sok",
      role: "University Director"
    }
  },
  {
    id: "white-beach-hotel",
    title: "WHITE BEACH HOTEL BY SB",
    category: "Hospitality",
    description:
      "A luxurious beachfront hotel featuring elegant architectural design, stunning ocean views, and premium hospitality facilities. This seaside resort showcases contemporary hotel architecture with curved building designs, spacious guest rooms, world-class amenities, and a serene beachfront atmosphere that provides guests with an unforgettable vacation experience.",
    image: "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 1.mp4",
    year: "2024",
    location: "Cambodia",
    price: "$48,000",
    details: {
      client: "SB Hospitality Group",
      scope: "Exterior & Interior Visualization & Animation",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion", "After Effects"],
      duration: "7 weeks",
      area: "180,000 sq ft",
      floors: 6,
      features: [
        "Elegant curved building design",
        "Stunning ocean views",
        "Spacious guest rooms",
        "World-class amenities",
        "Beachfront location",
        "Premium hospitality facilities",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic beachfront environments",
        "Showcasing curved architectural elements",
        "Achieving photorealistic water and lighting effects"
      ],
      solutions: [
        "Advanced 3D modeling for curved structures",
        "Comprehensive material and lighting studies",
        "Dynamic camera movements and cinematic presentations"
      ]
    },
    images: [
      "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-1.jpg",
      "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-2.jpg",
      "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-3.jpg",
      "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-4.jpg",
      "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-5.jpg",
      "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-6.jpg",
      "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-7.jpg",
      "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-8.jpg"
    ],
    gallery: {
      exterior: [
        "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-1.jpg",
        "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-2.jpg",
        "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-3.jpg",
        "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-4.jpg",
        "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-5.jpg",
        "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-6.jpg",
        "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-7.jpg",
        "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-8.jpg"
      ],
      interior: [],
      details: []
    },
    videos: [
      "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 1.mp4",
      "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 2.mp4",
      "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 3.mp4",
      "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 4.mp4",
      "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 5.mp4",
      "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 6.mp4",
      "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 7.mp4",
      "/14-WHITE BEACH HOTEL BY SB/Animation/Clip 8.mp4"
    ],
    testimonials: {
      quote: "The beachfront hotel visualizations and animations perfectly captured our vision. The photorealistic quality and cinematic presentations helped us secure investors and attract guests before opening.",
      author: "Sokunthea Bun",
      role: "Hotel Director"
    }
  },
  {
    id: "apac-building",
    title: "APAC BUILDING",
    category: "Commercial",
    description:
      "A prestigious twin tower building featuring contemporary architectural design, modern commercial spaces, and innovative urban development. This landmark development showcases sophisticated twin tower architecture with premium finishes, strategic space utilization, and a dynamic urban presence that creates an iconic addition to the city skyline.",
    image: "/15-APAC BUILDING/TWIN TOWER EXTERIOR-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$55,000",
    details: {
      client: "APAC Development",
      scope: "Exterior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "5 weeks",
      area: "400,000 sq ft",
      floors: 25,
      features: [
        "Twin tower design",
        "Contemporary architecture",
        "Modern commercial spaces",
        "Premium exterior finishes",
        "Iconic urban landmark",
        "Advanced building systems",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic twin tower materials and textures",
        "Achieving optimal lighting for different times of day",
        "Showcasing architectural symmetry accurately"
      ],
      solutions: [
        "High-resolution material mapping and texture studies",
        "Advanced daylight simulation and rendering",
        "Detailed architectural element visualization"
      ]
    },
    images: [
      "/15-APAC BUILDING/TWIN TOWER EXTERIOR-1.jpg",
      "/15-APAC BUILDING/TWIN TOWER EXTERIOR-2.jpg",
      "/15-APAC BUILDING/TWIN TOWER EXTERIOR-3.jpg",
      "/15-APAC BUILDING/TWIN TOWER EXTERIOR-4.jpg",
      "/15-APAC BUILDING/TWIN TOWER EXTERIOR-5.jpg",
      "/15-APAC BUILDING/TWIN TOWER EXTERIOR-6.jpg",
      "/15-APAC BUILDING/TWIN TOWER EXTERIOR-7.jpg",
      "/15-APAC BUILDING/TWIN TOWER EXTERIOR-8.jpg",
      "/15-APAC BUILDING/TWIN TOWER EXTERIOR-9.jpg"
    ],
    gallery: {
      exterior: [
        "/15-APAC BUILDING/TWIN TOWER EXTERIOR-1.jpg",
        "/15-APAC BUILDING/TWIN TOWER EXTERIOR-2.jpg",
        "/15-APAC BUILDING/TWIN TOWER EXTERIOR-3.jpg",
        "/15-APAC BUILDING/TWIN TOWER EXTERIOR-4.jpg",
        "/15-APAC BUILDING/TWIN TOWER EXTERIOR-5.jpg",
        "/15-APAC BUILDING/TWIN TOWER EXTERIOR-6.jpg",
        "/15-APAC BUILDING/TWIN TOWER EXTERIOR-7.jpg",
        "/15-APAC BUILDING/TWIN TOWER EXTERIOR-8.jpg",
        "/15-APAC BUILDING/TWIN TOWER EXTERIOR-9.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The twin tower visualizations perfectly captured our vision for the landmark development. The photorealistic quality helped us secure investors and attract tenants before construction completion.",
      author: "Vichea Lim",
      role: "Project Developer"
    }
  },
  {
    id: "sb-tower",
    title: "SB TOWER",
    category: "Commercial",
    description:
      "A prestigious office tower featuring contemporary architectural design, modern workspace environments, and innovative urban development. This landmark tower showcases sophisticated vertical architecture with premium finishes, strategic space utilization, and a dynamic urban presence that creates an iconic addition to the city skyline.",
    image: "/16-SB TOWER/Animation/Clip 1.mp4",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$52,000",
    details: {
      client: "SB Development Group",
      scope: "Exterior & Interior Visualization & Animation",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion", "After Effects"],
      duration: "6 weeks",
      area: "350,000 sq ft",
      floors: 30,
      features: [
        "Contemporary tower architecture",
        "Modern office spaces",
        "Premium exterior finishes",
        "Strategic vertical space utilization",
        "Iconic urban landmark design",
        "Advanced building systems",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic tower building materials and textures",
        "Achieving optimal lighting for different times of day",
        "Showcasing vertical architecture accurately",
        "Producing photorealistic animations"
      ],
      solutions: [
        "High-resolution material mapping and texture studies",
        "Advanced daylight simulation and rendering",
        "Detailed architectural element visualization",
        "Dynamic camera movements for cinematic presentations"
      ]
    },
    images: [
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-1.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-2.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-3.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-4.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-5.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-6.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-7.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-8.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-9.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-10.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-11.jpg",
      "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-12.jpg"
    ],
    gallery: {
      exterior: [
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-1.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-2.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-3.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-4.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-5.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-6.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-7.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-8.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-9.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-10.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-11.jpg",
        "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-12.jpg"
      ],
      interior: [],
      details: []
    },
    videos: [
      "/16-SB TOWER/Animation/Clip 1.mp4",
      "/16-SB TOWER/Animation/Clip 2.mp4",
      "/16-SB TOWER/Animation/Clip 3.mp4",
      "/16-SB TOWER/Animation/Clip 4.mp4"
    ],
    testimonials: {
      quote: "The tower visualizations and animations exceeded all expectations. The photorealistic quality and cinematic presentations helped us secure investors and attract premium tenants before construction even began.",
      author: "Sokunthea Bun",
      role: "Development Director"
    }
  },
  {
    id: "greenbase-kindergarten",
    title: "GREENBASE Kindergarten",
    category: "Educational",
    description:
      "A modern kindergarten facility featuring innovative educational design, child-friendly spaces, and inspiring learning environments. This educational institution showcases contemporary architecture with playful design elements, spacious classrooms, safe outdoor play areas, and a nurturing atmosphere that promotes early childhood development.",
    image: "/17-GREENBASE Kindergarten/Render image/New folder/Scene 1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$22,000",
    details: {
      client: "GREENBASE Education",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "3 weeks",
      area: "25,000 sq ft",
      floors: 2,
      features: [
        "Child-friendly design",
        "Spacious classrooms",
        "Safe outdoor play areas",
        "Modern educational facilities",
        "Playful architectural elements",
        "Nurturing learning environment",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating child-appropriate educational environments",
        "Balancing safety with engaging design",
        "Showcasing playful architectural elements"
      ],
      solutions: [
        "Age-appropriate space planning",
        "Safe material selection and finishes",
        "Engaging color schemes and design elements"
      ]
    },
    images: [
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 1.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 2.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 3.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 4.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 5.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 6.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 7.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 8.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 9.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 10.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 11.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 13.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 14.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 15.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 16.jpg",
      "/17-GREENBASE Kindergarten/Render image/New folder/Scene 17.jpg"
    ],
    gallery: {
      exterior: [
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 1.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 2.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 3.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 4.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 5.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 6.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 7.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 8.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 9.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 10.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 11.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 13.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 14.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 15.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 16.jpg",
        "/17-GREENBASE Kindergarten/Render image/New folder/Scene 17.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The kindergarten visualizations perfectly captured our vision for a child-friendly educational space. The playful design elements and safe environments were beautifully showcased, helping us attract families and secure funding.",
      author: "Sopheap Chan",
      role: "Education Director"
    }
  },
  {
    id: "the-nes-mall-complex",
    title: "THE NES Mall Complex",
    category: "Commercial",
    description:
      "A modern shopping mall complex featuring contemporary retail architecture, spacious shopping environments, and dynamic commercial spaces. This retail development showcases innovative mall architecture with premium finishes, strategic tenant layouts, and a vibrant commercial atmosphere that attracts shoppers and visitors.",
    image: "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$38,000",
    details: {
      client: "THE NES Development",
      scope: "Exterior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "5 weeks",
      area: "180,000 sq ft",
      floors: 4,
      features: [
        "Modern retail architecture",
        "Spacious shopping environments",
        "Premium retail finishes",
        "Strategic tenant layouts",
        "Contemporary mall architecture",
        "Dynamic commercial atmosphere",
        "Elegant facade design"
      ],
      challenges: [
        "Creating realistic retail environments",
        "Showcasing multiple tenant spaces effectively",
        "Achieving optimal lighting for commercial environments"
      ],
      solutions: [
        "Advanced lighting simulation for retail environments",
        "Detailed storefront and retail space visualization",
        "Comprehensive material studies for commercial spaces"
      ]
    },
    images: [
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-1.jpg",
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-2.jpg",
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-3.jpg",
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-4.jpg",
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-5.jpg",
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-6.jpg",
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-7.jpg",
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-8.jpg",
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-9.jpg",
      "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-10.jpg"
    ],
    gallery: {
      exterior: [
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-1.jpg",
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-2.jpg",
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-3.jpg",
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-4.jpg",
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-5.jpg",
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-6.jpg",
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-7.jpg",
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-8.jpg",
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-9.jpg",
        "/18-THE NES Mall Complex/Render image/LIGHTROOM/EXTERIOR-10.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The mall complex visualizations perfectly captured our vision for the retail space. The photorealistic quality helped us attract premium tenants and secure investor confidence before construction completion.",
      author: "Ratha Kim",
      role: "Project Developer"
    }
  },
  {
    id: "norea-head-office",
    title: "NOREA HEAD OFFICE",
    category: "Commercial",
    description:
      "A prestigious corporate head office featuring contemporary architectural design, modern workspace environments, and professional office facilities. This office building showcases sophisticated corporate architecture with premium finishes, strategic space utilization, and a dynamic professional presence that creates an inspiring workplace environment.",
    image: "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$32,000",
    details: {
      client: "NOREA Corporation",
      scope: "Exterior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "4 weeks",
      area: "120,000 sq ft",
      floors: 15,
      features: [
        "Contemporary office architecture",
        "Modern workspace design",
        "Premium exterior finishes",
        "Professional office facilities",
        "Strategic space utilization",
        "Corporate aesthetic",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic office building materials and textures",
        "Achieving optimal lighting for different times of day",
        "Showcasing architectural details accurately"
      ],
      solutions: [
        "High-resolution material mapping and texture studies",
        "Advanced daylight simulation and rendering",
        "Detailed architectural element visualization"
      ]
    },
    images: [
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-1.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-2.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-3.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-4.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-5.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-6.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-7.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-8.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-1.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-2.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-3.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-4.jpg",
      "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-5.jpg"
    ],
    gallery: {
      exterior: [
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-1.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-2.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-3.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-4.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-5.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-6.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-7.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-8.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-1.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-2.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-3.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-4.jpg",
        "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Office Exterior OP2-5.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The head office visualizations perfectly captured our vision for the corporate space. The photorealistic quality helped us secure tenants and investor confidence before construction completion.",
      author: "Sophal Chea",
      role: "Project Developer"
    }
  },
  {
    id: "lotus-tower-office-building",
    title: "LOTUS TOWER OFFICE BUILDING",
    category: "Commercial",
    description:
      "A prestigious office tower featuring elegant lotus-inspired architectural design, modern workspace environments, and professional office facilities. This landmark building showcases sophisticated vertical architecture with premium finishes, strategic space utilization, and a dynamic urban presence that creates an iconic addition to the city skyline.",
    image: "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$45,000",
    details: {
      client: "LOTUS Development Group",
      scope: "Exterior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "5 weeks",
      area: "280,000 sq ft",
      floors: 28,
      features: [
        "Lotus-inspired architectural design",
        "Contemporary tower architecture",
        "Modern office spaces",
        "Premium exterior finishes",
        "Iconic urban landmark design",
        "Advanced building systems",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic lotus-inspired architectural elements",
        "Achieving optimal lighting for different times of day",
        "Showcasing vertical architecture accurately"
      ],
      solutions: [
        "High-resolution material mapping and texture studies",
        "Advanced daylight simulation and rendering",
        "Detailed architectural element visualization"
      ]
    },
    images: [
      "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-1.jpg",
      "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-2.jpg",
      "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-3.jpg",
      "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-4.jpg",
      "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-5.jpg"
    ],
    gallery: {
      exterior: [
        "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-1.jpg",
        "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-2.jpg",
        "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-3.jpg",
        "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-4.jpg",
        "/20-LOTUS TOWER OFFICE BUILDING/Render image/Render image/LIGHTROOM/Exterior-5.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The lotus tower visualizations perfectly captured our vision for the iconic landmark. The photorealistic quality helped us secure investors and attract premium tenants before construction completion.",
      author: "Vichea Lim",
      role: "Project Developer"
    }
  },
  {
    id: "koh-pich-commercial-complex",
    title: "KOH PICH COMMERCIAL COMPLEX",
    category: "Commercial",
    description:
      "A prestigious commercial complex featuring contemporary architectural design, modern retail and office spaces, and innovative urban development. This mixed-use development showcases sophisticated commercial architecture with premium finishes, strategic space utilization, and a dynamic urban presence that creates a vibrant commercial hub.",
    image: "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$58,000",
    details: {
      client: "KOH PICH Development",
      scope: "Exterior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "6 weeks",
      area: "450,000 sq ft",
      floors: 20,
      features: [
        "Mixed-use commercial development",
        "Modern retail and office spaces",
        "Premium exterior finishes",
        "Strategic space utilization",
        "Contemporary commercial architecture",
        "Dynamic commercial atmosphere",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic commercial environments",
        "Showcasing multiple program types effectively",
        "Achieving optimal lighting for commercial spaces"
      ],
      solutions: [
        "Advanced lighting simulation for commercial environments",
        "Detailed storefront and office space visualization",
        "Comprehensive material studies for commercial spaces"
      ]
    },
    images: [
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-1.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-2.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-3.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-4.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-5.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-6.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-7.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-8.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-9.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-10.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-11.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-12.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-13.jpg",
      "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-14.jpg"
    ],
    gallery: {
      exterior: [
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-1.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-2.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-3.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-4.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-5.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-6.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-7.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-8.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-9.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-10.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-11.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-12.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-13.jpg",
        "/21-KOH PICH COMMERCIAL COMPLEX/LIGHTROOM/Exterior-14.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The commercial complex visualizations perfectly captured our vision for the mixed-use development. The photorealistic quality helped us attract premium tenants and secure investor confidence before construction completion.",
      author: "Sokunthea Lim",
      role: "Project Developer"
    }
  },
  {
    id: "hill-house",
    title: "Hill House",
    category: "Residential",
    description:
      "A stunning residential house featuring contemporary architectural design, modern living spaces, and elegant home environments. This residential development showcases sophisticated home architecture with premium finishes, strategic space utilization, and a beautiful design that creates an inspiring living environment.",
    image: "/22-Hill House /Exterior-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$18,000",
    details: {
      client: "Private Client",
      scope: "Exterior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "3 weeks",
      area: "5,500 sq ft",
      floors: 2,
      features: [
        "Contemporary residential architecture",
        "Modern living spaces",
        "Premium exterior finishes",
        "Elegant home design",
        "Strategic space utilization",
        "Beautiful landscaping",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic residential building materials and textures",
        "Achieving optimal lighting for different times of day",
        "Showcasing architectural details accurately"
      ],
      solutions: [
        "High-resolution material mapping and texture studies",
        "Advanced daylight simulation and rendering",
        "Detailed architectural element visualization"
      ]
    },
    images: [
      "/22-Hill House /Exterior-1.jpg",
      "/22-Hill House /Exterior-2.jpg",
      "/22-Hill House /Exterior-3.jpg",
      "/22-Hill House /Exterior-4.jpg",
      "/22-Hill House /Exterior-5.jpg",
      "/22-Hill House /Exterior-6.jpg",
      "/22-Hill House /Exterior-7.jpg",
      "/22-Hill House /Exterior-8.jpg",
      "/22-Hill House /Exterior-9.jpg",
      "/22-Hill House /Exterior-10.jpg"
    ],
    gallery: {
      exterior: [
        "/22-Hill House /Exterior-1.jpg",
        "/22-Hill House /Exterior-2.jpg",
        "/22-Hill House /Exterior-3.jpg",
        "/22-Hill House /Exterior-4.jpg",
        "/22-Hill House /Exterior-5.jpg",
        "/22-Hill House /Exterior-6.jpg",
        "/22-Hill House /Exterior-7.jpg",
        "/22-Hill House /Exterior-8.jpg",
        "/22-Hill House /Exterior-9.jpg",
        "/22-Hill House /Exterior-10.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The residential house visualizations perfectly captured our vision for the home. The photorealistic quality helped us make informed design decisions and visualize the final result before construction.",
      author: "Sophal Chan",
      role: "Homeowner"
    }
  },
  {
    id: "high-rise-building",
    title: "HIGH RISE BUILDING",
    category: "Commercial",
    description:
      "A prestigious high-rise building featuring contemporary architectural design, modern office and residential spaces, and innovative urban development. This landmark tower showcases sophisticated vertical architecture with premium finishes, strategic space utilization, and a dynamic urban presence that creates an iconic addition to the city skyline.",
    image: "/12-HIGH RISE BUILDING/VIDEO/Clip 1.mp4",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$50,000",
    details: {
      client: "High Rise Development Group",
      scope: "Exterior & Interior Visualization & Animation",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion", "After Effects"],
      duration: "7 weeks",
      area: "500,000 sq ft",
      floors: 35,
      features: [
        "Contemporary high-rise architecture",
        "Modern office and residential spaces",
        "Premium exterior finishes",
        "Strategic vertical space utilization",
        "Iconic urban landmark design",
        "Advanced building systems",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic high-rise building materials and textures",
        "Achieving optimal lighting for different times of day",
        "Showcasing vertical architecture accurately",
        "Producing photorealistic animations"
      ],
      solutions: [
        "High-resolution material mapping and texture studies",
        "Advanced daylight simulation and rendering",
        "Detailed architectural element visualization",
        "Dynamic camera movements for cinematic presentations"
      ]
    },
    images: [
      "/12-HIGH RISE BUILDING/Render image/Scene 1.jpg"
    ],
    gallery: {
      exterior: [
        "/12-HIGH RISE BUILDING/Render image/Scene 1.jpg"
      ],
      interior: [],
      details: []
    },
    videos: [
      "/12-HIGH RISE BUILDING/VIDEO/Clip 1.mp4",
      "/12-HIGH RISE BUILDING/VIDEO/Clip 2.mp4",
      "/12-HIGH RISE BUILDING/VIDEO/Clip 3.mp4",
      "/12-HIGH RISE BUILDING/VIDEO/Clip 4.mp4",
      "/12-HIGH RISE BUILDING/VIDEO/Clip 5.mp4",
      "/12-HIGH RISE BUILDING/VIDEO/Clip 6.mp4",
      "/12-HIGH RISE BUILDING/VIDEO/Clip 7.mp4",
      "/12-HIGH RISE BUILDING/VIDEO/Clip 8.mp4",
      "/12-HIGH RISE BUILDING/VIDEO/Clip 9.mp4",
      "/12-HIGH RISE BUILDING/VIDEO/Clip 10.mp4"
    ],
    testimonials: {
      quote: "The high-rise building visualizations and animations exceeded all expectations. The photorealistic quality and cinematic presentations helped us secure investors and attract premium tenants before construction even began.",
      author: "Sokunthea Chea",
      role: "Development Director"
    }
  },
  {
    id: "the-curve-k-shopping-mall",
    title: "THE CURVE K SHOPPING MALL",
    category: "Commercial",
    description:
      "A prestigious shopping mall featuring innovative curved architectural design, modern retail spaces, and dynamic commercial environments. This retail development showcases contemporary mall architecture with elegant curves, premium shopping experiences, strategic tenant layouts, and a vibrant commercial atmosphere that attracts shoppers and visitors.",
    image: "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$35,000",
    details: {
      client: "THE CURVE K Development",
      scope: "Exterior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "5 weeks",
      area: "200,000 sq ft",
      floors: 5,
      features: [
        "Innovative curved architectural design",
        "Modern retail spaces",
        "Premium shopping environments",
        "Strategic tenant layouts",
        "Contemporary mall architecture",
        "Dynamic commercial atmosphere",
        "Elegant facade design"
      ],
      challenges: [
        "Creating realistic curved architectural elements",
        "Showcasing multiple retail spaces effectively",
        "Achieving optimal lighting for commercial environments",
        "Capturing the elegant curved facade design"
      ],
      solutions: [
        "Advanced 3D modeling for curved structures",
        "Comprehensive material and lighting studies",
        "Detailed storefront and retail space visualization",
        "Photorealistic rendering techniques"
      ]
    },
    images: [
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-1.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-2.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-3.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-4.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-5.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-6.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-7.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-8.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-9.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-10.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-11.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-12.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-13.jpg",
      "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-14.jpg"
    ],
    gallery: {
      exterior: [
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-1.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-2.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-3.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-4.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-5.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-6.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-7.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-8.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-9.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-10.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-11.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-12.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-13.jpg",
        "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-14.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The shopping mall visualizations perfectly captured our vision for the curved architectural design. The photorealistic quality helped us attract premium tenants and secure investor confidence before construction completion.",
      author: "Ratha Kim",
      role: "Project Developer"
    }
  },
  {
    id: "rufer-university",
    title: "RUFER UNIVERSITY",
    category: "Commercial",
    description:
      "A prestigious university campus featuring innovative architectural design, modern educational facilities, and inspiring learning environments. This academic institution showcases contemporary campus architecture with curved building designs, spacious classrooms, advanced research facilities, and a dynamic campus atmosphere that promotes academic excellence and student engagement.",
    image: "/10-RUFER UNIVERSITY/Render image/Curve building-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$45,000",
    details: {
      client: "RUFER University",
      scope: "Exterior & Interior Visualization & Animation",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion", "After Effects"],
      duration: "6 weeks",
      area: "250,000 sq ft",
      floors: 8,
      features: [
        "Innovative curved building design",
        "Modern educational facilities",
        "Spacious classrooms and lecture halls",
        "Advanced research laboratories",
        "Student common areas and cafeterias",
        "Contemporary campus architecture",
        "Sustainable design elements"
      ],
      challenges: [
        "Creating realistic educational environments",
        "Showcasing curved architectural elements",
        "Achieving photorealistic animations and renders",
        "Balancing multiple functional requirements"
      ],
      solutions: [
        "Advanced 3D modeling for curved structures",
        "Comprehensive material and lighting studies",
        "Dynamic camera movements and cinematic presentations",
        "Detailed interior and exterior visualization"
      ]
    },
    images: [
      "/10-RUFER UNIVERSITY/Render image/Curve building-1.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-2.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-3.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-4.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-5.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-6.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-7.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-8.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-9.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-10.jpg",
      "/10-RUFER UNIVERSITY/Render image/Curve building-11.jpg"
    ],
    gallery: {
      exterior: [
        "/10-RUFER UNIVERSITY/Render image/Curve building-1.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-2.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-3.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-4.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-5.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-6.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-7.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-8.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-9.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-10.jpg",
        "/10-RUFER UNIVERSITY/Render image/Curve building-11.jpg"
      ],
      interior: [],
      details: []
    },
    videos: [
      "/10-RUFER UNIVERSITY/Animation/Clip 1.mp4",
      "/10-RUFER UNIVERSITY/Animation/Clip 2.mp4",
      "/10-RUFER UNIVERSITY/Animation/Clip 3.mp4",
      "/10-RUFER UNIVERSITY/Animation/Clip 4.mp4",
      "/10-RUFER UNIVERSITY/Animation/Clip 5.mp4",
      "/10-RUFER UNIVERSITY/Animation/Clip 6.mp4",
      "/10-RUFER UNIVERSITY/Animation/Clip 7.mp4",
      "/10-RUFER UNIVERSITY/Animation/Clip 8.mp4",
      "/10-RUFER UNIVERSITY/Animation/Clip 9.mp4"
    ],
    testimonials: {
      quote: "The university campus visualizations and animations exceeded all expectations. The curved building designs were beautifully captured, and the cinematic presentations helped us secure funding and attract students before construction even began.",
      author: "Dr. Sopheak Lim",
      role: "University Director"
    }
  },
  {
    id: "haffity-sport-shopping-center",
    title: "HAFFITY SPORT SHOPPING CENTER",
    category: "Commercial",
    description:
      "A modern sports shopping center featuring contemporary retail architecture, spacious shopping environments, and dynamic design elements. This commercial development showcases innovative retail spaces with premium finishes, strategic tenant layouts, and a vibrant shopping experience that attracts sports enthusiasts and visitors.",
    image: "/09-HAFFITY SPORT SHOPPING CENTER/Scene 1_upscale01.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$28,000",
    details: {
      client: "HAFFITY Group",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "4 weeks",
      area: "150,000 sq ft",
      floors: 4,
      features: [
        "Modern sports retail architecture",
        "Spacious shopping environments",
        "Dynamic design elements",
        "Premium retail finishes",
        "Strategic tenant layouts",
        "Vibrant commercial atmosphere"
      ],
      challenges: [
        "Creating realistic retail environments and storefronts",
        "Showcasing multiple tenant spaces effectively",
        "Achieving optimal lighting for shopping experiences"
      ],
      solutions: [
        "Advanced lighting simulation for retail environments",
        "Detailed storefront and interior visualization",
        "Comprehensive material studies for commercial spaces"
      ]
    },
    images: [
      "/09-HAFFITY SPORT SHOPPING CENTER/Scene 1_upscale01.jpg",
      "/09-HAFFITY SPORT SHOPPING CENTER/Scene 3_upscale01.jpg",
      "/09-HAFFITY SPORT SHOPPING CENTER/Scene 5_upscale01.jpg",
      "/09-HAFFITY SPORT SHOPPING CENTER/Scene 6_1_upscale01.jpg",
      "/09-HAFFITY SPORT SHOPPING CENTER/Scene 7_upscale01.jpg",
      "/09-HAFFITY SPORT SHOPPING CENTER/Scene 8_upscale01.jpg",
      "/09-HAFFITY SPORT SHOPPING CENTER/Scene 9_upscale01.jpg",
      "/09-HAFFITY SPORT SHOPPING CENTER/Scene 10_upscale01.jpg"
    ],
    gallery: {
      exterior: [
        "/09-HAFFITY SPORT SHOPPING CENTER/Scene 1_upscale01.jpg",
        "/09-HAFFITY SPORT SHOPPING CENTER/Scene 3_upscale01.jpg",
        "/09-HAFFITY SPORT SHOPPING CENTER/Scene 5_upscale01.jpg",
        "/09-HAFFITY SPORT SHOPPING CENTER/Scene 6_1_upscale01.jpg",
        "/09-HAFFITY SPORT SHOPPING CENTER/Scene 7_upscale01.jpg",
        "/09-HAFFITY SPORT SHOPPING CENTER/Scene 8_upscale01.jpg",
        "/09-HAFFITY SPORT SHOPPING CENTER/Scene 9_upscale01.jpg",
        "/09-HAFFITY SPORT SHOPPING CENTER/Scene 10_upscale01.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The sports shopping center visualizations perfectly captured our vision for the retail space. The photorealistic quality helped us attract premium tenants and secure investor confidence before construction completion.",
      author: "Sokha Chan",
      role: "Project Developer"
    }
  },
  {
    id: "modern-villa",
    title: "Modern Villa Residence",
    category: "Residential",
    description:
      "A stunning contemporary villa featuring clean lines, expansive glass walls, and seamless indoor-outdoor living spaces. This architectural masterpiece showcases the perfect harmony between modern design and natural surroundings, creating an oasis of luxury and tranquility.",
    image: "/Exterior-1.jpg",
    year: "2024",
    location: "Los Angeles, CA",
    price: "$15,000",
    details: {
      client: "Private Client",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "After Effects"],
      duration: "3 weeks",
      area: "4,500 sq ft",
      bedrooms: 5,
      bathrooms: 4,
      floors: 2,
      features: [
        "Floor-to-ceiling glass walls",
        "Infinity pool with ocean views",
        "Smart home automation",
        "Solar panel integration",
        "Natural stone finishes",
        "Open-plan living spaces"
      ],
      challenges: [
        "Integrating large glass panels with structural requirements",
        "Achieving optimal natural lighting throughout the day",
        "Creating seamless indoor-outdoor transitions"
      ],
      solutions: [
        "Advanced structural engineering with minimal visible supports",
        "Strategic window placement and shading systems",
        "Retractable glass walls and sliding door systems"
      ]
    },
    images: [
      "/Exterior-1.jpg",
      "/Scene 1.jpg",
      "/Scene 2.jpg",
      "/Exterior-2.jpg"
    ],
    gallery: {
      exterior: [
        "/Exterior-1.jpg",
        "/Exterior-3.jpg"
      ],
      interior: [
        "/Scene 1.jpg",
        "/Scene 2.jpg",
        "/Scene 3.jpg"
      ],
      details: [
        "/Exterior-2.jpg",
        "/Scene 4.jpg"
      ]
    },
    testimonials: {
      quote: "The visualization exceeded our expectations. Every detail was captured perfectly, helping us secure the final approval for construction.",
      author: "Sarah Johnson",
      role: "Project Manager"
    }
  },
  {
    id: "urban-tower",
    title: "Urban Tower Complex",
    category: "Commercial",
    description:
      "A mixed-use high-rise development combining residential, retail, and office spaces in the heart of the city. This iconic tower represents the future of urban living with its innovative design, sustainable features, and breathtaking panoramic views of the city skyline.",
    image: "/Exterior-2.jpg",
    year: "2024",
    location: "New York, NY",
    price: "$25,000",
    details: {
      client: "Urban Development Corp",
      scope: "Exterior Visualization & Aerial Views",
      software: ["3ds Max", "Corona", "Photoshop", "Lumion"],
      duration: "4 weeks",
      area: "850,000 sq ft",
      floors: 45,
      features: [
        "Mixed-use development",
        "Green roof terraces",
        "Smart building systems",
        "LEED Platinum certification",
        "Panoramic city views",
        "Retail and office integration"
      ],
      challenges: [
        "Creating realistic city context and lighting",
        "Balancing multiple program requirements",
        "Achieving photorealistic aerial perspectives"
      ],
      solutions: [
        "Advanced city modeling and lighting simulation",
        "Modular design approach for flexible spaces",
        "Drone photography integration for authentic aerial views"
      ]
    },
    images: [
      "/skyscraper-exterior-night.jpg",
      "/skyscraper-exterior-night.jpg"
    ],
    gallery: {
      exterior: [
        "/skyscraper-exterior-night.jpg",
        "/skyscraper-exterior-night.jpg"
      ],
      interior: [],
      aerial: [
        "/skyscraper-exterior-night.jpg"
      ],
      details: [
        "/Exterior-4.jpg",
        "/Exterior-5.jpg"
      ]
    },
    testimonials: {
      quote: "The aerial visualizations were instrumental in securing city approvals and investor confidence. The attention to detail was remarkable.",
      author: "Michael Chen",
      role: "Development Director"
    }
  },
  {
    id: "luxury-penthouse",
    title: "Luxury Penthouse Interior",
    category: "Interior",
    description:
      "An opulent penthouse interior showcasing high-end finishes, custom furniture, and breathtaking city views. This luxurious space embodies sophisticated living with its meticulous attention to detail, premium materials, and seamless integration of technology and comfort.",
    image: "/Scene 1.jpg",
    year: "2023",
    location: "Miami, FL",
    price: "$12,000",
    details: {
      client: "Elite Properties",
      scope: "Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Substance"],
      duration: "2 weeks",
      area: "3,200 sq ft",
      bedrooms: 3,
      bathrooms: 3,
      floors: 1,
      features: [
        "Custom Italian marble finishes",
        "Smart home automation",
        "Private rooftop terrace",
        "Wine cellar and tasting room",
        "Home theater system",
        "Panoramic city and ocean views"
      ],
      challenges: [
        "Creating realistic material textures and lighting",
        "Balancing luxury aesthetics with functionality",
        "Showcasing premium finishes authentically"
      ],
      solutions: [
        "High-resolution texture mapping and advanced lighting",
        "Ergonomic space planning with luxury considerations",
        "Detailed material studies and finish specifications"
      ]
    },
    images: [
      "/Scene 7.jpg",
      "/Scene 6.jpg",
      "/Scene 5.jpg"
    ],
    gallery: {
      exterior: [],
      interior: [
        "/Scene 7.jpg",
        "/Scene 6.jpg",
        "/Scene 5.jpg"
      ],
      details: [
        "/Scene 3.jpg"
      ]
    },
    testimonials: {
      quote: "The interior visualizations helped our clients visualize the luxury lifestyle perfectly. Sales increased by 40% after using these images.",
      author: "Jennifer Martinez",
      role: "Sales Director"
    }
  },
  {
    id: "eco-resort",
    title: "Eco-Friendly Resort",
    category: "Hospitality",
    description:
      "A sustainable resort design integrating natural materials and green technologies in a tropical paradise setting. This eco-conscious development showcases how luxury hospitality can coexist harmoniously with environmental preservation, featuring innovative sustainable design solutions and breathtaking natural landscapes.",
    image: "/Exterior-3.jpg",
    year: "2023",
    location: "Bali, Indonesia",
    price: "$35,000",
    details: {
      client: "Green Hospitality Group",
      scope: "Master Plan & Key Views",
      software: ["3ds Max", "Corona", "Photoshop", "Lumion", "SketchUp"],
      duration: "5 weeks",
      area: "50 acres",
      bedrooms: 120,
      bathrooms: 120,
      floors: 2,
      features: [
        "Solar panel integration",
        "Rainwater harvesting systems",
        "Natural ventilation design",
        "Local material sourcing",
        "Zero-waste operations",
        "Biodiversity preservation"
      ],
      challenges: [
        "Balancing luxury amenities with environmental impact",
        "Creating realistic tropical vegetation and lighting",
        "Integrating sustainable technologies seamlessly"
      ],
      solutions: [
        "Innovative eco-luxury design approach",
        "Advanced vegetation modeling and ecosystem simulation",
        "Hidden sustainable technology integration"
      ]
    },
    images: [
      "/eco-friendly-house-green-roof-solar-panels.jpg",
      "/Exterior-4.jpg"
    ],
    gallery: {
      exterior: [
        "/eco-friendly-house-green-roof-solar-panels.jpg",
        "/Exterior-4.jpg",
        "/Exterior-5.jpg"
      ],
      interior: [
        "/Scene 5.jpg"
      ],
      details: [
        "/Scene 4.jpg"
      ]
    },
    testimonials: {
      quote: "The master plan visualizations were crucial for environmental impact assessments and investor presentations. The sustainable design integration was flawless.",
      author: "Dr. Amanda Foster",
      role: "Environmental Consultant"
    }
  },
  {
    id: "corporate-headquarters",
    title: "Corporate Headquarters",
    category: "Commercial",
    description:
      "A state-of-the-art office building featuring innovative workspace design and sustainable architecture. This corporate headquarters represents the future of workplace design, combining cutting-edge technology, flexible workspaces,温度的 environmental consciousness to create an inspiring environment for modern professionals.",
    image: "/Scene 2.jpg",
    year: "2023",
    location: "San Francisco, CA",
    price: "$20,000",
    details: {
      client: "Tech Innovations Inc",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Revit"],
      duration: "4 weeks",
      area: "180,000 sq ft",
      floors: 12,
      features: [
        "Open-plan flexible workspaces",
        "Green roof and vertical gardens",
        "Smart building automation",
        "Collaborative meeting spaces",
        "Wellness and fitness facilities",
        "LEED Gold certification"
      ],
      challenges: [
        "Creating realistic office environments and lighting",
        "Balancing open spaces with privacy needs",
        "Showcasing sustainable features effectively"
      ],
      solutions: [
        "Advanced interior lighting simulation",
        "Modular workspace design approach",
        "Integrated sustainable technology visualization"
      ]
    },
    images: [
      "/skyscraper-exterior-night.jpg",
      "/Scene 6.jpg"
    ],
    gallery: {
      exterior: [
        "/skyscraper-exterior-night.jpg",
        "/skyscraper-exterior-night.jpg"
      ],
      interior: [
        "/Scene 6.jpg",
        "/Scene 5.jpg"
      ],
      details: [
        "/Exterior-4.jpg"
      ]
    },
    testimonials: {
      quote: "The visualizations helped us secure the lease and attract top talent. The modern workspace design was perfectly captured.",
      author: "David Kim",
      role: "CEO"
    }
  },
  {
    id: "minimalist-apartment",
    title: "Minimalist Apartment",
    category: "Interior",
    description:
      "A serene urban apartment embracing minimalist design principles with natural light and clean aesthetics. This sophisticated space demonstrates how simplicity and functionality can create profound beauty, featuring carefully curated materials, strategic lighting, and thoughtful spatial organization that promotes tranquility and mindfulness.",
    image: "/Scene 3.jpg",
    year: "2024",
    location: "Tokyo, Japan",
    price: "$8,500",
    details: {
      client: "Private Client",
      scope: "Interior Visualization",
      software: ["3ds Max", "Corona", "Photoshop", "Substance"],
      duration: "2 weeks",
      area: "1,200 sq ft",
      bedrooms: 2,
      bathrooms: 1,
      floors: 1,
      features: [
        "Natural wood finishes",
        "Hidden storage solutions",
        "Minimalist furniture design",
        "Natural light optimization",
        "Zen garden integration",
        "Smart home technology"
      ],
      challenges: [
        "Creating realistic natural lighting effects",
        "Balancing minimalism with functionality",
        "Achieving authentic Japanese design aesthetics"
      ],
      solutions: [
        "Advanced daylight simulation and material studies",
        "Innovative space-saving design solutions",
        "Cultural design research and authentic material sourcing"
      ]
    },
    images: [
      "/Scene 4.jpg",
      "/Scene 8.jpg",
      "/Scene 9.jpg",
      "/Scene 10.jpg"
    ],
    gallery: {
      exterior: [],
      interior: [
        "/Scene 4.jpg",
        "/Scene 8.jpg",
        "/Scene 9.jpg",
        "/Scene 10.jpg"
      ],
      details: [
        "/Scene 3.jpg"
      ]
    },
    testimonials: {
      quote: "The minimalist aesthetic was perfectly captured. The natural lighting simulation was incredibly realistic and helped us make informed design decisions.",
      author: "Yuki Tanaka",
      role: "Interior Designer"
    }
  },
  {
    id: "luxury-hotel-resort",
    title: "Luxury Hotel Resort",
    category: "Hospitality",
    description:
      "A world-class luxury resort featuring stunning architecture, premium amenities, and breathtaking ocean views. This five-star destination combines contemporary design with tropical elegance, offering guests an unparalleled experience in paradise.",
    image: "/Exterior-3.jpg",
    year: "2024",
    location: "Malibu, CA",
    price: "$45,000",
    details: {
      client: "Paradise Resorts International",
      scope: "Master Plan & Key Visualizations",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion", "Unreal Engine"],
      duration: "6 weeks",
      area: "75 acres",
      bedrooms: 200,
      bathrooms: 200,
      floors: 3,
      features: [
        "Oceanfront infinity pools",
        "Private beach access",
        "Spa and wellness center",
        "Multiple fine dining restaurants",
        "Conference and event facilities",
        "Helipad and marina"
      ],
      challenges: [
        "Creating realistic water and lighting effects",
        "Balancing luxury with environmental sustainability",
        "Showcasing multiple architectural styles harmoniously"
      ],
      solutions: [
        "Advanced fluid simulation and caustics rendering",
        "Integrated sustainable design systems",
        "Unified design language with regional variations"
      ]
    },
    images: [
      "/Scene 5.jpg",
      "/Scene 6.jpg",
      "/Scene 3.jpg"
    ],
    gallery: {
      exterior: [
        "/Exterior-3.jpg",
        "/Exterior-5.jpg"
      ],
      interior: [
        "/Scene 5.jpg",
        "/Scene 6.jpg",
        "/Scene 3.jpg"
      ],
      details: [
        "/Scene 7.jpg"
      ]
    },
    testimonials: {
      quote: "The resort visualizations exceeded our expectations and helped secure $50M in pre-opening bookings.",
      author: "Robert Williams",
      role: "VP of Development"
    }
  },
  {
    id: "smart-office-complex",
    title: "Smart Office Complex",
    category: "Commercial",
    description:
      "A cutting-edge office complex featuring smart building technology, flexible workspaces, and sustainable design. This futuristic workspace represents the next generation of corporate environments, integrating AI-powered systems with human-centric design.",
    image: "/Scene 2.jpg",
    year: "2024",
    location: "Seattle, WA",
    price: "$30,000",
    details: {
      client: "TechForward Corp",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "Corona", "Photoshop", "Revit", "Dynamo"],
      duration: "5 weeks",
      area: "320,000 sq ft",
      floors: 18,
      features: [
        "AI-powered building management",
        "Flexible modular workspaces",
        "Vertical gardens and green walls",
        "Advanced HVAC systems",
        "Smart lighting and climate control",
        "Rooftop solar array"
      ],
      challenges: [
        "Visualizing complex smart building systems",
        "Creating realistic futuristic technology",
        "Balancing innovation with practicality"
      ],
      solutions: [
        "Detailed system integration visualization",
        "Advanced material and lighting studies",
        "Human-centered design approach"
      ]
    },
    images: [
      "/skyscraper-exterior-night.jpg",
      "/skyscraper-exterior-night.jpg"
    ],
    gallery: {
      exterior: [
        "/skyscraper-exterior-night.jpg",
        "/skyscraper-exterior-night.jpg"
      ],
      interior: [
        "/Scene 6.jpg",
        "/Scene 5.jpg"
      ],
      details: [
        "/Exterior-4.jpg"
      ]
    },
    testimonials: {
      quote: "The smart building visualizations helped us attract top tech talent and secure LEED Platinum certification.",
      author: "Lisa Chen",
      role: "Chief Technology Officer"
    }
  },
  {
    id: "mountain-retreat",
    title: "Mountain Retreat Villa",
    category: "Residential",
    description:
      "A stunning mountain retreat featuring panoramic views, natural materials, and sustainable design. This architectural gem seamlessly integrates with its alpine environment, offering residents a peaceful sanctuary surrounded by nature's beauty.",
    image: "/Exterior-1.jpg",
    year: "2023",
    location: "Aspen, CO",
    price: "$18,000",
    details: {
      client: "Mountain Living Group",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Forest Pack"],
      duration: "4 weeks",
      area: "3,800 sq ft",
      bedrooms: 4,
      bathrooms: 3,
      floors: 2,
      features: [
        "Panoramic mountain views",
        "Natural stone and wood finishes",
        "Geothermal heating system",
        "Large outdoor terraces",
        "Wine cellar and tasting room",
        "Home theater and gym"
      ],
      challenges: [
        "Creating realistic mountain landscapes",
        "Achieving authentic natural lighting",
        "Integrating sustainable systems seamlessly"
      ],
      solutions: [
        "Advanced terrain modeling and vegetation",
        "Sophisticated daylight analysis",
        "Hidden sustainable technology integration"
      ]
    },
    images: [
      "/eco-friendly-house-green-roof-solar-panels.jpg",
      "/Exterior-3.jpg"
    ],
    gallery: {
      exterior: [
        "/eco-friendly-house-green-roof-solar-panels.jpg",
        "/Exterior-3.jpg",
        "/Exterior-4.jpg"
      ],
      interior: [
        "/Scene 3.jpg",
        "/Scene 4.jpg"
      ],
      details: [
        "/Scene 8.jpg"
      ]
    },
    testimonials: {
      quote: "The mountain retreat visualizations captured the essence of alpine living perfectly. Our clients were amazed.",
      author: "Mark Thompson",
      role: "Real Estate Developer"
    }
  },
  {
    id: "cultural-museum",
    title: "Contemporary Art Museum",
    category: "Commercial",
    description:
      "A world-class contemporary art museum featuring innovative architecture, flexible exhibition spaces, and cutting-edge technology. This cultural landmark showcases how modern design can enhance the appreciation of art while creating an inspiring public space.",
    image: "/Exterior-1.jpg",
    year: "2023",
    location: "Chicago, IL",
    price: "$22,000",
    details: {
      client: "Chicago Arts Foundation",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Revit"],
      duration: "4 weeks",
      area: "85,000 sq ft",
      floors: 4,
      features: [
        "Flexible exhibition galleries",
        "Interactive digital installations",
        "Rooftop sculpture garden",
        "Educational workshop spaces",
        "Restaurant and café",
        "Underground parking"
      ],
      challenges: [
        "Creating flexible space configurations",
        "Balancing natural and artificial lighting",
        "Showcasing architectural innovation"
      ],
      solutions: [
        "Modular space planning visualization",
        "Advanced lighting simulation",
        "Iconic architectural form development"
      ]
    },
    images: [
      "/Exterior-4.jpg",
      "/Exterior-5.jpg"
    ],
    gallery: {
      exterior: [
        "/Exterior-4.jpg",
        "/Exterior-5.jpg"
      ],
      interior: [
        "/Scene 6.jpg",
        "/Scene 3.jpg"
      ],
      details: [
        "/Scene 4.jpg"
      ]
    },
    testimonials: {
      quote: "The museum visualizations helped secure $15M in funding and became the centerpiece of our capital campaign.",
      author: "Dr. Sarah Mitchell",
      role: "Museum Director"
    }
  },
  {
    id: "urban-loft-renovation",
    title: "Urban Loft Renovation",
    category: "Interior",
    description:
      "A stunning loft renovation that transforms an industrial space into a modern urban sanctuary. This project showcases how creative design can maximize small spaces while maintaining functionality and aesthetic appeal in the heart of the city.",
    image: "/Scene 3.jpg",
    year: "2024",
    location: "Brooklyn, NY",
    price: "$9,500",
    details: {
      client: "Urban Living Collective",
      scope: "Interior Visualization",
      software: ["3ds Max", "Corona", "Photoshop", "Substance"],
      duration: "2 weeks",
      area: "1,800 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      floors: 1,
      features: [
        "Open-plan living space",
        "Exposed brick and concrete",
        "Custom built-in storage",
        "Industrial-style lighting",
        "Rooftop terrace access",
        "Smart home integration"
      ],
      challenges: [
        "Maximizing space in small footprint",
        "Preserving industrial character",
        "Creating modern comfort in old building"
      ],
      solutions: [
        "Innovative space-saving solutions",
        "Careful material selection and preservation",
        "Modern amenities with industrial aesthetic"
      ]
    },
    images: [
      "/Scene 4.jpg",
      "/Scene 8.jpg",
      "/Scene 9.jpg",
      "/Scene 10.jpg"
    ],
    gallery: {
      exterior: [],
      interior: [
        "/Scene 4.jpg",
        "/Scene 8.jpg",
        "/Scene 9.jpg",
        "/Scene 10.jpg"
      ],
      details: [
        "/Scene 3.jpg"
      ]
    },
    testimonials: {
      quote: "The loft renovation visualizations helped us sell the concept to investors and secure additional funding.",
      author: "Jessica Rodriguez",
      role: "Project Manager"
    }
  },
  {
    id: "medical-center",
    title: "Advanced Medical Center",
    category: "Commercial",
    description:
      "A state-of-the-art medical center featuring cutting-edge healthcare technology, patient-centered design, and healing environments. This facility represents the future of healthcare architecture, combining advanced medical capabilities with comforting, therapeutic spaces.",
    image: "/Scene 1.jpg",
    year: "2024",
    location: "Boston, MA",
    price: "$28,000",
    details: {
      client: "Boston Medical Group",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Revit"],
      duration: "5 weeks",
      area: "180,000 sq ft",
      floors: 8,
      features: [
        "Advanced surgical suites",
        "Healing gardens and courtyards",
        "Patient-centered room design",
        "State-of-the-art imaging center",
        "Research laboratories",
        "Emergency department"
      ],
      challenges: [
        "Creating calming healthcare environments",
        "Visualizing complex medical equipment",
        "Balancing functionality with aesthetics"
      ],
      solutions: [
        "Evidence-based design principles",
        "Detailed equipment integration",
        "Healing-focused architectural elements"
      ]
    },
    images: [
      "/Scene 6.jpg",
      "/Scene 5.jpg"
    ],
    gallery: {
      exterior: [
        "/skyscraper-exterior-night.jpg"
      ],
      interior: [
        "/Scene 6.jpg",
        "/Scene 5.jpg",
        "/Scene 3.jpg"
      ],
      details: [
        "/Exterior-4.jpg"
      ]
    },
    testimonials: {
      quote: "The medical center visualizations were crucial for regulatory approval and helped reduce patient anxiety about the new facility.",
      author: "Dr. Michael Foster",
      role: "Chief Medical Officer"
    }
  },
  {
    id: "sustainable-apartment-complex",
    title: "Sustainable Apartment Complex",
    category: "Residential",
    description:
      "A groundbreaking sustainable apartment complex featuring net-zero energy design, community gardens, and innovative green technologies. This development sets new standards for eco-friendly urban living while providing affordable luxury housing.",
    image: "/Exterior-3.jpg",
    year: "2024",
    location: "Portland, OR",
    price: "$32,000",
    details: {
      client: "Green Living Developments",
      scope: "Master Plan & Key Visualizations",
      software: ["3ds Max", "Corona", "Photoshop", "Lumion", "SketchUp"],
      duration: "6 weeks",
      area: "12 acres",
      bedrooms: 180,
      bathrooms: 180,
      floors: 4,
      features: [
        "Net-zero energy design",
        "Community rooftop gardens",
        "Rainwater harvesting system",
        "Electric vehicle charging stations",
        "Shared community spaces",
        "LEED Platinum certification"
      ],
      challenges: [
        "Achieving net-zero energy goals",
        "Creating community-focused design",
        "Balancing sustainability with affordability"
      ],
      solutions: [
        "Integrated renewable energy systems",
        "Community-centered space planning",
        "Cost-effective sustainable materials"
      ]
    },
    images: [
      "/eco-friendly-house-green-roof-solar-panels.jpg",
      "/Exterior-4.jpg"
    ],
    gallery: {
      exterior: [
        "/eco-friendly-house-green-roof-solar-panels.jpg",
        "/Exterior-4.jpg",
        "/Exterior-5.jpg"
      ],
      interior: [
        "/Scene 4.jpg",
        "/Scene 8.jpg"
      ],
      details: [
        "/Scene 3.jpg"
      ]
    },
    testimonials: {
      quote: "The sustainable complex visualizations helped us achieve the highest green building certification and attracted environmentally conscious residents.",
      author: "Amanda Green",
      role: "Sustainability Director"
    }
  },
  {
    id: "mca-condo-complex",
    title: "MCA Condo Complex",
    category: "Residential",
    description:
      "A modern condominium complex featuring sleek contemporary architecture, elegant facades, and thoughtfully designed residential units. This development showcases sophisticated urban living with its innovative design, premium finishes, and strategic location, offering residents a perfect blend of comfort, style, and convenience.",
    image: "/01- MCA CONDO COMPLEX/Exterior-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$20,000",
    details: {
      client: "MCA Development",
      scope: "Exterior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "3 weeks",
      area: "150,000 sq ft",
      bedrooms: 200,
      bathrooms: 200,
      floors: 15,
      features: [
        "Contemporary architectural design",
        "Premium exterior finishes",
        "Modern glass and concrete facade",
        "Strategic unit layouts",
        "Landscaped common areas",
        "Urban location with easy access"
      ],
      challenges: [
        "Creating realistic building materials and textures",
        "Achieving optimal lighting for different times of day",
        "Showcasing architectural details accurately"
      ],
      solutions: [
        "High-resolution material mapping and texture studies",
        "Advanced daylight simulation and rendering",
        "Detailed architectural element visualization"
      ]
    },
    images: [
      "/01- MCA CONDO COMPLEX/Exterior-1.jpg",
      "/01- MCA CONDO COMPLEX/Exterior-2.jpg",
      "/01- MCA CONDO COMPLEX/Exterior-3.jpg",
      "/01- MCA CONDO COMPLEX/Exterior-4.jpg",
      "/01- MCA CONDO COMPLEX/Exterior-5.jpg"
    ],
    gallery: {
      exterior: [
        "/01- MCA CONDO COMPLEX/Exterior-1.jpg",
        "/01- MCA CONDO COMPLEX/Exterior-2.jpg",
        "/01- MCA CONDO COMPLEX/Exterior-3.jpg",
        "/01- MCA CONDO COMPLEX/Exterior-4.jpg",
        "/01- MCA CONDO COMPLEX/Exterior-5.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The exterior visualizations perfectly captured our vision for the complex. The photorealistic quality helped us secure pre-construction sales and investor confidence.",
      author: "Sophal Chan",
      role: "Project Developer"
    }
  },
  {
    id: "liveron-sportcenter",
    title: "LIVERON SPORTCENTER",
    category: "Commercial",
    description:
      "A state-of-the-art sports center featuring modern athletic facilities, cutting-edge design, and versatile spaces for multiple sports activities. This dynamic facility showcases innovative architecture that supports both professional training and community recreation, creating an inspiring environment for athletes and fitness enthusiasts.",
    image: "/06-LIVERON SPORTCENTER/RENDER IMAGE/Sport-01-3.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$18,000",
    details: {
      client: "LIVERON Sports",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "3 weeks",
      area: "85,000 sq ft",
      floors: 3,
      features: [
        "Multi-purpose sports courts",
        "Modern architectural design",
        "Flexible training spaces",
        "Premium athletic facilities",
        "Community recreation areas",
        "Contemporary facade design"
      ],
      challenges: [
        "Creating realistic sports facility environments",
        "Showcasing dynamic spaces for various activities",
        "Achieving optimal lighting for athletic performance"
      ],
      solutions: [
        "Advanced lighting simulation for sports environments",
        "Flexible space configuration visualization",
        "Detailed material studies for athletic surfaces"
      ]
    },
    images: [
      "/06-LIVERON SPORTCENTER/RENDER IMAGE/Sport-01-3.jpg",
      "/06-LIVERON SPORTCENTER/RENDER IMAGE/Sport-9.jpg"
    ],
    gallery: {
      exterior: [
        "/06-LIVERON SPORTCENTER/RENDER IMAGE/Sport-01-3.jpg",
        "/06-LIVERON SPORTCENTER/RENDER IMAGE/Sport-9.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The sports center visualizations effectively showcased our facility's capabilities and helped attract sponsors and members before completion.",
      author: "Rithy Kim",
      role: "Facility Manager"
    }
  },
  {
    id: "the-peak-shopping-mall",
    title: "The Peak Shopping Mall",
    category: "Commercial",
    description:
      "A modern shopping mall featuring contemporary retail architecture, spacious shopping environments, and innovative design elements. This commercial development showcases sophisticated retail spaces with premium finishes, strategic tenant layouts, and a vibrant shopping experience that attracts visitors and enhances the urban landscape.",
    image: "/02-The Peak Shopping Mall/RENDER IMAGE/Exterior-1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$22,000",
    details: {
      client: "The Peak Development",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "4 weeks",
      area: "200,000 sq ft",
      floors: 4,
      features: [
        "Modern retail architecture",
        "Spacious shopping corridors",
        "Premium tenant spaces",
        "Contemporary facade design",
        "Strategic lighting design",
        "Vibrant commercial atmosphere"
      ],
      challenges: [
        "Creating realistic retail environments and storefronts",
        "Showcasing multiple tenant spaces effectively",
        "Achieving optimal lighting for shopping experiences"
      ],
      solutions: [
        "Advanced lighting simulation for retail environments",
        "Detailed storefront and interior visualization",
        "Comprehensive material studies for commercial spaces"
      ]
    },
    images: [
      "/02-The Peak Shopping Mall/RENDER IMAGE/Exterior-1.jpg"
    ],
    gallery: {
      exterior: [
        "/02-The Peak Shopping Mall/RENDER IMAGE/Exterior-1.jpg"
      ],
      interior: [],
      details: []
    },
    videos: [
      "/02-The Peak Shopping Mall/VIDEO/Clip 1.avi",
      "/02-The Peak Shopping Mall/VIDEO/Clip 2.mp4",
      "/02-The Peak Shopping Mall/VIDEO/Clip 7(1).mp4",
      "/02-The Peak Shopping Mall/VIDEO/Clip 8(1).mp4"
    ],
    testimonials: {
      quote: "The shopping mall visualizations perfectly captured our vision for the retail space. The photorealistic quality helped us attract premium tenants and secure investor confidence.",
      author: "Sokha Lim",
      role: "Project Manager"
    }
  },
  {
    id: "trivienna-mixed-use-building",
    title: "TRIVIENNA MIXED USE BUILDING",
    category: "Commercial",
    description:
      "A prestigious mixed-use development combining residential, commercial, and retail spaces in a modern architectural masterpiece. This landmark building showcases innovative design, premium finishes, and strategic urban planning, creating a vibrant community hub that seamlessly integrates living, working, and shopping experiences.",
    image: "/03-TRIVIENNA MIXED USE BUILDING/ANIMATION/Clip 1.mp4", // Using first video as hero, will be handled by video player
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$35,000",
    details: {
      client: "TRIVIENNA Development",
      scope: "Exterior & Interior Visualization & Animation",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion", "After Effects"],
      duration: "5 weeks",
      area: "350,000 sq ft",
      floors: 25,
      features: [
        "Mixed-use development design",
        "Modern architectural facade",
        "Premium residential units",
        "Commercial retail spaces",
        "Strategic location planning",
        "Advanced building systems"
      ],
      challenges: [
        "Creating realistic mixed-use environments",
        "Showcasing multiple program types effectively",
        "Achieving photorealistic animations and renders"
      ],
      solutions: [
        "Advanced 3D modeling and animation techniques",
        "Comprehensive material and lighting studies",
        "Dynamic camera movements and cinematic presentations"
      ]
    },
    images: [],
    gallery: {
      exterior: [],
      interior: [],
      details: []
    },
    videos: [
      "/03-TRIVIENNA MIXED USE BUILDING/ANIMATION/Clip 1.mp4",
      "/03-TRIVIENNA MIXED USE BUILDING/ANIMATION/Clip 15.mp4"
    ],
    testimonials: {
      quote: "The animations and visualizations brought our mixed-use concept to life in an extraordinary way. The cinematic presentation helped us secure investors and attract premium tenants before construction even began.",
      author: "David Chea",
      role: "Development Director"
    }
  },
  {
    id: "mixed-use-building",
    title: "Mixed Use Building",
    category: "Commercial",
    description:
      "A comprehensive mixed-use development combining residential, commercial, and retail spaces in a dynamic urban setting. This architectural masterpiece showcases innovative design, modern aesthetics, and strategic space utilization, creating a vibrant community hub that seamlessly integrates multiple functions within a single, cohesive structure.",
    image: "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/URBAN 3BUILDING (1 of 8).jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$40,000",
    details: {
      client: "Urban Development Group",
      scope: "Exterior & Interior Visualization & Animation",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion", "After Effects", "Lightroom"],
      duration: "6 weeks",
      area: "450,000 sq ft",
      floors: 30,
      features: [
        "Mixed-use development design",
        "Modern architectural facade",
        "Premium residential units",
        "Commercial retail spaces",
        "Office and business facilities",
        "Strategic urban integration",
        "Advanced building systems"
      ],
      challenges: [
        "Creating realistic mixed-use environments",
        "Showcasing multiple program types effectively",
        "Achieving photorealistic animations and renders",
        "Balancing different functional requirements"
      ],
      solutions: [
        "Advanced 3D modeling and animation techniques",
        "Comprehensive material and lighting studies",
        "Dynamic camera movements and cinematic presentations",
        "Modular space planning visualization"
      ]
    },
    images: [
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/URBAN 3BUILDING (1 of 8).jpg",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/01.jpg",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/02.jpg",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/03.jpg",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/04.jpg",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/11.jpg"
    ],
    gallery: {
      exterior: [
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/URBAN 3BUILDING (1 of 8).jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/01.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/02.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/03.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/04.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/11.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 2_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 3_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 4_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 5_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 6_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 7_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 8_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 10_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 11_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 12_1.jpg",
        "/04-MIXED USE BUILDING/MIXED USE BUILDING/RENDER IMAGES/PSD/LIGHTROOM/Scene 13_1.jpg"
      ],
      interior: [],
      details: []
    },
    videos: [
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/ANIMATION/Clip 2.mp4",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/ANIMATION/Clip 3.mp4",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/ANIMATION/Clip 4.mp4",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/ANIMATION/Clip 5.mp4",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/ANIMATION/Clip 6.mp4",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/ANIMATION/Clip 7.mp4",
      "/04-MIXED USE BUILDING/MIXED USE BUILDING/ANIMATION/Clip 8.mp4"
    ],
    testimonials: {
      quote: "The comprehensive visualizations and animations exceeded all expectations. The detailed renders and cinematic presentations were instrumental in securing approvals and attracting investors for this ambitious mixed-use development.",
      author: "Sokunthea Lim",
      role: "Project Director"
    }
  },
  {
    id: "kalmet-office-building",
    title: "KALMET OFFICE BUILDING",
    category: "Commercial",
    description:
      "A modern office building featuring contemporary architectural design, sleek facades, and professional workspace environments. This commercial development showcases sophisticated corporate architecture with premium finishes, strategic design elements, and a professional aesthetic that creates an inspiring workplace environment.",
    image: "/08-KALMET OFFICE BUIDLING/Render image/Scene 1.jpg",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    price: "$25,000",
    details: {
      client: "KALMET Group",
      scope: "Exterior & Interior Visualization",
      software: ["3ds Max", "V-Ray", "Photoshop", "Lumion"],
      duration: "4 weeks",
      area: "180,000 sq ft",
      floors: 12,
      features: [
        "Modern office architecture",
        "Contemporary facade design",
        "Premium exterior finishes",
        "Professional workspace design",
        "Strategic lighting design",
        "Corporate aesthetic"
      ],
      challenges: [
        "Creating realistic office building materials and textures",
        "Achieving optimal lighting for different times of day",
        "Showcasing architectural details accurately"
      ],
      solutions: [
        "High-resolution material mapping and texture studies",
        "Advanced daylight simulation and rendering",
        "Detailed architectural element visualization"
      ]
    },
    images: [
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 1.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 2.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 3.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 4.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 5.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 6.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 7.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 8.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 9.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 10.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 11.jpg",
      "/08-KALMET OFFICE BUIDLING/Render image/Scene 12.jpg"
    ],
    gallery: {
      exterior: [
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 1.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 2.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 3.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 4.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 5.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 6.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 7.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 8.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 9.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 10.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 11.jpg",
        "/08-KALMET OFFICE BUIDLING/Render image/Scene 12.jpg"
      ],
      interior: [],
      details: []
    },
    testimonials: {
      quote: "The office building visualizations perfectly captured our vision for the corporate space. The photorealistic quality helped us secure tenants and investor confidence before construction completion.",
      author: "Vichea Lim",
      role: "Project Developer"
    }
  },
]

// Export both full projects and limited for home page  
export const limitedProjects = projects.slice(0, 6)
