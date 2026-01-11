import { Navigation } from "@/components/Navbar/navigation";
import { HeroSection } from "@/components/Hero/hero-section";
import { AnimatedTextSection } from "@/components/Animated/animated-text-section";
import { WorksGallery } from "@/components/Gallery/works-gallery";
import { ServicesSection } from "@/components/services/services-section";
import { TestimonialCarousel } from "@/components/ScrollAndMarquee/testimonial-carousel";
import { ContactSection } from "@/components/Contact/contact-section";
import { Footer } from "@/components/Footer/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background" suppressHydrationWarning>
      <Navigation />
      <HeroSection />
      <AnimatedTextSection />
      <WorksGallery />
      <ServicesSection />
      <TestimonialCarousel />
      <ContactSection />
      <Footer />
    </main>
  );
}
