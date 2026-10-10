"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalPromotionalCards17() {
  const cards = [
    { title: 'Sunset Apparel Pass', off: 'SAVE 30%', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', bg: 'from-orange-500 to-rose-500' },
    { title: 'Warm Living Pass', off: 'SAVE 25%', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', bg: 'from-amber-500 to-orange-600' },
    { title: 'Golden Jewels Pass', off: 'SAVE 40%', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop', bg: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-orange-200">Organic Sunset Fluid Promo</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`rounded-[40px] p-6 bg-gradient-to-br ${c.bg} text-stone-950 cursor-pointer shadow-xl h-[380px] flex flex-col justify-between`}
            >
              <span className="text-xs font-bold uppercase tracking-wider bg-stone-950/20 px-3 py-1 rounded-full w-max text-stone-950">{c.off}</span>
              <div className="w-full h-44 rounded-[30px] overflow-hidden my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-black text-stone-950">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}