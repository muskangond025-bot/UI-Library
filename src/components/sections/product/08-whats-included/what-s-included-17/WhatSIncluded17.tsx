import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", span: "col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", span: "col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "Adapter", span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded17({ data }: { data: any }) {
  return (
    <section className="py-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-neutral-950">
      {/* Mesh Gradient BG */}
      <div className="absolute inset-0 opacity-50 blur-3xl">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-16 drop-shadow-lg">Inside.</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`${item.span} relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-end p-6 group hover:bg-white/20 transition-all duration-300`}
            >
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <h3 className="text-2xl md:text-3xl font-black text-white relative z-10 drop-shadow-md">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
