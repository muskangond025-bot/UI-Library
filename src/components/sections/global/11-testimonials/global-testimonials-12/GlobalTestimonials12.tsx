"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalTestimonials12() {
  const reviews = [
    { code: 'REV_SPEC_01', name: 'VECTOR_SYS', role: 'ARCHITECT', text: 'Precision hairline boundaries and technical rating metrics.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { code: 'REV_SPEC_02', name: 'LINE_ART_DEV', role: 'LEAD_ENG', text: 'Ultra-clean blueprint telemetry with zero bloat.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { code: 'REV_SPEC_03', name: 'CAD_DESIGN', role: 'UI_SPEC', text: 'Hairline grid perfection for minimalist lovers.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { code: 'REV_SPEC_04', name: 'BLUEPRINT_CO', role: 'CTO', text: 'Super clear specifications and verified buyer tags.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">BLUEPRINT REVIEWS INDEX</span>
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
                  <p className="text-[10px] text-slate-500">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}