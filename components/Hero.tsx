"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Droplets, Leaf, Shield } from "lucide-react";
import Link from "next/link";

const images = [
  {
    url: "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/05/23164834/Namami-Gange.jpg",
    title: "Cleaner Waters",
    subtitle: "For Future Generations",
  },
  {
    url: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=2070",
    title: "Preserving Our Heritage",
    subtitle: "The Sacred Ganges River",
  },
  {
    url: "https://i.ytimg.com/vi/0ZbJY_XylSw/maxresdefault.jpg",
    title: "Sustainable Development",
    subtitle: "Along the River Banks",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative sm:h-[70vh] lg:h-[90vh] h-[50vh] overflow-hidden ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center "
              style={{ backgroundImage: `url(${images[currentSlide].url})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-white max-w-5xl"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6"
            >
              {images[currentSlide].title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-green-500">
                {images[currentSlide].title.split(" ").slice(-1)}
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-sm sm:text-xl md:text-2xl mb-8"
            >
              {images[currentSlide].subtitle}
            </motion.p>
            {/* Add button if needed */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="space-x-4"
            >
              <Link href="#about">
                <Button
                  size="sm"
                  className="bg-[#00875A] hover:bg-[#007A51] text-white text-sm sm:text-md md:text-lg"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="#chat">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 text-sm sm:text-md md:text-lg"
                >
                  Get Involved
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-500
            ${currentSlide === index ? "bg-[#00875A]" : "bg-white/30"}
            group-hover:bg-[#00875A]
          `}
                />
                {currentSlide === index && (
                  <motion.div
                    layoutId="slideIndicator"
                    className="absolute -inset-2 rounded-full border-2 border-[#00875A]"
                    transition={{ duration: 0.5 }}
                  />
                )}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white text-black text-xs sm:text-sm md:text-base px-2 py-1 rounded whitespace-nowrap">
                    Slide {index + 1}
                  </div>
                  <div className="w-2 h-2 bg-white transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
