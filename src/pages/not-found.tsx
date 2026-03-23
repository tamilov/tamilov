import { motion } from "framer-motion"
import { Link } from "wouter"
import { ArrowLeft } from "lucide-react"
import { PageLayout } from "@/components/layout/PageLayout"

export default function NotFound() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 border-b-4 border-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">
              Error
            </p>

            <h1 className="text-[10rem] md:text-[14rem] font-black text-foreground leading-none mb-4 select-none">
              404
            </h1>

            <div className="border-2 border-foreground rounded-2xl bg-foreground p-6 shadow-brutal mb-10 inline-block">
              <p className="text-background font-black text-xl">
                This page doesn't exist.
              </p>
            </div>

            <p className="text-xl text-muted-foreground font-medium mb-12 max-w-lg">
              The URL you followed is either broken, removed, or never existed in the first place.
            </p>

            <Link href="/">
              <span className="inline-flex items-center gap-3 border-2 border-foreground rounded-2xl px-6 py-4 font-black text-foreground bg-background hover:bg-foreground hover:text-background transition-colors cursor-pointer shadow-brutal">
                <ArrowLeft className="w-5 h-5" />
                Back to Tamilov
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
