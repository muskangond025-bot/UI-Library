import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function RecommendedProducts8({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      issue: "CURATED EDITION — 01",
      title: "Vanguard Minimalist Timepiece",
      specs: "Swiss Automatic / Sapphire Crystal",
      price: "$450",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      issue: "CURATED EDITION — 02",
      title: "Chrono Classic Leather Edition",
      specs: "Italian Leather / 50m Water Resistance",
      price: "$420",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      issue: "CURATED EDITION — 03",
      title: "Monochrome Matte Ceramic",
      specs: "Black Ceramic Case / Exhibition Back",
      price: "$510",
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[640px] bg-[#0c0d0e] text-[#e5e5e5] p-8 md:p-14 rounded-3xl border border-neutral-800 font-serif select-none flex flex-col justify-between">
      {/* Masthead Header */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            <Sparkles size={14} />
            <span>CURATED EDITION</span>
            <span>/</span>
            <span>RECOMMENDED SELECTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight font-serif italic">
            Magazine Recommendation Spread
          </h2>
        </div>
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest text-right">
          PERSONALIZED EDITORIAL SELECTION
        </div>
      </div>

      {/* 3-Column Spread */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 font-sans">
        {articles.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="flex flex-col justify-between border-l border-neutral-800 pl-0 md:pl-6 group"
          >
            <div>
              <span className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider block mb-2">
                {item.issue}
              </span>
              <div className="w-full h-56 rounded-md overflow-hidden bg-neutral-900 mb-5 border border-neutral-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
              </div>

              <h3 className="font-serif text-2xl text-white font-normal leading-tight group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-sans">
                {item.specs}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="font-serif text-2xl font-light text-emerald-400">{item.price}</span>
              <button
                onClick={() => {
                  setSelected(item.id);
                  setTimeout(() => setSelected(null), 1800);
                }}
                className="px-4 py-2.5 bg-neutral-900 hover:bg-emerald-500 text-white hover:text-black border border-neutral-700 hover:border-emerald-500 rounded text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
              >
                {selected === item.id ? (
                  <span className="flex items-center gap-1 font-bold">
                    <Check size={14} /> Selected
                  </span>
                ) : (
                  <>
                    <span>Select Model</span>
                    <ArrowRight size={13} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-neutral-800 pt-4 flex justify-between items-center text-xs font-mono text-neutral-500">
        <span>MAGAZINE EDITORIAL SPREAD</span>
        <span>3 CURATED PIECES</span>
      </div>
    </section>
  );
}
