"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalImageText8() {
  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-rose-400">Dual-Tone Split</span>
          <h2 className="text-4xl font-extrabold uppercase">High Contrast Visual Impact</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Split-color canvas layout engineered to draw immediate focal attention to product highlights.
          </p>
          <button className="px-6 py-3 rounded-xl bg-rose-500 text-white font-bold flex items-center gap-2 hover:bg-rose-600 transition-colors">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl relative border border-slate-700">
          <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop" alt="Dual Tone" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}