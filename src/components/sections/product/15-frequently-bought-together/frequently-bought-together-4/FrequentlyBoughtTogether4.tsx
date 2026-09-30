import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FrequentlyBoughtTogether4({ data }: { data: any }) {
  const [hovered, setHovered] = useState<number | null>(null);

  const main = { name: "Smart Watch", price: 299 };
  const accessories = [
    { id: 1, name: "Leather Band", price: 49, angle: 0 },
    { id: 2, name: "Screen Guard", price: 15, angle: 120 },
    { id: 3, name: "Charging Dock", price: 35, angle: 240 }
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-white flex flex-col items-center justify-center relative overflow-hidden border border-neutral-200">
      
      <div className="absolute top-12 text-center z-10 w-full">
        <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-widest">Magnetic Cluster</h2>
        <p className="text-neutral-500 font-bold mt-2 text-xs tracking-widest uppercase">Hover bubbles to expand</p>
      </div>

      <div className="relative w-96 h-96 flex items-center justify-center mt-12">
        {/* Main Product */}
        <div className="w-40 h-40 bg-neutral-900 rounded-full flex flex-col items-center justify-center shadow-2xl z-20">
          <span className="font-bold text-white text-sm uppercase">{main.name}</span>
          <span className="font-black text-emerald-400 text-xl">${main.price}</span>
        </div>

        {/* Orbiting Accessories */}
        {accessories.map((acc) => {
          const isHovered = hovered === acc.id;
          const rad = acc.angle * (Math.PI / 180);
          const r = 120; // radius
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <motion.div
              key={acc.id}
              className={`absolute rounded-full flex flex-col items-center justify-center cursor-pointer transition-colors shadow-lg overflow-hidden ${isHovered ? 'bg-emerald-500 z-30' : 'bg-neutral-100 border-2 border-neutral-200 z-10'}`}
              animate={{ 
                x, y, 
                width: isHovered ? 140 : 64, 
                height: isHovered ? 140 : 64 
              }}
              onHoverStart={() => setHovered(acc.id)}
              onHoverEnd={() => setHovered(null)}
            >
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.div 
                    key="expanded"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-white p-2 text-center"
                  >
                    <span className="font-bold text-xs leading-tight mb-1">{acc.name}</span>
                    <span className="font-black text-lg">+${acc.price}</span>
                    <button className="mt-2 text-[10px] bg-white text-emerald-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider hover:bg-emerald-50">Add</button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400"
                  >
                    <Plus size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
