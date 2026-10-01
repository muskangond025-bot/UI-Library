import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function SimilarProducts10({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: "Titanium Pro Smartwatch Ultra",
      price: "$799",
      tag: "Outdoor Edition",
      specs: ["100m Water Resist", "Dual Frequency GPS", "7-Day Battery"],
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Ceramic Executive Smartwatch",
      price: "$899",
      tag: "Luxury Edition",
      specs: ["Sapphire Glass", "ECG Sensor", "Leather & Titanium Band"],
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-slate-900 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            10 / Side Metadata Layout
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Side Metadata Rows</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs font-sans">
          Horizontal split cards with imagery anchored on the left and full specification list on the right.
        </p>
      </div>

      {/* 2 Wide Horizontal Row Cards */}
      <div className="grid grid-cols-1 gap-6 my-8 font-sans">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -4 }}
            className="bg-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden flex flex-col md:flex-row justify-between shadow-2xl group transition-all"
          >
            {/* Left Image (40% width) */}
            <div className="md:w-5/12 h-60 md:h-auto relative overflow-hidden bg-slate-900 shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-cyan-400 border border-cyan-500/30">
                {item.tag}
              </span>
            </div>

            {/* Right Side Metadata (60% width) */}
            <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl md:text-2xl text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-2xl font-black text-cyan-400">{item.price}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-2">Key Specification Highlights</span>
                  <div className="flex flex-wrap gap-2">
                    {item.specs.map((spec, idx) => (
                      <span key={idx} className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-xs font-mono text-slate-300">
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Compatible with iOS & Android</span>

                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setTimeout(() => setSelectedId(null), 1800);
                  }}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg active:scale-95"
                >
                  {selectedId === item.id ? (
                    <span className="flex items-center gap-1 font-bold">
                      <Check size={16} /> Selected
                    </span>
                  ) : (
                    <>
                      <span>Select Alternative</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center">
        Side-by-side spec alignment layout for detailed alternative evaluation
      </div>
    </section>
  );
}
