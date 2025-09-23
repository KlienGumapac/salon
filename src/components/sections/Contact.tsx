"use client"

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; 
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  MessageSquare,
  Star,
  ThumbsUp,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Button from '../ui/Button';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "(555) 987-6543"],
      description: "Call us to book your appointment or ask questions"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["kliengumapac5@gmail.com", "bookings@sheilamagpalesalon.com"],
      description: "Send us an email and we'll get back to you within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Beauty Street", "Downtown City, ST 12345"],
      description: "Come visit our beautiful salon in the heart of downtown"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sat: 9AM-7PM", "Sunday: 10AM-5PM"],
      description: "We're open 7 days a week to serve you better"
    }
  ]

  const services = [
    "Nano Silk Rebond",
    "Kerabond",
    "Keratin Blowout",
    "Brazilian Blowout",
    "Keratin Treatment",
    "Hair Color",
    "Consultation",
    "Other"
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely amazing! Sheila transformed my hair completely. I felt like a true champion walking out of there!",
      service: "Hair Color & Cut"
    },
    {
      name: "Lyz VB",
      rating: 5,
      review: "Just got my haircut today by ma'am Mai-mai. I don't regret having my haircut there. Their service is great, they are welcoming, polite and I am very satisfied with the result. Thank you very much especially for ma'am Mai-mai 😊😘 I'll be back. Keep up the good work. God bless you more 🙏",
      service: "Hair Cut"
    },
    {
      name: "Jennifer Lee",
      rating: 5,
      review: "Professional, friendly, and talented. This salon truly lives up to its 'Home of Champions' motto!",
      service: "Makeup & Styling"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS env vars missing. Set NEXT_PUBLIC_EMAILJS_* in .env.local or hosting env.');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }
 
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        message: formData.message
      };
 
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: ""
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Ready to become a champion? Get in touch with us to book your appointment or learn more 
              about our services. We&apos;re here to help you achieve your perfect look.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
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
                        <info.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/20 rounded-full"></div>
                  </div>

                  {/* Title with modern styling */}
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </h4>
                  
                  {/* Details */}
                  <div className="mb-4 space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-semibold text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-medium text-xs leading-relaxed">
                    {info.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    Book Your Appointment
                  </h3>
                </div>
              
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="eg: +63 917 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Service *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 text-gray-900  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 text-gray-900  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your desired look or any special requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully! We&apos;ll get back to you within 24 hours.</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Failed to send message. Please try again or call us directly.</span>
                  </div>
                )}
              </form>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="text-center">
                      {/* Icon with modern design */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                            <MapPin className="w-10 h-10 text-primary" />
                          </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/20 rounded-full"></div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        Sheila Magpale Salon
                      </h4>
                      <p className="text-gray-700 font-semibold">
                        123 Beauty Street<br />
                        Downtown City, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            {/* Quick Contact */}
            <div className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    Quick Booking
                  </h4>
                </div>
                <p className="text-gray-600 mb-6 font-medium text-sm">
                  Need to book urgently? Call us directly for same-day appointments.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-300 rounded-xl">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (555) 123-4567
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl transition-all duration-300">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Text Us
                  </Button>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              What Our Champions Say
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Don&apos;t just take our word for it - hear from our satisfied clients who&apos;ve experienced 
              the champion treatment at our salon.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Quote decoration */}
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-primary font-serif">&quot;</span>
                  </div>
                  
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative p-6 pt-8">
                    {/* User Avatar and Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">Verified Client</p>
                      </div>
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-primary fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Comment Text */}
                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed font-medium text-sm italic">
                        &quot;{testimonial.review}&quot;
                      </p>
                    </div>

                    {/* Service Tag and Time */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {testimonial.service}
                      </span>
                    </div>

                    
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Your Champion Transformation Awaits
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Join hundreds of satisfied clients who have discovered their champion look at our salon. 
              Book your appointment today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Book Now
              </Button>
              <Button variant="outline" size="lg">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 
