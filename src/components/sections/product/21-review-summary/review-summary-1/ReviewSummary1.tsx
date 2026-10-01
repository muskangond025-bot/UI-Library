import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ThumbsUp, ArrowRight, Award } from 'lucide-react';

export default function ReviewSummary1({ data }: { data?: any }) {
  const [written, setWritten] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;
  const distribution = data?.ratingDistribution || { "5": 248, "4": 52, "3": 14, "2": 6, "1": 4 };

  return (
    <section className="w-full min-h-[580px] bg-stone-950 text-stone-100 p-8 md:p-14 rounded-3xl font-serif border border-stone-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-6 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-1.5">
            <Award size={14} /> LUXURY RATING DASHBOARD
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-stone-100 tracking-tight italic">
            Customer Feedback Overview
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
          <CheckCircle size={14} className="text-amber-400" />
          <span>310 Verified Purchases</span>
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 font-sans items-center">
        {/* Left Big Score Badge (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-stone-900 border border-stone-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl"
        >
          <span className="text-6xl md:text-7xl font-light font-serif text-amber-400">{avgRating}</span>
          <div className="flex items-center gap-1.5 my-3 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-sm font-mono text-stone-400">Based on {reviewCount} verified reviews</span>
          
          <div className="mt-6 pt-4 border-t border-stone-800/80 w-full flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
            <ThumbsUp size={15} />
            <span>{recommendation}% of buyers recommend this item</span>
          </div>
        </motion.div>

        {/* Right Rating Distribution Bars (7 Cols) */}
        <div className="lg:col-span-7 space-y-3 font-mono text-xs">
          {Object.entries(distribution)
            .reverse()
            .map(([star, count]) => {
              const numCount = Number(count);
              const percentage = Math.round((numCount / reviewCount) * 100);
              return (
                <div key={star} className="flex items-center gap-4">
                  <span className="w-12 text-stone-400 font-bold flex items-center gap-1">
                    {star} <Star size={12} className="fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-1 h-3 bg-stone-900 rounded-full overflow-hidden border border-stone-800 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                    />
                  </div>
                  <span className="w-16 text-right text-stone-400">{numCount} ({percentage}%)</span>
                </div>
              );
            })}
        </div>
      </div>

      {/* Footer & CTA */}
      <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-stone-500">
          Rating number count-up & distribution analysis
        </span>

        <button
          onClick={() => {
            setWritten(true);
            setTimeout(() => setWritten(false), 2000);
          }}
          className="px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-950 text-xs font-mono uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 active:scale-95"
        >
          {written ? (
            <span className="flex items-center gap-1 font-bold text-emerald-400">
              <CheckCircle size={15} /> Review Form Opened
            </span>
          ) : (
            <>
              <span>Write Verified Review</span>
              <ArrowRight size={14} />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
