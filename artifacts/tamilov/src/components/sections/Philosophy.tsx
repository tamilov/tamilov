import { motion } from "framer-motion"

const principles = [
  {
    title: "Systems over chaos",
    desc: "Build repeatable processes, not one-off solutions. A good system works while you sleep."
  },
  {
    title: "Launch before perfection",
    desc: "Ship early, improve constantly. The market is the ultimate validator, not your figma file."
  },
  {
    title: "Design with taste",
    desc: "Every pixel is intentional. Premium feeling isn't an afterthought, it's the foundation."
  },
  {
    title: "Automation with intention",
    desc: "Automate the boring, focus on what matters. Machines do the heavy lifting, humans do the thinking."
  },
  {
    title: "Build small, scale smart",
    desc: "Start focused, expand deliberately. Don't build for a million users when you have ten."
  }
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 border-b-4 border-foreground bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 leading-tight">
                  Built on <br/>principles.
                </h2>
                <p className="text-xl text-muted-foreground font-medium mb-8">
                  The rules we never break. This is how the factory operates.
                </p>
                <div className="w-24 h-4 bg-accent" />
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-8">
            {principles.map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group border-2 border-transparent hover:border-foreground p-6 rounded-2xl hover:shadow-brutal-sm hover:bg-background transition-all duration-300"
              >
                <div className="flex gap-6">
                  <span className="text-4xl md:text-5xl font-black text-muted group-hover:text-accent transition-colors">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{principle.title}</h3>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
