import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Charger", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Doc", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded19({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#ebebeb] min-h-screen flex flex-col items-center justify-center perspective-[2000px]">
      <div className="max-w-6xl mx-auto px-6 w-full text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tight">Unfold the Magic.</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-center">
        {items.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ rotateY: isEven ? 80 : -80, opacity: 0, scale: 0.8 }}
              whileInView={{ rotateY: 0, opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ transformOrigin: isEven ? "left" : "right" }}
              className="w-64 h-80 bg-white shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0">
                <img src={item.img} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                {/* Paper fold shadow overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? 'from-black/10 to-transparent' : 'from-transparent to-black/10'}`} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
