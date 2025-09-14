"use client"

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Spark {
  id: number
  x: number
  y: number
  angle: number
  scale: number
  color: string
}

interface ClickSparkProps {
  children: React.ReactNode
  color?: string
  sparkCount?: number
  className?: string
}

const ClickSpark = ({ 
  children, 
  color = '#d4af37', 
  sparkCount = 8,
  className = '' 
}: ClickSparkProps) => {
  const [sparks, setSparks] = useState<Spark[]>([])
  const sparkIdRef = useRef(0)

  const createSparks = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newSparks: Spark[] = []
    
    for (let i = 0; i < sparkCount; i++) {
      const angle = (360 / sparkCount) * i
      const scale = 0.5 + Math.random() * 0.5
      
      newSparks.push({
        id: sparkIdRef.current++,
        x,
        y,
        angle,
        scale,
        color
      })
    }

    setSparks(prev => [...prev, ...newSparks])

    setTimeout(() => {
      setSparks(prev => prev.filter(spark => !newSparks.find(ns => ns.id === spark.id)))
    }, 600)
  }, [sparkCount, color])

  return (
    <div 
      className={`relative inline-block ${className}`}
      onClick={createSparks}
    >
      {children}
      
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="absolute pointer-events-none"
            style={{
              left: spark.x,
              top: spark.y,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ 
              scale: 0,
              rotate: spark.angle,
              opacity: 1
            }}
            animate={{ 
              scale: spark.scale,
              x: Math.cos(spark.angle * Math.PI / 180) * 30,
              y: Math.sin(spark.angle * Math.PI / 180) * 30,
              opacity: 0,
              rotate: spark.angle + 180
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            {/* Spark Shape */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              style={{ color: spark.color }}
            >
              <path
                d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ClickSpark 