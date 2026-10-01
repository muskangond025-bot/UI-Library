import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Edit3, ThumbsUp } from 'lucide-react';

export default function ReviewSummary15({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[380px] bg-slate-950 text-white p-6 md:p-10 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
        <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
          15 / COMPACT RATING STRIP
        </span>
        <span className="text-xs font-mono text-slate-400">HIGH-DENSITY COMPACTION</span>
      </div>

      {/* Compact Strip Row */}
      <div className="my-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <span className="text-5xl font-black text-white">{avgRating}</span>
          <div>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <span className="text-xs font-mono text-slate-400 mt-1 block">{reviewCount} Verified Customer Reviews</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-4 py-2 rounded-full border border-emerald-500/30">
          <ThumbsUp size={14} />
          <span>{recommendation}% Recommendation Rate</span>
        </div>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-md shrink-0"
        >
          {clicked ? <Check size={14} /> : <Edit3 size={14} />}
          {clicked ? "OPENED" : "WRITE REVIEW"}
        </button>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-xs font-mono text-slate-500">
        <span>Single-row compact layout for inline page placement</span>
        <span>VERIFIED OVERVIEW</span>
      </div>
    </section>
  );
}
