"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function GlobalCustomerReviews13() {
  const reviews = [
    { name: 'Clara Vance', item: 'Designer Dress', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Felix Wright', item: 'Pro Headphones', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Nora Hayes', item: 'Modern Table', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Gabriel Stone', item: 'Chronograph Watch', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 mb-3">
          <Compass className="w-4 h-4" /> Radial Review Nodes
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Orbital Customer Spotlight</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((r, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30 p-1 bg-slate-800">
                <img src={r.avatar} alt={r.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xs text-indigo-300 font-mono font-bold">5.0 ★ VERIFIED</span>
              <span className="text-sm font-bold text-slate-200">{r.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}