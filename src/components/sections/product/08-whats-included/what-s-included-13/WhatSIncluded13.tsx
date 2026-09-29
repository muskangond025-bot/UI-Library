import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: 1, name: "Smartwatch", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Sport Band", img: "https://images.unsplash.com/photo-1510018572596-a4039ce4a462?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Magnetic Charger", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded13({ data }: { data: any }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="py-24 bg-neutral-900 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Everything Included</h2>
        <p className="text-neutral-400">Hover to explore the contents.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex h-[500px] gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            onHoverStart={() => setHoveredIndex(i)}
            animate={{ flex: hoveredIndex === i ? 4 : 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative rounded-3xl overflow-hidden cursor-pointer group bg-black"
          >
            <img 
              src={item.img} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hoveredIndex === i ? 'opacity-80 scale-100' : 'opacity-30 scale-125 grayscale'}`} 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
              <AnimatePresence mode="wait">
                {hoveredIndex === i ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-blue-400 font-mono text-sm uppercase tracking-widest block mb-2">Item 0{item.id}</span>
                    <h3 className="text-4xl font-black text-white leading-tight">{item.name}</h3>
                  </motion.div>
                ) : (
                  <motion.h3
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white text-xl font-bold writing-vertical-lr rotate-180 absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    {item.name}
                  </motion.h3>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
