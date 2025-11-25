"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollScale({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0.9, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref} 
      style={{ scale, opacity }}
      className={`w-full ${className || ''}`}
    >
      {children}
    </motion.div>
  );
}
