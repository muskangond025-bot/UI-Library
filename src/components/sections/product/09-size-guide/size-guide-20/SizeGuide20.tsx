import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function SizeGuide20({ data }: { data: any }) {
  const [frozenSize, setFrozenSize] = useState<string | null>(null);

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center overflow-hidden relative">
      
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <motion.div 
          animate={frozenSize ? { x: 0 } : { x: [0, -2000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap px-16 pointer-events-auto"
        >
          {sizes.map((s, i) => (
            <motion.button
              key={i}
              onClick={() => setFrozenSize(s)}
              className={`text-[150px] md:text-[250px] font-black uppercase transition-all duration-500 ${frozenSize === s ? 'text-white scale-110' : frozenSize ? 'text-white/5 blur-sm' : 'text-white/20 hover:text-white'}`}
            >
              {s}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {frozenSize && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] p-12 shadow-2xl z-20"
          >
            <button 
              onClick={() => setFrozenSize(null)}
              className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              ✕
            </button>
            <h3 className="text-5xl font-black text-white mb-8">Size {frozenSize} Specs</h3>
            <div className="grid grid-cols-2 gap-8 text-white">
              <div className="border-b border-white/20 pb-4">
                <div className="text-sm text-white/50 font-bold uppercase tracking-widest">Chest</div>
                <div className="text-3xl font-light">38.5"</div>
              </div>
              <div className="border-b border-white/20 pb-4">
                <div className="text-sm text-white/50 font-bold uppercase tracking-widest">Length</div>
                <div className="text-3xl font-light">28.0"</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
