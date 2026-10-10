"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function GlobalImageText20() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" /> FLAGSHIP FEATURE SUITE
          </div>
          <h2 className="text-4xl font-black text-white">Omnichannel Master Feature Suite</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Complete ecosystem integration with bento mix cards, ratings metrics, and live action triggers.
          </p>
          <button className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center gap-2 hover:bg-cyan-400 transition-colors">
            Get Full Suite <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-2xl h-[440px]">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Flagship Omnichannel" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}