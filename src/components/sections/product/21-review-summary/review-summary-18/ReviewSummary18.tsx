import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check, Layers } from 'lucide-react';

export default function ReviewSummary18({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-stone-950 text-stone-100 p-8 md:p-14 rounded-3xl font-serif border border-stone-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-6 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-2 flex items-center gap-1.5">
            <Layers size={14} /> 18 / STACKED METRIC CARDS
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-stone-100 tracking-tight italic">
            Stacked Editorial Metrics
          </h2>
        </div>
        <p className="text-stone-400 text-sm max-w-md font-sans">
          Stacked metric presentation combining average score, recommendation rate, and buyer verification.
        </p>
      </div>

      {/* Stacked Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 font-sans">
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl"
        >
          <span className="text-xs font-mono text-amber-400 uppercase">OVERALL SCORE</span>
          <span className="font-serif text-6xl text-white font-light mt-2">{avgRating} / 5</span>
          <div className="flex text-amber-400 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-amber-400 stroke-amber-400" />
            ))}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl"
        >
          <span className="text-xs font-mono text-amber-400 uppercase">BUYER APPROVAL</span>
          <span className="font-serif text-6xl text-emerald-400 font-light mt-2">{recommendation}%</span>
          <span className="text-xs font-mono text-stone-400 mt-3 block">High recommendation confidence</span>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl"
        >
          <span className="text-xs font-mono text-amber-400 uppercase">VERIFIED REVIEWS</span>
          <span className="font-serif text-6xl text-white font-light mt-2">{reviewCount}</span>
          <span className="text-xs font-mono text-stone-400 mt-3 block">Logged purchase receipts</span>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-stone-800 pt-6 flex justify-between items-center text-xs font-mono">
        <span className="text-stone-500">Stacked editorial review metric cards</span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="group relative text-xs font-mono uppercase tracking-wider text-stone-300 hover:text-white flex items-center gap-2 py-1"
        >
          {clicked ? (
            <span className="text-emerald-400 flex items-center gap-1 font-bold">
              <Check size={14} /> Opening...
            </span>
          ) : (
            <>
              <span>Read {reviewCount} Stories</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300" />
        </button>
      </div>
    </section>
  );
}
