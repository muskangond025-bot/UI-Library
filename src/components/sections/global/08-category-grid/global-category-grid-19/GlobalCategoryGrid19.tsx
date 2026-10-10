"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalCategoryGrid19() {
  const items = [
    { title: 'Neumorphic Tech', items: '420 Items', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Neumorphic Home', items: '210 Items', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Neumorphic Kicks', items: '580 Items', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
    { title: 'Neumorphic Style', items: '890 Items', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-10">Neumorphic Soft Inset Deck</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.97 }}
              className="bg-slate-200 p-6 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] cursor-pointer flex flex-col justify-between h-80"
            >
              <div className="w-full h-36 rounded-2xl overflow-hidden shadow-inner border border-slate-300">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500">{item.items}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}