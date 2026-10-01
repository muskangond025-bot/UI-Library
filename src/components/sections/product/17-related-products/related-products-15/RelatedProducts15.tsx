import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Sparkles, Check } from 'lucide-react';

export default function RelatedProducts15({ data }: { data?: any }) {
  const [added, setAdded] = useState<number | null>(null);

  const products = [
    { id: 1, name: "Related Accessory 15A", price: 99 + 15 * 10, rating: 4.9, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80" },
    { id: 2, name: "Companion Mount 15B", price: 49 + 15 * 5, rating: 4.8, image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80" },
    { id: 3, name: "Protection Pack 15C", price: 29 + 15 * 2, rating: 4.7, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80" },
    { id: 4, name: "Power Cable Kit 15D", price: 19 + 15 * 2, rating: 4.9, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          15. Related Products Version 15
        </span>
        <h2 className="text-3xl font-black text-white">Recommended Companion Accessories</h2>
        <p className="text-xs text-slate-400 mt-1">Explore related products designed specifically for your core setup.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl z-10 my-6">
        {products.map(item => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-slate-900/90 border border-white/10 hover:border-blue-500/50 rounded-3xl p-4 flex flex-col justify-between relative transition-all shadow-xl group"
          >
            <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-950 mb-3">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 flex items-center gap-1 text-[11px] text-amber-400 font-bold">
                <Star size={12} className="fill-amber-400" /> {item.rating}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-sm text-white line-clamp-1">{item.name}</h3>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
                <span className="text-lg font-black text-blue-400">${item.price}</span>
                <button 
                  onClick={() => { setAdded(item.id); setTimeout(() => setAdded(null), 2000); }}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1 transition-all"
                >
                  <ShoppingBag size={14} /> {added === item.id ? "Added!" : "Quick Add"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 z-10">Handpicked related gear with instant 1-click addition.</div>
    </div>
  );
}
