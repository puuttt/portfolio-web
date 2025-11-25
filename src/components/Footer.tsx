"use client";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-2xl">
              Let's talk about your project and make something great!
            </h2>
            <a 
              href="mailto:contact@rasyidputra.dev" 
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Start Project
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-lg"
          >
            <a href="tel:+6281234567890" className="hover:underline">+62 812 3456 7890</a>
            <a href="mailto:contact@rasyidputra.dev" className="hover:underline">contact@rasyidputra.dev</a>
          </motion.div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <div>© 2025 Rasyid Putra</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black dark:hover:text-white">Imprint</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
