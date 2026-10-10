"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalCategoryGrid10() {
  const photos = [
    { title: 'Vintage Denim', date: 'EST. 1994', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', rotate: '-rotate-2' },
    { title: 'Retro Audio', date: 'EST. 1988', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', rotate: 'rotate-3' },
    { title: 'Classic Kicks', date: 'EST. 1992', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', rotate: '-rotate-3' },
    { title: 'Analog Home', date: 'EST. 1996', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', rotate: 'rotate-2' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold tracking-tight">Retro Polaroid Archive</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={`bg-white p-4 pb-6 shadow-xl border border-stone-300 rounded-sm cursor-pointer transition-all duration-300 ${item.rotate}`}
            >
              <div className="w-full h-56 bg-stone-100 overflow-hidden mb-4 border border-stone-200">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center font-sans">
                <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                <span className="text-xs font-mono text-amber-700 font-bold">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}