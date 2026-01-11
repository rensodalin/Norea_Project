"use client";

import { Navigation } from "@/components/Navbar/navigation";
import { Footer } from "@/components/Footer/footer";
import {
  GraduationCap,
  Code,
  Lightbulb,
  Target,
  Award,
  Users,
  TrendingUp,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { projects } from "@/lib/projects-data";
import { getMediaUrl } from "@/lib/utils";
import FadeContent from "@/components/Animated/fade-content";
import { Marquee3D } from "@/components/ScrollAndMarquee/marquee-3d";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Mouse Parallax State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const services = [
    {
      icon: GraduationCap,
      title: "D5 Render Training",
      description:
        "Master real-time rendering with professional techniques used in top studios.",
    },
    {
      icon: Code,
      title: "Software Instruction",
      description:
        "Expert guidance in Revit, Lumion, Enscape, SketchUp, and AutoCAD workflows.",
    },
    {
      icon: Lightbulb,
      title: "Architectural Design",
      description:
        "Innovative design solutions executed with precision and creative vision.",
    },
    {
      icon: Target,
      title: "Professional Mentorship",
      description:
        "Career-focused guidance for the next generation of architects.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Delivered", value: "100+" },
    { label: "Students Trained", value: "1500+" },
    { label: "Software Mastered", value: "7+" },
  ];

  return (
    <main className="min-h-screen bg-[#060010] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <Navigation />

      {/* Modern Typographic Hero with 3D Parallax */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#060010] to-[#060010] opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeContent delay={0} duration={1000}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm w-fit"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-gray-300 uppercase tracking-wider font-medium">
                    Est. 2014
                  </span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="block"
                  >
                    We Design
                  </motion.span>
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500 block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    The Future.
                  </motion.span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed font-light">
                  Bridging the gap between architectural vision and digital
                  reality through education and design excellence.
                </p>
              </FadeContent>
            </div>

            {/* Hero Image Feature with 3D Effect */}
            <div className="lg:col-span-5 relative hidden lg:block perspective-1000">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative z-10"
              >
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl transform-gpu">
                  <img
                    src="/profile/IMG_4335.JPG"
                    alt="Architectural Vision"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060010] via-transparent to-transparent opacity-40" />
                </div>

                {/* Decorative floating elements with varying depth */}
                <motion.div
                  style={{ translateZ: 50 }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-12 -right-12 w-24 h-24 border border-white/10 rounded-full backdrop-blur-md"
                />
                <motion.div
                  style={{ translateZ: -50 }}
                  animate={{ y: [0, 30, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Abstract Background Element */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Personal Brand Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <motion.div
                className="relative aspect-[3/4] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/profile/IMG_4339.JPG"
                  alt="Bun Sambath"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060010] via-transparent to-transparent opacity-60" />

                {/* Floating Name Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-white">Bun Sambath</h3>
                  <p className="text-primary font-medium">
                    Architect & Educator
                  </p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <FadeContent delay={200} duration={800}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Crafting{" "}
                  <span className="text-primary">Digital Excellence</span> in
                  Architecture
                </h2>
                <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                  <p>
                    With over a decade of experience at the intersection of
                    design and technology, I've dedicated my career to two core
                    missions: executing complex architectural projects and
                    empowering the next generation of designers.
                  </p>
                  <p>
                    My approach combines rigorous architectural discipline with
                    cutting-edge visualization tools. Whether it's a high-stakes
                    commercial development or a masterclass for aspiring
                    artists, the goal remains the same:{" "}
                    <span className="text-white font-medium">
                      uncompromising quality and clarity.
                    </span>
                  </p>
                  <p>
                    As an educator, I specialize in demystifying complex
                    software ecosystems—from D5 Render and Corona to Revit and
                    Lumion—turning technical barriers into creative bridges.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-12">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeContent>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <FadeContent>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <h2 className="text-4xl md:text-6xl font-bold">
                Areas of Expertise
              </h2>
              <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-right">
                Comprehensive solutions for modern architectural challenges.
              </p>
            </div>
          </FadeContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-10 group hover:bg-[#0f0f0f] transition-colors duration-500"
              >
                <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Marquee 3D */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl md:text-5xl font-bold">Selected Works</h2>
            <a
              href="/work"
              className="group flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <Marquee3D items={projects.slice(0, 8)} />
      </section>

      {/* Mission Statement - Minimal */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <FadeContent>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-8">
              "Our mission is to bridge the gap between{" "}
              <span className="text-primary">ambitious vision</span> and{" "}
              <span className="text-white">flawless execution</span>."
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </FadeContent>
        </div>
      </section>

      <Footer />
    </main>
  );
}
