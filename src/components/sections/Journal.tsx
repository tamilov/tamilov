import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "wouter"
import { allNotes } from "@/data/notes"

const displayNotes = allNotes.slice(0, 3)

export function Journal() {
  return (
    <section id="notes" className="py-24 border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">From the build log</h2>
            <p className="text-xl text-muted-foreground font-medium">Thoughts, experiments, and ideas in motion.</p>
          </motion.div>
          
          <Link href="/notes">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-foreground font-bold hover:text-accent transition-colors flex items-center group cursor-pointer"
            >
              Read all notes <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {displayNotes.map((note, idx) => (
            <motion.div
              key={note.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/notes/${note.slug}`}>
                <div className="border-2 border-foreground bg-white p-6 sm:p-8 rounded-2xl shadow-brutal flex flex-col group cursor-pointer hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                  <span className="text-sm font-bold tracking-widest uppercase text-accent mb-6 border-b-2 border-accent pb-2 self-start">
                    {note.date}
                  </span>
                  <h3 className="text-2xl font-black text-foreground mb-4 group-hover:underline decoration-4 underline-offset-4 decoration-accent">
                    {note.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-8 flex-1">
                    {note.excerpt}
                  </p>
                  <div className="font-bold text-foreground flex items-center mt-auto">
                    Read article <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
