import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ContactForm } from "./ContactForm"

export function HomeContact() {
  return (
    <section id="contact" className="py-24 border-b-4 border-foreground bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6">Get in touch</h2>
            <p className="text-xl text-muted-foreground font-medium mb-8 max-w-md">
              Have a project in mind? Want to collaborate? Send a message and I'll get back to you within 48 hours.
            </p>
            <div className="border-l-4 border-accent pl-4 py-2 mb-8">
              <p className="text-foreground font-bold text-lg">Tamilov is the brand.</p>
              <p className="text-foreground font-bold text-lg">PineApple is the engine.</p>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <ArrowRight className="w-5 h-5 text-accent" />
              <span className="font-medium">hello@tamilov.com</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-2 border-foreground rounded-2xl bg-background p-6 sm:p-8 shadow-brutal"
          >
            <ContactForm compact />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
