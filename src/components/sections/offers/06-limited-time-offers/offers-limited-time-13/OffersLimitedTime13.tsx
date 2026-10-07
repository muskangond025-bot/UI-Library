import React, { useState } from 'react';
import { Plus, Check, ShoppingCart, Sparkles, ArrowRight } from 'lucide-react';

export function OffersLimitedTime13() {
  const [selectedBundle, setSelectedBundle] = useState(0);

  const BUNDLES = [
    {
      id: 1,
      title: 'Ultimate Audio Duo',
      item1: { name: 'Pro Wireless Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80' },
      item2: { name: 'Smart Charging Dock', price: 79, isFree: true, image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80' },
      totalOriginal: 378,
      bundlePrice: 299,
      savings: 79,
    },
    {
      id: 2,
      title: 'Executive Wearable Pack',
      item1: { name: 'Sapphire Edition Smartwatch', price: 399, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80' },
      item2: { name: 'Italian Leather Strap', price: 99, isFree: true, image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=400&q=80' },
      totalOriginal: 498,
      bundlePrice: 399,
      savings: 99,
    },
  ];

  const current = BUNDLES[selectedBundle];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design: BOGO Bundle Builder • Animation: Plus-Connector Magnetic Snap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Exclusive BOGO Bundle Builder
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Select your bundle tier below. Buy the main featured product and receive the companion accessory completely FREE!
          </p>
        </div>

        {/* Bundle Selector Tabs */}
        <div className="flex justify-center gap-3">
          {BUNDLES.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setSelectedBundle(idx)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                selectedBundle === idx
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {b.title}
            </button>
          ))}
        </div>

        {/* Bundle Connector Display Grid */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative">
          <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
            {/* Item 1 */}
            <div className="md:col-span-5 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-left">
              <div className="relative aspect-video rounded-xl bg-slate-950 overflow-hidden border border-slate-800">
                <img src={current.item1.image} alt={current.item1.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-white text-[10px] font-extrabold uppercase">
                  Main Item
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-base">{current.item1.name}</h4>
                <p className="text-indigo-400 font-extrabold text-lg mt-0.5">${current.item1.price}</p>
              </div>
            </div>

            {/* Plus Connector Badge */}
            <div className="md:col-span-1 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/40 border-2 border-slate-950">
                <Plus className="w-6 h-6 stroke-[3]" />
              </div>
            </div>

            {/* Item 2 */}
            <div className="md:col-span-5 p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-3 text-left relative">
              <span className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wide shadow-md">
                100% FREE GIFT
              </span>
              <div className="relative aspect-video rounded-xl bg-slate-950 overflow-hidden border border-slate-800">
                <img src={current.item2.image} alt={current.item2.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-base">{current.item2.name}</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-emerald-400 font-extrabold text-lg">FREE ($0)</span>
                  <span className="text-slate-500 line-through text-xs font-semibold">${current.item2.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bundle Summary Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-0.5">
              <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Total Savings: ${current.savings}</span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">${current.bundlePrice}</span>
                <span className="text-sm text-slate-500 line-through">${current.totalOriginal}</span>
              </div>
            </div>

            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-extrabold text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition-all duration-200 active:scale-95">
              <ShoppingCart className="w-5 h-5" />
              <span>Add Bundle To Cart</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersLimitedTime13;
