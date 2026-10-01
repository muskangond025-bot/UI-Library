import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote, Check } from 'lucide-react';

export default function ReviewSummary2({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-[#0c0d0e] text-[#e5e5e5] p-8 md:p-14 rounded-3xl border border-neutral-800 font-serif select-none flex flex-col justify-between">
      {/* Editorial Header */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
            VOL. 04 — EDITORIAL REVIEW ANALYSIS
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight italic">
            Editorial Rating Breakdown
          </h2>
        </div>
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest text-right">
          VERIFIED CUSTOMER CRITIQUE
        </div>
      </div>

      {/* Main Editorial Content Spread */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 font-sans items-center">
        {/* Col 1: Big Score */}
        <div className="border-r border-neutral-800 pr-0 md:pr-6">
          <span className="font-serif text-7xl font-light text-emerald-400 block">{avgRating}</span>
          <div className="flex items-center gap-1 text-emerald-400 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-emerald-400 stroke-emerald-400" />
            ))}
          </div>
          <span className="text-xs font-mono text-neutral-400">Out of 5.0 • {reviewCount} Reviews</span>
        </div>

        {/* Col 2: Quote Callout */}
        <div className="border-r border-neutral-800 pr-0 md:pr-6">
          <Quote size={28} className="text-emerald-400/40 mb-2" />
          <p className="font-serif text-lg text-neutral-200 italic leading-relaxed">
            "The craftsmanship and audio clarity exceeded all studio expectations."
          </p>
          <span className="text-xs font-mono text-emerald-400 mt-3 block">
            {recommendation}% Buyer Approval Rating
          </span>
        </div>

        {/* Col 3: Stat Meters */}
        <div className="space-y-4 font-mono text-xs">
          <div>
            <div className="flex justify-between mb-1 text-neutral-400">
              <span>5-Star Excellence</span>
              <span>76%</span>
            </div>
            <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '76%' }}
                transition={{ duration: 0.8 }}
                className="h-full bg-emerald-500"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1 text-neutral-400">
              <span>4-Star Approval</span>
              <span>16%</span>
            </div>
            <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '16%' }}
                transition={{ duration: 0.8 }}
                className="h-full bg-emerald-500/80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-800 pt-6 flex justify-between items-center text-xs font-mono">
        <span className="text-neutral-500">Progressive rating bars fill animation</span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="group relative text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white flex items-center gap-2 py-1"
        >
          {clicked ? (
            <span className="text-emerald-400 flex items-center gap-1 font-bold">
              <Check size={14} /> Opening Reviews...
            </span>
          ) : (
            <>
              <span>Read All {reviewCount} Reviews</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 group-hover:w-full transition-all duration-300" />
        </button>
      </div>
    </section>
  );
}
