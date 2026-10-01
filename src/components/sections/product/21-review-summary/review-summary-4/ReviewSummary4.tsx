import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, BarChart2, Check } from 'lucide-react';

export default function ReviewSummary4({ data }: { data?: any }) {
  const [inspected, setInspected] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const distribution = data?.ratingDistribution || { "5": 248, "4": 52, "3": 14, "2": 6, "1": 4 };

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            04 / HORIZONTAL RATING SPECTRUM
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Full-Width Rating Spectrum</h2>
        </div>
        <div className="flex items-center gap-2 text-2xl font-black text-cyan-400 font-mono">
          <span>{avgRating}</span>
          <Star size={20} className="fill-cyan-400 stroke-cyan-400" />
        </div>
      </div>

      {/* Full Width Spectrum Bars */}
      <div className="my-8 space-y-4">
        {Object.entries(distribution)
          .reverse()
          .map(([star, count], idx) => {
            const numCount = Number(count);
            const pct = Math.round((numCount / reviewCount) * 100);
            return (
              <div key={star} className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span className="font-bold">{star} Star Rating ({numCount} reviews)</span>
                  <span className="text-cyan-400 font-bold">{pct}%</span>
                </div>
                <div className="w-full h-4 bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                  />
                </div>
              </div>
            );
          })}
      </div>

      {/* Footer & CTA */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-slate-500">
          Horizontal rating spectrum sweep with gradient distribution fills
        </span>

        <button
          onClick={() => {
            setInspected(true);
            setTimeout(() => setInspected(false), 1800);
          }}
          className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 active:scale-95 shadow-md"
        >
          {inspected ? <Check size={16} /> : <BarChart2 size={16} />}
          {inspected ? "SPECTRUM INSPECTED!" : "INSPECT SPECTRUM"}
        </button>
      </div>
    </section>
  );
}
