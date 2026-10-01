import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Sparkles, Edit3 } from 'lucide-react';

export default function ReviewSummary12({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between overflow-hidden font-sans">
      {/* Mesh Glow Background */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6 z-10">
        <div>
          <span className="px-3.5 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> 12 / FROSTED GLASS PANEL
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Layered Glass Panel</h2>
        </div>
        <div className="flex items-center gap-2 text-2xl font-black text-indigo-400 font-mono">
          <span>{avgRating}</span>
          <Star size={20} className="fill-indigo-400 stroke-indigo-400" />
        </div>
      </div>

      {/* 3 Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 z-10 font-sans">
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-slate-900/50 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 flex flex-col justify-between shadow-2xl relative"
        >
          <span className="text-xs font-mono text-indigo-300 uppercase block mb-2">OVERALL SCORE</span>
          <span className="text-5xl font-black text-white">{avgRating} / 5</span>
          <span className="text-xs text-slate-400 mt-2 block font-mono">Calculated from {reviewCount} reviews</span>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-slate-900/50 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 flex flex-col justify-between shadow-2xl relative"
        >
          <span className="text-xs font-mono text-indigo-300 uppercase block mb-2">APPROVAL RATE</span>
          <span className="text-5xl font-black text-emerald-400">{recommendation}%</span>
          <span className="text-xs text-slate-400 mt-2 block font-mono">Verified buyer satisfaction</span>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-slate-900/50 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 flex flex-col justify-between shadow-2xl relative"
        >
          <span className="text-xs font-mono text-indigo-300 uppercase block mb-2">VERIFIED REVIEWS</span>
          <span className="text-5xl font-black text-white">310</span>
          <span className="text-xs text-slate-400 mt-2 block font-mono">Confirmed order receipts</span>
        </motion.div>
      </div>

      {/* Footer & CTA */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 z-10">
        <span className="text-xs font-mono text-slate-500">
          Frosted glass card paneling with specular light border highlights
        </span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="px-6 py-3 rounded-full bg-indigo-600/80 hover:bg-indigo-500 text-white backdrop-blur-md border border-indigo-400/40 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg active:scale-95"
        >
          {clicked ? <Check size={16} /> : <Edit3 size={16} />}
          {clicked ? "REVIEW FORM OPENED" : "WRITE GLASS REVIEW"}
        </button>
      </div>
    </section>
  );
}
