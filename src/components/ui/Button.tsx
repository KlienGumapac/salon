"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl font-semibold",
      secondary: "bg-secondary text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl font-semibold",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold",
      ghost: "text-gray-900 hover:bg-gray-100 font-semibold"
    }
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    }

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <button
          ref={ref}
          className={cn(
            baseClasses,
            variants[variant],
            sizes[size],
            className
          )}
          disabled={isLoading}
          {...props}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
          ) : null}
          {children}
        </button>
      </motion.div>
    )
  }
)

Button.displayName = "Button"

export default Button 