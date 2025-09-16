"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/components/animations/variants';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const GalleryImage = ({ item, height }: { item: GalleryItem; height: string }) => {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group ${height}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Actual Image */}
      <div className="absolute inset-0">
        <Image 
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      
      {/* Overlay with hover effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
            <Camera className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full capitalize">
          {item.category}
        </span>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const galleryItems = [
    {
      id: 1,
      category: "styling",
      title: "Hair Styling Excellence",
      description: "Professional hair styling showcase",
      image: "/circular1.jpg",
      tags: ["Styling", "Professional", "Excellence"]
    },
    {
      id: 2,
      category: "nails",
      title: "Nail Art Mastery",
      description: "Beautiful nail art and manicure work",
      image: "/circular9.jpg",
      tags: ["Nails", "Art", "Manicure"]
    },
    {
      id: 3,
      category: "treatment",
      title: "Hair Treatment Results",
      description: "Stunning hair treatment transformations",
      image: "/circular11.jpg",
      tags: ["Treatment", "Transformation", "Results"]
    },
    {
      id: 4,
      category: "nails",
      title: "Elegant Nail Design",
      description: "Sophisticated nail designs and finishes",
      image: "/circular8.jpg",
      tags: ["Nails", "Design", "Elegant"]
    },
    {
      id: 5,
      category: "events",
      title: "Special Event Styling",
      description: "Glamorous styling for special occasions",
      image: "/circular7.jpg",
      tags: ["Events", "Glamour", "Special"]
    },
    {
      id: 6,
      category: "cuts",
      title: "Professional Hair Cuts",
      description: "Expert hair cutting and styling services",
      image: "/circular6.jpg",
      tags: ["Cuts", "Professional", "Styling"]
    },
    {
      id: 7,
      category: "treatment",
      title: "Hair Care Excellence",
      description: "Premium hair treatment and care services",
      image: "/circular4.jpg",
      tags: ["Treatment", "Care", "Premium"]
    },
    {
      id: 8,
      category: "color",
      title: "Hair Coloring Artistry",
      description: "Beautiful hair coloring and highlights",
      image: "/circular2.jpg",
      tags: ["Color", "Artistry", "Highlights"]
    },
    {
      id: 9,
      category: "bridal",
      title: "Bridal Beauty Services",
      description: "Complete bridal styling and beauty packages",
      image: "/circular3.jpg",
      tags: ["Bridal", "Beauty", "Complete"]
    }
  ]

    const filteredItems = galleryItems

  const itemsToShow = 4 
  const maxIndex = Math.max(0, filteredItems.length - itemsToShow)

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const itemWidth = container.scrollWidth / filteredItems.length
      container.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      })
    }
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex)
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);


  return (
    <section id="gallery" className="py-20 bg-white">
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
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Gallery of Champions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Explore our portfolio of stunning transformations and see why our clients leave feeling like champions. 
              Each image represents our commitment to excellence and artistry.
            </p>
          </motion.div>
        </motion.div>


        {/* Animated Testimonials Columns */}
        <motion.div
          className="relative max-w-7xl mx-auto overflow-hidden"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          key="gallery-columns"
          style={{ height: '600px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Left Column - Moving Up */}
            <motion.div
              className="flex flex-col gap-6"
              animate={{ y: [0, -100, 0] }}
              transition={{
                duration: 12,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {filteredItems.slice(0, Math.ceil(filteredItems.length / 3)).concat(
                filteredItems.slice(0, Math.ceil(filteredItems.length / 3))
              ).map((item, index) => {
                const heights = ["h-48", "h-56", "h-64", "h-72", "h-80"];
                const randomHeight = heights[index % heights.length];
                return (
                  <GalleryImage key={`left-${index}`} item={item} height={randomHeight} />
                );
              })}
            </motion.div>

            {/* Middle Column - Moving Down */}
            <motion.div
              className="flex flex-col gap-6"
              animate={{ y: [0, 100, 0] }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {filteredItems.slice(Math.ceil(filteredItems.length / 3), Math.ceil(filteredItems.length * 2 / 3)).concat(
                filteredItems.slice(Math.ceil(filteredItems.length / 3), Math.ceil(filteredItems.length * 2 / 3))
              ).map((item, index) => {
                const heights = ["h-52", "h-60", "h-68", "h-76", "h-44"];
                const randomHeight = heights[index % heights.length];
                return (
                  <GalleryImage key={`middle-${index}`} item={item} height={randomHeight} />
                );
              })}
            </motion.div>

            {/* Right Column - Moving Up */}
            <motion.div
              className="flex flex-col gap-6"
              animate={{ y: [0, -80, 0] }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {filteredItems.slice(Math.ceil(filteredItems.length * 2 / 3)).concat(
                filteredItems.slice(Math.ceil(filteredItems.length * 2 / 3))
              ).map((item, index) => {
                const heights = ["h-56", "h-64", "h-48", "h-72", "h-60"];
                const randomHeight = heights[index % heights.length];
                return (
                  <GalleryImage key={`right-${index}`} item={item} height={randomHeight} />
                );
              })}
            </motion.div>
          </div>

          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Join our gallery of champions! Book your appointment today and let our expert team 
              create your perfect look. Your transformation story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Book Appointment
              </Button>
              <Button variant="outline" size="lg">
                Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-200"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center text-primary">
                    <Camera className="w-24 h-24 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {filteredItems[selectedImage]?.title}
                    </h3>
                    <p className="text-gray-600">
                      {filteredItems[selectedImage]?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors duration-200"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors duration-200"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
                {selectedImage + 1} of {filteredItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery 