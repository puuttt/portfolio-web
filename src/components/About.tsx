"use client";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-zinc-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2" ref={ref}>
            <motion.div 
              style={{ y }}
              className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-gray-200"
            >
               <Image 
                 src="/images/me.JPG"
                 alt="Rasyid Putra"
                 fill
                 className="object-cover"
               />
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-500">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Web & Mobile Developer
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I develop websites and mobile applications that are visually appealing and technically flawless.
              Every project is unique, ranging from small business sites to large-scale web projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              As a developer, I accompany you from the initial idea to the finished product, creating solutions
              that perfectly fit you and your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
