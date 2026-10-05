import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Trash2, Sparkles } from 'lucide-react';

export function AccountWishlist1() {
  const [items, setItems] = useState([
    { id: '1', name: 'Nike Air Max 270', price: '$150', oldPrice: '$180', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80', category: 'Footwear', inStock: true },
    { id: '2', name: 'Oversized Street Hoodie', price: '$85', oldPrice: '$110', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80', category: 'Apparel', inStock: true },
    { id: '3', name: 'Classic Leather Chronograph', price: '$220', oldPrice: '$260', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', category: 'Accessories', inStock: true },
    { id: '4', name: 'Studio Noise-Canceling Pods', price: '$299', oldPrice: '$349', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', category: 'Tech', inStock: false }
  ]);

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-slate-800 mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs uppercase font-bold tracking-widest">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> Saved Collections
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">Your Wishlist</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
              {items.length} Items Saved
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="group bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/60 backdrop-blur-md text-slate-400 hover:text-rose-400 hover:bg-slate-950 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-slate-950/70 text-slate-300 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-lg font-bold text-white">{item.price}</span>
                      <span className="text-xs text-slate-500 line-through">{item.oldPrice}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20 active:scale-95">
                    <ShoppingBag className="w-4 h-4" /> Move to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist1;
