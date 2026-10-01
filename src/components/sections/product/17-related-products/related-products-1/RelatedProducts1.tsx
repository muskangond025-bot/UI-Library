import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, Star, Heart, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RelatedProducts1({ data }: { data?: any }) {
  const [added, setAdded] = useState<number | null>(null);

  const items = [
    { id: 1, name: "Pro Studio ANC Headphones", price: 299, rating: 4.9, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" },
    { id: 2, name: "Wireless Charging Stand", price: 69, rating: 4.8, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80" },
    { id: 3, name: "Hard-Shell Leather Case", price: 49, rating: 4.7, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80" },
    { id: 4, name: "Braided Audio Cable Kit", price: 29, rating: 4.9, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[170px] rounded-full pointer-events-none" />

      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          <Sparkles size={12} className="inline mr-1" /> Glassmorphism Rail
        </span>
        <h2 className="text-3xl font-black text-white">Complete Your Audio Setup</h2>
        <p className="text-xs text-slate-400 mt-1">Recommended gear crafted to match your active purchase.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl z-10 my-6">
        {items.map(item => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-slate-900/80 border border-white/15 rounded-3xl p-4 flex flex-col justify-between backdrop-blur-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-slate-950 mb-3 border border-white/5">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 flex items-center gap-1 text-[11px] text-amber-400 font-bold">
                <Star size={12} className="fill-amber-400" /> {item.rating}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-sm text-white line-clamp-1">{item.name}</h3>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
                <span className="text-xl font-black text-blue-400">${item.price}</span>
                <button 
                  onClick={() => { setAdded(item.id); setTimeout(() => setAdded(null), 2000); }}
                  className="px-3.5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-extrabold rounded-xl text-xs flex items-center gap-1 shadow-md"
                >
                  <ShoppingBag size={14} /> {added === item.id ? "Added!" : "Quick Add"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 z-10">Handpicked related recommendations with instant 1-click add.</div>
    </div>
  );
}
