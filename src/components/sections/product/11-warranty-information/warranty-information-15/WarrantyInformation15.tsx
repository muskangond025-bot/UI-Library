import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation15({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-emerald-950 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Decorative noise/grain background */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="relative z-10 max-w-lg text-center">
        <motion.div 
          className="w-24 h-24 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-8 relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <motion.div 
            className="absolute inset-0 border-2 border-emerald-400 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-emerald-400 text-3xl font-bold">10</span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl font-bold text-emerald-50 mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Decade Guarantee
        </motion.h2>
        
        <motion.p 
          className="text-emerald-200/60"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A full 10-year warranty backing up our commitment to sustainable and durable manufacturing.
        </motion.p>
      </div>
    </div>
  );
}
