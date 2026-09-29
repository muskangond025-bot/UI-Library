import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", col: "md:col-span-2", row: "md:row-span-2", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", col: "md:col-span-1", row: "md:row-span-1", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Adapter", col: "md:col-span-1", row: "md:row-span-1", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", col: "md:col-span-2", row: "md:row-span-1", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
];

export default function WhatSIncluded7({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="py-32 bg-[#030303] min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-20 tracking-tight">The complete package.</h2>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-[800px] relative group"
        >
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${item.col} ${item.row} bg-neutral-900 rounded-[2.5rem] border border-white/10 relative overflow-hidden group/card`}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-30"
                animate={{
                  background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent 40%)`
                }}
              />
              
              <div className="absolute inset-0 z-10 flex flex-col p-8 justify-end">
                <h3 className="text-3xl font-black text-white mix-blend-difference">{item.name}</h3>
              </div>
              
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:opacity-90 group-hover/card:scale-105 transition-all duration-700 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
