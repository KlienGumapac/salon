"use client"

import { motion } from "framer-motion"
import { Star, Award, Users, Calendar } from "lucide-react"
import Button from "@/components/ui/Button"
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/components/animations/variants"

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
              <Button size="lg" className="text-lg px-8 py-4">
                Book Your Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Our Services
              </Button>
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
              {/* Main Image Placeholder */}
              <motion.div
                className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-16 h-16 text-primary" />
                    </div>
                    <p className="text-gray-600 font-medium">Professional Salon Image</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -left-2 md:-top-6 md:-left-6 bg-white rounded-2xl p-3 md:p-4 shadow-xl border border-border"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">5.0 Rating</div>
                    <div className="text-xs md:text-sm text-gray-600">200+ Reviews</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-white rounded-2xl p-3 md:p-4 shadow-xl border border-border"
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 5 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">Award Winner</div>
                    <div className="text-xs md:text-sm text-gray-600">Best Salon 2024</div>
                  </div>
                </div>
              </motion.div>
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