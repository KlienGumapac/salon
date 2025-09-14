"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Button from "@/components/ui/Button"
import { fadeInUp, staggerContainer } from "@/components/animations/variants"

const Footer = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "(555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sheilamagpalesalon.com", "bookings@sheilamagpalesalon.com"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Beauty Street", "Downtown City, ST 12345"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sat: 9AM-7PM", "Sunday: 10AM-5PM"],
    },
  ]

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  const services = [
    "Hair Styling & Cuts",
    "Hair Coloring",
    "Bridal Services",
    "Hair Treatments",
    "Makeup Services",
    "Express Services",
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Brand Section */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Sheila Magpale Salon
              </h3>
              <p className="text-gray-100 mb-6 leading-relaxed font-medium">
                Home of Champions - Where beauty meets excellence. Experience world-class 
                styling and personalized care that transforms you into a champion.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <info.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                                             <div className="font-semibold text-white mb-1">{info.title}</div>
                       {info.details.map((detail, idx) => (
                         <div key={idx} className="text-gray-100 text-sm font-medium">
                           {detail}
                         </div>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                                     <motion.a
                     key={index}
                     href={link.href}
                     className="block text-gray-100 hover:text-primary transition-colors duration-200 font-medium"
                     whileHover={{ x: 5 }}
                   >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
                             <div className="space-y-3">
                 {services.map((service, index) => (
                   <div key={index} className="text-gray-100 text-sm font-medium">
                     {service}
                   </div>
                 ))}
               </div>
              <div className="mt-6">
                <Button size="sm" className="w-full">
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        className="border-t border-white/10 py-8"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Our Latest Offers
            </h4>
                         <p className="text-gray-100 mb-6 font-medium">
               Subscribe to our newsletter and never miss our beauty tips and exclusive deals.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                             <input
                 type="email"
                 placeholder="Enter your email"
                 className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white/30"
               />
              <Button className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                         <div className="text-gray-100 text-sm text-center md:text-left font-medium">
               © 2025 Sheila Magpale Salon. All rights reserved. | Home of Champions
             </div>
             <div className="flex gap-6 text-sm text-gray-100">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 