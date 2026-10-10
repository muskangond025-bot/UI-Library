"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function GlobalTestimonials2() {
  const reviews = [
    { name: 'Victoria Sterling', role: 'Vogue Curator', text: 'Sublime typography and exquisite layout balance.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Antoine Laurent', role: 'Art Director', text: 'Pure luxury aesthetic engineered for modern digital touchpoints.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Camilla Rossi', role: 'Fashion Editor', text: 'An indispensable design collection for high-end digital showcases.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Editorial Reviews</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4">Client Endorsements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-stone-200 flex flex-col justify-between h-[360px] cursor-pointer group"
            >
              <Quote className="w-8 h-8 text-amber-800 opacity-40" />
              <p className="font-serif text-xl text-stone-900 leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center gap-4 font-sans pt-4 border-t border-stone-100">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-base font-bold text-stone-950 group-hover:text-amber-800 transition-colors">{r.name}</h4>
                  <p className="text-xs font-mono text-stone-500">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}