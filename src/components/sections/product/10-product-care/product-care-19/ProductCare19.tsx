import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare19({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-pink-50 flex items-center justify-center overflow-hidden">
      <div className="relative group perspective-[1000px]">
        {/* Background decorative blobs */}
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div 
          className="relative bg-white/80 backdrop-blur-2xl p-12 rounded-[2rem] shadow-2xl border border-white max-w-lg w-full z-10"
          whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-center">
            <motion.div 
              className="inline-block mb-6 bg-pink-100 p-4 rounded-2xl"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-600">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </motion.div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Dry Clean Only</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              This garment is constructed from delicate fibers that require professional care. Submerging in water will cause irreversible damage.
            </p>
            
            <motion.button 
              className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium w-full"
              whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
              whileTap={{ scale: 0.95 }}
            >
              Find a cleaner near you
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
