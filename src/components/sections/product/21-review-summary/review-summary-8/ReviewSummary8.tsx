import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export default function ReviewSummary8({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            08 / SPLIT RATING STATS
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Split Rating + Statistics Container</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs font-sans">
          Two-tone split design pairing score metrics on the left with verified statistics on the right.
        </p>
      </div>

      {/* 50/50 Split Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {/* Left Dark Score Card */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-2xl"
        >
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">OVERALL RATING</span>
            <div className="flex items-baseline gap-3">
              <span className="text-6xl font-black text-white">{avgRating}</span>
              <span className="text-xl font-bold text-slate-500">/ 5.0</span>
            </div>
            <div className="flex text-amber-400 my-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 stroke-amber-400" />
              ))}
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">Based on {reviewCount} verified buyer reviews</span>
        </motion.div>

        {/* Right Light Statistics Block */}
        <div className="bg-slate-100 text-slate-950 rounded-2xl p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <span className="text-xs font-mono text-slate-600 font-bold uppercase tracking-widest block mb-2">
              VERIFIED SENTIMENT
            </span>
            <span className="text-4xl font-black text-slate-900 block">{recommendation}%</span>
            <p className="text-xs text-slate-600 font-bold mt-1">Would recommend this product to a friend or colleague.</p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-300 flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 font-bold text-emerald-700">
              <ShieldCheck size={16} /> 310 Verified Buyers
            </span>
            <button
              onClick={() => {
                setClicked(true);
                setTimeout(() => setClicked(false), 1800);
              }}
              className="px-4 py-2 bg-slate-950 hover:bg-slate-850 text-white font-bold rounded-lg uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-95"
            >
              {clicked ? <Check size={14} /> : <ArrowRight size={14} />}
              {clicked ? "EXPLORING" : "EXPLORE REVIEWS"}
            </button>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center">
        Two-tone split layout with independent metric isolation
      </div>
    </section>
  );
}
