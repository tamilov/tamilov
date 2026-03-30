import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "live" | "beta" | "concept" | "internal" | "in development"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border-2 px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-foreground bg-white text-foreground": variant === "default",
          "border-status-live bg-status-live/10 text-status-live": variant === "live",
          "border-status-beta bg-status-beta text-foreground": variant === "beta",
          "border-status-concept bg-status-concept/10 text-status-concept": variant === "concept",
          "border-foreground bg-foreground text-background": variant === "internal",
          "border-muted-foreground/40 bg-muted text-muted-foreground": variant === "in development",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
