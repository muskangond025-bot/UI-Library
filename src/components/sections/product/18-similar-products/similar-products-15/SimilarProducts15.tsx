import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, DollarSign, Cpu } from 'lucide-react';

export default function SimilarProducts15({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "Quantum M3 Max Workstation",
      price: "$2,899",
      diff: "-$300 Savings",
      step1: "Price: $2,899 (Save $300)",
      step2: "Spec: 64GB RAM / 2TB SSD",
      step3: "Warranty: 3-Year ProCare",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "StudioBook OLED Creator Laptop",
      price: "$2,649",
      diff: "4K OLED Display",
      step1: "Price: $2,649 (Save $550)",
      step2: "Spec: 120Hz Touch OLED",
      step3: "Warranty: 2-Year Global",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Precision Blade Ultra Slim",
      price: "$3,100",
      diff: "Lightest 16-inch",
      step1: "Price: $3,100 (Premium)",
      step2: "Spec: Vapor Chamber Cooling",
      step3: "Warranty: VIP On-Site",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            15 / Vertical Flow Cards
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">3-Step Vertical Flow Cards</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs font-sans">
          Step-by-step verification flow breaking down price, hardware specs, and warranty coverage.
        </p>
      </div>

      {/* Grid of 3 Vertical Flow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 font-sans">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between shadow-2xl group transition-all"
          >
            <div>
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-950 mb-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-2.5 left-2.5 bg-cyan-950/90 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-1 rounded">
                  {item.diff}
                </span>
              </div>

              <h3 className="font-extrabold text-base text-white">{item.name}</h3>

              {/* 3-Step Flow list */}
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

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
              >
                {selectedId === item.id ? (
                  <span className="flex items-center gap-1">
                    <Check size={16} /> STEP 3 CONFIRMED!
                  </span>
                ) : (
                  <>
                    <span>CONFIRM ALTERNATIVE</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center">
        Step-by-step decision verification model
      </div>
    </section>
  );
}
