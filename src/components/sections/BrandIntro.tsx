import { motion } from "framer-motion"
import { Zap, Workflow } from "lucide-react"

export function BrandIntro() {
  return (
    <section className="py-24 border-b-4 border-foreground bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="border-2 border-foreground rounded-2xl p-8 sm:p-10 shadow-brutal-lg bg-background relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 text-muted/30 group-hover:text-accent/20 transition-colors duration-500">
              <Zap className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">Tamilov is the brand.</h2>
              <div className="w-12 h-2 bg-foreground mb-6" />
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                A personal ecosystem for digital products, interfaces, automation, and experiments. Built one system at a time, designed with intention, and shipped to solve real problems.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="border-2 border-foreground rounded-2xl p-8 sm:p-10 shadow-brutal-lg bg-foreground text-background relative overflow-hidden group"
          >
            <div className="absolute -left-10 -bottom-10 text-white/5 group-hover:text-accent/10 transition-colors duration-500">
              <Workflow className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white">PineApple is the engine.</h2>
              <div className="w-12 h-2 bg-accent mb-6" />
              <p className="text-lg text-gray-400 font-medium leading-relaxed">
                A fully automated factory for creating, launching, and scaling digital products. The machine behind everything—turning chaos into repeatable, scalable systems.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
