import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PageLayout } from "@/components/layout/PageLayout"
import { devlog } from "@/data/devlog"
import type { DevlogEntry } from "@/data/devlog"

const PER_PAGE = 10

const tagLabels: Record<DevlogEntry["tag"], string> = {
  architecture:   "Architecture",
  build:          "Build",
  content:        "Content",
  design:         "Design",
  infrastructure: "Infrastructure",
  validation:     "Validation",
  planning:       "Planning",
}

const tagColors: Record<DevlogEntry["tag"], string> = {
  architecture:   "bg-foreground text-background",
  build:          "bg-accent text-foreground",
  content:        "bg-white text-foreground border-foreground/30",
  design:         "bg-muted text-foreground",
  infrastructure: "bg-foreground text-background",
  validation:     "bg-accent/20 text-foreground",
  planning:       "bg-muted text-muted-foreground",
}

const statusColors: Record<DevlogEntry["status"], string> = {
  shipped:       "text-green-600",
  "in progress": "text-accent",
  planning:      "text-muted-foreground",
}

const statusDot: Record<DevlogEntry["status"], string> = {
  shipped:       "bg-green-500",
  "in progress": "bg-accent animate-pulse",
  planning:      "bg-muted-foreground/40",
}

export default function Devlog() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(devlog.length / PER_PAGE)
  const entries = devlog.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const goTo = (p: number) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <PageLayout>
      <section className="pt-32 pb-24 border-b-4 border-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(hsl(var(--foreground)) 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border-2 border-foreground bg-foreground text-background text-sm font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              PineApple · Internal
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">Devlog</h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl">
              A running log of what's being built inside PineApple — architecture decisions, shipped modules, and work in progress.
            </p>
          </motion.div>

          {/* Entries */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-foreground/10 hidden md:block ml-[11px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {entries.map((entry, idx) => (
                  <div key={entry.id} className="md:pl-10 relative">
                    <div className="absolute left-0 top-6 w-[23px] h-[23px] rounded-full border-2 border-foreground hidden md:flex items-center justify-center bg-background">
                      <div className={`w-2 h-2 rounded-full ${statusDot[entry.status]}`} />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-2 border-foreground rounded-2xl bg-white shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 transition-all p-6 sm:p-8"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-sm font-bold tracking-widest uppercase text-accent border-b-2 border-accent pb-0.5">
                          {entry.date}
                        </span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border border-foreground/10 ${tagColors[entry.tag]}`}>
                          {tagLabels[entry.tag]}
                        </span>
                        <span className={`text-xs font-bold flex items-center gap-1.5 ml-auto ${statusColors[entry.status]}`}>
                          <span className={`inline-block w-1.5 h-1.5 rounded-full ${statusDot[entry.status]}`} />
                          {entry.status}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-foreground mb-3 leading-tight">
                        {entry.title}
                      </h3>
                      <p className="text-muted-foreground font-medium leading-relaxed">
                        {entry.body}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-12 pt-8 border-t-2 border-foreground">
              <button
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-foreground rounded-xl font-bold text-sm bg-white shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 transition-all disabled:opacity-30 disabled:shadow-none disabled:translate-y-0"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => goTo(p)}
                    className={`w-9 h-9 rounded-lg border-2 font-black text-sm transition-all ${
                      p === page
                        ? "border-foreground bg-foreground text-background shadow-brutal-sm"
                        : "border-foreground/30 bg-white text-foreground hover:border-foreground hover:shadow-brutal-sm"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-foreground rounded-xl font-bold text-sm bg-white shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 transition-all disabled:opacity-30 disabled:shadow-none disabled:translate-y-0"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>
    </PageLayout>
  )
}
