import { motion } from "framer-motion"
import { ArrowRight, Layers, Zap, RotateCcw, CheckCircle, Package } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { PageLayout } from "@/components/layout/PageLayout"

const factorySteps = [
  { step: "01", label: "Idea", desc: "Capture and structure raw product ideas before touching a single tool" },
  { step: "02", label: "Validate", desc: "Test assumptions with real signals, not guesses" },
  { step: "03", label: "Design", desc: "Build interfaces with consistent design tokens and taste" },
  { step: "04", label: "Build", desc: "Ship functional software through a repeatable build process" },
  { step: "05", label: "Launch", desc: "Deploy through automated pipelines, not manual steps" },
  { step: "06", label: "Improve", desc: "Iterate based on real data, not assumptions" },
]

const updates = [
  { date: "March 2026", text: "PineApple v2 architecture in active development" },
  { date: "February 2026", text: "Validation pipeline shipped internally" },
  { date: "January 2026", text: "Design system aligned across all ecosystem products" },
]

const cardItems = [
  { icon: Zap,         label: "Automated build pipeline",      status: "in progress",  active: true  },
  { icon: CheckCircle, label: "Validation system",             status: "in progress",  active: true  },
  { icon: RotateCcw,   label: "Design token enforcement",      status: "internal",     active: true  },
  { icon: Package,     label: "Product packaging flow",        status: "in progress",  active: true  },
  { icon: Layers,      label: "Multi-product orchestration",   status: "coming later", active: false },
]

export default function PineApple() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="pt-32 pb-24 border-b-4 border-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="internal">Internal</Badge>
                <span className="text-sm font-bold text-muted-foreground">v2 in development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                PineApple is the internal engine.
              </h1>
              <p className="text-xl text-muted-foreground font-medium mb-8 max-w-xl">
                PineApple is still in development. It powers how products inside Tamilov are researched, structured, designed, built, and improved — turning a chaotic build process into repeatable systems.
              </p>
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <Link href="/projects">
                  <Button size="lg" className="group w-full sm:w-auto">
                    Explore the ecosystem <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/devlog">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    See what's in development
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Black card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="border-2 border-foreground rounded-2xl bg-foreground p-8 lg:p-10 shadow-brutal"
            >
              <div className="flex items-center gap-3 mb-2">
                <Layers className="w-8 h-8 text-accent" />
                <span className="text-xl font-black text-background">PineApple</span>
              </div>
              <p className="text-sm text-background/40 font-medium mb-6">Internal build system</p>
              <div className="space-y-4">
                {cardItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.active ? "bg-accent" : "bg-background/20"}`} />
                      <item.icon className={`w-4 h-4 flex-shrink-0 ${item.active ? "text-accent" : "text-background/30"}`} />
                      <span className={`font-semibold ${item.active ? "text-background" : "text-background/30"}`}>{item.label}</span>
                    </div>
                    <span className={`text-xs font-bold whitespace-nowrap ${
                      item.status === "in progress"  ? "text-accent" :
                      item.status === "internal"     ? "text-background/50" :
                                                       "text-background/25"
                    }`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY PINEAPPLE EXISTS */}
      <section className="py-24 border-b-4 border-foreground bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Why PineApple exists</h2>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl">
              Building one product is hard. Building multiple products consistently is harder. PineApple exists to turn that chaos into systems.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Repeatability", desc: "Every product follows the same internal pipeline. No reinventing the wheel. No ad hoc decisions under pressure." },
              { title: "Speed", desc: "Systematized tools and flows reduce cycle time. The boring parts are automated so focus stays on craft and judgment." },
              { title: "Consistency", desc: "Shared design tokens, component patterns, and brand standards ensure every product feels like it belongs to the same ecosystem." },
            ].map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="border-2 border-foreground rounded-2xl p-6 bg-background shadow-brutal-sm"
              >
                <h3 className="text-xl font-black text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY MODEL */}
      <section className="py-24 border-b-4 border-foreground bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">The internal model</h2>
            <p className="text-xl text-muted-foreground font-medium">How the system is being built — six stages, applied to every product in the ecosystem.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {factorySteps.map((s, idx) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                className="border-2 border-foreground rounded-2xl p-5 bg-white text-center shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal-accent transition-all"
              >
                <span className="text-3xl font-black text-accent block mb-2">{s.step}</span>
                <h3 className="text-lg font-black text-foreground mb-1">{s.label}</h3>
                <p className="text-sm text-muted-foreground font-medium">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT LOG */}
      <section className="py-24 border-b-4 border-foreground bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">Development log</h2>
              <p className="text-muted-foreground font-medium mb-8">What's been built, shipped, or moved forward internally.</p>
              <div className="space-y-6">
                {updates.map((u, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-sm font-bold text-accent uppercase tracking-widest whitespace-nowrap pt-1">{u.date}</span>
                    <p className="text-lg text-foreground font-medium">{u.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="border-2 border-foreground rounded-2xl bg-foreground p-8 shadow-brutal flex flex-col justify-center"
            >
              <h3 className="text-2xl font-black text-background mb-4">Work with Tamilov</h3>
              <p className="text-lg text-background/60 font-medium mb-6">
                Tamilov is the brand. PineApple is the engine. If you're interested in collaborating or building something together — reach out.
              </p>
              <Link href="/contact">
                <Button variant="secondary" className="bg-accent text-foreground border-accent hover:bg-accent/90 font-black">
                  Get in touch <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
