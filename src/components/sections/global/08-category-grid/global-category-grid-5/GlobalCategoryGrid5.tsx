"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye } from 'lucide-react';

export function GlobalCategoryGrid5() {
  const items = [
    { title: 'Cyber Wear', count: '1.2K', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', glow: 'from-pink-500 to-purple-500' },
    { title: 'Neural Tech', count: '850', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', glow: 'from-cyan-400 to-blue-600' },
    { title: 'VR Hardware', count: '430', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop', glow: 'from-emerald-400 to-teal-600' },
    { title: 'Neon Kicks', count: '980', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', glow: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-pink-500 font-mono font-bold">Holographic Neon Mesh</span>
            <h2 className="text-4xl font-extrabold text-white mt-1">Future Categories</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden p-[2px] cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.glow} opacity-60 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500` } />
              <div className="relative z-10 bg-zinc-950 rounded-2xl p-5 h-80 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="relative z-20 flex justify-between items-center">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/20 text-white">
                    {item.count} PRODUCTS
                  </span>
                  <Eye className="w-5 h-5 text-white/80 group-hover:text-pink-400 transition-colors" />
                </div>
                <div className="relative z-20">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}