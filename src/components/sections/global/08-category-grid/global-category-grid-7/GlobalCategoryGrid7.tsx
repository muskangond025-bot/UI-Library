"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronRight } from 'lucide-react';

export function GlobalCategoryGrid7() {
  const items = [
    { title: 'Royal Jewelry', desc: 'Hand-cut diamond accents', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop', tag: 'EXCLUSIVE' },
    { title: 'Vintage Horology', desc: 'Craftsmanship heritage', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', tag: 'RARE' },
    { title: 'Velvet Couture', desc: 'Bespoke tailoring', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', tag: 'LIMITED' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Award className="w-4 h-4" /> Royal Reserve
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Prestige Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-2xl p-6 shadow-2xl hover:border-amber-500 transition-colors cursor-pointer flex flex-col justify-between h-96"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-amber-400 tracking-widest">{item.tag}</span>
                <span className="text-xs text-amber-600 font-mono">0{idx + 1}</span>
              </div>
              <div className="w-full h-44 rounded-xl overflow-hidden border border-amber-700/30 my-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-amber-100">{item.title}</h3>
                <p className="text-xs text-zinc-400 font-sans mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}