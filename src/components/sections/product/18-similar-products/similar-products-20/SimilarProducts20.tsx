import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

export default function SimilarProducts20({ data }: { data?: any }) {
  const [switchedId, setSwitchedId] = useState<number | null>(null);
  const [comparedId, setComparedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "Ultra-Lightweight Carbon Laptop 14\"",
      price: "$1,399",
      diff: "-$200 lower than active model",
      rating: 4.9,
      badge: "Top Recommendation",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "WorkStation Pro Touch 16\" OLED",
      price: "$1,699",
      diff: "+40% Graphics Power",
      rating: 4.8,
      badge: "Power Pick",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Compact Convertible 360 Fold",
      price: "$1,249",
      diff: "Stylus Included / Touchscreen",
      rating: 4.7,
      badge: "Versatile",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Executive Magnesium Slim 15\"",
      price: "$1,550",
      diff: "20h Battery Life",
      rating: 4.9,
      badge: "Best Battery",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 z-10">
        <div>
          <span className="px-3.5 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            20 / Premium Editorial Suite
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Comparison Suite & Recommendation Rail
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <ShieldCheck size={16} className="text-indigo-400" />
          <span>Verified Alternative Matrix</span>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 z-10">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 flex flex-col justify-between shadow-2xl group transition-all"
          >
            <div>
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-950 mb-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <span className="absolute top-2.5 left-2.5 bg-indigo-950/90 text-indigo-300 border border-indigo-500/40 text-[10px] font-bold px-2 py-0.5 rounded">
                  {item.badge}
                </span>
                <div className="absolute bottom-2.5 right-2.5 bg-slate-950/90 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 flex items-center gap-1 text-[11px] text-amber-400 font-bold">
                  <Star size={12} className="fill-amber-400" /> {item.rating}
                </div>
              </div>

              <span className="text-[11px] font-mono text-indigo-400 block mb-1">{item.diff}</span>
              <h3 className="font-extrabold text-sm text-white line-clamp-2 leading-snug group-hover:text-indigo-300 transition-colors">
                {item.name}
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-2xl font-black text-indigo-400 block mb-3">{item.price}</span>

              {/* Dual CTA buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setComparedId(item.id);
                    setTimeout(() => setComparedId(null), 1800);
                  }}
                  className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold rounded-lg border border-slate-700 transition-all"
                >
                  {comparedId === item.id ? "Comparing..." : "Compare"}
                </button>
                <button
                  onClick={() => {
                    setSwitchedId(item.id);
                    setTimeout(() => setSwitchedId(null), 1800);
                  }}
                  className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 transition-all shadow-md active:scale-95"
                >
                  {switchedId === item.id ? <Check size={14} /> : <RefreshCw size={13} />}
                  {switchedId === item.id ? "Switched" : "Switch"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate-500 border-t border-slate-800 pt-4 z-10 gap-2">
        <span>All alternative models backed by 30-day money back guarantee</span>
        <span className="text-indigo-400 font-bold">4 matching options verified</span>
      </div>
    </section>
  );
}
