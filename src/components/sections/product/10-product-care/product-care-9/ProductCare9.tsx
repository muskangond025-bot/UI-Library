import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare9({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-100 flex items-center justify-center">
      <motion.div 
        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-serif text-neutral-800 mb-2">Care & Content</motion.h2>
        <motion.p variants={itemVariants} className="text-neutral-500 mb-8 font-light">Follow these instructions carefully</motion.p>
        
        <div className="space-y-6">
          {['100% Organic Cotton', 'Machine wash max 30°C', 'Do not bleach', 'Iron maximum 110°C'].map((text, i) => (
            <motion.div key={i} variants={itemVariants} className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <span className="text-neutral-700">{text}</span>
              <div className="h-2 w-2 rounded-full bg-neutral-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
