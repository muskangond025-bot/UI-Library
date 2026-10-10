"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalTestimonials17() {
  const reviews = [
    { name: 'Amber Sol', text: 'Warm sunset pebble shapes and smooth liquid waves.', bg: 'from-orange-500 to-rose-500', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Dawn Rivers', text: 'Asymmetric organic blurs that create joyful reading.', bg: 'from-amber-500 to-orange-600', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Golden Hour Co.', text: 'Liquid ripple gradients that soothe the customer experience.', bg: 'from-yellow-400 to-amber-600', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-orange-200">Organic Sunset Fluid Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`rounded-[40px] p-8 bg-gradient-to-br ${r.bg} text-stone-950 cursor-pointer shadow-xl h-[340px] flex flex-col justify-between`}
            >
              <p className="text-lg font-black leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-stone-950/20">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-stone-950 object-cover" />
                <h4 className="text-sm font-black text-stone-950">{r.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}