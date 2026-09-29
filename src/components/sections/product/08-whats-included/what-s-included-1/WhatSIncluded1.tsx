import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device Pro", qty: 1, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Braided USB-C Cable", qty: 1, img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "20W Power Adapter", qty: 1, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Documentation", qty: 1, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded1({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-black tracking-tight"
          >
            What's in the box.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring", bounce: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-neutral-50 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:!opacity-100 group-hover:opacity-40 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-neutral-200 overflow-hidden"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center mb-6 overflow-hidden relative"
              >
                <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-1">{item.name}</h3>
              <p className="text-sm font-bold text-neutral-400 tracking-widest uppercase">Qty: {item.qty}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
