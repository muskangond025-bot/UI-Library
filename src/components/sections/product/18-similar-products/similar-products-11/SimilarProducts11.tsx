import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Eye, ArrowUpRight } from 'lucide-react';

export default function SimilarProducts11({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: "OmniSound Wireless Earbuds",
      price: "$179",
      tag: "Spatial Audio",
      hiddenSpecs: "Custom 11mm Drivers • 32h Total Playback • IPX7 Water Resistant",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "AuraFit Active Sport Buds",
      price: "$149",
      tag: "Wingtip Fit",
      hiddenSpecs: "Ear-Hook Secure Grip • Transparency Mode • Fast Charge 10min = 2h",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Studio Studio True Wireless Pro",
      price: "$199",
      tag: "Dual Drivers",
      hiddenSpecs: "Hybrid Active Noise Cancellation • Wireless Qi Case • Multi-point BT",
      image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4d?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-zinc-950 text-white p-6 md:p-12 rounded-3xl border border-zinc-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-md text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            11 / Hover Reveal Cards
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Interactive Reveal Alternatives</h2>
        </div>
        <p className="text-xs text-zinc-400 max-w-xs font-sans">
          Hover cards to unveil embedded audio benchmark specs and hidden feature comparisons.
        </p>
      </div>

      {/* Grid of 3 hover-reveal cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 font-sans">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all shadow-2xl flex flex-col justify-between"
          >
            {/* Image Canvas with Overlay Reveal on Hover */}
            <div className="relative w-full h-60 overflow-hidden bg-zinc-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <span className="absolute top-3 left-3 bg-zinc-950/90 border border-zinc-800 text-amber-400 text-xs font-mono px-3 py-1 rounded">
                {item.tag}
              </span>

              {/* Hover Backdrop Mask showing hidden specs */}
              <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-center text-center">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2 block">
                  HIDDEN BENCHMARKS
                </span>
                <p className="text-xs text-zinc-200 leading-relaxed font-mono">
                  {item.hiddenSpecs}
                </p>
              </div>
            </div>

            {/* Bottom Card Info */}
            <div className="p-5 bg-zinc-950 border-t border-zinc-800/80">
              <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-800">
                <span className="text-xl font-black text-amber-400">{item.price}</span>
                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setTimeout(() => setSelectedId(null), 1800);
                  }}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                  {selectedId === item.id ? (
                    <span className="flex items-center gap-1">
                      <Check size={14} /> Selected
                    </span>
                  ) : (
                    <>
                      <span>Select Buds</span>
                      <ArrowUpRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-zinc-500 font-mono border-t border-zinc-800 pt-4 text-center">
        Hover card canvas to reveal hidden spec overlay
      </div>
    </section>
  );
}
