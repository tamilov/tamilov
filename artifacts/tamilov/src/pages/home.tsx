import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { BrandIntro } from "@/components/sections/BrandIntro"
import { FactoryWorkflow } from "@/components/sections/FactoryWorkflow"
import { Ecosystem } from "@/components/sections/Ecosystem"
import { Philosophy } from "@/components/sections/Philosophy"
import { Journal } from "@/components/sections/Journal"
import { WorkTogether } from "@/components/sections/WorkTogether"

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <BrandIntro />
        <FactoryWorkflow />
        <Ecosystem />
        <Philosophy />
        <Journal />
        <WorkTogether />
      </main>

      <Footer />
    </div>
  )
}
