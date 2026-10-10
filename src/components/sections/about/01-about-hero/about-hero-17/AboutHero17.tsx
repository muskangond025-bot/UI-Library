import React from 'react';
import { motion } from 'framer-motion';
import { Grid, ArrowRight } from 'lucide-react';

export function AboutHero17({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="px-5 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-md">
            <Grid className="w-4 h-4 text-violet-400" /> SPLIT GRID MAGAZINE #17
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Dual-Pane Magazine Editorial Showcase
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Asymmetrical split layout pairing a bold editorial narrative column with an interactive 3D media offset gallery tile.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-violet-600 text-white font-extrabold text-xs uppercase tracking-widest hover:bg-violet-500 transition-all flex items-center gap-2 shadow-xl">
            <span>Read Editorial Issue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-5 relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
            alt="Magazine Showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}