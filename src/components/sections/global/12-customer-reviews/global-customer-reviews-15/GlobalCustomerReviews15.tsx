"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalCustomerReviews15() {
  const reviews = [
    { name: 'Gem Buyer 01', item: 'Diamond Pendant', text: 'Prismatic light reflection highlights.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Gem Buyer 02', item: 'Sapphire Ring', text: 'High-clarity ratings with rainbow sheen.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Gem Buyer 03', item: 'Emerald Earring', text: 'Stunning geometric diamond cut balance.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Gem Buyer 04', item: 'Ruby Necklace', text: 'Exclusive facet geometry for luxury items.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12">Diamond Prism Review Facets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 cursor-pointer h-[320px] flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-cyan-400 font-bold">5.0 ★ PRISM</span>
              <p className="text-sm text-cyan-100 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full object-cover border border-cyan-400" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white">{r.name}</h4>
                  <p className="text-[10px] text-slate-400">{r.item}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}