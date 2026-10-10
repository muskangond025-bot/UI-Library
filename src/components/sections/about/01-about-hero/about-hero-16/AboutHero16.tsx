import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function AboutHero16({ data, section }: { data?: any; section?: any }) {
  const [pressed, setPressed] = useState(false);
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden relative font-sans">
      <div className="max-w-5xl mx-auto p-10 sm:p-16 rounded-[3rem] bg-slate-900 border border-slate-800 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.05),10px_10px_20px_rgba(0,0,0,0.5)] text-center space-y-8">
        <span className="px-5 py-2 rounded-full bg-slate-900 border border-slate-800 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6),-2px_-2px_4px_rgba(255,255,255,0.05)] text-slate-300 text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-2">
          <Layers className="w-4 h-4 text-slate-400" /> NEUMORPHISM MODERN #16
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Tactile Dual-Shadow Neumorphic Deck
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Refined dark neumorphism featuring soft inset and outset shadow balance with responsive tactile button feedback.
        </p>
        <button
          onClick={() => setPressed(!pressed)}
          className={`px-10 py-4.5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${
            pressed
              ? 'bg-slate-950 text-slate-300 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8)]'
              : 'bg-slate-900 text-slate-100 shadow-[-6px_-6px_12px_rgba(255,255,255,0.05),6px_6px_12px_rgba(0,0,0,0.6)]'
          }`}
        >
          {pressed ? 'Neumorphic Button Depressed' : 'Press Tactile Button'}
        </button>
      </div>
    </section>
  );
}