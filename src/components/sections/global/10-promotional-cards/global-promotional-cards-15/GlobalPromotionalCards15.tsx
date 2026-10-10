"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalPromotionalCards15() {
  const cards = [
    { title: 'Jewelry Prism Pass', off: '30% OFF', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { title: 'Prism Fashion Pass', off: '25% OFF', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'Crystal Living Pass', off: '40% OFF', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Diamond Tech Pass', off: '35% OFF', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12">Diamond Prism Promo Facets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <div className="flex justify-between text-xs font-mono text-cyan-400 font-bold">
                <span>{c.off}</span>
                <span>PRISM</span>
              </div>
              <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 my-2">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}