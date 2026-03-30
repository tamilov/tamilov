import { motion } from "framer-motion"
import { PageLayout } from "@/components/layout/PageLayout"

export default function Terms() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 border-b-4 border-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground font-medium mb-12">Last updated: March 2026</p>

            <div className="space-y-8 text-lg text-muted-foreground font-medium leading-relaxed">
              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Agreement</h2>
                <p>By accessing and using the Tamilov website, you agree to these terms. If you disagree, please do not use the site.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Services</h2>
                <p>Tamilov provides digital product design, development, and systems consulting. Specific deliverables, timelines, and pricing are agreed upon per project through a separate collaboration agreement.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Intellectual property</h2>
                <p>All content on this website — including text, design, code, and branding — is owned by Tamilov unless explicitly stated otherwise. Ecosystem product names (PineApple, BuildKit, NoteStack, etc.) are part of the Tamilov brand.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Collaboration terms</h2>
                <p>Project-specific terms including scope, payment, deliverables, and intellectual property transfer are defined in individual project agreements. These terms serve as general guidelines only.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Limitation of liability</h2>
                <p>This website is provided "as is." Tamilov is not liable for any damages arising from the use of information on this site. Product availability and features are subject to change.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Changes</h2>
                <p>These terms may be updated as the platform evolves. Continued use of the site constitutes acceptance of updated terms.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
