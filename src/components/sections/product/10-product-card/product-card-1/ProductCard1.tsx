import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Star, Sparkles, Check } from 'lucide-react';

export default function ProductCard1({ data }: { data?: any }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const colors = [
    { name: "Space Black", bg: "bg-slate-900", border: "border-slate-700", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" },
    { name: "Silver Frost", bg: "bg-slate-300", border: "border-slate-400", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80" },
    { name: "Nordic Gold", bg: "bg-amber-600", border: "border-amber-500", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80" }
  ];

  const handleAddToCart = () => {
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Main Glass Card Container */}
      <motion.div 
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full max-w-sm bg-slate-900/80 border border-white/15 rounded-3xl p-5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative flex flex-col justify-between"
      >
        {/* Floating Top Badges */}
        <div className="flex items-center justify-between z-10 mb-3">
          <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold text-xs rounded-full flex items-center gap-1.5 shadow-sm">
            <Sparkles size={12} /> Bestseller
          </span>

          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="w-9 h-9 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-rose-500 transition-colors backdrop-blur-md"
          >
            <Heart size={18} className={isLiked ? "fill-rose-500 text-rose-500" : ""} />
          </button>
        </div>

        {/* Product Image Frame */}
        <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-950 border border-white/5 mb-4 group">
          <AnimatePresence mode="wait">
            <motion.img 
              key={selectedColor}
              src={colors[selectedColor].image} 
              alt="Studio Headphones" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-white">4.9</span>
            <span className="text-[10px] text-slate-400">(240+)</span>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Wireless Audio</span>
          <h3 className="text-xl font-extrabold text-white leading-tight mb-2">Pro Sound ANC Headphones</h3>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
            Hi-Res Lossless Audio with 40-hour battery life & active adaptive noise cancellation.
          </p>
        </div>

        {/* Color Swatch Picker */}
        <div className="flex items-center justify-between mb-5 pt-3 border-t border-white/10">
          <span className="text-xs font-medium text-slate-400">Color: <strong className="text-white font-bold">{colors[selectedColor].name}</strong></span>
          <div className="flex items-center gap-2">
            {colors.map((col, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(i)}
                className={`w-6 h-6 rounded-full ${col.bg} border-2 ${selectedColor === i ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900 scale-110' : 'border-white/20'} transition-all`}
              />
            ))}
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-medium">Price</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-white">$299</span>
              <span className="text-xs text-slate-500 line-through">$349</span>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-bold rounded-2xl text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all transform hover:scale-105 active:scale-95 shrink-0"
          >
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>

        {/* Added Toast Alert */}
        <AnimatePresence>
          {addedToast && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -bottom-12 left-0 right-0 bg-emerald-500 text-slate-950 font-bold text-xs py-2 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg z-30"
            >
              <Check size={16} className="stroke-[3]" /> Added to Cart!
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
