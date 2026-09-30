import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function ReturnRefundInformation1({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = [
    "30-DAY RETURNS", "NO QUESTIONS ASKED", "INSTANT REFUND",
    "FREE SHIPPING", "EASY DROP-OFF", "24/7 SUPPORT"
  ];
  
  // Create a continuous infinite marquee
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950" />
      
      <div className="text-center z-10 mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Seamless Returns</h2>
        <p className="text-zinc-400">Our promise to you.</p>
      </div>

      <div className="w-full relative overflow-hidden flex -rotate-2 scale-110">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="mx-4 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-zinc-800 uppercase tracking-tighter hover:from-white hover:to-zinc-400 transition-all duration-300 cursor-default">
              {item} <span className="text-zinc-800 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="w-full relative overflow-hidden flex rotate-2 scale-110 mt-8">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...items, ...items, ...items].reverse().map((item, i) => (
            <div key={i} className="mx-4 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-zinc-800 uppercase tracking-tighter hover:from-white hover:to-zinc-400 transition-all duration-300 cursor-default">
              {item} <span className="text-zinc-800 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
