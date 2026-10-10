"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalCtaBanner4() {
  return (
    <section className="w-full py-24 px-6 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-rose-950/80 via-neutral-900 to-neutral-900 rounded-3xl p-10 sm:p-16 border border-rose-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-8 bg-rose-500 rounded-full"></div>
            <span className="text-xs font-mono font-bold text-rose-400">BENTO CTA MATRIX #4</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Scale Your High-Performance Graphics App</h2>
          <p className="text-neutral-400 text-sm max-w-xl mt-3 leading-relaxed">Integrate WebGL shaders, volumetric canvas components, and multi-threaded rendering in under 10 minutes.</p>
        </div>

        <button className="px-8 py-4 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-rose-500/20">
          START BUILDING NOW <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}