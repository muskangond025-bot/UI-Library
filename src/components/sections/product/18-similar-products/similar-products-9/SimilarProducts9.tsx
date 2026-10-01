import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, ShieldCheck, BatteryCharging, Leaf } from 'lucide-react';

export default function SimilarProducts9({ data }: { data?: any }) {
  const [openDrawerId, setOpenDrawerId] = useState<number | null>(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "EcoFlow Solar Generator 2000W",
      price: "$1,299",
      diff: "Solar Speed Upgrade",
      specs: { battery: "2048Wh LiFePO4", warranty: "5-Year Full", eco: "98% Recyclable" },
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "VoltMax Ultra Portable Powerbox",
      price: "$1,150",
      diff: "-4kg Weight Savings",
      specs: { battery: "1800Wh LFP", warranty: "3-Year Standard", eco: "Solar Ready" },
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Titan Power Hub Pro Dual AC",
      price: "$1,450",
      diff: "3000W Surge Peak",
      specs: { battery: "2400Wh Heavy Duty", warranty: "5-Year Pro", eco: "Quiet Zero Emissions" },
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            09 / Stacked Spec Drawer
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Spec Drawer Alternatives</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs font-sans">
          Integrated accordion drawers inside each card to inspect deep battery & warranty specs.
        </p>
      </div>

      {/* Grid of Stacked Drawer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 font-sans">
        {products.map((item) => {
          const isOpen = openDrawerId === item.id;
          return (
            <motion.div
              key={item.id}
              className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-950 mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2.5 left-2.5 bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded">
                    {item.diff}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-white">{item.name}</h3>
                <span className="text-xl font-black text-emerald-400 mt-1 block">{item.price}</span>

                {/* Spec Accordion Drawer Toggle */}
                <button
                  onClick={() => setOpenDrawerId(isOpen ? null : item.id)}
                  className="w-full mt-4 py-2 px-3 bg-slate-950 hover:bg-slate-850 rounded-lg text-xs font-mono text-slate-300 flex items-center justify-between border border-slate-800"
                >
                  <span>{isOpen ? "Hide Tech Specs" : "Expand Tech Specs"}</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-2 font-mono"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <BatteryCharging size={13} className="text-emerald-400" /> Battery
                        </span>
                        <span className="font-bold text-white">{item.specs.battery}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <ShieldCheck size={13} className="text-emerald-400" /> Warranty
                        </span>
                        <span className="font-bold text-white">{item.specs.warranty}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <Leaf size={13} className="text-emerald-400" /> Eco Rating
                        </span>
                        <span className="font-bold text-white">{item.specs.eco}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setTimeout(() => setSelectedId(null), 1800);
                  }}
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  {selectedId === item.id ? <Check size={16} /> : null}
                  {selectedId === item.id ? "MODEL SELECTED!" : "SWAP TO THIS MODEL"}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center">
        Tap accordion drawers inside cards to expand detailed battery & warranty metrics
      </div>
    </section>
  );
}
