"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalCategoryGrid6() {
  const [active, setActive] = useState(0);

  const categories = [
    { title: 'Editorial Apparel', count: '1,200+ Products', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', desc: 'High fashion curations for modern aesthetics.' },
    { title: 'Tech Electronics', count: '850+ Products', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', desc: 'Next-gen devices and smart accessories.' },
    { title: 'Luxury Timepieces', count: '340+ Products', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop', desc: 'Handcrafted Swiss movement masterpieces.' },
    { title: 'Athletic Footwear', count: '920+ Products', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', desc: 'Performance footwear for active lifestyles.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Interactive Accordion</span>
          <h2 className="text-4xl font-extrabold text-white mt-1">Expand Category Deck</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-[500px]">
          {categories.map((cat, idx) => {
            const isSelected = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between transition-all duration-500 ${
                  isSelected ? 'lg:flex-[3] bg-indigo-950' : 'lg:flex-[1] bg-slate-800 hover:bg-slate-700'
                }`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-xs font-mono px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white font-bold">
                    0{idx + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                  {isSelected && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-slate-300 mt-2 max-w-md">
                      {cat.desc} — <span className="text-indigo-400 font-semibold">{cat.count}</span>
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}