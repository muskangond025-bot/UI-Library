import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check } from 'lucide-react';

export default function ReviewSummary10({ data }: { data?: any }) {
  const [clicked, setClicked] = useState(false);

  const avgRating = data?.averageRating || 4.8;
  const reviewCount = data?.reviewCount || 324;
  const recommendation = data?.recommendationPercentage || 94;

  return (
    <section className="w-full min-h-[580px] bg-stone-950 text-stone-100 p-8 md:p-14 rounded-3xl font-serif border border-stone-800 relative select-none flex flex-col justify-between">
      {/* Top Bar Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-8 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-2 block">
            10 / TYPOGRAPHY-FIRST SUMMARY
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-stone-100 tracking-tight italic">
            Minimal Review Index
          </h2>
        </div>
        <p className="text-stone-400 text-sm max-w-md font-sans">
          Ultra-clean presentation prioritizing typography alignment and structural line rules.
        </p>
      </div>

      {/* Typography Main Display */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center font-sans">
        <div className="border-r border-stone-800 pr-0 md:pr-6">
          <span className="text-[11px] font-mono uppercase text-stone-500 block mb-1">SCORE INDEX</span>
          <span className="font-serif text-6xl font-light text-amber-400 block">{avgRating} / 5.0</span>
          <div className="flex items-center gap-1 text-amber-400 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-amber-400 stroke-amber-400" />
            ))}
          </div>
        </div>

        <div className="border-r border-stone-800 pr-0 md:pr-6">
          <span className="text-[11px] font-mono uppercase text-stone-500 block mb-1">APPROVAL RATE</span>
          <span className="font-serif text-5xl font-light text-white block">{recommendation}%</span>
          <span className="text-xs font-mono text-stone-400 mt-2 block">Positive customer recommendation</span>
        </div>

        <div>
          <span className="text-[11px] font-mono uppercase text-stone-500 block mb-1">VERIFIED COUNT</span>
          <span className="font-serif text-5xl font-light text-white block">{reviewCount}</span>
          <span className="text-xs font-mono text-stone-400 mt-2 block">Authentic buyer reviews logged</span>
        </div>
      </div>

      {/* Footer & CTA */}
      <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs font-mono text-stone-500">
          High-whitespace typography-first structure with thin line rules
        </span>

        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 1800);
          }}
          className="group relative text-xs font-mono uppercase tracking-wider text-stone-300 hover:text-white flex items-center gap-2 py-1"
        >
          {clicked ? (
            <span className="text-emerald-400 flex items-center gap-1 font-bold">
              <Check size={14} /> Opening Form...
            </span>
          ) : (
            <>
              <span>Write Review</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300" />
        </button>
      </div>
    </section>
  );
}
