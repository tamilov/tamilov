import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-foreground text-background border-2 border-foreground hover:-translate-y-1 hover:shadow-brutal-accent active:translate-y-0 active:shadow-none": variant === "primary",
            "bg-transparent border-2 border-foreground text-foreground hover:-translate-y-1 hover:shadow-brutal active:translate-y-0 active:shadow-none": variant === "secondary",
            "bg-white border-2 border-muted text-foreground hover:border-foreground hover:-translate-y-0.5 hover:shadow-brutal-sm": variant === "outline",
            "hover:bg-muted text-foreground": variant === "ghost",
            "h-12 px-6 py-3 text-base": size === "default",
            "h-10 px-4 py-2": size === "sm",
            "h-14 rounded-2xl px-8 py-4 text-lg": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
