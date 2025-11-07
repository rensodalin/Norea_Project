export interface Course {
  id: string
  title: string
  description: string
  image: string
  category: string
  duration: string
  level: string
  price: string
  features: string[]
  instructor: string
  students: number
  lessons: number
}

export const courses: Course[] = [
  {
    id: "3dsmax-mastery",
    title: "3ds Max Complete Mastery",
    description: "Master the industry-standard software for architectural visualization from basics to advanced techniques.",
    image: "/16-SB TOWER/Render Image/LIGHTROOM/Exterior-1.jpg",
    category: "Software Training",
    duration: "8 weeks",
    level: "Beginner to Advanced",
    price: "$299",
    features: [
      "Complete 3ds Max workflow",
      "Modeling techniques",
      "UV unwrapping",
      "Scene organization",
      "Camera setups"
    ],
    instructor: "Bun Sambath",
    students: 1250,
    lessons: 48
  },
  {
    id: "vray-rendering",
    title: "V-Ray Photorealistic Rendering",
    description: "Learn to create stunning photorealistic renders using V-Ray for 3ds Max.",
    image: "/14-WHITE BEACH HOTEL BY SB/Render images/LIGHTROOM/seaside building-1.jpg",
    category: "Rendering",
    duration: "6 weeks",
    level: "Intermediate",
    price: "$249",
    features: [
      "Lighting techniques",
      "Material creation",
      "HDR environment setup",
      "Post-production",
      "Optimization tips"
    ],
    instructor: "Bun Sambath",
    students: 980,
    lessons: 32
  },
  {
    id: "corona-renderer",
    title: "Corona Renderer Fundamentals",
    description: "Master Corona Renderer for fast and beautiful architectural visualization.",
    image: "/15-APAC BUILDING/TWIN TOWER EXTERIOR-1.jpg",
    category: "Rendering",
    duration: "4 weeks",
    level: "Intermediate",
    price: "$199",
    features: [
      "Corona workflow",
      "Lighting studio setup",
      "Material shaders",
      "Render optimization",
      "Post-processing"
    ],
    instructor: "Bun Sambath",
    students: 750,
    lessons: 24
  },
  {
    id: "photoshop-post",
    title: "Photoshop Post-Production",
    description: "Professional post-processing techniques to enhance your renders in Photoshop.",
    image: "/13-WESTLINE UNIVERSITY/LIGHTROOM/Scene 1_1_upscale01.jpg",
    category: "Post-Production",
    duration: "4 weeks",
    level: "Beginner",
    price: "$179",
    features: [
      "Compositing techniques",
      "Color grading",
      "Layer management",
      "Adjustment layers",
      "Final polish"
    ],
    instructor: "Bun Sambath",
    students: 650,
    lessons: 20
  },
  {
    id: "exterior-viz",
    title: "Exterior Visualization Masterclass",
    description: "Complete guide to creating stunning exterior architectural visualizations.",
    image: "/11-THE CURVE K SHOPPING MALL/Render Image/Exterior-1.jpg",
    category: "Specialization",
    duration: "10 weeks",
    level: "Advanced",
    price: "$399",
    features: [
      "Site modeling",
      "Landscape creation",
      "Outdoor lighting",
      "Weather systems",
      "Composition techniques"
    ],
    instructor: "Bun Sambath",
    students: 420,
    lessons: 56
  },
  {
    id: "interior-design",
    title: "Interior Visualization Essentials",
    description: "Master the art of interior architectural visualization and staging.",
    image: "/08-KALMET OFFICE BUIDLING/Render image/Scene 1.jpg",
    category: "Specialization",
    duration: "8 weeks",
    level: "Intermediate",
    price: "$329",
    features: [
      "Interior staging",
      "Furniture placement",
      "Indoor lighting",
      "Material variety",
      "Composition rules"
    ],
    instructor: "Bun Sambath",
    students: 680,
    lessons: 40
  },
  {
    id: "lumion-realtime",
    title: "Lumion Realtime Visualization",
    description: "Create stunning real-time architectural visualizations with Lumion.",
    image: "/10-RUFER UNIVERSITY/Render image/Curve building-1.jpg",
    category: "Software Training",
    duration: "5 weeks",
    level: "Intermediate",
    price: "$229",
    features: [
      "Realtime workflow",
      "Scene building",
      "Effects and atmosphere",
      "Animation basics",
      "Video export"
    ],
    instructor: "Bun Sambath",
    students: 890,
    lessons: 28
  },
  {
    id: "modeling-techniques",
    title: "Advanced 3D Modeling Techniques",
    description: "Learn professional modeling techniques for architectural visualization.",
    image: "/19-NOREA HEAD OFFICE/Render image/LIGHTROOM/Exterior-1.jpg",
    category: "Modeling",
    duration: "6 weeks",
    level: "Advanced",
    price: "$279",
    features: [
      "Complex geometries",
      "Subdivision modeling",
      "Topology optimization",
      "Detail workflow",
      "Import/export"
    ],
    instructor: "Bun Sambath",
    students: 520,
    lessons: 36
  }
]

