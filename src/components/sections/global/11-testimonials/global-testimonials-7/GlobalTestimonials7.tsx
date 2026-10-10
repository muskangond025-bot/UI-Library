"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote } from 'lucide-react';

export function GlobalTestimonials7() {
  const reviews = [
    { name: 'Lord Harrington', role: 'Private Collector', text: 'Uncompromising luxury, embossed gold seals, and velvet elegance.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Lady Genevieve', role: 'Atelier Director', text: 'Craftsmanship worthy of royal heritage and prestige standards.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Baron Von Steiner', role: 'Horology Master', text: 'Refined distinction and impeccable design execution.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase mb-3">
            <Award className="w-4 h-4" /> Royal Endorsements
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Velvet & Gold Privilege Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-2xl p-8 shadow-2xl hover:border-amber-500 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-amber-600" />
              <p className="font-serif text-lg text-amber-100 italic">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-amber-800/30 font-sans">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-amber-500 object-cover" />
                <div>
                  <h4 className="text-sm font-serif text-amber-200">{r.name}</h4>
                  <p className="text-xs font-mono text-amber-500">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}