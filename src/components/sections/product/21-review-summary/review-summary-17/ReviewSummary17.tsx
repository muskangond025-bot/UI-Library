import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, BarChart, Check, ArrowRight } from 'lucide-react';

export default function ReviewSummary17({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const distribution = data?.ratingDistribution || { "5": 248, "4": 52, "3": 14, "2": 6, "1": 4 };

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <BarChart size={14} /> 17 / DATA VISUALIZATION HISTOGRAM
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Rating Distribution Histogram</h2>
        </div>
        <div className="flex items-center gap-2 text-2xl font-black text-emerald-400 font-mono">
          <span>{avgRating} / 5.0</span>
          <Star size={20} className="fill-emerald-400 stroke-emerald-400" />
        </div>
      </div>

      {/* Vertical Histogram Bar Chart */}
      <div className="my-8 p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-end justify-around h-64 font-mono shadow-xl">
        {Object.entries(distribution)
          .map(([star, count], idx) => {
            const numCount = Number(count);
            const heightPct = Math.max(15, Math.round((numCount / 248) * 100));
            return (
              <div key={star} className="flex flex-col items-center gap-2 w-16 group">
                <span className="text-[11px] text-emerald-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {numCount}
                </span>
                <div className="w-full bg-slate-950 rounded-t-lg overflow-hidden h-44 flex items-end p-1 border border-slate-800">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="w-full bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t"
                  />
                </div>
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1">
                  {star} <Star size={10} className="fill-emerald-400 text-emerald-400" />
                </span>
              </div>
            );
          })}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-slate-500">
          Chart-like progressive draw histogram mapping review volume
        </span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="px-6 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95 shadow-md"
        >
          {clicked ? <Check size={16} /> : <ArrowRight size={15} />}
          {clicked ? "ANALYTICS OPENED" : "VIEW ANALYTICS"}
        </button>
      </div>
    </section>
  );
}
