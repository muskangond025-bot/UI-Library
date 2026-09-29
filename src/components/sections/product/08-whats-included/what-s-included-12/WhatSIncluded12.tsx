import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Camera Body", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" },
  { name: "50mm Lens", img: "https://images.unsplash.com/photo-1617005082833-1e1140528d94?q=80&w=800&auto=format&fit=crop" },
  { name: "Battery Pack", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Strap", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded12({ data }: { data: any }) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <section className="py-24 bg-white min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="px-6 mb-16 max-w-7xl mx-auto w-full">
        <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none">Unpack<br/>Greatness.</h2>
      </div>

      <div className="relative w-full py-10 bg-black rotate-[-2deg] scale-105 shadow-2xl overflow-hidden">
        <motion.div 
          className="flex gap-12 w-max items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {repeatedItems.map((item, i) => (
            <div key={i} className="flex items-center gap-6 flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 relative">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <span className="text-6xl md:text-7xl font-black text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                {item.name}
              </span>
              <span className="text-4xl text-white ml-6">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
