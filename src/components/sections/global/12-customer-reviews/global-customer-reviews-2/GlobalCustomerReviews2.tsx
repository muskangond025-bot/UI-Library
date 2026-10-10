"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function GlobalCustomerReviews2() {
  const reviews = [
    { name: 'Charlotte Dubois', item: 'Atelier Velvet Trench', rating: 5, text: 'An exquisite piece of tailoring that turns heads everywhere.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Harrison Blake', item: 'Heritage Leather Boots', rating: 5, text: 'Supremely crafted leather with timeless durability.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Eleanor Vance', item: 'Diamond Solitaire Ring', rating: 5, text: 'Remarkable brilliance and impeccable luxury packaging.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Customer Evaluation</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4">Verified Buyer Ratings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-stone-200 flex flex-col justify-between h-[360px] cursor-pointer group"
            >
              <div className="flex gap-1 text-amber-600">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-600" />)}
              </div>
              <p className="font-serif text-xl text-stone-900 leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center gap-4 font-sans pt-4 border-t border-stone-100">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-base font-bold text-stone-950 group-hover:text-amber-800 transition-colors">{r.name}</h4>
                  <p className="text-xs font-mono text-stone-500">{r.item}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}