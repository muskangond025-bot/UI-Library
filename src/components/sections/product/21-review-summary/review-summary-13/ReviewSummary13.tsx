import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Sparkles, Send } from 'lucide-react';

export default function ReviewSummary13({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-10 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> 13 / ASYMMETRIC BENTO COMPOSITION
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Asymmetric Bento Composition</h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>Staggered Layout Physics</span>
        </div>
      </div>

      {/* Asymmetric Bento Grid (7-col + 5-col) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left Hero Score Bento (7 cols) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="lg:col-span-7 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-8 flex flex-col justify-between shadow-xl"
        >
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">OVERALL RATING SCORE</span>
            <div className="flex items-baseline gap-4">
              <span className="text-6xl md:text-7xl font-black text-white">{avgRating}</span>
              <span className="text-2xl font-bold text-slate-500">/ 5.0</span>
            </div>
            <div className="flex text-amber-400 my-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-amber-400 stroke-amber-400" />
              ))}
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 border-t border-slate-800 pt-4 block">
            Calculated from {reviewCount} verified buyer submissions
          </span>
        </motion.div>

        {/* Right Stack (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
          >
            <span className="text-xs font-mono text-cyan-400 uppercase">BUYER APPROVAL</span>
            <span className="text-4xl font-black text-white mt-1">{recommendation}%</span>
            <span className="text-xs text-slate-400 mt-2 block">Recommend to friends</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
          >
            <span className="text-xs font-mono text-cyan-400 uppercase">VERIFIED PURCHASES</span>
            <span className="text-4xl font-black text-white mt-1">310</span>
            <span className="text-xs text-slate-400 mt-2 block">Confirmed receipts</span>
          </motion.div>
        </div>
      </div>

      {/* Footer & CTA */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-slate-500">
          Staggered bento rating composition with offset tile spans
        </span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-lg"
        >
          {clicked ? <Check size={16} /> : <Send size={15} />}
          {clicked ? "SUBMITTED!" : "SUBMIT FEEDBACK"}
        </button>
      </div>
    </section>
  );
}
