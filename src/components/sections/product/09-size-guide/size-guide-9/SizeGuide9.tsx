import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide9({ data }: { data: any }) {
  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl md:text-[10rem] font-black text-white leading-none tracking-tighter mb-12">SIZES.</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-y border-white/20 py-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-2">Regular Fit</h3>
            <p className="text-neutral-500">True to size. Order your normal size.</p>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.4 }}
            className="flex gap-4"
          >
            {['S', 'M', 'L', 'XL'].map((s) => (
              <div key={s} className="w-16 h-16 border-2 border-white text-white rounded-xl flex items-center justify-center text-2xl font-bold hover:bg-white hover:text-black transition-colors cursor-pointer">
                {s}
              </div>
            ))}
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}
