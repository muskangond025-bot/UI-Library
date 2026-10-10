"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function GlobalImageText9() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Glass
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Refractive Perfection</h2>
          <p className="text-sky-200/80 text-base leading-relaxed">
            Frost glass highlights, icy gradient glows, and crystal light refractions.
          </p>
          <button className="px-6 py-3 rounded-2xl bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-colors flex items-center gap-2">
            View Frost Line <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-sky-950/40 border border-sky-500/30 backdrop-blur-xl p-3 rounded-3xl h-[420px]">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Ice Frost" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}