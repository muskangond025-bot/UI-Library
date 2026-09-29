import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const items = [
  { name: "Smartphone", qty: 1 },
  { name: "USB-C Charge Cable", qty: 1 },
  { name: "SIM Ejector Tool", qty: 1 },
  { name: "Quick Start Guide", qty: 1 }
];

export default function WhatsInTheBox4({ data }: { data: any }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cursorX = useSpring(0, { damping: 25, stiffness: 120 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 120 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section className="py-32 bg-[#050505] min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        
        <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-500 uppercase mb-16 border-b border-neutral-800 pb-4">
          What's included
        </h2>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex justify-between items-center py-8 border-b border-neutral-800 last:border-0 cursor-default"
            >
              <h3 className="text-3xl md:text-5xl font-black text-neutral-400 group-hover:text-white transition-colors duration-300">
                {item.name}
              </h3>
              <span className="text-xl font-bold text-neutral-600 group-hover:text-blue-500 transition-colors duration-300">
                x{item.qty}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 rounded-2xl overflow-hidden shadow-2xl bg-neutral-800 flex items-center justify-center border border-white/10"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: "-50%", 
          translateY: "-50%",
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8
        }}
      >
        <span className="text-white font-bold">Image Preview {hoveredIndex}</span>
      </motion.div>
    </section>
  );
}
