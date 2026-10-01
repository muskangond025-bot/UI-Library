import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Check, ArrowRight } from 'lucide-react';

export default function ReviewSummary9({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans overflow-hidden">
      {/* Background Banner Gradient */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 mt-2">
        <div>
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Zap size={14} /> REVIEW INTELLIGENCE BAR
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Full-Width Intelligence Summary</h2>
        </div>
        <div className="flex items-center gap-2 text-2xl font-black text-emerald-400 font-mono">
          <span>{avgRating} / 5.0</span>
          <Star size={20} className="fill-emerald-400 stroke-emerald-400" />
        </div>
      </div>

      {/* Full Bleed Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 font-mono">
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-xl"
        >
          <span className="text-4xl font-black text-emerald-400 block">{avgRating}</span>
          <span className="text-xs text-slate-400 uppercase mt-1 block">AVERAGE SCORE</span>
          <span className="text-[11px] text-slate-500 mt-2 block">Calculated across {reviewCount} buyers</span>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-xl"
        >
          <span className="text-4xl font-black text-emerald-400 block">{recommendation}%</span>
          <span className="text-xs text-slate-400 uppercase mt-1 block">RECOMMENDATION RATE</span>
          <span className="text-[11px] text-slate-500 mt-2 block">High buyer satisfaction index</span>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-xl"
        >
          <span className="text-4xl font-black text-emerald-400 block">310</span>
          <span className="text-xs text-slate-400 uppercase mt-1 block">VERIFIED PURCHASES</span>
          <span className="text-[11px] text-slate-500 mt-2 block">Authentic order receipts</span>
        </motion.div>
      </div>

      {/* Footer & CTA */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-slate-500">
          Full-width intelligence bar with percentage counters
        </span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-lg"
        >
          {clicked ? <Check size={16} /> : <ArrowRight size={16} />}
          {clicked ? "INTELLIGENCE OPENED" : "REVIEW INTELLIGENCE"}
        </button>
      </div>
    </section>
  );
}
