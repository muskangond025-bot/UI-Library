import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, Check, Star } from 'lucide-react';

export default function ProductBundles2({ data }: { data?: any }) {
  const [activeTier, setActiveTier] = useState(1);

  const tiers = [
    {
      id: 0,
      name: "Starter Pod Kit",
      price: 249,
      originalPrice: 299,
      rating: 4.8,
      items: ["USB Condenser Mic", "Desktop Arm Stand"],
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 1,
      name: "Pro Streamer Suite",
      price: 499,
      originalPrice: 629,
      rating: 4.9,
      items: ["XLR Studio Mic", "Audio Interface", "Dual LED Panel Light"],
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Ultimate Broadcast System",
      price: 899,
      originalPrice: 1149,
      rating: 5.0,
      items: ["4K Cinema Cam", "XLR Studio Mic", "Stream Deck", "Pro Ring Light"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Infinite Tier Reel
        </span>
        <h2 className="text-3xl font-extrabold">Choose Your Broadcast Tier</h2>
      </div>

      <div className="flex items-center gap-3 bg-slate-900 p-1.5 rounded-2xl border border-white/10 z-10 my-4">
        {tiers.map((t, i) => (
          <button
            key={i}
            onClick={() => setActiveTier(i)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTier === i ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Main Active Card */}
      <div className="w-full max-w-md bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative z-10">
        <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4">
          <img src={tiers[activeTier].image} alt={tiers[activeTier].name} className="w-full h-full object-cover" />
        </div>

        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-extrabold text-white">{tiers[activeTier].name}</h3>
            <span className="text-xs text-amber-400 font-bold flex items-center gap-1 mt-0.5">
              <Star size={13} className="fill-amber-400" /> {tiers[activeTier].rating} Rated
            </span>
          </div>

          <div className="text-right">
            <span className="text-2xl font-black text-cyan-400">${tiers[activeTier].price}</span>
            <span className="text-xs text-slate-500 line-through block">${tiers[activeTier].originalPrice}</span>
          </div>
        </div>

        <div className="space-y-1.5 my-4 bg-slate-950 p-3 rounded-2xl border border-white/5">
          {tiers[activeTier].items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <Check size={14} className="text-cyan-400" /> {item}
            </div>
          ))}
        </div>

        <button className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg">
          <ShoppingBag size={16} /> Get {tiers[activeTier].name}
        </button>
      </div>

    </div>
  );
}
