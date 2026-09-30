import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation11({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-blue-50 flex items-center justify-center overflow-hidden">
      <motion.div 
        className="bg-white p-10 rounded-[2rem] shadow-lg max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.div 
          className="w-16 h-16 bg-blue-100 rounded-full mb-6 relative flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.div 
            className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Extended Protection</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          Enjoy complete peace of mind with our extended 3-year protection plan, covering all accidental drops and spills.
        </p>
        
        <motion.button 
          className="text-blue-600 font-semibold flex items-center gap-2 group"
          whileHover={{ x: 5 }}
        >
          Learn More 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
