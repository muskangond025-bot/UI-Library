import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard4({ data }: { data?: any }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-stone-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-stone-900 border border-stone-800 rounded-3xl p-5 shadow-2xl relative">
        
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-stone-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" 
            alt="Wool Blazer" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full border border-amber-500/20">
            Handcrafted
          </span>
        </div>

        <div className="mb-4">
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-500">Luxury Atelier</span>
          <h3 className="text-xl font-black text-stone-100 leading-snug">Italian Merino Wool Coat</h3>
          <p className="text-xs text-stone-400 mt-1 line-clamp-2">Tailored slim-fit silhouette crafted from 100% organic Italian Merino yarn.</p>
        </div>

        {/* Size Selection */}
        <div className="flex items-center justify-between mb-5 pt-3 border-t border-stone-800">
          <span className="text-xs text-stone-400 font-medium">Select Size:</span>
          <div className="flex items-center gap-1.5">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-8 h-8 rounded-xl font-extrabold text-xs transition-all ${
                  selectedSize === size
                    ? 'bg-amber-500 text-stone-950 shadow-md'
                    : 'bg-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] text-stone-400 uppercase block font-semibold">Total Price</span>
            <span className="text-2xl font-black text-white">$485</span>
          </div>

          <button className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}
