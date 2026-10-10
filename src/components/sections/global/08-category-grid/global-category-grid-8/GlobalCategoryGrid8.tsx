"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalCategoryGrid8() {
  const items = [
    { title: 'STREET FASHION', color: 'bg-rose-500 text-white', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'SMART DEVICES', color: 'bg-blue-600 text-white', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'HOME DECOR', color: 'bg-emerald-600 text-white', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'FOOTWEAR DROP', color: 'bg-orange-500 text-white', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-10 uppercase tracking-tight">Split-Tone Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-xl cursor-pointer flex flex-col h-96 group"
            >
              <div className="h-1/2 w-full overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className={`h-1/2 p-6 flex flex-col justify-between ${item.color}`}>
                <span className="text-xs font-mono opacity-80">CATEGORY 0{idx + 1}</span>
                <h3 className="text-2xl font-black uppercase leading-tight">{item.title}</h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  View Items <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}