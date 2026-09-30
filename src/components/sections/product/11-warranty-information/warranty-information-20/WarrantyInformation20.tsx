import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WarrantyInformation20({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-amber-50 flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div 
        className="relative z-10 text-center max-w-lg mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <h2 className="text-4xl font-serif text-amber-950 mb-4">Certified Protection</h2>
        <p className="text-amber-800/70">
          Our promise is etched in stone (or in this case, beautifully drawn SVG paths). Watch the seal of guarantee come to life.
        </p>
      </motion.div>
      
      <div className="w-48 h-48 relative">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
          <motion.circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M30 50 L45 65 L70 35"
            fill="none"
            stroke="#b45309"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>
      </div>
    </div>
  );
}
