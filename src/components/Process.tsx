"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const steps = [
    {
      id: "01",
      title: "Concept",
      description: "First, we discuss your goals, target audience, and design preferences. Based on this, I create a tailored concept for your website."
    },
    {
      id: "02",
      title: "Web Design",
      description: "After the concept phase, I create a visual design that reflects your brand. You receive regular updates to ensure the design meets your expectations."
    },
    {
      id: "03",
      title: "Development",
      description: "Once the design is finalized, the actual development begins. This is where your website is built using modern technologies and proven methods."
    },
    {
      id: "04",
      title: "Launch",
      description: "As soon as you are satisfied, your website goes live. I am happy to support you long-term after the launch."
    }
  ];

  return (
    <section className="py-20 px-6 bg-black text-white" ref={ref}>
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest uppercase mb-16 text-gray-400"
        >
          Process
        </motion.h2>
        <motion.div style={{ y }} className="space-y-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-start border-b border-gray-800 pb-12 last:border-0"
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-4xl font-bold text-gray-700">{step.id}.</span>
              </div>
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-2xl font-bold">{step.title}</h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
