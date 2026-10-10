import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight, Award, ShieldCheck } from 'lucide-react';

export function AboutHero10({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-amber-50 overflow-hidden relative font-serif">
      <div className="max-w-6xl mx-auto p-10 sm:p-20 rounded-[3rem] bg-neutral-900 border-2 border-amber-600/40 shadow-[inset_0_2px_6px_rgba(255,215,0,0.2),0_30px_70px_rgba(0,0,0,0.95)] text-center space-y-10 relative">
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest shadow-md">
          <Crown className="w-4 h-4 text-amber-400" /> SKEUOMORPHIC LUXURY #10 • SINCE 1906
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 tracking-tight leading-[1.08]">
          120 Years of Unrivaled Luxury Brand Heritage
        </h1>

        <p className="text-amber-100/80 text-base sm:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
          Crafting ultra-luxury digital storytelling with rich dark velvet textures, debossed gold foil emblems, and tactile pressed interactive controls.
        </p>

        <div className="pt-4 flex justify-center">
          <button className="px-10 py-4.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 text-neutral-950 font-sans font-extrabold text-xs uppercase tracking-widest shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_20px_40px_rgba(0,0,0,0.7)] hover:scale-105 transition-all flex items-center gap-2">
            <span>Explore Heritage Archives</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}