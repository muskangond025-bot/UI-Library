import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function OffersHero10({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-20 px-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-neutral-800 shadow-2xl">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 text-xs tracking-widest uppercase text-neutral-400 font-mono">
          <span>THE DEAL EDIT // VOL. 24</span>
          <span>AUTUMN PROMOTION</span>
          <span>50% OFF CURATION</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif tracking-tighter text-white uppercase leading-none">
            THE DEALS <span className="italic font-normal text-amber-300">ISSUE.</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            An curated compilation of signature silhouettes and seasonal staples available at exclusive 50% promotional pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-neutral-800">
          <div className="space-y-2">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">01 / DISCOUNT</div>
            <div className="text-2xl font-bold text-white">FLAT 50% REDUCTION</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">02 / CODE</div>
            <div className="text-2xl font-mono font-bold text-white">EDIT50</div>
          </div>
          <div className="flex items-end justify-start sm:justify-end">
            <button className="px-6 py-3 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2">
              <span>VIEW EDITORIAL</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero10;
