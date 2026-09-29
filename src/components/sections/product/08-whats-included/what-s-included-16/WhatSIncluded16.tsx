import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { name: "Camera", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" },
  { name: "Lens", img: "https://images.unsplash.com/photo-1617005082833-1e1140528d94?q=80&w=800&auto=format&fit=crop" },
  { name: "Battery", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Strap", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "SD Card", img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded16({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-black text-black mb-32">Inside the Box</h2>

      <div className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center">
        {/* Center Display */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -mt-32 -ml-32 w-64 h-64 rounded-full overflow-hidden shadow-2xl z-20 border-4 border-white"
          >
            <img src={items[activeIndex].img} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-black text-2xl drop-shadow-md text-center px-4">{items[activeIndex].name}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Orbiting Dots */}
        {items.map((item, i) => {
          const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 200; // Fixed radius for calculation
          const targetX = Math.cos(angle) * radius;
          const targetY = Math.sin(angle) * radius;

          return (
            <motion.button
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              whileInView={{ opacity: 1, x: targetX, y: targetY, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className={`absolute top-1/2 left-1/2 -mt-8 -ml-8 w-16 h-16 rounded-full border-2 overflow-hidden shadow-xl transition-all duration-300 ${activeIndex === i ? 'scale-125 border-black z-30 ring-4 ring-black/20' : 'border-neutral-200 hover:scale-110 z-10'}`}
            >
              <img src={item.img} className="w-full h-full object-cover" />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
