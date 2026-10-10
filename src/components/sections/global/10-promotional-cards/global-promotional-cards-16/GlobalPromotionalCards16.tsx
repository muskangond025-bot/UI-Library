"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalPromotionalCards16() {
  const cards = [
    { code: 'SYS_KEY_01', off: '50% DECRYPTED', title: 'HARDWARE_PROMO_CARD', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { code: 'SYS_KEY_02', off: '35% DECRYPTED', title: 'WEARABLE_PROMO_CARD', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { code: 'SYS_KEY_03', off: '40% DECRYPTED', title: 'FOOTWEAR_PROMO_CARD', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase">Matrix Decrypted Promos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="border border-emerald-800 bg-emerald-950/20 p-5 rounded hover:border-emerald-400 cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="flex justify-between text-xs text-emerald-600">
                <span>{c.code}</span>
                <span>[{c.off}]</span>
              </div>
              <div className="w-full h-36 border border-emerald-900 rounded overflow-hidden my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-60 hover:opacity-100" />
              </div>
              <h3 className="text-lg font-bold text-emerald-300">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}