import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sizes = ['S', 'M', 'L', 'XL'];
const dimensions = {
  S: { chest: 38, length: 28 },
  M: { chest: 40, length: 29 },
  L: { chest: 42, length: 30 },
  XL: { chest: 44, length: 31 }
};

export default function SizeGuide10({ data }: { data: any }) {
  const [index, setIndex] = useState(1); // Default to M

  const activeSize = sizes[index];
  const activeDims = dimensions[activeSize as keyof typeof dimensions];

  return (
    <section className="py-32 bg-[#f8f8f8] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-black">Interactive Fit</h2>
          <p className="text-neutral-500 mt-2">Drag or click to compare sizes.</p>
        </div>

        <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-neutral-100 relative overflow-hidden">
          
          <div className="flex justify-between items-center mb-16 relative">
            {/* Track */}
            <div className="absolute left-0 right-0 h-1 bg-neutral-200 top-1/2 -translate-y-1/2 z-0" />
            
            {sizes.map((s, i) => (
              <div 
                key={s} 
                onClick={() => setIndex(i)}
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl cursor-pointer transition-colors ${index === i ? 'bg-blue-600 text-white' : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200'}`}
              >
                {s}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="bg-neutral-50 rounded-3xl p-8">
              <div className="text-neutral-400 font-bold uppercase tracking-widest text-sm mb-4">Chest</div>
              <motion.div 
                key={`chest-${activeSize}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
                className="text-6xl font-black text-black"
              >
                {activeDims.chest}"
              </motion.div>
            </div>
            
            <div className="bg-neutral-50 rounded-3xl p-8">
              <div className="text-neutral-400 font-bold uppercase tracking-widest text-sm mb-4">Length</div>
              <motion.div 
                key={`length-${activeSize}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
                className="text-6xl font-black text-black"
              >
                {activeDims.length}"
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
