"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export function GlobalCustomerReviews20() {
  const reviews = [
    { name: 'Master Buyer 1', text: 'Omnichannel review suite integration with breakdown progress bars & verified buyer badges.', rating: '5.0 ★', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop', badge: 'FLAGSHIP' },
    { name: 'Master Buyer 2', text: 'The absolute best customer rating section for high-conversion web platforms.', rating: '4.9 ★', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', badge: 'TOP RATED' },
    { name: 'Master Buyer 3', text: 'Flawless responsive grid and fluid Framer Motion entrance cascade.', rating: '4.8 ★', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', badge: 'VERIFIED' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Customer Review Suite
            </div>
            <h2 className="text-4xl font-black text-white">Omnichannel Master Customer Reviews</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-cyan-500 cursor-pointer h-[360px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full border border-cyan-800">{r.badge}</span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400" /> {r.rating}</span>
              </div>
              <p className="text-lg font-medium text-slate-200 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover border border-cyan-400" />
                <h4 className="text-sm font-bold text-white">{r.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}