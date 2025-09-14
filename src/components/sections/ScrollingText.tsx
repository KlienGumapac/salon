"use client"

import { motion } from "framer-motion"

const ScrollingText = () => {
  const scrollingItems = [
    "Hair Styling",
    "Color Transformation", 
    "Bridal Beauty",
    "Makeup Artistry",
    "Hair Extensions",
    "Balayage",
    "Wedding Styling",
    "Color Correction",
    "Precision Cuts",
    "Beauty Treatments",
    "Highlights",
    "Ombre",
    "Keratin Treatments",
    "Special Events",
    "Professional Styling"
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -100 * scrollingItems.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...scrollingItems, ...scrollingItems].map((item, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary whitespace-nowrap">
                  {item}
                </span>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex whitespace-nowrap mt-8">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [-100 * scrollingItems.length, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear"
              }
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...scrollingItems, ...scrollingItems].map((item, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="text-xl md:text-2xl lg:text-3xl font-sans font-medium text-white whitespace-nowrap">
                  {item}
                </span>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Third Row - Left to Right (Different Speed) */}
        <div className="flex whitespace-nowrap mt-8">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -100 * scrollingItems.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...scrollingItems, ...scrollingItems].map((item, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="text-lg md:text-xl lg:text-2xl font-serif font-light text-gray-300 whitespace-nowrap">
                  {item}
                </span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  )
}

export default ScrollingText 