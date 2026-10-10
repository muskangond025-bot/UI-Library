"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalTestimonials18() {
  const reviews = [
    { name: 'Deck Review 1', text: 'Stacked playing-card deck layout with horizontal slide hover.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Deck Review 2', text: 'Elevated card depth shadows and responsive stack fan-out.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Deck Review 3', text: 'Interactive slide elevation for modern product reviews.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-indigo-400">
          <Layers className="w-5 h-5" />
          <h2 className="text-3xl font-extrabold text-white">Elevated Card Deck Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-indigo-500 cursor-pointer h-[320px] flex flex-col justify-between"
            >
              <p className="text-lg font-medium text-slate-200 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover border border-indigo-500" />
                <h4 className="text-sm font-bold text-white">{r.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}