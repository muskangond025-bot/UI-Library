import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation7({ data }: { data: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)" }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-100 flex items-center justify-center">
      <motion.div 
        className="bg-white p-12 rounded-[2rem] shadow-xl w-full max-w-2xl relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <motion.p variants={itemVariants} className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-4">Terms & Conditions</motion.p>
        <motion.h2 variants={itemVariants} className="text-4xl font-serif text-neutral-900 mb-8">Warranty Details</motion.h2>
        
        <motion.div 
          className="space-y-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
        >
          {[
            'Valid for 12 months from purchase date',
            'Covers hardware defects and workmanship',
            'Requires original proof of purchase',
            'Excludes accidental and cosmetic damage'
          ].map((text, i) => (
            <motion.div key={i} variants={itemVariants} className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 mr-4 shrink-0" />
              <span className="text-neutral-600 text-lg leading-relaxed">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
