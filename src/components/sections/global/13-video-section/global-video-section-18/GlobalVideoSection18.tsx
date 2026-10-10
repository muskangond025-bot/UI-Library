"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Play } from 'lucide-react';

export function GlobalVideoSection18() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-indigo-400">
          <Layers className="w-5 h-5" />
          <h2 className="text-3xl font-extrabold text-white">Elevated Card Deck Cinema Player</h2>
        </div>

        <motion.div
          whileHover={{ y: -10 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl cursor-pointer max-w-4xl mx-auto h-[440px] relative"
        >
          <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop" alt="Elevated Video" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xl">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}