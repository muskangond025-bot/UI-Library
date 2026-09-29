import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Adapter", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded20({ data }: { data: any }) {
  const [trail, setTrail] = useState<{ id: number, x: number, y: number, item: any }[]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Throttle via random chance to avoid too many DOM nodes
    if (Math.random() > 0.15) return; 
    
    // Get bounding box to calculate relative cursor position within the section
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newItem = {
      id: Date.now() + Math.random(),
      x,
      y,
      item: items[Math.floor(Math.random() * items.length)]
    };

    setTrail(prev => [...prev.slice(-4), newItem]); // keep last 5 max
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="bg-black min-h-screen relative overflow-hidden flex flex-col justify-center px-12 group cursor-crosshair"
    >
      <div className="relative z-20 pointer-events-none w-full max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-9xl font-black text-white/90 leading-none mix-blend-difference">
          Included<br/>In Box.
        </h2>
        <p className="text-neutral-400 text-xl mt-6">Move your cursor around quickly to reveal.</p>
      </div>

      {/* Must be relative to parent container, not fixed to screen, for accurate pointer tracking */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <AnimatePresence>
          {trail.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 30 - 15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/20 origin-center"
              style={{ 
                left: t.x, 
                top: t.y,
                // Using x and y inside style to offset instead of transform which gets overwritten
                x: "-50%",
                y: "-50%"
              }}
            >
              <img src={t.item.img} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">{t.item.name}</h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
