import { motion } from "framer-motion"
import { ArrowRight, Layers, Zap, RotateCcw, CheckCircle } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { PageLayout } from "@/components/layout/PageLayout"

const factorySteps = [
  { step: "01", label: "Idea", desc: "Capture and structure raw product ideas" },
  { step: "02", label: "Validate", desc: "Test assumptions before writing code" },
  { step: "03", label: "Design", desc: "Create interfaces with taste and intention" },
  { step: "04", label: "Build", desc: "Ship functional software, fast" },
  { step: "05", label: "Launch", desc: "Go live with automated deployment" },
  { step: "06", label: "Improve", desc: "Iterate based on real usage data" },
]

const updates = [
  { date: "March 2026", text: "PineApple v2 architecture in active development" },
  { date: "February 2026", text: "Automated validation pipeline shipped" },
  { date: "January 2026", text: "Design token system unified across ecosystem" },
]

export default function PineApple() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 border-b-4 border-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="internal">Internal</Badge>
                <span className="text-sm font-bold text-muted-foreground">v2.0 in development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                PineApple is the engine.
              </h1>
              <p className="text-xl text-muted-foreground font-medium mb-8 max-w-xl">
                A fully automated factory for creating, launching, and scaling digital products. The machine behind the Tamilov ecosystem — turning ideas into shipped products through repeatable systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Start a project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="secondary">
                    View ecosystem
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="border-2 border-foreground rounded-2xl bg-foreground p-8 lg:p-10 shadow-brutal"
            >
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-8 h-8 text-accent" />
                <span className="text-xl font-black text-background">PineApple Factory</span>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Zap, label: "Automated build pipeline", active: true },
                  { icon: RotateCcw, label: "Continuous iteration loop", active: true },
                  { icon: CheckCircle, label: "Design token enforcement", active: true },
                  { icon: Layers, label: "Multi-product orchestration", active: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.active ? "bg-accent" : "bg-background/20"}`} />
                    <item.icon className={`w-4 h-4 ${item.active ? "text-accent" : "text-background/30"}`} />
                    <span className={`font-semibold ${item.active ? "text-background" : "text-background/30"}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b-4 border-foreground bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Why PineApple exists</h2>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl">
              Building one product is hard. Building an ecosystem of products is exponentially harder — unless you systematize the process.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Repeatability", desc: "Every product follows the same proven pipeline. No reinventing the wheel, no ad hoc decisions." },
              { title: "Speed", desc: "What used to take weeks now takes days. Automated tooling handles the boring parts so the focus stays on craft." },
              { title: "Consistency", desc: "Shared design tokens, component libraries, and brand guidelines ensure every product feels like it belongs." },
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

      <section className="py-24 border-b-4 border-foreground bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">The Factory Model</h2>
            <p className="text-xl text-muted-foreground font-medium">Six stages. Every product. No exceptions.</p>
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

      <section className="py-24 border-b-4 border-foreground bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Latest Updates</h2>
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
              <h3 className="text-2xl font-black text-background mb-4">Interested in the factory?</h3>
              <p className="text-lg text-background/60 font-medium mb-6">
                Whether you want to collaborate, follow progress, or build something together — let's talk.
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
