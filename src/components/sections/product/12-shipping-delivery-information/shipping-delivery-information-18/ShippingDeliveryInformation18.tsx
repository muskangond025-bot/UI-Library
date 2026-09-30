import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

export default function ShippingDeliveryInformation18({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-sky-900 flex flex-col items-center justify-center relative overflow-hidden group">
      
      {/* Background Buildings (slow loop) */}
      <motion.div 
        className="absolute bottom-10 left-0 flex pointer-events-none opacity-20 w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Double the array for seamless looping */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i} 
            className="w-32 bg-sky-950 mx-1 rounded-t-lg shrink-0 flex items-end justify-center pb-2" 
            style={{ height: Math.max(100, Math.random() * 200 + 100) + 'px' }}
          >
            {/* Tiny windows */}
            <div className="w-4 h-4 bg-sky-800/30 rounded-sm mb-4" />
          </div>
        ))}
      </motion.div>

      {/* Midground Trees/Signs (medium loop) */}
      <motion.div 
        className="absolute bottom-10 left-0 flex gap-24 pointer-events-none w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-4 h-16 bg-sky-950 relative shrink-0">
             <div className="absolute -top-10 -left-6 w-16 h-16 rounded-full bg-sky-800" />
          </div>
        ))}
      </motion.div>

      {/* Foreground Truck (bouncing in place while background moves) */}
      <motion.div 
        className="absolute bottom-8 z-20 pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 0.4, ease: "easeInOut" }}
      >
        <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center gap-2">
          <Truck size={48} className="text-sky-900" />
          <span className="font-bold text-sky-900 text-xl italic tracking-wider">EXPRESS</span>
        </div>
        
        {/* Exhaust fumes */}
        <motion.div 
          className="absolute bottom-2 -left-6 w-4 h-4 bg-sky-100/50 rounded-full blur-sm"
          animate={{ x: -20, opacity: [0.8, 0], scale: [1, 2] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
      </motion.div>

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-10 bg-sky-950 z-10 border-t-2 border-sky-800" />

      {/* Text overlays */}
      <div className="relative z-30 text-center mb-16 mix-blend-overlay">
        <h2 className="text-6xl font-black text-sky-100 uppercase tracking-tighter">Moving Fast</h2>
        <p className="text-xl font-bold text-sky-200">24/7 Delivery Network</p>
      </div>
    </div>
  );
}
