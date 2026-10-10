"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function GlobalPromotionalCards13() {
  const cards = [
    { title: 'Fashion Pass', off: '30% OFF', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'Tech Pass', off: '25% OFF', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Living Pass', off: '40% OFF', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Jewelry Pass', off: '35% OFF', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 mb-3">
          <Compass className="w-4 h-4" /> Orbital Promo Ring
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Radial Promotional Nodes</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((c, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30 p-1 bg-slate-800">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xs font-mono text-indigo-400 font-bold">{c.off}</span>
              <span className="text-sm font-bold text-slate-200">{c.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}