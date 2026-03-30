import { motion } from "framer-motion"
import { PageLayout } from "@/components/layout/PageLayout"

export default function Privacy() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 border-b-4 border-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground font-medium mb-12">Last updated: March 2026</p>

            <div className="space-y-8 text-lg text-muted-foreground font-medium leading-relaxed">
              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Overview</h2>
                <p>Tamilov respects your privacy. This policy explains what data we collect, why, and how we handle it. We keep things simple and transparent.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">What we collect</h2>
                <p>When you use the contact form, we collect the information you provide: your name, email address, optional company name, and message. We do not use tracking cookies, analytics scripts, or third-party trackers on this site.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">How we use it</h2>
                <p>Your information is used solely to respond to your inquiry and, if applicable, to discuss potential collaboration. We do not sell, rent, or share your data with third parties.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Data storage</h2>
                <p>Contact form submissions are stored securely and retained only as long as necessary for business communication. You can request deletion of your data at any time by emailing hello@tamilov.com.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Your rights</h2>
                <p>You have the right to access, correct, or delete any personal data we hold about you. Contact us at hello@tamilov.com for any privacy-related requests.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-3">Changes</h2>
                <p>We may update this policy as the platform grows. Significant changes will be noted on this page with an updated date.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
