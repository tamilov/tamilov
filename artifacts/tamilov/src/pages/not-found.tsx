import { Link } from "wouter"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
      <h1 className="text-9xl font-black text-foreground mb-4">404</h1>
      <h2 className="text-3xl font-bold text-foreground mb-6">Page not found</h2>
      <p className="text-muted-foreground font-medium mb-10 max-w-md">
        Looks like you've wandered outside the ecosystem. This node doesn't exist in the current system state.
      </p>
      
      <Link href="/">
        <Button size="lg">Return to Base</Button>
      </Link>
    </div>
  )
}
