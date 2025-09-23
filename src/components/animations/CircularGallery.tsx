"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import Image from 'next/image'

interface CircularGalleryProps {
  images?: Array<{ id: string; title: string; category: string; image?: string }>
  radius?: number
  itemSize?: number
  autoRotate?: boolean
  rotationSpeed?: number
}

const CircularGallery = ({
  images,
  radius = 200,
  itemSize = 120,
  autoRotate = true,
  rotationSpeed = 0.3
}: CircularGalleryProps) => {
  const [rotation, setRotation] = useState(0)

  const defaultImages = [
    { id: '1', title: 'Hair Styling', category: 'styling', image: '/circular1.jpg' },
    { id: '2', title: 'Hair Coloring', category: 'coloring', image: '/circular10.jpg' },
    { id: '3', title: 'curly Look', category: 'curly', image: '/circular3.jpg' },
    { id: '4', title: 'Hair Treatment', category: 'treatment', image: '/circular11.jpg' },
    { id: '5', title: 'Makeup Service', category: 'makeup', image: '/circular5.jpg' },
    { id: '6', title: 'Hair Cut', category: 'cuts', image: '/circular6.jpg' },
    { id: '7', title: 'Special Event', category: 'events', image: '/circular7.jpg' },
    { id: '8', title: 'Nail Art', category: 'nails', image: '/circular8.jpg' }
  ]

  const galleryImages = images || defaultImages
  const itemCount = galleryImages.length

  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setRotation(prev => prev + rotationSpeed)
    }, 50)

    return () => clearInterval(interval)
  }, [autoRotate, rotationSpeed])

  const getItemPosition = (index: number) => {
    const angle = (index * 360) / itemCount + rotation
    const radian = (angle * Math.PI) / 180
    const x = Math.cos(radian) * radius
    const y = Math.sin(radian) * radius
    return { x, y, angle }
  }

  const getCategoryGradient = (category: string) => {
    const gradients = {
      styling: 'from-blue-400/20 to-blue-600/30',
      coloring: 'from-purple-400/20 to-purple-600/30',
      bridal: 'from-pink-400/20 to-pink-600/30',
      treatment: 'from-green-400/20 to-green-600/30',
      makeup: 'from-red-400/20 to-red-600/30',
      cuts: 'from-yellow-400/20 to-yellow-600/30',
      events: 'from-indigo-400/20 to-indigo-600/30',
      nails: 'from-rose-400/20 to-rose-600/30'
    }
    return gradients[category as keyof typeof gradients] || 'from-primary/20 to-primary/30'
  }

  return (
    <div className="relative flex items-center justify-center" style={{ height: radius * 2.2 }}>
      {/* Center decoration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center shadow-lg border border-primary/20">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
            <Camera className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Circular items */}
      {galleryImages.map((image, index) => {
        const { x, y, angle } = getItemPosition(index)
        const gradient = getCategoryGradient(image.category)
        
        return (
          <motion.div
            key={image.id}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              width: itemSize,
              height: itemSize
            }}
            animate={{
              x: x - itemSize / 2,
              y: y - itemSize / 2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <motion.div
              className={`w-full h-full bg-gradient-to-br ${gradient} rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer`}
              whileHover={{ 
                scale: 1.1,
                zIndex: 10,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
              }}
              style={{
                rotate: -angle 
              }}
            >
              {/* Actual Image */}
              <div className="w-full h-full relative overflow-hidden">
                <Image 
                  src={image.image ?? '/circular1.jpg'}
                  alt={image.title}
                  fill
                  sizes={`${itemSize}px`}
                  className="object-cover"
                  priority={false}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Camera className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>


            </motion.div>
          </motion.div>
        )
      })}

      {/* Decorative rings */}
      <div 
        className="absolute border border-primary/10 rounded-full pointer-events-none"
        style={{
          width: radius * 2 + itemSize,
          height: radius * 2 + itemSize,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="absolute border border-primary/5 rounded-full pointer-events-none"
        style={{
          width: radius * 2 + itemSize + 40,
          height: radius * 2 + itemSize + 40,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  )
}

export default CircularGallery 