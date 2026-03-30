import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

const statusItems = [
  { label: "Building PineApple v2", active: true },
  { label: "Refining the ecosystem", active: true },
  { label: "Writing design & product notes", active: false },
  { label: "Accepting limited collaborations", active: true },
]

export function Founder() {
  return (
    <section className="py-24 border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-foreground rounded-2xl bg-white p-8 lg:p-10 shadow-brutal flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-xl font-black text-background">DT</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-foreground">Danila Tamilov</h3>
                <p className="text-sm font-semibold text-muted-foreground">Founder & Builder</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
              A young founder building digital products, systems, and experiments. 
              Focused on interfaces, automation, and product infrastructure.
            </p>

            <div className="border-t-2 border-muted pt-6 mt-auto">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Philosophy</p>
              <p className="text-xl font-black text-foreground leading-snug">
                Designed with taste.<br />
                Built like a system.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-2 border-foreground rounded-2xl bg-foreground p-8 lg:p-10 shadow-brutal flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-black text-background/60 uppercase tracking-widest">Current Status</span>
            </div>

            <div className="flex flex-col gap-4 mb-8 flex-1">
              {statusItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${item.active ? "bg-accent" : "bg-background/20"}`} />
                  <span className={`text-lg font-semibold ${item.active ? "text-background" : "text-background/40"}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-background/10 pt-6">
              <Button
                variant="secondary"
                className="w-full bg-accent text-foreground border-accent hover:bg-accent/90 font-black text-base py-3"
                onClick={() => {
                  const el = document.querySelector("#work")
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 100
                    window.scrollTo({ top, behavior: "smooth" })
                  }
                }}
              >
                Start a project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-center text-sm text-background/30 font-medium mt-3">
                2 collaboration slots open this quarter
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
