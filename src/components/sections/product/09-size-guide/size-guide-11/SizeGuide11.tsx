import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sizes = [
  { size: 'XS', dims: '34" Chest' },
  { size: 'S', dims: '36" Chest' },
  { size: 'M', dims: '38" Chest' },
  { size: 'L', dims: '40" Chest' },
  { size: 'XL', dims: '42" Chest' }
];

export default function SizeGuide11({ data }: { data: any }) {
  const [index, setIndex] = useState(2);

  return (
    <section className="py-32 bg-neutral-950 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        
        <h2 className="text-4xl font-bold text-white mb-20 tracking-[0.2em] uppercase">Dial in your fit</h2>

        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border border-white/10 flex items-center justify-center">
          {/* Active Display in Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="text-8xl font-black text-white leading-none">{sizes[index].size}</div>
                <div className="text-blue-400 font-mono mt-4 tracking-widest">{sizes[index].dims}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Rotating Dial Items */}
          {sizes.map((s, i) => {
            // Calculate angle based on difference from active index
            let diff = i - index;
            // Handle wrap around for infinite circular feel
            if (diff > 2) diff -= sizes.length;
            if (diff < -2) diff += sizes.length;

            const angle = diff * 72; // 360 / 5 sizes
            const isActive = i === index;

            return (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                animate={{ rotate: angle }}
                transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${isActive ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] scale-125' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}`}>
                    {s.size}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
