import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export function AccountSavedProducts1() {
  const item = {
    name: 'Oversized Streetwear Jacket',
    category: 'Outerwear',
    price: '$180',
    oldPrice: '$220',
    savedDate: 'September 25, 2026',
    status: 'In Stock',
    size: 'Medium',
    color: 'Obsidian Black',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-widest mb-2">
          <Bookmark className="w-4 h-4 fill-rose-500 text-rose-500" /> Saved Product Focal
        </div>
        <h2 className="text-3xl font-bold text-white mb-8">Saved Item Spotlight</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 aspect-square rounded-2xl overflow-hidden bg-slate-800 relative"
          >
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> {item.status}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">{item.category}</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">{item.name}</h3>
              <p className="text-xs text-slate-400 mt-2">Saved on {item.savedDate}</p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white">{item.price}</span>
              <span className="text-sm text-slate-500 line-through">{item.oldPrice}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block">Selected Size</span>
                <span className="font-bold text-white text-sm">{item.size}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Color</span>
                <span className="font-bold text-white text-sm">{item.color}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 transition-all">
                <ShoppingBag className="w-4 h-4" /> Move Saved Item to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts1;
