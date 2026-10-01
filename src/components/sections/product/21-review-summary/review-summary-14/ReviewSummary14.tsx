import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, Check } from 'lucide-react';

export default function ReviewSummary14({ data }: { data?: any }) {
  const [filtered, setFiltered] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const distribution = data?.ratingDistribution || { "5": 248, "4": 52, "3": 14, "2": 6, "1": 4 };

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            14 / PROGRESS-BAR ANALYSIS
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Illuminated Progress Bars</h2>
        </div>
        <div className="flex items-center gap-2 text-2xl font-black text-emerald-400 font-mono">
          <span>{avgRating}</span>
          <Star size={20} className="fill-emerald-400 stroke-emerald-400" />
        </div>
      </div>

      {/* Progress Bars */}
      <div className="my-8 space-y-4 font-mono text-xs">
        {Object.entries(distribution)
          .reverse()
          .map(([star, count], idx) => {
            const numCount = Number(count);
            const pct = Math.round((numCount / reviewCount) * 100);
            return (
              <div key={star} className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span className="font-bold flex items-center gap-1">
                    {star} Star Rating ({numCount} reviews)
                  </span>
                  <span className="text-emerald-400 font-bold">{pct}%</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full relative"
                  >
                    {/* Glowing tip */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#10b981]" />
                  </motion.div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-slate-500">
          Illuminated progress bars with glowing tip indicators
        </span>

        <button
          onClick={() => {
            setFiltered(true);
            setTimeout(() => setFiltered(false), 1800);
          }}
          className="px-6 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95 shadow-md"
        >
          {filtered ? <Check size={16} /> : <Filter size={15} />}
          {filtered ? "FILTER APPLIED!" : "FILTER BY RATING"}
        </button>
      </div>
    </section>
  );
}
