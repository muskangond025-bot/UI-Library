"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalCustomerReviews8() {
  const reviews = [
    { name: 'URBAN_BUYER', item: 'HOODIE DROP', text: 'Fit is perfect, ultra heavy fabric feel!', color: 'bg-rose-500 text-white', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'TECH_GURU', item: 'ANC PHONES', text: 'Noise cancellation is truly top class.', color: 'bg-blue-600 text-white', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'ECO_LIVING', item: 'BAMBOO DESK', text: 'Smooth bamboo surface with zero wobbles.', color: 'bg-emerald-600 text-white', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'SNEAKER_HEAD', item: 'RUNNER 90', text: 'Comfort is unmatched for long daily walks.', color: 'bg-orange-500 text-white', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-10 uppercase">Split-Tone Buyer Cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-xl cursor-pointer flex flex-col h-[340px]">
              <div className={`h-full p-6 flex flex-col justify-between ${r.color}`}>
                <span className="text-xs font-mono opacity-80 uppercase">5.0 ★ RATED</span>
                <p className="text-lg font-black leading-snug my-2">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/20">
                  <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full object-cover border border-white" />
                  <div>
                    <h4 className="text-sm font-bold">{r.name}</h4>
                    <p className="text-xs opacity-80">{r.item}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}