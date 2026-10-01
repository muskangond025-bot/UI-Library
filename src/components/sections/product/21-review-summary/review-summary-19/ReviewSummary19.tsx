import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, Check, RefreshCw } from 'lucide-react';

export default function ReviewSummary19({ data }: { data?: any }) {
  const [activeStar, setActiveStar] = useState<string | null>("5");

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const distribution = data?.ratingDistribution || { "5": 248, "4": 52, "3": 14, "2": 6, "1": 4 };

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            19 / INTERACTIVE SCORE FILTER
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Interactive Score Filter Breakdown</h2>
        </div>
        <div className="flex items-center gap-2 text-2xl font-black text-cyan-400 font-mono">
          <span>{avgRating}</span>
          <Star size={20} className="fill-cyan-400 stroke-cyan-400" />
        </div>
      </div>

      {/* Interactive Rows */}
      <div className="my-6 space-y-3 font-mono text-xs">
        {Object.entries(distribution)
          .reverse()
          .map(([star, count]) => {
            const numCount = Number(count);
            const pct = Math.round((numCount / reviewCount) * 100);
            const isSelected = activeStar === star;
            return (
              <motion.div
                key={star}
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveStar(star)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-white flex items-center gap-1 text-sm">
                    {star} <Star size={14} className="fill-amber-400 text-amber-400" />
                  </span>
                  <span className="text-slate-400">({numCount} Reviews)</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-32 md:w-48 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="font-bold text-cyan-400 w-12 text-right">{pct}%</span>
                </div>
              </motion.div>
            );
          })}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-slate-500">
          Tap any star row to isolate specific rating distributions
        </span>

        <button
          onClick={() => setActiveStar(activeStar === "5" ? "4" : "5")}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <Filter size={15} />
          <span>Showing {activeStar}-Star Filtered Reviews</span>
        </button>
      </div>
    </section>
  );
}
