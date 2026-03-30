import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { BrandIntro } from "@/components/sections/BrandIntro"
import { FactoryWorkflow } from "@/components/sections/FactoryWorkflow"
import { Ecosystem } from "@/components/sections/Ecosystem"
import { Philosophy } from "@/components/sections/Philosophy"
import { BrandStatement } from "@/components/sections/BrandStatement"
import { Journal } from "@/components/sections/Journal"
import { Founder } from "@/components/sections/Founder"
import { WorkTogether } from "@/components/sections/WorkTogether"
import { HomeContact } from "@/components/sections/HomeContact"

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
        <BrandStatement />
        <Journal />
        <Founder />
        <WorkTogether />
        <HomeContact />
      </main>

      <Footer />
    </div>
  )
}
