import { ReactNode, useEffect } from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export function PageLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
