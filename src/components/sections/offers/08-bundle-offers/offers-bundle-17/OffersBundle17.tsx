import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Check, ShoppingCart, Sparkles, ChevronRight } from 'lucide-react';

export function OffersBundle17() {
  const [activePanel, setActivePanel] = useState(1); // 0: Basic, 1: Pro, 2: Deluxe
  const [ordered, setOrdered] = useState(false);

  const panels = [
    {
      title: 'Starter Pack',
      subtitle: 'Essential Creator Tools',
      discount: '15% OFF',
      origPrice: '$150.00',
      price: '$127.50',
      items: ['HD Web Camera (1080p)', 'Mini Desktop Tripod', 'Basic Lapel Mic'],
    },
    {
      title: 'Pro Creator Bundle',
      subtitle: 'Most Popular Choice',
      discount: '30% OFF',
      origPrice: '$350.00',
      price: '$245.00',
      items: ['4K Studio Camera', 'Ring Light 18" Softbox', 'Cardioid USB Condenser Mic'],
      popular: true,
    },
    {
      title: 'Deluxe Studio Suite',
      subtitle: 'Complete Broadcast Setup',
      discount: '45% OFF',
      origPrice: '$750.00',
      price: '$412.50',
      items: ['Dual 4K Streaming Cam', 'Motorized Boom Arm', 'XLR Studio Mic + Mixer Console'],
    },
  ];

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => setOrdered(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-slate-950 text-white rounded-3xl border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.15)] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/30 shadow-inner">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>TRI-FOLD PAMPHLET BROCHURE UNFOLD</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Creator Studio Pamphlet
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
          Unfold the brochure to explore our 3 curated creator bundles with up to 45% tier discount!
        </p>
      </div>

      {/* Tri-Fold Panels Container */}
      <div className="w-full max-w-4xl relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {panels.map((p, idx) => {
          const isActive = activePanel === idx;
          return (
            <motion.div
              key={idx}
              onClick={() => setActivePanel(idx)}
              whileHover={{ y: -4 }}
              className={`cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ${
                isActive
                  ? 'bg-slate-900 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.3)] ring-2 ring-indigo-500/50'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-80'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-500 text-white font-extrabold text-[10px] uppercase tracking-widest shadow-md">
                  ★ MOST POPULAR
                </div>
              )}

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight">{p.title}</h3>
                    <p className="text-xs text-indigo-300 font-medium">{p.subtitle}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                    {p.discount}
                  </span>
                </div>

                {/* Items List */}
                <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Select Indicator */}
              <div className="pt-6 border-t border-slate-800 mt-6 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 line-through">{p.origPrice}</span>
                  <span className="text-2xl font-black text-white">{p.price}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePanel(idx);
                    handleOrder();
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    isActive
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {ordered && isActive ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                      <span>UNFOLDED & SAVED!</span>
                    </>
                  ) : (
                    <>
                      <span>{isActive ? 'SELECT THIS BUNDLE' : 'VIEW PAMPHLET'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default OffersBundle17;
