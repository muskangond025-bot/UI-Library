import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, RotateCcw, Plus, Check, Sparkles, MoveDown } from 'lucide-react';

export default function FrequentlyBoughtTogether3({ data }: { data?: any }) {
  const [inCart, setInCart] = useState<number[]>([]);

  const mainProduct = { id: 0, name: "Pro Camera Body", price: 1299, image: "📸", category: "Base Unit" };

  const products = [
    { id: 1, name: "UV Lens Filter", price: 49, image: "⭕", desc: "Multi-coated protection" },
    { id: 2, name: "Battery Grip", price: 89, image: "🔋", desc: "2x extended battery life" },
    { id: 3, name: "Pro Camera Strap", price: 29, image: "🎗️", desc: "Quick-release neoprene" },
    { id: 4, name: "Cleaning Kit", price: 19, image: "🧹", desc: "Sensor & lens care" }
  ];

  const handleDragEnd = (e: any, info: any, id: number) => {
    if (info.offset.y > 80 || info.point.y > 350) {
      if (!inCart.includes(id)) setInCart(prev => [...prev, id]);
    }
  };

  const toggleItem = (id: number) => {
    setInCart(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const resetCart = () => setInCart([]);

  const subtotal = mainProduct.price + products.filter(p => inCart.includes(p.id)).reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[720px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-3 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
          <Sparkles size={14} className="text-violet-400" />
          <span className="text-violet-300 font-semibold text-xs tracking-wider uppercase">Interactive Builder</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Drop & Build Bundle</h2>
        <p className="text-slate-400 text-sm mt-1 flex items-center justify-center gap-1">
          <span>Drag accessories down to your tray or tap to add</span>
        </p>
      </div>

      {/* Floating Items Area */}
      <div className="w-full max-w-3xl my-6 z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p, i) => {
            const isAdded = inCart.includes(p.id);
            return (
              <motion.div
                key={p.id}
                drag={!isAdded}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0.4}
                onDragEnd={(e, info) => handleDragEnd(e, info, p.id)}
                onClick={() => toggleItem(p.id)}
                className={`relative rounded-2xl p-4 flex flex-col items-center justify-between cursor-grab active:cursor-grabbing border backdrop-blur-xl transition-all duration-300 ${
                  isAdded 
                    ? 'bg-slate-900/40 border-emerald-500/30 opacity-40 scale-95 shadow-none' 
                    : 'bg-white/5 border-white/10 hover:border-violet-500/50 hover:bg-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
                }`}
                animate={{ 
                  y: isAdded ? 0 : [0, -6, 0],
                }}
                transition={!isAdded ? { y: { repeat: Infinity, duration: 3.5, delay: i * 0.3, ease: "easeInOut" } } : { type: "spring", stiffness: 300, damping: 25 }}
                whileHover={{ scale: isAdded ? 0.95 : 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="w-full flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 uppercase">
                    +${p.price}
                  </span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                    isAdded ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {isAdded ? <Check size={12} /> : <Plus size={12} />}
                  </div>
                </div>

                <div className="text-3xl my-2 filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                  {p.image}
                </div>

                <div className="text-center w-full">
                  <h4 className="font-semibold text-white text-xs truncate">{p.name}</h4>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3D Drop Tray Container */}
      <div className="w-full max-w-3xl z-10">
        <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          
          {/* Drop indicator header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Your Custom Kit Tray</span>
            </div>
            {inCart.length > 0 && (
              <button 
                onClick={resetCart}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
              >
                <RotateCcw size={12} /> Reset
              </button>
            )}
          </div>

          {/* Tray Grid / Slots */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
            
            {/* Main Base Item */}
            <div className="bg-violet-950/40 border border-violet-500/40 rounded-2xl p-3 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <span className="text-xs font-bold text-violet-400 mb-1 uppercase tracking-wider text-[9px]">Base Unit</span>
              <div className="text-2xl mb-1">{mainProduct.image}</div>
              <span className="text-xs font-semibold text-white truncate w-full">{mainProduct.name}</span>
              <span className="text-[11px] font-bold text-violet-300">${mainProduct.price}</span>
            </div>

            {/* Added Accessories / Drop targets */}
            {[0, 1, 2, 3].map((slotIndex) => {
              const item = products.find(p => inCart[slotIndex] === p.id);
              return (
                <div 
                  key={slotIndex} 
                  className={`h-24 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-2 relative transition-all duration-300 ${
                    item 
                      ? 'border-emerald-500/50 bg-emerald-950/20' 
                      : 'border-white/10 bg-white/[0.02]'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {item ? (
                      <motion.div 
                        key={item.id}
                        initial={{ scale: 0, y: -20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="flex flex-col items-center text-center w-full relative"
                      >
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-xs"
                        >
                          ×
                        </button>
                        <span className="text-2xl mb-1">{item.image}</span>
                        <span className="text-[10px] font-medium text-white truncate w-full">{item.name}</span>
                        <span className="text-[10px] font-bold text-emerald-400">+${item.price}</span>
                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-600">
                        <MoveDown size={16} className="mb-1 opacity-40 animate-bounce" />
                        <span className="text-[9px] font-medium tracking-wider uppercase opacity-40">Slot {slotIndex + 1}</span>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar: Total & CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div>
              <div className="text-slate-400 text-xs font-medium">Kit Subtotal ({1 + inCart.length} items)</div>
              <div className="text-2xl font-extrabold text-white flex items-baseline gap-1">
                <span>${subtotal}</span>
                {inCart.length > 0 && (
                  <span className="text-xs font-normal text-emerald-400">
                    (Saved ${(inCart.length * 15)})
                  </span>
                )}
              </div>
            </div>

            <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              <ShoppingBag size={18} /> Add Complete Kit to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
