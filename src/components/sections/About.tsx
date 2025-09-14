"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Star, Heart, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/components/animations/variants';
import CircularGallery from '@/components/animations/CircularGallery';

const About = () => {


  const achievements = [
    {
      icon: Sparkles,
      title: "Spotless & Hygienic",
      description: "Maintaining the highest standards of cleanliness and sanitation for your safety"
    },
    {
      icon: Users,
      title: "Happy Clients",
      description: "Countless satisfied customers who trust us with their beauty needs"
    },
    {
      icon: Star,
      title: "Premium Products",
      description: "Using only the finest and highest quality beauty brands and materials"
    },
    {
      icon: Award,
      title: "One of the Best Salons",
      description: "Recognized for exceptional service and outstanding results in the community"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Home of Champions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              For over 15 years, Sheila Magpale Salon has been transforming lives through the art of beauty. 
              We believe that every client deserves to feel like a champion, and our expert team is dedicated 
              to making that vision a reality.
            </p>
          </motion.div>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-700 font-medium">
              <p>
                Founded in 2009, Sheila Magpale Salon has been transforming lives through the art of beauty. 
                We believe that every client deserves to feel like a champion, and that&apos;s exactly what we deliver. 
                Our passion for excellence and commitment to using only the finest products and techniques 
                has made us the premier destination for beauty in our community.
              </p>
              <p>
                What started as a small neighborhood salon has grown into a premier destination for hair styling, 
                coloring, and beauty services. Our team of expert stylists has trained under the best in the industry 
                and continues to stay current with the latest trends and techniques.
              </p>
              <p>
                We pride ourselves on using only premium products and providing personalized service that caters 
                to each client&apos;s unique style and needs. From everyday looks to special occasion styling, 
                we&apos;re here to help you look and feel your absolute best.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-gray-600 font-medium">Salon Interior Image</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Circular Gallery */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Work in Motion
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Explore our diverse range of beauty services through this interactive showcase. 
              Each piece represents our commitment to excellence and artistry.
            </p>
          </div>
          <CircularGallery 
            radius={180}
            itemSize={120}
            autoRotate={true}
            rotationSpeed={0.2}
          />
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="relative h-full bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative p-6 text-center">
                  {/* Icon with modern design */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <achievement.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/20 rounded-full"></div>
                  </div>

                  {/* Title with modern styling */}
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-medium text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Values Section */}
        <motion.div
          className="mt-20 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              {/* Clock icon was removed from imports, so this line is removed */}
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Commitment to Excellence
            </h3>
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-medium"
              variants={fadeInUp}
            >
              We are committed to providing exceptional service, using premium products, 
              and staying current with the latest trends and techniques. Your satisfaction 
              is our priority, and we won&apos;t rest until you leave feeling like a champion.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Products</h4>
                <p className="text-gray-700 text-sm font-medium">Premium brands and professional-grade tools</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Training</h4>
                <p className="text-gray-700 text-sm font-medium">Continuous education and skill development</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Service</h4>
                <p className="text-gray-700 text-sm font-medium">Tailored to your unique style and needs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 