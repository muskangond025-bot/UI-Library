"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star } from 'lucide-react';

export function GlobalCustomerReviews3() {
  const reviews = [
    { name: 'REVIEWS_MAX', item: 'CYBER RIG 9000', text: '10/10 performance! Ultra-fast delivery & sick packaging.', bg: 'bg-lime-400', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'PIXEL_QUEEN', item: 'NEON KICKS V2', text: 'Super comfy sneakers with insanely bold color pop!', bg: 'bg-cyan-400', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'BEAT_MASTER', item: 'STUDIO PHONES', text: 'Bass is heavy, construction is unbreakable.', bg: 'bg-fuchsia-400', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
    { name: 'URBAN_STRIKE', item: 'JACKET 2026', text: 'Maximum drip factor. Worth every single penny.', bg: 'bg-yellow-400', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12 border-b-4 border-black pb-6">
          <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
            <Zap className="w-5 h-5 fill-lime-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">BUYER REVIEWS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className={`border-4 border-black ${r.bg} p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between h-[340px]`}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
              </div>
              <p className="text-base font-black text-black leading-tight my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t-2 border-black">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                <div>
                  <h4 className="text-sm font-black uppercase text-black">{r.name}</h4>
                  <p className="text-xs font-black text-black/70">{r.item}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}