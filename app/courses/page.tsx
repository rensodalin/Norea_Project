"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { courses } from "@/lib/courses-data"
import Link from "next/link"
import { Clock, Users, Play, ArrowRight } from "lucide-react"

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const uniqueCategories = [...new Set(courses.map(c => c.category))]
  const categories = ["All", ...uniqueCategories]

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#060010' }}>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Learn with Us</h1>
            <p className="text-xl text-gray-300">
              Master architectural visualization with our comprehensive courses
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24" style={{ backgroundColor: '#060010' }}>
        <div className="w-full px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-6xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-transparent text-green-400"
                    : "bg-transparent text-gray-300 hover:text-green-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-black rounded-lg overflow-hidden border border-border hover:border-green-500 transition-all duration-300"
              >
                {/* Course Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-green-400 font-medium">{course.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>

                  {/* Course Features */}
                  <ul className="space-y-2 mb-6">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Instructor & Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div>
                      <p className="text-xs text-gray-500">Instructor</p>
                      <p className="text-sm text-white font-medium">{course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-400">{course.price}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="#"
                    className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors group"
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

