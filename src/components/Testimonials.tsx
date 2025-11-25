"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest uppercase mb-12 text-gray-500"
        >
          Testimonials
        </motion.h2>
        <motion.blockquote 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-medium leading-relaxed mb-8"
        >
          "Rasyid was truly one of the most pleasant experiences I've ever had in a project. 
          Totally uncomplicated, super reliable, and simply in the flow. He developed the mockup of my landing page 
          completely independently."
        </motion.blockquote>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
              alt="Simo Azzaoui"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-bold">Simo Azzaoui</div>
            <div className="text-sm text-gray-500">Creator, Meet your Mentor</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
