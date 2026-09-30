import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Package, Warehouse, Home } from 'lucide-react';

export default function ReturnRefundInformation10({ data }: { data: any }) {
  // Using whileInView for infinite loop parallax instead of useScroll for better grid compatibility
  
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-gradient-to-b from-blue-400 to-cyan-300 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Clouds */}
      <motion.div 
        className="absolute top-10 flex text-white/30 pointer-events-none"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <div className="flex gap-32 w-[200%]">
          {Array.from({ length: 10 }).map((_, i) => (
            <svg key={i} width="100" height="40" viewBox="0 0 100 40" fill="currentColor">
              <path d="M20 20 Q 30 10 40 20 Q 50 0 70 20 Q 90 10 90 30 L 10 30 Q 0 20 20 20 Z" />
            </svg>
          ))}
        </div>
      </motion.div>

      {/* Midground Scenery (Trees / Houses) */}
      <motion.div 
        className="absolute bottom-16 flex items-end gap-24 pointer-events-none text-emerald-800/40 w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
         {Array.from({ length: 15 }).map((_, i) => (
           <div key={i} className="flex gap-4">
             <div className="w-8 h-16 bg-emerald-800/20 rounded-t-full" />
             <div className="w-12 h-10 bg-emerald-800/20 mt-6" />
           </div>
         ))}
      </motion.div>

      {/* The Journey */}
      <div className="absolute bottom-8 w-full px-16 flex justify-between items-end z-20 pointer-events-none">
        <div className="flex flex-col items-center text-blue-900 drop-shadow-md">
           <Home size={32} />
           <span className="font-bold mt-2">You</span>
        </div>
        
        <div className="flex flex-col items-center text-blue-900 drop-shadow-md">
           <Warehouse size={40} />
           <span className="font-bold mt-2">Warehouse</span>
        </div>
      </div>

      {/* Moving Package (Moves from right to left to symbolize a return) */}
      <motion.div 
        className="absolute bottom-12 z-30 drop-shadow-xl"
        animate={{ 
          left: ["80%", "20%"],
          rotate: [0, -360],
          y: [0, -40, 0, -20, 0]
        }}
        transition={{ 
          left: { repeat: Infinity, duration: 4, ease: "linear" },
          rotate: { repeat: Infinity, duration: 4, ease: "linear" },
          y: { repeat: Infinity, duration: 1 }
        }}
      >
        <div className="bg-yellow-100 p-2 rounded shadow-lg border border-yellow-300">
          <Package className="text-yellow-700" size={24} />
        </div>
      </motion.div>

      {/* Road */}
      <div className="absolute bottom-0 w-full h-16 bg-neutral-800 z-10 flex flex-col justify-center">
        <div className="w-full border-t-4 border-dashed border-yellow-400 opacity-50" />
      </div>

      <div className="relative z-40 text-center -mt-16 text-blue-950 mix-blend-overlay">
        <h2 className="text-5xl font-black uppercase tracking-widest">Return Journey</h2>
        <p className="font-bold text-xl">Track your package every step back.</p>
      </div>
    </div>
  );
}
