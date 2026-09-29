import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Camera", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Lens", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Adapter", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded9({ data }: { data: any }) {
  return (
    <section className="py-32 bg-white min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Massive animated background text */}
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="absolute inset-0 flex items-center whitespace-nowrap opacity-[0.03] pointer-events-none"
      >
        <span className="text-[250px] font-black uppercase text-black leading-none">
          INSIDE THE BOX INSIDE THE BOX INSIDE THE BOX
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        
        <div className="mb-24 bg-black text-white px-10 py-4 rounded-full">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Included.</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-center perspective-[1000px]">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              animate={{ 
                y: [0, -15, 0],
                rotateY: i % 2 === 0 ? [5, -5, 5] : [-5, 5, -5]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.3
              }}
              className="w-full md:w-1/3 aspect-[4/5] bg-neutral-100 rounded-[2rem] overflow-hidden relative shadow-2xl group cursor-crosshair border border-neutral-200"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-black text-white">{item.name}</h3>
                <div className="w-12 h-1 bg-white mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
