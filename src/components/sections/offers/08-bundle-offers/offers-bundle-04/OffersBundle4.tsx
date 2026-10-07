import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Copy, Check, ShieldCheck, Tag, CircleDot } from 'lucide-react';

export function OffersBundle4() {
  const [selectedHotspots, setSelectedHotspots] = useState<number[]>([1, 2, 3]);
  const [added, setAdded] = useState(false);

  const outfitItems = [
    { id: 1, name: 'Vintage Leather Biker Jacket', price: 150, pos: 'top-[22%] left-[48%]' },
    { id: 2, name: 'Slim-Fit Denim Jeans', price: 90, pos: 'top-[58%] left-[45%]' },
    { id: 3, name: 'Artisan Leather Boots', price: 120, pos: 'bottom-[12%] left-[48%]' },
  ];

  const toggleHotspot = (id: number) => {
    if (selectedHotspots.includes(id)) {
      setSelectedHotspots(selectedHotspots.filter((i) => i !== id));
    } else {
      setSelectedHotspots([...selectedHotspots, id]);
    }
  };

  const totalPrice = selectedHotspots.reduce((sum, id) => {
    const item = outfitItems.find((i) => i.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const outfitDiscounted = totalPrice * 0.75; // 25% OFF full outfit
  const savings = totalPrice - outfitDiscounted;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0c0816] text-white rounded-3xl border border-pink-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/80 border border-pink-400/40 text-pink-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <CircleDot className="w-3.5 h-3.5 text-pink-400 animate-ping" />
          <span>"SHOP THE LOOK" INTERACTIVE OUTFIT BUNDLE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-white to-purple-300 tracking-tight">
          Shop The Complete Look Bundle
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Click hotspot dots on the model below to select outfit pieces & claim 25% full outfit bundle savings.
        </p>
      </div>

      {/* Main Grid: Interactive Photo + Sidebar Summary */}
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Side: Interactive Lifestyle Hotspot Canvas */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border-2 border-pink-500/40 shadow-2xl h-[420px] bg-slate-900 flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />

          {/* Model Icon / Visual Placeholder */}
          <div className="text-center space-y-2 z-10 opacity-70">
            <Tag className="w-16 h-16 text-pink-400 mx-auto" />
            <span className="text-xs font-mono font-bold text-pink-300 tracking-widest block uppercase">
              INTERACTIVE OUTFIT CANVAS
            </span>
          </div>

          {/* Hotspot Dots */}
          {outfitItems.map((item) => {
            const isSelected = selectedHotspots.includes(item.id);

            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.2 }}
                onClick={() => toggleHotspot(item.id)}
                className={`absolute ${item.pos} z-20 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs shadow-xl transition-all ${
                  isSelected ? 'bg-pink-500 text-white shadow-pink-500/50 scale-110' : 'bg-slate-900/80 text-slate-400'
                }`}
              >
                <CircleDot className="w-4 h-4" />
              </motion.button>
            );
          })}
        </div>

        {/* Right Side: Outfit Summary & Add All CTA */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest">
              OUTFIT PIECES INCLUDED ({selectedHotspots.length}/3 SELECTED)
            </span>

            {outfitItems.map((item) => {
              const isSelected = selectedHotspots.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => toggleHotspot(item.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-pink-500 shadow-md'
                      : 'bg-slate-950/60 border-slate-800 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      isSelected ? 'bg-pink-500 text-white' : 'bg-slate-800 text-slate-500'
                    }`}>
                      {item.id}
                    </span>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  </div>
                  <span className="text-sm font-mono font-bold text-pink-300">${item.price}.00</span>
                </div>
              );
            })}
          </div>

          {/* Price & CTA */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-pink-500/40 shadow-xl space-y-4 font-mono">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 line-through block">${totalPrice.toFixed(2)}</span>
                <span className="text-3xl font-black text-white">${outfitDiscounted.toFixed(2)}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-pink-500 text-slate-950 text-xs font-black uppercase">
                SAVE ${savings.toFixed(2)} (25% OFF)
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:brightness-110 text-white font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-pink-500/30 active:scale-95 transition-all"
            >
              {added ? <Check className="w-5 h-5 text-white" /> : <ShoppingBag className="w-5 h-5" />}
              <span>{added ? 'FULL OUTFIT ADDED!' : `BUY COMPLETE OUTFIT (${selectedHotspots.length} ITEMS)`}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersBundle4;
