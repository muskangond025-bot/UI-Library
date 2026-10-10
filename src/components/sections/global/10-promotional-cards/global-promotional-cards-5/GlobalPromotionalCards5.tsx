"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export function GlobalPromotionalCards5() {
  const cards = [
    { title: 'NEON KICKS', off: '40% DISCOUNT', code: 'NEON40', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', glow: 'from-pink-500 to-purple-500' },
    { title: 'CYBER WEAR', off: '25% DISCOUNT', code: 'CYBER25', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', glow: 'from-cyan-400 to-blue-600' },
    { title: 'VR GEAR', off: '30% DISCOUNT', code: 'VR30', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop', glow: 'from-emerald-400 to-teal-600' },
    { title: 'SMART SOUND', off: '35% DISCOUNT', code: 'SOUND35', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', glow: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Holographic Cyber Passes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden p-[2px] cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-r ${c.glow} opacity-60 blur-sm` } />
              <div className="relative z-10 bg-zinc-950 rounded-2xl p-5 h-[340px] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/20 text-white font-bold">{c.off}</span>
                  <Eye className="w-4 h-4 text-pink-400" />
                </div>
                <div className="w-full h-36 rounded-xl overflow-hidden border border-white/10 my-3">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-mono text-pink-400">KEY: {c.code}</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{c.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}