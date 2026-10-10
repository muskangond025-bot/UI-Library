"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

export function GlobalCustomerReviews7() {
  const reviews = [
    { name: 'Duchess Isabella', item: 'Royal Velvet Coat', text: 'Embossed gold accents and rich velvet texture. A masterwork of tailoring.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Sir Arthur Pendelton', item: 'Swiss Gold Chrono', text: 'Unrivaled precision movement wrapped in 18k gold casing.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Countess Eleanor', item: 'Emerald Brooch', text: 'Deep green emerald brilliance that commands admiration.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase mb-3">
            <Award className="w-4 h-4" /> Privilege Ratings
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Embossed Gold Buyer Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-2xl p-8 shadow-2xl hover:border-amber-500 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
              </div>
              <p className="font-serif text-lg text-amber-100 italic">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-amber-800/30 font-sans">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-amber-500 object-cover" />
                <div>
                  <h4 className="text-sm font-serif text-amber-200">{r.name}</h4>
                  <p className="text-xs font-mono text-amber-500">{r.item}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}