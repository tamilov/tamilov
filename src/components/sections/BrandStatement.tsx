import { motion } from "framer-motion"

export function BrandStatement() {
  return (
    <section className="py-16 md:py-20 border-b-4 border-foreground bg-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-3xl md:text-5xl lg:text-6xl font-black text-background leading-tight">
            Systems over chaos.
            <span className="block text-accent mt-2">Products over noise.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
