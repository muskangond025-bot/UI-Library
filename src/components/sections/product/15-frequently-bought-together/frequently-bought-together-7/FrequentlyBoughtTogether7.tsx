import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function FrequentlyBoughtTogether7({ data }: { data: any }) {
  const [assembled, setAssembled] = useState(false);

  const layers = [
    { id: 1, name: "Screen Protector", price: 29, color: "bg-cyan-400/80 backdrop-blur" },
    { id: 2, name: "Smartphone (Main)", price: 999, color: "bg-neutral-900" },
    { id: 3, name: "MagSafe Battery", price: 99, color: "bg-neutral-200" },
    { id: 4, name: "Leather Case", price: 59, color: "bg-amber-800" },
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center absolute top-12 z-10 w-full">
        <h2 className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">Exploded View</h2>
        <p className="text-neutral-500 font-bold mt-2 text-xs tracking-widest uppercase">See the full bundle layers</p>
      </div>

      <div className="relative w-64 h-96 mt-20 flex flex-col items-center justify-center perspective-[1000px]">
        {layers.map((layer, i) => {
          // Calculate isometric exploded Y offset
          const offsetY = assembled ? 0 : (i - 1.5) * 60;
          
          return (
            <motion.div
              key={layer.id}
              className={`absolute w-48 h-64 ${layer.color} rounded-3xl border border-white/20 shadow-xl flex items-center justify-center text-center p-4`}
              animate={{ 
                y: offsetY,
                rotateX: 60,
                rotateZ: -45,
                scale: assembled ? 1 : 0.9,
                zIndex: 10 - i
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: assembled ? i * 0.1 : (3-i) * 0.1 }}
            >
               <AnimatePresence>
                 {!assembled && (
                   <motion.div 
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                     className="absolute -right-24 rotate-45 rotate-x-[-60deg] text-left"
                   >
                     <div className={`font-black uppercase tracking-widest whitespace-nowrap ${i===1?'text-neutral-900':'text-neutral-500'}`}>{layer.name}</div>
                     <div className="font-bold text-emerald-600">${layer.price}</div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <button 
        onClick={() => setAssembled(!assembled)}
        className="mt-16 bg-neutral-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-800 transition-colors z-10 shadow-xl"
      >
        <Layers size={20} /> {assembled ? "Explode Bundle" : "Assemble & Buy All"}
      </button>

    </div>
  );
}
