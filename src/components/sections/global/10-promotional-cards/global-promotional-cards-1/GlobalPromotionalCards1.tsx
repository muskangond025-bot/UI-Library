"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Tag, Zap } from 'lucide-react';

export function GlobalPromotionalCards1() {
  const cards = [
    { title: 'Cyber Flash Sale', off: '30% OFF', code: 'CYBER30', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', bg: 'col-span-1 md:col-span-2 row-span-2' },
    { title: 'Velvet Apparel', off: '20% OFF', code: 'LUX20', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', bg: 'col-span-1 row-span-1' },
    { title: 'Smart Living', off: '25% OFF', code: 'HOME25', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', bg: 'col-span-1 row-span-1' },
    { title: 'Exclusive Kicks', off: '40% OFF', code: 'DROP40', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', bg: 'col-span-1 md:col-span-2 row-span-1' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC PROMO BENTO
            </div>
            <h2 className="text-4xl font-extrabold text-white">Curated Promotional Offers</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 ${c.bg}`}
            >
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="relative z-10 flex justify-between items-center">
                <span className="px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-extrabold rounded-full">{c.off}</span>
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">USE CODE: {c.code}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}