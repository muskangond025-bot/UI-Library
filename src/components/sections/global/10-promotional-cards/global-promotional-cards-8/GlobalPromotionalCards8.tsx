"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalPromotionalCards8() {
  const cards = [
    { title: 'STREET DROP PROMO', off: 'FLAT 40% OFF', code: 'STREET40', color: 'bg-rose-500 text-white', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'SMART TECH FLASH', off: 'FLAT 30% OFF', code: 'SMART30', color: 'bg-blue-600 text-white', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'HOME DECOR DEAL', off: 'FLAT 25% OFF', code: 'DECOR25', color: 'bg-emerald-600 text-white', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'KICKS FLASH SALE', off: 'FLAT 35% OFF', code: 'KICKS35', color: 'bg-orange-500 text-white', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-10 uppercase">Split-Tone Flash Cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-xl cursor-pointer flex flex-col h-[380px] group">
              <div className="h-1/2 w-full overflow-hidden relative">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className={`h-1/2 p-6 flex flex-col justify-between ${c.color}`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>{c.off}</span>
                  <span>{c.code}</span>
                </div>
                <h3 className="text-xl font-black uppercase leading-tight">{c.title}</h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  Redeem Code <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}