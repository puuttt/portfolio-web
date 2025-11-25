"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const services = [
    {
      id: "01",
      title: "Web Design",
      description: "I design websites that fit you and your target audience. Clear, responsive, and user-friendly. No standard solutions, but individual concepts focusing on structure, impact, and aesthetics."
    },
    {
      id: "02",
      title: "Development",
      description: "High-performance web development: I implement your website using modern technologies – for fast load times, optimal stability, and perfect display on all devices."
    },
    {
      id: "03",
      title: "Mobile Apps",
      description: "I build native and cross-platform mobile applications that provide seamless user experiences on both iOS and Android devices."
    },
    {
      id: "04",
      title: "Support & Maintenance",
      description: "I stay by your side even after the launch. Whether it's regular updates, technical support, or minor adjustments. I ensure everything runs smoothly."
    }
  ];

  return (
    <section id="services" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest uppercase mb-12 text-gray-500"
        >
          My Services
        </motion.h2>
        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="border-t border-gray-200 dark:border-gray-800 pt-8"
            >
              <span className="text-sm font-mono text-gray-400 mb-4 block">{service.id}.</span>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
