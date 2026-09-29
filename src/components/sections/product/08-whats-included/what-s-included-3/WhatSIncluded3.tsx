import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device Pro", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Braided Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Power Adapter", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Documentation", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded3({ data }: { data: any }) {
  const trackItems = [...items, ...items, ...items]; 

  return (
    <section className="py-32 bg-neutral-100 overflow-hidden flex flex-col justify-center min-h-screen">
      <div className="px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight">Included in the box.</h2>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-100 to-transparent z-10" />

        <motion.div 
          className="flex gap-8 w-max px-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {trackItems.map((item, i) => (
            <div 
              key={i} 
              className="w-[350px] h-[400px] bg-white rounded-[3rem] border border-neutral-200 shadow-xl flex flex-col items-center p-8 text-center flex-shrink-0 group hover:scale-105 transition-transform duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="w-full h-48 rounded-2xl mb-8 overflow-hidden relative shadow-inner">
                 <img src={item.img} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-black text-black mt-auto">{item.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
