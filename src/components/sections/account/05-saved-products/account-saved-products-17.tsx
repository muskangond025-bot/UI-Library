import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, ShoppingBag, Check, RotateCcw } from 'lucide-react';

export function AccountSavedProducts17() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Obsidian');

  const colors = [
    { name: 'Obsidian', hex: '#0f172a', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80' },
    { name: 'Crimson', hex: '#be123c', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
    { name: 'Cyber Blue', hex: '#0284c7', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' }
  ];

  const sizes = ['S', 'M', 'L', 'XL'];

  const currentColor = colors.find(c => c.name === selectedColor) || colors[0];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Sliders className="w-4 h-4 text-indigo-400" /> SAVED VARIANT CUSTOMIZER
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Product & Variant Hub
            </h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">
            Variant 17
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-950 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          {/* Product Image Preview */}
          <div className="lg:col-span-6 relative aspect-square rounded-2xl overflow-hidden bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentColor.name}
                src={currentColor.image}
                alt={currentColor.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <span className="absolute bottom-4 left-4 text-xs font-mono uppercase tracking-wider bg-slate-950/80 px-3 py-1.5 rounded-xl backdrop-blur-md text-slate-300">
              {selectedColor} / Size {selectedSize}
            </span>
          </div>

          {/* Variant Selectors & Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">SAVED PRODUCT</span>
              <h3 className="text-3xl font-extrabold text-white mt-1">Oversized Streetwear Jacket</h3>
              <p className="text-2xl font-bold text-indigo-400 mt-2">$180.00</p>
            </div>

            {/* Color Swatches */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Select Color Variant
              </label>
              <div className="flex gap-3">
                {colors.map((c) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        isSelected
                          ? 'bg-slate-800 border-indigo-500 text-white shadow-lg'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: c.hex }} />
                      {c.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Pills */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Select Size Option
              </label>
              <div className="flex gap-3">
                {sizes.map((s) => {
                  const isSelected = selectedSize === s;
                  return (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`relative px-5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="savedSizePill"
                          className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30 -z-10"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      Size {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Final Action Button */}
            <div className="pt-4">
              <button className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 transition-all active:scale-98">
                <ShoppingBag className="w-4 h-4" /> Move ({selectedColor} / {selectedSize}) to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts17;
