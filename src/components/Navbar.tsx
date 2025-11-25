"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          RASYID PUTRA
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            ABOUT ME
          </Link>
          <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            PROJECTS
          </Link>
          <Link href="#services" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            SERVICES
          </Link>
          <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            CONTACT
          </Link>
        </div>
        <Link
          href="#contact"
          className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Start Project
        </Link>
      </div>
    </motion.nav>
  );
}
