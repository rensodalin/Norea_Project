import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AnimatedTextSection } from "@/components/animated-text-section"
import { WorksGallery } from "@/components/works-gallery"
import { AboutSection } from "@/components/about-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AnimatedTextSection />
      <WorksGallery />
      <AboutSection />
      <TestimonialCarousel />
      <ContactSection />
      <Footer />
    </main>
  )
}
