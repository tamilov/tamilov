import { motion } from "framer-motion"
import { ArrowRight, Terminal, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Hero() {
  const scrollToEcosystem = () => {
    const el = document.querySelector("#ecosystem")
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  const scrollToFactory = () => {
    const el = document.querySelector("#factory")
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 border-b-4 border-foreground relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border-2 border-foreground bg-accent text-accent-foreground text-sm font-bold shadow-brutal-sm">
                Digital Product Brand
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-foreground mb-6">
                Tamilov builds digital products, systems, and experiments.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-10 max-w-2xl">
                PineApple is the internal factory. Tamilov is the brand. A system for building and shipping digital products — one at a time.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" onClick={scrollToEcosystem} className="group">
                Explore the Ecosystem
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="secondary" onClick={scrollToFactory}>
                Enter PineApple &rarr;
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Abstract Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 hidden md:flex items-center justify-center"
          >
            {/* Fixed-size diagram wrapper — never stretches with column */}
            <div className="relative w-[360px] h-[360px] flex-shrink-0 overflow-visible">
              {/* Central Node */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-foreground text-background w-28 h-28 rounded-2xl border-4 border-accent flex flex-col items-center justify-center shadow-brutal-lg rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Layers className="w-9 h-9 mb-1 text-accent" />
                  <span className="font-black text-sm">PineApple</span>
                </div>
              </div>

              {/* Orbital Nodes — positioned relative to the 360×360 box */}
              <div className="absolute inset-0 animate-orbit-spin">
                {/* Node 1 — top centre */}
                <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
                  <div className="animate-orbit-counter-spin">
                    <div className="bg-white border-2 border-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-brutal animate-pulse" style={{ animationDuration: '3s' }}>
                      <Terminal className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                </div>
                {/* Node 2 — bottom left */}
                <div className="absolute bottom-[24px] left-[48px]">
                  <div className="animate-orbit-counter-spin">
                    <div className="bg-white border-2 border-foreground w-11 h-11 rounded-xl flex items-center justify-center shadow-brutal">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </div>
                {/* Node 3 — right, outside outer circle */}
                <div className="absolute top-1/2 right-[-28px] -translate-y-1/2">
                  <div className="animate-orbit-counter-spin">
                    <div className="bg-accent border-2 border-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-brutal">
                      <span className="font-black text-foreground text-sm">UI</span>
                    </div>
                  </div>
                </div>

                {/* SVG orbit rings — tied to the same 360×360 space */}
                <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" viewBox="0 0 360 360">
                  <circle cx="180" cy="180" r="108" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" strokeDasharray="7 7" />
                  <circle cx="180" cy="180" r="160" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="border-2 border-foreground rounded-2xl bg-white shadow-brutal flex flex-col md:flex-row overflow-hidden divide-y-2 md:divide-y-0 md:divide-x-2 divide-foreground">
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center group hover:bg-muted/50 transition-colors">
            <span className="text-4xl font-black text-foreground mb-1">5+</span>
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">In the Pipeline</span>
          </div>
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center group hover:bg-muted/50 transition-colors bg-accent/10">
            <span className="text-4xl font-black text-accent mb-1">Open</span>
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Building in Public</span>
          </div>
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center group hover:bg-muted/50 transition-colors">
            <span className="text-4xl font-black text-foreground mb-1">100%</span>
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Self-Funded</span>
          </div>
        </div>
      </div>
    </section>
  )
}
