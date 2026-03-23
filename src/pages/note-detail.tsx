import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Link, useParams } from "wouter"
import { PageLayout } from "@/components/layout/PageLayout"
import { allNotes } from "@/data/notes"

export default function NoteDetail() {
  const { slug } = useParams<{ slug: string }>()
  const note = allNotes.find((n) => n.slug === slug)

  if (!note) {
    return (
      <PageLayout>
        <section className="pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-black text-foreground mb-4">Note not found</h1>
            <Link href="/notes" className="text-accent font-bold hover:underline">← Back to notes</Link>
          </div>
        </section>
      </PageLayout>
    )
  }

  const related = allNotes.filter((n) => n.slug !== note.slug).slice(0, 2)

  return (
    <PageLayout>
      <article className="pt-32 pb-24 border-b-4 border-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/notes" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to notes
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-bold tracking-widest uppercase text-accent">{note.date}</span>
              <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-full">{note.category}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-8 leading-tight">{note.title}</h1>

            <div className="w-16 h-1 bg-accent mb-12" />

            <div className="space-y-6">
              {note.content.map((paragraph, i) => (
                <p key={i} className="text-lg text-muted-foreground font-medium leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-white border-b-4 border-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-black text-foreground mb-8">More notes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/notes/${r.slug}`}>
                  <div className="border-2 border-foreground bg-background rounded-2xl p-6 shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all cursor-pointer group">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">{r.date}</span>
                    <h4 className="text-lg font-black text-foreground mt-2 group-hover:underline decoration-2 underline-offset-2 decoration-accent">{r.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}
