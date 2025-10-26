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
  testimonials?: {
    quote: string
    author: string
    role: string
  }
}

export const projects: Project[] = [
  {
    id: "modern-villa",
    title: "Modern Villa Residence",
    category: "Residential",
    description:
      "A stunning contemporary villa featuring clean lines, expansive glass walls, and seamless indoor-outdoor living spaces. This architectural masterpiece showcases the perfect harmony between modern design and natural surroundings, creating an oasis of luxury and tranquility.",
    image: "/projects/modern-villa-main.jpg",
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
      "/modern-villa-exterior-sunset.jpg",
      "/modern-villa-bedroom-ocean-view.jpg",
      "/modern-villa-living-room.png",
      "/modern-villa-pool-area.jpg"
    ],
    gallery: {
      exterior: [
        "/modern-villa-exterior-sunset.jpg",
        "/modern-luxury-villa-sunset-ocean-view.jpg"
      ],
      interior: [
        "/modern-villa-bedroom-ocean-view.jpg",
        "/modern-villa-living-room.png",
        "/modern-luxury-architectural-interior-with-dramatic.jpg"
      ],
      details: [
        "/modern-villa-pool-area.jpg",
        "/minimalist-loft-interior-concrete-natural-light.jpg"
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
    image: "/projects/urban-tower-main.jpg",
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
      "/modern-skyscraper-tower-night-city.jpg",
      "/skyscraper-exterior-night.jpg"
    ],
    gallery: {
      exterior: [
        "/modern-skyscraper-tower-night-city.jpg",
        "/skyscraper-exterior-night.jpg"
      ],
      aerial: [
        "/modern-skyscraper-tower-night-city.jpg"
      ],
      details: [
        "/glass-pavilion-architecture-modern-garden.jpg",
        "/glass-pavilion-exterior-day.jpg"
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
    image: "/projects/luxury-penthouse-main.jpg",
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
      "/penthouse-interior-city-view.jpg",
      "/luxury-lobby-interior-marble.jpg",
      "/hotel-lounge-area-velvet.jpg"
    ],
    gallery: {
      interior: [
        "/penthouse-interior-city-view.jpg",
        "/luxury-lobby-interior-marble.jpg",
        "/hotel-lounge-area-velvet.jpg"
      ],
      details: [
        "/modern-luxury-architectural-interior-with-dramatic.jpg"
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
    image: "/projects/eco-resort-main.jpg",
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
      "/glass-pavilion-architecture-modern-garden.jpg"
    ],
    gallery: {
      exterior: [
        "/eco-friendly-house-green-roof-solar-panels.jpg",
        "/glass-pavilion-architecture-modern-garden.jpg",
        "/glass-pavilion-exterior-day.jpg"
      ],
      interior: [
        "/hotel-lounge-area-velvet.jpg"
      ],
      details: [
        "/minimalist-loft-interior-concrete-natural-light.jpg"
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
      "A state-of-the-art office building featuring innovative workspace design and sustainable architecture. This corporate headquarters represents the future of workplace design, combining cutting-edge technology, flexible workspaces, and environmental consciousness to create an inspiring environment for modern professionals.",
    image: "/projects/corporate-hq-main.jpg",
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
      "/modern-skyscraper-tower-night-city.jpg",
      "/luxury-lobby-interior-marble.jpg"
    ],
    gallery: {
      exterior: [
        "/modern-skyscraper-tower-night-city.jpg",
        "/skyscraper-exterior-night.jpg"
      ],
      interior: [
        "/luxury-lobby-interior-marble.jpg",
        "/hotel-lounge-area-velvet.jpg"
      ],
      details: [
        "/glass-pavilion-architecture-modern-garden.jpg"
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
    image: "/projects/minimalist-apt-main.jpg",
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
      "/minimalist-loft-interior-concrete-natural-light.jpg",
      "/loft-living-room-minimalist.jpg",
      "/loft-kitchen-concrete-wood.jpg",
      "/loft-bedroom-minimalist.jpg"
    ],
    gallery: {
      interior: [
        "/minimalist-loft-interior-concrete-natural-light.jpg",
        "/loft-living-room-minimalist.jpg",
        "/loft-kitchen-concrete-wood.jpg",
        "/loft-bedroom-minimalist.jpg"
      ],
      details: [
        "/modern-luxury-architectural-interior-with-dramatic.jpg"
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
    image: "/hotel-lounge-area-velvet.jpg",
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
      "/hotel-lounge-area-velvet.jpg",
      "/luxury-lobby-interior-marble.jpg",
      "/modern-luxury-architectural-interior-with-dramatic.jpg"
    ],
    gallery: {
      exterior: [
        "/modern-luxury-villa-sunset-ocean-view.jpg",
        "/glass-pavilion-exterior-day.jpg"
      ],
      interior: [
        "/hotel-lounge-area-velvet.jpg",
        "/luxury-lobby-interior-marble.jpg",
        "/modern-luxury-architectural-interior-with-dramatic.jpg"
      ],
      details: [
        "/penthouse-interior-city-view.jpg"
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
    image: "/modern-skyscraper-tower-night-city.jpg",
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
      "/modern-skyscraper-tower-night-city.jpg",
      "/skyscraper-exterior-night.jpg"
    ],
    gallery: {
      exterior: [
        "/modern-skyscraper-tower-night-city.jpg",
        "/skyscraper-exterior-night.jpg"
      ],
      interior: [
        "/luxury-lobby-interior-marble.jpg",
        "/hotel-lounge-area-velvet.jpg"
      ],
      details: [
        "/glass-pavilion-architecture-modern-garden.jpg"
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
    image: "/eco-friendly-house-green-roof-solar-panels.jpg",
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
      "/modern-luxury-villa-sunset-ocean-view.jpg"
    ],
    gallery: {
      exterior: [
        "/eco-friendly-house-green-roof-solar-panels.jpg",
        "/modern-luxury-villa-sunset-ocean-view.jpg",
        "/glass-pavilion-architecture-modern-garden.jpg"
      ],
      interior: [
        "/modern-luxury-architectural-interior-with-dramatic.jpg",
        "/minimalist-loft-interior-concrete-natural-light.jpg"
      ],
      details: [
        "/loft-living-room-minimalist.jpg"
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
    image: "/glass-pavilion-architecture-modern-garden.jpg",
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
      "/glass-pavilion-architecture-modern-garden.jpg",
      "/glass-pavilion-exterior-day.jpg"
    ],
    gallery: {
      exterior: [
        "/glass-pavilion-architecture-modern-garden.jpg",
        "/glass-pavilion-exterior-day.jpg"
      ],
      interior: [
        "/luxury-lobby-interior-marble.jpg",
        "/modern-luxury-architectural-interior-with-dramatic.jpg"
      ],
      details: [
        "/minimalist-loft-interior-concrete-natural-light.jpg"
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
    image: "/minimalist-loft-interior-concrete-natural-light.jpg",
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
      "/minimalist-loft-interior-concrete-natural-light.jpg",
      "/loft-living-room-minimalist.jpg",
      "/loft-kitchen-concrete-wood.jpg",
      "/loft-bedroom-minimalist.jpg"
    ],
    gallery: {
      interior: [
        "/minimalist-loft-interior-concrete-natural-light.jpg",
        "/loft-living-room-minimalist.jpg",
        "/loft-kitchen-concrete-wood.jpg",
        "/loft-bedroom-minimalist.jpg"
      ],
      details: [
        "/modern-luxury-architectural-interior-with-dramatic.jpg"
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
    image: "/luxury-lobby-interior-marble.jpg",
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
      "/luxury-lobby-interior-marble.jpg",
      "/hotel-lounge-area-velvet.jpg"
    ],
    gallery: {
      exterior: [
        "/modern-skyscraper-tower-night-city.jpg"
      ],
      interior: [
        "/luxury-lobby-interior-marble.jpg",
        "/hotel-lounge-area-velvet.jpg",
        "/modern-luxury-architectural-interior-with-dramatic.jpg"
      ],
      details: [
        "/glass-pavilion-architecture-modern-garden.jpg"
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
    image: "/eco-friendly-house-green-roof-solar-panels.jpg",
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
      "/glass-pavilion-architecture-modern-garden.jpg"
    ],
    gallery: {
      exterior: [
        "/eco-friendly-house-green-roof-solar-panels.jpg",
        "/glass-pavilion-architecture-modern-garden.jpg",
        "/glass-pavilion-exterior-day.jpg"
      ],
      interior: [
        "/minimalist-loft-interior-concrete-natural-light.jpg",
        "/loft-living-room-minimalist.jpg"
      ],
      details: [
        "/modern-luxury-architectural-interior-with-dramatic.jpg"
      ]
    },
    testimonials: {
      quote: "The sustainable complex visualizations helped us achieve the highest green building certification and attracted environmentally conscious residents.",
      author: "Amanda Green",
      role: "Sustainability Director"
    }
  },
]
