import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, Check } from 'lucide-react';

export default function ReviewSummary3({ data }: { data?: any }) {
  const [filtered, setFiltered] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;

  return (
    <section className="w-full min-h-[580px] bg-neutral-950 text-white p-8 md:p-14 rounded-3xl border border-neutral-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 flex justify-between items-center">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
          03 / OVERSIZED SCORE DISPLAY
        </span>
        <span className="text-xs font-mono text-neutral-400">VERIFIED FEEDBACK</span>
      </div>

      {/* Hero Oversized Score */}
      <div className="my-10 flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-8xl md:text-9xl font-black tracking-tighter text-white">{avgRating}</span>
          <div className="flex items-center gap-1.5 text-amber-400 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-sm font-mono text-neutral-400 mt-2">Overall Score from {reviewCount} Reviews</span>
        </div>

        {/* Circular Progress Ring Draw */}
        <div className="relative w-44 h-44 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8" className="text-neutral-900" fill="transparent" />
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              stroke="currentColor"
              strokeWidth="8"
              className="text-amber-400"
              fill="transparent"
              strokeDasharray="264"
              initial={{ strokeDashoffset: 264 }}
              animate={{ strokeDashoffset: 264 * (1 - 0.94) }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center font-mono">
            <span className="text-3xl font-black text-white">94%</span>
            <span className="text-[10px] text-neutral-400 uppercase">WOULD RECOMMEND</span>
          </div>
        </div>
      </div>

      {/* Footer & Pill CTA */}
      <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-neutral-500">
          Oversized numerical rating score with circular progress ring draw
        </span>

        <button
          onClick={() => {
            setFiltered(true);
            setTimeout(() => setFiltered(false), 1800);
          }}
          className="px-5 py-2.5 bg-neutral-900 hover:bg-amber-400 text-white hover:text-neutral-950 border border-neutral-700 hover:border-amber-400 rounded-full text-xs font-mono font-bold flex items-center gap-2 transition-all active:scale-95"
        >
          {filtered ? <Check size={14} /> : <Filter size={14} />}
          {filtered ? "FILTER APPLIED!" : "FILTER 5-STAR REVIEWS"}
        </button>
      </div>
    </section>
  );
}
