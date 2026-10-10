"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalPromotionalCards2() {
  const cards = [
    { title: 'Autumn Atelier Offer', off: 'Save 20%', code: 'ATELIER20', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'High Jewelry Privilege', off: 'Save 15%', code: 'JEWEL15', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { title: 'Monochrome Footwear', off: 'Save 30%', code: 'KICKS30', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Privilege Index</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4">Editorial Promotional Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-stone-200 flex flex-col justify-between h-[420px] cursor-pointer group"
            >
              <div className="h-56 rounded-xl overflow-hidden relative mb-4">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 text-stone-900 text-xs font-mono font-bold px-3 py-1 rounded-full">
                  {c.off}
                </div>
              </div>
              <div className="font-sans">
                <span className="text-xs font-mono text-amber-800">CODE: {c.code}</span>
                <h3 className="font-serif text-2xl text-stone-950 mt-1 mb-4 group-hover:text-amber-800 transition-colors">{c.title}</h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600">
                  Claim Offer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}