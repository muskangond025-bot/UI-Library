import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check } from 'lucide-react';

export default function ReviewSummary6({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-8 md:p-14 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            06 / RADIAL RATING SUMMARY
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Radial Rating Arc Summary</h2>
        </div>
        <div className="flex items-center gap-2 text-2xl font-black text-cyan-400 font-mono">
          <span>{avgRating}</span>
          <Star size={20} className="fill-cyan-400 stroke-cyan-400" />
        </div>
      </div>

      {/* Radial Arcs Chart */}
      <div className="my-8 flex flex-col md:flex-row items-center justify-around gap-8">
        <div className="relative w-56 h-56 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* 5 Star Arc */}
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="6" className="text-slate-900" fill="none" />
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              stroke="currentColor"
              strokeWidth="6"
              className="text-cyan-400"
              fill="none"
              strokeDasharray="264"
              initial={{ strokeDashoffset: 264 }}
              animate={{ strokeDashoffset: 264 * (1 - 0.76) }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
            {/* 4 Star Arc */}
            <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="6" className="text-slate-900" fill="none" />
            <motion.circle
              cx="50"
              cy="50"
              r="32"
              stroke="currentColor"
              strokeWidth="6"
              className="text-blue-500"
              fill="none"
              strokeDasharray="201"
              initial={{ strokeDashoffset: 201 }}
              animate={{ strokeDashoffset: 201 * (1 - 0.16) }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute text-center">
            <span className="text-3xl font-black text-white">{recommendation}%</span>
            <span className="text-[9px] font-mono text-cyan-400 block uppercase">SATISFACTION</span>
          </div>
        </div>

        <div className="space-y-3 font-mono text-xs max-w-xs">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shrink-0" />
            <span className="text-slate-300">76% 5-Star Exceptional Reviews</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
            <span className="text-slate-300">16% 4-Star Very Good Reviews</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-slate-700 shrink-0" />
            <span className="text-slate-400">8% Neutral / Constructive Feedback</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-slate-500">
          Radial chart arcs representing satisfaction distributions
        </span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="group relative text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 py-1"
        >
          {clicked ? (
            <span className="text-emerald-400 flex items-center gap-1 font-bold">
              <Check size={14} /> Report Loading...
            </span>
          ) : (
            <>
              <span>View Satisfaction Report</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
        </button>
      </div>
    </section>
  );
}
