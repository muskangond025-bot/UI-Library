"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function GlobalPromotionalCards7() {
  const cards = [
    { title: 'Gold Velvet Privilege', off: '$150 VOUCHER', code: 'GOLD150', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { title: 'Royal Horology Pass', off: '$200 VOUCHER', code: 'ROYAL200', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Velvet Apparel Card', off: '$100 VOUCHER', code: 'VELVET100', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase mb-3">
            <Award className="w-4 h-4" /> Royal Privilege Cards
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Embossed Gold Vouchers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-2xl p-6 shadow-2xl hover:border-amber-500 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-amber-400 font-bold">{c.off}</span>
                <span className="text-xs text-amber-600 font-mono">NO. 0{idx + 1}</span>
              </div>
              <div className="w-full h-40 rounded-xl overflow-hidden border border-amber-700/30 my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-500">KEY: {c.code}</span>
                <h3 className="text-2xl font-serif text-amber-100 mt-0.5">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}