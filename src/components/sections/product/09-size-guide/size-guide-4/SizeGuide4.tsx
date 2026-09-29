import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide4({ data }: { data: any }) {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <section className="py-32 bg-black min-h-screen flex flex-col justify-center overflow-hidden relative">
      <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-10 pointer-events-none">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[200px] font-black text-white leading-none uppercase"
        >
          MEASUREMENTS MEASUREMENTS MEASUREMENTS
        </motion.div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {sizes.map((size, i) => (
            <motion.div
              key={size}
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="aspect-[3/4] rounded-2xl relative overflow-hidden group cursor-crosshair"
            >
              {/* Glassmorphic background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <span className="text-6xl font-black text-white mb-6 group-hover:scale-125 transition-transform duration-500">{size}</span>
                
                <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                  <div className="text-white/60 text-sm">CHEST</div>
                  <div className="text-white font-bold text-xl mb-2">{34 + i*2}"</div>
                  <div className="w-full h-[1px] bg-white/20 mb-2" />
                  <div className="text-white/60 text-sm">WAIST</div>
                  <div className="text-white font-bold text-xl">{28 + i*2}"</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
