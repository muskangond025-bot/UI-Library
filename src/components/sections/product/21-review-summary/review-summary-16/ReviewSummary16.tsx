import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Zap, SlidersHorizontal } from 'lucide-react';

export default function ReviewSummary16({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const attributes = data?.attributes || [
    { name: "Build Quality", score: "4.9 / 5" },
    { name: "Comfort & Fit", score: "4.8 / 5" },
    { name: "Battery Life", score: "4.7 / 5" }
  ];

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <SlidersHorizontal size={14} /> 16 / SUB-ATTRIBUTE METRICS
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Attribute Breakdown Summary</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs font-sans">
          Primary score badge supported by 3 granular sub-attribute customer satisfaction meters.
        </p>
      </div>

      {/* Grid: Left Hero Score (5 cols), Right Sub-Attributes (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
        {/* Left Hero Box */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl">
          <span className="text-6xl font-black text-white">{avgRating}</span>
          <div className="flex text-amber-400 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-xs font-mono text-slate-400">Overall Grade from {reviewCount} Verified Reviews</span>
        </div>

        {/* Right Sub-Attributes */}
        <div className="lg:col-span-7 space-y-4 font-mono text-xs">
          {attributes.map((attr: any, idx: number) => (
            <div key={idx} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between shadow-md">
              <span className="text-slate-300 font-bold">{attr.name}</span>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '95%' }} />
                </div>
                <span className="font-bold text-cyan-400 w-16 text-right">{attr.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-slate-500">
          Sub-attribute satisfaction meter visualization
        </span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-lg"
        >
          {clicked ? <Check size={16} /> : <Zap size={16} />}
          {clicked ? "SUBMITTED" : "WRITE PRODUCT REVIEW"}
        </button>
      </div>
    </section>
  );
}
