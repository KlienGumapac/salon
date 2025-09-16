"use client"

import { motion } from "framer-motion"
import { Star, Award, Users, Calendar } from "lucide-react"
import Button from "@/components/ui/Button"
import ClickSpark from "@/components/animations/ClickSpark"
import SpotlightCard from "@/components/animations/SpotlightCard"
import { fadeInUp, slideInRight, staggerContainer } from "@/components/animations/variants"
import Image from "next/image"

const Hero = () => {
  const stats = [
    { icon: Star, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "10+", label: "Expert Stylists" },
    { icon: Calendar, value: "1000+", label: "Services Done" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-accent via-white to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                ✨ Home of Champions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Sheila Magpale
                <span className="block text-primary">Salon</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium"
            >
              Where beauty meets excellence. Experience world-class hair styling, 
              beauty treatments, and personalized care that transforms you into a champion.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <ClickSpark color="#d4af37" sparkCount={10}>
                <Button size="lg" className="text-lg px-8 py-4">
                  Book Your Appointment
                </Button>
              </ClickSpark>
              <ClickSpark color="#d4af37" sparkCount={6}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Our Services
                </Button>
              </ClickSpark>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            variants={slideInRight}
            initial="initial"
            animate="animate"
          >
            <div className="relative">
              {/* Professional Spotlight Card */}
              <SpotlightCard 
                className="aspect-[3/2] max-w-2xl mx-auto p-0 bg-gradient-to-br from-white/5 to-primary/5 border-white/20"
                spotlightColor="rgba(168, 85, 247, 0.25)"
              >
                {/* Background Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image 
                    src="/salonphoto.jpg" 
                    alt="Sheila Magpale Salon - Home of Champions"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  
                  {/* Professional gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  
                  {/* Elegant content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-white font-bold text-xl tracking-wide drop-shadow-lg">
                        Professional Excellence
                      </h3>
                      <p className="text-white/90 text-sm font-medium drop-shadow-md">
                        Where Beauty Meets Artistry
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>     
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 
