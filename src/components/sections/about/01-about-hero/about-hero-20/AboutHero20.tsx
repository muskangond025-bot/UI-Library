import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function AboutHero20({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-[#061C14] text-emerald-50 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto p-12 sm:p-16 rounded-[3.5rem] bg-emerald-900/40 border-2 border-emerald-400/40 shadow-[0_30px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-center space-y-10">
        <span className="px-6 py-2.5 rounded-full bg-emerald-950 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-md">
          <Sparkles className="w-4 h-4 text-emerald-300 animate-spin" style={{ animationDuration: '6s' }} /> 3D STACKED GLASS #20
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
          Flagship 3D Stacked Glass Horizon
        </h1>
        <p className="text-emerald-200/90 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          The ultimate flagship brand hero experience with multi-layered stacked glass cards, depth-of-field blur, and 3D perspective tilt shifts on mouse hover.
        </p>
        <div className="flex justify-center">
          <button className="px-10 py-4.5 rounded-2xl bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300 text-emerald-950 font-extrabold text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
            <span>Explore Flagship Experience</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}