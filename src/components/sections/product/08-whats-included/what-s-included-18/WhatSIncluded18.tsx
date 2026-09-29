import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded18({ data }: { data: any }) {
  return (
    <section className="py-32 bg-black min-h-screen flex flex-col justify-center relative overflow-hidden">
      
      {/* Background Ticker */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="whitespace-nowrap text-[15vw] font-black text-white leading-none tracking-tighter"
        >
          WHAT'S IN THE BOX WHAT'S IN THE BOX WHAT'S IN THE BOX
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row gap-8 justify-center items-center">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: i * 0.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
            }}
            className="w-full md:w-1/3 aspect-[3/4] bg-neutral-900 border border-white/20 rounded-[2rem] p-4 shadow-2xl flex flex-col"
          >
            <div className="w-full flex-1 rounded-2xl overflow-hidden mb-6 relative">
               <img src={item.img} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="flex justify-between items-center px-2 pb-2">
              <h3 className="text-2xl font-bold text-white">{item.name}</h3>
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white text-xs">x1</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
