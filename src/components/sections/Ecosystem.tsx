import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "wouter"
import { Badge } from "@/components/ui/Badge"

const products = [
  {
    name: "PineApple",
    desc: "The automated factory. The engine behind everything.",
    status: "internal",
    href: "/projects/pineapple",
  },
  {
    name: "BuildKit",
    desc: "Component library for rapid premium product design.",
    status: "in development",
    href: null,
  },
  {
    name: "NoteStack",
    desc: "Structured interconnected knowledge base for builders.",
    status: "in development",
    href: null,
  },
  {
    name: "FormFlow",
    desc: "Smart form builder with complex logic and automation.",
    status: "concept",
    href: null,
  },
  {
    name: "Orbit",
    desc: "Creator analytics and aggregated growth dashboard.",
    status: "concept",
    href: null,
  },
  {
    name: "Launchpad",
    desc: "One-click product launch and deployment system.",
    status: "concept",
    href: null,
  },
  {
    name: "Datagrip",
    desc: "Data pipeline automation explicitly for creators.",
    status: "concept",
    href: null,
  },
]

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">The Ecosystem</h2>
            <p className="text-xl text-muted-foreground font-medium">Products built inside PineApple.</p>
          </motion.div>
          <Link href="/projects" className="text-foreground font-bold hover:text-accent transition-colors flex items-center group">
            View all projects <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-2 border-foreground bg-white rounded-2xl p-5 sm:p-6 shadow-[2px_2px_0px_0px_#1a1a1a] hover:shadow-brutal-accent hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                  <Badge variant={product.status as any} className="uppercase">
                    {product.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground font-medium mb-8">
                  {product.desc}
                </p>
              </div>
              
              {product.href ? (
                <Link
                  href={product.href}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: products.length * 0.1 }}
            className="border-2 border-dashed border-muted-foreground bg-transparent rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[220px]"
          >
            <div className="w-12 h-12 rounded-full border-2 border-muted-foreground flex items-center justify-center mb-4">
              <span className="text-2xl font-black text-muted-foreground">+</span>
            </div>
            <h3 className="text-lg font-bold text-muted-foreground mb-2">More in the pipeline</h3>
            <p className="text-sm text-muted-foreground/70 font-medium">The factory never stops.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
