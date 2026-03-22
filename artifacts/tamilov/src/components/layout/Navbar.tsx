import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Link } from "wouter"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

const navLinks = [
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Factory", href: "#factory" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Notes", href: "#notes" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b-2 border-foreground py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-black tracking-tighter text-foreground hover:text-accent transition-colors"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
          >
            Tamilov.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              size="sm" 
              onClick={(e) => {
                const el = document.querySelector("#work") as HTMLAnchorElement
                if (el) scrollToSection(e as any, "#work")
              }}
            >
              Work Together
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-background border-b-2 border-foreground shadow-brutal"
        >
          <div className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-bold text-foreground py-2 border-b-2 border-muted"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="mt-4 w-full"
              onClick={(e) => {
                const el = document.querySelector("#work") as HTMLAnchorElement
                if (el) scrollToSection(e as any, "#work")
              }}
            >
              Work Together
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
