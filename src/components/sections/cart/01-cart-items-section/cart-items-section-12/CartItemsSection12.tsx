import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection12Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection12: React.FC<CartItemsSection12Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "MAGAZINE EDITORIAL" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-12 px-4 bg-white dark:bg-stone-950 font-serif">
      <div className="max-w-4xl mx-auto mb-6 border-b border-stone-200 pb-2">
        <h2 className="text-2xl italic">{data?.heading || "12. High-Fashion Magazine Layout"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 aspect-[4/5] bg-stone-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className="md:col-span-7 font-sans space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400">VOLUME 2026 // LINE ITEM</span>
          <h3 className="text-3xl font-serif text-stone-900 dark:text-white leading-tight">{product.name}</h3>
          <p className="text-xs font-mono text-stone-500">{product.variant}</p>
          <blockquote className="text-xs italic text-stone-600 border-l-2 border-stone-900 dark:border-stone-100 pl-3 py-1 font-serif">
            "An indispensable addition to the curated winter wardrobe, combining technical precision with understated elegance."
          </blockquote>
          <div className="pt-4 flex items-center justify-between border-t border-stone-200 dark:border-stone-800">
            <span className="text-2xl font-serif text-stone-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-stone-400 p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-2"><Minus className="w-3 h-3" /></button>
                <span className="px-2 font-mono text-xs">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-2"><Plus className="w-3 h-3" /></button>
              </div>
              <button onClick={() => setIsRemoved(true)} className="text-xs text-rose-600 hover:underline uppercase font-mono">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
