import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function RecommendedProducts14({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "Quantum M3 Max Workstation",
      price: "$2,899",
      badge: "STORY STEP 1",
      step1: "Step 1: Core Performance Foundation",
      step2: "Step 2: 64GB RAM / 2TB SSD Storage",
      step3: "Step 3: Recommended ProCare Warranty",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "StudioBook OLED Creator Laptop",
      price: "$2,649",
      badge: "STORY STEP 2",
      step1: "Step 1: Color Calibrated 4K Display",
      step2: "Step 2: Dual Stylus Input Support",
      step3: "Step 3: Portable Creator Package",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> STORY CURATION
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Vertical Product Story Flow</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs">
          Sequential story breakdown with horizontal clip reveal step animations.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 font-sans">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between shadow-2xl group transition-all"
          >
            <div>
              <div className="relative w-full h-52 rounded-xl overflow-hidden bg-slate-950 mb-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-2.5 left-2.5 bg-cyan-950/90 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-1 rounded">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-extrabold text-lg text-white">{item.name}</h3>

              <div className="mt-5 space-y-3 pt-3 border-t border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">1</div>
                  <span>{item.step1}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">2</div>
                  <span>{item.step2}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">3</div>
                  <span>{item.step3}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-2xl font-black text-cyan-400">{item.price}</span>
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-lg"
              >
                {selectedId === item.id ? (
                  <span className="flex items-center gap-1 font-bold">
                    <Check size={16} /> STORY ADDED!
                  </span>
                ) : (
                  <>
                    <span>SELECT STORY PICK</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center">
        Horizontal clip-path reveal with sequential story flow connectors
      </div>
    </section>
  );
}
