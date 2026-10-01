import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, Check } from 'lucide-react';

export default function ReviewSummary7({ data }: { data?: any }) {
  const [activeStar, setActiveStar] = useState<string | null>(null);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const distribution = data?.ratingDistribution || { "5": 248, "4": 52, "3": 14, "2": 6, "1": 4 };

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            07 / VERTICAL RATING BREAKDOWN
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Vertical Stacked Breakdown</h2>
        </div>
        <div className="flex items-center gap-2 text-2xl font-black text-amber-400 font-mono">
          <span>{avgRating}</span>
          <Star size={20} className="fill-amber-400 stroke-amber-400" />
        </div>
      </div>

      {/* Vertical Rows */}
      <div className="my-6 space-y-3 font-mono text-xs">
        {Object.entries(distribution)
          .reverse()
          .map(([star, count], idx) => {
            const numCount = Number(count);
            const pct = Math.round((numCount / reviewCount) * 100);
            const isSelected = activeStar === star;
            return (
              <motion.div
                key={star}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStar(isSelected ? null : star)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 w-32">
                  <span className="font-bold text-white flex items-center gap-1">
                    {star} <Star size={12} className="fill-amber-400 text-amber-400" />
                  </span>
                  <span className="text-slate-400">({numCount})</span>
                </div>

                <div className="flex-1 max-w-md mx-4 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }} />
                </div>

                <span className="w-12 text-right font-bold text-amber-400">{pct}%</span>
              </motion.div>
            );
          })}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-slate-500">
          Staggered metric entrance animations with interactive star filter rows
        </span>

        <button
          onClick={() => setActiveStar(null)}
          className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <Filter size={15} />
          <span>{activeStar ? `Reset Filter (${activeStar}-Star)` : "Filter All Reviews"}</span>
        </button>
      </div>
    </section>
  );
}
