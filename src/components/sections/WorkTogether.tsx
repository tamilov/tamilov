import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

const services = [
  {
    title: "Product Landing Pages",
    desc: "High-converting, extremely bold pages built for digital products and SaaS launches.",
    price: "$100"
  },
  {
    title: "Branded Interfaces",
    desc: "Custom UI systems with your brand's language, design tokens, and interaction models.",
    price: "$350"
  },
  {
    title: "Digital Systems",
    desc: "Automated workflows, product pipelines, and custom digital infrastructure.",
    price: "$640"
  },
  {
    title: "Concept to MVP",
    desc: "From raw idea validation to a fully launched product, end to end.",
    price: "$920"
  }
]

export function WorkTogether() {
  return (
    <section id="work" className="py-24 border-b-4 border-foreground bg-accent relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none opacity-10 hidden md:flex">
        <span className="text-[20vw] font-black whitespace-nowrap text-foreground">COLLABORATE</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground mb-6">Work with Tamilov</h2>
          <p className="text-xl text-foreground/80 font-semibold max-w-2xl mx-auto bg-accent p-2">
            Productized collaboration. No hourly rates, no vague scopes. You pick the outcome, we build the machine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-4 border-foreground bg-background rounded-2xl p-6 sm:p-8 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all flex flex-col"
            >
              <h3 className="text-2xl font-black text-foreground mb-3">{service.title}</h3>
              <p className="text-lg text-muted-foreground font-medium mb-8 flex-1">
                {service.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t-2 border-muted gap-4">
                <div>
                  <span className="text-sm font-bold text-muted-foreground block">Starting from</span>
                  <span className="text-2xl font-black text-foreground">{service.price}</span>
                </div>
                <Button variant="primary" onClick={() => console.log('Inquire clicked', service.title)}>
                  Inquire &rarr;
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
