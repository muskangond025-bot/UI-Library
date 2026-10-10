"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalTestimonials10() {
  const reviews = [
    { name: 'Betty Sue', role: 'Vintage Collector', text: 'Feels like authentic polaroids! Unmatched retro charm.', rotate: '-rotate-2', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Johnny Cash Jr.', role: 'Retro Stylist', text: 'Classic tape stickers and handwritten archive notes.', rotate: 'rotate-3', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Daisy Miller', role: 'Analog Curator', text: 'Loved by nostalgic design enthusiasts worldwide.', rotate: '-rotate-3', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Sammy Davis', role: '80s Vinyl Host', text: 'Instant vintage flair for any modern storefront.', rotate: 'rotate-2', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold">Retro Polaroid Review Archive</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={`bg-white p-5 pb-6 shadow-xl border border-stone-300 rounded-sm cursor-pointer transition-all ${r.rotate}`}
            >
              <div className="w-full h-36 bg-stone-100 overflow-hidden mb-3 border border-stone-200">
                <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-serif text-sm italic text-stone-800 my-2">"{r.text}"</p>
              <div className="font-sans pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold text-stone-900">{r.name}</h4>
                <p className="text-[10px] font-mono text-amber-800">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}