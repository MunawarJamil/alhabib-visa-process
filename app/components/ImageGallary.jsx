"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ImageGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-gradient-to-b from-slate-50 to-white rounded-3xl shadow-lg">
      {/* Header with 3D effect */}
      <motion.div
        className="relative w-full mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-amber-500/20 rounded-xl blur-xl"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <h1 className="text-center relative py-6">
          <motion.span
            className="text-[#00454A] text-4xl md:text-5xl lg:text-6xl font-bold inline-block"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ textShadow: "2px 2px 0px rgba(0,69,74,0.2)" }}
          >
            Image{" "}
          </motion.span>
          <motion.span
            className="text-[#D4A10F] text-4xl md:text-5xl lg:text-6xl font-bold inline-block"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ textShadow: "2px 2px 0px rgba(212,161,15,0.2)" }}
          >
            Gallery
          </motion.span>
        </h1>
      </motion.div>

      {/* Gallery with immersive layout */}
      <motion.div
        className="relative w-full flex items-center justify-center gap-3 md:gap-2 py-6 overflow-x-auto scroll-smooth min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-gradient-to-b from-transparent to-slate-100/50 rounded-full blur-3xl"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative transition-all mx-auto cursor-pointer flex-shrink-0 rounded-2xl overflow-hidden ${
              activeIndex === index
                ? "w-72 h-64 sm:w-80 sm:h-72 md:w-96 md:h-80 lg:w-[32rem] lg:h-[24rem] xl:w-[38rem] xl:h-[28rem] z-20"
                : "w-14 h-64 sm:w-16 sm:h-72 md:w-20 md:h-80 lg:w-24 lg:h-[24rem] xl:w-28 xl:h-[28rem] z-10"
            }`}
            onClick={() => handleImageClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            layout
            whileHover={{
              scale: activeIndex === index ? 1.03 : 1.08,
              boxShadow:
                "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
            }}
            animate={{
              boxShadow:
                activeIndex === index
                  ? "0 25px 50px -12px rgba(0,0,0,0.25)"
                  : "0 4px 6px -1px rgba(0,0,0,0.1)",
            }}
            transition={{
              layout: {
                duration: 0.6,
                type: "spring",
                stiffness: 70,
                damping: 20,
              },
              boxShadow: { duration: 0.3 },
            }}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Image with animated filter effects */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{
                filter:
                  activeIndex === index
                    ? "brightness(1.05) contrast(1.05)"
                    : "brightness(0.85) contrast(0.95) grayscale(0.5)",
                scale:
                  hoveredIndex === index && activeIndex !== index ? 1.15 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index <= 2}
              />
            </motion.div>

            {/* Animated Badge with 3D effect */}
            <motion.div
              className="absolute top-3 left-3 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-30"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateZ: activeIndex === index ? [0, -5, 5, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                rotateZ: {
                  duration: 0.6,
                  delay: 0.2,
                  repeat: activeIndex === index ? 0 : 0,
                  repeatType: "reverse",
                },
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-600 to-teal-900"
                whileHover={{ scale: 1.15 }}
                animate={{
                  boxShadow:
                    activeIndex === index
                      ? "0 0 15px 2px rgba(15, 118, 110, 0.5)"
                      : "0 0 0px 0px rgba(15, 118, 110, 0.2)",
                }}
              />
              <span className="relative text-white text-lg md:text-xl font-bold">
                {index + 1}
              </span>
            </motion.div>

            {/* Animated overlay info for active image */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-5 md:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />

                  <motion.h3
                    className="relative text-white font-bold text-xl md:text-2xl mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {image.title || `Amazing View ${index + 1}`}
                  </motion.h3>

                  <motion.p
                    className="relative text-white/90 text-sm md:text-base max-w-md"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {image.description ||
                      "Explore this stunning image in our premium collection."}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Inactive card hover effect indicator */}
            {activeIndex !== index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0"
                animate={{
                  opacity: hoveredIndex === index ? 0.7 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-full flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? [0.9, 1] : 0.9,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation dots */}
      <motion.div
        className="flex justify-center mt-6 gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {images.map((_, index) => (
          <motion.button
            key={`dot-${index}`}
            className="w-3 h-3 rounded-full"
            onClick={() => handleImageClick(index)}
            animate={{
              backgroundColor: activeIndex === index ? "#00454A" : "#D4A10F50",
              scale: activeIndex === index ? 1.2 : 1,
            }}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGallery;
