"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaPinterest, FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaBehance, FaWeixin } from "react-icons/fa"
import { getMediaUrl } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  const navLinks = [
    { href: "/courses", label: "Courses" },
    { href: "/projects", label: "Project" },
    { href: "/about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://pinterest.com", icon: FaPinterest, label: "Pinterest" },
    { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
    { href: "https://tiktok.com", icon: FaTiktok, label: "TikTok" },
    { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
    { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
    { href: "https://behance.net", icon: FaBehance, label: "Behance" },
    { href: "https://wechat.com", icon: FaWeixin, label: "WeChat" },
  ]

  const navClassName = mounted
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`
    : "fixed top-0 left-0 right-0 z-50 bg-transparent"

  return (
    <nav className={navClassName}>
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={getMediaUrl("/projects/Tipsbox logo png.png")}
              alt="Tipsbox Logo"
              className="h-20 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation and Social Media Icons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pr-4 mr-4 border-r border-border">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-6 h-6" />
                  </Link>
                )
              })}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get in Touch</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Social Media Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Get in Touch</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
