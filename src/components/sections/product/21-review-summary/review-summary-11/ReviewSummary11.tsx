import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check, BookOpen } from 'lucide-react';

export default function ReviewSummary11({ data }: { data?: any }) {
  const [selected, setSelected] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-[#0c0d0e] text-[#e5e5e5] p-8 md:p-14 rounded-3xl border border-neutral-800 font-serif select-none flex flex-col justify-between">
      {/* Magazine Masthead */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            <BookOpen size={14} />
            <span>BROADSHEET REVIEW EDITION</span>
            <span>/</span>
            <span>ISSUE 11</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight font-serif italic">
            Magazine Review Summary
          </h2>
        </div>
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest text-right">
          CURATED CUSTOMER SENTIMENT
        </div>
      </div>

      {/* 3-Column Spread */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 font-sans">
        <div className="border-l border-neutral-800 pl-0 md:pl-6">
          <span className="text-[11px] font-mono uppercase text-neutral-500 block mb-1">SCORE HIGHLIGHT</span>
          <span className="font-serif text-6xl text-white font-light block">{avgRating} / 5</span>
          <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
            Rated by {reviewCount} verified buyers with exceptional feedback.
          </p>
        </div>

        <div className="border-l border-neutral-800 pl-0 md:pl-6">
          <span className="text-[11px] font-mono uppercase text-neutral-500 block mb-1">RECOMMENDATION</span>
          <span className="font-serif text-6xl text-emerald-400 font-light block">{recommendation}%</span>
          <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
            Buyers would overwhelmingly recommend this product.
          </p>
        </div>

        <div className="border-l border-neutral-800 pl-0 md:pl-6">
          <span className="text-[11px] font-mono uppercase text-neutral-500 block mb-1">VERIFICATION</span>
          <span className="font-serif text-6xl text-white font-light block">310</span>
          <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
            Verified purchase receipts confirmed by system audit.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-800 pt-6 flex justify-between items-center text-xs font-mono">
        <span className="text-neutral-500">Progressive editorial reveal broadsheet layout</span>

        <button
          onClick={() => {
            setSelected(true);
            setTimeout(() => setSelected(false), 1800);
          }}
          className="px-4 py-2.5 bg-neutral-900 hover:bg-emerald-500 text-white hover:text-black border border-neutral-700 hover:border-emerald-500 rounded text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
        >
          {selected ? (
            <span className="flex items-center gap-1 font-bold">
              <Check size={14} /> Opening...
            </span>
          ) : (
            <>
              <span>Read Full Curation</span>
              <ArrowRight size={13} />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
