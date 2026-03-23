import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { PageLayout } from "@/components/layout/PageLayout"
import { ContactForm } from "@/components/sections/ContactForm"

export default function Contact() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 border-b-4 border-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                Let's build something.
              </h1>
              <p className="text-xl text-muted-foreground font-medium mb-8">
                Productized collaboration for digital products, interfaces, and systems. No hourly rates. No vague timelines. Clear scope, premium output.
              </p>

              <div className="border-2 border-foreground rounded-2xl bg-foreground p-6 shadow-brutal mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-black text-background/60 uppercase tracking-widest">Availability</span>
                </div>
                <p className="text-background font-semibold">
                  Currently accepting 2 collaboration projects this quarter.
                </p>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span className="font-medium">hello@tamilov.com</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3 border-2 border-foreground rounded-2xl bg-white p-6 sm:p-8 shadow-brutal"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
