"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalPromotionalCards12() {
  const cards = [
    { code: 'VOUCHER_01', off: 'SAVE 30%', title: 'APPAREL WIREFRAME CARD', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { code: 'VOUCHER_02', off: 'SAVE 25%', title: 'COMPUTATIONAL TECH CARD', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { code: 'VOUCHER_03', off: 'SAVE 40%', title: 'INTERIOR WIREFRAME CARD', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { code: 'VOUCHER_04', off: 'SAVE 35%', title: 'TIMEPIECE WIREFRAME CARD', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">BLUEPRINT VOUCHER INDEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-slate-700 p-5 rounded hover:border-white transition-colors cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="flex justify-between text-xs text-slate-500">
                <span>[{c.code}]</span>
                <span>{c.off}</span>
              </div>
              <div className="w-full h-36 border border-slate-800 rounded overflow-hidden my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wider">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}