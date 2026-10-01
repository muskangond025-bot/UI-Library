import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function SimilarProducts12({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: "Hero 12 Black Action Cam",
      price: "$399",
      diff: "5.3K60 Video / HyperSmooth 6.0",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Insta360 Ace Pro AI Camera",
      price: "$449",
      diff: "Leica Lens / 8K Sensor",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "DJI Osmo Action 4 Combo",
      price: "$379",
      diff: "1/1.3-inch Sensor / Low Light Focus",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            12 / Split Tone Cards
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Split Image & Info Cards</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs">
          Two-tone split containers combining dark top image media with high-contrast bottom info blocks.
        </p>
      </div>

      {/* Grid of 3 Split Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-800 group"
          >
            {/* Top Dark Image Area (60% height) */}
            <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <span className="absolute top-3 left-3 bg-slate-950/90 text-amber-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-amber-500/30">
                {item.diff}
              </span>
            </div>

            {/* Bottom High Contrast Light Metadata Block (40% height) */}
            <div className="p-6 bg-slate-100 text-slate-950 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-lg leading-tight line-clamp-1">{item.title}</h3>
                <span className="text-2xl font-black text-slate-900 mt-2 block">{item.price}</span>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-300">
                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setTimeout(() => setSelectedId(null), 1800);
                  }}
                  className="w-full py-2.5 bg-slate-950 hover:bg-slate-850 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  {selectedId === item.id ? (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Check size={14} /> SELECTED!
                    </span>
                  ) : (
                    <>
                      <span>CHOOSE CAMERA</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center">
        Geometric two-tone contrast split separating visual media from action block
      </div>
    </section>
  );
}
