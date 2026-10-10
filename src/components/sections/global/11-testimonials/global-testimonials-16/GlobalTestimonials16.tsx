"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalTestimonials16() {
  const reviews = [
    { code: 'LOG_01', name: 'NEO_SMITH', text: 'Verified buyer telemetry logged cleanly in matrix stream.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { code: 'LOG_02', name: 'TRINITY_SYS', text: 'Green code scanline sweep with real-time status pulses.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { code: 'LOG_03', name: 'MORPHEUS_NET', text: '100% verified buyer trust rating confirmed.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase">Matrix Buyer Logs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="border border-emerald-800 bg-emerald-950/20 p-6 rounded hover:border-emerald-400 cursor-pointer flex flex-col justify-between h-[300px]"
            >
              <div className="flex justify-between text-xs text-emerald-600">
                <span>[{r.code}]</span>
                <span>VERIFIED</span>
              </div>
              <p className="text-sm text-emerald-300 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-emerald-900">
                <img src={r.avatar} alt={r.name} className="w-8 h-8 rounded border border-emerald-600 object-cover" />
                <h4 className="text-xs font-bold text-emerald-400">{r.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}