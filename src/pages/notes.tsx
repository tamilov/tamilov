import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "wouter"
import { PageLayout } from "@/components/layout/PageLayout"
import { allNotes } from "@/data/notes"

export default function Notes() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">Notes</h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl">
              Thoughts on product, design, systems, and building in public. Less blog, more build log.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {allNotes.map((note, idx) => (
              <motion.div
                key={note.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link href={`/notes/${note.slug}`}>
                  <div className="border-2 border-foreground bg-white p-6 sm:p-8 rounded-2xl shadow-brutal flex flex-col group cursor-pointer hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-sm font-bold tracking-widest uppercase text-accent border-b-2 border-accent pb-1">
                        {note.date}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {note.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-4 group-hover:underline decoration-4 underline-offset-4 decoration-accent">
                      {note.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-6 flex-1">{note.excerpt}</p>
                    <div className="font-bold text-foreground flex items-center mt-auto">
                      Read note <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
