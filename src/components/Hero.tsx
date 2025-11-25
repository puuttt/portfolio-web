"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter max-w-4xl mb-12"
        >
          I help you make a lasting impression online.
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Start Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
