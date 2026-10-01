import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Check, ArrowRight, Edit3, Award } from 'lucide-react';

export default function ReviewSummary20({ data }: { data?: any }) {
  const [written, setWritten] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;
  const distribution = data?.ratingDistribution || { "5": 248, "4": 52, "3": 14, "2": 6, "1": 4 };

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Radial Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 z-10">
        <div>
          <span className="px-3.5 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Award size={14} /> 20 / PREMIUM REVIEW INSIGHTS SHOWCASE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Executive Review Insights Suite
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <ShieldCheck size={16} className="text-indigo-400" />
          <span>310 Verified Purchase Audits</span>
        </div>
      </div>

      {/* Main Suite Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 z-10 items-center">
        {/* Left Hero Rating Card (5 cols) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl"
        >
          <span className="text-6xl md:text-7xl font-black text-white">{avgRating}</span>
          <div className="flex text-amber-400 my-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-sm font-mono text-slate-400">Based on {reviewCount} verified reviews</span>
          
          <div className="mt-6 pt-4 border-t border-slate-800 w-full flex items-center justify-center gap-2 text-xs font-mono text-indigo-400 font-bold">
            <span>{recommendation}% Buyer Recommendation Index</span>
          </div>
        </motion.div>

        {/* Right Rating Distribution Bars (7 cols) */}
        <div className="lg:col-span-7 space-y-3 font-mono text-xs">
          {Object.entries(distribution)
            .reverse()
            .map(([star, count]) => {
              const numCount = Number(count);
              const pct = Math.round((numCount / reviewCount) * 100);
              return (
                <div key={star} className="flex items-center gap-4">
                  <span className="w-14 text-slate-400 font-bold flex items-center gap-1">
                    {star} <Star size={12} className="fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-1 h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="w-16 text-right font-bold text-indigo-400">{numCount} ({pct}%)</span>
                </div>
              );
            })}
        </div>
      </div>

      {/* Footer & Dual CTAs */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate-500 border-t border-slate-800 pt-6 z-10 gap-4">
        <span>Executive review insights suite with minimal cinematic transitions</span>

        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={() => {
              setWritten(true);
              setTimeout(() => setWritten(false), 1800);
            }}
            className="flex-1 sm:flex-initial px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-1.5"
          >
            {written ? <Check size={14} /> : <Edit3 size={14} />}
            {written ? "Opened" : "Write Review"}
          </button>
          <button className="flex-1 sm:flex-initial px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95">
            <span>Read All {reviewCount} Reviews</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
