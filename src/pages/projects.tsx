import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "wouter"
import { Badge } from "@/components/ui/Badge"
import { PageLayout } from "@/components/layout/PageLayout"

const projects = [
  {
    name: "PineApple",
    desc: "The automated factory. The engine behind the entire Tamilov ecosystem — handling idea validation, design, build, launch, and iteration.",
    status: "internal" as const,
    role: "Core infrastructure",
    href: "/projects/pineapple",
  },
  {
    name: "BuildKit",
    desc: "Component library for rapid premium product design. Reusable building blocks that maintain the Tamilov visual identity across products.",
    status: "live" as const,
    role: "Design system",
    href: null,
  },
  {
    name: "NoteStack",
    desc: "Structured interconnected knowledge base for builders. Organize thoughts, connect ideas, and build a second brain.",
    status: "live" as const,
    role: "Knowledge tool",
    href: null,
  },
  {
    name: "FormFlow",
    desc: "Smart form builder with complex logic and automation. Create adaptive forms that respond to user input in real time.",
    status: "beta" as const,
    role: "Product tool",
    href: null,
  },
  {
    name: "Orbit",
    desc: "Creator analytics and aggregated growth dashboard. Track performance across platforms in one unified view.",
    status: "beta" as const,
    role: "Analytics",
    href: null,
  },
  {
    name: "Launchpad",
    desc: "One-click product launch and deployment system. From build to live in minutes, not days.",
    status: "concept" as const,
    role: "Infrastructure",
    href: null,
  },
  {
    name: "Datagrip",
    desc: "Data pipeline automation explicitly for creators. Move, transform, and analyze data without writing code.",
    status: "concept" as const,
    role: "Data tool",
    href: null,
  },
]

export default function Projects() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">The Ecosystem</h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl">
              Products built inside PineApple. Each one solves a real problem, shares the same design DNA, and contributes to a growing platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="group border-2 border-foreground bg-white rounded-2xl p-6 shadow-[2px_2px_0px_0px_#1a1a1a] hover:shadow-brutal-accent hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                  <Badge variant={project.status}>{project.status}</Badge>
                </div>
                <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">{project.role}</p>
                <p className="text-muted-foreground font-medium mb-6 flex-1">{project.desc}</p>
                {project.href ? (
                  <Link
                    href={project.href}
                    className="self-start inline-flex items-center text-sm font-bold text-foreground group-hover:text-accent transition-colors"
                  >
                    View Product <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                ) : (
                  <span className="self-start inline-flex items-center text-sm font-bold text-muted-foreground/50">
                    Coming soon
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
