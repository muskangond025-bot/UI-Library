import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Sparkles, Copy, Check, ShieldCheck, Crown, ShoppingBag } from 'lucide-react';

export function OffersBundle5() {
  const [selectedPack, setSelectedPack] = useState<0 | 1 | 2>(1);
  const [added, setAdded] = useState(false);

  const packages = [
    { name: 'Starter Creator Pack', price: '$149', origPrice: '$199', discount: '25% OFF', items: ['Microphone Body', 'Desktop Stand', 'Pop Filter'], badge: 'ENTRY LEVEL' },
    { name: 'Pro Studio Creator Kit', price: '$299', origPrice: '$450', discount: '35% OFF', items: ['XLR Condenser Mic', 'Boom Arm Stand', 'Audio Interface', 'Studio Headphones'], badge: 'MOST POPULAR' },
    { name: 'Ultimate Broadcast Bundle', price: '$499', origPrice: '$850', discount: '40% OFF', items: ['Dual Flagship Mics', 'Heavy Boom Arm', 'Multi-Channel Mixer', 'Acoustic Panels', 'Pro Cables'], badge: 'BEST VALUE' },
  ];

  const current = packages[selectedPack];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#090b14] text-white rounded-3xl border border-purple-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Crown className="w-3.5 h-3.5 text-amber-300" />
          <span>STARTER VS PRO VS ULTIMATE PACKAGE SWITCHER</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-pink-300 tracking-tight">
          Choose Your Creator Bundle Pack
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
          Compare & select your preferred studio package tier below with up to 40% instant bundle savings.
        </p>
      </div>

      {/* Main Package Grid Container */}
      <div className="w-full max-w-4xl relative z-10 space-y-8">
        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          {packages.map((pkg, idx) => {
            const isSelected = selectedPack === idx;

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedPack(idx as 0 | 1 | 2)}
                className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 relative ${
                  isSelected
                    ? 'bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 border-purple-400 shadow-xl shadow-purple-600/30'
                    : 'bg-slate-950/80 border-slate-800 opacity-60 hover:opacity-100'
                }`}
              >
                {/* Badge Header */}
                <div className="flex items-center justify-between border-b border-purple-500/30 pb-3 font-mono">
                  <span className="text-[10px] font-bold text-purple-300 uppercase">
                    {pkg.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-purple-500 text-slate-950 font-black text-[10px] uppercase">
                    {pkg.discount}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 font-mono pt-1">
                    <span className="text-xs text-slate-400 line-through">{pkg.origPrice}</span>
                    <span className="text-3xl font-black text-white">{pkg.price}</span>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-2 text-xs font-sans text-slate-300 border-t border-purple-500/20 pt-3">
                  <span className="font-mono text-[10px] text-purple-300 font-bold block uppercase">
                    INCLUDED ACCESSORIES:
                  </span>
                  {pkg.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Package CTA Bar */}
        <motion.div
          key={selectedPack}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-purple-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left font-mono"
        >
          <div>
            <span className="text-xs font-bold text-purple-300 uppercase block">
              SELECTED PACKAGE: {current.name}
            </span>
            <h4 className="text-2xl font-black text-white mt-0.5">{current.price} Package Deal</h4>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:brightness-110 text-white font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 active:scale-95 transition-all whitespace-nowrap"
          >
            {added ? <Check className="w-5 h-5 text-white" /> : <ShoppingBag className="w-5 h-5" />}
            <span>{added ? 'BUNDLE PACK ADDED TO CART!' : `ADD ${current.name.toUpperCase()} TO CART`}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle5;
