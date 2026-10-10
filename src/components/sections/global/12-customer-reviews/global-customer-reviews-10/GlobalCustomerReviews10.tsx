"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalCustomerReviews10() {
  const reviews = [
    { name: 'Peggy Sue', item: '50s Leather Jacket', text: 'Looks just like an authentic vintage photo! Super happy.', rotate: '-rotate-2', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Tommy Ford', item: 'Retro Cassette Player', text: 'Warm analog sound feel. Works like a charm.', rotate: 'rotate-3', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Nancy Drew', item: 'Polaroid Camera Case', text: 'Sturdy leather build with tape sticker accents.', rotate: '-rotate-3', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Buddy Holly', item: 'Vintage Glasses', text: 'Iconic retro frames! Gets compliments daily.', rotate: 'rotate-2', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold">Retro Polaroid Buyer Photo Reviews</h2>
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
                <p className="text-[10px] font-mono text-amber-800">{r.item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}