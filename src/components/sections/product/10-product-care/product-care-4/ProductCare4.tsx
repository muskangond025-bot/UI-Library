import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProductCare4({ data }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div ref={containerRef} className="p-8 min-h-[500px] rounded-3xl bg-gradient-to-br from-orange-100 to-amber-50 overflow-hidden relative flex items-center justify-center">
      <motion.div style={{ y: y1 }} className="absolute left-10 top-20 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-60" />
      <motion.div style={{ y: y2 }} className="absolute right-10 bottom-20 w-48 h-48 bg-amber-300 rounded-full blur-3xl opacity-40" />
      
      <div className="z-10 bg-white/60 backdrop-blur-xl p-10 rounded-2xl border border-white max-w-md w-full shadow-xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-orange-900 mb-6"
        >
          Care Instructions
        </motion.h2>
        
        <ul className="space-y-4">
          {[
            "Keep away from direct heat",
            "Do not use chemical solvents",
            "Professional cleaning recommended"
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="flex items-center text-orange-800"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-4" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
