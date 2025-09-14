"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  hover?: boolean
  padding?: "sm" | "md" | "lg"
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, padding = "md", children, ...props }, ref) => {
    const baseClasses = "bg-white rounded-xl border border-border shadow-sm transition-all duration-300"
    
    const paddings = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    }

    const hoverClasses = hover ? "hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1" : ""

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseClasses,
          paddings[padding],
          hoverClasses,
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = "Card"

export default Card 