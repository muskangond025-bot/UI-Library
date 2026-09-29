import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "VR Headset", qty: 1, img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop" },
  { name: "Controllers", qty: 2, img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800&auto=format&fit=crop" },
  { name: "Charging Dock", qty: 1, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Link Cable", qty: 1, img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded11({ data }: { data: any }) {
  return (
    <section className="py-24 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-30">
        <div className="w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-tight"
          >
            In The Box.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="relative p-[2px] rounded-3xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="bg-neutral-900 rounded-[23px] h-full p-6 flex flex-col items-center justify-center relative z-10">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                  <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                <span className="text-purple-400 font-mono tracking-widest uppercase text-sm">Qty: {item.qty}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
