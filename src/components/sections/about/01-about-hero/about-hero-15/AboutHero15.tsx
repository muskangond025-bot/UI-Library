import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export function AboutHero15({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto p-10 sm:p-16 rounded-[3rem] bg-slate-900 border-2 border-slate-700 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="px-5 py-2 rounded-full bg-slate-800 border border-slate-600 text-slate-200 text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-md">
            <ShieldCheck className="w-4 h-4 text-slate-300" /> METALLIC CHROME #15
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
            Aerospace Grade Liquid Silver Chrome Deck
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            High-tech aerospace & fintech editorial hero banner engineered with reflective chrome borders, dark steel panels, and precision tolerance specs.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-slate-100 text-slate-950 font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 shadow-xl">
            <span>Inspect Chrome Specs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs text-slate-300 shadow-xl">
          <div className="text-slate-100 font-bold uppercase text-sm">TECHNICAL SPECIFICATIONS</div>
          <div>• Precision Tolerance: 0.001mm</div>
          <div>• Material: Grade-5 Titanium / Chrome Sheen</div>
          <div>• Orbit Satellites: 24 Operational</div>
        </div>
      </div>
    </section>
  );
}