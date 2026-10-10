"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalCustomerReviews12() {
  const reviews = [
    { code: 'BUYER_LOG_01', name: 'SPEC_BUYER_01', item: 'UNIT_APPAREL', text: 'Precision hairline outlines and rating telemetry.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { code: 'BUYER_LOG_02', name: 'SPEC_BUYER_02', item: 'UNIT_COMPUTATIONAL', text: 'Ultra-clean blueprint layout with zero noise.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { code: 'BUYER_LOG_03', name: 'SPEC_BUYER_03', item: 'UNIT_INTERIOR', text: 'Hairline grid perfection for minimalist specs.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { code: 'BUYER_LOG_04', name: 'SPEC_BUYER_04', item: 'UNIT_TIMEPIECE', text: 'Verified buyer telemetry logged cleanly.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">BLUEPRINT BUYER INDEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-slate-700 p-6 rounded hover:border-white transition-colors cursor-pointer flex flex-col justify-between h-[320px]"
            >
              <div className="flex justify-between text-xs text-slate-500">
                <span>[{r.code}]</span>
                <span>5.0 ★</span>
              </div>
              <p className="text-xs text-slate-300 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <img src={r.avatar} alt={r.name} className="w-8 h-8 rounded border border-slate-600 object-cover" />
                <div>
                  <h4 className="text-xs font-bold text-white">{r.name}</h4>
                  <p className="text-[10px] text-slate-500">{r.item}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}