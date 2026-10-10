"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export function GlobalCtaBanner1() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 rounded-3xl p-10 sm:p-16 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-6">
              <Sparkles className="w-4 h-4" /> GLOBAL CTA BANNER #1
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">Ready to Transform Your Digital Infrastructure?</h2>
            <p className="text-slate-400 text-base mt-4 leading-relaxed">Experience sub-millisecond response times, glassmorphic UI systems, and 24/7 priority enterprise support.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-all flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/25">
              GET STARTED NOW <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700 transition-all flex items-center justify-center">
              BOOK DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}