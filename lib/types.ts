export interface PortfolioProject {
  id: string
  title: string
  category: "residential" | "commercial" | "interior" | "exterior" | "all"
  description: string
  year: number
  location: string
  client?: string
  coverImage: string
  images: string[]
  tags: string[]
  featured: boolean
}

export type ProjectCategory = "all" | "residential" | "commercial" | "interior" | "exterior"
