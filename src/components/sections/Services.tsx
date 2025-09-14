"use client"

import { motion } from "framer-motion"
import { Scissors, Palette, Sparkles, Crown, Heart, Zap } from "lucide-react"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import ClickSpark from "@/components/animations/ClickSpark"
import { fadeInUp, staggerContainer } from "@/components/animations/variants"

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <div className="relative h-full bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative p-8">
        {/* Icon with modern design */}
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <service.icon className="w-8 h-8 text-primary" />
            </div>
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/20 rounded-full"></div>
        </div>

        {/* Title and Description */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 font-medium text-sm">
            {service.description}
          </p>
        </div>

        {/* Price with modern styling */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
            <span className="text-2xl font-bold text-primary">{service.price}</span>
          </div>
        </div>

        {/* Features with modern checkmarks */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Modern CTA Button with Click Spark */}
        <div className="relative">
          <ClickSpark color="#d4af37" sparkCount={6}>
            <Button 
              variant="primary" 
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-300 rounded-xl py-3"
            >
              <span className="flex items-center justify-center gap-2">
                Book Now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </ClickSpark>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling & Cuts",
      description: "Expert cuts, styling, and treatments for all hair types. From classic to contemporary looks.",
      price: "Starting at ₱1,800",
      features: ["Consultation", "Wash & Cut", "Styling", "Aftercare Tips"]
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description: "Professional coloring services including highlights, balayage, and full color transformations.",
      price: "Starting at ₱3,400",
      features: ["Color Consultation", "Premium Products", "Color Protection", "Touch-up Service"]
    },
    {
      icon: Sparkles,
      title: "Bridal Services",
      description: "Complete bridal beauty packages for your special day. Hair, makeup, and styling.",
      price: "Starting at ₱8,000",
      features: ["Trial Session", "Wedding Day Service", "Touch-up Kit", "Photography Ready"]
    },
    {
      icon: Crown,
      title: "Hair Treatments",
      description: "Rejuvenating treatments including keratin, deep conditioning, and scalp care.",
      price: "Starting at ₱2,600",
      features: ["Hair Analysis", "Custom Treatment", "Professional Products", "Home Care Guide"]
    },
    {
      icon: Heart,
      title: "Makeup Services",
      description: "Professional makeup for special occasions, photoshoots, and everyday glamour.",
      price: "Starting at ₱2,200",
      features: ["Skin Preparation", "Professional Application", "Long-lasting Formula", "Touch-up Tips"]
    },
    {
      icon: Zap,
      title: "Express Services",
      description: "Quick touch-ups and styling for busy schedules. Perfect for last-minute needs.",
      price: "Starting at ₱1,000",
      features: ["Quick Styling", "Touch-ups", "Express Blowout", "Same Day Booking"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Professional Beauty Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover our comprehensive range of beauty services designed to enhance your natural beauty 
              and boost your confidence. Each service is tailored to your unique needs.
            </p>
          </motion.div>
        </motion.div>

        {/* Mobile Stacking Cards */}
        <div className="block md:hidden relative">
          {services.map((service, index) => (
            <motion.div 
              key={`mobile-${index}`}
              className="sticky mb-4"
              style={{ 
                top: `${4 + index * 1.5}rem`,
                zIndex: index + 1 
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={`desktop-${index}`} variants={fadeInUp}>
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              We offer custom services tailored to your specific needs. Contact us to discuss 
              your beauty goals and let us create the perfect service package for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ClickSpark color="#d4af37" sparkCount={8}>
                <Button size="lg">
                  Schedule Consultation
                </Button>
              </ClickSpark>
              <ClickSpark color="#d4af37" sparkCount={6}>
                <Button variant="outline" size="lg">
                  Call Us Now
                </Button>
              </ClickSpark>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 