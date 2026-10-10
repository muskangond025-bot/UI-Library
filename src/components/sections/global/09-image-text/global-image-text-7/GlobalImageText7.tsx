"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function GlobalImageText7() {
  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-4 h-4" /> Royal Reserve Heritage
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">The Art of Fine Craftsmanship</h2>
          <p className="font-sans text-zinc-400 text-base leading-relaxed">
            Hand-embossed accents, gold foil detailing, and velvet luxury finish created for those who value heritage.
          </p>
          <button className="px-6 py-3 rounded-xl border-2 border-amber-600 bg-amber-950/50 text-amber-300 font-serif hover:bg-amber-900 transition-colors">
            Discover Legacy
          </button>
        </div>
        <div className="border-2 border-amber-800/40 rounded-2xl overflow-hidden shadow-2xl h-[420px] p-2 bg-zinc-900">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" alt="Luxury Velvet" className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
}