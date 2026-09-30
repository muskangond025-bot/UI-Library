import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation4({ data }: { data: any }) {
  const text = "100% Satisfaction Guarantee";
  
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-emerald-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-wrap justify-center mb-8 gap-x-2 gap-y-4 max-w-lg">
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            className="text-4xl md:text-5xl font-black text-emerald-900"
            initial={{ opacity: 0, rotateX: -90, y: 20 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.15,
              type: "spring",
              damping: 12
            }}
            viewport={{ once: true }}
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        ))}
      </div>
      
      <motion.div 
        className="max-w-md text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-700 font-medium mb-6">
          If you're not completely satisfied with your purchase, return it within 30 days for a full refund. No questions asked.
        </p>
        <motion.button 
          className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-emerald-500/30"
          whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
          whileTap={{ scale: 0.95 }}
        >
          Read Policy
        </motion.button>
      </motion.div>
    </div>
  );
}
