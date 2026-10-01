import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Edit3 } from 'lucide-react';

export default function ReviewSummary5({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-8 md:p-14 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between overflow-hidden font-sans">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10 max-w-xl mx-auto">
        <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
          05 / CIRCULAR RATING VISUALIZATION
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Circular Rating Visualization</h2>
      </div>

      {/* Circular Progress Display */}
      <div className="my-8 z-10 flex flex-col sm:flex-row items-center justify-center gap-10">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" className="text-slate-900" fill="transparent" />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              className="text-indigo-500"
              fill="transparent"
              strokeDasharray="251"
              initial={{ strokeDashoffset: 251 }}
              animate={{ strokeDashoffset: 251 * (1 - recommendation / 100) }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute text-center">
            <span className="text-4xl font-black text-white">{recommendation}%</span>
            <span className="text-[10px] font-mono text-indigo-300 block uppercase mt-0.5">APPROVAL</span>
          </div>
        </div>

        <div className="text-center sm:text-left space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-4xl font-black text-white">{avgRating}</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 stroke-amber-400" />
              ))}
            </div>
          </div>
          <span className="text-sm text-slate-400 font-mono block">Based on {reviewCount} customer reviews</span>
          <span className="text-xs text-indigo-400 font-mono block">94% of buyers recommend this product</span>
        </div>
      </div>

      {/* Footer & CTA */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 z-10">
        <span className="text-xs font-mono text-slate-500">
          SVG circular progress ring draw with recommendation percentage gauge
        </span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-2 transition-all shadow-lg active:scale-95"
        >
          {clicked ? <Check size={16} /> : <Edit3 size={16} />}
          {clicked ? "REVIEW FORM OPENED" : "WRITE REVIEW"}
        </button>
      </div>
    </section>
  );
}
