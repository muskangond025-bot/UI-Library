import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Trash2, Layers, ArrowRight, Check } from 'lucide-react';

export function AccountWishlist15() {
  const [items, setItems] = useState([
    {
      id: '1',
      title: 'Nike Air Max 270',
      price: '$150.00',
      oldPrice: '$180.00',
      category: 'FOOTWEAR',
      sku: 'SKU-8921',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '2',
      title: 'Oversized Denim Jacket',
      price: '$120.00',
      oldPrice: '$160.00',
      category: 'OUTERWEAR',
      sku: 'SKU-4412',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '3',
      title: 'Classic Chronograph Watch',
      price: '$210.00',
      oldPrice: '$250.00',
      category: 'ACCESSORIES',
      sku: 'SKU-9901',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '4',
      title: 'Studio Noise-Canceling Pods',
      price: '$299.00',
      oldPrice: '$349.00',
      category: 'AUDIO',
      sku: 'SKU-1029',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const removeItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setItems(prev => prev.filter(item => item.id !== id));
    setActiveIndex(0);
  };

  return (
    <section className="w-full min-h-[650px] bg-neutral-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-neutral-800 mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase font-mono tracking-widest mb-1">
              <Layers className="w-4 h-4 text-white" /> STACKED ARCHIVE // VARIANT 15
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase font-serif">
              MINIMAL <span className="italic text-neutral-400 font-serif">STACK</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest px-4 py-2 border border-neutral-800 rounded-full text-neutral-400 bg-neutral-900/50">
              {items.length} CARDS STACKED
            </span>
          </div>
        </div>

        {/* Stack Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Card Deck Stack (Ek Ke Upar Ek) */}
          <div className="lg:col-span-6 relative h-[420px] flex items-center justify-center">
            {items.map((item, idx) => {
              const offset = (idx - activeIndex + items.length) % items.length;
              const zIndex = items.length - offset;
              const translateY = offset * 22;
              const translateX = offset * 6;
              const scale = 1 - offset * 0.05;
              const opacity = 1 - offset * 0.15;
              const isFront = offset === 0;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  animate={{
                    y: translateY,
                    x: translateX,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                  className={`absolute w-full max-w-sm p-6 rounded-3xl bg-neutral-900 border ${
                    isFront ? 'border-white shadow-2xl shadow-black/80' : 'border-neutral-800'
                  } cursor-pointer select-none origin-top transition-colors`}
                >
                  <div className="flex items-center justify-between mb-4 font-mono text-xs text-neutral-400">
                    <span>{item.category}</span>
                    <span className="text-white font-bold">{item.sku}</span>
                  </div>

                  <div className="aspect-[4/3] bg-neutral-950 rounded-2xl overflow-hidden mb-5 relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="p-2 rounded-full bg-black/60 backdrop-blur-md text-rose-500">
                        <Heart className="w-4 h-4 fill-rose-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">{item.title}</h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xl font-bold text-white">{item.price}</span>
                        <span className="text-xs text-neutral-500 line-through">{item.oldPrice}</span>
                      </div>
                    </div>
                    {isFront && (
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-white text-black font-bold rounded-md">
                        ACTIVE
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Details & Actions Pane */}
          <div className="lg:col-span-6 space-y-6 bg-neutral-900/40 p-8 rounded-3xl border border-neutral-800/80 backdrop-blur-xl">
            {items[activeIndex] ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={items[activeIndex].id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="border-b border-neutral-800 pb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">CURRENT SELECTION</span>
                    <h3 className="text-3xl font-serif text-white mt-1">{items[activeIndex].title}</h3>
                    <p className="text-sm font-mono text-neutral-400 mt-2">CATEGORY: {items[activeIndex].category}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-neutral-500 uppercase tracking-wider block">PRICE</span>
                      <span className="text-3xl font-bold text-white">{items[activeIndex].price}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-emerald-400 uppercase tracking-wider font-mono flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> IN STOCK & READY
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <button className="w-full py-4 rounded-2xl bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl active:scale-98">
                      <ShoppingBag className="w-4 h-4" /> Move Selected Card to Cart
                    </button>
                    <button
                      onClick={(e) => removeItem(items[activeIndex].id, e)}
                      className="w-full py-3 rounded-2xl border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-rose-400 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" /> Remove Card from Stack
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="text-center py-12 text-neutral-500">
                <p className="text-sm font-mono">STACK EMPTY</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist15;
