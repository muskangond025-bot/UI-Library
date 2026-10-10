"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export function GlobalTestimonials9() {
  const reviews = [
    { name: 'Dr. Frost', role: 'Cryo Designer', text: 'Sub-zero glass refractions and crystal light highlights.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Aria Snow', role: 'Nordic Lead', text: 'Crisp chilled aesthetics that make customer reviews glow.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Erik Glacier', role: 'Polar Tech', text: 'Refreshing ice glass components with effortless performance.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Deck
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Customer Feedback</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-sky-950/30 border border-sky-500/30 backdrop-blur-xl rounded-3xl p-8 shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-400 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <div className="flex gap-1 text-sky-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-sky-400" />)}
              </div>
              <p className="text-sky-100 text-lg font-medium leading-relaxed my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-sky-800/40">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-sky-400 object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-white">{r.name}</h4>
                  <p className="text-xs font-mono text-sky-400">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}