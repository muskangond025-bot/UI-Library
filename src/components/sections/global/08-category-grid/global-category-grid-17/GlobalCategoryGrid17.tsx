"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalCategoryGrid17() {
  const items = [
    { title: 'Sunset Apparel', count: '1.2k Items', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', bg: 'from-orange-500 to-rose-500' },
    { title: 'Warm Living', count: '840 Items', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', bg: 'from-amber-500 to-orange-600' },
    { title: 'Golden Jewels', count: '310 Items', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop', bg: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-orange-200">Organic Sunset Waves</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`rounded-[40px] p-6 bg-gradient-to-br ${item.bg} text-stone-950 cursor-pointer shadow-xl h-96 flex flex-col justify-between` }
            >
              <div className="w-full h-48 rounded-[30px] overflow-hidden shadow-md">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900/70">{item.count}</span>
                <h3 className="text-2xl font-black text-stone-950 mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}