import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const items = [
  { name: "Smartphone", qty: 1, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "USB-C Cable", qty: 1, img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Power Adapter", qty: 1, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Start Guide", qty: 1, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded4({ data }: { data: any }) {
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
    <section className="py-32 bg-[#050505] min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        
        <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-500 uppercase mb-16 border-b border-neutral-800 pb-4">
          What's included
        </h2>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex justify-between items-center py-10 border-b border-neutral-800 last:border-0 cursor-default"
            >
              <motion.h3 
                className="text-4xl md:text-6xl font-black text-neutral-600 transition-colors duration-300 group-hover:text-white"
              >
                {item.name}
              </motion.h3>
              <span className="text-2xl font-bold text-neutral-700 group-hover:text-blue-500 transition-colors duration-300">
                x{item.qty}
              </span>
            </div>
          ))}
        </div>
      </div>

      <motion.div 
        className="fixed top-0 left-0 w-80 h-80 pointer-events-none z-50 rounded-full overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: "-50%", 
          translateY: "-50%",
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.5
        }}
      >
        {hoveredIndex !== null && (
          <img src={items[hoveredIndex].img} className="w-full h-full object-cover" />
        )}
      </motion.div>
    </section>
  );
}
