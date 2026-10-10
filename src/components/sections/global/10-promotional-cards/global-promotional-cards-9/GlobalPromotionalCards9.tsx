"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function GlobalPromotionalCards9() {
  const cards = [
    { title: 'Arctic Gear Pass', off: 'SAVE $45', code: 'ICE45', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop' },
    { title: 'Frosted Tech Pass', off: 'SAVE $60', code: 'FROST60', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Sub-Zero Jewels Pass', off: 'SAVE $80', code: 'COLD80', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Deck
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Discount Vouchers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-sky-950/30 border border-sky-500/30 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-400 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-sky-400 font-bold">{c.off}</span>
                <ArrowUpRight className="w-5 h-5 text-sky-400" />
              </div>
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-sky-500/20 my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-sky-300">CODE: {c.code}</span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}