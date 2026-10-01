import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, SlidersHorizontal } from 'lucide-react';

export default function SimilarProducts1({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Monolith Studio Headphones",
      subtitle: "Active Noise Canceling / 40h Battery",
      price: "$299",
      diff: "-$50 lower than active item",
      badge: "Best Value",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Artisan Wood Edition Wireless",
      subtitle: "Walnut Trim / Custom DAC Audio",
      price: "$380",
      diff: "Premium Acoustic Chamber",
      badge: "Craft Series",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Ultralight Carbon ANC Headset",
      subtitle: "185g Weight / Dual Mic Beamforming",
      price: "$310",
      diff: "30% Lighter Frame",
      badge: "Lightest",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Studio Master Reference 90",
      subtitle: "Flat Response / Hard Travel Case Included",
      price: "$349",
      diff: "Audiophile Tuned",
      badge: "Reference",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-stone-950 text-stone-100 p-8 md:p-14 rounded-3xl font-serif border border-stone-800 relative overflow-hidden select-none flex flex-col justify-between">
      {/* Top Bar Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-8 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-2 block">
            01 / Editorial Selection
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-stone-100 tracking-tight">
            Similar Alternatives
          </h2>
        </div>
        <p className="text-stone-400 text-sm max-w-md font-sans">
          Refined minimalist options with comparable acoustic drivers and price points.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10 font-sans">
        {products.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col justify-between border-r last:border-r-0 border-stone-800 pr-0 sm:pr-6"
          >
            <div>
              <div className="relative w-full aspect-[4/5] bg-stone-900 overflow-hidden mb-5 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <span className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-amber-400 border border-stone-800">
                  {item.badge}
                </span>
              </div>

              <span className="text-xs text-stone-500 font-mono block mb-1">{item.diff}</span>
              <h3 className="font-serif text-lg font-normal text-stone-100 group-hover:text-amber-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                {item.subtitle}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center justify-between">
              <span className="text-xl font-light font-serif text-amber-400">{item.price}</span>
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="group/btn relative text-xs font-mono tracking-wider uppercase text-stone-300 hover:text-white flex items-center gap-1.5 py-1"
              >
                {selectedId === item.id ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check size={14} /> Selected
                  </span>
                ) : (
                  <>
                    <span>Compare Specs</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 group-hover/btn:w-full transition-all duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer minimal info */}
      <div className="border-t border-stone-800 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-stone-500 gap-2">
        <span>Free express delivery & 2-year warranty included</span>
        <span>4 matching models found</span>
      </div>
    </section>
  );
}
