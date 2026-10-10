"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

export function GlobalCustomerReviews6() {
  const [active, setActive] = useState(0);
  const reviews = [
    { name: 'Sophia Martinez', item: 'Luxury Silk Scarf', text: 'The horizontal flex accordion layout reveals full reviewer photos & details smoothly. Amazing quality!', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Lucas Sterling', item: 'Smart Desk Lamp', text: 'Touch controls are responsive, warm light temperature settings are perfect for night work.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Elena Rostova', item: 'Precision Watch', text: 'Swiss movement with sapphire crystal glass finish. Truly exceptional value.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Expandable Customer Reviews</h2>

        <div className="flex flex-col lg:flex-row gap-4 h-[400px]">
          {reviews.map((r, idx) => {
            const isSel = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                className={`relative rounded-3xl overflow-hidden cursor-pointer p-8 flex flex-col justify-between transition-all duration-500 ${isSel ? 'lg:flex-[3] bg-indigo-950 border-2 border-indigo-500' : 'lg:flex-[1] bg-slate-800'}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-lg font-medium text-slate-200">"{r.text}"</p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-indigo-800/40">
                    <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{r.name}</h4>
                      <p className="text-xs text-indigo-400">{r.item}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}