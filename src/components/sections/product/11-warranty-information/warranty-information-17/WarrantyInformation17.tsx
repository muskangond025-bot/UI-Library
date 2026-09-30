import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation17({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex items-center justify-center perspective-[1200px]">
      <motion.div 
        className="w-full max-w-sm"
        initial={{ rotateY: -30, rotateX: 10, opacity: 0 }}
        whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        viewport={{ margin: "-20%" }}
      >
        <motion.div 
          className="bg-gradient-to-br from-neutral-800 to-neutral-950 p-1 rounded-2xl shadow-2xl"
          whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800" style={{ transform: "translateZ(30px)" }}>
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 shadow-inner">
              <span className="text-xl text-neutral-400 font-serif italic">W</span>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-2" style={{ transform: "translateZ(40px)" }}>
              Premium Coverage
            </h3>
            
            <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
              Experience our highest tier of protection, featuring next-day replacement and zero deductibles on all claims.
            </p>
            
            <motion.button 
              className="w-full py-3 bg-white text-neutral-900 font-bold rounded-lg"
              whileTap={{ scale: 0.95 }}
              style={{ transform: "translateZ(50px)" }}
            >
              Upgrade Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
