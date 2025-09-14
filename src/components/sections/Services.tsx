"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, Crown, LucideIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/components/animations/variants';
import ClickSpark from '@/components/animations/ClickSpark';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  features: string[];
}

const ServiceCard = ({ service }: { service: Service }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="relative h-full bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main Content - Compact */}
      <div className="relative p-4 h-full flex flex-col">
        {/* Compact Icon Design */}
        <div className="relative mb-3 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
          
          {/* Small Decorative Dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full opacity-60"></div>
        </div>

        {/* Title and Description */}
        <div className="text-center mb-3 flex-1">
          <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-xs line-clamp-2">
            {service.description}
          </p>
        </div>

        {/* Price with compact styling */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center justify-center px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
            <span className="text-lg font-bold text-primary">{service.price}</span>
          </div>
        </div>



        {/* Compact CTA Button */}
        <div className="relative">
          <ClickSpark color="#d4af37" sparkCount={4}>
            <Button 
              variant="primary" 
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-300 rounded-lg py-2 text-sm"
            >
              <span className="flex items-center justify-center gap-1">
                Book Now
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      title: "Nano Silk Rebond",
      description: "Premium silk protein rebonding for smooth, straight hair.",
      price: "₱2,000",
      features: ["Silk Protein", "Long-lasting", "Smooth Finish"]
    },
    {
      icon: Sparkles,
      title: "Kerabond",
      description: "Advanced keratin bonding treatment for healthier hair.",
      price: "₱1,500",
      features: ["Keratin Infusion", "Hair Repair", "Shine Enhancement"]
    },
    {
      icon: Crown,
      title: "Keratin Blowout",
      description: "Professional keratin treatment with blowout styling.",
      price: "₱1,000",
      features: ["Frizz Control", "Volume Boost", "Styling"]
    },
    {
      icon: Palette,
      title: "Brazilian Blowout",
      description: "Signature Brazilian smoothing treatment.",
      price: "₱1,000",
      features: ["Anti-Frizz", "Smooth Texture", "Quick Service"]
    },
    {
      icon: Sparkles,
      title: "Keratin Treatment",
      description: "Basic keratin treatment for hair restoration.",
      price: "₱500",
      features: ["Hair Repair", "Strengthening", "Conditioning"]
    },
    {
      icon: Palette,
      title: "Hair Color",
      description: "Professional hair coloring and highlights.",
      price: "₱500",
      features: ["Color Consultation", "Premium Dyes", "Color Care"]
    },
    {
      icon: Crown,
      title: "Hair and Makeup",
      description: "Complete styling package for special occasions.",
      price: "₱750",
      features: ["Hair Styling", "Makeup Application", "Touch-ups"]
    },
    {
      icon: Scissors,
      title: "Haircut",
      description: "Professional haircut and styling service.",
      price: "₱200",
      features: ["Consultation", "Cut & Style", "Hair Wash"]
    },
    {
      icon: Sparkles,
      title: "Manicure",
      description: "Professional nail care and polish application.",
      price: "₱100",
      features: ["Nail Care", "Polish", "Hand Massage"]
    },
    {
      icon: Sparkles,
      title: "Pedicure",
      description: "Complete foot care and nail treatment.",
      price: "₱150",
      features: ["Foot Care", "Nail Polish", "Foot Massage"]
    },
    {
      icon: Crown,
      title: "Foot Spa",
      description: "Relaxing foot spa treatment and massage.",
      price: "₱250",
      features: ["Foot Soak", "Scrub", "Relaxing Massage"]
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
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={`desktop-${index}`} variants={fadeInUp}>
              <ServiceCard service={service} />
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
              Can&apos;t Find What You&apos;re Looking For?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Transform your look with our premium services. We don&apos;t just style – we create 
              masterpieces that make you feel like a champion.
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